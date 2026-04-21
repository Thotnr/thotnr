import { useState } from 'react'

// ── Mail icon ─────────────────────────────────────────────────────────────────

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

// Newsletter — Section 9 (dark). Subscription box for the AI Intelligence Brief.
// focus:border-accent replaces the prior useState(focused) pattern.
function Newsletter() {
  const [email, setEmail]      = useState('')
  const [submitted, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmit(true)
  }

  return (
    <section className="bg-dark py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-accent">
            Stay Informed
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Stay Ahead of the <span className="text-accent">AI Curve</span>
          </h2>
        </div>

        {/* Subscription box */}
        <div className="max-w-2xl mx-auto rounded-2xl p-8 lg:p-10 bg-card-dk border border-border-dk">

          {/* Box header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent/10 text-accent">
              <MailIcon />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">The AI Intelligence Brief</h3>
              <p className="text-xs text-muted">Weekly · No spam · Unsubscribe anytime</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-6 text-muted">
            Curated analysis of enterprise AI trends, case studies, and strategic frameworks —
            delivered every Tuesday to 8,000+ AI leaders and practitioners.
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150 bg-dark border border-border-dk text-white caret-accent placeholder:text-muted/50 focus:border-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg text-sm font-semibold whitespace-nowrap bg-accent text-white hover:bg-accent-dark transition-colors duration-200 cursor-pointer border-none"
              >
                Subscribe Free
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-3 px-5 py-4 rounded-lg text-sm font-medium bg-accent/10 border border-accent/30 text-accent">
              ✓ You're in. Check your inbox for a confirmation.
            </div>
          )}

          {/* Trust line */}
          <p className="text-xs mt-4 text-center text-muted">
            Join 8,000+ enterprise leaders from Goldman Sachs, Unilever, and Siemens.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
