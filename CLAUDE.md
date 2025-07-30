# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js application built for deployment to Cloudflare Workers using OpenNext.js Cloudflare adapter. The app is currently in development phase and appears to be "Automatehub" - an automation platform. It uses modern React patterns with TypeScript and Tailwind CSS.

## Development Commands

### Core Development
- `bun run dev` - Start development server with Turbopack (using Bun runtime)
- `bun run build` - Build the Next.js application 
- `bun run start` - Start production server locally
- `bun run lint` - Run ESLint for code quality

### Cloudflare Deployment
- `bun run deploy` - Build and deploy to Cloudflare Workers
- `bun run preview` - Build and preview on Cloudflare Workers locally
- `bun run cf-typegen` - Generate Cloudflare environment types

## Architecture

### Framework Stack
- **Next.js 15.3.5** with App Router (not Pages Router)
- **React 19** with TypeScript 5
- **Bun** as the JavaScript runtime and package manager
- **Tailwind CSS 4** for styling
- **@opennextjs/cloudflare** for Cloudflare Workers deployment
- **shadcn/ui** component library (New York style variant)

### Component Architecture
- **UI Components**: Uses shadcn/ui with Radix UI primitives in `/components/ui/`
- **Feature Components**: Business logic components organized in feature folders like `/components/mvpblocks/`, `/components/headers/`, `/components/hero-sections/`
- **Layout Components**: Navigation and layout components in `/components/layout/`
- **Utilities**: Common utilities in `/lib/utils.ts` using `clsx` and `tailwind-merge`

### Path Aliases
```typescript
"@/*": "./*" // Root-level imports (@ = project root)
```

Standard shadcn/ui aliases are configured:
- `@/components` for all components
- `@/lib` for utilities
- `@/hooks` for custom hooks

### Styling Approach
- **Tailwind CSS** with CSS variables for theming
- **Stone** base color palette
- **Dark mode** support via `next-themes`
- **CVA (Class Variance Authority)** for component variants
- Custom CSS in `app/globals.css` with blob animations and theming

### State Management
- Uses React built-in state management
- Theme state managed via `next-themes` ThemeProvider

## Key Files & Configurations

### Build Configuration
- `next.config.ts` - Next.js config with ImageKit remote patterns and OpenNext Cloudflare init
- `open-next.config.ts` - OpenNext Cloudflare configuration (R2 cache commented out)
- `wrangler.jsonc` - Cloudflare Workers configuration with Node.js compatibility
- `tsconfig.json` - TypeScript config with App Router and Cloudflare types

### Component Configuration  
- `components.json` - shadcn/ui configuration (New York style, RSC enabled)
- Path aliases configured for clean imports

### Code Quality
- `eslint.config.mjs` - ESLint with Next.js and TypeScript presets
- No custom Cursor rules or Copilot instructions found

## Development Patterns

### Component Organization
- UI components follow shadcn/ui patterns with forwardRef and variant props
- Business components organized by feature/section (headers, hero-sections, mvpblocks)
- All components use TypeScript with proper prop typing

### Styling Patterns
- Use the `cn()` utility from `/lib/utils.ts` for conditional classes
- Follow shadcn/ui variant patterns with `cva()` for component styling
- Dark mode classes applied via ThemeProvider

### Import Patterns
- Use `@/` alias for all internal imports
- UI components imported from `@/components/ui/`
- Business components imported with full paths like `@/components/hero-sections/hero1`

## Deployment Context

This application is specifically configured for **Cloudflare Workers** deployment, not traditional Node.js hosting. Key considerations:

### Cloudflare-Specific Features
- Uses OpenNext.js Cloudflare adapter for edge deployment
- Node.js compatibility flags enabled in wrangler.jsonc
- Asset binding configured for static file serving
- R2 incremental cache available but not currently enabled

### Environment Setup
- Development uses Next.js dev server with Turbopack
- Production deploys to Cloudflare Workers edge network
- Cloudflare environment types available in `cloudflare-env.d.ts`

## Important Notes

### Technology Constraints
- **App Router only** - this is not a Pages Router application
- **React 19** - ensure compatibility with latest React features
- **Edge runtime** - code must be compatible with Cloudflare Workers environment
- **No Node.js APIs** - use Web APIs or Cloudflare-compatible alternatives

### Code Quality Standards
- TypeScript strict mode enabled
- ESLint with Next.js and TypeScript rules
- Component prop types required
- Use proper forwardRef patterns for UI components

## Assistant Guidelines
- Dont run servers using bash, ask the user to run the dev server when you need to