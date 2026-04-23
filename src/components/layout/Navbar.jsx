import { useState, useEffect } from 'react'
import { cn } from '../../utils'
import logoWhite from '../../assets/images/thotnr_logo_white.png'
import logoRed from '../../assets/images/thotnr_logo_red.png'

// ── Dropdown Data ─────────────────────────────────────────────────────────────

const whatWeOfferData = {
  left: {
    heading: 'services',
    items: [
      { label: 'Digital Engineering',     desc: 'Value-driven and technology savvy. We future-proof your business.' },
      { label: 'Intelligent Enterprise',  desc: 'Helping you master your critical business applications, empowering your business to thrive.' },
      { label: 'Experience and Design',   desc: 'Harness the power of design to drive a whole new level of success.' },
    ],
    viewAll: 'view all services',
  },
  right: {
    heading: 'industries',
    cols: [
      ['Banking & Financial Services', 'Healthcare & Life Sciences', 'Automotive', 'Energy & Utilities', 'Gaming & Entertainment', 'Insurance'],
      ['Media & Publishing', 'Non-profits & Education', 'Private Equity', 'Public Sector', 'Retail & CPG', 'Industry & Automation'],
      ['Smart Buildings', 'Software & Hi-tech', 'Sports AI', 'Telecommunications', 'Travel & Logistics'],
    ],
    viewAll: 'view all industries',
  },
}

const ourWorkData = {
  left: {
    heading: 'our work',
    items: [
      { label: 'Nykaa — Quality Engineering',      desc: 'Redefined seller portal testing at e-commerce scale.' },
      { label: 'Standard Bank — Architecture',     desc: 'Enterprise architecture transformation across Southern Africa.' },
      { label: 'Tata International — Automation',  desc: 'Intelligent process automation for automotive supply chain.' },
    
    ],
    viewAll: 'view all case studies',
  },
  right: {
    heading: 'industries served',
    cols: [
      ['Banking & Finance', 'Healthcare', 'E-commerce & Retail', 'Automotive', 'Energy & Utilities'],
      ['Financial Services', 'Logistics & Supply Chain', 'Education', 'Insurance', 'Media & Publishing'],
      ['SaaS & Software', 'Public Sector', 'Travel & Hospitality'],
    ],
    viewAll: 'view all industries',
  },
}

const insightsData = {
  left: {
    heading: 'insights',
    items: [
      { label: 'Why AI Projects Fail Before They Start',   desc: 'The mismatch between leadership expectations and enterprise reality.' },
      { label: 'The ROI of Intelligent Automation',        desc: 'Measuring second and third-order returns from automation in 2025.' },
      { label: 'Building an AI-Ready Organisation',        desc: 'The operating muscle companies need to absorb AI capability.' },
    
    ],
    viewAll: 'view all insights',
  },
  right: {
    heading: 'topics',
    cols: [
      ['AI Strategy', 'Generative AI', 'Machine Learning', 'Data Engineering', 'MLOps'],
      ['Enterprise Architecture', 'Cloud & DevOps', 'Cybersecurity', 'Digital Transformation', 'Product Engineering'],
      ['UX & Design', 'Leadership & Culture', 'Events & Webinars'],
    ],
    viewAll: 'view all topics',
  },
}

