import { Link } from 'react-router-dom'
import logoRed from '../../assets/images/thotnr_logo_red.png'

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
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

const socials = [
  { label: 'X',         icon: <XIcon /> },
  { label: 'LinkedIn',  icon: <LinkedInIcon /> },
  { label: 'YouTube',   icon: <YoutubeIcon /> },
  { label: 'Instagram', icon: <InstagramIcon /> },
]

const quickLinks = [
  { label: 'AI',           to: '/ai' },
  { label: 'Industries', to: '/industries' },
  { label: 'Services',     to: '/services' }
]

const offices = [
  {
    country: 'India',
    lines: ['Berger Delhi One, C-001/A2', 'Block B, Sector 16', 'Noida, Uttar Pradesh 201301'],
  },
  {
    country: 'South Africa',
    lines: ['424 Honeydew Road West', 'Sundowner, Johannesburg', 'Gauteng – 2188'],
  },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-6 md:px-6 lg:px-8" style={{ background: 'var(--color-primary)', boxShadow: '0 -8px 32px rgba(0,0,0,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-6 lg:px-8 pt-10 pb-6">

        {/* 4-column grid */}
        <div className="flex  md:grid-cols-4 gap-10 pb-4 justify-between">

          {/* Col 1 — Brand + tagline + socials */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2 no-underline w-fit">
              <img
                src={logoRed}
                alt="Thotnr"
                width={28}
                height={28}
                style={{ objectFit: 'contain' }}
              />
              <span
                className="text-lg font-bold tracking-tight"
                style={{ color: 'var(--color-text-primary)' }}
              >
                THOTNR
              </span>
            </Link>
            <p
              className="text-body leading-relaxed"
              style={{ color: 'var(--color-text-tertiary)', maxWidth: '200px' }}
            >
              Enterprise AI &amp; Technology Consultancy
            </p>
            <p className="flex items-center gap-2">
  <MailIcon /> sayhello@thotnr.com
</p>
            <div className="flex items-center gap-0.5">
              {socials.map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-full no-underline transition-all duration-200"
                  style={{ color: 'var(--color-text-tertiary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-highlight)'
                    e.currentTarget.style.background = 'rgba(230,57,70,0.07)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-tertiary)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Office India */}
          <div className=''>
            <p className="text-h4 text-[var(--color-highlight)] mb-3">India</p>
            {offices[0].lines.map((line) => (
              <p
                key={line}
                className="text-body leading-relaxed pb-0.5"
                style={{ color: 'var(--color-text-tertiary)' }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Col 3 — Office South Africa */}
          <div className=''>
            <p className="text-h4 text-[var(--color-highlight)] mb-3">South Africa</p>
            {offices[1].lines.map((line) => (
              <p
                key={line}
                className="text-body leading-relaxed pb-0.5"
                style={{ color: 'var(--color-text-tertiary)' }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Col 4 — Quick Links */}
          <div className=' flex flex-col items-start'>
            <p className="text-h4 text-[var(--color-highlight)] mb-3">Quick Links</p>
            <nav className="flex flex-col gap-1">
              {quickLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-body no-underline transition-colors duration-150 w-fit"
                  style={{ color: 'var(--color-text-secondary)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-highlight)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)' }}
                >
                  {label}
                </Link>
              ))}
            </nav>
            
          </div>
          

        </div>

        {/* Copyright — no divider */}
        <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
          © {year} THOTNR. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer