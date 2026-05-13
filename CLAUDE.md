# CLAUDE.md — Thotnr Codebase Guide

## Non-negotiable Rules

These four rules apply to every file touched, every section written, every component created. No exceptions.

### 1. Tailwind for layout, CSS variables for everything else

Use Tailwind classes for structural concerns: `flex`, `grid`, `gap-*`, `p-*`, `m-*`, `rounded-*`, `w-*`, `h-*`, `items-*`, `justify-*`, `overflow-*`, `z-*`, `fixed`, `absolute`, `relative`, `hidden`, `block`, etc.

Never use Tailwind for colors or font sizes. These must come from CSS variables.

### 2. All colors from `index.css` CSS variables only

Never write a hardcoded color value (`#E63946`, `rgba(...)`, `rgb(...)`, named colors like `blue-900`) anywhere in component files. Every color must reference a CSS variable defined in `src/index.css`.

For Tailwind utilities that support `[var(...)]` syntax:
```jsx
className="bg-[var(--color-primary)] text-[var(--color-text-primary)]"
```

For inline styles (hover, backgrounds that Tailwind can't reference cleanly):
```jsx
style={{ background: 'var(--color-secondary)', color: 'var(--color-text-white)' }}
```

If a color you need doesn't have a variable, **define it in `index.css` first**, then use the variable.

### 3. All font sizes and font families from `index.css` typography classes only

Never use Tailwind's font-size utilities: `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, etc. These are forbidden.

Always use the typography classes defined in `index.css`:

| Class | Size | Font |
|---|---|---|
| `.text-display` | 72px | Playfair Display, weight 600, letter-spacing -0.02em |
| `.text-h1` | 40px | Sora (via base styles) |
| `.text-h2` | 32px | Sora (via base styles) |
| `.text-h3` | 24px | Sora (via base styles) |
| `.text-h4` | 18px | Sora (via base styles) |
| `.text-body-lg` | 18px, line-height 1.7 | Source Serif 4 |
| `.text-body` | 16px, line-height 1.75 | Source Serif 4 |
| `.text-body-sm` | 14px | Source Serif 4 |
| `.text-label` | 12px, uppercase, letter-spacing 0.08em | IBM Plex Mono |
| `.text-caption` | 12px | IBM Plex Mono |

Font families are applied automatically: `h1–h4` elements inherit `--font-heading` (Sora) via `index.css` base styles. `body` inherits `--font-body`. Only set `font-family` explicitly in inline styles when overriding (e.g. hero display text with `--font-accent`).

### 4. Every section must be responsive for all desktop sizes

Write responsive code for small desktop (md), medium desktop (lg), and large desktop (xl/2xl). Every section must look correct at 1024px, 1280px, 1440px, and 1920px. Always test grid columns and font sizing at each breakpoint.

---

## Section Padding and Navbar Alignment

**Every section uses exactly this padding:**
```jsx
<section className="py-16 px-6 md:px-10 lg:px-16 ...">
  <div className="max-w-7xl mx-auto">
    ...
  </div>
</section>
```

The Navbar inner container uses `max-w-7xl mx-auto px-6 md:px-10 lg:px-16`. Matching this in every section ensures section content left- and right-edges are always pixel-aligned with the navbar links at every desktop breakpoint.

**Never change these values.** Do not add extra wrapper padding. Do not use `container` or `max-w-screen-xl` — always `max-w-7xl mx-auto`.

---

## Tech Stack

- **React 19.2.5** — functional components only, hooks allowed
- **Vite 8.0.9** — build tool (`vite.config.js`)
- **Tailwind CSS v4.2.3** — via `@tailwindcss/vite` plugin (no `tailwind.config.js`; config lives in CSS)
- **React Router v7.14.2** — `BrowserRouter` + `Routes` wired in `App.jsx`; page transitions via `pageFadeIn` (400ms)
- **Lucide React 1.8.0** — icon library (`lucide-react`)
- **PostCSS 8.5.10** + Autoprefixer
- **Google Fonts** — Sora, Source Serif 4, IBM Plex Mono, Playfair Display (imported in `index.css`)

---

## Project Structure

```
src/
  pages/
    Home/
      index.jsx                   ← page assembler
      sections/
        Hero.jsx
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
        Events.jsx                ← legacy file; imported but NOT rendered in Home/index.jsx
        Escalates.jsx
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
        S1Hero.jsx
        S2Overview.jsx
        S3Features.jsx
        S4HowItWorks.jsx
        S4CTA.jsx
        S5UseCases.jsx
        S6Metrics.jsx
    CaseStudies/
      index.jsx
      sections/
        S1Hero.jsx
        S2CaseStudies.jsx
        StatementSection.jsx
    CaseStudyDetail/
      index.jsx
      sections/
        S1Hero.jsx
        S2Metadata.jsx
        S3Timeline.jsx
        S4ClientSpeak.jsx
        S5CTA.jsx
    Insights/
      index.jsx
      sections/
        S1Hero.jsx
        S2EditorialFeed.jsx
        S3SuccessStories.jsx
        S4LifeAtThotnr.jsx
        S5FeaturedArticle.jsx
        StatementSection.jsx
    InsightDetail/
      index.jsx
      sections/
        S1Hero.jsx
        S2Content.jsx
    Industry/
      index.jsx
      sections/
        S1Hero.jsx
        S2Industries.jsx
        S3HowWeWork.jsx
        S4Impact.jsx
    Contact/
      index.jsx
      sections/
        S1Hero.jsx
        S2Presence.jsx
        S3ContactAction.jsx
    JoinUs/
      index.jsx
      sections/
        S1Hero.jsx
        S2WhyJoinUs.jsx
        S3OpenRoles.jsx
        S4ApplyForm.jsx
    Clients/
      index.jsx
      sections/
        S1Hero.jsx
        S2Clients.jsx
    Accelerators/
      index.jsx
      sections/
        S1Hero.jsx
        S2Listing.jsx
    AcceleratorDetail/
      index.jsx
      sections/
        S1Hero.jsx
        S2Description.jsx
  components/
    layout/
      Navbar.jsx
      Footer.jsx
      SubscribeSection.jsx        ← shared across Home, About, Insights
    ui/
      Button.jsx
  data/
    caseStudies.js                ← slug-keyed; used by CaseStudies + CaseStudyDetail
    insights.js                   ← slug-keyed; used by Insights + InsightDetail
    products.js                   ← slug-keyed; used by Products + ProductDetail
    accelerators.js               ← slug-keyed; used by Accelerators + AcceleratorDetail
    services.js                   ← slug-keyed; used by Services + ServicesDetail
  assets/
    images/
    icons/
    videos/
  hooks/
    useCounter.js                 ← { count, increment, decrement, reset }
  utils/
    index.js                      ← cn() and formatDate()
  styles/
    typography.css                ← UNUSED (all commented out — do not import)
  index.css                       ← design tokens + typography classes + Tailwind import
  App.jsx                         ← all routes defined here; scroll-to-top on navigation
  main.jsx
```

**Adding a new page:**
1. Create `src/pages/PageName/index.jsx` — page assembler
2. Create `src/pages/PageName/sections/S1Name.jsx` for each section (use S{N} prefix)
3. Navbar, Footer, and SubscribeSection go inside the page assembler
4. Wire up the route in `App.jsx`

---

## Routes (App.jsx)

| Path | Component |
|---|---|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/join-us` | JoinUs |
| `/case-studies` | CaseStudies |
| `/case-studies/:slug` | CaseStudyDetail |
| `/ai` | AI |
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

Detail pages (`CaseStudyDetail`, `InsightDetail`, `ProductDetail`, `AcceleratorDetail`) use `useParams()` to grab the slug, then look it up in the respective data file. If no match, they `<Navigate>` back to the listing page.

**Page transitions:** All routes are wrapped in a `<div key={location.pathname} className="page-enter">` with a `pageFadeIn` keyframe (400ms ease-out) defined inline in App.jsx. The layout effect also calls `window.scrollTo({ top: 0, behavior: 'instant' })` on every route change.

---

## Design Tokens (`src/index.css`)

All tokens live in `src/index.css` under `:root`. Every color and font reference in component files must go through these variables.

### Colors

```css
/* Backgrounds */
--color-primary:   #F1FAEE   /* off-white — light section bg */
--color-secondary: #1D3557   /* dark navy — dark section bg  */
--color-tertiary:  #457B9D   /* medium steel blue (SubscribeSection only) */

/* Accents */
--color-accent:    #A8DADC   /* teal — italic hero text, hover states */
--color-highlight: #E63946   /* red — eyebrow labels ONLY */

/* Text */
--color-text-primary:   #0B0F19  /* near-black headings */
--color-text-secondary: #2B2D42  /* dark slate body copy */
--color-text-tertiary:  #6C757D  /* muted supporting text */
--color-text-white:     #ffffff

/* Overlay surfaces (use on --color-secondary / --color-tertiary backgrounds) */
--color-overlay-card:   rgba(255, 255, 255, 0.08)  /* card bg on dark sections */
--color-overlay-border: rgba(255, 255, 255, 0.15)  /* borders on dark sections */
--color-overlay-metric: rgba(0, 0, 0, 0.15)        /* dark metric panels */
--color-icon-bg:        rgba(168, 218, 220, 0.18)  /* teal-tinted icon bg */
```

**Adding a new color:** define it in `index.css` under `:root`, then use `var(--color-name)` in the component. Never skip this step.

### Undefined legacy variables (do not use in new sections)

Navbar.jsx, Footer.jsx, Button.jsx, and Events.jsx reference variables that are **not** defined in `index.css`:
`--color-border`, `--color-surface`, `--color-ink`, `--color-ink-rgb`, `--color-muted`, `--color-muted-dk`, `--color-slate`, `--color-slate-dark`, `--color-accent-dark`, `--color-accent-soft`, `--color-surface-soft`, `--color-highlight-rgb`

New sections must never use these. They exist only in legacy files.

### Fonts

```css
--font-heading: 'Sora', sans-serif          /* h1–h4 via base styles */
--font-body:    'Source Serif 4', serif     /* body default */
--font-mono:    'IBM Plex Mono', monospace  /* labels, captions */
--font-accent:  'Playfair Display', serif   /* .text-display only */
```

---

## Section Background Pattern

Sections alternate light → dark → light. Never break this rhythm within a page.

| Background | Tailwind / inline |
|---|---|
| Light (default) | `bg-[var(--color-primary)]` |
| Dark navy | `style={{ background: 'var(--color-secondary)' }}` |
| Pure white (rare) | `bg-white` |
| Steel blue (SubscribeSection only) | `style={{ background: 'var(--color-tertiary)' }}` |

---

## Color Application Rules

1. `--color-highlight` (red) → **eyebrow/category labels only.** Never use as button bg, card bg, or section bg.
2. `--color-accent` (teal) → sparingly: italic hero text, hover states, divider accents.
3. `--color-overlay-card` / `--color-overlay-border` → card and border treatments on dark navy or steel blue backgrounds.
4. On **dark sections**: headings `text-white`, body `text-white/70`
5. On **light sections**: headings `text-[var(--color-text-primary)]`, body `text-[var(--color-text-secondary)]`
6. Tailwind `/opacity` suffix (`text-white/70`) is fine for opacity-modified white — no CSS var needed.

---

## Section Shell Template

Every section must follow this exact structure:

```jsx
function SectionName() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-h4 text-[var(--color-highlight)]">Eyebrow Label</p>
          <h2 className="text-h1 text-[var(--color-text-primary)]">Section Heading</h2>
          <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">
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

**Standard spacing reference:**
- Section padding: `py-16 px-6 md:px-10 lg:px-16` — fixed, never change
- Header margin bottom: `mb-8` (use `mb-6` for tighter sections)
- Max width: `max-w-7xl mx-auto` always (use `max-w-6xl` for narrower centered text blocks)

### Eyebrow + Headline pattern

```jsx
{/* Light section */}
<p className="text-h4 text-[var(--color-highlight)]">Category Label</p>
<h2 className="text-h1 text-[var(--color-text-primary)]">Section Heading</h2>
<p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">Description.</p>

{/* Dark section */}
<p className="text-h4 text-[var(--color-highlight)]">Category Label</p>
<h2 className="text-h1 text-white">Section Heading</h2>
<p className="text-body text-white/70 mt-2 max-w-2xl">Description.</p>
```

Always use `text-h4` for eyebrows in new sections. Do not use `text-label` or `text-h3` for eyebrow labels.

---

## Hero Section Pattern

Hero sections are full-viewport with a video or image background:

```jsx
<section style={{ height: '100vh', minHeight: '100dvh', position: 'relative', overflow: 'hidden' }}>
  {/* Background video */}
  <video
    autoPlay muted loop playsInline
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
             objectFit: 'cover', objectPosition: 'center',
             filter: 'brightness(0.72) contrast(1.05)' }}
  />

  {/* Gradient overlay for left-side content readability */}
  <div style={{ position: 'absolute', inset: 0,
    background: 'linear-gradient(to right, rgba(29,53,87,0.85) 0%, rgba(29,53,87,0.4) 60%, transparent 100%)' }} />

  {/* Content */}
  <div className="relative z-10 h-full flex items-end px-6 md:px-10 lg:px-16 pb-20">
    <div className="max-w-7xl mx-auto w-full">
      ...
    </div>
  </div>
</section>
```

**Home Hero cycling:** `Hero.jsx` cycles through 3 video sources using `localStorage` to persist the current index across refreshes.

---

## Hover Effects

Use `onMouseEnter` / `onMouseLeave` when CSS variables are involved — Tailwind's `hover:` prefix cannot reference CSS vars.

```jsx
<a
  style={{ color: 'var(--color-text-primary)' }}
  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-highlight)' }}
  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)' }}
>
  Link
</a>
```

For hover that only toggles Tailwind classes (no CSS vars), Tailwind `hover:` is fine.

---

## Button Patterns

**Button component** (`src/components/ui/Button.jsx`) — has `primary`, `secondary`, `ghost` variants. Note: Button.jsx uses legacy undefined CSS vars (`bg-accent`, `border-accent`, `--color-accent-dark`, `--color-border`) which may render without full styling. For new work, prefer the inline button pattern below.

```jsx
import Button from '../../components/ui/Button'
<Button variant="primary">Get Started</Button>
```

**Inline button pattern** (preferred for full design-system compliance):
```jsx
<button
  className="px-6 py-3 rounded-lg font-semibold"
  style={{ background: 'var(--color-secondary)', color: 'var(--color-text-white)' }}
  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-highlight)' }}
  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-secondary)' }}
>
  Label
</button>
```

Note: button text uses `font-semibold` (Tailwind weight utility) — this is correct. Only font-size utilities (`text-sm`, `text-lg`, etc.) are forbidden.

---

## Grid Layouts

Common grids — always write mobile-first, scaling up through desktop breakpoints:

```jsx
{/* 2-column — stacks on tablet, side-by-side on desktop */}
<div className="grid md:grid-cols-2 gap-12 items-center">

{/* 3-column cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{/* 4-column team grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">

{/* 2-column left-content / right-grid */}
<div className="grid lg:grid-cols-2 gap-12 items-center">
```

For large desktop screens (1440px+), always verify that the grid does not stretch awkwardly. Add `xl:grid-cols-*` variants when the default grid needs adjusting at larger viewports.

---

## Data + Component Pattern

Define data arrays at the top of the file, then map over them. Sub-components live in the same file.

```jsx
const items = [
  { id: 1, title: '...', desc: '...' },
]

function ItemCard({ title, desc }) {
  return <div>...</div>
}

function SectionName() {
  return (
    <section ...>
      {items.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </section>
  )
}

export default SectionName
```

---

## Animations

Embed `<style>` tags inside the component for keyframe animations. Use index-based class names to avoid collisions across instances.

```jsx
function Card({ index }) {
  return (
    <>
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-${index} { animation: cardIn 0.6s ease ${index * 0.1}s both; }
      `}</style>
      <div className={`card-${index}`}>...</div>
    </>
  )
}
```

For entrance animations on hero elements use `cubic-bezier(0.16, 1, 0.3, 1)` (expo out) as the easing. For card hovers use `transition-all duration-300`.

---

## Images & Videos

Place images in `src/assets/images/` and videos in `src/assets/videos/`. Import and use directly:

```jsx
import myImg from '../../../assets/images/my-image.jpg'
import myVideo from '../../../assets/videos/my-video.mp4'

