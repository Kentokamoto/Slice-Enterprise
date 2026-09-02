# Contributing to Slice Enterprise

Thanks for your interest in contributing. This document explains how to get set up and how we work
together.

## How to Contribute

- **Report bugs**: Open an issue and include steps to reproduce, expected vs actual behavior, and
  your environment (OS, browser, Bun version).
- **Suggest features**: Open an issue describing the idea and how it fits the project.
- **Submit changes**: Follow the development setup and pull request process below.

## Design

Contributors should align with these design wishes so the site stays consistent and on-brand.

### UX Priorities

- **Mobile First**:A majority of users access the site from their mobile devices. Mobile design
  should be top priority
- **Color Scheme**: A color scheme of the site is yet to be finalized. After a decision has been
  made, only use the colors defined in the tailwind configuration

### Visual & Aesthetic

Style with **Tailwind CSS v4** utility classes. Reuse the shared components in `src/lib/components/`
whenever possible instead of creating custom ones. Compose conditional and variant classes with the
existing helpers (`class-variance-authority`, `clsx`, `tailwind-merge`) rather than
hand-concatenating class strings.

### Accessibility & Inclusivity

- Strive to meet basic [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/) accessibility
  standards.
- Ensure sufficient color contrast and readable font sizes.
- All interactive elements (links, buttons, forms) must be accessible by keyboard and work well with
  screen readers.
- Use semantic HTML elements and proper ARIA attributes where needed.
- Favor inclusive language and content—avoid jargon or anything exclusive.

## Development Setup

### Prerequisites

- **Bun** (v1+): This project uses Bun as the package manager. Use `bun` for install and scripts —
  not npm or yarn.
- A modern browser (Chrome, Firefox, Safari, or Edge).

### Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd slice-enterprise
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Start the development server**:

   ```bash
   bun run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Run checks** (before submitting a PR):
   ```bash
   bun run typecheck  # react-router typegen + tsc --noEmit
   bun run lint       # oxlint + oxfmt --check
   bun run test       # Vitest (unit tests)
   ```

## Project Structure

This is a **React Router 7** app (framework mode, SPA — `ssr: false`).

- **`src/`** — Application source
  - **`root.tsx`** — Document shell (`<html>`, `<head>`, global `<Meta>`/`<Links>`)
  - **`routes.ts`** — Route config; every route is registered here
  - **`routes/`** — Route modules. Each event (`taco-ocho/`, `slice-a-thon/`, `eggnog/`) follows the
    same shape: `layout.tsx` (shared layout), `index.tsx` (redirects to the current year),
    `<YYYY>.tsx` (the year's page), and a `<YYYY>/` folder for per-year components.
  - **`layouts/`** — Shared layouts (e.g. `root-layout.tsx`)
  - **`lib/components/`** — Reusable components (plus `legacy/` for older ones)
  - **`lib/assets/`** — `.webp` images and other bundled assets
- **`public/`** — Static files served as-is (e.g. `favicon.svg`, `pizza.glb`, `.gpx`)
- **`.github/workflows/`** — CI/CD (e.g. deploy)

Put new shared UI in `src/lib/components/` and register new routes in `src/routes.ts`.

## Adding an Event Year

Each event (`taco-ocho`, `slice-a-thon`, `eggnog`) gets a new page per year. The canonical
step-by-step checklist lives in
[`.claude/commands/add-event-year.md`](.claude/commands/add-event-year.md): create `<YYYY>.tsx`,
copy the `<YYYY>/` component folder, register the route in `src/routes.ts`, point the event index at
the new year, then run `bun run typecheck` and `bun run lint`.

- **Using Claude Code?** Run `/add-event-year <event-slug> <year>` to scaffold it automatically.
- **Otherwise**, follow the steps in that file by hand (or paste them into the assistant of your
  choice) — they reference concrete file paths and don't depend on any specific tool.

## Coding Standards

- **Formatting**: oxfmt. Run `bun run format` to format the codebase.
- **Linting**: oxlint. Run `bun run lint` to check; fix any reported issues.
- **TypeScript**: Use TypeScript for logic and type definitions; keep types accurate.

## Pull Request Process

1. **Branch**: Create a branch from `main` with a descriptive name, e.g.
   `fix/registration-validation`, `feat/faq-expand`.
2. **Scope**: Keep PRs focused on one change or feature so they’re easier to review.
3. **Checks**: Ensure `bun run typecheck`, `bun run lint`, and `bun run test` all pass before
   requesting review.
4. **Review**: Someone will review your PR; address feedback and keep the conversation in the PR
   thread.

## Commit Messages

Use clear, concise messages. Prefer present tense and a short summary line.

**Good**:

- `fix: correct registration form validation`
- `feat: add FAQ accordion to home page`
- `chore: update Vitest config`

**Avoid**: vague messages like "fix stuff" or "updates".

## Testing

- **Run tests**: `bun run test` (Vitest, single run, jsdom environment).
- **Location**: Unit tests live next to the code they cover, matching
  `src/**/*.{test,spec}.{js,ts,tsx}` (e.g. `Counter.test.tsx` next to the component).
- **New/changed behavior**: Add or update tests so existing and new functionality stay covered.

## Questions

For questions about the project or contributions, open a GitHub issue or contact the maintainers.
For event-related questions, see the [Contact](README.md#contact) section in the README.
