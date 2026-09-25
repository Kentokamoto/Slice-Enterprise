---
name: run-tests
description: Typecheck, lint, test, and build, then smoke-test event pages. Use to test the site.
argument-hint: quick | <event-slug>
---

Run the site's checks, then smoke-test the event pages in a browser. Report what passed and failed.
Don't fix anything unless the user asks.

This run's arguments are `$ARGUMENTS`.

- No argument runs everything.
- `quick` skips the browser smoke test (step 4).
- An event slug (`eggnog`, `taco-ocho`, `slice-a-thon`) runs everything but smoke-tests only that
  event.

## Steps

1. **Check the toolchain.** Find Bun with `command -v bun`, then fall back to `~/.bun/bin/bun`. If
   neither exists, stop and tell the user to install Bun from https://bun.sh. Don't install it
   yourself. If Bun is only at `~/.bun/bin/bun`, use that full path for every command and tell the
   user the dev server needs `~/.bun/bin` on their PATH.

2. **Install dependencies** with `bun install` if `node_modules/` is missing. Then run `git status`
   and tell the user if `bun.lock` changed. Never run `npm install`.

3. **Run the automated checks** in this order. Keep going after a failure so the report covers
   everything.
   - `bun run typecheck`
   - `bun run lint`. If `oxfmt --check` fails, suggest `bun run format` but don't run it unasked,
     because it rewrites files.
   - `bun run test --passWithNoTests`. If Vitest finds no test files, report "no tests" rather than
     a pass.
   - `bun run build`, which matches the Vercel build.

4. **Smoke-test the event pages.** Skip this step for `quick`.
   - Start the dev server with `preview_start` using the `dev` config in `.claude/launch.json`.
   - Read `src/routes.ts` for each event's paths. Read `src/routes/<event>/index.tsx` for the year
     the index redirects to, which is the event's current year.
   - Open each `/<event>` path and confirm it lands on the current year. Unknown paths hit
     `catchall.tsx`, which redirects to `/`, so landing on `/` means the route is broken.
   - Open each `/<event>/<YYYY>` path and confirm the URL stays put. Check `read_console_messages`
     with `onlyErrors` and report errors from the site's own code.
   - On each page, use `javascript_tool` to find the registration URL. It's the `href` of the link
     whose text starts with "Register", or the `src` of the iframe whose `title` ends in
     "Registration". Fetch that URL with `curl -sSL -o /dev/null -w '%{http_code}'`. A current-year
     form must return 200, because anything else blocks sign-ups. A private Google Form returns 401.
     A past-year form that fails is a note, not a failure.
   - Take one screenshot of each current-year registration section so the user can see whether the
     iframe height fits the form.
   - Stop the server with `preview_stop`.

5. **Report** one line per check with pass, fail, or skip. Quote the first few lines of output for
   each failure, and cite the file and line when the output names one.

## Reference

- Scripts: `package.json` and the Commands section of `CLAUDE.md`
- Dev server: `.claude/launch.json` (port 5173)
- Routes: `src/routes.ts`
