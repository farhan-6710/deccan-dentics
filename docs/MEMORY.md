# Memory — Deccan Dentics

Last updated 30 Oct 2026 (components grouped by feature folder). Read this before changing brand, scope, or structure.

## 1. What this is

A redesign of the Deccan Dentics clinic site at [https://dddental.in/](https://dddental.in/). The repository is a Next.js app called `deccan-dentics-dental-clinic`. The live site is still WordPress. This app does not call that WordPress API.

The product is a public brochure plus an appointment request. It is not a patient portal.

## 2. Brand decisions already made

- Tagline: "Healthy smiles. Happier lives."
- Hero line: "Expert Dental Care for a Brighter, Healthier You".
- Palette, type, and radius are the tokens in `src/app/globals.css` and `brand-manifest.json`.
- Headings are Libre Baskerville. Body is Merriweather. Caveat is a single handwritten accent.
- Buttons are gently raised. Fields are slightly inset. Cards and accordion rows are quiet raised panels. Menus float. Nothing else gets a bevel.
- Light and dark themes share roles. Dark is not a separate brand.
- Content modules live under `src/data/`. Reviews in `reviews.js` are placeholders until approved.
- Motion: Framer Motion for section entrances; Embla for reviews.

The old homepage line "Don't Just Smile, Shine with Confidence!" is legacy. Do not put it in the UI unless the clinic asks.

## 3. Facts checked on the live site

Checked 30 Oct 2026.

- Phone on the contact page: `079956 86661`.
- Email on the contact page: `drsadiqali2000@gmail.com`. This is a public inbox, not an app secret.
- Hours on the contact page: Monday–Saturday 09:00–20:00, Sunday 14:00–18:00.
- Contact page branches: Kondapur, Manikonda, Rajendranagar (listed beside Videnta), Toli Chowki. Addresses are in the manifest.
- Homepage proof: 10+ years, 25k+ patients, 5 branches, family dentistry.
- Service pages that exist today are listed in `brand-manifest.json`.

## 4. Conflicts to resolve before launch

- The homepage says 5 branches and has also mentioned Malakpet, Abids, and Aramghar. The contact page shows four. Do not invent the missing branch.
- The hero badge currently says "1000+ Happy Smiles" because the design board did. The live site says 25k+. Ask the clinic which number is true.
- Some snippets show different Sunday hours for Toli Chowki. Do not print a second schedule until the clinic confirms it.
- The design board shows a portrait labelled as a founder. That name is not a verified staff fact from `dddental.in`. Do not publish it.
- Third-party directories list clinicians. Those lists are not approved bios.

## 5. Technical decisions

- Bun is the package manager. Commands go through `bun` or `bunx`.
- shadcn style is `base-nova`. Primitives sit on Base UI, not Radix.
- `cn` comes from the `cn` package. `src/lib/utils.ts` re-exports it.
- Components are grouped by feature under `src/components/` (`home`, `services`, `why-choose-us`, `about`, `reviews`, `branches`, `faq`, `contact`, plus `layout`, `motion`, `ui`). See `ARCHITECTURE.md`.
- Theme is a `dark` class on `<html>`, written by `layout/ThemeToggle`. Move this to `next-themes` rather than adding a second toggle.
- Dev server is `next dev --webpack` even though `next.config.ts` also mentions Turbopack CSS. Leave that alone unless dev is being fixed on purpose.
- No database, auth, or email provider is installed. Do not add one inside a visual change.
- Appointment delivery is undecided. The form must not fake a successful send.

## 6. Lessons from the design work

- A 7% black mix on a white field looks dirty, not recessed. Field faces stay almost white. The inset is about one pixel.
- An open select should not draw a focus outline. The outline sits outside the trigger and collides with the menu. Use the green border instead while `data-popup-open` is set.
- `overflow` on a popup clips its own shadow. The drop shadow belongs on the floating positioner (`surface-float`). Do not put CSS `filter` on an ancestor of a `position: fixed` popover or the menu will jump.
- Card shadows disappear if the same element uses `overflow: hidden`. Prefer the shadow, and round images themselves.
- Accordion questions should stay in the body font. Display type on every row feels costume-like.

## 7. Constraints

- Clinic copy must be traceable to the live site or to a confirmation recorded here.
- No payments, accounts, OTP, or medical-history fields in this version.
- Source files we write stay at or under 120 lines. `src/app/globals.css` is the token file and may be longer. See `RULES.md`.
- `select.tsx` from shadcn is already over 120 lines. Split it before adding behavior, rather than letting it grow.
- Decorative leaves must not block clicks.

## 8. How to record a new decision

Add a short dated note to section 5 or section 4. Update `brand-manifest.json`, `TASKS.md`, and the doc that owns the topic. Do not leave the decision only in a chat.
