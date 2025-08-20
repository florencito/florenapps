# AGENTS — florenApps Hub (Vite + Tailwind + Vercel Rewrites)

## 0) Context
We’re building **florenApps**, a lightweight hub that lists and serves Floren’s mini web apps under one domain while keeping each app independently deployed. For the MVP we’ll ship a **static site** (Vite + Tailwind) and use **Vercel rewrites** to mount existing apps behind clean routes.

Existing apps (live on Vercel):
- DrinkMaster → https://drinkmaster-seven.vercel.app/
- Who to Unfollow (Instagram export analyzer) → https://who-to-unfollow.vercel.app/
- QR Code Generator → https://qr-code-generator-devops.vercel.app/

Local folders (for reference):
```
~/documents/small_projects
├─ drinkmaster
├─ florenapps_hub     # <— this project
├─ qr-code-generator
└─ who_to_unfollow
```

## 1) Product goals (MVP)
- Home at **florenapps.com** with a simple grid of app cards.
- Clean internal routes that point to existing deployments via **rewrites**:
  - `/drinkmaster` → drinkmaster deployment
  - `/unfollow` → who-to-unfollow deployment
  - `/qr` → qr generator deployment
- Keep each app **independent** (no redeploy when hub changes).
- Minimal, fast, privacy-friendly; analytics only on page views.
- Easy extensibility: adding a new app = one card + one rewrite.

**Definition of done:** hub is deployed, routes work end‑to‑end, adding a new app takes ≤ 5 minutes.

## 2) Technical approach
- Frontend: **Vite (vanilla)** + **TailwindCSS** (no framework).
- Hosting: **Vercel** (Static site).
- Routing to external apps: **`vercel.json` rewrites** (server-side).

## 3) Project structure
```
florenapps_hub/
├─ public/
│  ├─ favicon.svg
│  └─ og.png
├─ src/
│  ├─ main.js
│  ├─ index.css
│  └─ components/
│     ├─ header.js
│     ├─ appCard.js
│     └─ footer.js
├─ index.html              # landing (grid of cards)
├─ vercel.json             # rewrites for /qr, /unfollow, /drinkmaster
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ README.md
```

## 4) Rewrites (Vercel)
Create `vercel.json` in the hub root:
```json
{
  "rewrites": [
    {
      "source": "/qr/:match*",
      "destination": "https://qr-code-generator-devops.vercel.app/:match*"
    },
    {
      "source": "/unfollow/:match*",
      "destination": "https://who-to-unfollow.vercel.app/:match*"
    },
    {
      "source": "/drinkmaster/:match*",
      "destination": "https://drinkmaster-seven.vercel.app/:match*"
    }
  ]
}
```
Notes:
- Link to internal paths (`/qr`, `/unfollow`, `/drinkmaster`) from the hub. Vercel forwards requests server‑side to the external deployments. Deep links are supported via `:match*`.

## 5) UI/UX
- Clean, single-page landing with a responsive card grid.
- Each card: emoji/icon, title, one-line description, CTA button.
- Header: brand + short claim (e.g., “Mini apps that solve boring tasks fast”).
- Footer: privacy note, BuyMeACoffee link, small usage blurb.
- Accessibility: keyboard focus, semantic HTML, good contrast.

## 6) Copy (initial)
- Title: florenApps — Mini apps that solve boring tasks fast.
- Subtitle: 100% client-side or privacy-friendly. Built by Floren. No accounts required.
- Cards:
  - QR Generator — Create custom QR codes in seconds.
  - Who to Unfollow — See who you follow that doesn’t follow back (via IG export).
  - DrinkMaster — Party prompts and mini games for your next hangout.

## 7) Analytics & privacy
- Hub: Vercel Analytics (page views only). No PII.
- Apps: keep their analytics as-is.
- Footer copy: “All apps run locally or with minimal telemetry. We don’t sell data.”

## 8) SEO basics
- Set `<title>` and `<meta name="description">` (≤ 156 chars) in `index.html`.
- Add `og:` tags and `og.png` preview.
- Provide `robots.txt` and `sitemap.xml` (optional for MVP).

## 9) Dev scripts
- `dev`: vite
- `build`: vite build
- `preview`: vite preview
- `format`: prettier (optional)

## 10) Tasks (MVP checklist)
- [ ] Initialize Vite + Tailwind project.
- [ ] Build Header/AppCard/Footer components.
- [ ] Landing with 3 cards (QR, Unfollow, DrinkMaster).
- [ ] Add `vercel.json` rewrites.
- [ ] Add minimal SEO and OG image.
- [ ] Integrate Vercel Analytics script.
- [ ] Deploy to Vercel and attach domain/subdomain.

## 11) Acceptance criteria
- Visiting `/qr`, `/unfollow`, `/drinkmaster` under the hub seamlessly serves the external apps (including deep links).
- Adding a 4th app requires only a new card and a new rewrite entry.
- Lighthouse on the hub landing: Perf ≥ 95, A11y ≥ 95.

## 12) Testing
- Manual: desktop/mobile nav; verify deep links like `/unfollow/some/path`.
- Automated (optional): Playwright smoke (200 OK on `/`, `/qr`, `/unfollow`, `/drinkmaster`).

## 13) Risk & mitigation
- CSP or CORS issues on external apps → prefer permissive CSP on those apps or proxy if needed.
- External app under heavy change → rewrites are resilient; hub remains unaffected.
- If we migrate to hosting an app under a **subpath**, remember Vite `base` setting in that app.

## 14) Future roadmap
- Add per-app info sections (`/qr/info`) for SEO without changing external apps.
- Suggest-an-app form → send to GitHub Issues.
- Central changelog (“What’s new”) in markdown.
- Migrate to monorepo + Vercel path-based routing when convenient.
- Lightweight newsletter.

## 15) Prompts for Claude (copy–paste)

### 15.1 — Scaffold Vite + Tailwind
ROLE: Frontend
TASK: Initialize a Vite (vanilla) + Tailwind project named `florenapps_hub`. Provide `index.html`, `src/main.js`, `src/index.css`, and components (`header.js`, `appCard.js`, `footer.js`) rendering a responsive grid with three cards.

### 15.2 — Add Vercel rewrites
ROLE: DevOps
TASK: Create `vercel.json` with the three rewrites shown above. Explain how to add a new app (one rewrite + one card).

### 15.3 — SEO & Analytics
ROLE: Frontend
TASK: Add `<title>`, `<meta description>`, OG tags and a placeholder `public/og.png`. Integrate the Vercel Analytics script.

### 15.4 — QA
ROLE: QA
TASK: Draft a simple Playwright smoke test plan (optional) to check `/`, `/qr`, `/unfollow`, `/drinkmaster` for 200 OK and a visible header element.
