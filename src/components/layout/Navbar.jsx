import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cn } from '../../utils'
import logoWhite from '../../assets/images/thotnr_logo_white.png'
import logoRed from '../../assets/images/thotnr_logo_red.png'

// ── Dropdown Data ─────────────────────────────────────────────────────────────

const whatWeOfferData = {
  left: {
    heading: 'services',
    items: [
      { label: 'Artificial Intelligence',    desc: 'Strategy, engineering, and deployment of AI systems that operate at enterprise scale.' },
      { label: 'Enterprise Architecture',    desc: 'Modernise your technology foundation to enable speed, coherence, and AI readiness.' },
      { label: 'Cloud',                       desc: 'Cloud-native design, migration, and engineering that cuts cost and eliminates fragility.' },
    ],
    viewAll: 'view all services',
    viewAllTo: '/services',
  },
  right: {
    heading: 'industries',
    cols: [
      ['Banking & Financial Services', 'Healthcare & Life Sciences', 'Automotive', 'Energy & Utilities', 'Gaming & Entertainment', 'Insurance'],
      ['Media & Publishing', 'Non-profits & Education', 'Private Equity', 'Public Sector', 'Retail & CPG', 'Industry & Automation'],
      ['Smart Buildings', 'Software & Hi-tech', 'Sports AI', 'Telecommunications', 'Travel & Logistics'],
    ],
    viewAll: 'view all industries',
    rightTo: '/industries',
  },
}

// ── Logo ──────────────────────────────────────────────────────────────────────

function LogoMark({ size = 28, scrolled }) {
  return (
    <img
      src={scrolled ? logoRed : logoWhite}
      alt="Thotnr Logo"
      width={size}
      height={size}
      style={{ objectFit: 'contain', opacity: scrolled ? 0.9 : 1, transition: 'opacity 0.2s ease' }}
    />
  )
}

// ── Chevron ───────────────────────────────────────────────────────────────────

