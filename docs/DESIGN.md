# Design — Deccan Dentics

The clinic should feel quiet, precise, and grown-up. Forest green on a warm off-white page. Soft elevation where a control or a card needs weight. No cartoon depth, no plastic gloss, no extra illustration for its own sake.

Runtime tokens live in `src/app/globals.css`. The same values are recorded in `brand-manifest.json`. Change both together.

The board at `public/deccan-dentics-ref-design.png` is the layout reference. Names printed on that board are not clinic facts.

## 1. Color

Light is the default. Dark replaces the same roles, it does not invent a second palette.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--background` | `#f7faf7` | `#101914` | Page |
| `--foreground` | `#1b3026` | `#e6f0e8` | Text |
| `--primary` | `#287a52` | `#65bd86` | Buttons, links, checks |
| `--primary-foreground` | `#ffffff` | `#102719` | Text on primary |
| `--secondary` | `#e5f0e7` | `#24382a` | Sage chips and secondary buttons |
| `--accent` | `#d9efdf` | `#294533` | Menu highlight, soft hover |
| `--muted` | `#edf3ed` | `#202e24` | Footer bands, support surfaces |
| `--muted-foreground` | `#687b6d` | `#a0b5a4` | Secondary copy |
| `--border` | `#dce7dd` | `#2b3d30` | Hairlines |
| `--ring` | `#409566` | `#65bd86` | Focus |
| `--destructive` | `#dc4545` | `#f87171` | Errors only |
| `--card` | `#ffffff` | `#18241c` | Raised panels |
| `--popover` | `#ffffff` | `#1b2a20` | Menus |

Leaf photography may sit behind a section. It does not replace the background token. Gold (`--chart-4`, `#d2a66c`) is for star ratings only.

## 2. Typography

| Role | Family | Notes |
|---|---|---|
| Headings | Libre Baskerville | Tight leading (1.2), tracking `-0.02em` |
| Body and UI | Merriweather | Size `1rem`, leading 1.6, paragraphs 1.75 |
| Handwriting | Caveat | One short accent per view, such as the hero script line |

Do not set a new font in a component. Use `font-heading`, `font-body`, or `font-script`.

Eyebrows are small, medium, uppercase, primary colored, with `--tracking-wider` (`0.12em`). Example: "Healthy smiles. Happier lives."

| Style | Size token | Typical use |
|---|---|---|
| Display | `--fs-5xl` to `--fs-6xl` | Hero, scaled down on small screens |
| Section | `--fs-4xl` | Section titles |
| Card title | `--fs-2xl` or `text-base` inside dense cards | Service and form titles |
| Body | `--fs-base` | Paragraphs |
| UI | `--fs-sm` | Buttons, fields, nav |
| Meta | `--fs-xs` | Captions |

The hero may use a fluid size, as it does now, as long as it stays in the heading family and does not exceed `--fs-6xl`.

## 3. Spacing and layout

The spacing scale is `--space-1` through `--space-32` and is wired to Tailwind spacing. Use those steps. Do not invent `13px` gaps.

| Token | Value | Use |
|---|---|---|
| `--container-max` | `72rem` | Page width |
| `--container-padding` | `1.5rem` | Side inset |
| `--section-padding-y` | `5rem` | Space between sections |
| `--radius` | `0.875rem` | Buttons and fields |
| `--radius-xl` | `1.4 × radius` | Cards and accordion rows |

Sections stack in one column. From `lg`, the hero is two columns: copy, then portrait. Service and review groups become multi-column only when each card stays readable at `360px`.

Header: logo left, links centered from `lg`, actions right. Below `lg`, hide the text links rather than crushing them. A compact menu is still required before this is called done.

## 4. Elevation

Every elevated control uses a transparent border and two backgrounds: a face, then a hairline gradient. `background-clip` is `padding-box, border-box`.

