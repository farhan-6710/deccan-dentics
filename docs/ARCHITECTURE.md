# Architecture — Deccan Dentics

The site is a Next.js App Router application. Pages are mostly server-rendered. Client islands handle theme, menus, carousels, accordions, service tabs, and the enquiry form.

There is no database and no authentication in the current build.

## 1. Stack

| Piece | Choice |
|---|---|
| Runtime | Bun 1.4 |
| Framework | Next.js 16.4 App Router, React 19 |
| Language | TypeScript, `strict` |
| Styling | Tailwind CSS 4, tokens in `src/app/globals.css` |
| UI | shadcn `base-nova` on Base UI |
| Icons | lucide-react |
| Motion | Framer Motion (`FadeIn`, `HeroMotion`) |
| Carousel | Embla Carousel React + Autoplay |
| Fonts | `next/font`: Libre Baskerville, Merriweather, Caveat |
| Path alias | `@/*` → `src/*` |

`next.config.ts` enables `cacheComponents`, `partialPrefetching`, and `experimental.agentFeedback`. Dev uses `next dev --webpack` with `@tailwindcss/postcss`.

## 2. Runtime shape

```text
Browser
  └─ Next.js server
       ├─ Server components: layout, pages, About, Reviews shell, FAQ, Footer
       ├─ Client islands: header, theme, services tabs, Embla reviews, contact form, motion
       └─ Route handlers: none yet
```

Clinic facts live in `src/data/` (`clinic.ts`, `services.ts`, `faqs.ts`, `reviews.js`). Navigation is in `src/constants/nav.ts`.

## 3. Folder map

```text
src/app/                 routes (/, /about, /services, /reviews, /faq, /contact)
src/components/          feature sections + SiteHeader / SiteFooter / PageShell
src/components/ui/       shadcn primitives
src/components/motion/   Framer Motion helpers
src/constants/           nav links
src/data/                clinic content and reviews
src/lib/                 cn re-export
public/images/           logo, hero, doctor, leaves, services art
docs/                    product and engineering docs
```

## 4. Routes

| Route | Content |
|---|---|
| `/` | Full marketing page: Hero → Services → About → Reviews → FAQ → Contact |
| `/about` | Header + About + Footer |
| `/services` | Header + Services + Footer |
| `/reviews` | Header + Reviews + Footer |
| `/faq` | Header + FAQ + Footer |
| `/contact` | Header + Contact enquiry + Footer |

`PageShell` wraps every page with fixed `SiteHeader`, main padding for the header offset, and `SiteFooter`.

## 5. Key components

| Component | Role |
|---|---|
| `SiteHeader` | Fixed top nav, mobile menu, theme, Book Appointment → `/contact` |
| `SiteFooter` | Brand, explore links, Manikonda visit details, hours |
| `HeroSection` | Landing hero with staggered Framer entrance |
| `ServicesSection` | Tabbed services from `src/data/services.ts` |
| `AboutSection` | Clinic story + stats from `dddental.in` |
| `ReviewsCarousel` | Embla: 1 / 2 / 3 slides visible; selected slide scaled |
| `FaqSection` | Accordion from `src/data/faqs.ts` |
| `ContactSection` | Enquiry form (not booking), map embed, clinic details |
| `FadeIn` / `HeroMotion` | Scroll-in and hero entrance motion |

## 6. Theme

`ThemeScript` runs before paint to apply `dark` from `localStorage` or `prefers-color-scheme`. `ThemeToggle` flips the class without storing React theme state (avoids hydration lint issues).

## 7. Content source

Facts are taken from [dddental.in](https://dddental.in/): phone `079956 86661`, email `drsadiqali2000@gmail.com`, Manikonda primary branch, five Hyderabad locations, hours, services, and clinic narrative. Reviews in `reviews.js` are placeholder UX content until the clinic supplies approved quotes.

## 8. Boundaries

- No runtime WordPress fetch.
- Enquiry form does not claim success until a real delivery API exists.
- No secrets in client components.
