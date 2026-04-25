# CLAUDE.md — Thotnr Codebase Guide

## Tech Stack

- **React 19** — functional components only, hooks allowed
- **Vite 8** — build tool (`vite.config.js`)
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin (no `tailwind.config.js`; config lives in CSS)
- **React Router v7** — `BrowserRouter` + `Routes` wired in `App.jsx`
- **Lucide React** — icon library (`lucide-react`)
- **Google Fonts** — Sora, Source Serif 4, IBM Plex Mono (imported in `index.css`)

---

## Project Structure

```
src/
  pages/
    Home/
      index.jsx              ← page assembler (imports all sections + Navbar + Footer)
      sections/              ← one file per section
    About/
      index.jsx
      sections/
        S1Hero.jsx           ← sections use S{N}Name prefix for ordering
        S2CoreContent.jsx
        S3Team.jsx
    AI/
      index.jsx
      sections/
    CaseStudies/
      index.jsx
      sections/
    CaseStudyDetail/
      index.jsx
      sections/
    Insights/
      index.jsx
      sections/
    InsightDetail/
      index.jsx
      sections/
    Contact/
      index.jsx
    JoinUs/
      index.jsx
  components/
    layout/
      Navbar.jsx
      Footer.jsx
      SubscribeSection.jsx   ← shared across Home, About, Insights
    ui/
      Button.jsx
  data/
    caseStudies.js           ← all case study content (slug-keyed, used by CaseStudyDetail)
    insights.js              ← all insight article content (slug-keyed, used by InsightDetail)
  assets/
    images/
    icons/
  hooks/
    useCounter.js
  utils/
    index.js                 ← cn() and formatDate()
  styles/
    typography.css           ← UNUSED (all commented out — do not import)
  index.css                  ← design tokens + typography classes + Tailwind import
  App.jsx                    ← all routes defined here
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

Detail pages (`CaseStudyDetail`, `InsightDetail`) use `useParams()` to grab the slug, then look it up in the respective data file. If no match, they `<Navigate>` back to the listing page.

---

## Design Tokens

All tokens live in `src/index.css` under `:root`. Always reference them via CSS variables.

### Colors

```css
/* Backgrounds */
--color-primary:   #F1FAEE   /* off-white — light section bg */
--color-secondary: #1D3557   /* dark navy — dark section bg  */
--color-tertiary:  #457B9D   /* medium steel blue (SubscribeSection) */

/* Accents */
--color-accent:    #A8DADC   /* teal — italic hero text, hover states, checkboxes */
--color-highlight: #E63946   /* red — eyebrow labels ONLY */

/* Text */
--color-text-primary:   #0B0F19  /* near-black headings */
--color-text-secondary: #2B2D42  /* dark slate body copy */
--color-text-tertiary:  #6C757D  /* muted supporting text */
--color-text-white:     #ffffff
```

### Undefined variables (legacy — do not use in new sections)

Navbar.jsx, Footer.jsx, and Events.jsx reference CSS variables that are **not defined** in `index.css`:
`--color-border`, `--color-surface`, `--color-ink`, `--color-ink-rgb`, `--color-muted`, `--color-muted-dk`, `--color-slate`, `--color-slate-dark`, `--color-accent-dark`, `--color-accent-soft`, `--color-surface-soft`, `--color-highlight-rgb`

New sections must never use these. Stick to the defined tokens above.

### Fonts

```css
--font-heading: 'Sora', sans-serif          /* h1–h4 automatically use this */
--font-body:    'Source Serif 4', serif     /* body default */
--font-mono:    'IBM Plex Mono', monospace  /* labels, captions */
--font-accent:  'Playfair Display', serif   /* .text-display only */
```

---

## Typography Classes

Defined in `src/index.css`. Use these class names directly — never recreate them inline.

| Class | Size | Font | Notes |
|---|---|---|---|
| `.text-display` | 72px | Playfair Display | Hero display, italic accent common |
| `.text-h1` | 40px | Sora | Section headline |
| `.text-h2` | 32px | Sora | Sub-headline |
| `.text-h3` | 24px | Sora | Card title / eyebrow (some sections use h3 for eyebrows) |
| `.text-h4` | 18px | Sora | Small heading |
| `.text-body-lg` | 18px | Source Serif 4 | Lead paragraph, lh 1.7 |
| `.text-body` | 16px | Source Serif 4 | Standard body, lh 1.75 |
| `.text-body-sm` | 14px | Source Serif 4 | Small body |
| `.text-label` | 12px | IBM Plex Mono | Eyebrow labels, uppercase, 0.08em tracking |
| `.text-caption` | 12px | IBM Plex Mono | Captions |

**Legacy warning:** Events.jsx and Navbar.jsx still use `.t-*` class names (`t-label`, `t-body-lg`, `t-title-lg`, `t-headline-sm`) from the commented-out `typography.css`. These are broken. **New sections must never use `.t-*` classes** — always use `.text-*`.

---

## Section Background Pattern

Sections alternate light → dark → light. Never break this rhythm within a page.

| Background | When to use |
|---|---|
| `bg-[var(--color-primary)]` | Light sections (default for most content) |
| `style={{ background: 'var(--color-secondary)' }}` | Dark navy sections |
| `bg-white` | Occasional pure white sections (e.g. Stats Strip in About, Events in Home) |
| `style={{ background: 'var(--color-tertiary)' }}` | Steel blue — SubscribeSection only |

---

## Color Application Rules

1. `--color-highlight` (red) → **eyebrow/category labels only.** Never use as a button bg, card bg, or section bg.
2. `--color-accent` (teal) → sparingly: italic hero text, hover states, checkbox accent, divider accents.
3. On **dark sections** (secondary bg): headings `text-white`, body `text-white/70`
4. On **light sections** (primary bg): headings `text-[var(--color-text-primary)]`, body `text-[var(--color-text-secondary)]`
5. Use `style={{ color: 'var(--color-X)' }}` inline for CSS var colors — Tailwind utilities like `text-blue-900` cannot reference them.

### Standard Eyebrow + Headline pattern (used in every section)

```jsx
/* Light section */
<p className="text-label text-[var(--color-highlight)]">Category Label</p>
<h2 className="text-h1 text-[var(--color-text-primary)]">Section Heading</h2>
<p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">Description.</p>