<img src={myImg} alt="..." className="w-full h-[320px] object-cover rounded-xl" />
<video src={myVideo} autoPlay muted loop playsInline style={{ objectFit: 'cover' }} />
```

Use `aspectRatio: '16/10'` inline style (not Tailwind aspect-ratio) when a fixed ratio is needed.

---

## Content Data Files

Complex page content lives in `src/data/`:

### `src/data/caseStudies.js` — exported as `caseStudies` array
```js
{
  slug, coverImg, coverVideo,
  coverTagline, coverSubheadline,
  meta: { sector, company, service, offering },
  backdrop: { title, description },
  challenge: { title, description },
  solution: { title, description },
  outcome: { title, description },
  clientSpeak: { quote, name, role, company, image },
  cta: { headline, description, buttonText },
}
```

### `src/data/insights.js` — exported as `insights` array
```js
{
  slug, coverImg,
  tagline, subheadline,
  authorName, authorRole, authorImage,
  publishDate,
  category: 'Vision Augmented' | 'Cognitive Augmented' | 'Architecture Augmented',
  contentBlocks: [
    { type: 'intro' | 'paragraph' | 'heading' | 'bullets' | 'quote' | 'image_text', text, items? }
  ],
}
```

### `src/data/products.js` — exported as `products` array
```js
{
  id, slug, name, domain, builtYear,
  tagline, description, motive, problemSolved,
  features: [{ icon, label, desc }],
  howItWorks: [{ step, title, desc }],
  useCases: [{ audience, title, desc }],
  metrics: [{ value, label, context }],
  stat: { number, label },
  logo,
}
```

### `src/data/accelerators.js` — exported as `accelerators` array
```js
{
  slug, label, title, category, icon,
  image, video,
  tagline, shortDescription,
  tags: string[],
  overview, challenge, solution,
  capabilities: [{ icon, title, description }],
}
```

---

## Reusable Components

| Component | Location | Purpose |
|---|---|---|
| `Navbar` | `components/layout/Navbar.jsx` | Fixed nav with mega menus and scroll-aware styling |
| `Footer` | `components/layout/Footer.jsx` | Simple footer with links and social icons |
| `SubscribeSection` | `components/layout/SubscribeSection.jsx` | Email subscribe strip; bg uses `--color-tertiary` |
| `Button` | `components/ui/Button.jsx` | Primary / secondary / ghost variants (see Button Patterns for caveats) |

Never recreate these. Always import and reuse.

**Note:** `FeatureBlock.jsx` lives at `pages/AI/sections/FeatureBlock.jsx` — it is a section file, not a shared component. Do not import it from outside the AI page.

---

## Utility Helpers

`src/utils/index.js`:
- `cn(...classes)` — merge Tailwind class strings, filtering falsy values
- `formatDate(date, locale?)` — Intl date formatter

```jsx
import { cn } from '../../utils'
className={cn('base-class', condition && 'conditional-class')}
```

---

## Accent Underline Pattern

Used in About S2 to decorate headings:

```jsx
<div
  className="mt-3 mb-5 h-[3px] w-16 rounded-full"
  style={{ background: 'var(--color-highlight)' }}