| Surface | Utility | Behavior |
|---|---|---|
| Primary, secondary, outline buttons | `btn-elevated` plus `btn-primary`, `btn-secondary`, or `btn-outline` | Hover lifts `1px`. Active presses `1px`. Focus ring uses `--ring`. |
| Ghost, link, destructive | Flat | No fake bevel |
| Inputs and select triggers | `control-elevated` `field-inset` | Recessed by about one pixel. No lift. Green edge on focus. Open select uses the green edge without an outline that collides with the menu. |
| Cards and accordion items | `control-elevated` `surface-raised` | Soft shadow. No hover jump. Open accordion item shifts the edge toward primary. |
| Select menu | `surface-overlay` on the popup, `surface-float` on the positioner | The positioner carries the drop shadow so the scrolling list does not clip it. |

Ghost and destructive stay flat on purpose. Depth is for the main actions and for surfaces that sit above the page.

## 5. Components

Use the primitives in `src/components/ui/`.

- **Button.** Primary for Book and Request. Outline for the second hero action. Ghost for the theme icon. Sizes include `default`, `lg`, and `xl` (`h-11`) for the main marketing actions.
- **Input.** Height `2.5rem`, horizontal padding `0.75rem`, placeholder in muted foreground.
- **Select.** Same height and recess as Input. Full width in forms. Highlighted row uses `--accent`. The check is `--primary`.
- **Card.** Header, content, footer. Footer may use a muted band. Titles use the heading font.
- **Accordion.** Separate raised rows with `gap-3`. Question is body medium, not a display heading. Chevron is muted, and primary when open.

Native `<select>` is not used. Links that look like buttons use `Button` as a child or the link variant, not a new style.

## 6. Page pattern

1. Header, sticky in feel, with a translucent background.
2. Hero: eyebrow, display title with one primary-colored phrase, short paragraph, two buttons, four feature chips, portrait with a trust pill.
3. Services: eyebrow, title, tabbed treatments with photo + points.
4. Why choose us: tooth art + numbered differentiators (from live site).
5. About: short clinic story and stats—no unverified founder names.
6. Reviews: Embla cards, stars in `--chart-4`, quote, name.
7. Branches: selectable Hyderabad locations with address + directions.
8. FAQ: accordion.
9. Contact: enquiry form beside map + clinic details.
10. Footer: phone, hours, explore links.

Leaf images from `public/images/` are decorative and `alt=""`. They must not cover text or controls.

## 7. Responsive behavior

- `360–639px`: one column, hero title around `2.35rem`, booking button remains visible. Trust pill may shrink.
- `640–1023px`: feature row can be four columns. Portrait stays under the copy until `lg`.
- `1024px` and up: header links show. Hero is two columns. Container stays at `72rem`.

Tap targets for icon buttons are at least `2rem`. Marketing buttons use `lg` or `xl`.

## 8. Interaction

- Hover on buttons brightens slightly and lifts. Fields only strengthen the border.
- Focus is a `2px` ring in `--ring`, offset `2–3px`. Do not remove it.
- Accordion opens one item at a time unless a design explicitly needs more.
- Select closes after a choice and shows the service name, not an internal id.
- Disabled controls drop to `50%` opacity and ignore clicks.
- Invalid fields swap the border toward `--destructive`.
- Theme switch is immediate and labelled for the destination theme ("Switch to dark mode" or "Switch to light mode").

## 9. Motion

Button lift stays at `150ms ease`. Accordion height uses the shadcn animation.

Section entrances use Framer Motion via `FadeIn` (scroll into view) and `HeroMotion` (landing stagger with a soft blur lift). Review cards use Embla; the selected slide scales up slightly. Ease curve: `[0.22, 1, 0.36, 1]`. Durations around `0.7–0.9s` with short staggered delays. Do not add scroll-jacking, looping illustration, or bounce.

Under `prefers-reduced-motion`, keep color and opacity changes and drop transforms. This media query is not wired yet. Add it before calling motion done.

## 10. Accessibility

- One `h1` on the home page.
- Form controls have visible labels, not placeholder-only labels.
- Decorative images are hidden from assistive tech. The hero portrait has a real alt.
- Contrast follows the token pairs above. Do not put primary green text on a primary button.
- Keyboard order follows the visual order: logo, links, theme, booking, then the page.

## 11. What to avoid

- A second green that is not a token.
- Heavy inner shadows that make fields look disabled.
- 3D press on cards, accordion rows, or menu items.
- Script type on buttons or paragraphs.
- Stock smiles with no relationship to the clinic's own photography once real photos are available.
