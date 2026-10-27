---
name: contact-form-api
description: Use when changing ContactForm, ContactCard, the /api/contact Vercel function, contact links, the CV link, or testing message sending
---

# Contact form and API

## Pieces

- `ContactForm` (used by `ContactCard`, in the right column and at the end of project pages) posts to `/api/contact` (`api/contact.ts`, a Vercel function). It emails the message to jumuad.precious@gmail.com through Resend.
- Env vars: `RESEND_API_KEY` (required), `CONTACT_TO_EMAIL` (optional), `FORM_SECRET` (optional signing key). Set them in Vercel only, never in the repo. Names live in `.env.example`; `.env*` is gitignored.
- `vercel.json` keeps `/api/*` out of the SPA rewrite.
- `npm run dev` has no `/api`, so sending shows the error toast locally. Use `vercel dev` to test.
- `src/data/contact.ts` holds the contact links for the profile card's icon row (`ContactLinks`, the round icons).
- `src/data/links.ts` holds `CV_URL`. The profile card's "View my CV" button renders only when it is non-empty.

## Abuse guards in the function

Resend's free plan is 100 emails a day, so the function checks:

- Origin check and a honeypot field.
- A minimum fill time measured by the server from a signed timestamp token: `GET /api/contact` issues it when the form appears, `POST` verifies it. Signed with `FORM_SECRET`, or `RESEND_API_KEY` if that is unset.
- At most 2 links; duplicate and per-visitor limits (3 per 10 min, 8 per day); an overall 30 per hour.
- Limits are in memory per function instance, so they slow abuse down rather than guarantee it. Next step would be Upstash Redis or Cloudflare Turnstile.
- Everything is validated on the server.

Each email ends with the send time, IP, city/country, browser and page.

## Security

New outside domains for connections must be added to the Content-Security-Policy in `vercel.json`. Checklist: `docs/security.md`. The privacy policy is `/privacy` (text in `src/data/legal.ts`); update `PRIVACY_UPDATED` when it changes.
