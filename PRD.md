# PRD — THOTNR Website
**Last updated:** 2026-04-23  
**Status:** Living document — update as sections are built

---

## 1. Project Overview

### What it is
THOTNR is an **AI-first technology consulting firm** website. It is a fully static, multi-page marketing site — no backend, no CMS, no authentication, no dynamic data.

### Who it serves
Enterprise decision-makers — CIOs, CDOs, AI leads, and technology directors — evaluating consulting partners for AI strategy, enterprise architecture, and cloud transformation.

### What the site communicates
- THOTNR is a credible, high-quality partner for enterprise AI work, not a generalist agency
- They close the gap between AI strategy and production deployment
- Their differentiator: they operate inside the real enterprise, not just in demos
- Tagline in use: **"Your Thought Partner. Strategy. Built. Delivered."**

### Brand voice
Direct, intelligent, premium. No buzzword filler. Confident without being aggressive. The copy reads like it's written by people who have actually shipped AI in production.

---

## 2. Tech Stack & Architecture

Detected directly from codebase — do not deviate from these.

| Layer | Tool | Version | Notes |
|---|---|---|---|
| Framework | React | 19 | Functional components only, no class components |
| Build tool | Vite | 8 | Fast HMR, ESM-native |
| CSS | Tailwind CSS | v4 | Via `@tailwindcss/vite` plugin — **no `tailwind.config.js`** |
| Icons | Lucide React | ^1.8.0 | Prefer over inline SVG for new icons |
| Linting | ESLint | 9 | Flat config in `eslint.config.js` |
| Routing | None | — | Single-page for now; no React Router installed |
| State | None | — | Local `useState` only; no Redux, Zustand, etc. |
| Animations | CSS `@keyframes` | — | Co-located in `<style>` tags inside JSX |
| Fonts | Inter | system | Via CSS `font-family: var(--font-sans)` |

### Architecture notes
- `App.jsx` renders only `<Home />` — no layout wrapper at the app level
- Navbar and Footer are rendered inside `Home/index.jsx`, not in App
- No router installed — new pages will need React Router added when the time comes
- All data is hardcoded as JS arrays/objects above components; no API calls anywhere

---

## 3. Design System

### 3.1 Color Tokens

All colors are **CSS custom properties** defined in `src/index.css`. The Tailwind `@theme` block maps them to utility classes. **Never use raw hex values in components — always reference tokens.**

#### Core palette

| Token | Hex | Tailwind class | Usage |
|---|---|---|---|
| `--color-bg-secondary` | `#06041F` | `bg-dark` | Dark section backgrounds (navy-black) |
| `--color-bg-primary` | `#F1F5F9` | — | Light section backgrounds |
| `--color-bg-card` | `#111827` | `bg-card` | Card backgrounds on dark sections |
| `--color-accent` | `#E11D48` | `bg-accent`, `text-accent` | Brand red — logos, CTAs, labels, highlights |
| `--color-accent-dark` | `#9F1239` | `bg-accent-dark` | Red on hover states |
| `--color-accent-soft` | `#FFF1F2` | `bg-accent-soft` | Very light red tint (active states, pills) |
| `--color-text-primary` | `#F8FAFC` | `text-ink-soft` | Main text on dark backgrounds |
| `--color-text-secondary` | `#94A3B8` | `text-muted` | Muted text on dark backgrounds |
| `--color-ink` | `#010716` | `text-ink` | Primary text on light backgrounds |
| `--color-slate` | `#64748B` | `text-slate` | Secondary text on light backgrounds |
| `--color-slate-dark` | `#334155` | `text-slate-dark` | Medium text on light backgrounds |
| `--color-border` | `#E2E8F0` | `border-border` | Card and divider borders on light backgrounds |
| `--color-border-subtle` | `rgba(255,255,255,0.08)` | — | Card borders on dark backgrounds |
| `--color-tech` | `#3B82F6` | `text-tech`, `bg-tech` | Blue — Enterprise Architecture cards/accents |
| `--color-tech-bright` | `#4A9EFF` | `text-tech-bright` | Blue hover highlight |
| `--color-purple` | `#8B5CF6` | `text-purple`, `bg-purple` | Cloud cards/accents |

