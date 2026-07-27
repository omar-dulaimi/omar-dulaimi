/**
 * Regenerates the README's project tables and the weekly-downloads figure.
 *
 * Stars and downloads are plain text, not badge images. shields.io retired its lifetime-total route
 * (`npm/dt` redirects to an 18-month window), and every badge was an image that had to survive
 * GitHub's proxy before a visitor saw a number. Computing the figures here gives true lifetime totals
 * and leaves the tables with nothing that can fail to load.
 *
 * npm's range endpoint caps at 18 months per request, so a lifetime total means walking the span in
 * chunks. That is a lot of requests, and npm rate-limits: the first version of this script swallowed
 * the 429s and wrote zeros, which is worse than failing. Requests are now throttled and retried, and
 * anything still failing aborts the run rather than publishing a wrong number.
 *
 * Reads .github/data/projects.json. Rewrites only the regions between markers.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const README = 'README.md';
const DATA = '.github/data/projects.json';

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error('GITHUB_TOKEN is required (star counts come from the GitHub API).');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const iso = (d) => d.toISOString().slice(0, 10);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let lastRequest = 0;
const MIN_GAP_MS = 320;

/**
 * One throttled, retrying fetch for everything. `softNotFound` lets a 404 mean "no data for this
 * window" (a package younger than the chunk) instead of an error; every other failure is real.
 */
async function json(url, { headers = {}, softNotFound = false, attempts = 5 } = {}) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const wait = Math.max(0, MIN_GAP_MS - (Date.now() - lastRequest));
    if (wait > 0) await sleep(wait);
    lastRequest = Date.now();

    let res;
    try {
      res = await fetch(url, { headers: { 'user-agent': 'omar-dulaimi-profile-stats', ...headers } });
    } catch (cause) {
      if (attempt === attempts) throw new Error(`network failure for ${url}: ${cause.message}`);
      await sleep(attempt * 1500);
      continue;
    }

    if (res.ok) return res.json();
    if (res.status === 404 && softNotFound) return null;

    // 429 and 5xx are worth waiting out; anything else will not improve on retry.
    if (res.status !== 429 && res.status < 500) {
      throw new Error(`${res.status} ${res.statusText} for ${url}`);
    }
    if (attempt === attempts) throw new Error(`${res.status} after ${attempts} attempts for ${url}`);
    const backoff = attempt * 2500;
    console.log(`  ${res.status} — retrying in ${backoff}ms (${attempt}/${attempts - 1})`);
    await sleep(backoff);
  }
  throw new Error(`unreachable: ${url}`);
}

async function stars(repo) {
  const data = await json(`https://api.github.com/repos/${repo}`, {
    headers: { authorization: `Bearer ${token}`, accept: 'application/vnd.github+json' },
  });
  return data.stargazers_count ?? 0;
}

/** First publish date, so the chunk walk starts at the package's life rather than an arbitrary epoch. */
async function firstPublish(pkg) {
  const data = await json(`https://registry.npmjs.org/${encodeURIComponent(pkg).replace('%40', '@')}`, {
    softNotFound: true,
  });
  const created = data?.time?.created;
  return created ? created.slice(0, 10) : '2015-01-01';
}

/** True lifetime downloads: npm caps a range request at 18 months, so walk it in 17-month chunks. */
async function npmDownloads(pkg) {
  let cursor = await firstPublish(pkg);
  let total = 0;

  while (cursor <= today) {
    const end = new Date(cursor);
    end.setMonth(end.getMonth() + 17);
    const stop = iso(end) < today ? iso(end) : today;

    const data = await json(`https://api.npmjs.org/downloads/range/${cursor}:${stop}/${pkg}`, {
      softNotFound: true,
    });
    for (const day of data?.downloads ?? []) total += day.downloads;

    const next = new Date(stop);
    next.setDate(next.getDate() + 1);
    cursor = iso(next);
  }
  return total;
}

async function npmWeekly(pkg) {
  const data = await json(`https://api.npmjs.org/downloads/point/last-week/${pkg}`, { softNotFound: true });
  return data?.downloads ?? 0;
}

async function vscodeInstalls(extensionId) {
  const res = await fetch('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', {
    method: 'POST',
    headers: { 'content-type': 'application/json', accept: 'application/json;api-version=7.2-preview.1' },
    body: JSON.stringify({
      filters: [{ criteria: [{ filterType: 7, value: extensionId }], pageSize: 1 }],
      flags: 914,
    }),
  });
  if (!res.ok) throw new Error(`marketplace query failed: ${res.status}`);
  const data = await res.json();
  const stats = data?.results?.[0]?.extensions?.[0]?.statistics ?? [];
  const installs = stats.find((s) => s.statisticName === 'install')?.value;
  if (installs === undefined) throw new Error(`no install count for ${extensionId}`);
  return installs;
}

const group = (n) => n.toLocaleString('en-GB');
/** Rounded down: "roughly 112,000 a week" should not imply precision a weekly average lacks. */
const roughly = (n) => (n >= 10_000 ? group(Math.floor(n / 1000) * 1000) : group(n));

function splice(source, marker, replacement) {
  const re = new RegExp(`(<!-- ${marker}:START -->)[\\s\\S]*?(<!-- ${marker}:END -->)`);
  if (!re.test(source)) throw new Error(`Marker ${marker} not found in ${README}`);
  return source.replace(re, `$1${replacement}$2`);
}

const { groups } = JSON.parse(readFileSync(DATA, 'utf8'));
const sections = [];
let weeklyTotal = 0;
let grandTotal = 0;
let published = 0;

for (const g of groups) {
  const lines = [`### ${g.heading}`, ''];
  if (g.blurb) lines.push(g.blurb, '');
  lines.push('| Project | Stars | Downloads |', '| --- | --- | --- |');

  for (const p of g.projects) {
    const name = p.label ?? p.repo.split('/')[1];
    const title = `[${name}](https://github.com/${p.repo})${p.note ? ` — ${p.note}` : ''}`;
    const starCount = await stars(p.repo);

    let cell = '—';
    const pkgs = p.npm ? (Array.isArray(p.npm) ? p.npm : [p.npm]) : [];

    if (pkgs.length > 0) {
      let total = 0;
      for (const pkg of pkgs) {
        total += await npmDownloads(pkg);
        weeklyTotal += await npmWeekly(pkg);
      }
      // A package published days ago has no recorded downloads yet; that is "new", not "unreleased".
      cell = total > 0 ? group(total) : 'new';
      if (total > 0) published += 1;
      grandTotal += total;
    } else if (p.vscode) {
      cell = `${group(await vscodeInstalls(p.vscode))} installs`;
    }

    console.log(`  ${name.padEnd(34)} ${String(starCount).padStart(4)}★  ${cell}`);
    lines.push(`| ${title} | ${group(starCount)} | ${cell} |`);
  }
  sections.push(lines.join('\n'));
}

// A run where nothing resolved means the APIs refused us, not that the packages vanished.
if (published < 5) {
  console.error(`Only ${published} package(s) reported downloads — refusing to write a README of zeros.`);
  process.exit(1);
}

let readme = readFileSync(README, 'utf8');
readme = splice(readme, 'PROJECTS', `\n${sections.join('\n\n')}\n`);
readme = splice(readme, 'WEEKLY-DOWNLOADS', roughly(weeklyTotal));
writeFileSync(README, readme);
// Kept for continuity with the previous workflow, which recorded the all-time total here.
writeFileSync('download_count.txt', `${grandTotal}\n`);

console.log(
  `\n${published} packages with downloads · ${group(grandTotal)} all time · ${roughly(weeklyTotal)} a week`,
);
