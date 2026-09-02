---
name: project-migration
description: SvelteKit → React Router 7 + Vite migration in progress on the react-migration branch
metadata:
  type: project
---

Migrating slice-enterprise from SvelteKit to React Router 7 (framework mode, ssr: false) + Vite.
Shadcn/ui replacing @skeletonlabs/skeleton-svelte. Vitest kept but Svelte test setup removed.

**Why:** User wants to move off Svelte to React ecosystem while keeping Vite builds.

**How to apply:** All new files should be `.tsx`, use React Router conventions. App directory is
configured as `src/` (not the default `app/`). Path alias `~` maps to `src/`.

Phase status:

- Phase 1 (deps + tooling): COMPLETE — dev server returns 200
- Phase 2 (app shell + routing): COMPLETE — root.tsx shell, root-layout.tsx with
  nav+footer+analytics
- Phase 3 (layout conversion): COMPLETE — nested race layouts with useLocation for active year tabs
- Phase 4 (pages): COMPLETE — all 9 pages + 3 redirect routes converted
- Phase 5 (legacy components): COMPLETE — all 7 legacy components + PizzaBackground + 2026
  sub-components
- Phase 6 (CSS + static build): COMPLETE — clean build, preview server 200 on all routes

Key file locations:

- `react-router.config.ts` — appDirectory: "src", ssr: false
- `src/routes.ts` — route definitions
- `src/root.tsx` — HTML shell
- `src/layouts/` — root-layout, eggnog-layout, slice-a-thon-layout, taco-ocho-layout
- `src/routes/` — placeholder .tsx files for each route
