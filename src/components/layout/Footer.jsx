import { Link } from 'react-router-dom'
import logoRed from '../../assets/images/thotnr_logo_red.png'

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  )
}

const navLinks = [
  { label: 'About',        to: '/about' },
  { label: 'Contact',      to: '/contact' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Insights',     to: '/insights' },
  { label: 'AI',           to: '/ai' },
  { label: 'Industry',     to: '/industries' },
]

const offices = [
  {
    country: 'India',
    lines: ['Berger Delhi One, C-001/A2', 'Block B, Sector 16', 'Noida, Uttar Pradesh', 'India – 201301'],
  },
  {
    country: 'South Africa',
    lines: ['424 Honeydew Road West', 'Sundowner, Johannesburg', 'Gauteng – 2188'],
  },
]

const socials = [
  { label: 'Facebook',  icon: <FacebookIcon /> },
  { label: 'X',         icon: <XIcon /> },
  { label: 'LinkedIn',  icon: <LinkedInIcon /> },
  { label: 'YouTube',   icon: <YoutubeIcon /> },
  { label: 'Instagram', icon: <InstagramIcon /> },
]

function SectionLabel({ children }) {
  return (
    <p
      className="text-xs font-semibold uppercase tracking-widest mb-0"
      style={{ color: 'var(--color-highlight)' }}
    >
      {children}
    </p>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="w-full"
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 — Brand + social */}
        <div className="flex flex-col gap-6">
          <div>
            <a href="/" className="flex items-center gap-2 no-underline mb-3">
              <img
                src={logoRed}
                alt="Thotnr"
                width={30}
                height={30}
                style={{ objectFit: 'contain' }}
              />
              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: 'var(--color-ink)' }}
              >
                THOTNR
              </span>
            </a>
            <p
              className="text-sm leading-relaxed max-w-[220px]"
              style={{ color: 'var(--color-muted)' }}
            >
              Enterprise AI &amp; Technology Consultancy
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-1">
            {socials.map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex items-center justify-center w-8 h-8 rounded-full no-underline transition-all duration-200"
                style={{ color: 'var(--color-slate)', background: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-highlight)'
                  e.currentTarget.style.background = 'rgba(230,57,70,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-slate)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Offices */}
        <div className="flex flex-col gap-4">
          {offices.map(({ country, lines }) => (
            <div key={country}>
              <SectionLabel>{country}</SectionLabel>
              <div
                className="mb-1 h-px w-full"
                style={{ background: 'var(--color-border)' }}
              />
              {lines.map((line) => (
                <p
                  key={line}
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-muted-dk)' }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Col 3 — Navigation */}
        <div>
          <SectionLabel>Quick Links</SectionLabel>
          <div
            className="mb-3 h-px w-full"
            style={{ background: 'var(--color-border)' }}
          />
          <nav className="flex flex-col gap-3">
            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-sm no-underline transition-colors duration-150 w-fit"
                style={{ color: 'var(--color-muted-dk)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-highlight)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted-dk)' }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

      </div>

      {/* Bottom copyright strip */}
      <div
        className="border-t"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-4">
          <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
            © {year} THOTNR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
