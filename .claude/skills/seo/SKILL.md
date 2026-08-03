---
name: seo
description: Improve or audit SEO for this Next.js static-export portfolio site (heliahaghighi.com). Use when asked to work on SEO, search ranking, metadata, Open Graph / social previews, structured data, sitemap, robots, crawlability, Core Web Vitals, or "why doesn't my site show up on Google".
---

# SEO for heliahaghighi.com

A project-specific playbook. Read the "Current state" section before changing anything — a
lot is already correct and re-doing it wastes a turn and risks regressions.

---

## 1. Project facts that constrain every SEO decision

| Fact | Where | Consequence for SEO |
|---|---|---|
| Next.js 14 **App Router** | [package.json](../../../package.json) | Use the Metadata API, not `<Head>`. No `pages/` conventions. |
| `output: "export"` (fully static) | [next.config.js](../../../next.config.js) | **No server.** No middleware, no redirects, no headers, no ISR, no dynamic OG image routes at request time. `next/image` optimization is off. |
| Hosted on **Firebase Hosting** | [firebase.json](../../../firebase.json) | Redirects/headers/caching must go in `firebase.json`, not `next.config.js`. |
| **Nine real routes** | [data/sections.ts](../../../data/sections.ts) | Each section is its own URL with its own title, description, canonical and JSON-LD. Add a section there + `app/<path>/page.tsx` and the sidebar, sitemap and crawlable block all pick it up. |
| `trailingSlash: true` | [next.config.js](../../../next.config.js) | Routes export as `<path>/index.html`. Every href in `sections.ts` must keep its trailing slash or links take a redirect hop. |
| `page.tsx` is a **server** component | [app/page.tsx](../../../app/page.tsx) | Keep it that way. Adding `'use client'` here empties the static export again. |
| SPA is [app/SiteShell.tsx](../../../app/SiteShell.tsx) | `'use client'` | Route-driven: `active` is a prop from the page, not state. Sidebar nav is real `<Link>`s so crawlers have `<a href>` to follow. |
| Crawlable mirror is [app/SeoContent.tsx](../../../app/SeoContent.tsx) | server component | Renders **only the requested section**, plus links to the other eight. Do not make it emit everything on every route — that recreates nine duplicate pages. |
| Content strings live in [data/](../../../data/) | plain `.ts`, no `'use client'` | Single source of truth. A `'use client'` module's exports become client references and **throw** when read in a server component — that is why the data is not in the section files. |
| Images served from Firebase Storage | [sections/Projects.tsx](../../../sections/Projects.tsx), [sections/Certifications.tsx](../../../sections/Certifications.tsx) | Cross-origin, un-optimized, no width/height → layout shift + slow LCP. |

Canonical origin is `https://heliahaghighi.com`, defined once as `SITE_URL` in
[data/profile.ts](../../../data/profile.ts) and imported by
[layout.tsx](../../../app/layout.tsx), [sitemap.ts](../../../app/sitemap.ts) and
[robots.ts](../../../app/robots.ts). Change the domain there and all three follow.

---

## 2. Current state — already done, do not redo

Verified in [app/layout.tsx](../../../app/layout.tsx) as of the `SEO` commit:

- `metadataBase`, title default + template, description, keywords, authors/creator/publisher
- `alternates.canonical`
- Full `openGraph` block (type, locale, url, title, description, siteName, image)
- `twitter` card `summary_large_image`
- `robots` with `googleBot` `max-snippet: -1` / `max-image-preview: large`
- `icons` → favicon
- `Person` JSON-LD with `sameAs` → GitHub + LinkedIn
- [app/sitemap.ts](../../../app/sitemap.ts) and [app/robots.ts](../../../app/robots.ts) both
  present and emitting correctly to `out/sitemap.xml` / `out/robots.txt`
- `<html lang="en">`

Added in the follow-up SEO pass (also done — do not redo):

- Nine real routes (option B, §3) driven by [data/sections.ts](../../../data/sections.ts);
  every `app/<path>/page.tsx` is a server component rendering
  [SectionPage](../../../app/SectionPage.tsx) = per-route JSON-LD +
  [SeoContent](../../../app/SeoContent.tsx) + [SiteShell](../../../app/SiteShell.tsx)
