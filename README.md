This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), but now supercharged for Cloudflare Workers using [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

## Getting Started

Fire up the dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app in action.

Edit `app/page.tsx` (or any other page). Changes show up instantly.

Fonts are handled by [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts), with [Geist](https://vercel.com/font) as the default.

## Learn More

Want more? Dive deeper:

- [Next.js Docs](https://nextjs.org/docs) — features, APIs, and how-tos.
- [Learn Next.js](https://nextjs.org/learn) — interactive, hands-on tutorial.
- [OpenNext Cloudflare Docs](https://opennext.js.org/cloudflare) — deploying Next.js to Cloudflare Workers.
- [Next.js GitHub](https://github.com/vercel/next.js) — contribute or snoop the code.

## Deploy on Cloudflare

Ready for prime time? Deploy to Cloudflare Workers:

```bash
npx wrangler deploy
```

Check your Worker size (`wrangler` will warn you if you’re too big for the free plan).

For details, see the [OpenNext deployment docs](https://opennext.js.org/cloudflare/get-started).

---

Edit. Preview. Deploy. Repeat. Next step: make something people want.

Directory structure:
└── opennextjs-opennextjs-cloudflare/
    ├── README.md
    ├── CONTRIBUTING.md
    ├── LICENSE
    ├── package.json
    ├── pnpm-lock.yaml
    ├── pnpm-workspace.yaml
    ├── .editorconfig
    ├── .prettierignore
    ├── .prettierrc
    ├── benchmarking/
    │   ├── README.md
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── src/
    │       ├── benchmarking.ts
    │       ├── cloudflare.ts
    │       ├── index.ts
    │       └── utils.ts
    ├── examples/
    │   ├── bugs/
    │   │   ├── gh-119/
    │   │   │   ├── README.md
    │   │   │   ├── next.config.ts
    │   │   │   ├── open-next.config.ts
    │   │   │   ├── package.json
    │   │   │   ├── postcss.config.mjs
    │   │   │   ├── tailwind.config.ts
    │   │   │   ├── tsconfig.json
    │   │   │   ├── wrangler.jsonc
    │   │   │   ├── .eslintrc.json
    │   │   │   ├── app/
    │   │   │   │   ├── globals.css
    │   │   │   │   ├── layout.tsx
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── fonts/
    │   │   │   │       ├── GeistMonoVF.woff
    │   │   │   │       └── GeistVF.woff
    │   │   │   └── e2e/
    │   │   │       ├── base.spec.ts
    │   │   │       └── playwright.config.ts
    │   │   ├── gh-219/
    │   │   │   ├── README.md
    │   │   │   ├── eslint.config.mjs
    │   │   │   ├── next.config.ts
    │   │   │   ├── open-next.config.ts
    │   │   │   ├── package.json
    │   │   │   ├── postcss.config.mjs
    │   │   │   ├── tailwind.config.ts
    │   │   │   ├── tsconfig.json
    │   │   │   ├── wrangler.jsonc
    │   │   │   ├── .dev.vars
    │   │   │   ├── e2e/
    │   │   │   │   ├── base.spec.ts
    │   │   │   │   └── playwright.config.ts
    │   │   │   └── src/
    │   │   │       ├── app/
    │   │   │       │   ├── globals.css
    │   │   │       │   ├── layout.tsx
    │   │   │       │   └── page.tsx
    │   │   │       └── firebase/
    │   │   │           └── config.js
    │   │   └── gh-223/
    │   │       ├── README.md
    │   │       ├── next.config.mjs
    │   │       ├── open-next.config.ts
    │   │       ├── package.json
    │   │       ├── postcss.config.mjs
    │   │       ├── tailwind.config.ts
    │   │       ├── tsconfig.json
    │   │       ├── wrangler.jsonc
    │   │       ├── .eslintrc.json
    │   │       ├── app/
    │   │       │   ├── globals.css
    │   │       │   ├── layout.tsx
    │   │       │   ├── page.tsx
    │   │       │   └── api/
    │   │       │       └── image/
    │   │       │           └── route.ts
    │   │       ├── e2e/
    │   │       │   ├── base.spec.ts
    │   │       │   └── playwright.config.ts
    │   │       └── src/
    │   │           └── utils/
    │   │               ├── common.ts
    │   │               └── s3Bucket.ts
    │   ├── common/
    │   │   ├── apps.ts
    │   │   ├── config-e2e.ts
    │   │   ├── package.json
    │   │   └── tsconfig.json
    │   ├── create-next-app/
    │   │   ├── README.md
    │   │   ├── next.config.mjs
    │   │   ├── open-next.config.ts
    │   │   ├── package.json
    │   │   ├── postcss.config.mjs
    │   │   ├── tailwind.config.ts
    │   │   ├── tsconfig.json
    │   │   ├── wrangler.jsonc
    │   │   ├── .eslintrc.json
    │   │   ├── e2e/
    │   │   │   ├── base.spec.ts
    │   │   │   └── playwright.config.ts
    │   │   └── src/
    │   │       └── app/
    │   │           ├── globals.css
    │   │           ├── layout.tsx
    │   │           ├── page.tsx
    │   │           └── fonts/
    │   │               ├── GeistMonoVF.woff
    │   │               └── GeistVF.woff
    │   ├── e2e/
    │   │   ├── utils.ts
    │   │   ├── app-pages-router/
    │   │   │   ├── README.md
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── middleware.ts
    │   │   │   ├── next.config.ts
    │   │   │   ├── open-next.config.ts
    │   │   │   ├── package.json
    │   │   │   ├── postcss.config.js
    │   │   │   ├── tailwind.config.ts
    │   │   │   ├── tsconfig.json
    │   │   │   ├── wrangler.jsonc
    │   │   │   ├── app/
    │   │   │   │   ├── globals.css
    │   │   │   │   ├── layout.tsx
    │   │   │   │   ├── page.tsx
    │   │   │   │   ├── albums/
    │   │   │   │   │   ├── layout.tsx
    │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   ├── @modal/
    │   │   │   │   │   │   ├── default.tsx
    │   │   │   │   │   │   └── (.)[album]/
    │   │   │   │   │   │       ├── page.tsx
    │   │   │   │   │   │       └── [song]/
    │   │   │   │   │   │           └── page.tsx
    │   │   │   │   │   └── [album]/
    │   │   │   │   │       ├── page.tsx
    │   │   │   │   │       └── [song]/
    │   │   │   │   │           └── page.tsx
    │   │   │   │   ├── api/
    │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   ├── client/
    │   │   │   │   │   │   └── route.ts
    │   │   │   │   │   └── host/
    │   │   │   │   │       └── route.ts
    │   │   │   │   ├── image-optimization/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── isr/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── parallel/
    │   │   │   │   │   ├── layout.tsx
    │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   ├── @a/
    │   │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   │   └── a-page/
    │   │   │   │   │   │       └── page.tsx
    │   │   │   │   │   └── @b/
    │   │   │   │   │       ├── page.tsx
    │   │   │   │   │       └── b-page/
    │   │   │   │   │           └── page.tsx
    │   │   │   │   ├── redirect-destination/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── rewrite-destination/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── server-actions/
    │   │   │   │   │   ├── client.tsx
    │   │   │   │   │   └── page.tsx
    │   │   │   │   └── ssr/
    │   │   │   │       ├── layout.tsx
    │   │   │   │       ├── loading.tsx
    │   │   │   │       └── page.tsx
    │   │   │   ├── e2e/
    │   │   │   │   ├── api.test.ts
    │   │   │   │   ├── host.test.ts
    │   │   │   │   ├── image-optimization.test.ts
    │   │   │   │   ├── isr.test.ts
    │   │   │   │   ├── middleware.redirect.test.ts
    │   │   │   │   ├── middleware.rewrite.test.ts
    │   │   │   │   ├── modals.test.ts
    │   │   │   │   ├── pages_isr.test.ts
    │   │   │   │   ├── pages_ssr.test.ts
    │   │   │   │   ├── parallel.test.ts
    │   │   │   │   ├── playwright.config.ts
    │   │   │   │   ├── serverActions.test.ts
    │   │   │   │   ├── skip_trailing.test.ts
    │   │   │   │   └── ssr.test.ts
    │   │   │   ├── pages/
    │   │   │   │   ├── _app.tsx
    │   │   │   │   ├── _document.tsx
    │   │   │   │   ├── api/
    │   │   │   │   │   └── hello.ts
    │   │   │   │   ├── pages_isr/
    │   │   │   │   │   └── index.tsx
    │   │   │   │   └── pages_ssr/
    │   │   │   │       └── index.tsx
    │   │   │   ├── public/
    │   │   │   │   └── static/
    │   │   │   │       └── frank.webp
    │   │   │   └── styles/
    │   │   │       └── globals.css
    │   │   ├── app-router/
    │   │   │   ├── README.md
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── middleware.ts
    │   │   │   ├── next.config.ts
    │   │   │   ├── open-next.config.ts
    │   │   │   ├── package.json
    │   │   │   ├── postcss.config.js
    │   │   │   ├── tailwind.config.ts
    │   │   │   ├── tsconfig.json
    │   │   │   ├── wrangler.jsonc
    │   │   │   ├── app/
    │   │   │   │   ├── globals.css
    │   │   │   │   ├── layout.tsx
    │   │   │   │   ├── page.tsx
    │   │   │   │   ├── albums/
    │   │   │   │   │   ├── layout.tsx
    │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   ├── @modal/
    │   │   │   │   │   │   ├── default.tsx
    │   │   │   │   │   │   └── (.)[album]/
    │   │   │   │   │   │       ├── page.tsx
    │   │   │   │   │   │       └── [song]/
    │   │   │   │   │   │           └── page.tsx
    │   │   │   │   │   └── [album]/
    │   │   │   │   │       ├── page.tsx
    │   │   │   │   │       └── [song]/
    │   │   │   │   │           └── page.tsx
    │   │   │   │   ├── api/
    │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   ├── after/
    │   │   │   │   │   │   ├── revalidate/
    │   │   │   │   │   │   │   └── route.ts
    │   │   │   │   │   │   └── ssg/
    │   │   │   │   │   │       └── route.ts
    │   │   │   │   │   ├── client/
    │   │   │   │   │   │   └── route.ts
    │   │   │   │   │   ├── host/
    │   │   │   │   │   │   └── route.ts
    │   │   │   │   │   ├── isr/
    │   │   │   │   │   │   └── route.ts
    │   │   │   │   │   ├── og/
    │   │   │   │   │   │   └── route.tsx
    │   │   │   │   │   ├── revalidate-path/
    │   │   │   │   │   │   └── route.ts
    │   │   │   │   │   ├── revalidate-tag/
    │   │   │   │   │   │   └── route.ts
    │   │   │   │   │   └── sse/
    │   │   │   │   │       └── route.ts
    │   │   │   │   ├── config-redirect/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── cookies/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── headers/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── image-optimization/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── isr/
    │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   ├── dynamic-params-false/
    │   │   │   │   │   │   └── [id]/
    │   │   │   │   │   │       └── page.tsx
    │   │   │   │   │   └── dynamic-params-true/
    │   │   │   │   │       └── [id]/
    │   │   │   │   │           └── page.tsx
    │   │   │   │   ├── isr-data-cache/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── methods/
    │   │   │   │   │   ├── route.ts
    │   │   │   │   │   ├── get/
    │   │   │   │   │   │   ├── dynamic-segments/
    │   │   │   │   │   │   │   └── [slug]/
    │   │   │   │   │   │   │       └── route.ts
    │   │   │   │   │   │   ├── query/
    │   │   │   │   │   │   │   └── route.ts
    │   │   │   │   │   │   ├── redirect/
    │   │   │   │   │   │   │   └── route.ts
    │   │   │   │   │   │   ├── revalidate/
    │   │   │   │   │   │   │   └── route.ts
    │   │   │   │   │   │   └── static/
    │   │   │   │   │   │       └── route.ts
    │   │   │   │   │   └── post/
    │   │   │   │   │       ├── cookies/
    │   │   │   │   │       │   └── route.ts
    │   │   │   │   │       └── formdata/
    │   │   │   │   │           └── route.ts
    │   │   │   │   ├── og/
    │   │   │   │   │   ├── opengraph-image.tsx
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── parallel/
    │   │   │   │   │   ├── layout.tsx
    │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   ├── @a/
    │   │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   │   └── a-page/
    │   │   │   │   │   │       └── page.tsx
    │   │   │   │   │   └── @b/
    │   │   │   │   │       ├── page.tsx
    │   │   │   │   │       └── b-page/
    │   │   │   │   │           └── page.tsx
    │   │   │   │   ├── redirect-destination/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── revalidate-path/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── revalidate-tag/
    │   │   │   │   │   ├── layout.tsx
    │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   └── nested/
    │   │   │   │   │       └── page.tsx
    │   │   │   │   ├── rewrite-destination/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── search-query/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── server-actions/
    │   │   │   │   │   ├── client.tsx
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── sse/
    │   │   │   │   │   └── page.tsx
    │   │   │   │   └── ssr/
    │   │   │   │       ├── layout.tsx
    │   │   │   │       ├── loading.tsx
    │   │   │   │       └── page.tsx
    │   │   │   ├── e2e/
    │   │   │   │   ├── after.test.ts
    │   │   │   │   ├── api.test.ts
    │   │   │   │   ├── config.redirect.test.ts
    │   │   │   │   ├── headers.test.ts
    │   │   │   │   ├── host.test.ts
    │   │   │   │   ├── image-optimization.test.ts
    │   │   │   │   ├── isr.revalidate.test.ts
    │   │   │   │   ├── isr.test.ts
    │   │   │   │   ├── methods.test.ts
    │   │   │   │   ├── middleware.cookies.test.ts
    │   │   │   │   ├── middleware.redirect.test.ts
    │   │   │   │   ├── middleware.rewrite.test.ts
    │   │   │   │   ├── modals.test.ts
    │   │   │   │   ├── og.test.ts
    │   │   │   │   ├── parallel.test.ts
    │   │   │   │   ├── playwright.config.ts
    │   │   │   │   ├── query.test.ts
    │   │   │   │   ├── revalidateTag.test.ts
    │   │   │   │   ├── serverActions.test.ts
    │   │   │   │   ├── sse.test.ts
    │   │   │   │   ├── ssr.test.ts
    │   │   │   │   └── trailing.test.ts
    │   │   │   └── public/
    │   │   │       └── static/
    │   │   │           └── frank.webp
    │   │   ├── experimental/
    │   │   │   ├── README.md
    │   │   │   ├── next.config.ts
    │   │   │   ├── open-next.config.ts
    │   │   │   ├── package.json
    │   │   │   ├── tsconfig.json
    │   │   │   ├── wrangler.jsonc
    │   │   │   ├── e2e/
    │   │   │   │   ├── nodeMiddleware.test.ts
    │   │   │   │   ├── playwright.config.ts
    │   │   │   │   ├── ppr.test.ts
    │   │   │   │   └── use-cache.test.ts
    │   │   │   └── src/
    │   │   │       ├── middleware.ts
    │   │   │       ├── app/
    │   │   │       │   ├── globals.css
    │   │   │       │   ├── layout.tsx
    │   │   │       │   ├── page.module.css
    │   │   │       │   ├── page.tsx
    │   │   │       │   ├── api/
    │   │   │       │   │   └── revalidate/
    │   │   │       │   │       └── route.ts
    │   │   │       │   ├── ppr/
    │   │   │       │   │   └── page.tsx
    │   │   │       │   └── use-cache/
    │   │   │       │       ├── layout.tsx
    │   │   │       │       ├── fetch/
    │   │   │       │       │   └── page.tsx
    │   │   │       │       ├── isr/
    │   │   │       │       │   └── page.tsx
    │   │   │       │       └── ssr/
    │   │   │       │           └── page.tsx
    │   │   │       └── components/
    │   │   │           ├── cached.tsx
    │   │   │           ├── dynamic.tsx
    │   │   │           └── static.tsx
    │   │   ├── pages-router/
    │   │   │   ├── README.md
    │   │   │   ├── next.config.ts
    │   │   │   ├── open-next.config.ts
    │   │   │   ├── package.json
    │   │   │   ├── postcss.config.js
    │   │   │   ├── tsconfig.json
    │   │   │   ├── wrangler.jsonc
    │   │   │   ├── .env.production
    │   │   │   ├── e2e/
    │   │   │   │   ├── 404.test.ts
    │   │   │   │   ├── amp.test.ts
    │   │   │   │   ├── api.test.ts
    │   │   │   │   ├── data.test.ts
    │   │   │   │   ├── fallback.test.ts
    │   │   │   │   ├── head.test.ts
    │   │   │   │   ├── header.test.ts
    │   │   │   │   ├── i18n.test.ts
    │   │   │   │   ├── isr.test.ts
    │   │   │   │   ├── playwright.config.ts
    │   │   │   │   ├── redirect.test.ts
    │   │   │   │   ├── revalidate.test.ts
    │   │   │   │   ├── rewrite.test.ts
    │   │   │   │   ├── ssr.test.ts
    │   │   │   │   ├── streaming.test.ts
    │   │   │   │   └── trailing.test.ts
    │   │   │   ├── public/
    │   │   │   │   └── static/
    │   │   │   │       └── frank.webp
    │   │   │   └── src/
    │   │   │       ├── middleware.ts
    │   │   │       ├── pages/
    │   │   │       │   ├── _app.tsx
    │   │   │       │   ├── _document.tsx
    │   │   │       │   ├── index.tsx
    │   │   │       │   ├── amp/
    │   │   │       │   │   └── index.tsx
    │   │   │       │   ├── api/
    │   │   │       │   │   ├── hello.ts
    │   │   │       │   │   ├── query.ts
    │   │   │       │   │   ├── revalidate.ts
    │   │   │       │   │   ├── dynamic/
    │   │   │       │   │   │   ├── [slug].ts
    │   │   │       │   │   │   ├── catch-all/
    │   │   │       │   │   │   │   └── [...slug].ts
    │   │   │       │   │   │   ├── catch-all-optional/
    │   │   │       │   │   │   │   └── [[...slug]].ts
    │   │   │       │   │   │   └── precedence/
    │   │   │       │   │   │       └── index.ts
    │   │   │       │   │   └── streaming/
    │   │   │       │   │       └── index.ts
    │   │   │       │   ├── fallback/
    │   │   │       │   │   └── [slug].tsx
    │   │   │       │   ├── fallback-intercepted/
    │   │   │       │   │   ├── [...slugs].tsx
    │   │   │       │   │   ├── [slug].tsx
    │   │   │       │   │   ├── ssg.tsx
    │   │   │       │   │   └── static.tsx
    │   │   │       │   ├── head/
    │   │   │       │   │   └── index.tsx
    │   │   │       │   ├── isr/
    │   │   │       │   │   └── index.tsx
    │   │   │       │   ├── sse/
    │   │   │       │   │   └── index.tsx
    │   │   │       │   ├── ssg/
    │   │   │       │   │   └── index.tsx
    │   │   │       │   └── ssr/
    │   │   │       │       └── index.tsx
    │   │   │       └── styles/
    │   │   │           └── globals.css
    │   │   └── shared/
    │   │       ├── package.json
    │   │       ├── sst-env.d.ts
    │   │       ├── tsconfig.json
    │   │       ├── api/
    │   │       │   ├── index.ts
    │   │       │   └── songs.json
    │   │       └── components/
    │   │           ├── Album/
    │   │           │   ├── Album.tsx
    │   │           │   ├── index.tsx
    │   │           │   └── Song.tsx
    │   │           ├── Filler/
    │   │           │   └── index.tsx
    │   │           ├── Modal/
    │   │           │   └── index.tsx
    │   │           └── Nav/
    │   │               └── index.tsx
    │   ├── middleware/
    │   │   ├── README.md
    │   │   ├── middleware.ts
    │   │   ├── next.config.mjs
    │   │   ├── open-next.config.ts
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   ├── wrangler.jsonc
    │   │   ├── app/
    │   │   │   ├── layout.tsx
    │   │   │   ├── page.tsx
    │   │   │   ├── about/
    │   │   │   │   └── page.tsx
    │   │   │   ├── about2/
    │   │   │   │   └── page.tsx
    │   │   │   ├── another/
    │   │   │   │   └── page.tsx
    │   │   │   ├── clerk/
    │   │   │   │   └── route.ts
    │   │   │   ├── middleware/
    │   │   │   │   └── page.tsx
    │   │   │   ├── redirected/
    │   │   │   │   └── page.tsx
    │   │   │   └── rewrite/
    │   │   │       └── page.tsx
    │   │   └── e2e/
    │   │       ├── base.spec.ts
    │   │       ├── cloudflare-context.spec.ts
    │   │       ├── playwright.config.ts
    │   │       └── playwright.dev.config.ts
    │   ├── next-partial-prerendering/
    │   │   ├── README.md
    │   │   ├── next-env.d.ts
    │   │   ├── next.config.js
    │   │   ├── open-next.config.ts
    │   │   ├── package.json
    │   │   ├── postcss.config.js
    │   │   ├── tailwind.config.ts
    │   │   ├── tsconfig.json
    │   │   ├── wrangler.jsonc
    │   │   ├── .prettierrc
    │   │   ├── app/
    │   │   │   ├── layout.tsx
    │   │   │   ├── not-found.tsx
    │   │   │   ├── page.tsx
    │   │   │   └── styles.tsx
    │   │   ├── components/
    │   │   │   ├── add-to-cart.tsx
    │   │   │   ├── byline.tsx
    │   │   │   ├── cart-count-context.tsx
    │   │   │   ├── cart-count.tsx
    │   │   │   ├── header.tsx
    │   │   │   ├── next-logo.tsx
    │   │   │   ├── ping.tsx
    │   │   │   ├── pricing.tsx
    │   │   │   ├── product-best-seller.tsx
    │   │   │   ├── product-card.tsx
    │   │   │   ├── product-currency-symbol.tsx
    │   │   │   ├── product-deal.tsx
    │   │   │   ├── product-estimated-arrival.tsx
    │   │   │   ├── product-lightening-deal.tsx
    │   │   │   ├── product-low-stock-warning.tsx
    │   │   │   ├── product-price.tsx
    │   │   │   ├── product-rating.tsx
    │   │   │   ├── product-review-card.tsx
    │   │   │   ├── product-split-payments.tsx
    │   │   │   ├── product-used-price.tsx
    │   │   │   ├── recommended-products.tsx
    │   │   │   ├── reviews.tsx
    │   │   │   ├── sidebar.tsx
    │   │   │   ├── single-product.tsx
    │   │   │   └── vercel-logo.tsx
    │   │   ├── e2e/
    │   │   │   ├── playwright.config.ts
    │   │   │   └── ppr.test.ts
    │   │   ├── lib/
    │   │   │   ├── delay.ts
    │   │   │   ├── products.ts
    │   │   │   └── reviews.ts
    │   │   └── types/
    │   │       ├── product.d.ts
    │   │       └── review.d.ts
    │   ├── overrides/
    │   │   ├── d1-tag-next/
    │   │   │   ├── next.config.ts
    │   │   │   ├── open-next.config.ts
    │   │   │   ├── package.json
    │   │   │   ├── tsconfig.json
    │   │   │   ├── wrangler.jsonc
    │   │   │   ├── app/
    │   │   │   │   ├── action.ts
    │   │   │   │   ├── globals.css
    │   │   │   │   ├── layout.tsx
    │   │   │   │   ├── page.module.css
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── components/
    │   │   │   │       └── revalidationButtons.tsx
    │   │   │   └── e2e/
    │   │   │       ├── base.spec.ts
    │   │   │       └── playwright.config.ts
    │   │   ├── memory-queue/
    │   │   │   ├── next.config.ts
    │   │   │   ├── open-next.config.ts
    │   │   │   ├── package.json
    │   │   │   ├── tsconfig.json
    │   │   │   ├── wrangler.jsonc
    │   │   │   ├── app/
    │   │   │   │   ├── globals.css
    │   │   │   │   ├── layout.tsx
    │   │   │   │   ├── page.module.css
    │   │   │   │   └── page.tsx
    │   │   │   └── e2e/
    │   │   │       ├── base.spec.ts
    │   │   │       └── playwright.config.ts
    │   │   ├── r2-incremental-cache/
    │   │   │   ├── next.config.ts
    │   │   │   ├── open-next.config.ts
    │   │   │   ├── package.json
    │   │   │   ├── tsconfig.json
    │   │   │   ├── wrangler.jsonc
    │   │   │   ├── app/
    │   │   │   │   ├── globals.css
    │   │   │   │   ├── layout.tsx
    │   │   │   │   ├── page.module.css
    │   │   │   │   └── page.tsx
    │   │   │   └── e2e/
    │   │   │       ├── base.spec.ts
    │   │   │       └── playwright.config.ts
    │   │   └── static-assets-incremental-cache/
    │   │       ├── next-env.d.ts
    │   │       ├── next.config.ts
    │   │       ├── open-next.config.ts
    │   │       ├── package.json
    │   │       ├── tsconfig.json
    │   │       ├── wrangler.jsonc
    │   │       ├── app/
    │   │       │   ├── action.ts
    │   │       │   ├── globals.css
    │   │       │   ├── layout.tsx
    │   │       │   ├── page.module.css
    │   │       │   ├── page.tsx
    │   │       │   └── components/
    │   │       │       └── revalidationButtons.tsx
    │   │       └── e2e/
    │   │           ├── base.spec.ts
    │   │           └── playwright.config.ts
    │   ├── playground14/
    │   │   ├── instrumentation.js
    │   │   ├── middleware.js
    │   │   ├── next.config.mjs
    │   │   ├── open-next.config.ts
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   ├── worker-configuration.d.ts
    │   │   ├── worker.ts
    │   │   ├── wrangler.jsonc
    │   │   ├── .dev.vars
    │   │   ├── .env.development
    │   │   ├── app/
    │   │   │   ├── layout.js
    │   │   │   ├── page.js
    │   │   │   ├── api/
    │   │   │   │   ├── buildid/
    │   │   │   │   │   └── route.ts
    │   │   │   │   ├── hello/
    │   │   │   │   │   └── route.ts
    │   │   │   │   ├── instrumentation/
    │   │   │   │   │   └── route.ts
    │   │   │   │   └── request/
    │   │   │   │       └── route.ts
    │   │   │   ├── isr/
    │   │   │   │   └── [id]/
    │   │   │   │       ├── dynamic/
    │   │   │   │       │   └── page.tsx
    │   │   │   │       └── no-dynamic/
    │   │   │   │           └── page.tsx
    │   │   │   └── og/
    │   │   │       └── route.tsx
    │   │   ├── e2e/
    │   │   │   ├── base.spec.ts
    │   │   │   ├── cloudflare.spec.ts
    │   │   │   ├── head.spec.ts
    │   │   │   ├── instrumentation.spec.ts
    │   │   │   ├── isr.spec.ts
    │   │   │   ├── playwright.config.ts
    │   │   │   └── playwright.dev.config.ts
    │   │   ├── lib/
    │   │   │   └── posts.ts
    │   │   ├── pages/
    │   │   │   ├── head.tsx
    │   │   │   └── api/
    │   │   │       └── pages.ts
    │   │   └── public/
    │   │       ├── .gitkeep
    │   │       └── snipp/
    │   │           └── snipp.webp
    │   ├── playground15/
    │   │   ├── data.js
    │   │   ├── data.module.css
    │   │   ├── instrumentation.js
    │   │   ├── middleware.js
    │   │   ├── next.config.mjs
    │   │   ├── open-next.config.ts
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   ├── worker-configuration.d.ts
    │   │   ├── wrangler.jsonc
    │   │   ├── .dev.vars
    │   │   ├── .env.development
    │   │   ├── app/
    │   │   │   ├── layout.js
    │   │   │   ├── page.js
    │   │   │   ├── api/
    │   │   │   │   ├── buildid/
    │   │   │   │   │   └── route.ts
    │   │   │   │   ├── hello/
    │   │   │   │   │   └── route.ts
    │   │   │   │   ├── instrumentation/
    │   │   │   │   │   └── route.ts
    │   │   │   │   └── request/
    │   │   │   │       └── route.ts
    │   │   │   ├── from-app/
    │   │   │   │   └── page.tsx
    │   │   │   ├── isr/
    │   │   │   │   └── [id]/
    │   │   │   │       ├── dynamic/
    │   │   │   │       │   └── page.tsx
    │   │   │   │       └── no-dynamic/
    │   │   │   │           └── page.tsx
    │   │   │   ├── og/
    │   │   │   │   └── route.tsx
    │   │   │   └── other-app/
    │   │   │       └── page.tsx
    │   │   ├── e2e/
    │   │   │   ├── base.spec.ts
    │   │   │   ├── cloudflare.spec.ts
    │   │   │   ├── head.spec.ts
    │   │   │   ├── instrumentation.spec.ts
    │   │   │   ├── isr.spec.ts
    │   │   │   ├── playwright.config.ts
    │   │   │   └── playwright.dev.config.ts
    │   │   ├── lib/
    │   │   │   └── posts.ts
    │   │   ├── pages/
    │   │   │   └── head.tsx
    │   │   └── public/
    │   │       └── .gitkeep
    │   ├── prisma/
    │   │   ├── README.md
    │   │   ├── next.config.ts
    │   │   ├── open-next.config.ts
    │   │   ├── package.json
    │   │   ├── populate.sql
    │   │   ├── prisma.config.ts
    │   │   ├── schema.prisma
    │   │   ├── tsconfig.json
    │   │   ├── worker-configuration.d.ts
    │   │   ├── wrangler.jsonc
    │   │   ├── e2e/
    │   │   │   ├── playwright.config.ts
    │   │   │   ├── playwright.dev.config.ts
    │   │   │   └── prisma.spec.ts
    │   │   └── src/
    │   │       ├── app/
    │   │       │   ├── globals.css
    │   │       │   ├── layout.tsx
    │   │       │   ├── page.module.css
    │   │       │   └── page.tsx
    │   │       └── lib/
    │   │           └── db.ts
    │   ├── ssg-app/
    │   │   ├── next.config.ts
    │   │   ├── open-next.config.ts
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   ├── worker-configuration.d.ts
    │   │   ├── wrangler.jsonc
    │   │   ├── .dev.vars
    │   │   ├── app/
    │   │   │   ├── globals.css
    │   │   │   ├── layout.tsx
    │   │   │   ├── page.module.css
    │   │   │   └── page.tsx
    │   │   └── e2e/
    │   │       ├── base.spec.ts
    │   │       └── playwright.config.ts
    │   └── vercel-blog-starter/
    │       ├── README.md
    │       ├── next.config.mjs
    │       ├── open-next.config.ts
    │       ├── package.json
    │       ├── postcss.config.js
    │       ├── tailwind.config.ts
    │       ├── tsconfig.json
    │       ├── wrangler.jsonc
    │       ├── _posts/
    │       │   ├── dynamic-routing.md
    │       │   ├── hello-world.md
    │       │   └── preview.md
    │       ├── public/
    │       │   └── favicon/
    │       │       ├── browserconfig.xml
    │       │       └── site.webmanifest
    │       └── src/
    │           ├── app/
    │           │   ├── globals.css
    │           │   ├── layout.tsx
    │           │   ├── page.tsx
    │           │   ├── _components/
    │           │   │   ├── alert.tsx
    │           │   │   ├── avatar.tsx
    │           │   │   ├── container.tsx
    │           │   │   ├── cover-image.tsx
    │           │   │   ├── date-formatter.tsx
    │           │   │   ├── footer.tsx
    │           │   │   ├── header.tsx
    │           │   │   ├── hero-post.tsx
    │           │   │   ├── intro.tsx
    │           │   │   ├── markdown-styles.module.css
    │           │   │   ├── more-stories.tsx
    │           │   │   ├── post-body.tsx
    │           │   │   ├── post-header.tsx
    │           │   │   ├── post-preview.tsx
    │           │   │   ├── post-title.tsx
    │           │   │   ├── section-separator.tsx
    │           │   │   ├── switch.module.css
    │           │   │   └── theme-switcher.tsx
    │           │   └── posts/
    │           │       └── [slug]/
    │           │           └── page.tsx
    │           ├── interfaces/
    │           │   ├── author.ts
    │           │   └── post.ts
    │           └── lib/
    │               ├── api.ts
    │               ├── constants.ts
    │               └── markdownToHtml.ts
    ├── packages/
    │   └── cloudflare/
    │       ├── README.md
    │       ├── CHANGELOG.md
    │       ├── env.d.ts
    │       ├── eslint.config.mjs
    │       ├── package.json
    │       ├── tsconfig.json
    │       ├── src/
    │       │   ├── api/
    │       │   │   ├── cloudflare-context.ts
    │       │   │   ├── config.ts
    │       │   │   ├── index.ts
    │       │   │   ├── durable-objects/
    │       │   │   │   ├── bucket-cache-purge.spec.ts
    │       │   │   │   ├── bucket-cache-purge.ts
    │       │   │   │   ├── queue.spec.ts
    │       │   │   │   ├── queue.ts
    │       │   │   │   ├── sharded-tag-cache.spec.ts
    │       │   │   │   └── sharded-tag-cache.ts
    │       │   │   └── overrides/
    │       │   │       ├── internal.ts
    │       │   │       ├── asset-resolver/
    │       │   │       │   ├── index.spec.ts
    │       │   │       │   └── index.ts
    │       │   │       ├── cache-purge/
    │       │   │       │   └── index.ts
    │       │   │       ├── incremental-cache/
    │       │   │       │   ├── kv-incremental-cache.ts
    │       │   │       │   ├── r2-incremental-cache.ts
    │       │   │       │   ├── regional-cache.ts
    │       │   │       │   └── static-assets-incremental-cache.ts
    │       │   │       ├── queue/
    │       │   │       │   ├── do-queue.ts
    │       │   │       │   ├── memory-queue.spec.ts
    │       │   │       │   ├── memory-queue.ts
    │       │   │       │   ├── queue-cache.spec.ts
    │       │   │       │   └── queue-cache.ts
    │       │   │       └── tag-cache/
    │       │   │           ├── d1-next-tag-cache.ts
    │       │   │           ├── do-sharded-tag-cache.spec.ts
    │       │   │           ├── do-sharded-tag-cache.ts
    │       │   │           ├── tag-cache-filter.spec.ts
    │       │   │           └── tag-cache-filter.ts
    │       │   ├── cli/
    │       │   │   ├── args.spec.ts
    │       │   │   ├── args.ts
    │       │   │   ├── index.ts
    │       │   │   ├── project-options.ts
    │       │   │   ├── commands/
    │       │   │   │   ├── deploy.ts
    │       │   │   │   ├── helpers.ts
    │       │   │   │   ├── populate-cache.spec.ts
    │       │   │   │   ├── populate-cache.ts
    │       │   │   │   ├── preview.ts
    │       │   │   │   ├── skew-protection.spec.ts
    │       │   │   │   ├── skew-protection.ts
    │       │   │   │   └── upload.ts
    │       │   │   ├── templates/
    │       │   │   │   ├── images.spec.ts
    │       │   │   │   ├── images.ts
    │       │   │   │   ├── init.ts
    │       │   │   │   ├── skew-protection.ts
    │       │   │   │   ├── worker.ts
    │       │   │   │   └── shims/
    │       │   │   │       ├── empty.ts
    │       │   │   │       ├── env.ts
    │       │   │   │       ├── fetch.ts
    │       │   │   │       └── throw.ts
    │       │   │   └── utils/
    │       │   │       ├── ask-confirmation.ts
    │       │   │       ├── run-wrangler.spec.ts
    │       │   │       └── run-wrangler.ts
    │       │   └── utils/
    │       │       └── get-package-templates-dir-path.ts
    │       └── templates/
    │           ├── open-next.config.ts
    │           └── wrangler.jsonc
    ├── .changeset/
    │   ├── README.md
    │   └── config.json
    └── .github/
        ├── actions/
        │   ├── install-dependencies/
        │   │   └── action.yml
        │   └── setup-playwright/
        │       └── action.yml
        ├── ISSUE_TEMPLATE/
        │   ├── 1.bug_report.yml
        │   ├── 2.feature_request.yml
        │   └── config.yml
        └── workflows/
            ├── changesets.yml
            ├── checks.yml
            ├── playwright.yml
            └── prereleases.yml
