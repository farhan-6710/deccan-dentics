# Security — Deccan Dentics

This version is a public website. It does not authenticate users. The sensitive part is the appointment request, which can contain a name, phone number, and a note about a visit.

## 1. Authentication and authorization

The marketing site has no login. `/admin` uses a **temporary client password gate** only:

- Password is checked in the browser and unlock is stored in `sessionStorage`.
- The dialog cannot be dismissed without a correct password (no close icon, outside click, or Escape).
- This is **not** access control for an API or database. Anyone can read the client bundle and bypass it.

Before any real patient data:

- Authenticate on the server.
- Authorize on a stable user id and role, not a shared password in the client.
- Keep session cookies on the provider. Do not invent a token in `localStorage` / `sessionStorage` as the sole gate.

Hidden buttons are not access control.

## 2. Secrets

No environment variables are required to run the app today.

When appointment delivery is added:

- Put provider keys in server-only variables. In Next.js that means they must not use the `NEXT_PUBLIC_` prefix.
- Read them in a route handler or server module, never in a client component.
- Do not commit `.env` files. Commit `.env.example` with empty names only.
- The clinic phone and `drsadiqali2000@gmail.com` are already public on [the contact page](https://dddental.in/contact-us/). Documenting them is fine. Using that inbox as an API credential is not.

## 3. Data protection

Collect the minimum.

| Allowed on the request form | Not in this version |
|---|---|
| Name, phone, email | Symptoms, diagnoses, radiographs |
| Branch and service | Insurance or government ids |
| Preferred time and a short note | Files or photos of patients |

- Do not write form drafts to `localStorage` or `sessionStorage`.
- Do not log request bodies in client console output that stays in production.
- Reviews and clinic copy are rendered as text. Do not pass them through `dangerouslySetInnerHTML`.
- Images of patients need a clear right to publish. The current hero image is a design asset, not a records export.

## 4. Appointment route, when it exists

- Accept `POST` only, with a JSON body matching the fields in `ARCHITECTURE.md`.
- Validate type, length, and allowed branch and service ids on the server.
- Reject unexpected fields.
- Rate-limit by IP so the clinic inbox cannot be flooded.
- Return a generic failure to the browser. Do not return provider errors or stack traces.
- Send mail or write a row only after validation succeeds.
- The success message is allowed only after that write or send returns success.

## 5. Browser protections

- Keep dependencies current. Do not add a package to solve a one-line problem.
- External links that are not the clinic's own maps or phone links should use `rel="noopener noreferrer"` when opened in a new tab.
- Do not build open redirects (`?next=` to an arbitrary URL).
- Theme storage is the string `light` or `dark` only. Ignore any other value.
- `suppressHydrationWarning` on `<html>` is for the theme class. Do not spread that prop across the tree to hide real mismatches.

## 6. Content integrity

Publishing a wrong branch, a fake review, or a made-up doctor is a trust failure, not only a copy issue. Use `brand-manifest.json`. Record corrections in `MEMORY.md` with the date and source.

## 7. Known gaps

- The appointment form and its route do not exist yet, so there is nothing to spam. Do not ship the form's success state ahead of the route.
- There is no security header configuration beyond Next.js defaults. Add a restrictive header set when the site is deployed, including a content security policy that still allows `next/font` and `next/image`.
- No penetration test has been run. This document is the requirement list, not an audit report.

## 8. Reporting

If a secret lands in a commit, rotate it, remove it from the tree, and say so in `MEMORY.md`. Do not leave the live key in git history and call the issue closed.
