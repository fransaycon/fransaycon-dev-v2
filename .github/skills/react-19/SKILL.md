---
name: react-19
description: 'Use when writing, reviewing, or debugging React components, hooks, state, effects, context, refs, or performance in this React 19 app. Covers function components, the Rules of React/Hooks, React 19 features (Actions, useActionState, useOptimistic, use(), ref-as-prop, document metadata), effect avoidance, and Suspense. Trigger on: component, hook, useState, useEffect, useContext, useRef, useMemo, useCallback, useTransition, context provider, "why does my component re-render", state management, memoization.'
---

# React 19 (this repo)

## Setup facts
- React `19.2.0` + React DOM `19.2.0` (see [package.json](../../../package.json)). TypeScript, function components only.
- Rendered via TanStack Start (SSR). Components run on both server and client — keep them pure and side-effect free during render.
- JSX transform is `react-jsx` (see [tsconfig.json](../../../tsconfig.json)); no `import React from "react"` needed just for JSX.
- For routing/data, defer to the [tanstack-start](../tanstack-start/SKILL.md) skill. This skill is about React itself.

## Core rules (always)
- **Components and hooks must be pure**: no mutation of props/state, no side effects during render, same input → same output.
- **Rules of Hooks**: only call hooks at the top level of a component or custom hook — never in conditions, loops, or nested functions.
- Derive don't sync: compute values during render instead of mirroring props into state via effects.
- Prefer keys for identity; never use array index as key for reorderable lists.

## React 19 features to prefer
- **ref as a prop**: function components receive `ref` directly; `forwardRef` is no longer needed for new code.
  ```tsx
  function Input({ ref, ...props }: { ref?: React.Ref<HTMLInputElement> } & React.ComponentProps<"input">) {
    return <input ref={ref} {...props} />;
  }
  ```
- **Actions + `useActionState`** for form submission/pending/error state:
  ```tsx
  const [state, submitAction, isPending] = useActionState(async (prev, formData) => {
    const res = await save(formData);
    return res.error ? { error: res.error } : { ok: true };
  }, { });
  ```
- **`useOptimistic`** for optimistic UI during async mutations.
- **`use()`** to read a promise or context conditionally (can be called in branches, unlike other hooks).
- **`useFormStatus`** (from `react-dom`) to read parent form submission state in child components.
- **Document metadata**: `<title>`, `<meta>`, `<link>` rendered in components hoist to `<head>`. In this app, route-level metadata is normally set via TanStack Router's `head` option (see `__root.tsx`) — prefer that for routes.

## "You might not need an Effect"
Avoid effects for:
- Transforming data for rendering → compute during render.
- Handling user events → put logic in the event handler.
- Resetting state on prop change → use a `key` instead.
Use effects only to synchronize with **external** systems (subscriptions, non-React widgets, manual DOM). Server functions/loaders (TanStack) are preferred over `useEffect` data fetching.

## Performance
- Measure before memoizing. Reach for `useMemo`/`useCallback`/`memo` only for proven hot paths.
- Note: the **React Compiler** can auto-memoize; if adopted, manual memoization is usually unnecessary. Not currently configured in this repo.

## Testing
- Component tests use Vitest + Testing Library (`src/**/*.test.tsx`); see [src/test/setup.ts](../../../src/test/setup.ts). Query by role/text, interact via `@testing-library/user-event`.

## Official docs (downloaded index)
Consult the downloaded `llms.txt` index and fetch the specific `.md` page when you need authoritative detail: [references/llms-react.md](./references/llms-react.md). Prefer these pages over memory given React 19's newer APIs.
