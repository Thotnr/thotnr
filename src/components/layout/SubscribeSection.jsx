import { useState } from 'react'

function SubscribeSection() {
  const [focused, setFocused] = useState(false)
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-tertiary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — headline + description */}
          <div>
            <h2
              className="text-h1 text-white mt-3 leading-tight"
            >
              Stay up to date with insights from Thotnr
            </h2>
            <p className="text-body-lg mt-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Industry perspectives, AI research, and enterprise insights — delivered to your inbox.
            </p>
          </div>

          {/* RIGHT — form */}
          <div className="flex flex-col gap-6">

            {/* Email input */}
            <div
              className="flex items-center rounded-full px-2 py-2 transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: focused
                  ? '1.5px solid rgba(255,255,255,0.75)'
                  : '1.5px solid rgba(255,255,255,0.25)',
                boxShadow: focused
                  ? '0 0 0 3px rgba(255,255,255,0.12)'
                  : 'none',
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
                style={{ color: '#ffffff' }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
              <button
                className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex-shrink-0"
                style={{ background: 'var(--color-secondary)', color: '#fff' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-highlight)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-secondary)' }}
              >
                Subscribe
              </button>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-4">

              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  className="flex-shrink-0 mt-0.5 w-5 h-5 rounded flex items-center justify-center transition-all duration-150"
                  style={{
                    background: checked1 ? 'var(--color-accent)' : 'transparent',
                    border: checked1 ? '2px solid var(--color-accent)' : '2px solid rgba(255,255,255,0.35)',
                  }}
                  onClick={() => setChecked1(v => !v)}
                >
                  {checked1 && (
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                      <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Yes, I would like to receive marketing communications from Thotnr.
                  I can unsubscribe at any time.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  className="flex-shrink-0 mt-0.5 w-5 h-5 rounded flex items-center justify-center transition-all duration-150"
                  style={{
                    background: checked2 ? 'var(--color-accent)' : 'transparent',
                    border: checked2 ? '2px solid var(--color-accent)' : '2px solid rgba(255,255,255,0.35)',
                  }}
                  onClick={() => setChecked2(v => !v)}
                >
                  {checked2 && (
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                      <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  I agree to the{' '}
                  <a
                    href="#"
                    style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}
                  >
                    Privacy Notice
                  </a>{' '}
                  and to the handling of my personal information.
                  <span style={{ color: 'var(--color-accent)' }}> *</span>
                </span>
              </label>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
