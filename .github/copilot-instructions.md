# Copilot instructions — fransaycon-website

Always-on conventions for this repo. For task-specific depth, the agent also loads the on-demand skills in `.github/skills/`:
[react-19](./skills/react-19/SKILL.md), [tanstack-start](./skills/tanstack-start/SKILL.md), [tailwind-v4](./skills/tailwind-v4/SKILL.md).

## Stack
- TanStack Start + TanStack Router (file-based routing, SSR) on Vite.
- React 19 (function components, TypeScript, `strict`).
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`).
- Package manager: **pnpm** (`packageManager` pinned). Node >= 22.

## Package management
- Use **pnpm** only. Never `npm`/`yarn`. Install with `pnpm add` / `pnpm add -D`.
- Do not edit `pnpm-lock.yaml` by hand.

## Code style & quality
- **Biome** is the formatter and linter (`biome.json`): tab indentation, double quotes, organize-imports on.
  - Format: `pnpm format` · Lint: `pnpm lint` · Both: `pnpm check`.
- Type-check with `pnpm typecheck` (`tsc --noEmit`) after non-trivial changes.
- Use path aliases `#/*` or `@/*` for `src/*` imports.
- Don't hand-edit generated files: `src/routeTree.gen.ts`.

## Commits & releases
- Commits follow **Conventional Commits**, enforced by commitlint via a Husky `commit-msg` hook.
  - Prefer `pnpm commit` (commitizen) for a guided message.
- Pre-commit hook runs **lint-staged**: Biome auto-fix + `tsc --noEmit`. Don't bypass with `--no-verify`.
- Releases use **standard-version**: `pnpm release` (or `release:minor` / `release:major`) — bumps version, updates `CHANGELOG.md`, tags. Then `git push --follow-tags`.

## Testing
- Unit/component: **Vitest** + Testing Library (`src/**/*.{test,spec}.tsx`), setup in `src/test/setup.ts`. Run `pnpm test`.
- E2E: **Playwright** (`e2e/*.spec.ts`, baseURL `http://localhost:3000`). Run `pnpm test:e2e`.
- Add/adjust tests when changing behavior; query by role/text.

## Environment variables
- Access env only through validated [src/env.ts](../src/env.ts) (`@t3-oss/env-core` + `zod`).
- Client-exposed vars must be prefixed `VITE_`. Never read secrets in client/component code — use server functions/loaders.

## Guardrails
- Keep components pure (SSR runs render on server and client).
- Prefer TanStack loaders/server functions over `useEffect` data fetching.
- Follow the relevant skill in `.github/skills/` before relying on memory; these versions are recent.
