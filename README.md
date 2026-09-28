![header](https://user-images.githubusercontent.com/11743389/156879955-cacb8504-006d-42cf-8ea8-8f387ede379c.png)

# Omar Dulaimi

I build code generators and developer tooling, mostly around databases and type-safe APIs.

<!-- TOTALS:START -->
![2,683 stars](https://img.shields.io/badge/stars-2%2C683-343b41?style=flat-square) ![5,509,359 downloads](https://img.shields.io/badge/downloads-5.51M-343b41?style=flat-square)
<!-- TOTALS:END -->

[GitHub](https://github.com/omar-dulaimi) · [LinkedIn](https://www.linkedin.com/in/omar-dulaimi) · [dev.to](https://dev.to/omardulaimi) · [Sponsor](https://github.com/sponsors/omar-dulaimi)

---

## What I work on

Most of my work is codegen: you describe your data once, and the tooling emits the validators, routers
and services that would otherwise be written by hand and drift out of sync.

The largest is **[prisma-zod-generator](https://github.com/omar-dulaimi/prisma-zod-generator)**, which
turns a Prisma schema into Zod schemas. Across my packages that comes to roughly <!-- WEEKLY-DOWNLOADS:START -->148,000<!-- WEEKLY-DOWNLOADS:END --> downloads a week.
Alongside it: generators for Joi, Yup, class-validator and Valibot, permission layers for tRPC and oRPC
(`trpc-shield`, `orpc-shield`), a codegen suite for Drizzle ORM (**DRZL**), and a set of Firebase and
Firestore utilities.

Currently working on extensions for **Prisma Next**, starting with
[prisma-next-zod-json](https://github.com/omar-dulaimi/prisma-next-zod-json), which adds typed JSON
columns validated by Zod.

**Stack:** TypeScript · Node.js · Prisma · Drizzle · tRPC / oRPC · GraphQL · Postgres · Firebase ·
React / Next.js · NestJS

---

## Projects

<sub>Stars and downloads are refreshed weekly by [a workflow](./.github/workflows/update-stats.yml); downloads are all-time npm totals.</sub>

<!-- PROJECTS:START -->
### Prisma

| Project | Stars | Downloads |
| --- | :---: | :---: |
| [prisma-zod-generator](https://github.com/omar-dulaimi/prisma-zod-generator) | ![830 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-zod-generator?style=flat-square&label=&labelColor=343b41) | ![3,900,754 downloads](https://img.shields.io/badge/3.90M-343b41?style=flat-square) |
| [prisma-next-zod-json](https://github.com/omar-dulaimi/prisma-next-zod-json) | ![2 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-next-zod-json?style=flat-square&label=&labelColor=343b41) | ![newly published](https://img.shields.io/badge/new-6f42c1?style=flat-square) |
| [prisma-class-validator-generator](https://github.com/omar-dulaimi/prisma-class-validator-generator) | ![91 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-class-validator-generator?style=flat-square&label=&labelColor=343b41) | ![251,367 downloads](https://img.shields.io/badge/251.37K-343b41?style=flat-square) |
| [prisma-trpc-generator](https://github.com/omar-dulaimi/prisma-trpc-generator) | ![739 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-trpc-generator?style=flat-square&label=&labelColor=343b41) | ![247,569 downloads](https://img.shields.io/badge/247.57K-343b41?style=flat-square) |
| [prisma-trpc-shield-generator](https://github.com/omar-dulaimi/prisma-trpc-shield-generator) | ![52 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-trpc-shield-generator?style=flat-square&label=&labelColor=343b41) | ![241,643 downloads](https://img.shields.io/badge/241.64K-343b41?style=flat-square) |
| [prisma-orpc-generator](https://github.com/omar-dulaimi/prisma-orpc-generator) | ![38 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-orpc-generator?style=flat-square&label=&labelColor=343b41) | ![5,941 downloads](https://img.shields.io/badge/5.94K-343b41?style=flat-square) |
| [prisma-joi-generator](https://github.com/omar-dulaimi/prisma-joi-generator) | ![45 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-joi-generator?style=flat-square&label=&labelColor=343b41) | ![60,009 downloads](https://img.shields.io/badge/60.01K-343b41?style=flat-square) |
| [prisma-yup-generator](https://github.com/omar-dulaimi/prisma-yup-generator) | ![56 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-yup-generator?style=flat-square&label=&labelColor=343b41) | ![135,866 downloads](https://img.shields.io/badge/135.87K-343b41?style=flat-square) |
| [prisma-valibot-generator](https://github.com/omar-dulaimi/prisma-valibot-generator) | ![9 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-valibot-generator?style=flat-square&label=&labelColor=343b41) | ![3,351 downloads](https://img.shields.io/badge/3.35K-343b41?style=flat-square) |
| [prisma-schema-sorter](https://github.com/omar-dulaimi/prisma-schema-sorter) | ![25 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-schema-sorter?style=flat-square&label=&labelColor=343b41) | ![139,281 downloads](https://img.shields.io/badge/139.28K-343b41?style=flat-square) |
| [prisma-json-server-generator](https://github.com/omar-dulaimi/prisma-json-server-generator) | ![28 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-json-server-generator?style=flat-square&label=&labelColor=343b41) | ![6,181 downloads](https://img.shields.io/badge/6.18K-343b41?style=flat-square) |
| [prisma-custom-models-generator](https://github.com/omar-dulaimi/prisma-custom-models-generator) | ![22 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-custom-models-generator?style=flat-square&label=&labelColor=343b41) | ![13,720 downloads](https://img.shields.io/badge/13.72K-343b41?style=flat-square) |
| [prisma-query-inspector](https://github.com/omar-dulaimi/prisma-query-inspector) | ![10 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-query-inspector?style=flat-square&label=&labelColor=343b41) | ![19,074 downloads](https://img.shields.io/badge/19.07K-343b41?style=flat-square) |
| [json-to-prisma-schema-convertor](https://github.com/omar-dulaimi/json-to-prisma-schema-convertor) | ![48 stars](https://img.shields.io/github/stars/omar-dulaimi/json-to-prisma-schema-convertor?style=flat-square&label=&labelColor=343b41) | ![9,695 downloads](https://img.shields.io/badge/9.70K-343b41?style=flat-square) |

### tRPC and oRPC

| Project | Stars | Downloads |
| --- | :---: | :---: |
| [trpc-shield](https://github.com/omar-dulaimi/trpc-shield) | ![435 stars](https://img.shields.io/github/stars/omar-dulaimi/trpc-shield?style=flat-square&label=&labelColor=343b41) | ![252,730 downloads](https://img.shields.io/badge/252.73K-343b41?style=flat-square) |
| [orpc-shield](https://github.com/omar-dulaimi/orpc-shield) | ![62 stars](https://img.shields.io/github/stars/omar-dulaimi/orpc-shield?style=flat-square&label=&labelColor=343b41) | ![6,000 downloads](https://img.shields.io/badge/6.00K-343b41?style=flat-square) |
| [create-trpc-app](https://github.com/omar-dulaimi/create-trpc-app) | ![30 stars](https://img.shields.io/github/stars/omar-dulaimi/create-trpc-app?style=flat-square&label=&labelColor=343b41) | ![6,830 downloads](https://img.shields.io/badge/6.83K-343b41?style=flat-square) |

### Drizzle ORM

[**DRZL**](https://github.com/use-drzl/drzl) is adapter-based codegen for Drizzle: Zod, Valibot and ArkType validators, typed CRUD services, and oRPC routers from your existing schema.

| Project | Stars | Downloads |
| --- | :---: | :---: |
| [use-drzl/drzl](https://github.com/use-drzl/drzl) | ![108 stars](https://img.shields.io/github/stars/use-drzl/drzl?style=flat-square&label=&labelColor=343b41) | ![199,285 downloads](https://img.shields.io/badge/199.28K-343b41?style=flat-square) |

### Firebase and Firestore

| Project | Stars | Downloads |
| --- | :---: | :---: |
| [firescope](https://github.com/omar-dulaimi/firescope) (Chrome DevTools panel for Firestore) | ![9 stars](https://img.shields.io/github/stars/omar-dulaimi/firescope?style=flat-square&label=&labelColor=343b41) | not on npm |
| [firestore-prisma](https://github.com/omar-dulaimi/firestore-prisma) | ![11 stars](https://img.shields.io/github/stars/omar-dulaimi/firestore-prisma?style=flat-square&label=&labelColor=343b41) | ![930 downloads](https://img.shields.io/badge/930-343b41?style=flat-square) |
| [firebase-functions-downloader](https://github.com/omar-dulaimi/firebase-functions-downloader) | ![4 stars](https://img.shields.io/github/stars/omar-dulaimi/firebase-functions-downloader?style=flat-square&label=&labelColor=343b41) | ![1,391 downloads](https://img.shields.io/badge/1.39K-343b41?style=flat-square) |
| [firestore-indexes-diff](https://github.com/omar-dulaimi/firestore-indexes-diff) | ![3 stars](https://img.shields.io/github/stars/omar-dulaimi/firestore-indexes-diff?style=flat-square&label=&labelColor=343b41) | ![757 downloads](https://img.shields.io/badge/757-343b41?style=flat-square) |
| [lang-firestore](https://github.com/omar-dulaimi/lang-firestore) | ![4 stars](https://img.shields.io/github/stars/omar-dulaimi/lang-firestore?style=flat-square&label=&labelColor=343b41) | ![796 downloads](https://img.shields.io/badge/796-343b41?style=flat-square) |

### Other tools

| Project | Stars | Downloads |
| --- | :---: | :---: |
| [breakpoint-bookmarks](https://github.com/omar-dulaimi/breakpoint-bookmarks) (VS Code extension) | ![12 stars](https://img.shields.io/github/stars/omar-dulaimi/breakpoint-bookmarks?style=flat-square&label=&labelColor=343b41) | ![3,011 installs](https://img.shields.io/badge/3.01K_installs-343b41?style=flat-square) |
| [graphql-shield-generator](https://github.com/omar-dulaimi/graphql-shield-generator) | ![10 stars](https://img.shields.io/github/stars/omar-dulaimi/graphql-shield-generator?style=flat-square&label=&labelColor=343b41) | ![6,189 downloads](https://img.shields.io/badge/6.19K-343b41?style=flat-square) |
<!-- PROJECTS:END -->

---

## Contributions

[next-seo](https://github.com/garmeeh/next-seo) · [nookies](https://github.com/maticzav/nookies) ·
[nestjs-prisma](https://github.com/notiz-dev/nestjs-prisma)

---

## Writing

<!-- BLOG-POST-LIST:START -->
- [I built FireScope: a Chrome DevTools panel for Firestore &lpar;open-source&rpar;](https://dev.to/omardulaimi/i-built-firescope-a-chrome-devtools-panel-for-firestore-open-source-48g0)
- [DRZL — Adapter‑based codegen for Drizzle ORM &lpar;oRPC routers, services, and validators&rpar;](https://dev.to/omardulaimi/drzl-adapter-based-codegen-for-drizzle-orm-orpc-routers-services-and-validators-1fjp)
- [Stop losing your breakpoints: Meet Breakpoint Bookmarks for VS Code](https://dev.to/omardulaimi/stop-losing-your-breakpoints-meet-breakpoint-bookmarks-for-vs-code-3c4b)
- [Full JavaScript Internationalization CheatSheet!](https://dev.to/omardulaimi/full-javascript-internationalization-cheatsheet-3fo)
- [How to change access and modification times in Nodejs?](https://dev.to/omardulaimi/how-to-change-access-and-modification-times-in-nodejs-4mm3)
- [How to create symbolic links in Nodejs?](https://dev.to/omardulaimi/how-to-create-symbolic-links-in-nodejs-3i3i)
- [How to copy a file in Nodejs?](https://dev.to/omardulaimi/how-to-copy-a-file-in-nodejs-52pl)
- [How to append contents to a file in Nodejs?](https://dev.to/omardulaimi/how-to-append-contents-to-a-file-in-nodejs-2fk6)
- [What is the best way to read directories in Nodejs?](https://dev.to/omardulaimi/what-is-the-best-way-to-read-directories-in-nodejs-3le2)
- [How to create unique temporary directories in Nodejs?](https://dev.to/omardulaimi/how-to-create-unique-temporary-directories-in-nodejs-1n69)
- [Full ES2022 Cheatsheet!](https://dev.to/omardulaimi/full-es2022-cheatsheet-4m9l)
- [How to change ownership of a file in Nodejs?](https://dev.to/omardulaimi/how-to-change-ownership-of-a-file-in-nodejs-1fke)
<!-- BLOG-POST-LIST:END -->

---

If any of these save you time, [sponsoring](https://github.com/sponsors/omar-dulaimi) helps me keep
maintaining them.
