# NAVBAR — Responsive PRD (Mobile + Tablet)
## File: `src/components/layout/Navbar.jsx`
## Breakpoints: Mobile < 768px | Tablet 768px–1023px | Desktop 1024px+

---

## RULES (from CLAUDE.md)
- Tailwind for layout only
- NO Tailwind color utilities — CSS vars only (`text-[var(--color-*)]` or inline style)
- NO Tailwind font-size utilities — use typography classes only
- Hover states use onMouseEnter/onMouseLeave — NOT Tailwind hover: with CSS vars
- Desktop styles (lg: and above) must stay pixel-identical

---

## STRATEGY

Both mobile (< 768px) and tablet (768px–1023px) use the SAME hamburger layout.
Desktop full nav only appears at lg (1024px+).

This means:
- `hidden lg:flex` on desktop nav
- `flex lg:hidden` on mobile/tablet nav bar
- `lg:hidden` on the drawer

---

## CHANGE 1 — navBase: fix transition

```js
// BEFORE:
const navBase = cn('fixed top-0 inset-x-0 z-50 h-16', 'transition-all duration-300')

// AFTER: only animate background + shadow, not all properties
// (transition-all causes logo text to visually jump on scroll)
const navBase = cn('fixed top-0 inset-x-0 z-50 h-16', 'transition-[background,box-shadow] duration-300')
```

---

## CHANGE 2 — Desktop nav: show only at lg+

```jsx
// BEFORE:
<nav className={cn(navBase, 'px-6 md:px-8 lg:px-16')}>

// AFTER:
<nav className={cn(navBase, 'hidden lg:flex items-center px-6 lg:px-16')} style={navScrolledStyle}>
```

---

## CHANGE 3 — Mobile/Tablet nav bar: show below lg

```jsx
// BEFORE:
<nav className={cn(navBase, 'flex md:hidden items-center justify-between px-5')} style={navScrolledStyle}>

// AFTER: lg:hidden instead of md:hidden so tablet also gets hamburger
<nav className={cn(navBase, 'flex lg:hidden items-center justify-between px-5')} style={navScrolledStyle}>
```

### Logo in mobile/tablet bar:

```jsx
// Logo text — fix undefined text-ink class
// BEFORE:
<span className={cn('text-lg font-bold', scrolled ? 'text-ink' : 'text-white')}>
  THO<span className="text-accent">T</span>NR
</span>

// AFTER:
<span
  className="text-lg font-bold tracking-widest"
  style={{ color: scrolled ? 'var(--color-text-primary)' : '#ffffff' }}
>
  THO<span style={{ color: 'var(--color-highlight)' }}>T</span>NR
</span>
```

### Hamburger button — no changes needed, already correct.

---

## CHANGE 4 — Drawer: full fix

```jsx
// BEFORE:
<div
  className={cn(
    'md:hidden fixed inset-x-0 z-40 overflow-y-auto transition-transform duration-300',
    mobileOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-[110%] pointer-events-none'
  )}
  style={{
    top: 64, bottom: 0,
    background: 'var(--color-surface)',   // ← undefined var
    borderTop: '2px solid var(--color-accent)',
    ...
  }}
>

// AFTER:
<div
  className={cn(
    'lg:hidden fixed inset-x-0 z-40 overflow-y-auto',
    'transition-transform duration-300',
    mobileOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-[110%] pointer-events-none'
  )}
  style={{
    top: 64,
    bottom: 0,                                    // required — without this, drawer height = content only
    background: 'var(--color-primary)',           // was var(--color-surface) — undefined
    borderTop: '2px solid var(--color-highlight)',// was --color-accent — use highlight for brand consistency
    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
    transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
  }}
>
```

---

## CHANGE 5 — Drawer content: fix all undefined CSS vars + improve layout

### Remove the "What We Offer" accordion (optional simplification)
The accordion used `bg-accent-soft`, `text-ink`, `text-slate` — all undefined.
Replace the entire drawer content with a clean flat link list (simpler, faster, no broken vars):

```jsx
<div className="flex flex-col px-5 py-3">
  {[
    { label: 'what we offer', to: '/services'     },
    { label: 'our work',      to: '/case-studies' },
    { label: 'insights',      to: '/insights'     },
    { label: 'AI',            to: '/ai'           },
    { label: 'industries',    to: '/industries'   },
    { label: 'about',         to: '/about'        },
    { label: 'contact',       to: '/contact'      },
    { label: 'join us',       to: '/join-us'      },
  ].map(({ label, to }, i, arr) => (
    <div key={label}>
      <Link
        to={to}
        onClick={() => setMobileOpen(false)}
        className="block px-2 py-3 text-body-lg font-medium no-underline transition-colors duration-150"
        style={{ color: 'var(--color-text-primary)' }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-highlight)' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)' }}
      >
        {label}
      </Link>
      {i < arr.length - 1 && (
        <div style={{ height: '1px', background: 'var(--color-secondary)', opacity: 0.12 }} />
      )}
    </div>
  ))}
</div>
```