- Per-route `<title>`, description and canonical via
  [app/section-meta.ts](../../../app/section-meta.ts); [sitemap.ts](../../../app/sitemap.ts)
  lists all nine
- [app/not-found.tsx](../../../app/not-found.tsx) — `noindex` 404 with no canonical, so the
  error page can't be indexed as a duplicate of the homepage
- Sidebar nav is real `<Link>`s; modified clicks (cmd/middle) open in a new tab
- [data/](../../../data/) — plain (non-`'use client'`) modules holding every content string;
  both the SPA sections and `SeoContent` import from here, so the two can't drift
- `hydrated` render gate removed; the localStorage restore runs in a layout effect
- Real 1200 × 630 `public/og.jpg`, `apple-touch-icon.png`, `icon-512.png`,
  [app/manifest.ts](../../../app/manifest.ts), `viewport.themeColor`
- JSON-LD upgraded to an `@graph`: `Person` (+ `address`, `alumniOf`, `knowsAbout`, `award`,
  `makesOffer`) + `WebSite` + `ProfilePage` + one `CreativeWork` per project
- Fonts: unused NTR `<link>` and unused JetBrains Mono family dropped; the Google Fonts
  `@import` moved out of [globals.css](../../../app/globals.css) into a `<link>` with preconnects
- `loading="lazy"` / `decoding="async"` on below-fold images, `fetchPriority="high"` on the
  landing avatar, descriptive `alt` on achievement and certification images
- Cache-Control headers in [firebase.json](../../../firebase.json)

**The metadata layer is in good shape. The remaining problems are structural.**

---

## 3. Findings, ranked by actual impact

### ~~P0 — The exported HTML contains almost no content~~ — FIXED, kept for context

This was the single biggest issue. Before the fix, `out/` measured:

```
out/index.html          19,630 bytes
visible crawlable text     ~270 characters
<h1> tags in HTML             0
<img> tags in HTML            0
```

After options A **and** B were implemented: **~48,000 characters of crawlable text spread
across nine URLs**, each with its own `<h1>`, title, description and canonical. The rest of
this section records the cause — read it before touching `SeoContent.tsx`, any
`app/*/page.tsx`, or `SiteShell.tsx`.

At that point the entire crawlable body was the topbar/sidebar chrome:

> `helia@portfolio:~ online helia.dev v10.4.2 ENDPOINTS GET /me GET /me/origin GET /stack …`

