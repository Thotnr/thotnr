# MOBILE & TABLET — Content Centering + Depth PRD
## Applies to: Hero section + ALL page sections (not Navbar, not Footer)
## Breakpoints: Mobile < 768px | Tablet 768px–1023px | Desktop 1024px+

---

## RULES (from CLAUDE.md)
- Tailwind for layout only
- NO Tailwind color utilities — CSS vars only
- NO Tailwind font-size utilities — typography classes or inline style only
- Desktop styles (lg: and above) must stay pixel-identical
- Do NOT touch Navbar.jsx or Footer.jsx

---

## PART 1 — HERO SECTION
## File: src/pages/Home/sections/Hero.jsx + all other S1Hero.jsx files

---

### HERO CHANGE 1 — True vertical + horizontal center on mobile/tablet

Current `.hero-content-pos` positions content at `top: 50%` but `left: 6%, right: 6%`
is not truly centered — it's left-aligned within a padded box.

Replace the hero-content-pos CSS class inside the `<style>` tag:

```css
/* Mobile — true center: both horizontally and vertically */
.hero-content-pos {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 88%;
  max-width: 480px;
  z-index: 10;
  text-align: left; /* keep text left-aligned inside the centered box */
}

/* Tablet — same centering, slightly wider */
@media (min-width: 768px) {
  .hero-content-pos {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 500px;
    text-align: left;
  }
}

/* Desktop — original exact values, pixel-identical */
@media (min-width: 1024px) {
  .hero-content-pos {
    left: 13%;
    top: 20%;
    transform: translateY(-50%);
    width: auto;
    max-width: 520px;
    text-align: left;
  }
}
```

---

### HERO CHANGE 2 — Depth: clear z-separation between content and background

Add a frosted/blurred depth layer directly behind the text content on mobile/tablet.
This creates a visible "lift" between the video background and the text.

Add this div INSIDE the content div, as the first child (behind the text via z-index):

```jsx
{/* Depth layer — mobile/tablet only, invisible on desktop */}
<div
  className="block lg:hidden"
  style={{
    position: 'absolute',
    inset: '-24px -20px',
    zIndex: -1,
    borderRadius: '16px',
    background: 'rgba(1, 7, 22, 0.45)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.06)',
  }}
/>
```

The content div needs `position: relative` for this to work:

```jsx
{/* BEFORE: */}
<div className="hero-content hero-content-pos">

{/* AFTER: */}
<div className="hero-content hero-content-pos" style={{ position: 'relative' }}>
```

Note: `.hero-content-pos` already sets `position: absolute` via CSS class,
but adding `position: relative` as inline style overrides it and breaks layout.
Instead, wrap the inner content in a relative div:

```jsx
<div className="hero-content hero-content-pos">
  {/* Depth layer behind content — mobile/tablet only */}
  <div
    className="block lg:hidden"
    style={{
      position: 'absolute',
      inset: '-24px -20px',
      zIndex: -1,
      borderRadius: '16px',
      background: 'rgba(1, 7, 22, 0.45)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.06)',
    }}
  />

  {/* All existing content: eyebrow, headline, divider, supporting text */}
  {/* ... unchanged ... */}
</div>
```

