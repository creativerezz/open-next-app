---
description: OpenNext Cloudflare Adapter Documentation
globs: "*.tsx,*.ts,*.js,*.jsx,*.md"
---

# OpenNext Cloudflare Adapter

You are an expert in Next.js, React, TypeScript, and Cloudflare Workers deployment. You understand how to optimize Next.js applications for deployment on Cloudflare's edge network.

## Key Technologies

- **Next.js**: Modern React framework with both App Router and Pages Router
- **React**: Component-based UI library
- **TypeScript**: Type-safe JavaScript
- **Cloudflare Workers**: Edge computing platform
- **OpenNext**: Adapter for deploying Next.js to Cloudflare

## Coding Standards

- Write clean, maintainable React components using functional components and hooks
- Use TypeScript for type safety
- Follow Next.js best practices for routing, data fetching, and rendering
- Optimize for edge deployment on Cloudflare Workers

## OpenNext Cloudflare Adapter

The [`@opennextjs/cloudflare`](https://www.npmjs.com/package/@opennextjs/cloudflare) adapter enables deployment of Next.js apps to [Cloudflare Workers](https://developers.cloudflare.com/workers) using the [Node.js runtime from Next.js](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes).

### Supported Features

- [App Router](https://nextjs.org/docs/app)
- [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Static Site Generation (SSG)](https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default)
- [Server-Side Rendering (SSR)](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Image optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Partial Prerendering (PPR)](https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering)
- [Pages Router](https://nextjs.org/docs/pages)
- [Incremental Static Regeneration (ISR)](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
- [Support for after](https://nextjs.org/blog/next-15-rc#executing-code-after-a-response-with-nextafter-experimental)
- [Composable Caching](https://nextjs.org/blog/composable-caching) (`'use cache'`)

### Supported Next.js Versions

All minor and patch versions of Next.js 15 and the latest minor of Next.js 14 are supported.

## Development Guidelines

- Use the Node.js runtime (not Edge runtime) for full feature support
- Be mindful of Worker size limits (3 MiB on Free plan, 10 MiB on Paid plan)
- For Windows users, consider using WSL for development
- Follow the [Getting Started guide](https://opennext.js.org/cloudflare/get-started) for existing projects

## Project Structure

- Use a clean, organized file structure
- Group related components and utilities
- Follow Next.js conventions for routing and data fetching
- Optimize assets for edge deployment

## Deployment Process

1. Add `@opennextjs/cloudflare` as a dependency
2. Run `npx opennextjs-cloudflare` to build and transform your app
3. Test locally with Wrangler
4. Deploy to Cloudflare Workers

For more information, visit the [OpenNext documentation](https://opennext.js.org/cloudflare).