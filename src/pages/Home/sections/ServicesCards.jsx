// ── Icons ─────────────────────────────────────────────────────────────────────

function ChatBubbleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      <path d="M8 10h.01M12 10h.01M16 10h.01"/>
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 8.5 12 15 2 8.5 12 2"/>
      <polyline points="22 15.5 12 22 2 15.5"/>
      <polyline points="22 12 12 18.5 2 12"/>
    </svg>
  )
}

function PulseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    icon:     <ChatBubbleIcon />,
    title:    'Strategic AI Integration',
    tagline:  'From roadmap to running system',
    whatWeDo: 'End-to-end AI strategy, technology selection, risk assessment, and phased deployment planning aligned to your operating model.',
    outcome:  '3× faster AI adoption. 60% reduction in failed pilots. Executive and team alignment from day one.',
  },
  {
    icon:     <LayersIcon />,
    title:    'AI-Powered Decision Making',
    tagline:  'Replace gut-feel with grounded insight',
    whatWeDo: 'Custom predictive models, real-time analytics dashboards, and automated reporting systems that surface the right information at decision time.',
    outcome:  '40% improvement in forecast accuracy. Data-driven culture embedded across business units.',
  },
  {
    icon:     <PulseIcon />,
    title:    'Intelligent Automation',
    tagline:  'Eliminate manual work at scale',
    whatWeDo: 'Process mining, workflow redesign, and AI-enhanced RPA that understands context — not just clicks.',
    outcome:  '70% reduction in manual processing. 99.9% process accuracy. Your team freed to do high-value work.',
  },
]

// ── Card ──────────────────────────────────────────────────────────────────────

// ServiceCard — dark card with accent-red hover border glow, no useState needed
function ServiceCard({ icon, title, tagline, whatWeDo, outcome }) {
  return (
    <div className="group flex flex-col gap-6 bg-card-dk rounded-xl border border-border-dk p-7 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)]">

      {/* Icon */}
      <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 bg-white/[0.05] border border-border-dk text-muted group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent">
        {icon}
      </div>

      {/* Title */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-muted">{tagline}</p>
      </div>

      {/* What we do */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-accent">What we do</p>
        <p className="text-sm leading-relaxed text-muted">{whatWeDo}</p>
      </div>

      {/* Outcome */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-accent/60">Real outcome</p>
        <p className="text-sm leading-relaxed text-muted">{outcome}</p>
      </div>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

// ServicesCards — Section 3 (dark). 3-column card grid of core AI capabilities.
function ServicesCards() {
  return (
    <section className="bg-dark py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-accent">
            Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our <span className="text-accent">AI</span> Capabilities
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto text-muted">
            Three interlocking disciplines that take an AI idea from whiteboard to measurable business impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesCards
