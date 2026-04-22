# telecaller.ai

Marketing website for **telecaller.ai** — AI telecallers for Indian businesses.

Built with Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript. Deploys to Vercel with zero config.

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset auto-detects as **Next.js**. No config needed.
4. Click **Deploy**.

---

## Editing content

Everything is set up so the founder can edit copy, colors, and contact info without touching framework plumbing.

### Contact info (phone, email, WhatsApp)

Edit `lib/config.ts`. One file → updates footer, book-demo page, about page.

```ts
// lib/config.ts
export const siteConfig = {
  contact: {
    email: "abhinav@telecaller.ai",
    phone: "+91 90001 30400",
    phoneHref: "tel:+919000130400",
    whatsappHref: "https://wa.me/919000130400",
    location: "Hyderabad, India",
  },
  calendly: {
    url: "https://calendly.com/telecaller-ai/15min", // ← change this to your real Calendly URL
  },
};
```

### Calendly URL

Same file — `lib/config.ts` → `calendly.url`. The book-demo page auto-picks it up.

### Colors

All colors are CSS variables in `app/globals.css`. Edit the values in `:root` and `@theme`; everything re-themes.

```css
/* app/globals.css */
:root {
  --brand-blue: #0070b0;
  --brand-indigo: #4040a0;
  --brand-magenta: #802090;
  --accent: #5b3fa0;        /* primary CTA */
  --accent-hover: #4a3285;
  /* ...etc */
}
```

### Logo

Replace these two files with your final designed SVG:

- `public/logo.svg` — white wordmark, for dark backgrounds (used in footer, mobile menu)
- `public/logo-dark.svg` — dark wordmark, for light backgrounds (used in navbar)

Keep viewBox and proportions similar for best results.

### Favicon

Replace `public/favicon.svg`.

### Demo audio

Drop an MP3 at `public/demo-audio.mp3`. The home page `#demo` section will play it automatically.

---

## Content → file map

| Section | File |
|---|---|
| Navbar items | `components/Navbar.tsx` → `navItems` array |
| Footer links / contact | `components/Footer.tsx` + `lib/config.ts` |
| Home — hero, stats, agents, FAQ | `app/page.tsx` |
| How it works — 5 steps, build items, refusals | `app/how-it-works/page.tsx` |
| Pricing — feature table, tiers, FAQ | `app/pricing/page.tsx` → `rows`, `plans`, `faqs` |
| Compliance — framework, refusals | `app/compliance/page.tsx` |
| Book demo — steps, pre-call FAQ | `app/book-demo/page.tsx` |
| About — story, founder note | `app/about/page.tsx` |
| Legal stubs (privacy/terms/dpdp/refund) | `app/legal/[slug]/page.tsx` |
| 404 page | `app/not-found.tsx` |

---

## Design system

- **Display font:** Instrument Serif (headings, stats, logo wordmark)
- **Body font:** IBM Plex Sans (paragraphs, UI)
- **Mono font:** IBM Plex Mono (eyebrows, timestamps)
- All loaded via `next/font/google` in `app/layout.tsx` — no layout shift.

### Typography utilities

Defined in `app/globals.css`:

- `.display-xl` — hero H1
- `.display-l` — section H2
- `.display-m` — smaller headings
- `.stat-numeric` — outsized stat numbers
- `.eyebrow` — uppercase section labels
- `.gradient-brand-text` — brand gradient on text
- `.gradient-brand` — brand gradient background

### Gradient rules

The brand gradient (blue → indigo → magenta) appears at most 3× per page:

1. On 1–2 key words in the hero H1
2. As a 3px top strip on dark sections
3. On the "Most chosen" pricing card border

Don't add more.

---

## Stack

- **Framework:** Next.js 16 (App Router, RSC, Turbopack build)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`, CSS-first config via `@theme`)
- **UI primitives:** Radix (accordion, slot) via shadcn/ui pattern
- **Icons:** lucide-react
- **Fonts:** `next/font/google`

## Accessibility

- Semantic HTML (header, nav, main, footer, section, article)
- WCAG AA contrast on all text
- Keyboard-navigable (focus rings on interactive elements)
- `lang="en-IN"` on `<html>`
- `aria-label`s on icon-only buttons

## Performance

- Static-rendered pages (no DB, no server logic for marketing content)
- Self-hosted fonts via `next/font` (no CLS)
- Lazy-loaded Calendly widget (`strategy="lazyOnload"`)
- Animated waveform is pure SVG (no JS)

---

## License

Proprietary. © 2026 telecaller.ai.
