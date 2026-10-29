# Architecture — Deccan Dentics

Next.js App Router marketing site. Most pages are server-rendered. Client islands handle theme, menus, carousels, accordions, service tabs, the enquiry form, and motion.

No database or auth in the current build.

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
| Fonts | Libre Baskerville, Merriweather, Caveat via `next/font` |
| Alias | `@/*` → `src/*` |

Dev uses `next dev --webpack` with `@tailwindcss/postcss`.

## 2. Runtime shape

```text
Browser
  └─ Next.js
       ├─ Server: layout, pages, most section shells, footer
       ├─ Client: header, theme, services tabs, Embla, contact form, motion
       └─ API routes: none yet
```

Clinic facts live in `src/data/`. Nav links live in `src/constants/nav.ts`.

## 3. Folder map

```text
src/app/                     Routes: /, /about, /services, /reviews, /faq, /contact
src/components/
  home/                      Hero + hero-only pieces (features, trust badge)
  services/                  Services section
  why-choose-us/             Why choose us + reason rows
  about/                     About section
  reviews/                   Reviews section + Embla carousel
  branches/                  Branches section + interactive picker
  faq/                       FAQ section
  contact/                   Contact / enquiry section
  layout/                    SiteHeader, SiteFooter, PageShell, theme helpers
  motion/                    FadeIn, HeroMotion
  ui/                        shadcn primitives only
src/constants/               Shared constants (nav)
src/data/                    Clinic content (clinic, services, faqs, reviews, why-choose-us)
src/lib/                     cn re-export only
public/images/               Brand and section images
docs/                        Product + engineering docs
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

Every page uses `PageShell` (`layout/PageShell.tsx`): fixed header, main offset, footer.

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

## 6. Theme

`layout/ThemeScript` applies `dark` before paint from `localStorage` or `prefers-color-scheme`. `layout/ThemeToggle` flips the class without React theme state (avoids hydration lint issues).

## 7. Content source

Facts from [dddental.in](https://dddental.in/): phone, email, Manikonda primary branch, Hyderabad locations, hours, services, clinic narrative. Reviews in `reviews.js` are placeholders until the clinic supplies approved quotes.

## 8. Boundaries

- No runtime WordPress fetch.
- Enquiry form must not claim success until a real delivery API exists.
- No secrets in client components.
