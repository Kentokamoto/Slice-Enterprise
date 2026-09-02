---
description: Scaffold a new year for an existing event (taco-ocho, slice-a-thon, eggnog)
argument-hint: <event-slug> <year>
---

Scaffold a new event year for **$ARGUMENTS**.

The first argument is the event slug (one of `taco-ocho`, `slice-a-thon`, `eggnog`), the second is
the four-digit year. If either is missing or the slug isn't a real event folder under `src/routes/`,
stop and ask.

Follow the existing per-event convention exactly — do not invent new structure. Use the event's most
recent year as the template.

## Steps

1. **Find the template year.** In `src/routes/<event>/`, identify the highest existing `<YYYY>.tsx`
   and its matching `<YYYY>/` component folder. That's your template.

2. **Create `src/routes/<event>/<new-year>.tsx`** by copying the template year's `.tsx`, then
   update:
   - `meta` title/description to the new year
   - the `eventDate` constant to the new year's date/time (ask the user for the exact date if it's
     not obvious)
   - any hardcoded date/location/distance display values
   - the component imports to point at `./<new-year>/...` (see step 3)

3. **Create `src/routes/<event>/<new-year>/`** and copy each component from the template year's
   folder (e.g. `Route<oldyear>.tsx`, `Stops<oldyear>.tsx`, `Faq<oldyear>.tsx`). Rename each
   component and its default export from the old year suffix to the new one (e.g. `Route2026` →
   `Route2027`), and update the imports in the new `<new-year>.tsx` accordingly.

4. **Register the route** in `src/routes.ts` — add a line inside the event's `layout(...)` block:

   ```ts
   route('<event>/<new-year>', 'routes/<event>/<new-year>.tsx'),
   ```

5. **Point the index at the new year** — update `src/routes/<event>/index.tsx` so its
   `<Navigate to="/<event>/<new-year>" replace />` targets the new year (only if the new year should
   be the default landing page; confirm with the user).

6. **Verify** with `bun run typecheck`, then `bun run lint`. Report any content placeholders (dates,
   taco stops, FAQ, registration iframe/form IDs) the user still needs to fill in.

## Reference

- Template example: `src/routes/taco-ocho/2026.tsx` +
  `src/routes/taco-ocho/2026/{Route2026,Stops2026,Faq2026}.tsx`
- Index redirect example: `src/routes/taco-ocho/index.tsx`
- Route registration: `src/routes.ts`
