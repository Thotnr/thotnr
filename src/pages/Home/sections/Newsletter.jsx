import { useState } from 'react'

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  )
}

function Newsletter() {
  const [email, setEmail]      = useState('')
  const [submitted, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmit(true)
  }

  return (
    <>
      <style>{`
        @keyframes eyebrowFade {
          from { opacity: 0; letter-spacing: 0.3em; }
          to   { opacity: 1; letter-spacing: 0.1em; }
        }
        @keyframes headSlideDown {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* AI Curve — deep red 3D pop */
        @keyframes aiCurvePop {
          0%, 100% {
            text-shadow:
              1px 1px 0 #7f0020,
              2px 2px 0 #6b001a,
              3px 3px 0 #570015,
              4px 4px 0 #450010,
              5px 5px 0 #35000c,
              6px 6px 18px rgba(0,0,0,0.6),
              0 0 28px rgba(225,29,72,0.4),
              0 0 55px rgba(225,29,72,0.12);
            transform: translateZ(0) scale(1);
          }
          50% {
            text-shadow:
              1px 1px 0 #9f0028,
              2px 2px 0 #8a0022,
              3px 3px 0 #7f0020,
              4px 4px 0 #6b001a,
              5px 5px 0 #570015,
              6px 6px 0 #450010,
              7px 7px 22px rgba(0,0,0,0.65),
              0 0 50px rgba(225,29,72,0.7),
              0 0 90px rgba(225,29,72,0.25),
              0 0 120px rgba(225,29,72,0.08);
            transform: translateZ(14px) scale(1.04);
          }
        }

        /* Box card animations */
        @keyframes boxSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanNews {
          0%   { top: 0%; opacity: 0.4; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes cornerBlink {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        @keyframes particleRise {
          0%   { transform: translateY(0) scale(1);    opacity: 0.9; }
          100% { transform: translateY(-80px) scale(0); opacity: 0; }
        }
        @keyframes mailPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(225,29,72,0.3); transform: scale(1); }
          50%       { box-shadow: 0 0 0 8px rgba(225,29,72,0.06); transform: scale(1.06); }
        }
        @keyframes inputGlow {
          0%, 100% { box-shadow: none; }
          50%       { box-shadow: 0 0 20px rgba(225,29,72,0.1); }
        }

        .nl-eyebrow  { animation: eyebrowFade  0.8s ease 0.1s both; }
        .nl-headline { animation: headSlideDown 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s both; }

        .ai-curve-word {
          display: inline;
          color: var(--color-accent);
          
        }

        /* Box */
        .nl-box {
          animation: boxSlideUp 0.9s cubic-bezier(0.4,0,0.2,1) 0.5s both;
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
          transform-style: preserve-3d;
          perspective: 1000px;
          position: relative;
          overflow: hidden;
        }
        .nl-box:hover {
          transform: translateY(-10px) rotateX(4deg) scale(1.015);
          box-shadow:
            0 30px 60px rgba(0,0,0,0.5),
            0 0 0 1px rgba(225,29,72,0.3),
            0 0 40px rgba(225,29,72,0.1);
        }
        .nl-box:hover .nl-scan { animation: scanNews 1.4s linear infinite; }
        .nl-scan {
          position: absolute; left: 0; right: 0; height: 1.5px;
          background: linear-gradient(to right, transparent, rgba(225,29,72,0.4), transparent);
          top: -100%; opacity: 0; pointer-events: none; z-index: 10;
        }
        .nl-corner-tl, .nl-corner-tr, .nl-corner-bl, .nl-corner-br {
          position: absolute; width: 14px; height: 14px;
          opacity: 0; transition: opacity 0.3s ease; z-index: 10;
        }
        .nl-box:hover .nl-corner-tl,
        .nl-box:hover .nl-corner-tr,
        .nl-box:hover .nl-corner-bl,
        .nl-box:hover .nl-corner-br { opacity: 1; animation: cornerBlink 1.5s ease-in-out infinite; }
        .nl-corner-tl { top: 10px; left: 10px; border-top: 1.5px solid var(--color-accent); border-left: 1.5px solid var(--color-accent); }
        .nl-corner-tr { top: 10px; right: 10px; border-top: 1.5px solid var(--color-accent); border-right: 1.5px solid var(--color-accent); }
        .nl-corner-bl { bottom: 10px; left: 10px; border-bottom: 1.5px solid var(--color-accent); border-left: 1.5px solid var(--color-accent); }
        .nl-corner-br { bottom: 10px; right: 10px; border-bottom: 1.5px solid var(--color-accent); border-right: 1.5px solid var(--color-accent); }
        .nl-particle {
          position: absolute; width: 3px; height: 3px; border-radius: 50%;
          background: var(--color-accent); opacity: 0; pointer-events: none; z-index: 10;
        }
        .nl-box:hover .nl-particle { animation: particleRise 1.6s ease-out infinite; }
        .np1 { bottom: 8%;  left: 15%; animation-delay: 0s; }
        .np2 { bottom: 6%;  left: 45%; animation-delay: 0.5s; }
        .np3 { bottom: 10%; left: 80%; animation-delay: 1s; }

        .mail-icon-wrap { animation: mailPulse 3s ease-in-out 1s infinite; }
        .nl-input:focus { animation: inputGlow 2s ease-in-out infinite; }
      `}</style>

      <section
        className="py-24 px-6 md:px-10 lg:px-16"
        style={{ background: 'var(--color-bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="nl-eyebrow text-xs font-semibold uppercase tracking-widest mb-3 text-accent">
              Stay Informed
            </p>
            <h2
              className="nl-headline text-3xl sm:text-4xl font-bold text-white tracking-tight"
              style={{ transformStyle: 'preserve-3d', perspective: '600px' }}
            >
              Stay Ahead of the{' '}
              <span className="ai-curve-word">AI Curve</span>
            </h2>
          </div>

          {/* Subscription box */}
          <div
            className="nl-box max-w-2xl mx-auto rounded-2xl p-8 lg:p-10 border"
            style={{
              background: 'var(--color-bg-card)',
              borderColor: 'var(--color-border-subtle)',
            }}
          >
            <div className="nl-scan" />
            <div className="nl-corner-tl" />
            <div className="nl-corner-tr" />
            <div className="nl-corner-bl" />
            <div className="nl-corner-br" />
            <div className="nl-particle np1" />
            <div className="nl-particle np2" />
            <div className="nl-particle np3" />

            {/* Box header */}
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div
                className="mail-icon-wrap w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(225,29,72,0.1)', color: 'var(--color-accent)' }}
              >
                <MailIcon />
              </div>
              <div>
                <h3
                  className="text-lg font-semibold"
                  style={{
                    color: 'var(--color-text-primary)',
                    textShadow: '1px 1px 0 rgba(0,0,0,0.5), 2px 2px 6px rgba(0,0,0,0.3)',
                  }}
                >
                  The AI Intelligence Brief
                </h3>
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                  Weekly · No spam · Unsubscribe anytime
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: 'var(--color-text-secondary)' }}>
              Curated analysis of enterprise AI trends, case studies, and strategic frameworks —
              delivered every Tuesday to 8,000+ AI leaders and practitioners.
            </p>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 relative z-10">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="nl-input flex-1 px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                  style={{
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-text-primary)',
                    caretColor: 'var(--color-accent)',
                  }}
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-lg text-sm font-semibold whitespace-nowrap text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 cursor-pointer border-none"
                  style={{
                    background: '#BE123C',
                    boxShadow: '0 4px 16px rgba(190,18,60,0.4)',
                  }}
                >
                  Subscribe Free
                </button>
              </form>
            ) : (
              <div
                className="flex items-center gap-3 px-5 py-4 rounded-lg text-sm font-medium relative z-10"
                style={{
                  background: 'rgba(225,29,72,0.1)',
                  border: '1px solid rgba(225,29,72,0.3)',
                  color: 'var(--color-accent)',
                }}
              >
                ✓ You're in. Check your inbox for a confirmation.
              </div>
            )}

            {/* Trust line */}
            <p className="text-xs mt-4 text-center relative z-10" style={{ color: 'var(--color-text-secondary)' }}>
              Join 8,000+ enterprise leaders from Goldman Sachs, Unilever, and Siemens.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Newsletter