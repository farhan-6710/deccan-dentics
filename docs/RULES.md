# Agent Rules & Development Guidelines

Short, binding rules for Deccan Dentics. Prioritize clarity over cleverness. Read `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, and `MEMORY.md` before changing established decisions.

---

## 1. Core Principles

- Write clean, pragmatic, beginner-friendly, maintainable code.
- Each function, component, and module must have one clear responsibility.
- Prefer simple, explicit logic over clever shortcuts, deep nesting, and unnecessary abstractions.
- Repeated code is acceptable when extracting it adds unnecessary complexity. Reuse shared business logic when it improves consistency.
- Avoid overengineering, premature optimization, redundant wrappers, and unnecessary architectural layers.
- Handle relevant edge cases, invalid inputs, and expected failures explicitly.
- Follow existing project conventions and decisions recorded in `MEMORY.md`.
- Prioritize readability, reliability, and maintainability over minimizing lines of code.

## 2. Strict File Size & Code Splitting

- **HARD RULE: No TypeScript or TSX source file may exceed 120 lines**, including imports, blank lines, and comments.
- Split files before they exceed the limit. Do not treat 120 lines as an approximate target.
- Extract meaningful child components, hooks, services, utilities, constants, and types into appropriate files.
- Keep each file focused on one responsibility and easy to understand independently.
- Do not create meaningless files or split cohesive logic arbitrarily just to meet the limit.
- Keep the folder structure predictable and related files easy to locate.
- `src/app/globals.css` is the single design-token stylesheet and is exempt. Do not split it into partials that duplicate tokens.
- A shadcn file that is already over 120 lines, notably `src/components/ui/select.tsx`, must be split before new behavior is added to it.

## 3. Naming Conventions

Follow consistent naming throughout the project.

| Item | Convention | Example |
|---|---|---|
| Constants | `SCREAMING_SNAKE_CASE` | `CLINIC_PHONE_TEL` |
| Components and component filenames | `PascalCase` | `ServiceCard.tsx` |
| Variables and functions | `camelCase` | `branchList`, `formatPhone()` |
| Custom React hooks | `camelCase`, prefixed with `use` | `useTheme.ts` |
| Object properties | `camelCase` | `branchId` |
| Types and interfaces | `PascalCase` | `AppointmentRequest` |
| Utility and service filenames | Descriptive `camelCase` | `formatPhone.ts` |
| Route segments | `kebab-case` | `dental-implants` |

- Use meaningful, descriptive names. Avoid vague names when a precise name is available.
- Follow framework-required naming conventions where necessary, consistently and without compromising functionality.

## 4. Architecture & Folder Structure

Use clean architecture pragmatically. Organize code by responsibility under `src/`:

- `app/` — Next.js App Router pages, layouts, and route handlers.
- `components/` — Reusable UI components, organized by feature where appropriate.
- `components/ui/` — shadcn primitives only.
- `hooks/` — Reusable custom React hooks.
- `services/` — API communication and external service operations.
- `utils/` — Reusable helper functions and pure utilities.
- `constants/` — Shared constants and fixed definitions.
- `config/` — Centralized application and environment configuration, when environment config exists.
- `types/` — Shared TypeScript types and interfaces.
- `lib/` — Reserved for the `cn` re-export. Do not add features here.

Additional folders are acceptable when they provide a clear organizational benefit.

- Keep UI rendering, business logic, data fetching, and shared utilities separated where appropriate.
- Keep feature-specific code close to the feature; move genuinely shared code to common folders.
- Prefer the simplest architecture that satisfies current requirements.
- Do not introduce unnecessary design patterns, dependencies, or layers.

## 5. Centralized Configuration & Consistency

- Maintain a single source of truth for shared values and definitions.
- Clinic facts that appear in the UI (phone, email, branches, services, hours) come from constants derived from `brand-manifest.json`, not from strings copied into components.
- Centralize route paths in `src/constants/routes.ts` when more than one route exists, and API paths in `src/constants/api.ts` when a route handler exists.
- Use environment variables for environment-specific values. Never expose secrets or server-only variables to the client.
- Follow consistent patterns across similar features, services, and components.
- Reuse existing utilities and shared implementations when appropriate.
- Introduce shared files and abstractions when they improve consistency and maintainability, not merely to centralize everything.
- Use `globals.css` design tokens and existing shared configuration rather than duplicating hex values.

## 6. UI/UX & Component Standards

- Prioritize polished UI/UX, usability, accessibility, and visual consistency. Follow `DESIGN.md`.
- Maintain consistent typography, colors, spacing, and components using centralized design tokens.
- Build mobile-first, responsive interfaces for mobile, tablet, and desktop.
- Support light and dark themes using centralized tokens. New theme work uses `next-themes` instead of a second `localStorage` writer. Until that migration, extend `ThemeToggle` rather than replacing it ad hoc.
- Use subtle motion only when helpful and respect `prefers-reduced-motion`.
- Use shadcn primitives consistently, including `Select` instead of a native `<select>`.
- Reuse shared layouts, navigation, and common UI components.
- Keep components small, focused, and readable. Extract complex or reusable sections into child components.
- Avoid deeply nested JSX, unnecessary prop drilling, complicated conditional rendering, and redundant wrappers.
- Interactive controls must work as labelled and provide clear feedback.
- Handle loading, empty, error, success, and disabled states wherever relevant.
- Use semantic HTML, accessible labels, keyboard navigation, and visible focus states.

## 7. Functions, State & Error Handling

- Each function must perform one clearly defined task and have a descriptive name.
- Prefer early returns and straightforward conditionals over unnecessary nesting.
- Extract calculations or complex conditions into clearly named variables or functions when that improves readability.
- Follow React hook rules and avoid unnecessary state, effects, and re-renders.
- Use the simplest appropriate state approach: React state, URL state, or server state.
- Avoid duplicated or synchronization-heavy client state.
- Keep API calls in services and reusable stateful logic in hooks where appropriate.
- Validate inputs at appropriate boundaries, handle expected errors, and show clear user-facing feedback.
- Avoid silently swallowing errors, redundant validation, and unnecessary defensive checks.

## 8. TypeScript & Code Quality

- Follow Next.js App Router conventions and use strict TypeScript.
- Define appropriate types for function parameters, return values, component props, and API responses.
- Avoid `any` and unnecessary type assertions; use type-safe solutions.
- Keep shared types in `types/` and feature-specific types near their usage.
- Use `as const` when it provides meaningful type safety.
- Use semantic, maintainable code and avoid unnecessary generic abstractions.
- Add no dependency or architectural layer without a clear need.
- This Next.js version differs from older training data. Read `node_modules/next/dist/docs/` before using an unfamiliar Next API.

## 9. Security & Product Scope

- Never expose secrets, private credentials, or server-only environment variables to the client or repository.
- The published clinic email and phone are public contact details. They are not passwords, API keys, or session identifiers.
- Validate appointment input on the server when a route handler exists. Do not trust the form alone.
- Do not collect medical history, diagnoses, images of teeth, or insurance numbers in this version.
- Do not store appointment drafts or clinical notes in `localStorage`. Theme preference is the only client storage in use.
- There is no authentication. Do not add accounts, OTP, or a staff dashboard unless `PRD.md` changes.
- Do not add payments, carts, or online checkout.
- Do not add a database package until the choice is written into `MEMORY.md`.
- Authorize any future staff tool on the server. Never gate access with a hidden button alone.
- Never commit real credentials. The public phone and email may be documented because they are already on `dddental.in`.
- Never claim a branch, statistic, price, or doctor is real unless `brand-manifest.json` or `MEMORY.md` confirms it.
- Understand the impact before making destructive changes.
- Never claim a feature works unless it has been implemented and verified.

## 10. Documentation & Development Workflow

- Understand the existing codebase and relevant documentation before making changes.
- Read `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, and `MEMORY.md` before changing established requirements or decisions.
- Work in small, logical phases and keep the application runnable.
- Reuse existing working code; avoid unrelated refactoring and scope creep.
- Keep `README.md` accurate, including setup, environment variables, commands, and project structure.
- Keep `docs/` consistent with the actual project: `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, `MEMORY.md`, `RULES.md`, `TASKS.md`, and `SECURITY.md`.
- Update documentation and record important decisions when requirements, implementation, or status change.
- Keep `TASKS.md` accurate, distinguishing completed work from pending work.
- Verify UI changes in the browser: use the control, check the other screens that share it, and check a narrow viewport when layout changed.

## 11. Definition of Done

Before marking work complete:

- [ ] All requirements for the task are implemented.
- [ ] Every TypeScript and TSX file touched is within the 120-line limit.
- [ ] Naming conventions, folder structure, and architectural rules are followed.
- [ ] Functions, components, and modules have clear responsibilities.
- [ ] Shared clinic facts and design tokens are centralized.
- [ ] UI is consistent, responsive, and accessible where applicable.
- [ ] Relevant edge cases and loading, empty, error, success, and disabled states are handled.
- [ ] Security and product-scope rules are respected.
- [ ] Linting and type-checking are run when possible.
- [ ] Documentation and `TASKS.md` reflect the actual implementation.
- [ ] No unnecessary complexity, unused code, or unrelated changes remain.

**Core principle:** Choose the simplest well-structured solution that meets requirements and follows best practices. Keep every file, function, component, and abstraction purposeful, consistent, beginner-friendly, and maintainable. Never sacrifice clarity for cleverness or unnecessary architectural complexity.
