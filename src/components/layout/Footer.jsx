// ── Social icons ──────────────────────────────────────────────────────────────

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

// ── Footer logo ───────────────────────────────────────────────────────────────

function FooterLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 25,8 25,20 14,26 3,20 3,8" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" />
        <polygon points="14,7 21,11 21,19 14,23 7,19 7,11" fill="var(--color-accent)" opacity="0.2" />
        <circle cx="14" cy="14" r="3.5" fill="var(--color-accent)" />
      </svg>
      <span className="text-lg font-bold text-white tracking-tight">THOTNR</span>
    </div>
  )
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function FooterHeading({ children }) {
  return (
    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] mb-5 text-white">
      {children}
    </h4>
  )
}

function FooterLink({ href = '#', children }) {
  return (
    <a href={href} className="block text-sm py-0.5 no-underline leading-loose transition-colors duration-150 text-muted hover:text-accent">
      {children}
    </a>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

// Footer — dark section (section 10), 4-column brand / links / services / contact
function Footer() {
  return (
    <footer className="bg-dark border-t border-border-dk">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-5">
          <FooterLogo />
          <p className="text-sm leading-relaxed text-muted" style={{ maxWidth: 220 }}>
            Your strategic thought partner for AI transformation — from ambition to production.
          </p>
          <div className="flex gap-2.5 mt-1">
            {[
              { label: 'LinkedIn',  icon: <LinkedInIcon /> },
              { label: 'Twitter',   icon: <TwitterIcon /> },
              { label: 'Instagram', icon: <InstagramIcon /> },
            ].map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 no-underline border border-border-dk text-muted hover:border-accent hover:text-accent"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <FooterHeading>Quick Links</FooterHeading>
          <nav>
            {['Home', 'About Us', 'Industries', 'Insights', 'Careers', 'Contact'].map((l) => (
              <FooterLink key={l}>{l}</FooterLink>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <FooterHeading>Services</FooterHeading>
          <nav>
            {[
              'AI Strategy Consulting',
              'Custom AI Development',
              'Enterprise Integration',
              'NLP Solutions',
              'Predictive Analytics',
              'AI Training & Enablement',
            ].map((l) => (
              <FooterLink key={l}>{l}</FooterLink>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <FooterHeading>Get in Touch</FooterHeading>
          <div className="flex flex-col gap-4">
            {[
              { emoji: '✉',  text: 'hello@thotnr.com' },
              { emoji: '📞', text: '+1 (800) 246-8687' },
              { emoji: '📍', text: '340 Pine Street, San Francisco, CA 94104' },
            ].map(({ emoji, text }) => (
              <div key={text} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-0.5">{emoji}</span>
                <span className="leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-border-dk text-muted">
        <span>© {new Date().getFullYear()} THOTNR. All rights reserved.</span>
        <div className="flex items-center gap-5">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
            <a key={l} href="#" className="no-underline transition-colors duration-150 text-muted hover:text-accent">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
