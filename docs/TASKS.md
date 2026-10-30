# Tasks — Deccan Dentics

Status against `PRD.md`, `ARCHITECTURE.md`, and `DESIGN.md`. Updated 30 Oct 2026.

Mark an item done only after it is in the repo and checked in the browser or by a command.

## 1. Foundation

- [x] Next.js App Router app on Bun, React 19, TypeScript strict, Tailwind 4.
- [x] shadcn `base-nova` wired through `components.json`.
- [x] Design tokens in `src/app/globals.css`.
- [x] Brand contract in `brand-manifest.json`.
- [x] Fonts: Libre Baskerville, Merriweather, Caveat.
- [x] Path alias `@/*` → `src/*`.
- [x] Webpack + PostCSS Tailwind for reliable CSS HMR in `bun run dev`.

## 2. Design system

- [x] Elevated primary / secondary / outline buttons; `xl` size.
- [x] Input, textarea, label, select, card, accordion primitives.
- [x] Framer Motion helpers (`FadeIn`, `HeroMotion`).
- [ ] Honor `prefers-reduced-motion`.
- [ ] Move theme switching to `next-themes`.
- [ ] Split oversized `select.tsx` if behavior grows.

## 3. Marketing site

- [x] Fixed header with desktop nav + mobile menu.
- [x] Hero with clinic tone, CTAs, features, portrait, trust badge.
- [x] Services section (tabbed) from live-site treatments.
- [x] Why choose us section (live-site differentiators + `why-choose-us-img`).
- [x] Branches section (interactive picker for 5 Hyderabad clinics).
- [x] About section with 10+ years / 25k+ / 5 branches / emergency stats.
- [x] Reviews Embla carousel (1 / 2 / 3 visible; focused center scale).
- [x] FAQ accordion.
- [x] Contact enquiry form + Manikonda map + clinic details.
- [x] Professional footer.
- [x] Routes: `/`, `/about`, `/services`, `/reviews`, `/faq`, `/contact`.
- [x] Scroll / entrance animations via Framer Motion.
- [x] Components grouped by feature folder (`home`, `services`, `about`, `reviews`, `faq`, `contact`, `layout`).
- [ ] Replace placeholder reviews with clinic-approved quotes.
- [ ] Confirm patient count line on trust badge (site says 25k+).

## 4. Appointment delivery

- [ ] Client validation with visible errors.
- [ ] Choose delivery method; record in `MEMORY.md`.
- [ ] `POST /api/appointments` (or enquiry) after delivery choice.
- [ ] Until that route exists, do not claim the message was sent.

## 5. Quality

- [x] `bun run build` passes.
- [ ] `bun run lint` clean (verify after carousel/theme lint fixes).
- [ ] Keyboard pass on header, carousel, accordion, form.
- [ ] Light and dark check on every section at ~360px and desktop.

## 6. Suggested next

1. Wire enquiry / appointment delivery.
2. Approved photography and reviews from the clinic.
3. `prefers-reduced-motion` + `next-themes`.