const aiData = {
  left: {
    heading: 'AI solutions',
    items: [
      { label: 'AI Strategy & Roadmap',      desc: 'Long-term AI vision aligned to your business goals and data maturity.' },
      { label: 'Generative AI Engineering',  desc: 'Production-ready GenAI — RAG systems, copilots, and LLM integrations.' },
      { label: 'Intelligent Automation',     desc: 'Replace manual workflows with context-aware AI-powered processes.' },
      
    ],
    viewAll: 'view all AI services',
  },
  right: {
    heading: 'AI by industry',
    cols: [
      ['AI in Banking', 'AI in Healthcare', 'AI in Retail', 'AI in Manufacturing', 'AI in Logistics'],
      ['AI in Insurance', 'AI in Energy', 'AI in Media', 'AI in Education', 'AI in Public Sector'],
      ['AI Governance', 'Responsible AI', 'AI Readiness Assessment'],
    ],
    viewAll: 'view all AI by industry',
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

// ── Nagarro-style Mega Menu ───────────────────────────────────────────────────

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
        .mega-right-link { transition: color 0.15s ease; color: #334155; }
        .mega-right-link:hover { color: var(--color-accent); }
        .mega-view-all {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 14px; font-weight: 500;
          color: #334155; text-decoration: none;
          transition: color 0.15s ease;
          margin-top: 24px;
        }
        .mega-view-all:hover { color: var(--color-accent); }
        .mega-view-all-arrow {
          display: inline-block;
          transition: transform 0.2s ease;
        }
        .mega-view-all:hover .mega-view-all-arrow { transform: translateX(4px); }
      `}</style>

      <div
        className="mega-menu-wrap fixed left-0 right-0 z-50 bg-white"
        style={{
          top: '64px',
          borderBottom: '1px solid #e2e8f0',
          boxShadow: '0 12px 40px rgba(1,7,22,0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 flex gap-0">

          {/* LEFT — services/items with desc */}
          <div className="w-[380px] flex-shrink-0 pr-12" style={{ borderRight: '1px solid #e2e8f0' }}>
            <h3
              className="text-2xl font-light mb-8 m-0"
              style={{ color: '#0f172a', letterSpacing: '-0.3px' }}
            >
              {left.heading}
            </h3>

            <div className="flex flex-col gap-1 pt-4">
              {left.items.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="mega-left-item flex flex-col gap-0.5 py-3 no-underline"
                  style={{ borderBottom: '1px solid #f1f5f9' }}
                >
                  <span
                    className="mega-item-label text-sm font-semibold"
                    style={{ color: '#0f172a' }}
                  >
                    {item.label}
                  </span>
                  <span className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
                    {item.desc}
                  </span>
                </a>
              ))}
            </div>

            <a href="#" className="mega-view-all"
            style={{ color: '#0f172a' }}
            >
              {left.viewAll}
              <span className="mega-view-all-arrow">→</span>
            </a>
          </div>

          {/* RIGHT — industry/topic columns */}
          <div className="flex-1 pl-12">
            <h3
              className="text-2xl font-light mb-8"
              style={{ color: '#0f172a', letterSpacing: '-0.3px' }}
            >
              {right.heading}
            </h3>

            <div className="grid grid-cols-3 gap-y-0 pt-4">
              {right.cols.map((col, ci) => (
                <div key={ci} className="flex flex-col gap-0">
                  {col.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="mega-right-link py-1.5 text-sm no-underline"
                      style={{ borderBottom: '1px solid #f1f5f9' }}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <a href="#" className="mega-view-all"
            style={{ color: '#0f172a' }}
            >
              {right.viewAll}
              <span className="mega-view-all-arrow">→</span>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

// ── Dropdown Item ─────────────────────────────────────────────────────────────

function DropdownItem({ label, data, scrolled }) {
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

      {open && <MegaMenu data={data} />}
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
    { label: 'What We Offer', key: 'offer',    items: whatWeOfferData.left.items },
    { label: 'Our Work',      key: 'work',     items: ourWorkData.left.items     },
    { label: 'Insights',      key: 'insights', items: insightsData.left.items    },
    { label: 'AI',            key: 'ai',       items: aiData.left.items          },
  ]

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
            <DropdownItem label="What We Offer" data={whatWeOfferData} scrolled={scrolled} />
            <DropdownItem label="Our Work"      data={ourWorkData}     scrolled={scrolled} />
            <DropdownItem label="Insights"      data={insightsData}    scrolled={scrolled} />
            <DropdownItem label="AI"            data={aiData}          scrolled={scrolled} />
          </div>

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
          top: 64, bottom: 0,
          background: '#ffffff',
          borderTop: '2px solid var(--color-accent)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
          transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="flex flex-col gap-1 p-5 pb-12">
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

          {['Industries', 'About', 'Contact', 'Join Us'].map((link) => (
            <a
              key={link}
              href="#"
              className="px-4 py-3 rounded-xl text-sm font-medium no-underline transition-colors duration-150 text-gray-700 hover:text-red-600"
            >
              {link}
            </a>
          ))}

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