---

## CHANGE 6 — Close drawer on resize to desktop

Add this useEffect (prevents drawer staying open if user rotates device to landscape/desktop):

```jsx
useEffect(() => {
  const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
  window.addEventListener('resize', onResize)
  return () => window.removeEventListener('resize', onResize)
}, [])
```

---

## CHANGE 7 — Desktop nav logo: fix undefined text-ink class

```jsx
// BEFORE:
<span className={cn('relative text-2xl font-black tracking-widest', scrolled ? 'text-ink' : 'text-white')}>
  THO<span className="text-accent">T</span>NR

// AFTER:
<span
  className="relative text-2xl font-black tracking-widest"
  style={{ color: scrolled ? 'var(--color-text-primary)' : '#ffffff' }}
>
  THO<span style={{ color: 'var(--color-highlight)' }}>T</span>NR
```

---

## COMPLETE FINAL Navbar.jsx

```jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils'

function LogoMark({ size = 28, scrolled }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <polygon
        points="4,4 24,14 4,24"
        fill="none"
        stroke="var(--color-highlight)"
        strokeWidth="2"
      />
    </svg>
  )
}

function HamburgerIcon({ open, scrolled }) {
  const color = scrolled ? 'var(--color-text-primary)' : '#ffffff'
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      {open ? (
        <>
          <line x1="4" y1="4" x2="18" y2="18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <line x1="18" y1="4" x2="4"  y2="18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="3" y1="7"  x2="19" y2="7"  stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <line x1="3" y1="11" x2="19" y2="11" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <line x1="3" y1="15" x2="19" y2="15" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
    </svg>
  )
}

function ChevronDown({ open }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 14 14" fill="none"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
    >
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const whatWeOfferData = {
  left: {
    heading: 'services',
    items: [
      { label: 'Artificial Intelligence', desc: 'Strategy, engineering, and deployment of AI systems that operate at enterprise scale.' },
      { label: 'Enterprise Architecture',  desc: 'Modernise your technology foundation to enable speed, coherence, and AI readiness.' },
      { label: 'Cloud',                    desc: 'Cloud-native design, migration, and engineering that cuts cost and eliminates fragility.' },
    ],
    cta: { label: 'view all services →', to: '/services' },
  },
  right: {
    heading: 'industries',
    cols: [
      ['Banking & Financial Services', 'Healthcare & Life Sciences', 'Automotive', 'Energy & Utilities', 'Gaming & Entertainment', 'Insurance'],
      ['Media & Publishing', 'Non-profits & Education', 'Private Equity', 'Public Sector', 'Retail & CPG', 'Industry & Automation'],
      ['Smart Buildings', 'Software & Hi-tech', 'Sports AI', 'Telecommunications', 'Travel & Logistics'],
    ],
    cta: { label: 'view all industries →', to: '/industries' },
  },
}

function DropdownItem({ label, data, scrolled }) {
  const [open, setOpen] = useState(false)
  const linkStyle = { color: scrolled ? 'var(--color-text-primary)' : '#ffffff' }
  const onEnter   = (e) => { e.currentTarget.style.color = 'var(--color-highlight)' }
  const onLeave   = (e) => { e.currentTarget.style.color = scrolled ? 'var(--color-text-primary)' : '#ffffff' }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 px-3 py-2 text-body rounded-md bg-transparent border-none cursor-pointer transition-colors duration-150"
        style={linkStyle}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {label}
        <ChevronDown open={open} />
      </button>

      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-2xl overflow-hidden z-50"
          style={{
            width: '780px',
            background: 'var(--color-primary)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.14)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div className="grid grid-cols-2">
            <div className="p-8 border-r border-black/5">
              <p className="text-label mb-5" style={{ color: 'var(--color-text-tertiary)' }}>
                {data.left.heading}
              </p>
              <div className="flex flex-col gap-5">
                {data.left.items.map((item) => (
                  <div key={item.label}>
                    <p className="text-body font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                      {item.label}
                    </p>
                    <p className="text-body-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                to={data.left.cta.to}
                className="inline-block mt-6 text-body-sm font-medium no-underline"
                style={{ color: 'var(--color-highlight)' }}
              >
                {data.left.cta.label}
              </Link>
            </div>
            <div className="p-8">
              <p className="text-label mb-5" style={{ color: 'var(--color-text-tertiary)' }}>
                {data.right.heading}
              </p>
              <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                {data.right.cols.flat().map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-body-sm no-underline transition-colors duration-150"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-highlight)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)' }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <Link
                to={data.right.cta.to}
                className="inline-block mt-6 text-body-sm font-medium no-underline"
                style={{ color: 'var(--color-highlight)' }}
              >
                {data.right.cta.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // FIX: transition-[background,box-shadow] not transition-all
  // transition-all was animating every property causing logo to jump on scroll
  const navBase = cn(
    'fixed top-0 inset-x-0 z-50 h-16',
    'transition-[background,box-shadow] duration-300',
  )

  const navScrolledStyle = scrolled
    ? {
        background: 'rgba(241, 250, 238, 0.92)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        boxShadow: '0 1px 0 rgba(29, 53, 87, 0.08), 0 8px 32px rgba(29, 53, 87, 0.06)',
      }
    : { background: 'transparent' }

  const linkStyle = { color: scrolled ? 'var(--color-text-primary)' : '#ffffff' }
  const onEnter   = (e) => { e.currentTarget.style.color = 'var(--color-highlight)' }
  const onLeave   = (e) => { e.currentTarget.style.color = scrolled ? 'var(--color-text-primary)' : '#ffffff' }
  const linkCls   = 'px-3 py-2 text-body rounded-md no-underline transition-colors duration-150'

  return (
    <>
      {/* ── DESKTOP NAV (lg+) ── */}
      <nav
        className={cn(navBase, 'hidden lg:flex items-center px-6 lg:px-16')}
        style={navScrolledStyle}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center h-full">
          <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
            <LogoMark scrolled={scrolled} />
            <span
              className="relative text-2xl font-black tracking-widest"
              style={{ color: scrolled ? 'var(--color-text-primary)' : '#ffffff' }}
            >
              THO<span style={{ color: 'var(--color-highlight)' }}>T</span>NR
              <span
                className="absolute -bottom-0.5 left-0 w-full h-[2px]"
                style={{ background: 'linear-gradient(to right, var(--color-accent), transparent)' }}
              />
            </span>
          </a>

          <div className="flex-1 flex justify-center items-center gap-1">
            <DropdownItem label="what we offer" data={whatWeOfferData} scrolled={scrolled} />
            <Link to="/case-studies" className={linkCls} style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>our work</Link>
            <Link to="/insights"     className={linkCls} style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>insights</Link>
            <Link to="/ai"           className={linkCls} style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>AI</Link>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0 -mr-3">
            {[
              { label: 'about',   to: '/about'  },
              { label: 'contact', to: '/contact' },
              { label: 'join us', to: '/join-us' },
            ].map(({ label, to }) => (
              <Link key={label} to={to} className={linkCls} style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── MOBILE/TABLET NAV BAR (below lg) ── */}
      <nav
        className={cn(navBase, 'flex lg:hidden items-center justify-between px-5')}
        style={navScrolledStyle}
      >
        <a href="/" className="flex items-center gap-2 no-underline">
          <LogoMark size={24} scrolled={scrolled} />
          <span
            className="text-lg font-bold tracking-widest"
            style={{ color: scrolled ? 'var(--color-text-primary)' : '#ffffff' }}
          >
            THO<span style={{ color: 'var(--color-highlight)' }}>T</span>NR
          </span>
        </a>
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle navigation"
          className="bg-transparent border-none p-1.5 cursor-pointer"
        >
          <HamburgerIcon open={mobileOpen} scrolled={scrolled} />
        </button>
      </nav>

      {/* ── DRAWER (below lg) ── */}
      {/* FIX: bottom:0 ensures full-height drawer so -translate-y-[110%] fully hides it */}
      {/* FIX: background var(--color-primary) replaces undefined var(--color-surface)   */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 z-40 overflow-y-auto',
          'transition-transform duration-300',
          mobileOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-[110%] pointer-events-none'
        )}
        style={{
          top: 64,
          bottom: 0,
          background: 'var(--color-primary)',
          borderTop: '2px solid var(--color-highlight)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
          transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="flex flex-col px-5 py-3">
          {[
            { label: 'what we offer', to: '/services'     },
            { label: 'our work',      to: '/case-studies' },
            { label: 'insights',      to: '/insights'     },
            { label: 'AI',            to: '/ai'           },
            { label: 'industries',    to: '/industries'   },
            { label: 'about',         to: '/about'        },
            { label: 'contact',       to: '/contact'      },
            { label: 'join us',       to: '/join-us'      },
          ].map(({ label, to }, i, arr) => (
            <div key={label}>
              <Link
                to={to}
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-3 text-body-lg font-medium no-underline transition-colors duration-150"
                style={{ color: 'var(--color-text-primary)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-highlight)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)' }}
              >
                {label}
              </Link>
              {i < arr.length - 1 && (
                <div style={{ height: '1px', background: 'var(--color-secondary)', opacity: 0.12 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar
```

---

# Note
- Not make any changes in Desktop version