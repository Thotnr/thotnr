# HERO SECTION — Responsive PRD (Full Video + Centered Content + Depth)
## File: `src/pages/Home/sections/Hero.jsx` (same pattern for ALL other page S1Hero.jsx files)
## Breakpoints: Mobile < 768px | Tablet 768px–1023px | Desktop 1024px+

---

## RULES (from CLAUDE.md)
- Tailwind for layout only
- NO Tailwind color utilities — CSS vars only
- NO Tailwind font-size utilities — typography classes or inline style only
- Desktop styles must stay pixel-identical at lg+

---

## ISSUE 1 — Video feels cropped on tablet/mobile

Current: `object-cover` fills frame but crops the video on narrow viewports.
Fix: Keep `object-cover` but add `objectPosition: 'center center'` so the
most important part of the video (center) is always visible.

```jsx
// BEFORE:
<video
  className="absolute inset-0 w-full h-full object-cover z-0"
  src={heroCoverVideo}
  autoPlay muted loop playsInline
  style={{ filter: 'brightness(0.72) contrast(1.05)' }}
/>

// AFTER:
<video
  className="absolute inset-0 w-full h-full object-cover z-0"
  style={{ objectPosition: 'center center', filter: 'brightness(0.72) contrast(1.05)' }}
  src={heroCoverVideo}
  autoPlay muted loop playsInline
/>
```

---

## ISSUE 2 — Section height: use dvh for true full screen on mobile

Mobile browsers calculate 100vh including the address bar, causing overflow.
`100dvh` = dynamic viewport height, shrinks when browser chrome appears.

```jsx
// BEFORE:
<section className="relative h-screen w-full overflow-hidden">

// AFTER:
<section
  className="relative w-full overflow-hidden"
  style={{
    height: '100vh',
    minHeight: '100dvh',
    background: 'var(--color-secondary)',
  }}
>
```

`background: var(--color-secondary)` = dark navy fallback before video loads,
prevents white flash.

---

## ISSUE 3 — Content positioning: truly centered + responsive

Current `left: 13%, top: 20%, transform: translateY(-50%)` is NOT centered.
It positions the top of the text at ~10% from the top of the screen.

Replace all inline positioning with a CSS class using a `<style>` tag
so desktop stays pixel-identical while mobile/tablet get correct layout.

```jsx
// Add inside the component's <style> tag:

/* Mobile — vertically centered, full width with side padding */
.hero-content-pos {
  position: absolute;
  left: 6%;
  right: 6%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

/* Tablet — left aligned, constrained width */
@media (min-width: 768px) {
  .hero-content-pos {
    left: 8%;
    right: auto;
    top: 50%;
    transform: translateY(-50%);
    max-width: 480px;
  }
}

/* Desktop — original exact values, pixel-identical */
@media (min-width: 1024px) {
  .hero-content-pos {
    left: 13%;
    right: auto;
    top: 20%;
    transform: translateY(-50%);
    max-width: 520px;
  }
}

// Update content div:
// BEFORE:
<div
  className="hero-content absolute z-10"
  style={{ left: '13%', top: '20%', transform: 'translateY(-50%)', maxWidth: '520px' }}
>

// AFTER:
<div className="hero-content hero-content-pos">
```

---

## ISSUE 4 — Add depth: layered gradients for content/video separation

Add 4 gradient layers. Each has `zIndex: 2` (above video z-0, below content z-10).

```jsx
{/* Layer 1: Desktop — left dark → right open (existing, update zIndex to 2) */}
<div style={{
  position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
  background: 'linear-gradient(to right, rgba(1,7,22,0.82) 0%, rgba(1,7,22,0.04) 100%)',
}} />

{/* Layer 2: Mobile/tablet only — flat dark overlay for legibility (NEW) */}
<div
  className="block lg:hidden"
  style={{
    position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
    background: 'rgba(1,7,22,0.52)',
  }}
/>

{/* Layer 3: Bottom vignette — bleeds into next section (existing, update zIndex to 2) */}
<div style={{
  position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
  background: 'linear-gradient(to top, rgba(1,7,22,0.65) 0%, transparent 40%)',
}} />

{/* Layer 4: Top vignette — keeps navbar area dark on any video frame (NEW) */}
<div style={{
  position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
  background: 'linear-gradient(to bottom, rgba(1,7,22,0.45) 0%, transparent 25%)',
}} />
```

Content z-index = 10 (set in .hero-content-pos above), always above all gradient layers.

---

