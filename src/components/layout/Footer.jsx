import logoRed from '../../assets/images/thotnr_logo_red.png'

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function Footer() {
  const links = [
    { label: 'Contact Us',       href: '#' },
    { label: 'Privacy Notice',   href: '#' },
    { label: 'Applicant Privacy',href: '#' },
    { label: 'Imprint',          href: '#' },
    { label: 'Sitemap',          href: '#' },
  ]

  const socials = [
    { label: 'Facebook',  icon: <FacebookIcon />,  href: '#' },
    { label: 'X',         icon: <XIcon />,         href: '#' },
    { label: 'LinkedIn',  icon: <LinkedInIcon />,  href: '#' },
    { label: 'YouTube',   icon: <YoutubeIcon />,   href: '#' },
    { label: 'Instagram', icon: <InstagramIcon />, href: '#' },
  ]

  return (
    <footer
      className="w-full border-t"
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 py-5"
      >

        {/* 1 — Logo + brand */}
        <a href="/" className="flex items-center gap-2 no-underline flex-shrink-0">
          <img
            src={logoRed}
            alt="Thotnr"
            width={24}
            height={24}
            style={{ objectFit: 'contain' }}
          />
          <span
            className="text-lg font-bold tracking-tight"
            style={{ color: 'var(--color-ink)' }}
          >
            THOTNR
          </span>
          <span
            className="text-sm ml-1"
            style={{ color: 'var(--color-muted)' }}
          >
            ©{new Date().getFullYear()}
          </span>
        </a>

        {/* 2 — Nav links */}
        <nav className="flex items-center gap-5 flex-wrap justify-center">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm no-underline transition-colors duration-150"
              style={{ color: 'var(--color-muted-dk)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted-dk)' }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* 3 — Social icons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {socials.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex items-center justify-center w-8 h-8 rounded-full no-underline transition-all duration-200"
              style={{
                color: 'var(--color-slate)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-accent)'
                e.currentTarget.style.background = 'rgb(var(--color-accent-rgb) / 0.06)'
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
    </footer>
  )
}

export default Footer
