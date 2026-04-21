import { useState, useEffect, useRef } from 'react'
import { cn } from '../../utils';
import logoWhite from '../../assets/images/thotnr_logo_white.png';
import logoRed from '../../assets/images/thotnr_logo_red.png';

// ── Mega-dropdown content ─────────────────────────────────────────────────────

const whatWeOffer = [
  { label: 'AI Strategy & Roadmap',   desc: 'Long-term AI vision aligned to business goals' },
  { label: 'Custom AI Development',   desc: 'Tailored models built for your processes' },
  { label: 'Enterprise Integration',  desc: 'Seamlessly embed AI into existing systems' },
  { label: 'Training & Enablement',   desc: 'Upskill your teams for AI-led workflows' },
]

const aiSolutions = [
  { label: 'Natural Language Processing', desc: 'Text intelligence at enterprise scale' },
  { label: 'Computer Vision',             desc: 'Visual AI for inspection & automation' },
  { label: 'Predictive Analytics',        desc: 'Forecast outcomes before they happen' },
  { label: 'Process Automation',          desc: 'Eliminate manual work with smart bots' },
  { label: 'Conversational AI',           desc: 'Intelligent chatbots & voice agents' },
  { label: 'Recommendation Systems',      desc: 'Personalise at scale across touchpoints' },
]

// ── Logo ──────────────────────────────────────────────────────────────────────

function LogoMark({ size = 28, scrolled }) {
  const c = scrolled ? 'var(--color-accent)' : 'var(--color-accent)'
  return (  
    <img
      src={scrolled ? logoRed :logoWhite}
      alt="Thotnr Logo"
      width={size}
      height={size}
      color={c}
      style={{
        objectFit: 'contain',
        opacity: scrolled ? 0.9 : 1,
        transition: 'opacity 0.2s ease',
      }}
    />
  )
}

// ── Chevron ───────────────────────────────────────────────────────────────────

function ChevronDown({ open }) {
  return (
    <svg
      width="13" height="13" viewBox="0 0 13 13" fill="none"
      className="flex-shrink-0 transition-transform duration-200"
      style={{ transform: open ? 'rotate(180deg)' : 'none' }}
    >
      <path d="M2.5 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Mega-menu panel ───────────────────────────────────────────────────────────

function MegaMenu({ items, cols = 2 }) {
  return (
    <div
      className={cn('grid gap-0.5', cols === 3 ? 'grid-cols-3' : 'grid-cols-2')}
      style={{ minWidth: cols === 3 ? 510 : 360 }}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href="#"
          className="flex flex-col gap-0.5 rounded-lg px-4 py-3 no-underline transition-colors duration-150 hover:bg-accent-soft"
        >
          <span className="text-sm font-semibold text-gray-900">{item.label}</span>
          <span className="text-xs text-gray-500">{item.desc}</span>
        </a>
      ))}
    </div>
  )
}

// ── Dropdown item (desktop) ───────────────────────────────────────────────────

function DropdownItem({ label, items, cols, scrolled }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 bg-transparent border-none cursor-pointer',
          open ? 'text-accent' : scrolled ? 'text-gray-700' : 'text-white'
        )}
      >
        {label}
        <ChevronDown open={open} />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 z-50 mt-1.5 bg-white p-2 shadow-xl"
          style={{
            border:       '1px solid var(--color-gray-200)',
            borderTop:    '2px solid var(--color-accent)',
            borderRadius: '0 12px 12px 12px',
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest px-4 py-2 mb-1 text-accent">
            {label}
          </p>
          <MegaMenu items={items} cols={cols} />
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

// Navbar — transparent over dark Hero, white/opaque on scroll
// display is NEVER set in inline style — Tailwind's hidden/flex classes control it
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
    'fixed top-0 inset-x-0 z-50 h-16 items-center justify-between',
    'px-6 md:px-10 lg:px-16 transition-all duration-300',
    scrolled
      ? 'bg-white/95 backdrop-blur-sm border-b border-border shadow-sm'
      : 'bg-transparent border-b border-transparent'
  )

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <nav className={cn(navBase, 'hidden md:flex')}>
        <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <LogoMark scrolled={scrolled} />
          
          <span className={cn('relative text-2xl font-black tracking-widest', scrolled ? 'text-gray-900' : 'text-white')}>
            THO
            <span className="text-red-500">T</span>
            NR
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-red-500 to-transparent" />
          </span>
        </a>
        <div className="flex justify-around w-full">
          <div className="flex items-center gap-1">
            <DropdownItem label="What We Offer" items={whatWeOffer} cols={2} scrolled={scrolled} />
            <DropdownItem label="Our work"  items={aiSolutions} cols={3} scrolled={scrolled} />
            <DropdownItem label="Insights"  items={aiSolutions} cols={3} scrolled={scrolled} />
            <DropdownItem label="AI"  items={aiSolutions} cols={3} scrolled={scrolled} />
          </div>
          <div className="flex items-center gap-1">
            {['About', 'Contact', 'Join Us'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md no-underline transition-colors duration-150 hover:text-accent',
                    scrolled ? 'text-gray-700' : 'text-white'
                  )}
                >
                  {link}
                </a>
              ))}
          </div>
        </div>
        
      </nav>

      {/* ── MOBILE NAV ── */}
      <nav className={cn(navBase, 'flex md:hidden px-5')}>
        <a href="/" className="flex items-center gap-2 no-underline">
          <LogoMark size={24} scrolled={scrolled} />
          <span className={cn('text-lg font-bold', scrolled ? 'text-gray-900' : 'text-white')}>
            THOTNR
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
          background: '#ffffff',
          borderTop: '2px solid var(--color-accent)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
          transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="flex flex-col gap-1 p-5 pb-12">
          {[
            { label: 'What We Offer', key: 'offer',     items: whatWeOffer },
            { label: 'AI Solutions',  key: 'solutions', items: aiSolutions },
          ].map(({ label, key, items }) => (
            <div key={key}>
              <button
                className={cn(
                  'w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 border-none cursor-pointer text-gray-800',
                  mobileExp === key ? 'bg-accent-soft' : 'bg-transparent'
                )}
                onClick={() => setMobileExp(mobileExp === key ? null : key)}
              >
                {label}
                <ChevronDown open={mobileExp === key} />
              </button>

              <div style={{ maxHeight: mobileExp === key ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                <div className="ml-4 mt-1 mb-1 flex flex-col gap-0.5">
                  {items.map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className="flex flex-col gap-0.5 px-4 py-2.5 rounded-lg no-underline transition-colors duration-150 hover:bg-accent-soft"
                    >
                      <span className="text-sm font-semibold text-gray-900">{item.label}</span>
                      <span className="text-xs text-gray-500">{item.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {['Industries', 'Insights', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="px-4 py-3 rounded-xl text-sm font-medium no-underline transition-colors duration-150 text-gray-700 hover:text-accent"
            >
              {link}
            </a>
          ))}

          <a href="#" className="mt-4 px-5 py-3 rounded-lg text-sm font-semibold text-center no-underline bg-accent text-white hover:bg-accent-dark transition-colors duration-200">
            Get Started
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