The `.hero-content-pos` class has `position: absolute` — the depth layer uses
`position: absolute` with `zIndex: -1` relative to the nearest positioned ancestor,
which is the `.hero-content-pos` div itself (since it's `position: absolute`).

---

### HERO CHANGE 3 — Stronger gradient layers on mobile for depth feel

Update the mobile overlay (Layer 2) to a gradient instead of flat color,
creating more visual depth:

```jsx
{/* BEFORE — Layer 2 (mobile overlay): */}
<div
  className="block lg:hidden"
  style={{
    position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
    background: 'rgba(1,7,22,0.52)',
  }}
/>

{/* AFTER — radial gradient darkens edges, center stays clearer: */}
<div
  className="block lg:hidden"
  style={{
    position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
    background: 'radial-gradient(ellipse at center, rgba(1,7,22,0.25) 0%, rgba(1,7,22,0.72) 100%)',
  }}
/>
```

---

## PART 2 — ALL OTHER SECTIONS
## Files: every section file EXCEPT Navbar.jsx and Footer.jsx

---

### SECTION CHANGE 1 — Section padding: align with navbar on mobile

Navbar uses `px-5` on mobile. Sections use `px-6`. This creates a 4px misalignment
between navbar edges and section content edges on mobile.

Fix: change section padding on mobile from `px-6` to `px-5`:

```jsx
{/* BEFORE — every section shell: */}
<section className="py-16 px-6 md:px-10 lg:px-16 ...">

{/* AFTER: */}
<section className="py-16 px-5 md:px-10 lg:px-16 ...">
```

Apply this to EVERY section file's outermost `<section>` tag.
Only change `px-6` → `px-5`. Do not touch `md:px-10` or `lg:px-16`.

---

### SECTION CHANGE 2 — Section header block: center on mobile/tablet only

The eyebrow + headline + description block at the top of every section
should be centered on mobile and tablet. Desktop stays left-aligned.

```jsx
{/* BEFORE — header div: */}
<div className="mb-8">
  <p className="text-h4 text-[var(--color-highlight)]">Eyebrow</p>
  <h2 className="text-h1 text-[var(--color-text-primary)]">Heading</h2>
  <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">Description.</p>
</div>

{/* AFTER: */}
<div className="mb-8 text-center lg:text-left">
  <p className="text-h4 text-[var(--color-highlight)]">Eyebrow</p>
  <h2 className="text-h1 text-[var(--color-text-primary)]">Heading</h2>
  <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl mx-auto lg:mx-0">Description.</p>
</div>
```

Key changes:
- `text-center lg:text-left` on the wrapper div — centers all text children on mobile/tablet
- `mx-auto lg:mx-0` on the description `<p>` — centers the max-width constrained paragraph

Apply this pattern to the header block in EVERY section.
The header block is always: eyebrow `<p>` + headline `<h2>` + optional description `<p>`.

---

### SECTION CHANGE 3 — Dark section headers: same centering

For dark sections (background: var(--color-secondary)), apply the same centering:

```jsx
{/* BEFORE — dark section header: */}
<div className="mb-8">
  <p className="text-h4 text-[var(--color-highlight)]">Eyebrow</p>
  <h2 className="text-h1 text-white">Heading</h2>
  <p className="text-body text-white/70 mt-2 max-w-2xl">Description.</p>
</div>

{/* AFTER: */}
<div className="mb-8 text-center lg:text-left">
  <p className="text-h4 text-[var(--color-highlight)]">Eyebrow</p>
  <h2 className="text-h1 text-white">Heading</h2>
  <p className="text-body text-white/70 mt-2 max-w-2xl mx-auto lg:mx-0">Description.</p>
</div>
```

---

### SECTION CHANGE 4 — Cards: do NOT touch

Cards, grids, image layouts, and interactive components stay exactly as they are.
Only the header block (eyebrow + headline + description) gets centering.

Specifically DO NOT change:
- `grid` or `flex` layouts for cards
- Individual card components
- Image + text side-by-side layouts (CaseRow, ExpandingCard, etc.)
- Stats rows (Clients section)
- Form elements (SubscribeSection, Contact)
- The `max-w-7xl mx-auto` wrapper div inside each section

---

### SECTION CHANGE 5 — ProblemStatement: center headline on mobile

ProblemStatement has no eyebrow — just a large headline and body text.
Apply centering to both:

```jsx
{/* BEFORE: */}
<h2 className="text-h1 text-[var(--color-text-primary)] leading-tight mb-4">
  Most enterprises are drowning...
</h2>
<p className="text-body-lg text-[var(--color-text-secondary)]">
  We don't just build AI solutions...
</p>

{/* AFTER: */}
<h2 className="text-h1 text-[var(--color-text-primary)] leading-tight mb-4 text-center lg:text-left">
  Most enterprises are drowning...
</h2>
<p className="text-body-lg text-[var(--color-text-secondary)] text-center lg:text-left">
  We don't just build AI solutions...
</p>
```

---

### SECTION CHANGE 6 — SubscribeSection: center headline on mobile

```jsx
{/* BEFORE: */}
<h2 className="text-h1 text-white mt-3 leading-tight">
  Stay up to date...
</h2>
<p className="text-body-lg mt-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
  Industry perspectives...
</p>

{/* AFTER: */}
<h2 className="text-h1 text-white mt-3 leading-tight text-center lg:text-left">
  Stay up to date...
</h2>
<p className="text-body-lg mt-4 text-center lg:text-left" style={{ color: 'rgba(255,255,255,0.65)' }}>
  Industry perspectives...
</p>
```

---

## FILES TO CHANGE

| File | Changes |
|---|---|
| `src/pages/Home/sections/Hero.jsx` | Part 1: Changes 1, 2, 3 |
| All other `S1Hero.jsx` files | Part 1: Changes 1, 2, 3 |
| `src/pages/Home/sections/ProblemStatement.jsx` | Change 5 + Change 1 (px-5) |
| `src/pages/Home/sections/ServicesCards.jsx` | Changes 1, 2 |
| `src/pages/Home/sections/ProcessTimeline.jsx` | Changes 1, 2 |
| `src/pages/Home/sections/ServicesList.jsx` | Changes 1, 2 |
| `src/pages/Home/sections/CaseStudies.jsx` | Changes 1, 2 |
| `src/pages/Home/sections/Clients.jsx` | Changes 1, 2 |
| `src/pages/Home/sections/Products.jsx` | Changes 1, 2 |
| `src/pages/Home/sections/Events.jsx` | Changes 1, 2 |
| `src/pages/Home/sections/Insights.jsx` | Changes 1, 2 |
| `src/components/layout/SubscribeSection.jsx` | Changes 1, 6 |
| All sections in other pages | Changes 1, 2, 3 |

---

## Note
- Do not touch Desktop Version
