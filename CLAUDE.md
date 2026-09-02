# CLAUDE.md

Project memory for Claude Code. Marketing/landing site for a Seattle running-and-food event org
(Slice-a-Thon, Taco Ocho, Eggnog Leg Jog).

## Stack

- **React Router 7** in framework mode, SPA (`ssr: false`) — see `react-router.config.ts`
- **React 19**, **TypeScript** (strict), **Vite 6**, **Tailwind CSS v4**
- 3D via `three`; icons via `lucide-react`; class utils via `class-variance-authority` + `clsx` +
  `tailwind-merge`
- Path alias: `~` → `/src` (configured in `tsconfig.json` and `vite.config.ts`)

## Package manager: Bun

Use `bun run <script>`. `bun.lock` is the only lockfile. Vercel (`vercel.json`) and CI
(`.github/workflows/deploy.yml`) both build with Bun. Do not reintroduce `package-lock.json` — don't
run `npm install`.

## Commands

- `bun run dev` — dev server
- `bun run build` — production build (output `build/client`)
- `bun run typecheck` — `react-router typegen && tsc --noEmit`
- `bun run lint` — `oxlint && oxfmt --check .`
- `bun run format` — `oxfmt .`
- `bun run test` — `vitest run` (jsdom; matches `src/**/*.{test,spec}.{js,ts,tsx}` — none exist yet)

## Layout

- `src/routes.ts` — route config (all routes registered here)
- `src/routes/` — route modules. Event folders (`taco-ocho/`, `slice-a-thon/`, `eggnog/`) each
  follow:
  - `layout.tsx` — shared layout for the event
  - `index.tsx` — redirects to the current year (`<Navigate to="/<event>/<year>" replace />`)
  - `<YYYY>.tsx` — the year's page (meta, countdown, tabs, registration)
  - `<YYYY>/` — per-year components (e.g. `Route2026.tsx`, `Stops2026.tsx`, `Faq2026.tsx`)
- `src/layouts/root-layout.tsx`
- `src/lib/components/` — shared components (`PizzaBackground`, `StravaEmbed`) and `legacy/`
  (Counter, Registration, FAQ, etc.)
- `src/lib/assets/` — `.webp` images
- `public/` — static assets (`favicon.svg`, `pizza.glb`, `.gpx`)

To add a new event year, use the `/add-event-year` slash command.

## Conventions

- Formatting: **oxfmt** (`.oxfmtrc.json`) — **tabs**, single quotes, no trailing comma, printWidth
  100, `proseWrap: always`, Tailwind class sorting via `sortTailwindcss`. Formats JS/TS/JSX/TSX,
  CSS, Markdown, and JSON.
- Linting: **oxlint** (`.oxlintrc.json`) — `correctness` category (error) across the typescript,
  unicorn, oxc, and react plugins. `react/set-state-in-effect` is disabled (legit WebGL
  error-handling in `PizzaBackground.tsx`).

## Gotchas / stale artifacts

- **`README.md` is stale** — it describes SvelteKit + Font Awesome; the project has migrated to
  React Router 7. Trust `package.json`/config over the README.
- Leftover `.svelte-kit/` build artifacts remain from the migration.
- `.github/workflows/deploy.yml` (GitHub Pages, manual-only) still references SvelteKit-style
  `_app/immutable/assets/` paths in its verify step.
- See `memory/project_migration.md` for migration history.
