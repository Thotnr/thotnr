// ── Data ──────────────────────────────────────────────────────────────────────

const outcomes = [
  'Cost Reduction',
  'Accelerated Time to Market',
  'Enhanced Customer Experience',
  'AI Readiness Assessment',
  'Risk Mitigation',
  'Competitive Differentiation',
]

// ── Check icon ────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
      <circle cx="10" cy="10" r="10" fill="var(--color-accent)" opacity="0.15"/>
      <path d="M6 10l3 3 5-5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

// CTASplit — Section 8 (light). Split layout: headline+CTA left, outcomes checklist right.
function CTASplit() {
  return (
    <section className="bg-white py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — copy + CTA */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-accent">
            Let's Build Together
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            What can we help you{' '}
            <span className="text-accent">achieve?</span>
          </h2>
          <p className="text-base lg:text-lg leading-relaxed mb-10 text-gray-600">
            Whether you're at the earliest stages of AI exploration or trying to rescue a stalled
            initiative, we bring the structure, experience, and candour to move things forward.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-accent hover:bg-accent-dark transition-colors duration-200"
          >
            Start a Conversation
          </a>
        </div>

        {/* Right — outcomes checklist */}
        <div className="rounded-2xl p-8 bg-gray-50 border border-border">
          <p className="text-xs font-semibold uppercase tracking-widest mb-6 text-gray-500">
            Outcomes you can expect
          </p>
          <ul className="flex flex-col gap-4">
            {outcomes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-base font-medium text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CTASplit
