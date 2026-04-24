# CLAUDE.md — Thotnr Codebase Guide

## Tech Stack

- **React** (functional components only, hooks allowed)
- **Vite** — build tool (`vite.config.js`)
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin (no `tailwind.config.js`, config is in CSS)
- **Lucide React** — icon library (`lucide-react`)
- **Google Fonts** — Sora, Source Serif 4, IBM Plex Mono (imported in `index.css`)

---

## Project Structure

```
src/
  pages/
    Home/
      index.jsx          ← page assembler (imports all sections + Navbar + Footer)
      sections/          ← each section = one file
  components/
    layout/
      Navbar.jsx
      Footer.jsx
    ui/
      Button.jsx
  assets/
    images/
    icons/
  styles/
    typography.css       ← currently unused (all commented out)
  hooks/
  services/
  utils/
    index.js             ← cn() helper, formatDate()
  index.css              ← design tokens + typography classes + Tailwind import
  App.jsx
  main.jsx
```

**Adding a new page:**
1. Create `src/pages/PageName/index.jsx` — page assembler
2. Create `src/pages/PageName/sections/SectionName.jsx` for each section
3. Navbar and Footer go inside the page assembler, same as Home
4. Wire up routing in `App.jsx` when React Router is added

---

## Design Tokens

All tokens live in `src/index.css` under `:root`. Always reference them via CSS variables.

### Colors

```css
/* Backgrounds */
--color-primary:   #F1FAEE   /* off-white — light section bg */
--color-secondary: #1D3557   /* dark navy — dark section bg  */
--color-tertiary:  #457B9D   /* medium steel blue             */

/* Accents */
--color-accent:    #A8DADC   /* teal — used very sparingly    */
--color-highlight: #E63946   /* red — eyebrow labels ONLY     */

/* Text */
--color-text-primary:   #0B0F19  /* near-black headings         */
--color-text-secondary: #2B2D42  /* dark slate body copy        */
--color-text-tertiary:  #6C757D  /* muted supporting text       */
--color-text-white:     #ffffff
```

### Fonts

```css
--font-heading: 'Sora', sans-serif          /* h1–h4 automatically use this */
--font-body:    'Source Serif 4', serif     /* body default                  */
--font-mono:    'IBM Plex Mono', monospace  /* labels, captions              */
--font-accent:  'Playfair Display', serif   /* .text-display only            */
```

---

## Typography Classes

Defined in `src/index.css`. Use these class names directly.

| Class | Size | Font | Notes |
|---|---|---|---|
| `.text-display` | 72px | Playfair Display | Hero display only, italic accent common |
| `.text-h1` | 40px | Sora | Section headline |
| `.text-h2` | 32px | Sora | Sub-headline |
| `.text-h3` | 24px | Sora | Card title |
| `.text-h4` | 18px | Sora | Small heading |
| `.text-body-lg` | 18px | Source Serif 4 | Lead paragraph, lh 1.7 |
| `.text-body` | 16px | Source Serif 4 | Standard body, lh 1.75 |
| `.text-body-sm` | 14px | Source Serif 4 | Small body |
| `.text-label` | 12px | IBM Plex Mono | Eyebrow labels, uppercase, 0.08em tracking |
| `.text-caption` | 12px | IBM Plex Mono | Captions |

**There are also `.t-*` classes referenced in some older sections** (ProcessTimeline, Events, Navbar) — these are all commented out in `typography.css`. When building new sections, always use `.text-*` classes from `index.css`, not `.t-*`.

---

## Section Background Pattern

Sections alternate light → dark → light. Never break this rhythm.

| Background | When to use |
|---|---|
| `bg-[var(--color-primary)]` | Light sections (default for most content) |
| `style={{ background: 'var(--color-secondary)' }}` | Dark navy sections |
| `bg-white` | Occasional pure white sections (Events) |
| `style={{ background: 'var(--color-tertiary)' }}` | Accent blue — used once (Subscribe) |

---

## Color Application Rules

**The most important pattern in this codebase:**

1. `--color-highlight` (red) → **eyebrow/category labels only.** Never use as a button bg or section bg.
2. `--color-accent` (teal) → sparingly: italic text in hero, hover states, checkbox accent.
3. On **dark sections** (secondary bg): headings `text-white`, body `text-white/70`
4. On **light sections** (primary bg): headings `text-[var(--color-text-primary)]`, body `text-[var(--color-text-secondary)]`
5. Use `style={{ color: 'var(--color-X)' }}` inline for CSS var colors — not Tailwind color utilities like `text-blue-900`.

### Standard Eyebrow + Headline pattern (every section uses this)

```jsx
<p className="text-label text-[var(--color-highlight)]">Category Label</p>
<h2 className="text-h1 text-[var(--color-text-primary)]">Section Heading</h2>
<p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">Supporting description.</p>
```

On dark sections, replace text colors:
```jsx
<p className="text-label text-[var(--color-highlight)]">Category Label</p>
<h2 className="text-h1 text-white">Section Heading</h2>
<p className="text-body text-white/70 mt-2 max-w-2xl">Supporting description.</p>
```

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

---

## Hover Effects

Use `onMouseEnter` / `onMouseLeave` for hover when CSS variables are involved — Tailwind's `hover:` can't reference CSS vars.

```jsx
<button
  style={{ color: 'var(--color-text-primary)', background: 'transparent' }}
  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-text-primary)'; e.currentTarget.style.color = '#fff' }}
  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-primary)' }}
>
  Button
</button>
```

For simple class-only hover (no CSS vars), Tailwind `hover:` is fine.

---

## Button Patterns

Two approaches used:

**Inline (most sections):**
- Primary (dark bg, white text, inverts on hover)
- Secondary (ghost with border, fills on hover)
- Rounded: `rounded-full` or `rounded-lg`
- Size: `px-6 py-3 text-sm font-medium`

**Button component** (`src/components/ui/Button.jsx`) — has `primary`, `secondary`, `ghost` variants. Use this for new pages.

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

For keyframe animations, embed `<style>` tags inside the component. Use index-based class names for per-card animations.

```jsx
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
```

---

## Utility Helpers

`src/utils/index.js`:
- `cn(...classes)` — merge Tailwind class strings conditionally
- `formatDate(date, locale?)` — Intl date formatter

```jsx
import { cn } from '../../utils'
className={cn('base-class', condition && 'conditional-class')}
```

---

## Grid Layouts

Common grids used across sections:

```jsx
{/* 2-column */}
<div className="grid md:grid-cols-2 gap-12 items-center">

{/* 3-column cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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

## PRD Workflow

When a PRD file is provided:
1. Read this CLAUDE.md first to understand all patterns
2. Read the PRD for page/section requirements
3. Build using the section shell template above
4. Match the alternating bg pattern unless the PRD specifies otherwise
5. All eyebrow labels use `text-label text-[var(--color-highlight)]`
6. Reuse existing components (Navbar, Footer, Button) — don't recreate them
