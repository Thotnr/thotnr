import { useState, useEffect } from 'react'
import { cn } from '../../utils'
import logoWhite from '../../assets/images/thotnr_logo_white.png'
import logoRed from '../../assets/images/thotnr_logo_red.png'

// ── Dropdown Data ─────────────────────────────────────────────────────────────

const whatWeOfferItems = [
  { label: 'Digital Engineering',      desc: 'Value-driven and technology savvy. We future-proof your business.' },
  { label: 'Intelligent Enterprise',   desc: 'Helping you master your critical business applications, empowering your business to thrive.' },
  { label: 'Experience and Design',    desc: 'Harness the power of design to drive a whole new level of success.' },
  { label: 'AI & Data',                desc: 'Accelerate growth with intelligent automation and data-driven decisions.' },
  { label: 'Enterprise Architecture',  desc: 'Modernise your technology landscape and build systems that scale.' },
  { label: 'Cloud Services',           desc: 'Migrate, optimise, and operate with confidence across any cloud platform.' },
]

const ourWorkItems = [
  { label: 'Case Studies',                    desc: 'Real outcomes. Real clients. See how we deliver measurable impact.' },
  { label: 'Nykaa — Quality Engineering',     desc: 'Redefined seller portal testing at e-commerce scale.' },
  { label: 'Standard Bank — Architecture',    desc: 'Enterprise architecture transformation across Southern Africa.' },
  { label: 'Tata International — Automation', desc: 'Intelligent process automation for automotive supply chain.' },
  { label: 'Glytec — Clinical AI',            desc: 'AI-assisted insulin dosing for safer patient outcomes.' },
  { label: 'Hero FinCorp — Data Platform',    desc: 'Unified data platform powering real-time lending decisions.' },
]

const insightsItems = [
  { label: 'Latest Articles',                      desc: 'Perspectives on AI, architecture, and enterprise transformation.' },
  { label: 'Why AI Projects Fail',                 desc: 'The mismatch between leadership expectations and enterprise reality.' },
  { label: 'ROI of Intelligent Automation',        desc: 'Measuring second and third-order returns from automation in 2025.' },
  { label: 'Building AI-Ready Organisations',      desc: 'The operating muscle companies need to absorb AI capability.' },
  { label: 'Next-Gen User Experience',             desc: 'How human-centred design is reshaping enterprise software.' },
  { label: 'Events & Webinars',                    desc: 'Join our upcoming sessions on enterprise AI and digital transformation.' },
]

const aiItems = [
  { label: 'AI Strategy & Roadmap',       desc: 'Long-term AI vision aligned to your business goals and data maturity.' },
  { label: 'Generative AI Engineering',   desc: 'Production-ready GenAI — RAG systems, copilots, and LLM integrations.' },
  { label: 'Intelligent Automation',      desc: 'Replace manual workflows with context-aware AI-powered processes.' },
  { label: 'NLP & Conversational AI',     desc: 'Text intelligence and voice agents built for enterprise environments.' },
  { label: 'Computer Vision',             desc: 'Visual AI for inspection, recognition, and real-time decision-making.' },
  { label: 'AI Governance & Risk',        desc: 'Responsible AI frameworks — compliant, explainable, and auditable.' },
]

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

// ── Full-width Mega Menu ──────────────────────────────────────────────────────