/>
```

---

## PRD Workflow

When a PRD file is provided:
1. Read this CLAUDE.md first — all four non-negotiable rules apply
2. Read the PRD for page/section requirements
3. Build using the section shell template above
4. Match the alternating bg pattern unless the PRD specifies otherwise
5. All eyebrow labels use `text-h4 text-[var(--color-highlight)]`
6. Use `S{N}Name.jsx` naming for all section files
7. Reuse existing components (Navbar, Footer, SubscribeSection) — never recreate them
8. Store complex data arrays in `src/data/` if used by multiple sections or detail pages
9. Before writing any color value, check it exists in `index.css`; if not, add it there first
10. Before writing any font size, confirm the `index.css` typography class exists; use it, not Tailwind

---

## Legacy Warnings

- **`Events.jsx`** — imported in `Home/index.jsx` but never rendered. Uses legacy `.t-*` classes. Do not use or reference it in new work.
- **`.t-*` classes** (`t-label`, `t-body-lg`, `t-title-lg`, `t-headline-sm`) exist in Events.jsx and Navbar.jsx from the removed `typography.css`. These are broken. Never use them.
- **`typography.css`** is fully commented out and must never be imported.
- **`Button.jsx`** uses undefined CSS vars (`--color-accent-dark`, `--color-border`, `bg-accent`, `border-accent`). Use the inline button pattern for full design-system compliance in new sections.
- Navbar.jsx and Footer.jsx use undefined CSS vars (`--color-border`, `--color-surface`, etc.) — do not copy these patterns into new files.
