const outcomes = [
  'Cost Reduction',
  'Accelerated Time to Market',
  'Enhanced Customer Experience',
  'AI Readiness Assessment',
  'Risk Mitigation',
  'Competitive Differentiation',
]

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
      <circle cx="10" cy="10" r="10" fill="var(--color-accent)" opacity="0.15"/>
      <path d="M6 10l3 3 5-5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CTASplit() {
  return (
    <>
      <style>{`
        @keyframes eyebrowFade {
          from { opacity: 0; letter-spacing: 0.3em; }
          to   { opacity: 1; letter-spacing: 0.1em; }
        }
        @keyframes headSlideLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes subFade {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes achievePop {
          0%, 100% {
            text-shadow:
              1px 1px 0 var(--color-accent-sh2),
              2px 2px 0 var(--color-accent-sh3),
              3px 3px 0 var(--color-accent-sh4),
              4px 4px 0 var(--color-accent-sh5),
              5px 5px 0 var(--color-accent-sh6),
              6px 6px 18px rgba(0,0,0,0.4),
              0 0 28px rgb(var(--color-accent-rgb) / 0.35),
              0 0 55px rgb(var(--color-accent-rgb) / 0.12);
            transform: translateZ(0) scale(1);
          }
          50% {
            text-shadow:
              1px 1px 0 var(--color-accent-sh0),
              2px 2px 0 var(--color-accent-sh1),
              3px 3px 0 var(--color-accent-sh2),
              4px 4px 0 var(--color-accent-sh3),
              5px 5px 0 var(--color-accent-sh4),
              6px 6px 0 var(--color-accent-sh5),
              7px 7px 22px rgba(0,0,0,0.5),
              0 0 45px rgb(var(--color-accent-rgb) / 0.65),
              0 0 85px rgb(var(--color-accent-rgb) / 0.22),
              0 0 110px rgb(var(--color-accent-rgb) / 0.08);
            transform: translateZ(12px) scale(1.03);
          }
        }
        @keyframes scanRight {
          0%   { top: 0%; opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes listItemIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes checkPop {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.2); }
        }
        @keyframes cornerBlink {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        @keyframes particleRise {
          0%   { transform: translateY(0) scale(1);    opacity: 0.8; }
          100% { transform: translateY(-70px) scale(0); opacity: 0; }
        }
        .cta-eyebrow  { animation: eyebrowFade  0.8s ease 0.1s both; }
        .cta-headline { animation: headSlideLeft 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s both; }
        .cta-sub      { animation: subFade 0.8s ease 0.5s both; }
        .cta-btn      { animation: subFade 0.8s ease 0.7s both; }
        .achieve-word {
          display: inline-block;
          color: var(--color-accent);
          
        }
        .outcomes-card {
          animation: cardIn 0.8s cubic-bezier(0.4,0,0.2,1) 0.4s both;
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
          transform-style: preserve-3d;
          perspective: 900px;
          position: relative;
          overflow: hidden;
        }
        .outcomes-card:hover {
          transform: translateY(-12px) rotateX(5deg) rotateY(-4deg) scale(1.02);
          box-shadow:
            0 28px 56px rgba(0,0,0,0.15),
            0 0 0 1px rgb(var(--color-accent-rgb) / 0.25),
            0 0 40px rgb(var(--color-accent-rgb) / 0.07);
        }
        .outcomes-card:hover .scan-out { animation: scanRight 1.3s linear infinite; }
        .scan-out {
          position: absolute; left: 0; right: 0; height: 1.5px;
          background: linear-gradient(to right, transparent, rgb(var(--color-accent-rgb) / 0.35), transparent);
          top: -100%; opacity: 0; pointer-events: none; z-index: 10;
        }
        .oc-tl, .oc-tr, .oc-bl, .oc-br {
          position: absolute; width: 12px; height: 12px;
          opacity: 0; transition: opacity 0.3s ease; z-index: 10;
        }
        .outcomes-card:hover .oc-tl,
        .outcomes-card:hover .oc-tr,
        .outcomes-card:hover .oc-bl,
        .outcomes-card:hover .oc-br { opacity: 1; animation: cornerBlink 1.5s ease-in-out infinite; }
        .oc-tl { top: 8px; left: 8px; border-top: 1.5px solid var(--color-accent); border-left: 1.5px solid var(--color-accent); }
        .oc-tr { top: 8px; right: 8px; border-top: 1.5px solid var(--color-accent); border-right: 1.5px solid var(--color-accent); }
        .oc-bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid var(--color-accent); border-left: 1.5px solid var(--color-accent); }
        .oc-br { bottom: 8px; right: 8px; border-bottom: 1.5px solid var(--color-accent); border-right: 1.5px solid var(--color-accent); }
        .outcome-particle {
          position: absolute; width: 2.5px; height: 2.5px; border-radius: 50%;
          background: var(--color-accent); opacity: 0; pointer-events: none; z-index: 10;
        }
        .outcomes-card:hover .outcome-particle { animation: particleRise 1.6s ease-out infinite; }
        .op1 { bottom: 10%; left: 20%; animation-delay: 0s; }
        .op2 { bottom: 8%;  left: 50%; animation-delay: 0.5s; }
        .op3 { bottom: 12%; left: 78%; animation-delay: 1s; }
        .outcome-item { opacity: 0; animation: listItemIn 0.6s ease both; }
        .outcome-item:nth-child(1) { animation-delay: 0.5s; }
        .outcome-item:nth-child(2) { animation-delay: 0.62s; }
        .outcome-item:nth-child(3) { animation-delay: 0.74s; }
        .outcome-item:nth-child(4) { animation-delay: 0.86s; }
        .outcome-item:nth-child(5) { animation-delay: 0.98s; }
        .outcome-item:nth-child(6) { animation-delay: 1.1s; }
        .outcome-item:hover .check-icon { animation: checkPop 0.4s ease; }
        .outcome-item:hover .outcome-text { color: var(--color-accent); }
      `}</style>

      <section className="bg-white py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="cta-eyebrow t-eyebrow mb-4 text-accent">
              Let's Build Together
            </p>

            <h2
              className="cta-headline t-headline text-ink mb-6"
              style={{ transformStyle: 'preserve-3d', perspective: '600px' }}
            >
              What can we help you achieve?
            </h2>

            <p className="cta-sub t-sub mb-8 text-muted-dk">
              Whether you're at the earliest stages of AI exploration or trying to rescue a stalled
              initiative, we bring the structure, experience, and candour to move things forward.
            </p>

            <a
              href="#"
  className="cta-btn inline-flex items-center mt-6 px-5 py-2.5 rounded-lg t-label text-black transition-all duration-200 hover:-translate-y-0.5"
  style={{
    background: 'rgb(var(--color-accent-light-rgb) / 0.03)',
    border: '1px solid var(--color-accent-light)',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = 'rgb(var(--color-accent-light-rgb) / 0.07)'
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = 'rgb(var(--color-accent-light-rgb) / 0.03)'
  }}
>
  Start a Conversation
</a>
          </div>

          {/* Right */}
          <div className="outcomes-card rounded-2xl p-8 bg-surface-muted border border-border">
            <div className="scan-out" />
            <div className="oc-tl" />
            <div className="oc-tr" />
            <div className="oc-bl" />
            <div className="oc-br" />
            <div className="outcome-particle op1" />
            <div className="outcome-particle op2" />
            <div className="outcome-particle op3" />

            <p className="t-eyebrow mb-6 text-slate relative z-10">
              Outcomes you can expect
            </p>

            <ul className="flex flex-col gap-4 relative z-10">
              {outcomes.map((item) => (
                <li key={item} className="outcome-item flex items-center gap-3 cursor-default">
                  <div className="check-icon"><CheckIcon /></div>
                  <span className="outcome-text t-body text-ink transition-colors duration-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </>
  )
}

export default CTASplit
