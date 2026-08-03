![header](https://user-images.githubusercontent.com/11743389/156879955-cacb8504-006d-42cf-8ea8-8f387ede379c.png)

# Omar Dulaimi

I build code generators and developer tooling, mostly around databases and type-safe APIs.

<!-- TOTALS:START -->
![2,665 stars](https://img.shields.io/badge/stars-2%2C665-343b41?style=flat-square) ![4,562,178 downloads](https://img.shields.io/badge/downloads-4.56M-343b41?style=flat-square)
<!-- TOTALS:END -->

[GitHub](https://github.com/omar-dulaimi) · [LinkedIn](https://www.linkedin.com/in/omar-dulaimi) · [dev.to](https://dev.to/omardulaimi) · [Sponsor](https://github.com/sponsors/omar-dulaimi)

---

## What I work on

Most of my work is codegen: you describe your data once, and the tooling emits the validators, routers
and services that would otherwise be written by hand and drift out of sync.

The largest is **[prisma-zod-generator](https://github.com/omar-dulaimi/prisma-zod-generator)**, which
turns a Prisma schema into Zod schemas. Across my packages that comes to roughly <!-- WEEKLY-DOWNLOADS:START -->139,000<!-- WEEKLY-DOWNLOADS:END --> downloads a week.
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
| [prisma-zod-generator](https://github.com/omar-dulaimi/prisma-zod-generator) | ![822 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-zod-generator?style=flat-square&label=&labelColor=343b41) | ![3,102,596 downloads](https://img.shields.io/badge/3.10M-343b41?style=flat-square) |
| [prisma-next-zod-json](https://github.com/omar-dulaimi/prisma-next-zod-json) | ![1 star](https://img.shields.io/github/stars/omar-dulaimi/prisma-next-zod-json?style=flat-square&label=&labelColor=343b41) | ![289 downloads](https://img.shields.io/badge/289-343b41?style=flat-square) |
| [prisma-class-validator-generator](https://github.com/omar-dulaimi/prisma-class-validator-generator) | ![91 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-class-validator-generator?style=flat-square&label=&labelColor=343b41) | ![239,684 downloads](https://img.shields.io/badge/239.68K-343b41?style=flat-square) |
| [prisma-trpc-generator](https://github.com/omar-dulaimi/prisma-trpc-generator) | ![738 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-trpc-generator?style=flat-square&label=&labelColor=343b41) | ![244,292 downloads](https://img.shields.io/badge/244.29K-343b41?style=flat-square) |
| [prisma-trpc-shield-generator](https://github.com/omar-dulaimi/prisma-trpc-shield-generator) | ![52 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-trpc-shield-generator?style=flat-square&label=&labelColor=343b41) | ![238,304 downloads](https://img.shields.io/badge/238.30K-343b41?style=flat-square) |
| [prisma-orpc-generator](https://github.com/omar-dulaimi/prisma-orpc-generator) | ![38 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-orpc-generator?style=flat-square&label=&labelColor=343b41) | ![4,907 downloads](https://img.shields.io/badge/4.91K-343b41?style=flat-square) |
| [prisma-joi-generator](https://github.com/omar-dulaimi/prisma-joi-generator) | ![45 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-joi-generator?style=flat-square&label=&labelColor=343b41) | ![48,332 downloads](https://img.shields.io/badge/48.33K-343b41?style=flat-square) |
| [prisma-yup-generator](https://github.com/omar-dulaimi/prisma-yup-generator) | ![56 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-yup-generator?style=flat-square&label=&labelColor=343b41) | ![135,074 downloads](https://img.shields.io/badge/135.07K-343b41?style=flat-square) |
| [prisma-valibot-generator](https://github.com/omar-dulaimi/prisma-valibot-generator) | ![9 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-valibot-generator?style=flat-square&label=&labelColor=343b41) | ![2,424 downloads](https://img.shields.io/badge/2.42K-343b41?style=flat-square) |
| [prisma-schema-sorter](https://github.com/omar-dulaimi/prisma-schema-sorter) | ![25 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-schema-sorter?style=flat-square&label=&labelColor=343b41) | ![132,526 downloads](https://img.shields.io/badge/132.53K-343b41?style=flat-square) |
| [prisma-json-server-generator](https://github.com/omar-dulaimi/prisma-json-server-generator) | ![28 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-json-server-generator?style=flat-square&label=&labelColor=343b41) | ![5,906 downloads](https://img.shields.io/badge/5.91K-343b41?style=flat-square) |
| [prisma-custom-models-generator](https://github.com/omar-dulaimi/prisma-custom-models-generator) | ![22 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-custom-models-generator?style=flat-square&label=&labelColor=343b41) | ![13,419 downloads](https://img.shields.io/badge/13.42K-343b41?style=flat-square) |
| [prisma-query-inspector](https://github.com/omar-dulaimi/prisma-query-inspector) | ![10 stars](https://img.shields.io/github/stars/omar-dulaimi/prisma-query-inspector?style=flat-square&label=&labelColor=343b41) | ![18,711 downloads](https://img.shields.io/badge/18.71K-343b41?style=flat-square) |
| [json-to-prisma-schema-convertor](https://github.com/omar-dulaimi/json-to-prisma-schema-convertor) | ![48 stars](https://img.shields.io/github/stars/omar-dulaimi/json-to-prisma-schema-convertor?style=flat-square&label=&labelColor=343b41) | ![7,930 downloads](https://img.shields.io/badge/7.93K-343b41?style=flat-square) |

### tRPC and oRPC

| Project | Stars | Downloads |
| --- | :---: | :---: |
| [trpc-shield](https://github.com/omar-dulaimi/trpc-shield) | ![433 stars](https://img.shields.io/github/stars/omar-dulaimi/trpc-shield?style=flat-square&label=&labelColor=343b41) | ![220,245 downloads](https://img.shields.io/badge/220.25K-343b41?style=flat-square) |
| [orpc-shield](https://github.com/omar-dulaimi/orpc-shield) | ![62 stars](https://img.shields.io/github/stars/omar-dulaimi/orpc-shield?style=flat-square&label=&labelColor=343b41) | ![5,768 downloads](https://img.shields.io/badge/5.77K-343b41?style=flat-square) |
| [create-trpc-app](https://github.com/omar-dulaimi/create-trpc-app) | ![29 stars](https://img.shields.io/github/stars/omar-dulaimi/create-trpc-app?style=flat-square&label=&labelColor=343b41) | ![6,424 downloads](https://img.shields.io/badge/6.42K-343b41?style=flat-square) |

### Drizzle ORM

[**DRZL**](https://github.com/use-drzl/drzl) is adapter-based codegen for Drizzle: Zod, Valibot and ArkType validators, typed CRUD services, and oRPC routers from your existing schema.

| Project | Stars | Downloads |
| --- | :---: | :---: |
| [use-drzl/drzl](https://github.com/use-drzl/drzl) | ![106 stars](https://img.shields.io/github/stars/use-drzl/drzl?style=flat-square&label=&labelColor=343b41) | ![125,841 downloads](https://img.shields.io/badge/125.84K-343b41?style=flat-square) |

### Firebase and Firestore

| Project | Stars | Downloads |
| --- | :---: | :---: |
| [firescope](https://github.com/omar-dulaimi/firescope) (Chrome DevTools panel for Firestore) | ![8 stars](https://img.shields.io/github/stars/omar-dulaimi/firescope?style=flat-square&label=&labelColor=343b41) | not on npm |
| [firestore-prisma](https://github.com/omar-dulaimi/firestore-prisma) | ![10 stars](https://img.shields.io/github/stars/omar-dulaimi/firestore-prisma?style=flat-square&label=&labelColor=343b41) | ![875 downloads](https://img.shields.io/badge/875-343b41?style=flat-square) |
| [firebase-functions-downloader](https://github.com/omar-dulaimi/firebase-functions-downloader) | ![4 stars](https://img.shields.io/github/stars/omar-dulaimi/firebase-functions-downloader?style=flat-square&label=&labelColor=343b41) | ![1,300 downloads](https://img.shields.io/badge/1.30K-343b41?style=flat-square) |
| [firestore-indexes-diff](https://github.com/omar-dulaimi/firestore-indexes-diff) | ![3 stars](https://img.shields.io/github/stars/omar-dulaimi/firestore-indexes-diff?style=flat-square&label=&labelColor=343b41) | ![710 downloads](https://img.shields.io/badge/710-343b41?style=flat-square) |
| [lang-firestore](https://github.com/omar-dulaimi/lang-firestore) | ![4 stars](https://img.shields.io/github/stars/omar-dulaimi/lang-firestore?style=flat-square&label=&labelColor=343b41) | ![740 downloads](https://img.shields.io/badge/740-343b41?style=flat-square) |

### Other tools

| Project | Stars | Downloads |
| --- | :---: | :---: |
| [breakpoint-bookmarks](https://github.com/omar-dulaimi/breakpoint-bookmarks) (VS Code extension) | ![11 stars](https://img.shields.io/github/stars/omar-dulaimi/breakpoint-bookmarks?style=flat-square&label=&labelColor=343b41) | ![2,973 installs](https://img.shields.io/badge/2.97K_installs-343b41?style=flat-square) |
| [graphql-shield-generator](https://github.com/omar-dulaimi/graphql-shield-generator) | ![10 stars](https://img.shields.io/github/stars/omar-dulaimi/graphql-shield-generator?style=flat-square&label=&labelColor=343b41) | ![5,881 downloads](https://img.shields.io/badge/5.88K-343b41?style=flat-square) |
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
