# AGENTS.md — Fast Codex Rules (HM Store)

## Stack and mission

- Next.js 16 App Router, TypeScript strict, Tailwind CSS v4, shadcn/ui.
- Implement only the requested change. For UI requests, change presentation only and preserve behavior.
- Reuse installed shadcn/ui components, existing tokens, patterns, and package versions.
- Do not install, upgrade, or replace dependencies unless the task needs it and the user approves.

## Hard boundaries

- For UI-only requests, NEVER change business rules, CRUD, state transitions, data fetching, API contracts, auth, validation semantics, database, server actions, route handlers, or environment variables.
- Preserve existing functionality and loading, empty, error, retry, and success behavior.
- Do not replace real data with mock data unless explicitly asked for a mockup. Keep mocks isolated.
- Do not delete, refactor, or edit unrelated files. If a UI request truly requires a protected change, explain the blocker and ask before making it.
- Keep secrets and database access on the server; do not import server-only modules into client components.

## Project structure

- `src/app/`: routes and layout composition.
- `src/components/ui/`: shared shadcn/ui primitives.
- `src/components/shared/`: cross-feature components when genuinely reused.
- `src/features/<domain>/components/`: domain-specific UI.
- `src/features/<domain>/data/`: mock fixtures when required.
- `src/features/<domain>/types/`: domain TypeScript types.
- `src/features/<domain>/hooks/`: client-side state and API orchestration; no secrets or direct client DB access.
- Follow existing feature conventions; never reorganize a feature solely to satisfy this layout.

## UI and code rules

- Prefer existing shadcn/ui components; check only the components directly needed for the task.
- Use Tailwind v4 semantic tokens (`bg-background`, `text-foreground`, etc.) and the current design system.
- Keep responsive layouts and accessibility intact. Preserve light/dark mode if already supported.
- Default to Server Components; add `"use client"` only for actual client interactions.
- Use existing TypeScript types; avoid `any`, unnecessary dependencies, abstractions, and suppressions.
- Do not change established routing, caching, or data behavior for visual adjustments.

## Fast execution policy

- **UI_ONLY** (styles, layout, header, cards, mockup): inspect the target component and its immediate imports only. Implement directly; no repository-wide exploration, broad planning, or unrelated refactors.
- **FEATURE** (new requested UI behavior): inspect only relevant feature components, hooks, and types; expand scope when a concrete dependency requires it.
- **LOGIC** (explicit API/business changes): inspect the necessary call chain and validate its behavior; respect approval boundaries.
- Do not repeatedly read files already inspected. Do not open framework docs for routine JSX, CSS, or Tailwind edits.
- For Next.js-specific APIs or uncertain breaking changes, read **only the relevant** local `node_modules/next/dist/docs/` section before implementing that API.
- Use an existing installed shadcn component without CLI checks; inspect `components.json` or run the shadcn CLI only when adding a missing component.
- For UI_ONLY, prefer focused lint/type checks where practical. Do **not** run a full build or the full test suite by default. Run broader checks for impacted behavior, explicit requests, or release-level tasks.
- Never claim a check passed unless it actually ran. If an error is unrelated, report it rather than expanding the change.
- Make the smallest safe change and finish with a concise summary: files changed, behavior preserved, and checks run/not run.

## Approval required

Ask before modifying protected business logic, replacing customized shared UI/theme, changing project configuration, installing nonessential packages, or doing broad refactors/deletions.
