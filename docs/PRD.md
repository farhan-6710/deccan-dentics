# Product Requirements — Deccan Dentics

Public redesign of [dddental.in](https://dddental.in/). The new site helps a person in Hyderabad choose a branch, understand a treatment, and ask for an appointment. It is a clinic website, not a patient portal.

Read `brand-manifest.json` before writing clinic copy. Read `DESIGN.md` before changing layout.

## 1. Goals

- Replace the current WordPress site with a fast, calm, mobile-first Next.js site.
- Keep the clinic's real services, branches, phone number, and email.
- Make the next step obvious: call, or send an appointment request.
- Look like the forest-green design system already in `src/app/globals.css`, including light and dark themes.
- Stay accurate. Unconfirmed statistics, branches, prices, and doctor names do not ship.

## 2. Users

| User | Need |
|---|---|
| New patient | Find a nearby branch, hours, and a way to book. |
| Parent | See that children are treated gently, then contact the clinic. |
| Person in pain | Find the phone number and emergency note without hunting. |
| Returning visitor | Jump to services, reviews, or contact from the header. |

Staff dashboards, patient logins, and online payments are out of scope.

## 3. Scope

### In this version

- One marketing site with Home, About, Services, Reviews, FAQ, and Contact.
- Header with logo, those links, theme switch, and Book Appointment.
- Hero already started: headline, two actions, feature row, portrait, trust badge.
- Service list from the live site, summarized in plain language, each linking to a short detail.
- Four branches confirmed on the [contact page](https://dddental.in/contact-us/).
- Reviews section using only reviews the clinic approves. No invented quotes.
- FAQ for visit frequency, emergencies, children, and payment.
- Contact block: phone `079956 86661`, email `drsadiqali2000@gmail.com`, hours, and a request form.
- Light and dark themes from the existing tokens.

### Out of scope

- Accounts, OTP, prescriptions, records, or a staff inbox inside the app.
- Card payments, carts, or price lists unless the clinic supplies prices later.
- Live chair booking or a calendar integration.
- Publishing Malakpet, Abids, or Aramghar until the clinic confirms them.
- Copying doctor names off the design board. That board is a visual reference, not a staff directory.

## 4. User stories

1. As a new patient, I can see what the clinic treats and which branch is closest, so I know where to go.
2. As a person comparing clinics, I can read how a visit works, from the call through follow-up.
3. As a parent, I can open kids dentistry and see that a parent may stay for the visit.
4. As someone with tooth pain, I can tap the phone number and reach the clinic.
5. As a desktop visitor, I can switch theme and the page keeps the same forest-green system.
6. As a mobile visitor, I can reach Book Appointment without a desktop nav bar.

## 5. Functional requirements

- Navigation labels match `src/constants/nav.ts`: Home, About, Services, Reviews, FAQ, Contact.
- Book Appointment scrolls to the contact form, or opens it, on every page that shows the button.
- The phone control uses `tel:+917995686661`. The email control uses the published address.
- The appointment form collects name, phone, email, branch, service, preferred time, and a short note. It does not ask for medical history.
- Submitting the form shows success or a clear error. Until a delivery service exists, the form must not pretend an email was sent.
- Service names come from `brand-manifest.json`. Detail copy stays shorter than the old service pages and does not add claims the live page did not make.
- Reviews render as text, never as raw HTML.
- Empty, loading, and error states exist wherever data is fetched. Static sections need an empty state only when their list can be empty.
- Theme survives a reload. Preference may live in `localStorage`. Clinical details must not.

## 6. Content requirements

Confirmed from the live site on 30 Oct 2026:

- Tagline to use in the redesign: **Healthy smiles. Happier lives.**
- Legacy homepage line, kept only as reference: "Don't Just Smile, Shine with Confidence!"
- Proof on the live homepage: 10+ years, 25k+ happy patients, 5 branches, family dentistry.
- The current hero badge says "1000+ Happy Smiles". That figure is from the design board. Do not launch with it until the clinic picks one number.
- Differentiators: experienced doctors, personalized plans, flexible payment, emergency care, modern equipment.
- Visit path: schedule, examine, explain the plan and cost, treat, follow up.
- Hours published on the contact page: Monday–Saturday 09:00–20:00, Sunday 14:00–18:00.

## 7. Non-functional requirements

- Mobile first. Usable at 360px, comfortable at 768px, and at the 72rem container on desktop.
- Visible focus, labelled controls, and keyboard access for menu, accordion, and form.
- Motion stays under 200ms. Honor `prefers-reduced-motion`.
- Lighthouse-minded pages: optimized images, no layout jump from fonts, semantic headings.
- No secret keys in the client bundle.

## 8. Acceptance criteria

- A visitor can move from the hero to a service, a branch address, and the phone number without leaving the site.
- Light and dark themes both use the tokens in `brand-manifest.json` and `globals.css`.
- Buttons, fields, cards, select, and accordion match `DESIGN.md`.
- The contact form never claims success when nothing was delivered.
- Published branches, phone, email, and proof points match the manifest or a newer clinic confirmation recorded in `MEMORY.md`.
- No page introduces accounts, payments, or a fifth branch on its own.
- `TASKS.md` matches what is actually on the site.

## 9. Success

A person who lands from search can understand the clinic in one screen, trust the details, and start a visit by phone or by a request the clinic can actually receive.
