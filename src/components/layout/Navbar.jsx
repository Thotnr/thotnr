import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils'
import logoRed from '../../assets/images/thotnr_logo_red.png'
import logoWhite from '../../assets/images/thotnr_logo_white.png'


function LogoMark({ size = 28, scrolled }) {
  return (
    <img 
      src={scrolled ? logoRed :logoWhite} 
      alt="Logo" 
      style={{ 
        width: size, 
        height: size, 
        objectFit: 'contain' 
      }} 
    />
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
    cta: { label: 'view all services', to: '/services' },
  },
  right: {
    heading: 'industries',
    cols: [
      ['Banking & Financial Services', 'Healthcare & Life Sciences', 'Automotive', 'Energy & Utilities', 'Gaming & Entertainment', 'Insurance'],
      ['Media & Publishing', 'Non-profits & Education', 'Private Equity', 'Public Sector', 'Retail & CPG', 'Industry & Automation'],
      ['Smart Buildings', 'Software & Hi-tech', 'Sports AI', 'Telecommunications', 'Travel & Logistics'],
    ],
    cta: { label: 'view all industries', to: '/industries' },
  },
}

// function DropdownItem({ label, data, scrolled }) {
//   const [open, setOpen] = useState(false)
//   const linkStyle = { color: scrolled ? 'var(--color-text-primary)' : '#ffffff' }
//   const onEnter   = (e) => { e.currentTarget.style.color = 'var(--color-highlight)' }
//   const onLeave   = (e) => { e.currentTarget.style.color = scrolled ? 'var(--color-text-primary)' : '#ffffff' }

//   return (
//     <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
//       <button
//         className="flex items-center gap-1 px-3 py-2 text-body rounded-md bg-transparent border-none cursor-pointer transition-colors duration-150"
//         style={linkStyle}
//         onMouseEnter={onEnter}
//         onMouseLeave={onLeave}
//       >
//         {label}
//         <ChevronDown open={open} />
//       </button>

//       {open && (
//         <div
//           className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-2xl overflow-hidden z-50"
//           style={{
//             width: '780px',
//             background: 'var(--color-primary)',
//             boxShadow: '0 20px 60px rgba(0,0,0,0.14)',
//             border: '1px solid rgba(0,0,0,0.06)',
//           }}
//         >
//           <div className="grid grid-cols-2">
//             <div className="p-8 border-r border-black/5">
//               <p className="text-label mb-5" style={{ color: 'var(--color-text-tertiary)' }}>
//                 {data.left.heading}
//               </p>
//               <div className="flex flex-col gap-5">
//                 {data.left.items.map((item) => (
//                   <div key={item.label}>
//                     <p className="text-body font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
//                       {item.label}
//                     </p>
//                     <p className="text-body-sm" style={{ color: 'var(--color-text-tertiary)' }}>
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <Link
//                 to={data.left.cta.to}
//                 className="inline-block mt-6 text-body-sm font-medium no-underline"
//                 style={{ color: 'var(--color-highlight)' }}
//               >
//                 {data.left.cta.label}
//               </Link>
//             </div>
//             <div className="p-8">
//               <p className="text-label mb-5" style={{ color: 'var(--color-text-tertiary)' }}>
//                 {data.right.heading}
//               </p>
//               <div className="grid grid-cols-3 gap-x-4 gap-y-2">
//                 {data.right.cols.flat().map((item) => (
//                   <a
//                     key={item}
//                     href="#"
//                     className="text-body-sm no-underline transition-colors duration-150"
//                     style={{ color: 'var(--color-text-secondary)' }}
//                     onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-highlight)' }}
//                     onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)' }}
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//               <Link
//                 to={data.right.cta.to}
//                 className="inline-block mt-6 text-body-sm font-medium no-underline"
//                 style={{ color: 'var(--color-highlight)' }}
//               >
//                 {data.right.cta.label}
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

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

            <Link to={left.cta.to} className="mega-view-all" style={{ color: 'var(--color-ink)', marginTop: 'auto', paddingTop: '24px' }}>
              {left.cta.label}
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

            <Link to={right.cta.to} className="mega-view-all" style={{ color: 'var(--color-ink)', marginTop: 'auto', paddingTop: '24px' }}>
              {right.cta.label}
              <span className="mega-view-all-arrow">→</span>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}


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
              THOTNR
              
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

      {/* ── DRAWER (below lg) ── */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 z-40 overflow-y-auto',
          'transition-transform duration-300',
          mobileOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-[115%] pointer-events-none'
        )}
        style={{
          top: 64,
          
          background: 'var(--color-primary)',
          borderTop: '2px solid var(--color-highlight)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
          transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="flex flex-col px-5 py-3">
          {[
            { label: 'AI',            to: '/ai'           },
            { label: 'our work',      to: '/case-studies' },
            { label: 'insights',      to: '/insights'     },
            { label: 'services',      to: '/services'},
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
                <div style={{ height: '1px', background: 'var(--color-secondary)', opacity: 0.3 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar
