# Architecture — Deccan Dentics

Next.js App Router marketing site plus a client-side `/admin` operations dashboard. Most marketing pages are server-rendered. Client islands handle theme, menus, carousels, accordions, service tabs, the enquiry form, motion, and the admin shell.

No backend database yet. Admin data lives in Zustand stores seeded in the browser. Admin access is a client password gate in `sessionStorage` — not real server auth.

## 1. Stack

| Piece | Choice |
|---|---|
| Runtime | Bun 1.4 |
| Framework | Next.js 16 App Router, React 19 |
| Language | TypeScript (`strict`) |
| Styling | Tailwind CSS 4 — tokens in `src/app/globals.css` |
| UI | shadcn `base-nova` (Base UI) |
| Icons | lucide-react |
| Motion | Framer Motion (`FadeIn`, `HeroMotion`) |
| Carousel | Embla + Autoplay |
| Client state | Zustand (`patients`, `appointments`, `schedule` stores) |
| Fonts | Libre Baskerville, Merriweather, Caveat via `next/font` |
| Alias | `@/*` → `src/*` |

Dev uses `next dev --webpack` with `@tailwindcss/postcss`.

## 2. Runtime shape

```text
Browser
  └─ Next.js
       ├─ Server: layout, pages, most section shells, footer
       ├─ Client: header, theme, services tabs, Embla, contact form, motion, admin
       └─ API routes: none yet
```

Clinic facts live in `src/data/`. Nav links live in `src/constants/nav.ts`. Admin seed/constants live under `src/constants/{patients,appointments,schedule,todos,dashboard}/`.

## 3. Folder map

```text
src/app/                     Marketing routes + /admin/*
src/components/
  home/                      Hero + hero-only pieces (features, trust badge)
  services/                  Services section
  why-choose-us/             Why choose us + reason rows
  about/                     About section
  reviews/                   Reviews section + Embla carousel
  branches/                  Branches section + interactive picker
  faq/                       FAQ section
  contact/                   Contact / enquiry section
  admin/                     Dashboard shell, auth dialog, schedule/patients/appointments
  layout/                    SiteHeader, SiteFooter, PageShell, theme helpers
  motion/                    FadeIn, HeroMotion
  ui/                        shadcn primitives only
src/stores/                  Zustand (`useClinicStore` for admin entities)
src/hooks/                   Shared hooks (incl. use-admin-auth)
src/constants/               Shared + per-page admin seeds (patients, appointments, …)
src/types/                   Shared types (incl. admin + todo models)
src/data/                    Marketing clinic content modules
src/lib/                     cn re-export only
public/images/               Assets grouped by feature (see below)
docs/                        Product + engineering docs
```

**Images**

```text
public/images/
  brand/          logo
  hero/           hero portrait
  services/       per-service art
  faq/            FAQ illustration
  about/          about imagery
  why-choose-us/  why-choose art
  tools/          cropped dental instruments (floating accents)
  decor/          misc accents (non-leaf)
  source/         original collages (not used in UI)
```

**Rule of thumb:** put a section and its private children in the matching feature folder. Shared chrome goes in `layout/`. Shared motion helpers go in `motion/`. Never put feature UI in `ui/`.

## 4. Routes

| Route | Content |
|---|---|
| `/` | Hero → Services → Why us → About → Reviews → Branches → FAQ → Contact |
| `/about` | About + Why choose us |
| `/services` | Services only |
| `/reviews` | Reviews only |
| `/faq` | FAQ only |
| `/contact` | Branches + Contact |
| `/admin` | Redirects to `/admin/dashboard` |
| `/admin/dashboard` | Dashboard (stats + shortcuts) |
| `/admin/schedule` | Working days and opening hours |
| `/admin/patients` | Patient CRUD via `useClinicStore` |
| `/admin/appointments` | Appointments linked by `patientId` |
| `/admin/calendar` | Month / week / day appointment calendar |

Marketing pages use `PageShell` (`layout/PageShell.tsx`): fixed header, main offset, footer. Admin routes use `app/admin/layout.tsx` → `AdminShell` (sidebar, header, mandatory auth dialog).

## 5. Key components

| Path | Role |
|---|---|
| `layout/SiteHeader` | Fixed nav, mobile menu, theme, Book → `/contact` |
| `layout/SiteFooter` | Brand, explore links, visit details, hours |
| `home/HeroSection` | Landing hero + staggered entrance |
| `services/ServicesSection` | Tabbed treatments from `data/services` |
| `why-choose-us/WhyChooseUsSection` | Six differentiators + tooth art |
| `about/AboutSection` | Clinic story + stats |
| `reviews/ReviewsCarousel` | Embla; 1 / 2 / 3 slides; focused scale |
| `branches/BranchesSection` | Interactive Hyderabad branch picker |
| `faq/FaqSection` | Interactive FAQ picker from `data/faqs` |
| `contact/ContactSection` | Enquiry form, map, clinic details rail |
| `motion/FadeIn` | Scroll-in when section is in view |
| `motion/HeroMotion` | Load-time hero entrance only |
| `motion/FloatingTools` | Desktop-only floating instrument accents |

## 6. Theme

Theme is owned by `layout/ThemeProvider` (`next-themes`, `attribute="class"`, `defaultTheme="light"`). `layout/ThemeToggle` uses `useTheme` and is currently not mounted in the header.

## 7. Content source

Facts from [dddental.in](https://dddental.in/): phone, email, Manikonda primary branch, Hyderabad locations, hours, services, clinic narrative. Reviews in `reviews.js` are placeholders until the clinic supplies approved quotes.

## 8. Admin data models

Minimal, relational-friendly shapes in `src/types/admin.ts`:

- `Patient` — `id`, name, phone, age, profession, optional email/address, timestamps
- `Appointment` — `id`, `patientId`, date, time, reason, status, optional notes, timestamps
- `DaySchedule` — weekday, `isOpen`, open/close times

Stores mirror future tables. Deleting a patient also removes their appointments in the UI layer.

## 9. Boundaries

- No runtime WordPress fetch.
- Enquiry form must not claim success until a real delivery API exists.
- Admin password is a temporary client gate only; replace with server auth before any real patient data.
- Do not treat `sessionStorage` admin unlock as authorization for a future API.
