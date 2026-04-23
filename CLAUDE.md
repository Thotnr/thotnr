# CLAUDE.md — Thotnr

## What this project is

Marketing landing page for **Thotnr**, an AI-first technology consulting firm. Currently a single-page React app with no routing — all content lives in `src/pages/Home/index.jsx` which assembles ordered sections.

---

## Tech stack

| Tool | Version | Notes |
|---|---|---|
| React | 19 | No router, no state management library |
| Vite | 8 | Build tool and dev server |
| Tailwind CSS | v4 | Integrated via `@tailwindcss/vite` plugin — no `tailwind.config.js` |
| Lucide React | latest | Icon library (prefer over inline SVG for new icons) |
| ESLint | 9 | Flat config via `eslint.config.js` |

---

## Folder structure

```
src/
  assets/
    icons/          # SVG icons (imported as React components or img src)
    images/         # PNG/WebP/SVG images
  components/
    layout/         # Navbar.jsx, Footer.jsx
    ui/             # Reusable primitives: Button.jsx
  hooks/            # Custom React hooks (e.g. useCounter.js)
  pages/
    Home/
      index.jsx     # Page assembly — imports and orders all sections
      sections/     # One file per section: Hero.jsx, ServicesCards.jsx, etc.
  services/         # API/data layer (empty, .gitkeep placeholder)
  styles/           # typography.css (imported in index.css)
  utils/
    index.js        # cn() class helper, formatDate()
  App.jsx           # Root — renders <Home /> only
  index.css         # Design tokens + Tailwind @theme
  main.jsx          # Entry point
```

---

## Page section order

Defined in `src/pages/Home/index.jsx`:

1. `<Hero />` — full-viewport dark background, animated headline
2. `<ProblemStatement />` — white section, narrative pain-point
3. `<ServicesCards />` — dark navy, 3-card AI capabilities grid
4. `<ProcessTimeline />` — white, engagement methodology
5. `<Insights />` — white, articles preview
6. `<ServicesList />` — dark navy, expandable services grid
7. `<Events />` — white, upcoming workshops
8. `<CTASplit />` — dark navy, CTA with outcomes checklist
9. `<Newsletter />` — imported but not yet rendered

---

## Design system

### Color tokens

All colors are CSS custom properties defined in `src/index.css`. **Never use raw hex values in components** — always reference tokens.

| Token | Value | Usage |
|---|---|---|
| `--color-bg-secondary` | `#06041F` | Dark section backgrounds |
| `--color-bg-primary` | `#F1F5F9` | Light section backgrounds |
| `--color-bg-card` | `#111827` | Card backgrounds on dark sections |
| `--color-accent` | `#E11D48` | Brand red — logos, CTAs, labels, highlights |
| `--color-accent-dark` | `#9F1239` | Red on hover |
| `--color-accent-soft` | `#FFF1F2` | Very light red tint |
| `--color-text-primary` | `#F8FAFC` | Main text on dark backgrounds |
| `--color-text-secondary` | `#94A3B8` | Muted text on dark backgrounds |
| `--color-ink` | `#010716` | Primary text on light backgrounds |
| `--color-tech` | `#3B82F6` | Blue — AI/tech card accents |

Tailwind `@theme` in `index.css` maps these to utility classes: `bg-accent`, `text-accent`, `border-accent`, etc.

### Typography classes

Defined in `src/styles/typography.css`. Use these semantic classes rather than composing raw Tailwind font utilities:

- `t-display` — hero headline (very large)
- `t-headline` — section headline
- `t-title-lg` — card titles
- `t-tagline` — taglines / sub-headlines
- `t-eyebrow` — small uppercase label above a headline
- `t-sub` — supporting text under a headline
- `t-body-lg` — body text in cards
- `t-hero-body` — descriptive text in the hero
- `t-caption` — smallest label text

### Section layout convention

Every section uses this responsive padding and max-width pattern:

```jsx
<section className="py-20 px-6 md:px-10 lg:px-16" style={{ background: 'var(--color-bg-secondary)' }}>
  <div className="max-w-7xl mx-auto">
    {/* content */}
  </div>
</section>
```

Dark sections use inline `style={{ background: 'var(--color-bg-secondary)' }}`.
Light sections use `className="bg-white"`.

---

## Coding conventions

### Component structure

Each section follows this pattern:

```jsx
// 1. Data constants above the component
const items = [ ... ]

// 2. Sub-components defined in the same file (not exported)
function SubComponent({ prop }) { ... }

// 3. Main section component (default export)
function SectionName() {
  return (
    <>
      <style>{` ... `}</style>   {/* scoped animations */}
      <section ...>
        ...
      </section>
    </>
  )
}

export default SectionName
```

### Animations

Animations are written as `<style>` tag strings co-located inside the component's return, **not** in CSS files. This keeps them scoped to the component. Keyframes are defined at the top of the style block; class names applied below.

When a component renders multiple instances (e.g. cards in a loop), use index-suffixed class names to isolate per-card animation variants:

```jsx
// Good — each card gets its own scoped animation
`.svc-card-${index}:hover { ... }`
<div className={`svc-card-${index}`} />
```

### Class composition

Use the `cn()` helper from `src/utils/index.js` for conditional class joining:

```jsx
import { cn } from '../../utils'

cn('base-class', condition && 'conditional-class', 'another-class')
```

### Tailwind vs inline styles

- **Tailwind utilities** — layout, spacing, flexbox, grid, sizing, transitions, responsive modifiers
- **`style={{ }}`** — color tokens (`var(--color-*)`) and one-off values that aren't in the Tailwind theme
- **Never** use arbitrary Tailwind values like `bg-[#E11D48]` — use the token class instead (`bg-accent`)

### Hover effects on inline-styled elements

Since Tailwind's `hover:` pseudo-class can't target CSS variable colors, hover state changes on inline-styled elements use `onMouseEnter` / `onMouseLeave`:

```jsx
onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted-dk)' }}
```

### Button component

Use `src/components/ui/Button.jsx` for all CTAs. Three variants: `primary` (red filled), `secondary` (outlined), `ghost` (text only).

```jsx
<Button variant="primary">Get Started</Button>
```

### Responsive breakpoints

Follow Tailwind's default breakpoints. The standard progression used throughout:

- Mobile-first base styles
- `md:` — tablet (768px+)
- `lg:` — desktop (1024px+)

### No routing

There is no React Router. `App.jsx` renders `<Home />` directly. Do not add routing unless explicitly asked.

### Imports

Asset imports use relative paths from the file. Images live in `src/assets/images/`, icons in `src/assets/icons/`.

```jsx
import heroBg from '../../../assets/images/thotnr_ai_hero_bg.png'
import icon1  from '../../../assets/icons/icon1-dark-human-ai.svg'
```

---

## Navbar behaviour

- **Transparent** over the hero (text white, logo white)
- **Scrolled state** (`scrollY > 40px`): white background (`bg-surface/95`), shadow, text dark, logo red
- Desktop: mega-menu dropdowns on hover with fade-in animation
- Mobile: hamburger icon → full-screen drawer with accordion sections

---

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint
```