function MegaMenu({ label, items }) {
  return (
    <div
      className="fixed left-0 right-0 z-50 bg-white overflow-y-auto"
      style={{
        top: '64px',
        minHeight: '500px',      // ← YE BADLO — 420px, 500px, 600px
        borderTop: '2px solid var(--color-accent)',
        borderBottom: '1px solid var(--color-gray-200)',
        boxShadow: '0 16px 48px rgba(1,7,22,0.12)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">

        {/* Section label */}
        <p
          className="text-xs font-bold uppercase tracking-[0.16em] mb-6 m-0"
          style={{ color: 'var(--color-accent)' }}
        >
          {label}
        </p>

        {/* Items grid — 3 cols */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-1 mb-8">
          {items.map((item) => (
            <a
              key={item.label}
              href="#"
              className="group flex flex-col gap-1 px-4 py-4 rounded-xl no-underline transition-all duration-150"
              style={{ borderBottom: '1px solid var(--color-gray-100)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent-soft)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
            >
              <span
                className="text-sm font-semibold transition-colors duration-150 group-hover:text-red-600"
                style={{ color: 'var(--color-text-dark)' }}
              >
                {item.label}
              </span>
              <span
                className="text-xs leading-relaxed"
                style={{ color: 'var(--color-gray-500)' }}
              >
                {item.desc}
              </span>
            </a>
          ))}
        </div>

        {/* Footer link */}
        <div className="pt-4" style={{ borderTop: '1px solid var(--color-gray-200)' }}>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold no-underline transition-all duration-200 hover:gap-3"
            style={{ color: 'var(--color-accent)' }}
          >
            View all {label.toLowerCase()} →
          </a>
        </div>

      </div>
    </div>
  )
}

// ── Dropdown Item (desktop) ───────────────────────────────────────────────────

function DropdownItem({ label, items, scrolled }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 bg-transparent border-none cursor-pointer',
          open
            ? 'text-red-600'
            : scrolled
            ? 'text-gray-700 hover:text-red-600'
            : 'text-white hover:text-red-300'
        )}
      >
        {label}
        <ChevronDown open={open} />
      </button>

      {open && <MegaMenu label={label} items={items} />}
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
    'fixed top-0 inset-x-0 z-50 h-16 items-center justify-between',
    'px-6 md:px-10 lg:px-16 transition-all duration-300',
    scrolled
      ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
      : 'bg-transparent border-b border-transparent'
  )

  const mobileDropdowns = [
    { label: 'What We Offer', key: 'offer',    items: whatWeOfferItems },
    { label: 'Our Work',      key: 'work',     items: ourWorkItems     },
    { label: 'Insights',      key: 'insights', items: insightsItems    },
    { label: 'AI',            key: 'ai',       items: aiItems          },
  ]

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <nav className={cn(navBase, 'hidden md:flex')}>

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <LogoMark scrolled={scrolled} />
          <span className={cn('relative text-2xl font-black tracking-widest', scrolled ? 'text-gray-900' : 'text-white')}>
            THO
            <span className="text-red-500">T</span>
            NR
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-red-500 to-transparent" />
          </span>
        </a>

        {/* Nav links */}
        <div className="flex justify-around w-full">

          {/* Left — dropdown items */}
          <div className="flex items-center gap-1">
            <DropdownItem label="What We Offer" items={whatWeOfferItems} scrolled={scrolled} />
            <DropdownItem label="Our Work"      items={ourWorkItems}     scrolled={scrolled} />
            <DropdownItem label="Insights"      items={insightsItems}    scrolled={scrolled} />
            <DropdownItem label="AI"            items={aiItems}          scrolled={scrolled} />
          </div>

          {/* Right — simple links */}
          <div className="flex items-center gap-1">
            {['About', 'Contact', 'Join Us'].map((link) => (
              <a
                key={link}
                href="#"
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md no-underline transition-colors duration-150 hover:text-red-600',
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
            THO<span className="text-red-500">T</span>NR
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
          top: 64,
          bottom: 0,
          background: '#ffffff',
          borderTop: '2px solid var(--color-accent)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
          transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="flex flex-col gap-1 p-5 pb-12">

          {/* Dropdown items */}
          {mobileDropdowns.map(({ label, key, items }) => (
            <div key={key}>
              <button
                className={cn(
                  'w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 border-none cursor-pointer',
                  mobileExp === key ? 'text-red-600 bg-red-50' : 'text-gray-800 bg-transparent'
                )}
                onClick={() => setMobileExp(mobileExp === key ? null : key)}
              >
                {label}
                <ChevronDown open={mobileExp === key} />
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: mobileExp === key ? 600 : 0 }}
              >
                <div className="ml-4 mt-1 mb-1 flex flex-col gap-0.5">
                  {items.map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className="flex flex-col gap-0.5 px-4 py-2.5 rounded-lg no-underline transition-colors duration-150 hover:bg-red-50"
                    >
                      <span className="text-sm font-semibold text-gray-900">{item.label}</span>
                      <span className="text-xs text-gray-500">{item.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Simple links */}
          {['Industries', 'About', 'Contact', 'Join Us'].map((link) => (
            <a
              key={link}
              href="#"
              className="px-4 py-3 rounded-xl text-sm font-medium no-underline transition-colors duration-150 text-gray-700 hover:text-red-600"
            >
              {link}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#"
            className="mt-4 px-5 py-3 rounded-lg text-sm font-semibold text-center no-underline transition-colors duration-200 text-white"
            style={{ background: 'var(--color-accent)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent-dark)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-accent)' }}
          >
            Get Started
          </a>

        </div>
      </div>
    </>
  )
}

export default Navbar
