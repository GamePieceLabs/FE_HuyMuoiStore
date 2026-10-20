# AGENTS.md — Codex Project Rules

## 1. Project stack
- Next.js 16, App Router, TypeScript (strict).
- Tailwind CSS v4; use the project's existing CSS-first theme and tokens.
- shadcn/ui (current project-compatible CLI and registry components).
- Respect the installed package versions and existing configuration. Do not upgrade dependencies without permission.

## 2. Primary mission
Implement requested UI features and mockups while preserving existing business behavior. Prefer shadcn/ui primitives and the existing design system over custom replacements.

## 3. Non-negotiable business logic protection
- NEVER modify business rules, calculations, validation semantics, authorization, API contracts, database schemas, queries, persistence, state transitions, or CRUD behavior unless the user explicitly requests it.
- Do not change route handlers, server actions, middleware, API clients, or environment variables for UI-only tasks.
- Do not silently replace real API data with mock data. Mock data is permitted only for explicitly designated mockup screens or isolated development fixtures.
- Preserve existing loading, empty, error, retry, and success states and their behavior.
- When a requested UI change requires business-logic changes, stop and explain the dependency; request approval before proceeding.
- Do not delete code, dependencies, or files outside the requested scope.

## 4. Feature-based structure
Use the following structure for each domain:

```text
src/
  app/                         # Routes, layouts, loading/error boundaries
  components/
    ui/                        # shadcn/ui-generated primitives (shared)
    shared/                    # Shared cross-domain compositions
  features/
    <domain>/
      components/              # Components exclusive to this domain
      data/                    # Typed mock data / fixtures
      types/                   # Domain-specific TypeScript types
      hooks/                   # Domain hooks for state, CRUD, API integration
      index.ts                 # Optional public exports
  lib/                         # Shared utilities and existing API infrastructure
```

- Keep `app/` route files thin: compose feature components, fetch server data when appropriate, and pass props.
- Put domain-only components in `features/<domain>/components`.
- Put reusable shadcn primitives in `components/ui`; do not duplicate them inside features.
- Put shared cross-domain components in `components/shared` only when actually reused.
- Put mock data in `features/<domain>/data`, never inline large datasets in JSX.
- Put domain types in `features/<domain>/types`; avoid `any` and duplicate definitions.
- Put client-facing hooks in `features/<domain>/hooks`, e.g. `useProducts`, `useCreateProduct`.
- Hooks may orchestrate CRUD and API calls, but MUST NOT contain secrets or direct database access in client code. Keep server-side database operations in existing server-only modules, route handlers, or server actions as appropriate.
- Follow existing conventions when a domain already has an established structure; do not restructure unrelated code.

## 5. Next.js 16 rules
- Default to Server Components; add `"use client"` only where browser state, effects, or interactions require it.
- Never import server-only code into Client Components.
- Keep credentials and database access on the server.
- Preserve existing routing, caching, authentication, and error-handling semantics.
- Avoid unnecessary client bundles and unnecessary useEffect-based data fetching.
- Use `next/link` for internal navigation and `next/image` when appropriate.

## 6. shadcn/ui rules
- Prefer installed shadcn/ui components for UI: Button, Card, Dialog, Sheet, Drawer, DropdownMenu, Form/Field, Input, Select, Table, Tabs, Tooltip, Skeleton, Alert, etc.
- First inspect `components.json`, `src/components/ui`, the package manager, and project aliases.
- For missing components, use the shadcn CLI with the project's package manager and compatible registry version, e.g. `npx shadcn@latest add button`.
- If explicitly asked to install all official components, review the current CLI's supported `add --all` command, inspect its proposed changes, and request approval before overwriting existing customized components. Do not assume third-party registry components are included.
- Do not install every component merely to implement one screen.
- Preserve customized shadcn components and theme tokens unless the user asks to change them.
- Prefer composition, variants, and existing primitives over rewriting library internals.
- Ensure keyboard access, focus indicators, semantic markup, and accessible labels.

## 7. Tailwind CSS v4 and UI design
- Use Tailwind v4 utilities and the project's existing CSS variables/design tokens.
- Avoid legacy Tailwind v3-only configuration patterns unless the project explicitly uses a compatibility setup.
- Prefer semantic token classes such as `bg-background`, `text-foreground`, `border-border`, and `text-muted-foreground`.
- Do not hardcode arbitrary colors, spacing, or fonts when an existing token or utility fits.
- Support mobile, tablet, and desktop layouts; avoid horizontal overflow.
- Implement consistent spacing, typography, hover/focus/disabled states, and light/dark mode when already supported.
- For URL-to-UI mockups, reproduce visual layout without copying proprietary assets or changing existing business logic. Clearly isolate fake data and placeholder interactions.

## 8. TypeScript and code quality
- Prefer small, focused components with explicit props types.
- Use `import type` for type-only imports where applicable.
- Do not introduce `any`, `@ts-ignore`, or blanket lint suppressions to bypass errors.
- Do not add new libraries when existing dependencies suffice.
- Use existing lint, formatter, naming, alias, and import-order conventions.
- Do not add speculative abstractions, unused helpers, or unrelated refactors.

## 9. Workflow for every Codex task
1. Inspect the requested route, related feature, UI components, types, hooks, and configuration.
2. Identify the files that may change and explicitly distinguish UI work from protected business logic.
3. Implement the smallest scoped change; reuse existing shadcn/ui primitives.
4. Add or update typed mock fixtures only if the task is a mockup.
5. Verify responsive layout, accessibility, and loading/empty/error states where relevant.
6. Run available checks: typecheck, lint, tests, and build as appropriate; never invent a passing result.
7. Report changed files, UI behavior, installed components, verification results, and any blocked work.

## 10. Approval required
Ask before:
- Modifying business logic, API behavior, authentication, database, or schemas.
- Installing or upgrading dependencies beyond required shadcn components.
- Overwriting customized shared components or replacing the existing theme.
- Deleting files, performing large-scale refactors, or changing project-wide configuration.

## 11. Definition of done
- Requested UI matches the specification as closely as practical.
- Domain files follow `features/<domain>/` conventions.
- Existing business behavior and API contracts are unchanged.
- shadcn/ui and Tailwind v4 patterns are reused consistently.
- Responsive and accessible states are covered.
- TypeScript/lint/tests/build results are reported accurately.

## 12. Required final report format
```text
Summary:
Changed files:
shadcn/ui components used or installed:
Business logic changed: NO (or explicitly approved changes)
Verification: typecheck / lint / tests / build (PASS, FAIL, or NOT RUN)
Notes / blockers:
```

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
