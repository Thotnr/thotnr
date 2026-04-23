function ProblemStatement() {
  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes redGlowPulse {
          0%, 100% {
            text-shadow:
              1px 1px 0 var(--color-accent-sh2),
              2px 2px 0 var(--color-accent-sh3),
              3px 3px 0 var(--color-accent-sh4),
              4px 4px 10px rgba(0,0,0,0.3),
              0 0 20px rgb(var(--color-accent-rgb) / 0.25);
          }
          50% {
            text-shadow:
              1px 1px 0 var(--color-accent-sh0),
              2px 2px 0 var(--color-accent-sh2),
              3px 3px 0 var(--color-accent-sh3),
              4px 4px 12px rgba(0,0,0,0.4),
              0 0 40px rgb(var(--color-accent-rgb) / 0.45),
              0 0 60px rgb(var(--color-accent-rgb) / 0.15);
          }
        }
        @keyframes whitePop {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes eyebrowFade {
          from { opacity: 0; letter-spacing: 0.3em; }
          to   { opacity: 1; letter-spacing: 0.1em; }
        }
        .ps-eyebrow  { animation: eyebrowFade 0.8s ease 0.1s both; }
        .ps-headline { animation: slideInLeft 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s both; }
        .ps-closing  { animation: slideInUp   0.9s cubic-bezier(0.4,0,0.2,1) 0.6s both; }
        .ps-red-headline {
          display: inline;
        
        }
        .ps-red-closing {
          display: inline;
          animation: redGlowPulse 3.5s ease-in-out 2s infinite;
          text-shadow:
            1px 1px 0 var(--color-accent-sh2),
            2px 2px 0 var(--color-accent-sh3),
            3px 3px 8px rgba(0,0,0,0.25),
            0 0 16px rgb(var(--color-accent-rgb) / 0.2);
        }
        .ps-dark-text {
          text-shadow:
            0 1px 0 rgba(0,0,0,0.15),
            0 2px 4px rgba(0,0,0,0.08);
        }
      `}</style>

      <section className="bg-white py-20 px-6 md:px-10 lg:px-16">
        <div className="mx-auto">

          {/* Eyebrow */}
          <p className="ps-eyebrow text-xs font-semibold uppercase tracking-widest mb-4 text-accent">
            The Reality Check
          </p>

          {/* Headline */}
          <h2 className="ps-headline ps-dark-text text-4xl sm:text-5xl font-bold leading-tight mb-10 text-gray-900 tracking-tight">
            Most enterprises are drowning in AI pilots that never reach production.
          </h2>

          {/* Closing statement */}
          <div className="ps-closing pt-10 border-t border-border">
            <p className="ps-dark-text text-xl lg:text-2xl font-semibold leading-snug text-gray-900">
              We don't just build AI solutions. We make them work inside your real organisation.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default ProblemStatement