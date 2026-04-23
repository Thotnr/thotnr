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
    title:   'Build, Ship & Evolve',
    summary: 'Engineering for long-term production capability, not just a clean demo.',
    detail:  'We handle end-to-end deployment, infrastructure integration, and ongoing governance. From day one, we monitor performance and train your team to ensure your AI scales reliably and compounds in value.',
  },
]

// function TimelineStep({ number, title, summary, detail, isLast, index }) {
//   return (
//     <>
//       <style>{`
//         @keyframes stepSlideIn {
//           from { opacity: 0; transform: translateX(-30px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes numPulse {
//           0%, 100% {
//             box-shadow: 0 0 0 0 rgb(var(--color-accent-rgb) / 0.3), inset 0 1px 0 rgba(255,255,255,0.1);
//             transform: scale(1);
//           }
//           50% {
//             box-shadow: 0 0 0 8px rgb(var(--color-accent-rgb) / 0.08), 0 4px 20px rgb(var(--color-accent-rgb) / 0.25), inset 0 1px 0 rgba(255,255,255,0.1);
//             transform: scale(1.06);
//           }
//         }
//         @keyframes titleSlide {
//           from { opacity: 0; transform: translateX(-20px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         .step-wrap-${index} {
//           animation: stepSlideIn 0.7s cubic-bezier(0.4,0,0.2,1) ${0.1 + index * 0.12}s both;
//         }
//         .step-num-${index} {
//           animation: numPulse ${3 + index * 0.4}s ease-in-out ${0.5 + index * 0.1}s infinite;
//           text-shadow:
//             1px 1px 0 var(--color-accent-sh2),
//             2px 2px 0 var(--color-accent-sh4),
//             3px 3px 6px rgba(0,0,0,0.4);
//         }
//         .step-title-${index} {
//           animation: titleSlide 0.7s cubic-bezier(0.4,0,0.2,1) ${0.2 + index * 0.12}s both;
//           text-shadow:
//             0 1px 0 rgba(0,0,0,0.15),
//             0 2px 6px rgba(0,0,0,0.08),
//             0 4px 12px rgba(0,0,0,0.05);
//         }
//       `}</style>

//       <div className={`step-wrap-${index} flex gap-8 relative`}>

//         {/* Number + line */}
//         <div className="flex flex-col items-center" style={{ minWidth: 72 }}>
//           <div
//             className={`step-num-${index} w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 z-10 border-2 border-accent text-accent bg-accent/[0.08]`}
//             style={{
//               textShadow: '1px 1px 0 var(--color-accent-sh2), 2px 2px 0 var(--color-accent-sh4), 3px 3px 6px rgba(0,0,0,0.4)',
//             }}
//           >
//             {number}
//           </div>
//           {!isLast && (
//             <div
//               className="flex-1 w-px mt-2 bg-gradient-to-b from-accent/40 to-transparent"
//               style={{ minHeight: 60 }}
//             />
//           )}
//         </div>

//         {/* Content */}
//         <div className="pb-12">
//           <h3
//             className={`step-title-${index} t-title mb-1 text-ink`}
//           >
//             {title}
//           </h3>
//           <p className="t-label mb-3 text-accent">{summary}</p>
//           <p className="t-body text-muted-dk">{detail}</p>
//         </div>

//       </div>
//     </>
//   )
// }

