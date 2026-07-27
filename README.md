![header](https://user-images.githubusercontent.com/11743389/156879955-cacb8504-006d-42cf-8ea8-8f387ede379c.png)

# Omar Dulaimi

I build code generators and developer tooling, mostly around databases and type-safe APIs.

[GitHub](https://github.com/omar-dulaimi) · [LinkedIn](https://www.linkedin.com/in/omar-dulaimi) · [dev.to](https://dev.to/omardulaimi) · [Sponsor](https://github.com/sponsors/omar-dulaimi)

---

## What I work on

Most of my work is codegen: you describe your data once, and the tooling emits the validators, routers
and services that would otherwise be written by hand and drift out of sync.

The largest is **[prisma-zod-generator](https://github.com/omar-dulaimi/prisma-zod-generator)**, which
turns a Prisma schema into Zod schemas. Across my packages that comes to roughly <!-- WEEKLY-DOWNLOADS:START -->116,000<!-- WEEKLY-DOWNLOADS:END --> downloads a week.
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

<sub>Stars and downloads are refreshed weekly by [a workflow](./.github/workflows/update-stats.yml); downloads are all-time npm totals.</sub>

<!-- PROJECTS:START -->
### Prisma

| Project | Stars | Downloads |
| --- | --- | --- |
| [prisma-zod-generator](https://github.com/omar-dulaimi/prisma-zod-generator) | 822 | 2,999,721 |
| [prisma-next-zod-json](https://github.com/omar-dulaimi/prisma-next-zod-json) | 1 | new |
| [prisma-class-validator-generator](https://github.com/omar-dulaimi/prisma-class-validator-generator) | 91 | 238,013 |
| [prisma-trpc-generator](https://github.com/omar-dulaimi/prisma-trpc-generator) | 740 | 243,479 |
| [prisma-trpc-shield-generator](https://github.com/omar-dulaimi/prisma-trpc-shield-generator) | 52 | 237,506 |
| [prisma-orpc-generator](https://github.com/omar-dulaimi/prisma-orpc-generator) | 38 | 4,557 |
| [prisma-joi-generator](https://github.com/omar-dulaimi/prisma-joi-generator) | 45 | 47,107 |
| [prisma-yup-generator](https://github.com/omar-dulaimi/prisma-yup-generator) | 56 | 134,850 |
| [prisma-valibot-generator](https://github.com/omar-dulaimi/prisma-valibot-generator) | 9 | 2,243 |
| [prisma-schema-sorter](https://github.com/omar-dulaimi/prisma-schema-sorter) | 25 | 131,677 |
| [prisma-json-server-generator](https://github.com/omar-dulaimi/prisma-json-server-generator) | 28 | 5,660 |
| [prisma-custom-models-generator](https://github.com/omar-dulaimi/prisma-custom-models-generator) | 22 | 13,263 |
| [prisma-query-inspector](https://github.com/omar-dulaimi/prisma-query-inspector) | 10 | 18,494 |
| [json-to-prisma-schema-convertor](https://github.com/omar-dulaimi/json-to-prisma-schema-convertor) | 48 | 7,750 |

### tRPC and oRPC

| Project | Stars | Downloads |
| --- | --- | --- |
| [trpc-shield](https://github.com/omar-dulaimi/trpc-shield) | 431 | 215,365 |
| [orpc-shield](https://github.com/omar-dulaimi/orpc-shield) | 60 | 5,526 |
| [create-trpc-app](https://github.com/omar-dulaimi/create-trpc-app) | 29 | 6,153 |

### Drizzle ORM

[**DRZL**](https://github.com/use-drzl/drzl) — adapter-based codegen for Drizzle: Zod, Valibot and ArkType validators, typed CRUD services, and oRPC routers from your existing schema.

| Project | Stars | Downloads |
| --- | --- | --- |
| [use-drzl/drzl](https://github.com/use-drzl/drzl) | 106 | 102,626 |

### Firebase and Firestore

| Project | Stars | Downloads |
| --- | --- | --- |
| [firescope](https://github.com/omar-dulaimi/firescope) — Chrome DevTools panel for Firestore | 8 | — |
| [firestore-prisma](https://github.com/omar-dulaimi/firestore-prisma) | 10 | 711 |
| [firebase-functions-downloader](https://github.com/omar-dulaimi/firebase-functions-downloader) | 4 | 1,107 |
| [firestore-indexes-diff](https://github.com/omar-dulaimi/firestore-indexes-diff) | 3 | 543 |
| [lang-firestore](https://github.com/omar-dulaimi/lang-firestore) | 4 | 586 |

### Other tools

| Project | Stars | Downloads |
| --- | --- | --- |
| [breakpoint-bookmarks](https://github.com/omar-dulaimi/breakpoint-bookmarks) — VS Code extension | 11 | 2,968 installs |
| [graphql-shield-generator](https://github.com/omar-dulaimi/graphql-shield-generator) | 10 | 5,675 |
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
