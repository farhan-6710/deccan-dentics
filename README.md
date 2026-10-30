# Deccan Dentics

Public redesign of the Deccan Dentics dental clinic in Hyderabad. The live site is [dddental.in](https://dddental.in/). This repository is the Next.js replacement: a calm, forest-green marketing site for services, branches, and appointment requests.

It is not a patient portal. There are no accounts and no payments.

## Features

Shipped in the app today:

- Light and dark themes from one token set.
- Header, theme switch, and hero.
- Shared button, input, card, select, and accordion styles.

Still to build:

- About, services, reviews, FAQ, contact, and a mobile nav.
- An appointment request that only reports success after the clinic actually receives it.

Product detail is in [docs/PRD.md](docs/PRD.md). Task status is in [docs/TASKS.md](docs/TASKS.md).

## Technology

| Tool | Version in this repo |
|---|---|
| Bun | 1.4.4 |
| Next.js | 16.4.3 |
| React | 19.3 |
| Tailwind CSS | 4 |
| shadcn/ui | `base-nova` on Base UI |
| TypeScript | 5, strict |

UI primitives live in `src/components/ui`. Icons are from `lucide-react`. Fonts are Libre Baskerville, Merriweather, and Caveat, loaded with `next/font`.

## Prerequisites

Install [Bun](https://bun.sh) 1.4 or newer. No global Next.js install is required.

## Setup

From the project root:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

The dev server uses Webpack (`next dev --webpack`).

## Environment variables

None. The site runs with the values in the repo.

Do not create a `NEXT_PUBLIC_` variable for a secret. When appointment delivery is added, put provider keys in server-only variables and list the names, without values, in a future `.env.example`. See [docs/SECURITY.md](docs/SECURITY.md).

The clinic phone `079956 86661` and email `drsadiqali2000@gmail.com` are public contact details from the live site. They are not credentials.

## Database

There is no database. Clinic facts are static and recorded in [`brand-manifest.json`](brand-manifest.json).

A future `appointment_requests` table is sketched in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Do not add a database client until that choice is written into [docs/MEMORY.md](docs/MEMORY.md).

## Scripts

| Command | Purpose |
|---|---|
| `bun install` | Install dependencies |
| `bun run dev` | Start the dev server |
| `bun run lint` | Run ESLint |
| `bun run build` | Production build |
| `bun run start` | Serve the production build |

Add a shadcn component with:

```bash
bunx --bun shadcn@latest add <component>
```

Then style it with the utilities in `src/app/globals.css` rather than a one-off palette. Guidance is in [docs/DESIGN.md](docs/DESIGN.md).

## Project structure

```text
brand-manifest.json     Brand contract: voice, color, type, branches, services
docs/                   PRD, architecture, design, memory, rules, tasks, security
public/images/          Brand, hero, services, tools, and section artwork
src/app/                Routes, root layout, global CSS
src/components/         Header, hero, and feature components
src/components/ui/      shadcn primitives
src/constants/          Shared navigation, and later clinic lists
src/lib/utils.ts        Re-exports the cn helper
```

Folders such as `src/hooks`, `src/services`, `src/utils`, and `src/types` are part of the architecture and should be created when the first real file needs them. See [docs/RULES.md](docs/RULES.md).

## Documentation

| Document | What it decides |
|---|---|
| [docs/PRD.md](docs/PRD.md) | Who the site is for, and what is in or out |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | How the app is put together |
| [docs/DESIGN.md](docs/DESIGN.md) | Tokens, components, layout, motion |
| [docs/MEMORY.md](docs/MEMORY.md) | Decisions, verified facts, and open conflicts |
| [docs/RULES.md](docs/RULES.md) | Coding rules for people and agents |
| [docs/TASKS.md](docs/TASKS.md) | What is done and what is next |
| [docs/SECURITY.md](docs/SECURITY.md) | Data, secrets, and the future appointment route |

## Clinic facts used here

Taken from the live site on 30 Oct 2026. The contact page is the source for branches.

- Kondapur, Manikonda, Rajendranagar, and Toli Chowki.
- Phone `079956 86661`. Email `drsadiqali2000@gmail.com`.
- Monday–Saturday 09:00–20:00, Sunday 14:00–18:00.

The homepage also claims five branches and has named other areas. Those are not shown as confirmed locations until the clinic says so. Details and the open questions are in [docs/MEMORY.md](docs/MEMORY.md).