// function ProcessTimeline() {
//   return (
//     <>
//       <style>{`
//         @keyframes eyebrowFade {
//           from { opacity: 0; letter-spacing: 0.3em; }
//           to   { opacity: 1; letter-spacing: 0.1em; }
//         }
//         @keyframes headSlide {
//           from { opacity: 0; transform: translateY(-20px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes aiThinkingPop {
//           0%, 100% {
//             text-shadow:
//               1px 1px 0 var(--color-accent-sh2),
//               2px 2px 0 var(--color-accent-sh3),
//               3px 3px 0 var(--color-accent-sh4),
//               4px 4px 0 var(--color-accent-sh5),
//               5px 5px 0 var(--color-accent-sh6),
//               6px 6px 18px rgba(0,0,0,0.5),
//               0 0 28px rgb(var(--color-accent-rgb) / 0.35),
//               0 0 55px rgb(var(--color-accent-rgb) / 0.12);
//             transform: translateZ(0) scale(1);
//           }
//           50% {
//             text-shadow:
//               1px 1px 0 var(--color-accent-sh0),
//               2px 2px 0 var(--color-accent-sh1),
//               3px 3px 0 var(--color-accent-sh2),
//               4px 4px 0 var(--color-accent-sh3),
//               5px 5px 0 var(--color-accent-sh4),
//               6px 6px 0 var(--color-accent-sh5),
//               7px 7px 22px rgba(0,0,0,0.55),
//               0 0 45px rgb(var(--color-accent-rgb) / 0.6),
//               0 0 85px rgb(var(--color-accent-rgb) / 0.22),
//               0 0 110px rgb(var(--color-accent-rgb) / 0.08);
//             transform: translateZ(10px) scale(1.025);
//           }
//         }
//         @keyframes restTextGlow {
//           0%, 100% {
//             text-shadow:
//               1px 1px 0 rgba(0,0,0,0.2),
//               2px 2px 4px rgba(0,0,0,0.1);
//           }
//           50% {
//             text-shadow:
//               1px 1px 0 rgba(0,0,0,0.2),
//               2px 2px 8px rgba(0,0,0,0.15),
//               0 0 16px rgb(var(--color-ink-rgb) / 0.06);
//           }
//         }
//         .pt-eyebrow  { animation: eyebrowFade 0.8s ease 0.1s both; }
//         .pt-headline { animation: headSlide   0.9s cubic-bezier(0.4,0,0.2,1) 0.3s both; }
//         .pt-sub      { animation: headSlide   0.9s cubic-bezier(0.4,0,0.2,1) 0.5s both; }
//         .ai-thinking {
//           display: inline;
//           color: var(--color-accent);
        
//         }
//         .rest-text {
//           display: inline;
//           animation: restTextGlow 4s ease-in-out 1.5s infinite;
//           text-shadow:
//             1px 1px 0 rgba(0,0,0,0.2),
//             2px 2px 4px rgba(0,0,0,0.1);
//         }
//       `}</style>

//       <section className="bg-white pt-20 pb-8 px-6 md:px-10 lg:px-16">
//         <div className="mx-auto">

//           {/* Header */}
//           <div className="mb-16">
//             <p className="pt-eyebrow t-eyebrow mb-3 text-accent">
//               Our Methodology
//             </p>

//             <h2
//               className="pt-headline t-headline text-ink"
//               style={{ transformStyle: 'preserve-3d', perspective: '600px' }}
//             >
//               <span className="rest-text">How </span>
//               <span className="ai-thinking">AI Thinking</span>
//               <span className="rest-text"> Works in Practice</span>
//             </h2>

//             <p className="pt-sub t-sub mt-4 text-muted-dk">
//               A five-phase engagement designed to move at the speed of your organisation while never sacrificing depth.
//             </p>
//           </div>

//           {/* Timeline */}
//           <div>
//             {steps.map((step, i) => (
//               <TimelineStep key={step.number} {...step} isLast={i === steps.length - 1} index={i} />
//             ))}
//           </div>

//         </div>
//       </section>
//     </>
//   )
// }


import { Brain, Search, Rocket } from "lucide-react"

const icons = [Brain, Search, Rocket]

function ProcessTimeline() {
  return (
    <section className="bg-surface pt-20 pb-16 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="t-eyebrow mb-3 text-accent">
            Our Methodology
          </p>

          <h2 className="t-headline text-ink">
            How <span className="text-accent">AI Thinking</span> Works in Practice
          </h2>

          <p className="t-sub mt-4 text-muted-dk">
            A five-phase engagement designed to move at the speed of your organisation while never sacrificing depth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 perspective-[1200px]">

          {steps.map((step, i) => {
            const Icon = icons[i]

            return (
              <div
                key={step.number}
                className="group relative"
              >
                {/* Glow layer */}
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-lg" />

                {/* Card */}
                <div className="
                  relative
                  bg-white
                  border border-border
                  rounded-2xl
                  p-6
                  h-full
                  transition-all duration-500
                  transform-gpu
                  group-hover:-translate-y-2
                  group-hover:rotate-[0.5deg]
                  group-hover:shadow-2xl
                ">

                  {/* Icon */}
                  <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-accent/[0.08] text-accent transition group-hover:scale-110 group-hover:bg-accent/[0.12]">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="t-title text-ink mb-4">
                    {step.title}
                  </h3>

                  {/* Detail */}
                  <p className="t-body text-muted-dk">
                    {step.detail}
                  </p>

                </div>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default ProcessTimeline