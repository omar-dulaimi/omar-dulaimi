![header](https://user-images.githubusercontent.com/11743389/156879955-cacb8504-006d-42cf-8ea8-8f387ede379c.png)

# Omar Dulaimi

I build code generators and developer tooling, mostly around databases and type-safe APIs.

[GitHub](https://github.com/omar-dulaimi) · [LinkedIn](https://www.linkedin.com/in/omar-dulaimi) · [dev.to](https://dev.to/omardulaimi) · [Sponsor](https://github.com/sponsors/omar-dulaimi)

---

## What I work on

Most of my work is codegen: you describe your data once, and the tooling emits the validators, routers
and services that would otherwise be written by hand and drift out of sync.

The largest is **[prisma-zod-generator](https://github.com/omar-dulaimi/prisma-zod-generator)**, which
turns a Prisma schema into Zod schemas and is downloaded around
<!-- WEEKLY-DOWNLOADS:START -->112,000<!-- WEEKLY-DOWNLOADS:END --> times a week across my packages.
Alongside it: generators for Joi, Yup, class-validator and Valibot, permission layers for tRPC and oRPC
(`trpc-shield`, `orpc-shield`), a codegen suite for Drizzle ORM (**DRZL**), and a set of Firebase and
Firestore utilities.

Currently working on extensions for **Prisma Next**, starting with
[prisma-next-zod-json](https://github.com/omar-dulaimi/prisma-next-zod-json) — typed JSON columns
validated by Zod.

**Stack:** TypeScript · Node.js · Prisma · Drizzle · tRPC / oRPC · GraphQL · Postgres · Firebase ·
React / Next.js · NestJS

---

## Projects

### Prisma

| Project | Stars | Downloads |
| --- | --- | --- |
| [prisma-zod-generator](https://github.com/omar-dulaimi/prisma-zod-generator) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-zod-generator?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-zod-generator?style=flat-square&label=&labelColor=343b41) |
| [prisma-next-zod-json](https://github.com/omar-dulaimi/prisma-next-zod-json) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-next-zod-json?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-next-zod-json?style=flat-square&label=&labelColor=343b41) |
| [prisma-class-validator-generator](https://github.com/omar-dulaimi/prisma-class-validator-generator) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-class-validator-generator?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-class-validator-generator?style=flat-square&label=&labelColor=343b41) |
| [prisma-trpc-generator](https://github.com/omar-dulaimi/prisma-trpc-generator) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-trpc-generator?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-trpc-generator?style=flat-square&label=&labelColor=343b41) |
| [prisma-trpc-shield-generator](https://github.com/omar-dulaimi/prisma-trpc-shield-generator) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-trpc-shield-generator?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-trpc-shield-generator?style=flat-square&label=&labelColor=343b41) |
| [prisma-orpc-generator](https://github.com/omar-dulaimi/prisma-orpc-generator) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-orpc-generator?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-orpc-generator?style=flat-square&label=&labelColor=343b41) |
| [prisma-joi-generator](https://github.com/omar-dulaimi/prisma-joi-generator) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-joi-generator?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-joi-generator?style=flat-square&label=&labelColor=343b41) |
| [prisma-yup-generator](https://github.com/omar-dulaimi/prisma-yup-generator) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-yup-generator?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-yup-generator?style=flat-square&label=&labelColor=343b41) |
| [prisma-valibot-generator](https://github.com/omar-dulaimi/prisma-valibot-generator) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-valibot-generator?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-valibot-generator?style=flat-square&label=&labelColor=343b41) |
| [prisma-schema-sorter](https://github.com/omar-dulaimi/prisma-schema-sorter) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-schema-sorter?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-schema-sorter?style=flat-square&label=&labelColor=343b41) |
| [prisma-json-server-generator](https://github.com/omar-dulaimi/prisma-json-server-generator) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-json-server-generator?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-json-server-generator?style=flat-square&label=&labelColor=343b41) |
| [prisma-custom-models-generator](https://github.com/omar-dulaimi/prisma-custom-models-generator) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-custom-models-generator?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-custom-models-generator?style=flat-square&label=&labelColor=343b41) |
| [prisma-query-inspector](https://github.com/omar-dulaimi/prisma-query-inspector) | ![](https://img.shields.io/github/stars/omar-dulaimi/prisma-query-inspector?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/prisma-query-inspector?style=flat-square&label=&labelColor=343b41) |
| [json-to-prisma-schema-convertor](https://github.com/omar-dulaimi/json-to-prisma-schema-convertor) | ![](https://img.shields.io/github/stars/omar-dulaimi/json-to-prisma-schema-convertor?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/json-to-prisma-schema-convertor?style=flat-square&label=&labelColor=343b41) |

### tRPC and oRPC

| Project | Stars | Downloads |
| --- | --- | --- |
| [trpc-shield](https://github.com/omar-dulaimi/trpc-shield) | ![](https://img.shields.io/github/stars/omar-dulaimi/trpc-shield?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/trpc-shield?style=flat-square&label=&labelColor=343b41) |
| [orpc-shield](https://github.com/omar-dulaimi/orpc-shield) | ![](https://img.shields.io/github/stars/omar-dulaimi/orpc-shield?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/orpc-shield?style=flat-square&label=&labelColor=343b41) |
| [create-trpc-app](https://github.com/omar-dulaimi/create-trpc-app) | ![](https://img.shields.io/github/stars/omar-dulaimi/create-trpc-app?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/create-trpc-appx?style=flat-square&label=&labelColor=343b41) |

### Drizzle ORM

[**DRZL**](https://github.com/use-drzl/drzl) — adapter-based codegen for Drizzle: Zod, Valibot and
ArkType validators, typed CRUD services, and oRPC routers from your existing schema.

| Project | Stars | Downloads |
| --- | --- | --- |
| [use-drzl/drzl](https://github.com/use-drzl/drzl) | ![](https://img.shields.io/github/stars/use-drzl/drzl?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/@drzl/cli?style=flat-square&label=&labelColor=343b41) |

### Firebase and Firestore

| Project | Stars | Downloads |
| --- | --- | --- |
| [firescope](https://github.com/omar-dulaimi/firescope) — Chrome DevTools panel for Firestore | ![](https://img.shields.io/github/stars/omar-dulaimi/firescope?style=flat-square&label=&labelColor=343b41) | — |
| [firestore-prisma](https://github.com/omar-dulaimi/firestore-prisma) | ![](https://img.shields.io/github/stars/omar-dulaimi/firestore-prisma?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/firestore-prisma?style=flat-square&label=&labelColor=343b41) |
| [firebase-functions-downloader](https://github.com/omar-dulaimi/firebase-functions-downloader) | ![](https://img.shields.io/github/stars/omar-dulaimi/firebase-functions-downloader?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/firebase-functions-downloader?style=flat-square&label=&labelColor=343b41) |
| [firestore-indexes-diff](https://github.com/omar-dulaimi/firestore-indexes-diff) | ![](https://img.shields.io/github/stars/omar-dulaimi/firestore-indexes-diff?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/firestore-indexes-diff?style=flat-square&label=&labelColor=343b41) |
| [lang-firestore](https://github.com/omar-dulaimi/lang-firestore) | ![](https://img.shields.io/github/stars/omar-dulaimi/lang-firestore?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/lang-firestore?style=flat-square&label=&labelColor=343b41) |

### Other tools

| Project | Stars | Downloads |
| --- | --- | --- |
| [breakpoint-bookmarks](https://github.com/omar-dulaimi/breakpoint-bookmarks) — VS Code extension | ![](https://img.shields.io/github/stars/omar-dulaimi/breakpoint-bookmarks?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/visual-studio-marketplace/d/OmarDulaimi.breakpoint-bookmarks?style=flat-square&label=&labelColor=343b41) |
| [graphql-shield-generator](https://github.com/omar-dulaimi/graphql-shield-generator) | ![](https://img.shields.io/github/stars/omar-dulaimi/graphql-shield-generator?style=flat-square&label=&labelColor=343b41) | ![](https://img.shields.io/npm/dt/graphql-shield-generator?style=flat-square&label=&labelColor=343b41) |

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
