# Contributing to Slice Enterprise

Thanks for your interest in contributing. This document explains how to get set up and how we work together.

## How to Contribute

- **Report bugs**: Open an issue and include steps to reproduce, expected vs actual behavior, and your environment (OS, browser, Bun version).
- **Suggest features**: Open an issue describing the idea and how it fits the project.
- **Submit changes**: Follow the development setup and pull request process below.

## Design

Contributors should align with these design wishes so the site stays consistent and on-brand.

### UX Priorities
- **Mobile First**:A majority of users access the site from their mobile devices. Mobile design should be top priority
- **Color Scheme**: A color scheme of the site is yet to be finalized. After a decision has been made, only use the colors defined in the tailwind configuration

### Visual & Aesthetic

Use the provided component library whenever possible instead of creating custom components.
**Component Library:** [Skeleton](https://www.skeleton.dev/)

### Accessibility & Inclusivity

- Strive to meet basic [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/) accessibility standards.
- Ensure sufficient color contrast and readable font sizes.
- All interactive elements (links, buttons, forms) must be accessible by keyboard and work well with screen readers.
- Use semantic HTML elements and proper ARIA attributes where needed.
- Favor inclusive language and content—avoid jargon or anything exclusive.

## Development Setup

### Prerequisites

- **Bun** (v1+): This project uses Bun as the package manager. Use `bun` for install and scripts — not npm or yarn.
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
   bun run check    # TypeScript / Svelte
   bun run lint     # ESLint + Prettier
   bun run test     # Vitest (unit tests)
   ```

## Project Structure
**Note**: Folder structure subject to change for 2026 site.

- **`src/`** — Application source
  - **`app.html`**, **`app.css`**, **`app.d.ts`** — App shell and global styles/types
  - **`lib/`** — Reusable components and utilities (e.g. `Accordion.svelte`, `Registration.svelte`, `FAQ.svelte`)
  - **`lib/assets/`** — Images and other static assets used by the app
  - **`routes/`** — SvelteKit file-based routes
    - `+layout.svelte`, `+page.svelte` — Root layout and home page
    - `race-day-details/`, `taco/`, `thank-you/` — Route segments with their own `+page.svelte`
- **`static/`** — Static files served as-is (e.g. favicon, GPX)
- **`.github/workflows/`** — CI/CD (e.g. deploy)

Put new shared UI in `src/lib/` and new pages under `src/routes/` following SvelteKit conventions.

## Coding Standards

- **Formatting**: Prettier. Run `bun run format` to format the codebase.
- **Linting**: ESLint. Run `bun run lint` to check; fix any reported issues.
- **TypeScript**: Use TypeScript for logic and type definitions; keep types accurate.
- **Svelte**: Follow existing patterns in `src/lib/` and `src/routes/` for components and structure.

**Note**: The linter and formatter will be updated to use oxlint and oxfmt

## Pull Request Process

1. **Branch**: Create a branch from `main` with a descriptive name, e.g. `fix/registration-validation`, `feat/faq-expand`.
2. **Scope**: Keep PRs focused on one change or feature so they’re easier to review.
3. **Checks**: Ensure `bun run check`, `bun run lint`, and `bun run test` all pass before requesting review.
4. **Review**: Someone will review your PR; address feedback and keep the conversation in the PR thread.

## Commit Messages

Use clear, concise messages. Prefer present tense and a short summary line.

**Good**:
- `fix: correct registration form validation`
- `feat: add FAQ accordion to home page`
- `chore: update Vitest config`

**Avoid**: vague messages like "fix stuff" or "updates".

## Testing

- **Run tests**: `bun run test` (single run) or `bun run test:unit` (watch mode).
- **Location**: Unit tests live next to the code they cover (e.g. `page.svelte.test.ts` next to the page) or in a `*.test.ts` / `*.spec.ts` file.
- **New/changed behavior**: Add or update tests so existing and new functionality stay covered.

## Questions

For questions about the project or contributions, open a GitHub issue or contact the maintainers. For event-related questions, see the [Contact](README.md#contact) section in the README.
