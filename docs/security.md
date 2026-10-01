# Security checklist

Checked on 2026-10-01 against a list of common web security items. This site has one server function (`api/contact.ts`) and no accounts, database, uploads, websockets or webhooks, so only part of the list applies.

## Done

| Item | Status |
|---|---|
| Keep API secrets server side | `RESEND_API_KEY` is only read in `api/contact.ts`. Nothing in `src/` reads an environment variable or contains a key. |
| Keep environment files out of GitHub | `.gitignore` now blocks `.env`, `.env.*` and `.vercel` (it did not before). No env file or key has ever been committed (checked the whole git history). `.env.example` lists the variable names with no values. |
| Validate form inputs | Server side: the body must be a JSON object under 20 KB; name, email, message and page are length limited and stripped of control characters; the email must be one plain address (no commas, spaces or brackets) of at most 254 characters; more than 2 links is refused. |
| Verify the email address | Format is checked on the server. A confirmation-link check is not done: it would need a database and a second email for every message. |
| Block cross-site scripting | React escapes everything it renders. No `dangerouslySetInnerHTML`, `innerHTML` or `eval` anywhere. The email is plain text, not HTML. Structured data is written with `textContent` or with `<` escaped. A strict Content Security Policy is the second layer (below). |
| Tighten CORS | No cross-origin access is granted. The function only accepts posts from the site's own address (localhost is accepted only outside production). |
| Rate limit | `api/contact.ts`: 3 per 10 minutes and 8 per day per visitor, 30 per hour overall, duplicate and bot traps. The limits live in memory, so they slow abuse down rather than guarantee it. Everything else is static files served by Vercel. |
| Browser security headers | `vercel.json`: Content-Security-Policy (scripts only from the site itself; styles and fonts from Google Fonts; frames only from YouTube; no plugins; no framing of the site), X-Frame-Options, Permissions-Policy, X-Content-Type-Options, Referrer-Policy and HSTS. Tested against the production build: no violations, fonts and videos still load. |
| Disable production debugging | No `console.log` or `debugger` in the code, no source maps in the build, and the function returns generic messages (details go only to the server log). |
| Update vulnerable dependencies | `npm audit` reported 18 problems (12 high), in Vite, Rollup and a glob matcher. All fixed; it now reports 0. Run `npm audit` now and then. |
| Use proper secrets | Secrets are Vercel environment variables, never in the repository. |
| Use encryption for sensitive data | The site stores no sensitive data. Everything is sent over HTTPS, and HSTS tells browsers to insist on it. |

## Not applicable here

Hashing passwords, auth tokens, parameterized SQL, file upload validation, websocket and webhook signatures: the site has no logins, database, uploads, websockets or webhooks. If any are added later, revisit this list first.

## If you add something

- **A new script, font, frame or API on another domain:** add its address to the Content Security Policy in `vercel.json`, or the browser will block it.
- **Inline scripts:** the policy does not allow them. Put the code in a file under `src/`.
- **A new secret:** add it in Vercel, name it in `.env.example`, and read it only in `api/`.