#### Accent 3D shadow steps (for text-shadow depth effects only)
`--color-accent-sh0` through `--color-accent-sh6` — graduated dark-reds from `#9f0028` to `#35000c`. Used in the layered `text-shadow` glow animations on headline words.

#### RGB component variants (for opacity)
`--color-accent-rgb: 225 29 72` — used as `rgb(var(--color-accent-rgb) / 0.3)`.
Similar variants exist for tech, ink, dark, card, ink-soft.

### 3.2 Typography

All type classes live in `src/styles/typography.css`. These are the **single source of truth** — use them, don't compose raw Tailwind font utilities.

| Class | Size | Weight | Usage |
|---|---|---|---|
| `.t-display` | clamp(3.25rem → 5.5rem) | 900 | Hero headline only |
| `.t-headline` | clamp(2.25rem → 3.25rem) | 800 | Primary section headline (h2) |
| `.t-headline-sm` | clamp(1.875rem → 2.5rem) | 700 | Secondary headlines (events, etc.) |
| `.t-title-lg` | clamp(1.375rem → 1.875rem) | 700 | Large card titles |
| `.t-title` | 1.25rem | 600 | Card titles, sub-headers |
| `.t-sub` | clamp(0.9375rem → 1.125rem) | 400 | Supporting text under section headline |
| `.t-body-lg` | 1.0625rem | 400 | Card body copy |
| `.t-body` | 0.9375rem | 400 | General body text |
| `.t-body-sm` | 0.8125rem | 400 | Fine print, footnotes |
| `.t-eyebrow` | 0.6875rem | 600 | Small ALL-CAPS label above headline |
| `.t-tagline` | clamp(0.6875rem → 1rem) | 300 | Spaced uppercase taglines |
| `.t-label` | 0.8125rem | 600 | CTA text, category labels |
| `.t-caption` | 0.6875rem | 500 | Smallest label, metadata |
| `.t-brand` | 1.5rem | 900 | Logo wordmark (desktop) |
| `.t-brand-sm` | 1.125rem | 700 | Logo wordmark (mobile) |
| `.t-mono` | 0.6875rem | 700 | Monospace — index numbers on cards |
| `.t-hero-body` | clamp(0.8125rem → 1.0625rem) | 300 | Hero descriptive line |

### 3.3 Section Layout Pattern

Every section uses this exact wrapper. Apply consistently:

```jsx
<section className="py-20 px-6 md:px-10 lg:px-16" style={{ background: 'var(--color-bg-secondary)' }}>
  <div className="max-w-7xl mx-auto">
    {/* content */}
  </div>
</section>
```

- Dark sections: `style={{ background: 'var(--color-bg-secondary)' }}`
- White sections: `className="bg-white"`
- Light gray sections: `style={{ background: 'var(--color-bg-primary)' }}`

### 3.4 Section Background Alternation (Home Page)

The current pattern on the Home page (dark → light → dark etc.):

| Order | Section | Background |
|---|---|---|
| 1 | Hero | Dark (bg image + `bg-black/55` overlay) |
| 2 | ProblemStatement | White (`bg-white`) |
| 3 | ServicesCards | Dark (`#06041F`) |
| 4 | ProcessTimeline | White (`bg-surface`) |
| 5 | Insights | Dark (`#06041F`) |
| 6 | ServicesList | Light gray (`#F1F5F9`) |
| 7 | Events | White (`bg-white`) |
| 8 | CTASplit | White (`bg-white`) |
| 9 | Newsletter | Dark (`#06041F`) |

Follow the alternation principle: no two consecutive dark but two consecutive pure-white sections allowed

### 3.5 Card Styles

#### Dark card (used on dark-bg sections)
```jsx
<div
  className="rounded-xl p-7"
  style={{
    background: 'var(--color-bg-card)',        // #111827
    border: '1px solid var(--color-border-subtle)',  // rgba(white, 0.08)
  }}
/>
```
Hover: `translateY(-16px) rotateX(6deg) rotateY(±4deg) scale(1.03)` with tech-blue glow box-shadow.

#### Light card (used on white/light-bg sections)
```jsx
<div className="bg-white border border-border rounded-2xl p-6" />
```
Hover: `translateY(-8px)` with subtle `shadow-2xl`.

