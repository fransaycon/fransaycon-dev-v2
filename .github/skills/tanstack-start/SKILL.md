---
name: tanstack-start
description: 'Use when adding or editing routes, loaders, server functions, data fetching, navigation, or SSR behavior in this TanStack Start + TanStack Router (React 19) app. Covers file-based routing conventions, createFileRoute/createRootRoute, loaders, server functions, params/search validation, links/navigation, and the generated route tree. Trigger on: "add a route/page", loader, server function, useNavigate, useParams, route params, search params, head/meta, layout route.'
---

# TanStack Start + Router (this repo)

## Setup facts
- File-based routing. Routes live in [src/routes/](../../../src/routes). The route tree is **generated** into `src/routeTree.gen.ts` — never edit that file by hand.
- Regenerate routes with `pnpm generate-routes` (runs `tsr generate`). The dev server also regenerates on change.
- Router is created in [src/router.tsx](../../../src/router.tsx) via `getRouter()` with `defaultPreload: "intent"` and typed `Register` module augmentation.
- Root layout + document shell: [src/routes/__root.tsx](../../../src/routes/__root.tsx) using `createRootRoute`, `HeadContent`, `Scripts`, and TanStack Devtools.
- Path aliases: `#/*` and `@/*` both map to `./src/*`.

## Adding a route
1. Create `src/routes/<path>.tsx`. File name maps to URL:
   - `about.tsx` → `/about`
   - `blog/index.tsx` → `/blog`
   - `blog/$slug.tsx` → `/blog/:slug` (dynamic segment via `$`)
   - `_layout.tsx` / pathless layout routes group children without adding a segment
2. Export a `Route` with `createFileRoute`:
   ```tsx
   import { createFileRoute } from "@tanstack/react-router";

   export const Route = createFileRoute("/about")({
     component: About,
   });

   function About() {
     return <div className="p-8">About</div>;
   }
   ```
3. Let the generator update `routeTree.gen.ts` (dev server or `pnpm generate-routes`).

## Data loading
- **Route loader** for route-level data (runs on server during SSR and on client nav):
  ```tsx
  export const Route = createFileRoute("/blog/$slug")({
    loader: async ({ params }) => fetchPost(params.slug),
    component: Post,
  });

  function Post() {
    const post = Route.useLoaderData();
    // ...
  }
  ```
- **Server functions** for server-only logic (DB, secrets) callable from client:
  ```tsx
  import { createServerFn } from "@tanstack/react-start";

  const getData = createServerFn({ method: "GET" }).handler(async () => {
    // server-only code; safe to read server env
    return { ok: true };
  });
  ```
  Keep secrets/server env access inside server functions or loaders — never in component/client code. Import validated env from [src/env.ts](../../../src/env.ts).

## Params & search
- Access path params with `Route.useParams()`; validate search with `validateSearch` (pair with `zod` from this repo) and read via `Route.useSearch()`.

## Navigation
- Prefer `<Link to="/blog/$slug" params={{ slug }} />` for type-safe links.
- Imperative: `const navigate = useNavigate(); navigate({ to: "/about" })`.

## Head / meta
- Set per-route `<title>`/meta via the route's `head` option (see `__root.tsx` for the pattern). Stylesheets are linked through `links` there.

## Conventions & guardrails
- Do not hand-edit `src/routeTree.gen.ts` (it's Biome-ignored and git-tracked as generated).
- Type-check after route changes: `pnpm typecheck`.
- Add tests under `src/**/*.test.tsx` (Vitest) and E2E under `e2e/*.spec.ts` (Playwright, baseURL `http://localhost:3000`).

## Official docs (downloaded indexes)
When you need authoritative, current detail, consult the downloaded `llms.txt` indexes and fetch the specific `.md` page linked within:
- [TanStack Start index](./references/llms-start.md) — server functions, execution model, SSR, styling, auth.
- [TanStack Router index](./references/llms-router.md) — file-based routing, loaders, params/search, navigation, head management.

Prefer the React pages. Verify against these before relying on memory, as this repo uses very recent `latest` versions.