## ISSUE 5 — Headline font size: correct clamp for all screens

Current `clamp(54px, 6.2vw, 92px)`:
- At 390px: `6.2vw = 24px` → floor 54px (too big, wrong scaling curve)

```jsx
// BEFORE:
fontSize: 'clamp(54px, 6.2vw, 92px)',

// AFTER:
fontSize: 'clamp(36px, 8.5vw, 92px)',
```

Result:
- Mobile 390px  → 36px ✓ fits "Your / Thought / Partner" in 3 clean lines
- Tablet 768px  → 65px ✓ bold and impactful
- Desktop 1440px → 92px ✓ identical to current

---

## ISSUE 6 — Supporting text: prevent overflow on mobile

```jsx
// BEFORE:
maxWidth: '360px',

// AFTER:
maxWidth: 'min(360px, 100%)',
```

---

## COMPLETE UPDATED Hero.jsx

Replace entire file with this:

```jsx
import heroCoverVideo from '../../../assets/videos/home-cover.mp4'

function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh',
        minHeight: '100dvh',
        background: 'var(--color-secondary)',
      }}
    >
      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-content {
          animation: heroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }

        /* Mobile — vertically centered, full width */
        .hero-content-pos {
          position: absolute;
          left: 6%;
          right: 6%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }

        /* Tablet */
        @media (min-width: 768px) {
          .hero-content-pos {
            left: 8%;
            right: auto;
            top: 50%;
            transform: translateY(-50%);
            max-width: 480px;
          }
        }

        /* Desktop — pixel-identical to original */
        @media (min-width: 1024px) {
          .hero-content-pos {
            left: 13%;
            right: auto;
            top: 20%;
            transform: translateY(-50%);
            max-width: 520px;
          }
        }
      `}</style>

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center center', filter: 'brightness(0.72) contrast(1.05)' }}
        src={heroCoverVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Layer 1: Desktop left-to-right gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(1,7,22,0.82) 0%, rgba(1,7,22,0.04) 100%)',
      }} />

      {/* Layer 2: Mobile/tablet flat overlay */}
      <div
        className="block lg:hidden"
        style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'rgba(1,7,22,0.52)',
        }}
      />

      {/* Layer 3: Bottom vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(1,7,22,0.65) 0%, transparent 40%)',
      }} />

      {/* Layer 4: Top vignette — keeps navbar area always dark */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(1,7,22,0.45) 0%, transparent 25%)',
      }} />

      {/* Content — z-index 10, above all gradient layers */}
      <div className="hero-content hero-content-pos">

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <div style={{
            width: 'clamp(14px, 3vw, 22px)',
            height: '1px',
            background: 'var(--color-accent)',
            opacity: 0.5,
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.30em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            opacity: 0.78,
          }}>
            Enterprise AI
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(36px, 8.5vw, 92px)',
          fontWeight: 600,
          lineHeight: 1.02,
          letterSpacing: '-0.036em',
          color: 'var(--color-text-white)',
          marginBottom: '28px',
        }}>
          Your<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-accent)', opacity: 0.62 }}>
            Thought
          </em><br />
          Partner
        </h1>

        {/* Divider */}
        <div style={{
          width: '32px',
          height: '1px',
          background: 'var(--color-text-white)',
          opacity: 0.15,
          marginBottom: '20px',
        }} />

        {/* Supporting text */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          lineHeight: 1.85,
          color: 'var(--color-text-white)',
          opacity: 0.62,
          maxWidth: 'min(360px, 100%)',
          marginBottom: '32px',
        }}>
          Building intelligent systems where AI meets real enterprise needs.
        </p>

      </div>
    </section>
  )
}

export default Hero
```

---

## OTHER PAGE HEROES — Apply same pattern

For every other `S1Hero.jsx` across all pages apply these same changes.
Keep each page's unique eyebrow text, headline, supporting copy — only change structure.

Changes per file:
a) Section tag: `className="relative w-full overflow-hidden"` + style with height/minHeight/background
b) Video tag: add `style={{ objectPosition: 'center center', filter: '...' }}`
c) `<style>` tag: replace animation + add hero-content-pos with 3 breakpoints
d) Content div: `className="hero-content hero-content-pos"` — remove all inline positioning
e) All 4 gradient layers with zIndex: 2
f) Headline fontSize: `clamp(36px, 8.5vw, 92px)`
g) Supporting text maxWidth: `min(360px, 100%)`

---

## Note
- Do not make changes in Desktop version
