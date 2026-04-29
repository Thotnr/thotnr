import { Link } from 'react-router-dom'

const metrics = [
  { value: '73%',  label: 'Faster Decisioning',    desc: 'Loan processing time cut from days to hours at a tier-1 bank.' },
  { value: '40%',  label: 'Cost Reduction',         desc: 'Infrastructure spend reduced post cloud-native migration.' },
  { value: '3×',   label: 'Speed to Market',        desc: 'Feature delivery velocity after enterprise architecture overhaul.' },
  { value: '60%',  label: 'Automation Rate',         desc: 'Manual workflows replaced with AI-powered process automation.' },
]

function MetricTile({ value, label, desc }) {
  return (
    <div
      className="p-6 rounded-xl"
      style={{
        background: 'var(--color-secondary)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <span
        className="block leading-none mb-2"
        style={{
          fontSize: '2.75rem',
          fontWeight: 700,
          fontFamily: 'var(--font-heading)',
          color: '#ffffff',
        }}
      >
        {value}
      </span>
      <p className="text-h4 text-[var(--color-highlight)] mb-2">{label}</p>
      <p className="text-body-sm text-white/60">{desc}</p>
    </div>
  )
}

function S4Impact() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — Case Highlight */}
        <div>
          <p className="text-h4 text-[var(--color-highlight)]">Measured Outcomes</p>

          <h2 className="text-h1 leading-tight mb-5" style={{ color: 'var(--color-text-primary)' }}>
            Results That Hold Up<br />
            in Production
          </h2>

          <div
            className="mb-5 h-[3px] w-16 rounded-full"
            style={{ background: 'var(--color-highlight)' }}
          />

          <p className="text-body-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Every number here came from a live enterprise deployment — not a pilot,
            not a proof of concept. We measure success by what changes in your operations
            after we leave, not by the elegance of the model we built.
          </p>

          <Link
            to="/case-studies"
            className="inline-block px-7 py-3 rounded-full text-body-sm font-semibold no-underline transition-all duration-200"
            style={{ background: 'var(--color-secondary)', color: 'var(--color-text-white)' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            View Case Studies
          </Link>
        </div>

        {/* Right — Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {metrics.map((m) => (
            <MetricTile key={m.label} {...m} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S4Impact