#### Glow layer pattern (ProcessTimeline style)
```jsx
<div className="group relative">
  <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-lg" />
  <div className="relative bg-white border border-border rounded-2xl p-6 ...">
    {/* content */}
  </div>
</div>
```

#### Premium decorators (used on flagship dark cards — ServicesCards, Newsletter, CTASplit)
- **Scanline:** absolute horizontal line that sweeps top→bottom on hover
- **Corner brackets:** 4 × 14px bracket marks at card corners, blink on hover
- **Particles:** 3–4 tiny dots that rise and fade on hover
- These are all `opacity: 0` at rest, triggered by hover class on parent

### 3.6 Section Header Pattern

Every section opens with this block (adapt text):

```jsx
<p className="t-eyebrow mb-3 text-accent">
  Section Label
</p>
<h2 className="t-headline text-ink">       {/* or text-white for dark sections */}
  Headline with <span className="text-accent">Accented Word</span>
</h2>
<p className="t-sub mt-4 text-muted-dk">  {/* or text-muted for dark sections */}
  Supporting description sentence.
</p>
```

### 3.7 Animations

Animations are co-located in `<style>` tag strings inside the component's return — **not in separate CSS files**. Pattern:

```jsx
function MySection() {
  return (
    <>
      <style>{`
        @keyframes myAnim { from { opacity: 0; } to { opacity: 1; } }
        .my-element { animation: myAnim 0.8s ease both; }
      `}</style>
      <section>...</section>
    </>
  )
}
```

For index-based card animation variants:
```jsx
`.card-${index} { animation: cardIn 0.7s ease ${0.1 + index * 0.15}s both; }`
<div className={`card-${index}`} />
```

**Standard animation repertoire:**
- `fadeSlideUp / fadeSlideDown` — opacity + translateY, used for hero content
- `eyebrowFade` — opacity + letter-spacing expand → contract
- `headSlide / headSlideLeft` — opacity + translateX/Y
- `glowPulse / aiPop / achievePop` — 3D text-shadow depth pulse on accent words
- `cardIn` — opacity + translateY for card entrance
- `iconFloat` — looping vertical float on icons
- `scrollBounce` — looping dot bounce for scroll indicator
- `scanline` — horizontal sweep inside card on hover
- `cornerPulse` — bracket corners blink on hover
- `particleRise` — small dots rise and fade on hover

### 3.8 Hover State Conventions

Tailwind `hover:` can't target CSS variable colors, so use `onMouseEnter/Leave` for token-colored hover changes:

```jsx
onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted-dk)' }}
```

Use Tailwind `hover:` only when the target color maps to a Tailwind utility (e.g., `hover:text-accent`, `hover:border-accent` — these work because `accent` is in the `@theme`).

### 3.9 Navbar Behaviour

- **Transparent** when scrollY ≤ 40px: text white, logo white
- **Scrolled** (scrollY > 40px): `bg-surface/95 backdrop-blur-sm border-b shadow-sm`, text dark, logo red
- **Mega-menus**: 4 dropdown categories (What We Offer, Our Work, Insights, AI) — full-width panels on hover
- **Mobile**: hamburger → full-screen slide-down drawer with accordion sub-menus

### 3.10 Button Component

`src/components/ui/Button.jsx` — three variants:

```jsx
<Button variant="primary">Get Started</Button>      // red filled
<Button variant="secondary">Learn More</Button>     // outlined
<Button variant="ghost">Skip</Button>               // text only
```

CTA links not using `<Button>` must replicate the style manually with inline `style` + `onMouseEnter/Leave`.

---

## 4. Folder & Component Structure

```
thotnr/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── icons/          # SVG icons (imported as img src or React component)
│   │   └── images/         # JPG, PNG, WebP, SVG hero/card images
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx  # Fixed top nav with mega-menus + mobile drawer
│   │   │   └── Footer.jsx  # Site footer with links and social icons
│   │   └── ui/
│   │       └── Button.jsx  # Reusable button — primary/secondary/ghost
│   ├── hooks/
│   │   └── useCounter.js   # Custom hook (exists, currently unused in main flow)
│   ├── pages/
│   │   └── Home/
│   │       ├── index.jsx   # Page assembly — renders Navbar + sections + Footer
│   │       └── sections/
│   │           ├── Hero.jsx
│   │           ├── ProblemStatement.jsx
│   │           ├── ServicesCards.jsx
│   │           ├── ProcessTimeline.jsx
│   │           ├── Insights.jsx
│   │           ├── ServicesList.jsx
│   │           ├── Events.jsx
│   │           ├── CTASplit.jsx
│   │           └── Newsletter.jsx
│   ├── services/           # Empty — reserved for future API helpers
│   ├── styles/
│   │   └── typography.css  # All type scale classes (.t-*)
│   ├── utils/
│   │   └── index.js        # cn() class joiner, formatDate()
│   ├── App.jsx             # Root — renders <Home /> only
│   ├── index.css           # Design tokens + Tailwind @theme
│   └── main.jsx            # Vite entry point
├── CLAUDE.md
├── PRD.md
├── eslint.config.js
├── package.json
└── vite.config.js
```

### Component naming rules
- **Pages**: `src/pages/PageName/index.jsx` — PascalCase directory + `index.jsx`
- **Sections**: `src/pages/PageName/sections/SectionName.jsx` — one section per file
- **Layout**: `src/components/layout/ComponentName.jsx`
- **UI primitives**: `src/components/ui/ComponentName.jsx`
- **Sub-components**: defined in the same file as their parent — **not exported**, not split out unless used in 2+ files

### File anatomy (section files follow this order)
1. Imports (images, icons, utils)
2. Data constants (arrays/objects for the section's content)
3. Sub-component function(s) — not exported
4. Main section function
5. `export default SectionName`

---

### Rules- Color usage in whole website
1. Mostly use color #ffffff for background or whole website(60%)
2. Second use color #06041F (30%)
3. Least use color #E11D48(5%)
4. Rest use other colors (5%)


## 5. Pages to Build

### 5.1 Home Page — `src/pages/Home/`

**Status: 75% complete**

#### Already built

| Section | File | Notes |
|---|---|---|
| Hero | `Hero.jsx` | Full-viewport dark bg, animated headline, scroll indicator |
| Problem Statement | `ProblemStatement.jsx` | White bg, bold copy |
| Core Capabilities | `ServicesCards.jsx` | Dark bg, 3 animated cards |
| Process Timeline | `ProcessTimeline.jsx` | White bg, 3-card methodology (Lucide icons) |
| Insights | `Insights.jsx` | Dark bg, 3 article cards with category badge |
| Services We Offer | `ServicesList.jsx` | Light gray bg, expanding flex cards + all-services accordion |
| Events | `Events.jsx` | White bg, image + 2 event cards layout |
| CTA Split | `CTASplit.jsx` | White bg, left CTA + right outcomes checklist card |
| Newsletter | `Newsletter.jsx` | Dark bg, email subscription card (built but not rendered) |

#### Pending — build these next

---

**F1: Case Studies Section**

- **File to create:** `src/pages/Home/sections/CaseStudies.jsx`
- **Background:** White (#ffffff) — follows CTASplit (dark), so white is correct
- **Layout:** Featured + supporting split
  - One large featured card (dark bg `#06041F`) spanning ~60% width — left
  - Two smaller supporting cards (light gray `#F1F5F9`) stacked — right
  - Responsive: stacks to single column on mobile
- **Large card contents:**
  - Industry tag (small caps, accent red)
  - Metric (very large, accent red, e.g. "73%")
  - Metric label below it (e.g. "faster decisioning")
  - Bold headline (white)
  - 2-sentence description (muted)
  - "Read Case Study →" CTA (accent red)
- **Small card contents:**
  - Industry tag
  - Metric + label (dark ink, prominent)
  - Headline (dark)
  - "Read Case Study →" CTA
- **No 3D hover or scanline decorators** — keep hover to simple
  `translateY(-6px)` with subtle shadow, matching the white-bg 
  light card convention from ProcessTimeline
- **Note:** `CaseStudies` is already imported in `Home/index.jsx` — 
  only the file is missing
---

**F2: Clients / Partners Logo Grid Section**

- **File to create:** `src/pages/Home/sections/Clients.jsx` (add import to `Home/index.jsx`)
- **Background:** Dark
- **Layout:** center of screen tagline - Our Client + logo moves all around tagline (total we have 22 clients) , on hover logo flip and show client name
- **Style:** Dark, very minimum red texture logos at 70% opacity, full opacity on hover. Minimal — no cards, just the grid
- **Note:** Placeholder logos are acceptable for now — use styled divs or text if assets aren't ready
-**Note2** Assets aren't ready yet so write code as we add assest in future


---

**F3: Our Products Section**

**File to create:** `src/pages/Home/sections/Products.jsx`
**Background:** White (`#FFFFFF`) — follows dark Clients section
**Content**: Four product and name -Djubo, Qamp, Edumarshel,Citt
- **Layout:** - 
     -Single row, 4 equal columns separated by vertical dividers (`border-right`)
     - Last column has no right border
     - All columns vertically centered, `text-align: center`
     - No card borders, no shadows, no backgrounds — clean white surface
     -Product logo — 64×64px, rounded-xl, soft colored background unique per product (not white, not dark — use brand-adjacent tint e.g. red-50, blue-50, green-50, orange-50)
     -Product name — 14px, font-weight 500, dark
     -One-line description — 11–12px, muted gray, max 10 words
     -"Learn More" — 11px, red accent, font-weight 500, no underline
     - Logo image imported from `assets/logos/`
     - Displayed inside a 64×64 tinted container — logo visible, background adds color identity
     - Each product gets a distinct tint color (no two products same color)
**Animations**
- `fadeSlideUp` on scroll — staggered `0.1s` delay per column
- No 3D hover, no scanlines, no corner brackets — keep it minimal

**Style rules**
- No card borders or card backgrounds
- Dividers: `border-right: 0.5px solid #E2E8F0` between columns
- Tags/pills: removed — description replaces them
- Section header above strip:
  - Eyebrow label: `OUR PRODUCTS` — red accent, uppercase, tracking-widest
  - Headline: `Built for Enterprise. Ready for Production.` — dark, bold
  - Subtext: one line — muted gray
- **Note:** `Products` is already imported in `Home/index.jsx` — only the file is missing

---

### 5.2 About Page — `src/pages/About/`

**Status: PENDING**

- **File:** `src/pages/About/index.jsx`
- **Route:** `/about` (requires React Router to be installed)
- **Sections to build:**
  1. **Page Hero** — inner-page banner, dark bg, "About THOTNR" headline, breadcrumb
  2. **Company Story** — white bg, narrative copy about THOTNR's founding and mission
  3. **Mission & Values** — dark bg, 3–4 value cards (icon + title + description)
  4. **Why THOTNR Exists** — white bg, contrast section — "most enterprises fail at AI because..."
  5. **Team Section** — light gray bg, grid of team member cards (photo, name, role, LinkedIn link)

---

### 5.3 Contact Page — `src/pages/Contact/`

**Status: PENDING**

- **File:** `src/pages/Contact/index.jsx`
- **Route:** `/contact`
- **Layout:** 2-column — left: contact info / office details; right: static HTML form
- **Form fields:** Name, Company, Email, Phone (optional), Message, Topic dropdown
- **Form handling:** Static only — `action=""` or a `mailto:` link. No backend, no real submission
- **Office info:** Address, email, phone number (can be placeholder)
- **Design:** Clean, minimal. White background. Form inputs styled dark on light bg

---

### 5.4 Insights Listing Page — `src/pages/Insights/`

**Status: PENDING**

- **File:** `src/pages/Insights/index.jsx`
- **Route:** `/insights`
- **Layout:**
  1. Page hero banner (dark bg, headline)
  2. Category filter pills (static, no JS filter required for now — just visual)
  3. Article card grid — 3 columns on desktop, stacked on mobile
- **Card contents:** Thumbnail image, category tag, title, date, read time, excerpt (line-clamp-3), "Read More" link
- **Card style:** Match existing `InsightCard` in `Insights.jsx` — dark bg card, image top half, content bottom half
- **Categories (static):** AI Strategy, Generative AI, Enterprise Architecture, Cloud, Data Engineering, Events & Webinars

---

### 5.5 All Services Page — `src/pages/Services/`

**Status: PENDING**

- **File:** `src/pages/Services/index.jsx`
- **Route:** `/services`
- **Layout:**
  1. Page hero banner (dark bg)
  2. Three featured service sections (AI, Enterprise Architecture, Cloud) — each gets a full-width block with icon, headline, description, outcomes list, CTA
  3. Full services list grid — mirrors the accordion from `ServicesList.jsx` but permanently expanded and grouped by category
- **Note:** Can reuse the `allServices` and `featuredServices` data arrays from `ServicesList.jsx`

---

## 6. Shared Components Needed

These don't exist yet but are needed across multiple pages. Build them in `src/components/` when the second page is started.

| Component | Path | Purpose |
|---|---|---|
| `PageHero` | `components/layout/PageHero.jsx` | Reusable inner-page banner (dark bg, eyebrow + headline + optional breadcrumb). Used on About, Contact, Insights, Services |
| `SectionWrapper` | `components/layout/SectionWrapper.jsx` | Wraps `<section>` with consistent py-20 px-* padding and optional max-w-7xl inner div |
| `PremiumCard` | `components/ui/PremiumCard.jsx` | Dark card with scanline + corner brackets + particle decorators — consolidates the pattern repeated in ServicesCards, Newsletter, CTASplit |
| `SectionHeader` | `components/ui/SectionHeader.jsx` | Eyebrow + headline + sub line — the standard 3-line section opener |
| `CategoryPill` | `components/ui/CategoryPill.jsx` | Small rounded tag — used for insight categories, industry labels, product feature tags |

> **When to extract:** Only extract a component when it is needed in a **second place**. Don't pre-build abstractions that are used once.

---

## 7. Coding Conventions

### Component structure
```jsx
// 1. Imports
import { useState } from 'react'
import { cn } from '../../utils'
import someImage from '../../../assets/images/file.jpg'

// 2. Data constants (static arrays/objects for this section)
const items = [
  { id: 1, title: '...', desc: '...' },
]

// 3. Private sub-components (not exported)
function SubCard({ title, desc }) {
  return <div>...</div>
}

// 4. Main component
function SectionName() {
  return (
    <>
      <style>{` @keyframes ... `}</style>
      <section className="py-20 px-6 md:px-10 lg:px-16" ...>
        <div className="max-w-7xl mx-auto">
          ...
        </div>
      </section>
    </>
  )
}

// 5. Default export
export default SectionName
```

### Class utility (`cn`)
```js
import { cn } from '../../utils'
cn('base', condition && 'conditional', 'always')
```

### Tailwind vs inline style split
- **Tailwind utilities** — layout, spacing, flex, grid, sizing, border-radius, transitions, responsive prefixes, hover states where the color has a Tailwind token
- **`style={{}}`** — anything using `var(--color-*)` tokens directly; one-off values not in the Tailwind theme
- **Never** use arbitrary Tailwind values like `bg-[#E11D48]` — use `bg-accent` instead

### Props pattern
- Destructure in function signature: `function Card({ title, desc, index })`
- Default values inline: `function Button({ variant = 'primary', className = '' })`
- Spread rest props: `{...props}` at end when wrapping native elements

### Responsive breakpoints
Always mobile-first. Three breakpoints used:
- Base — mobile
- `md:` — tablet (768px+)
- `lg:` — desktop (1024px+)

### Asset imports
Always import images/SVGs at the top of the file, not inline in JSX:
```jsx
// Good
import heroImage from '../../../assets/images/hero.png'
<img src={heroImage} />

// Bad
<img src="../../../assets/images/hero.png" />
```

---

## 8. UI/UX Rules

### Background alternation
Never put two consecutive dark (`#06041F`) or two consecutive white sections. Always alternate. Light gray (`#F1F5F9`) can act as a transition between two white sections if needed.

### Section spacing
- Section vertical padding: `py-20` (80px top and bottom) — standard
- Use `pt-20 pb-10` or similar when a following element (like the "All Services" toggle) sits flush below
- Section header margin-bottom: `mb-16` before the content grid

### Typography scale rules
- One `t-display` per page maximum — Hero only
- Each section gets one `t-headline` (h2) 
- Card titles use `t-title-lg` or `t-title` depending on card size
- Section sub-lines always use `t-sub`
- Category labels / eyebrows always use `t-eyebrow`

### Accent word in headlines
Key words in headlines are wrapped in `<span className="text-accent">` to create the red highlight. Combine with a named CSS animation class for the 3D glow pulse effect on dark sections:

```jsx
<h2 className="t-headline text-white">
  Our <span className="text-accent ai-word">AI</span> Capabilities
</h2>
```

### Card hover transitions
- Duration: `0.4s–0.5s` with `cubic-bezier(0.34, 1.56, 0.64, 1)` (spring) for lift
- Color transitions: `0.15s–0.2s ease` (fast and crisp)
- Standard lift: `translateY(-8px)` to `translateY(-16px)` depending on card prominence
- 3D tilt: `rotateX(4deg–6deg) rotateY(±4deg)` on premium cards only

### CTA / Link styling
- Primary CTA: `<Button variant="primary">` or manually: `bg-accent text-white px-5 py-2.5 rounded-lg`
- Ghost CTA on dark: transparent background, `border: 1px solid rgba(255,255,255,0.2)`, white text — see Insights section "View All Insights" button
- Inline link CTA: accent-colored text + `→` arrow + `hover:gap-3` widening gap on hover
- All `<a>` elements: `no-underline` class always

### Form inputs
Input fields on dark backgrounds:
```jsx
style={{
  background: 'var(--color-bg-secondary)',
  border: '1px solid var(--color-border-subtle)',
  color: 'var(--color-text-primary)',
  caretColor: 'var(--color-accent)',
}}
```

### Icons
- **Lucide React** — preferred for UI icons (check, arrow, chevron, brain, etc.)
- **Inline SVG** — used when a very specific icon is needed that Lucide doesn't have, or for social icons in Footer
- Custom brand icons stored as `.svg` files in `src/assets/icons/`, imported as `img src`

---

## 9. Out of Scope

These will **not** be built as part of this project:

- Backend or API integrations of any kind
- CMS (Contentful, Sanity, Strapi, etc.)
- Authentication or user accounts
- Payment or ecommerce flows
- Real form submission — contact/newsletter forms are purely static HTML; no emails will actually send
- Server-side rendering (SSR) or Next.js migration
- i18n / localization
- Analytics beyond a standard `<script>` tag drop-in (no custom event tracking architecture)
- Database of any kind

---

## 10. Feature Status Tracker

Update this table as work progresses.

### Home Page Sections

| Section | File | Status |
|---|---|---|
| Navbar | `components/layout/Navbar.jsx` | ✅ DONE |
| Footer | `components/layout/Footer.jsx` | ✅ DONE |
| Hero | `sections/Hero.jsx` | ✅ DONE |
| Problem Statement | `sections/ProblemStatement.jsx` | ✅ DONE |
| Core AI Capabilities (cards) | `sections/ServicesCards.jsx` | ✅ DONE |
| Process / Methodology | `sections/ProcessTimeline.jsx` | ✅ DONE |
| Insights preview | `sections/Insights.jsx` | ✅ DONE |
| Services We Offer | `sections/ServicesList.jsx` | ✅ DONE |
| Events | `sections/Events.jsx` | ✅ DONE |
| CTA Split | `sections/CTASplit.jsx` | ✅ DONE |
| Newsletter | `sections/Newsletter.jsx` | ✅ DONE (built, not rendered) |
| **Case Studies** | `sections/CaseStudies.jsx` | ⏳ PENDING |
| **Clients / Logos** | `sections/Clients.jsx` | ⏳ PENDING |
| **Our Products** | `sections/Products.jsx` | ⏳ PENDING |

### New Pages

| Page | Directory | Status |
|---|---|---|
| **About** | `src/pages/About/` | ⏳ PENDING |
| **Contact** | `src/pages/Contact/` | ⏳ PENDING |
| **Insights Listing** | `src/pages/Insights/` | ⏳ PENDING |
| **All Services** | `src/pages/Services/` | ⏳ PENDING |

### Shared Components

| Component | Path | Status |
|---|---|---|
| Button | `components/ui/Button.jsx` | ✅ DONE |
| PageHero | `components/layout/PageHero.jsx` | ⏳ PENDING (build before 2nd page) |
| SectionWrapper | `components/layout/SectionWrapper.jsx` | ⏳ PENDING |
| PremiumCard | `components/ui/PremiumCard.jsx` | ⏳ PENDING |
| SectionHeader | `components/ui/SectionHeader.jsx` | ⏳ PENDING |
| CategoryPill | `components/ui/CategoryPill.jsx` | ⏳ PENDING |

---

*This document is the source of truth for all build decisions. Update the status tracker and feature notes as work progresses.*