/* Dark section */
<p className="text-label text-[var(--color-highlight)]">Category Label</p>
<h2 className="text-h1 text-white">Section Heading</h2>
<p className="text-body text-white/70 mt-2 max-w-2xl">Description.</p>
```

Some existing sections use `text-h3` for eyebrow labels instead of `text-label` — both patterns exist in the codebase. Prefer `text-label` for new sections.

---

## Section Shell Template

Every section uses this structure:

```jsx
function SectionName() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-label text-[var(--color-highlight)]">Eyebrow</p>
          <h2 className="text-h1 text-[var(--color-text-primary)]">Heading</h2>
          <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">Description.</p>
        </div>

        {/* Content */}

      </div>
    </section>
  )
}

export default SectionName
```

Standard spacing:
- Section padding: `py-16 px-6 md:px-10 lg:px-16`
- Header margin bottom: `mb-12` (or `mb-8` for tighter sections)
- Max width: `max-w-7xl mx-auto` (use `max-w-6xl` for narrower content)

For dark sections, swap `bg-[var(--color-primary)]` for `style={{ background: 'var(--color-secondary)' }}`.

---

## Hover Effects

Use `onMouseEnter` / `onMouseLeave` when CSS variables are involved — Tailwind's `hover:` cannot reference them.

```jsx
<a
  style={{ color: 'var(--color-text-primary)' }}
  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-highlight)' }}
  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)' }}
>
  Link
</a>
```

For class-only hover (no CSS vars involved), Tailwind `hover:` is fine.

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

For keyframe animations, embed `<style>` tags inside the component. Use index-based class names for per-card animations to avoid collisions.

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

---

## Button Patterns

**Button component** (`src/components/ui/Button.jsx`) — has `primary`, `secondary`, `ghost` variants. Use for new pages.

```jsx
import Button from '../../components/ui/Button'
<Button variant="primary">Get Started</Button>
```

**Inline buttons** (existing pattern in many sections):
```jsx
<button
  className="px-6 py-3 rounded-lg text-sm font-semibold"
  style={{ background: 'var(--color-secondary)', color: '#fff' }}
  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-highlight)' }}
  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-secondary)' }}
>
  Label
</button>
```

---

## Grid Layouts

Common grids used across sections:

```jsx
{/* 2-column */}
<div className="grid md:grid-cols-2 gap-12 items-center">

{/* 3-column cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{/* 4-column team grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">

{/* 2-column left-content / right-grid */}
<div className="grid lg:grid-cols-2 gap-12 items-center">
```

---

## Images

Place images in `src/assets/images/`. Import and use directly:

```jsx
import myImg from '../../../assets/images/my-image.jpg'
<img src={myImg} alt="..." className="w-full h-[320px] object-cover rounded-xl" />
```

---

## Content Data Files

Complex page content lives in `src/data/`:

### `src/data/caseStudies.js`
Each entry: `{ slug, coverImg, coverTagline, coverSubheadline, meta, challenge, solution, outcome, clientSpeak, cta }`

### `src/data/insights.js`
Each entry: `{ slug, coverImg, tagline, subheadline, authorName, authorRole, authorImage, publishDate, contentBlocks[] }`

Content blocks have types: `'intro'`, `'paragraph'`, `'heading'`, `'bullets'`, `'quote'`, `'image_text'`

---

## Reusable Components

| Component | Location | Purpose |
|---|---|---|
| `Navbar` | `components/layout/Navbar.jsx` | Fixed nav with mega menus and scroll-aware styling |
| `Footer` | `components/layout/Footer.jsx` | Simple footer with links and social icons |
| `SubscribeSection` | `components/layout/SubscribeSection.jsx` | Email subscribe strip; bg uses `--color-tertiary` |
| `Button` | `components/ui/Button.jsx` | Primary / secondary / ghost variants |
| `FeatureBlock` | `pages/AI/sections/FeatureBlock.jsx` | Reusable 2-col image+text block with dark/light prop |

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
1. Read this CLAUDE.md first for all patterns
2. Read the PRD for page/section requirements
3. Build using the section shell template above
4. Match the alternating bg pattern unless the PRD specifies otherwise
5. All eyebrow labels use `text-label text-[var(--color-highlight)]`
6. Use S{N}Name.jsx naming for all section files
7. Reuse existing components (Navbar, Footer, SubscribeSection, Button) — never recreate them
8. Store any complex data arrays in `src/data/` if they'll be used by multiple sections or detail pages
