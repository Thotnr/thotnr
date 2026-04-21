import { useState } from 'react'
import { cn } from '../../../utils'

// ── Data ──────────────────────────────────────────────────────────────────────

const featured = [
  {
    icon:  '🧭',
    title: 'AI Strategy Consulting',
    desc:  'We help leadership teams cut through the hype and build a concrete, prioritised AI roadmap — grounded in your actual data, systems, and organisational capacity.',
  },
  {
    icon:  '⚙️',
    title: 'Custom AI Development',
    desc:  'Purpose-built models and pipelines designed around your unique processes. No off-the-shelf wrappers — every solution is engineered for your production environment.',
  },
  {
    icon:  '🔗',
    title: 'Enterprise AI Integration',
    desc:  'Seamless embedding of AI capabilities into your existing ERP, CRM, and workflow tools — with security, compliance, and change management built in from the start.',
  },
]

const allServices = [
  { icon: '💬', label: 'NLP Solutions' },
  { icon: '👁️', label: 'Computer Vision' },
  { icon: '📈', label: 'Predictive Analytics' },
  { icon: '🤖', label: 'Process Automation' },
  { icon: '🗣️', label: 'Conversational AI' },
  { icon: '🛡️', label: 'AI Governance' },
  { icon: '🗄️', label: 'Data Engineering' },
  { icon: '🚀', label: 'MLOps & Deployment' },
  { icon: '🎓', label: 'AI Training & Enablement' },
  { icon: '🧠', label: 'Decision Intelligence' },
  { icon: '⚠️', label: 'Risk AI' },
  { icon: '🎯', label: 'Customer AI' },
]

// ── Cards ─────────────────────────────────────────────────────────────────────

// FeaturedServiceCard — light card on white section
function FeaturedServiceCard({ icon, title, desc }) {
  return (
    <div className="group flex flex-col gap-5 bg-white rounded-xl border border-border p-7 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(225,29,72,0.08)]">
      <span className="text-3xl">{icon}</span>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
      </div>
      <a href="#" className="mt-auto text-sm font-semibold text-accent hover:text-accent-dark transition-colors duration-150">
        Know More →
      </a>
    </div>
  )
}

// ServiceTile — compact tile in the expandable grid
function ServiceTile({ icon, label }) {
  return (
    <div className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-border transition-all duration-150 hover:border-accent hover:bg-accent/[0.04] cursor-default">
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium text-gray-600 group-hover:text-accent transition-colors duration-150">
        {label}
      </span>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

// ServicesList — Section 6 (light). 3 featured cards + expandable full-services grid.
function ServicesList() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="bg-white py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-accent">
            What We Deliver
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Services We <span className="text-accent">Offer</span>
          </h2>
        </div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((svc) => (
            <FeaturedServiceCard key={svc.title} {...svc} />
          ))}
        </div>

        {/* Expand toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setExpanded((e) => !e)}
            className={cn(
              'inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border',
              expanded
                ? 'bg-accent/[0.06] border-accent text-accent'
                : 'bg-white border-border text-gray-600 hover:border-accent hover:text-accent'
            )}
          >
            {expanded ? 'Hide Services' : 'Show All Services'}
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="transition-transform duration-200"
              style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
            >
              <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Expandable grid */}
        <div style={{ maxHeight: expanded ? 600 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
            {allServices.map((svc) => (
              <ServiceTile key={svc.label} {...svc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesList
