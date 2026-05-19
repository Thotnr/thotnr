# CLAUDE.md — Thotnr Codebase Guide

## Core Rules

Four rules apply to every file, every section, every component. No exceptions.

### 1. Tailwind for structure, CSS variables for visual properties

Use Tailwind for structural concerns only: `flex`, `grid`, `gap-*`, `p-*`, `m-*`, `rounded-*`, `w-*`, `h-*`, `items-*`, `justify-*`, `overflow-*`, `z-*`, `absolute`, `relative`, `fixed`, `hidden`, `block`, `order-*`, `col-span-*`, `row-span-*`.

Never use Tailwind for colors or font sizes.

### 2. Solid colors from CSS variables — rgba() allowed for transparency

Every solid color must reference a CSS variable. Never hardcode `#hex` or named color values in component files.

```jsx
style={{ background: 'var(--color-secondary)', color: 'var(--color-text-white)' }}
className="bg-[var(--color-primary)] text-[var(--color-text-primary)]"
```

**rgba() is acceptable for transparency effects** — overlays, glows, shadows, border transparency — where a CSS variable alone cannot achieve the opacity variant needed. Use the raw channel values of the nearest design token:

| Token | Raw value for rgba() |
|---|---|
| `--color-secondary` (#1D3557) | `rgba(29,53,87,...)` |
| `--color-primary` (#F1FAEE) | `rgba(241,250,238,...)` |
| `--color-accent` (#A8DADC) | `rgba(168,218,220,...)` |
| `--color-highlight` (#E63946) | `rgba(230,57,70,...)` |
| `--color-text-primary` (#0B0F19) | `rgba(11,15,25,...)` |
| White | `rgba(255,255,255,...)` |
| Black | `rgba(0,0,0,...)` |

If a **new solid color** is needed that has no existing variable, define it in `index.css` under `:root` first, then use `var(--color-name)`.

### 3. Font sizes from index.css typography classes only

Never use Tailwind font-size utilities: `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, etc. These are forbidden in section files.

Always use the typography classes defined in `index.css`:

| Class | Size | Font | Notes |
|---|---|---|---|
| `.text-display` | 72px | Playfair Display, weight 600, -0.02em | Large cinematic headings |
| `.text-h1` | 40px | Sora | Section headings |
| `.text-h2` | 32px | Sora | Sub-headings |
| `.text-h3` | 24px | Sora | Card / panel headings |
| `.text-h4` | 18px | Sora | Small headings, older eyebrow pattern |
| `.text-body-lg` | 18px, lh 1.7 | Source Serif 4 | Lead paragraphs |
| `.text-body` | 16px, lh 1.75 | Source Serif 4 | Standard body copy |
| `.text-body-sm` | 14px | Source Serif 4 | Secondary descriptions |
| `.text-label` | 12px, 0.08em, uppercase | IBM Plex Mono | Eyebrow labels, tags |
| `.text-caption` | 12px | IBM Plex Mono | Captions, attribution |

When overriding font-family inline (e.g. hero display, manifesto text), use the CSS variable:
```jsx
style={{ fontFamily: 'var(--font-accent)' }}   // Playfair Display
style={{ fontFamily: 'var(--font-mono)' }}      // IBM Plex Mono
style={{ fontFamily: 'var(--font-heading)' }}   // Sora
```

Use `clamp()` for responsive fluid sizes within `<style>` tags or inline styles — not Tailwind.

### 4. Every section must be responsive across all desktop sizes

Write mobile-first. Every section must render correctly at 375px, 768px, 1024px, 1280px, 1440px, and 1920px. Test grid columns, font sizes, and spacing at each breakpoint. Use Tailwind responsive prefixes (`md:`, `lg:`, `xl:`) and `@media` queries inside `<style>` tags when needed.

---

## Tech Stack

- **React 19.2.5** — functional components only, hooks allowed
- **Vite 8.0.9** — build tool (`vite.config.js`)
- **Tailwind CSS v4.2.3** — via `@tailwindcss/vite` plugin; no `tailwind.config.js`; config lives in `index.css`
- **React Router v7.14.2** — `BrowserRouter` + `Routes` in `App.jsx`; `AnimatedRoutes` wrapper for page transitions (`pageFadeIn` 400ms); `window.scrollTo` on every route change
- **Lucide React 1.8.0** — icon library (`lucide-react`)
- **PostCSS 8.5.10** + Autoprefixer
- **Google Fonts** — Playfair Display (700 ital/regular), Sora (400/500/600), Source Serif 4 (400/500), IBM Plex Mono (400/500) — single `@import url()` in `index.css`

---

## Design Tokens (`src/index.css`)

All tokens defined under `:root`. This is the single source of truth for colors and fonts.

### Colors

```css
/* Section backgrounds */
--color-primary:   #F1FAEE   /* off-white  — light section bg */
--color-secondary: #1D3557   /* dark navy  — dark section bg  */
--color-tertiary:  #457B9D   /* steel blue — SubscribeSection, Escalates only */

/* Accents */
--color-accent:    #A8DADC   /* teal  — glow effects, hover states, active indicators */
--color-highlight: #E63946   /* red   — eyebrow labels, CTA hover accents */

/* Text */
--color-text-primary:   #0B0F19  /* near-black headings on light backgrounds */
--color-text-secondary: #2B2D42  /* dark slate body copy on light backgrounds */
--color-text-tertiary:  #6C757D  /* muted / supporting text */
--color-text-white:     #ffffff  /* all text on dark backgrounds */

/* Dividers */
--color-divider: rgba(11, 15, 25, 0.1)   /* separator lines on light sections */

/* Overlay surfaces — used on dark/tertiary backgrounds */
--color-overlay-card:   rgba(255, 255, 255, 0.08)  /* translucent card bg */
--color-overlay-border: rgba(255, 255, 255, 0.15)  /* translucent card border */
--color-overlay-metric: rgba(0, 0, 0, 0.15)        /* dark metric panel overlay */
--color-icon-bg:        rgba(168, 218, 220, 0.18)  /* teal-tinted icon containers */

/* Capability card accents — ServicesCards section only */
--color-cap-purple: #7C3AED
--color-cap-blue:   #2563EB
```

### Fonts

```css
--font-heading: 'Sora', sans-serif          /* h1–h4 base styles, nav, CTAs */
--font-body:    'Source Serif 4', serif     /* body default */
--font-mono:    'IBM Plex Mono', monospace  /* labels, captions, mono UI */
--font-accent:  'Playfair Display', serif   /* .text-display, hero words, manifesto */
```

**Base styles** (automatic via `index.css`):
- `body` → `font-family: var(--font-body)`
- `h1, h2, h3, h4` → `font-family: var(--font-heading)`

### Undefined legacy variables — never use

`Navbar.jsx`, `Footer.jsx`, `Button.jsx`, and `Events.jsx` reference variables not in `:root`:
`--color-border`, `--color-surface`, `--color-ink`, `--color-ink-rgb`, `--color-muted`, `--color-muted-dk`, `--color-slate`, `--color-slate-dark`, `--color-accent-dark`, `--color-accent-soft`, `--color-surface-soft`, `--color-highlight-rgb`

Do not use these in any new section file.

---

## Section Padding & Navbar Alignment

Every content section uses exactly this padding and max-width:

```jsx
<section className="py-16 px-6 md:px-10 lg:px-16">
  <div className="max-w-7xl mx-auto">
    ...
  </div>
</section>
```

The Navbar inner container uses identical `max-w-7xl mx-auto px-6 md:px-10 lg:px-16`, so section content edges align precisely with navbar links at every breakpoint.

**Never change these values.** Do not use `container`, `max-w-screen-xl`, or add extra wrapper padding. Always `max-w-7xl mx-auto`.

**Exception:** Hero sections (100vh) do not use this padding on the section itself — they use it on the inner content container instead (see Hero Section Pattern below).

---

## Section Background Alternation

Sections alternate light → dark → light → dark. Never break this rhythm within a page.

| Background | Usage |
|---|---|
| `bg-[var(--color-primary)]` or `style={{ background: 'var(--color-primary)' }}` | Light off-white (default) |
| `style={{ background: 'var(--color-secondary)' }}` | Dark navy |
| `style={{ background: 'var(--color-tertiary)' }}` | Steel blue — SubscribeSection and Escalates only |

---

## Color Application Rules

1. **`--color-highlight` (red)** → eyebrow labels, hover accents on CTAs. Never use as a section background or card background.
2. **`--color-accent` (teal)** → glow effects, active states, animated borders, Ask TIA button, interactive indicators.
3. **`--color-overlay-card` / `--color-overlay-border`** → card backgrounds and borders on dark (`--color-secondary`, `--color-tertiary`) backgrounds.
4. **On dark sections**: headings `color: 'var(--color-text-white)'`, body `rgba(255,255,255,0.6–0.75)`.
5. **On light sections**: headings `text-[var(--color-text-primary)]`, body `text-[var(--color-text-secondary)]`.
6. **`--color-cap-purple` / `--color-cap-blue`** → capability card accents in `ServicesCards.jsx` only.
7. **Tailwind opacity suffix** (`text-white/70`) is acceptable for opacity-modified white on dark backgrounds.

---

## Section Shell Template

```jsx
function SectionName() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-label mb-3" style={{ color: 'var(--color-highlight)', letterSpacing: '0.2em' }}>
            EYEBROW LABEL
          </p>
          <h2 className="text-h1" style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
            Section heading.
          </h2>
          <p className="text-body mt-3" style={{ color: 'var(--color-text-secondary)', maxWidth: '560px' }}>
            Supporting description.
          </p>
        </div>

        {/* Content */}

      </div>
    </section>
  )
}

export default SectionName
```

For dark sections, swap `bg-[var(--color-primary)]` → `style={{ background: 'var(--color-secondary)' }}` and update text colors accordingly.

---

## Eyebrow + Headline Pattern

**Current standard (TIA page and all new sections):**
```jsx
<p className="text-label mb-3" style={{ color: 'var(--color-highlight)', letterSpacing: '0.2em' }}>
  EYEBROW LABEL
</p>
<h2 className="text-h1" style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
  Section heading.
</h2>
```

Use `text-label` (IBM Plex Mono, 12px, uppercase) for eyebrows — it is the standard across the TIA page and all newer sections. `text-h4` appears in older Home page sections; do not use it for eyebrows in new work.

---

## Hero Section Pattern

Full-viewport hero with video background:

```jsx
<section style={{ height: '100vh', minHeight: '100dvh', position: 'relative', overflow: 'hidden' }}>

  {/* Background video */}
  <video
    autoPlay muted loop playsInline
    style={{
      position: 'absolute', inset: 0,
      width: '100%', height: '100%',
      objectFit: 'cover', objectPosition: 'center',
      filter: 'brightness(0.55) contrast(1.1)',
    }}
    src={heroVideo}
  />

  {/* Overlay layers — stack multiple for cinematic depth */}
  {/* Left-to-right gradient for text readability on left side */}
  <div style={{
    position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
    background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.72) 35%, rgba(0,0,0,0.28) 75%, rgba(0,0,0,0) 100%)',
  }} />
  {/* Bottom vignette */}
  <div style={{
    position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 22%)',
  }} />
  {/* Mobile flat overlay — shown below lg breakpoint only */}
  <div className="block lg:hidden" style={{
    position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
    background: 'rgba(0,0,0,0.50)',
  }} />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center px-6 md:px-10 lg:px-16">
    <div className="max-w-7xl mx-auto w-full">
      ...
    </div>
  </div>

</section>
```

**Video attributes required:** `autoPlay muted loop playsInline` — all four, always.  
**Home Hero:** `Hero.jsx` cycles through 3 video sources using `localStorage` to persist the index across page refreshes.

---

## Scroll-Triggered Animations

The standard pattern across the entire codebase: `IntersectionObserver` + `animation-play-state`.

### useInView hook (copy into each section file)

```jsx
function useInView(threshold = 0.08) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}
```

The observer fires **once** (`obs.disconnect()` immediately after trigger) — animations do not replay on re-scroll.

### Animation play-state pattern

```jsx
function MySection() {
  const [sectionRef, inView] = useInView(0.08)

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .my-header  { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
        .my-item-0  { animation: fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
        .my-item-1  { animation: fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.35s both; }

        /* Paused until in view */
        .my-paused .my-header,
        .my-paused .my-item-0,
        .my-paused .my-item-1 { opacity: 0; animation-play-state: paused; }

        /* Running when in view */
        .my-running .my-header,
        .my-running .my-item-0,
        .my-running .my-item-1 { animation-play-state: running; }

        /* Reduced motion fallback — required in every section */
        @media (prefers-reduced-motion: reduce) {
          .my-header, .my-item-0, .my-item-1 {
            animation: none !important; opacity: 1 !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`py-16 px-6 md:px-10 lg:px-16 ${inView ? 'my-running' : 'my-paused'}`}
        style={{ background: 'var(--color-primary)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="my-header">...</div>
          <div className="my-item-0">...</div>
          <div className="my-item-1">...</div>
        </div>
      </section>
    </>
  )
}
```

### Animation standards

| Property | Value |
|---|---|
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` (expo out) — all entrance animations |
| Duration | `0.65s–1.0s` for main elements; `0.4s–0.6s` for smaller elements |
| Stagger | `0.1s–0.15s` between sibling elements |
| Threshold | `0.06–0.10` depending on section height |
| Keyframe names | Unique per section — prefix with 2–3 char section code (e.g., `s2FadeUp`, `faqLineIn`) |
| Class names | Unique per section — prefix with section code (e.g., `.s2-header`, `.faq-row-0`) |
| `prefers-reduced-motion` | Required in every section — `animation: none !important; opacity: 1 !important` |

Common animation types: `fadeUp` (translateY + opacity), `blurReveal` (blur + scale + translateY), `slideLeft`/`slideRight` (translateX + opacity), `charIn` (per-character stagger), `lineGrow` (width expand).

---

## Hover Effects

Use `onMouseEnter` / `onMouseLeave` whenever CSS variables are involved — Tailwind `hover:` cannot reference CSS variables.

```jsx
<button
  style={{ background: 'var(--color-secondary)', color: 'var(--color-text-white)' }}
  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-highlight)' }}
  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-secondary)' }}
>
  Label
</button>
```

Use React state for complex multi-property hover (transform + box-shadow + color simultaneously):
```jsx
const [hov, setHov] = useState(false)
<button
  onMouseEnter={() => setHov(true)}
  onMouseLeave={() => setHov(false)}
  style={{
    background: hov ? 'var(--color-accent)' : 'var(--color-secondary)',
    transform: hov ? 'translateY(-3px)' : 'none',
    boxShadow: hov ? '0 16px 40px rgba(168,218,220,0.35)' : 'none',
    transition: 'background 0.24s ease, transform 0.22s ease, box-shadow 0.24s ease',
  }}
/>
```

Use Tailwind `hover:` classes only for structural hover (e.g., `hover:scale-105`, `hover:-translate-y-2`, `hover:opacity-100`) that don't involve CSS variables.

---

## Button Patterns

**`Button.jsx` is broken** — it references undefined legacy CSS vars (`--color-accent-dark`, `--color-border`, `bg-accent`, `border-accent`). Do not use it in new sections.

**Standard inline button (preferred):**
```jsx
<button
  className="px-7 py-3 rounded-lg font-semibold"
  style={{ background: 'var(--color-secondary)', color: 'var(--color-text-white)', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontSize: '15px', transition: 'background 0.24s ease' }}
  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-highlight)' }}
  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-secondary)' }}
>
  Label →
</button>
```

**Link styled as button:**
```jsx
<Link
  to="/path"
  className="inline-block px-7 py-3 rounded-lg font-semibold"
  style={{ background: 'var(--color-secondary)', color: 'var(--color-text-white)', textDecoration: 'none', fontFamily: 'var(--font-heading)', fontSize: '15px', transition: 'background 0.22s ease' }}
  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-highlight)' }}
  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-secondary)' }}
>
  Label →
</Link>
```

**Pill button (used in TIA, hero sections):**
```jsx
<button
  style={{
    padding: '14px 36px', borderRadius: '100px',
    background: 'var(--color-accent)', color: 'var(--color-secondary)',
    border: 'none', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 700,
    transition: 'background 0.24s ease, transform 0.22s ease, box-shadow 0.24s ease',
  }}
/>
```

`font-semibold` and `font-bold` Tailwind weight utilities are fine on buttons. Only font-size utilities are forbidden.

---

## Grid Layouts

Always mobile-first:

```jsx
{/* 2-column — stacks on mobile */}
<div className="grid lg:grid-cols-2 gap-12 items-center">

{/* 3-column cards — stacks on mobile, 2-col on tablet */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Custom split — 52/48 or 60/40 */}
<div className="grid lg:grid-cols-[52fr_48fr] gap-16 items-center">

{/* 4-column — 2 on tablet, 1 on mobile */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
```

At 1440px+ verify grids don't over-stretch. Add `xl:grid-cols-*` when needed.

---

## Data + Component Pattern

Data arrays and sub-components live in the same file as the section. No separate files unless the data is shared across multiple pages.

```jsx
// Data at file top
const ITEMS = [
  { id: 1, title: '...', desc: '...' },
]

// Sub-component in same file
function ItemCard({ title, desc }) {
  return <div>...</div>
}

// Section export
function SectionName() {
  return (
    <section ...>
      {ITEMS.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </section>
  )
}

export default SectionName
```

Data that is shared across listing + detail pages lives in `src/data/` (see Content Data Files below).

---

## Images & Videos

```jsx
import heroVideo from '../../../assets/videos/ai-cover.mp4'
import pharmaImg from '../../../assets/images/pharma.jpg'

// Video
<video src={heroVideo} autoPlay muted loop playsInline
  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />

// Image
<img src={pharmaImg} alt="Pharma" className="w-full h-full object-cover" />
```

- Images → `src/assets/images/`
- Client logos → `src/assets/images/clients/`
- Videos → `src/assets/videos/`
- Use `aspectRatio: '16/10'` inline style (not Tailwind) for fixed ratios

---

## Reusable Components

| Component | Location | Notes |
|---|---|---|
| `Navbar` | `components/layout/Navbar.jsx` | Fixed nav, scroll-aware, mega-menu, mobile drawer |
| `Footer` | `components/layout/Footer.jsx` | Links + social icons |
| `SubscribeSection` | `components/layout/SubscribeSection.jsx` | Email subscribe strip; `--color-tertiary` bg |
| `Button` | `components/ui/Button.jsx` | **Broken** — uses undefined legacy CSS vars. Do not use in new sections. |

Never recreate these. Always import from `components/`.

`FeatureBlock.jsx` at `pages/AI/sections/FeatureBlock.jsx` is a page-specific section file, not a shared component. Do not import it from outside the AI page.

---

## Utility Helpers

```jsx
import { cn, formatDate } from '../../utils'

// cn — merge Tailwind class strings, filtering falsy values
className={cn('base-class', isActive && 'active-class')}

// formatDate — Intl date formatter
formatDate('2024-01-15')          // → 'January 15, 2024'
formatDate('2024-01-15', 'fr-FR') // → '15 janvier 2024'
```

---

## Routes (`App.jsx`)

| Path | Component |
|---|---|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/join-us` | JoinUs |
| `/tia` | TIA |
| `/ai` | AI |
| `/case-studies` | CaseStudies |
| `/case-studies/:slug` | CaseStudyDetail |
| `/insights` | Insights |
| `/insights/:slug` | InsightDetail |
| `/industries` | Industry |
| `/services` | Services |
| `/services/:slug` | ServicesDetail |
| `/products` | Products |
| `/products/:slug` | ProductDetail |
| `/clients` | Clients |
| `/accelerators` | Accelerators |
| `/accelerators/:slug` | AcceleratorDetail |

Detail pages use `useParams()` to get the slug, look it up in the data file, and `<Navigate>` back to listing if no match found.

**Page transitions:** `<AnimatedRoutes>` wrapper with `pageFadeIn` keyframe (400ms ease-out). `window.scrollTo({ top: 0, behavior: 'instant' })` fires on every route change.

---

## Project Structure

```
src/
  pages/
    Home/
      index.jsx
      sections/
        Hero.jsx                    ← cycles 3 videos via localStorage
        ProblemStatement.jsx
        Vision.jsx
        ProcessTimeline.jsx
        ServicesCards.jsx
        CaseStudies.jsx
        Accelerators.jsx
        Clients.jsx
        Products.jsx
        ServicesList.jsx
        Insights.jsx
        Escalates.jsx
        Events.jsx                  ← legacy, imported but NOT rendered — do not touch
    TIA/
      index.jsx                     ← page assembler; manages modalOpen state
      components/
        AskTIAModal.jsx             ← modal overlay; imports AskTIAChat from S9AskTIA
      sections/
        S1Hero.jsx                  ← 100vh, video bg (ai-cover.mp4)
        S2Origin.jsx                ← bg: var(--color-primary) — light
        S3Pillars.jsx               ← bg: alternating per pillar panel
        S4Framework.jsx             ← bg: var(--color-secondary) — dark, id: tia-framework
        S5Engagement.jsx            ← bg: var(--color-primary) — light, id: tia-engagement
        S6Principles.jsx            ← bg: var(--color-secondary) — dark, id: tia-principles
        S7Industries.jsx            ← bg: var(--color-primary) — light, id: tia-industries
        S8CaseStudies.jsx           ← bg: var(--color-secondary) — dark, id: tia-case-studies
        S9AskTIA.jsx                ← bg: var(--color-secondary) — dark, id: ask-tia; exports AskTIAChat
        S10FAQ.jsx                  ← bg: var(--color-primary) — light, id: tia-faq
        S11FinalCTA.jsx             ← bg: var(--color-secondary) — dark, id: tia-final-cta
    About/
      index.jsx
      sections/
        S1Hero.jsx
        S2CoreContent.jsx
        S3Team.jsx
        S4Partners.jsx
    AI/
      index.jsx
      sections/
        S1Hero.jsx
        Statement.jsx
        FeatureBlock.jsx
        S6CTA.jsx
        S7Form.jsx
    Services/
      index.jsx
      sections/
        S1Hero.jsx
        S2Services.jsx
    Products/
      index.jsx
      sections/
        S1Hero.jsx
        S2ProductList.jsx
        S3Philosophy.jsx
    ProductDetail/
      index.jsx
      sections/
        S1Hero.jsx / S2Overview.jsx / S3Features.jsx / S4HowItWorks.jsx / S4CTA.jsx / S5UseCases.jsx / S6Metrics.jsx
    CaseStudies/
      index.jsx
      sections/
        S1Hero.jsx / S2CaseStudies.jsx / StatementSection.jsx
    CaseStudyDetail/
      index.jsx
      sections/
        S1Hero.jsx / S2Metadata.jsx / S3Timeline.jsx / S4ClientSpeak.jsx / S5CTA.jsx
    Insights/
      index.jsx
      sections/
        S1Hero.jsx / S2EditorialFeed.jsx / S3SuccessStories.jsx / S4LifeAtThotnr.jsx / S5FeaturedArticle.jsx / StatementSection.jsx
    InsightDetail/
      index.jsx
      sections/
        S1Hero.jsx / S2Content.jsx
    Industry/
      index.jsx
      sections/
        S1Hero.jsx / S2Industries.jsx / S3HowWeWork.jsx / S4Impact.jsx
    Contact/
      index.jsx
      sections/
        S1Hero.jsx / S2Presence.jsx / S3ContactAction.jsx
    JoinUs/
      index.jsx
      sections/
        S1Hero.jsx / S2WhyJoinUs.jsx / S3OpenRoles.jsx / S4ApplyForm.jsx
    Clients/
      index.jsx
      sections/
        S1Hero.jsx / S2Clients.jsx
    Accelerators/
      index.jsx
      sections/
        S1Hero.jsx / S2Listing.jsx
    AcceleratorDetail/
      index.jsx
      sections/
        S1Hero.jsx / S2Description.jsx
  components/
    layout/
      Navbar.jsx
      Footer.jsx
      SubscribeSection.jsx
    ui/
      Button.jsx              ← broken, do not use in new sections
  data/
    caseStudies.js            ← slug-keyed array; CaseStudies + CaseStudyDetail
    insights.js               ← slug-keyed array; Insights + InsightDetail
    products.js               ← slug-keyed array; Products + ProductDetail
    accelerators.js           ← slug-keyed array; Accelerators + AcceleratorDetail
    services.js               ← slug-keyed; Services + ServicesDetail
  assets/
    images/
      clients/                ← client logo PNGs
    videos/
  hooks/
    useCounter.js             ← { count, increment, decrement, reset }
  utils/
    index.js                  ← cn() and formatDate()
  styles/
    typography.css            ← UNUSED — fully commented out, never import
  index.css                   ← design tokens + typography + Tailwind import
  App.jsx                     ← all routes + AnimatedRoutes + scroll-to-top
  main.jsx
```

**Adding a new page:**
1. `src/pages/PageName/index.jsx` — page assembler (imports Navbar, Footer, sections)
2. `src/pages/PageName/sections/S1Name.jsx` — one file per section, `S{N}` prefix
3. Wire the route in `App.jsx`

---

## TIA Page — Section IDs & Scroll Targets

The TIA page sections use these IDs for in-page scroll navigation:

| Section | ID | Scroll target from |
|---|---|---|
| S4 Framework | `tia-framework` | Hero "Explore the Framework" CTA |
| S5 Engagement | `tia-engagement` | Hero / tab pills "Delivery Model" |
| S6 Principles | `tia-principles` | — |
| S7 Industries | `tia-industries` | — |
| S8 Case Studies | `tia-case-studies` | — |
| S9 Ask TIA | `ask-tia` | Hero tab pills "Product →", AskTIA button |
| S10 FAQ | `tia-faq` | — |
| S11 Final CTA | `tia-final-cta` | — |
| S3 Pillars | `tia-pillars` | Hero tab pills "Discipline" |

`S9AskTIA.jsx` exports `AskTIAChat` as a named export — it is imported by `AskTIAModal.jsx` for the modal overlay. `S1Hero.jsx` and `S11FinalCTA.jsx` both receive `onAskTIA` prop to trigger the modal (managed in `TIA/index.jsx`).

---

## Content Data Files

### `src/data/caseStudies.js`
```js
{
  slug, coverImg, coverVideo, coverTagline, coverSubheadline,
  meta: { sector, company, service, offering },
  backdrop: { title, description },
  challenge: { title, description },
  solution: { title, description },
  outcome: { title, description },
  clientSpeak: { quote, name, role, company, image },
  cta: { headline, description, buttonText },
}
```

### `src/data/insights.js`
```js
{
  slug, coverImg, tagline, subheadline,
  authorName, authorRole, authorImage, publishDate,
  category: 'Vision Augmented' | 'Cognitive Augmented' | 'Architecture Augmented',
  contentBlocks: [{ type: 'intro' | 'paragraph' | 'heading' | 'bullets' | 'quote' | 'image_text', text, items? }],
}
```

### `src/data/products.js`
```js
{
  id, slug, name, domain, builtYear, tagline, description, motive, problemSolved,
  features: [{ icon, label, desc }],
  howItWorks: [{ step, title, desc }],
  useCases: [{ audience, title, desc }],
  metrics: [{ value, label, context }],
  stat: { number, label }, logo,
}
```

### `src/data/accelerators.js`
```js
{
  slug, label, title, category, icon, image, video,
  tagline, shortDescription, tags: string[],
  overview, challenge, solution,
  capabilities: [{ icon, title, description }],
}
```

---

## Navbar — Navigation Items

**Desktop (lg+):** capabilities (mega-menu) → applied intelligence → augmented insights → products → **TIA** (`/tia`) → about → contact → join us

**Mobile drawer:** applied intelligence → augmented insights → products → **TIA** (`/tia`) → services → industries → about → contact → join us

---

## PRD Workflow

When a PRD file is provided:
1. Read this CLAUDE.md first
2. Read the PRD
3. Use the section shell template; match the alternating bg pattern unless PRD specifies otherwise
4. Eyebrow labels: `text-label` + `color: 'var(--color-highlight)'` + `letterSpacing: '0.2em'`
5. File naming: `S{N}Name.jsx` for section files
6. Reuse existing components (Navbar, Footer, SubscribeSection) — never recreate them
7. Place complex data arrays at the top of the section file; use `src/data/` only if shared across pages
8. Add `useInView` + `animation-play-state` pattern for scroll animations; always include `prefers-reduced-motion` fallback
9. For new solid colors: define in `index.css` first, then use the variable
10. rgba() is fine for transparency effects — do not add to index.css

---

## Legacy Warnings

- **`Events.jsx`** — imported in `Home/index.jsx` but never rendered. Uses broken `.t-*` classes. Do not use or reference.
- **`.t-*` classes** (`t-label`, `t-body-lg`, `t-title-lg`, `t-headline-sm`) — from removed `typography.css`. Broken. Never use.
- **`typography.css`** — fully commented out. Never import.
- **`Button.jsx`** — references undefined CSS vars. Never use in new sections. Use inline button patterns instead.
- **Navbar.jsx / Footer.jsx** — reference undefined legacy CSS vars (`--color-border`, `--color-surface`, `--color-ink`, etc.). Do not copy these patterns into new files.
- **`SubscribeSection.jsx`** — uses `text-sm` (Tailwind font-size), which is a forbidden pattern. Do not copy this pattern into new sections.