function ChevronDown({ open }) {
  return (
    <svg
      width="13" height="13" viewBox="0 0 13 13" fill="none"
      className={`flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M2.5 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ── Mega Menu ─────────────────────────────────────────────────────────────────

function MegaMenu({ data }) {
  const { left, right } = data
  return (
    <>
      <style>{`
        @keyframes menuFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mega-menu-wrap { animation: menuFadeIn 0.2s ease both; }
        .mega-left-item { transition: color 0.15s ease; }
        .mega-left-item:hover .mega-item-label { color: var(--color-accent); }
        .mega-view-all {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 14px; font-weight: 500;
          color: var(--color-slate-dark); text-decoration: none;
          transition: color 0.15s ease;
          margin-top: 24px;
        }
        .mega-view-all:hover { color: var(--color-accent); }
        .mega-view-all-arrow { display: inline-block; transition: transform 0.2s ease; }
        .mega-view-all:hover .mega-view-all-arrow { transform: translateX(4px); }
      `}</style>

      <div
        className="mega-menu-wrap fixed left-0 right-0 z-50 bg-[var(--color-primary)]"
        style={{
          top: '64px',
          borderBottom: '1px solid var(--color-border)',
          boxShadow: '0 12px 40px rgb(var(--color-ink-rgb) / 0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-0 md:px-10 lg:px-16 py-8 flex gap-0">

          {/* LEFT — services */}
          <div className="w-[380px] flex-shrink-0 pr-12 flex flex-col" style={{ borderRight: '1px solid var(--color-border)' }}>
            <h3
              className="text-2xl font-light mb-4 m-0"
              style={{ color: 'var(--color-ink)', letterSpacing: '-0.3px' }}
            >
              {left.heading}
            </h3>

            <div className="flex flex-col gap-1">
              {left.items.map((item) => (
                <a
                  key={item.label}
                  className="mega-left-item flex flex-col gap-0.5 py-2 no-underline"
                  style={{ borderBottom: '1px solid var(--color-surface-soft)' }}
                >
                  <span
                    className="mega-item-label text-sm font-semibold pb-1"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.label}
                  </span>
                  <span className="text-xs leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                    {item.desc}
                  </span>
                </a>
              ))}
            </div>

            <Link to={left.viewAllTo} className="mega-view-all" style={{ color: 'var(--color-ink)', marginTop: 'auto', paddingTop: '24px' }}>
              {left.viewAll}
              <span className="mega-view-all-arrow">→</span>
            </Link>

          </div>

          {/* VERTICAL DIVIDER */}
          <div className="w-[0.1px] bg-gray-300" />

          {/* RIGHT — industries (non-clickable) */}
          <div className="flex-1 pl-12 flex flex-col">
            <h3
              className="text-2xl font-light mb-1"
              style={{ color: 'var(--color-ink)', letterSpacing: '-0.3px' }}
            >
              {right.heading}
            </h3>

            <div className="grid grid-cols-3 gap-y-0 pt-4">
              {right.cols.map((col, ci) => (
                <div key={ci} className="flex flex-col gap-0">
                  {col.map((item) => (
                    <span
                      key={item}
                      className="py-1.5 text-sm"
                      style={{ color: 'var(--color-slate-dark)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <Link to={right.rightTo} className="mega-view-all" style={{ color: 'var(--color-ink)', marginTop: 'auto', paddingTop: '24px' }}>
              {right.viewAll}
              <span className="mega-view-all-arrow">→</span>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

// ── Dropdown Item ─────────────────────────────────────────────────────────────

function DropdownItem({ label, data, scrolled }) {
  const [open, setOpen] = useState(false)
  let timeout

  const handleEnter = () => {
    clearTimeout(timeout)
    setOpen(true)
  }

  const handleLeave = () => {
    timeout = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="flex items-center gap-1 px-3 py-2 text-body rounded-md transition-colors duration-150 bg-transparent border-none cursor-pointer"
        style={{
          color: open
            ? 'var(--color-highlight)'
            : scrolled
            ? 'var(--color-text-primary)'
            : '#ffffff',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-highlight)' }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = open
            ? 'var(--color-highlight)'
            : scrolled
            ? 'var(--color-text-primary)'
            : '#ffffff'
        }}
      >
        {label}
        <ChevronDown open={open} />
      </button>

      {open && (
        <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <MegaMenu data={data} />
        </div>
      )}
    </div>
  )
}

// ── Hamburger ─────────────────────────────────────────────────────────────────

function HamburgerIcon({ open, scrolled }) {
  const barCls = cn(
    'block h-[2px] rounded-full transition-transform duration-[250ms]',
    scrolled ? 'bg-gray-800' : 'bg-white'
  )
  return (
    <div className="flex flex-col justify-center gap-[5px] w-5 h-5 cursor-pointer">
      <span className={barCls} style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
      <span className={cn(barCls, 'transition-opacity duration-200')} style={{ opacity: open ? 0 : 1 }} />
      <span className={barCls} style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
    </div>
  )
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExp,  setMobileExp]  = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBase = cn(
    'fixed top-0 inset-x-0 z-50 h-16',
    'transition-all duration-300',
  )

  const navScrolledStyle = scrolled
    ? {
        background: 'rgba(241, 250, 238, 0.88)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        boxShadow: '0 1px 0 rgba(29, 53, 87, 0.08), 0 8px 32px rgba(29, 53, 87, 0.06)',
      }
    : {
        background: 'transparent',
      }

  const linkStyle = (scrolled) => ({ color: scrolled ? 'var(--color-text-primary)' : '#ffffff' })
  const onEnter   = (e) => { e.currentTarget.style.color = 'var(--color-highlight)' }
  const onLeave   = (e, scrolled) => { e.currentTarget.style.color = scrolled ? 'var(--color-text-primary)' : '#ffffff' }
  const linkCls   = 'px-3 py-2 text-body rounded-md no-underline transition-colors duration-150'

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <nav
        className={cn(navBase, 'px-6 md:px-8 lg:px-16')}
        style={navScrolledStyle}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center h-full">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
            <LogoMark scrolled={scrolled} />
            <span className={cn('relative text-2xl font-black tracking-widest', scrolled ? 'text-ink' : 'text-white')}>
              THO
              <span className="text-accent">T</span>
              NR
              <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-transparent" />
            </span>
          </a>

          {/* Center group */}
          <div className="flex-1 flex justify-center items-center gap-1">
            <DropdownItem label="what we offer" data={whatWeOfferData} scrolled={scrolled} />
            <Link to="/case-studies" className={linkCls} style={linkStyle(scrolled)} onMouseEnter={onEnter} onMouseLeave={(e) => onLeave(e, scrolled)}>our work</Link>
            <Link to="/insights"     className={linkCls} style={linkStyle(scrolled)} onMouseEnter={onEnter} onMouseLeave={(e) => onLeave(e, scrolled)}>insights</Link>
            <Link to="/ai"           className={linkCls} style={linkStyle(scrolled)} onMouseEnter={onEnter} onMouseLeave={(e) => onLeave(e, scrolled)}>AI</Link>
          </div>

          {/* Right group — -mr-3 cancels the last link's px-3 right padding so text aligns with section content edge */}
          <div className="flex items-center gap-1 flex-shrink-0 -mr-3">
            {[
              { label: 'about',   to: '/about'   },
              { label: 'contact', to: '/contact'  },
              { label: 'join us', to: '/join-us'  },
            ].map(({ label, to }) => (
              <Link key={label} to={to} className={linkCls} style={linkStyle(scrolled)} onMouseEnter={onEnter} onMouseLeave={(e) => onLeave(e, scrolled)}>
                {label}
              </Link>
            ))}
          </div>

        </div>
      </nav>

      {/* ── MOBILE NAV ── */}
      <nav className={cn(navBase, 'flex md:hidden items-center justify-between px-5')} style={navScrolledStyle}>
        <a href="/" className="flex items-center gap-2 no-underline">
          <LogoMark size={24} scrolled={scrolled} />
          <span className={cn('text-lg font-bold', scrolled ? 'text-ink' : 'text-white')}>
            THO<span className="text-accent">T</span>NR
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

      {/* ── MOBILE DRAWER ── */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 z-40 overflow-y-auto transition-transform duration-300',
          mobileOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-[110%] pointer-events-none'
        )}
        style={{
          top: 64, bottom: 0,
          background: 'var(--color-surface)',
          borderTop: '2px solid var(--color-accent)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
          transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="flex flex-col gap-1 p-5 pb-12">
          {/* What We Offer accordion */}
          <div>
            <button
              className={cn(
                'w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 border-none cursor-pointer',
                mobileExp === 'offer' ? 'text-accent bg-accent-soft' : 'text-ink bg-transparent'
              )}
              onClick={() => setMobileExp(mobileExp === 'offer' ? null : 'offer')}
            >
              what we offer
              <ChevronDown open={mobileExp === 'offer'} />
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: mobileExp === 'offer' ? 600 : 0 }}
            >
              <div className="ml-4 mt-1 mb-1 flex flex-col gap-0.5">
                {whatWeOfferData.left.items.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="flex flex-col gap-0.5 px-4 py-2.5 rounded-lg no-underline transition-colors duration-150 hover:bg-accent-soft"
                  >
                    <span className="text-sm font-semibold text-ink">{item.label}</span>
                    <span className="text-xs text-slate">{item.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {[
            { label: 'Our Work',  to: '/case-studies' },
            { label: 'Insights',  to: '/insights'     },
            { label: 'AI',        to: '/ai'           },
            { label: 'About',     to: '/about'        },
            { label: 'Contact',   to: '/contact'      },
            { label: 'Join Us',   to: '/join-us'      },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="px-4 py-3 rounded-xl text-sm font-medium no-underline transition-colors duration-150 text-slate-dark hover:text-accent"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar
