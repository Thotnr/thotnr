const steps = [
  {
    number:  '01',
    title:   'Map the Reality',
    summary: 'We immerse in your organisation — not your decks.',
    detail:  'Deep-dive workshops, system audits, and stakeholder interviews surface the real data landscape, process bottlenecks, and cultural constraints that will determine whether any AI project lives or dies.',
  },
  {
    number:  '02',
    title:   'Find the AI Angle',
    summary: 'Not every problem needs AI. The ones that do deserve precision.',
    detail:  'We identify the highest-impact AI opportunities specific to your context — prioritising by ROI potential, implementation complexity, and organisational readiness, not industry buzzwords.',
  },
  {
    number:  '03',
    title:   'Build With Purpose',
    summary: 'Engineering for the messy middle, not the clean demo.',
    detail:  'Solutions are designed around your existing systems, data quality realities, and security requirements. Every architectural decision is made with handoff and maintainability in mind from day one.',
  },
  {
    number:  '04',
    title:   'Make It Real',
    summary: 'Production is the only metric that matters.',
    detail:  "We own deployment, integration testing, user acceptance, and team training. We don't consider a project complete until your people are running it confidently and outcomes are being tracked.",
  },
  {
    number:  '05',
    title:   'Evolve Together',
    summary: 'AI is not a one-time project. It is a capability.',
    detail:  'Post-launch monitoring, model drift detection, quarterly reviews, and continuous capability expansion ensure your AI investments compound over time rather than degrade.',
  },
]

function TimelineStep({ number, title, summary, detail, isLast, index }) {
  return (
    <>
      <style>{`
        @keyframes stepSlideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes numPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(225,29,72,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(225,29,72,0.08), 0 4px 20px rgba(225,29,72,0.25), inset 0 1px 0 rgba(255,255,255,0.1);
            transform: scale(1.06);
          }
        }
        @keyframes titleSlide {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .step-wrap-${index} {
          animation: stepSlideIn 0.7s cubic-bezier(0.4,0,0.2,1) ${0.1 + index * 0.12}s both;
        }
        .step-num-${index} {
          animation: numPulse ${3 + index * 0.4}s ease-in-out ${0.5 + index * 0.1}s infinite;
          text-shadow:
            1px 1px 0 #7f0020,
            2px 2px 0 #570015,
            3px 3px 6px rgba(0,0,0,0.4);
        }
        .step-title-${index} {
          animation: titleSlide 0.7s cubic-bezier(0.4,0,0.2,1) ${0.2 + index * 0.12}s both;
          text-shadow:
            0 1px 0 rgba(0,0,0,0.15),
            0 2px 6px rgba(0,0,0,0.08),
            0 4px 12px rgba(0,0,0,0.05);
        }
      `}</style>

      <div className={`step-wrap-${index} flex gap-8 relative`}>

        {/* Number + line */}
        <div className="flex flex-col items-center" style={{ minWidth: 72 }}>
          <div
            className={`step-num-${index} w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 z-10 border-2 border-accent text-accent bg-accent/[0.08]`}
            style={{
              textShadow: '1px 1px 0 #7f0020, 2px 2px 0 #570015, 3px 3px 6px rgba(0,0,0,0.4)',
            }}
          >
            {number}
          </div>
          {!isLast && (
            <div
              className="flex-1 w-px mt-2 bg-gradient-to-b from-accent/40 to-transparent"
              style={{ minHeight: 60 }}
            />
          )}
        </div>

        {/* Content */}
        <div className="pb-12">
          <h3
            className={`step-title-${index} text-xl font-semibold mb-1 text-gray-900`}
          >
            {title}
          </h3>
          <p className="text-base font-medium mb-3 text-accent">{summary}</p>
          <p className="text-sm lg:text-base leading-relaxed text-gray-600">{detail}</p>
        </div>

      </div>
    </>
  )
}

function ProcessTimeline() {
  return (
    <>
      <style>{`
        @keyframes eyebrowFade {
          from { opacity: 0; letter-spacing: 0.3em; }
          to   { opacity: 1; letter-spacing: 0.1em; }
        }
        @keyframes headSlide {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes aiThinkingPop {
          0%, 100% {
            text-shadow:
              1px 1px 0 #7f0020,
              2px 2px 0 #6b001a,
              3px 3px 0 #570015,
              4px 4px 0 #450010,
              5px 5px 0 #35000c,
              6px 6px 18px rgba(0,0,0,0.5),
              0 0 28px rgba(225,29,72,0.35),
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
              7px 7px 22px rgba(0,0,0,0.55),
              0 0 45px rgba(225,29,72,0.6),
              0 0 85px rgba(225,29,72,0.22),
              0 0 110px rgba(225,29,72,0.08);
            transform: translateZ(10px) scale(1.025);
          }
        }
        @keyframes restTextGlow {
          0%, 100% {
            text-shadow:
              1px 1px 0 rgba(0,0,0,0.2),
              2px 2px 4px rgba(0,0,0,0.1);
          }
          50% {
            text-shadow:
              1px 1px 0 rgba(0,0,0,0.2),
              2px 2px 8px rgba(0,0,0,0.15),
              0 0 16px rgba(1,7,22,0.06);
          }
        }
        .pt-eyebrow  { animation: eyebrowFade 0.8s ease 0.1s both; }
        .pt-headline { animation: headSlide   0.9s cubic-bezier(0.4,0,0.2,1) 0.3s both; }
        .pt-sub      { animation: headSlide   0.9s cubic-bezier(0.4,0,0.2,1) 0.5s both; }
        .ai-thinking {
          display: inline;
          color: var(--color-accent);
        
        }
        .rest-text {
          display: inline;
          animation: restTextGlow 4s ease-in-out 1.5s infinite;
          text-shadow:
            1px 1px 0 rgba(0,0,0,0.2),
            2px 2px 4px rgba(0,0,0,0.1);
        }
      `}</style>

      <section className="bg-white pt-20 pb-8 px-6 md:px-10 lg:px-16">
        <div className="mx-auto">

          {/* Header */}
          <div className="mb-16">
            <p className="pt-eyebrow text-xs font-semibold uppercase tracking-widest mb-3 text-accent">
              Our Methodology
            </p>

            <h2
              className="pt-headline text-4xl sm:text-4xl font-bold leading-tight text-gray-900 tracking-tight"
              style={{ transformStyle: 'preserve-3d', perspective: '600px' }}
            >
              <span className="rest-text">How </span>
              <span className="ai-thinking">AI Thinking</span>
              <span className="rest-text"> Works in Practice</span>
            </h2>

            <p className="pt-sub mt-4 text-lg lg:text-lg leading-relaxed text-gray-600">
              A five-phase engagement designed to move at the speed of your organisation while never sacrificing depth.
            </p>
          </div>

          {/* Timeline */}
          <div>
            {steps.map((step, i) => (
              <TimelineStep key={step.number} {...step} isLast={i === steps.length - 1} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default ProcessTimeline