The `<h1>` at [sections/Me.tsx:87](../../../sections/Me.tsx#L87), the bio, every project
description, the whole experience changelog, achievements, certifications and testimonials
were **absent from the served HTML**. Two compounding causes:

1. `page.tsx` is a client component, so nothing pre-renders into the export.
2. Even at hydration, `{hydrated && active === 'x' ? <Section/> : null}` means only *one*
   section is ever in the DOM, and only after `useEffect` runs.

Why this matters: Googlebot does render JS, but on a deferred second pass with no guarantee
of completion, and it will never see the eight sections the user did not click. Bing,
LinkedIn/Slack/WhatsApp unfurlers, and AI crawlers (GPTBot, ClaudeBot, PerplexityBot) mostly
do not execute JS at all — they see 270 characters. The site is effectively competing on the
strength of its `<title>` alone.

**Fix options, best first:**

- **A — Server-rendered SEO body (recommended, lowest risk).** Keep the interactive SPA
  exactly as-is. Convert [app/page.tsx](../../../app/page.tsx) into a thin *server* component
  that renders (a) a visually-hidden but crawlable block containing the real `<h1>`, the bio,
  and the full text of all nine sections, and (b) the existing client component. Move today's
  `'use client'` body into a shell component untouched. (Implemented as
  [app/SiteShell.tsx](../../../app/SiteShell.tsx) once option B landed.)

  The hidden block must be genuinely present and readable — use clipping, never
  `display: none`, `visibility: hidden`, or `hidden`, which Google treats as
  de-prioritized-to-ignored:

  ```tsx
  // Off-screen but in the accessibility tree and the DOM. Do NOT swap for display:none.
  const srOnly: React.CSSProperties = {
    position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
    overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0,
  }
  ```

  Source the text from a shared data module so the visible SPA and the crawlable block can
  never drift apart. This is the only fix that gets all nine sections indexed.

- **B — Real routes per section. DONE.** The sections are now `/`, `/me/origin/`, `/stack/`,
  `/experience/`, `/projects/`, `/achievements/`, `/certifications/`, `/testimonials/`,
  `/collab/` — nine server-rendered URLs, each with its own `<title>`, description, canonical,
  `WebPage`/`ProfilePage` + `BreadcrumbList` JSON-LD, and its own slice of the crawlable
  block. `SiteShell` takes `active` from the route instead of component state, and the
  localStorage "restore last section" behaviour was dropped: the URL is the state now, and
  silently overriding it would break sharing and crawling alike.

- **C — Do nothing structural, just add an `<h1>`.** Minimum viable: ensure a real `<h1>`
  with the name and role is in the static HTML. Better than zero, but leaves ~95% of the
  content uncrawlable.

Whichever is chosen, **verify by grepping the build output, not the source** (§4).

### ~~P0 — `hydrated` gate delays first paint of all content~~ — FIXED

[app/page.tsx:40-51](../../../app/page.tsx#L40-L51) intentionally blanks the page until a
`localStorage` read completes, to avoid a flash of the `me` section. The cost is that LCP
cannot happen until React has hydrated. On a slow connection this pushes LCP well past the
2.5s "good" threshold, and Core Web Vitals is a live ranking signal.

Fix: render the `me` section server-side as the default, and let the `localStorage` restore
*replace* it after mount rather than gating on it. The flash it was written to prevent only
affects returning visitors who had navigated away from `me`; a first-paint penalty on every
visit, including every crawl, is the worse trade.

### ~~P1 — Open Graph image is the wrong size~~ — FIXED (public/og.jpg is now a real 1200×630)

[app/layout.tsx:43-50](../../../app/layout.tsx#L43-L50) declares `width: 1200, height: 630`,
but `public/Helia.jpg` is actually **948 × 632**. Consequences: the declared dimensions are a
lie unfurlers may lay out against, and 948px is below the 1200px minimum several platforms
(LinkedIn, X large card) require to render a large card at all — they may downgrade to a small
thumbnail or drop the image.

Fix: produce a real 1200 × 630 `public/og.jpg` — name, role, and domain on the site's dark
terminal background reads far better in a feed than a cropped photo — then point both
`openGraph.images` and `twitter.images` at it and correct the declared dimensions. Keep it
under ~300 KB. Note that `output: "export"` rules out `opengraph-image.tsx` runtime
generation; this must be a committed static file.

### P1 — Images are unoptimized, unsized, and heavy — PARTLY FIXED

- No `next/image` anywhere in the codebase (`grep -r "next/image"` → zero hits); everything is
  a raw `<img>`. With `output: "export"` that is a defensible choice, but it means no
  `width`/`height` attributes → **cumulative layout shift** on every section that loads an
  image, and CLS is a Core Web Vitals ranking signal.
- `public/` still holds the original PNGs, several of them enormous, even though the live
  sections now load from Firebase Storage:
  ```
  Food-Pickup.png                        1.8M
  CUD-Nav.png                            1.7M
  FoodGaurdian.png                       925K
  Household-Food-Waste-Management.png    712K
  ```
  These get copied into `out/` and deployed. If nothing references them, they are dead weight
  in the bundle; confirm with a grep before deleting.
- Project/certification images come from `firebasestorage.googleapis.com` as full-size PNGs.

Fixes, in order: add explicit `width`/`height` (or a fixed-aspect-ratio CSS container) to every
`<img>`; add `loading="lazy"` + `decoding="async"` to everything below the fold and
`fetchPriority="high"` to the LCP image; convert the large PNGs to WebP; add
`<link rel="preconnect" href="https://firebasestorage.googleapis.com" />` to the `<head>`.

### ~~P1 — Render-blocking Google Fonts with no preconnect~~ — FIXED

[app/layout.tsx:97-100](../../../app/layout.tsx#L97-L100) loads NTR via a bare stylesheet
`<link>`. That is a render-blocking request to a third-party origin with a cold connection on
the critical path.

Fix: use `next/font/google`, which self-hosts the font at build time (works fine with static
export) and eliminates the round-trip entirely. If the `<link>` must stay, at minimum add:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

### P2 — `firebase.json` config mismatch — cache headers ADDED, model mismatch OPEN

[firebase.json](../../../firebase.json) specifies `frameworksBackend` (the Firebase
web-frameworks integration, which provisions a Cloud Run backend) while
[next.config.js](../../../next.config.js) sets `output: "export"` (pure static, no backend).
These describe two different deployment models. Reconcile them: for a static export the
hosting block should point `"public": "out"` and drop `frameworksBackend`.

While in that file, add long cache lifetimes for immutable assets — this improves repeat-visit
CWV:

```jsonc
"headers": [
  { "source": "/_next/static/**",
    "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] },
  { "source": "**/*.@(jpg|jpeg|png|webp|svg|ico|woff2)",
    "headers": [{ "key": "Cache-Control", "value": "public, max-age=2592000" }] }
]
```

Also decide the canonical host and enforce it with a redirect: `www` → apex (or the reverse),
and confirm `heliahaghighi.web.app` / `.firebaseapp.com` do not serve an indexable duplicate of
the site. Duplicate-origin indexing splits ranking signals.

### ~~P2 — Structured data can be richer~~ — FIXED (see the @graph in app/layout.tsx)

The `Person` block at [app/layout.tsx:75-87](../../../app/layout.tsx#L75-L87) is correct.
Worth adding, all as static JSON-LD:

- `@type: ProfilePage` wrapping `mainEntity: Person` — the schema.org type that actually
  describes this page.
- `WebSite` with `url` + `name`, enabling a sitelinks search box treatment.
- `Person` fields not yet used: `alumniOf`, `knowsAbout` (the stack list),
  `address`/`addressLocality` for UAE-local intent, `email`.
- A `CreativeWork` or `SoftwareApplication` per project, and `EducationalOccupationalCredential`
  per certification — these are real, verifiable entities and there is already structured data
  for them in [sections/Projects.tsx](../../../sections/Projects.tsx) and
  [sections/Certifications.tsx](../../../sections/Certifications.tsx).

Every JSON-LD claim must correspond to content actually visible on the page — invented
`aggregateRating`, fake reviews, or credentials not shown are a manual-action risk. The
testimonials in [sections/Testimonials.tsx](../../../sections/Testimonials.tsx) may support
`Review` markup **only** if they are genuine and attributed on-page.

### P2 — Missing head tags — PARTLY FIXED (only Search Console verification is left)

Absent from [app/layout.tsx](../../../app/layout.tsx), all cheap:

- `apple-touch-icon` (180×180) and `manifest.webmanifest`
- `themeColor: '#060608'` (matches the page background in
  [app/page.tsx:114](../../../app/page.tsx#L114))
- `verification.google` — needed to claim the property in Search Console

### ~~P2 — Empty `alt` on a content image~~ — FIXED

[sections/Achievements.tsx:84](../../../sections/Achievements.tsx#L84) has `alt=""`. That is
the correct markup for a purely decorative image, but these appear to be achievement photos
carrying real meaning. Give them descriptive alt text. Alt text elsewhere
([sections/Me.tsx:229](../../../sections/Me.tsx#L229),
[sections/Origin.tsx:37](../../../sections/Origin.tsx#L37),
[components/AvatarPanel.tsx:120](../../../components/AvatarPanel.tsx#L120)) is `"Helia"` —
serviceable, but `"Helia Haghighi, software developer"` describes the image better and
reinforces the primary entity.

### ~~P3 — Heading hierarchy~~ — RESOLVED by the SeoContent fix

Sections use `<h2>` ([Stack](../../../sections/Stack.tsx#L30),
[Collab](../../../sections/Collab.tsx#L46),
[Testimonials](../../../sections/Testimonials.tsx#L105),
[Achievements](../../../sections/Achievements.tsx#L125),
[Origin](../../../sections/Origin.tsx#L49)) and `<h3>`
([Projects](../../../sections/Projects.tsx#L277),
[Changelog](../../../sections/Changelog.tsx#L281)) correctly. The hierarchy is sound —
it is simply never delivered to crawlers, which folds back into P0.

---

## 4. Verification — always check the build, never the source

Source-level metadata means nothing if it does not reach `out/`. After any SEO change:

```bash
npm run build          # regenerates out/ ; static export, no server needed

# How much text can a non-JS crawler actually see?
python3 -c "
import re
h = open('out/index.html').read()
h = re.sub(r'<script.*?</script>', '', h, flags=re.S)
h = re.sub(r'<style.*?</style>',  '', h, flags=re.S)
t = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', h)).strip()
print(len(t), 'chars'); print(t[:1200])
"

grep -o '<h[1-6][^>]*>' out/index.html | sort | uniq -c   # expect >= 1 h1
grep -c '<img' out/index.html                              # expect > 0 after P0 fix
grep -o '<meta property="og:[^"]*" content="[^"]*"' out/index.html
grep -o 'application/ld+json.*' out/index.html | head -1
cat out/sitemap.xml out/robots.txt
```

Per-route crawlable text in the current build (was 270 characters on a single URL):

```
/                 3,322     /achievements/     3,710
/me/origin/       2,956     /certifications/   5,840
/stack/           2,971     /testimonials/    10,544
/experience/     10,123     /collab/           3,074
/projects/        5,531
```

Every route must have exactly one canonical pointing at itself, a unique `<title>`, and at
least one `<h1>`. If a character count collapses toward the low hundreds, something re-broke
server rendering — the usual cause is `'use client'` creeping into an `app/*/page.tsx` or a
render gate returning `null` during prerender.

Loop over every route, not just `/`:

```bash
for f in out/index.html out/*/index.html out/me/origin/index.html; do
  echo "$f  $(grep -o '<title>[^<]*' "$f" | head -1)"
  grep -o 'rel="canonical" href="[^"]*"' "$f"
done
```

External checks (cannot be run from here — hand these to the user):
- Google Search Console → URL Inspection → "View crawled page" shows exactly what Googlebot got
- Rich Results Test → validates the JSON-LD
- PageSpeed Insights → LCP / CLS / INP field data
- opengraph.xyz, LinkedIn Post Inspector → social card rendering

---

## 5. Rules for working in this repo

- **Never fake content for crawlers.** The hidden-text technique in P0-A is legitimate only
  because the text is identical to what users see in the SPA. Text visible to Googlebot but
  not to users is cloaking and risks deindexing. Same rule for JSON-LD.
- **Do not add `next/image`** without first confirming it works under `output: "export"` —
  it requires `images.unoptimized: true`, which removes most of the benefit. Sized plain
  `<img>` tags are usually the better call here.
- **Do not put redirects or headers in `next.config.js`.** Static export drops them silently.
  They belong in [firebase.json](../../../firebase.json).
- **Keep the domain in sync** across [layout.tsx](../../../app/layout.tsx),
  [sitemap.ts](../../../app/sitemap.ts), and [robots.ts](../../../app/robots.ts).
- **Do not commit `out/` churn as an SEO change.** Rebuild output is noise in the diff;
  mention it, keep it separate from source edits.
- **Keyword stuffing is counterproductive.** The `keywords` meta tag is ignored by Google
  outright; adding more terms to it does nothing. Rankings here will come from crawlable
  content, page speed, and external links — in that order.

---

## 6. Off-site — not code, but higher leverage than most of §3

For a personal-name portfolio the ranking contest is narrow ("Helia Haghighi", "Helia Haghighi
developer", "software developer Dubai"). What actually moves it:

- Verify the property in **Google Search Console**, submit `sitemap.xml`, request indexing.
  Do the same in **Bing Webmaster Tools**. Nothing below matters until Google has the page.
- Link the domain from **LinkedIn** (website field), **GitHub** (profile URL + pinned repo
  READMEs) — both are high-authority and already in `sameAs`.
- Keep the `sameAs` list and the on-page profile consistent with LinkedIn/GitHub; consistent
  entity signals are how a Knowledge-Panel-style association forms for a personal name.
- Every additional genuine referring domain (conference bio, publication, university page,
  hackathon writeup, dev.to/Medium cross-post) outweighs any remaining P2 above.
