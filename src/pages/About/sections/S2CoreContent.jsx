import { Brain, Layers, Target, Lightbulb, Shield, Zap } from 'lucide-react'

// S2 Sub1 — Intro
const introFeatures = [
  {
    icon: Brain,
    title: 'AI-First Thinking',
    desc: 'We approach every enterprise challenge through the lens of intelligent systems.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Delivery',
    desc: 'From strategy and architecture to deployment and governance — end to end.',
  },
  {
    icon: Target,
    title: 'Outcome Obsessed',
    desc: 'We measure success by business impact, not lines of code or model accuracy.',
  },
]

// S2 Sub2 — Stats
const stats = [
  { value: '200+', label: 'Enterprise Clients' },
  { value: '15+',  label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Satisfaction' },
]

// S2 Sub3 — Philosophy
const philosophyFeatures = [
  {
    icon: Lightbulb,
    title: 'Clarity Before Code',
    desc: 'We spend more time understanding your organisation than building — so what we build actually lasts.',
  },
  {
    icon: Shield,
    title: 'Responsible by Design',
    desc: 'Governance, transparency, and ethical AI are built in from day one, not bolted on afterwards.',
  },
  {
    icon: Zap,
    title: 'Speed with Depth',
    desc: 'We move fast because we\'ve seen what fails. Every shortcut we avoid is a production incident you don\'t have.',
  },
]

function FeatureRow({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg mt-0.5"
        style={{ background: 'rgba(230,57,70,0.08)' }}
      >
        <Icon size={20} style={{ color: 'var(--color-highlight)' }} strokeWidth={2} />
      </div>
      <div>
        <h4 className="text-h4 mb-1" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </h4>
        <p className="text-body-sm" style={{ color: 'var(--color-text-tertiary)' }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

function Sub1Intro() {
  return (
    <div className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left — text */}
        <div>
          <h2 className="text-h1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>
            Enterprise AI, Built<br />
            for the Real World
          </h2>

          {/* Accent underline */}
          <div
            className="mt-3 mb-5 h-[3px] w-16 rounded-full"
            style={{ background: 'var(--color-highlight)' }}
          />

          <p className="text-body-lg" style={{ color: 'var(--color-text-secondary)' }}>
            Thotnr is an enterprise technology firm specialising in AI strategy, engineering,
            and deployment. We don't chase pilots — we build systems that run in production,
            integrate with your real infrastructure, and grow in value over time.
          </p>
        </div>

        {/* Right — icon rows */}
        <div className="flex flex-col gap-7">
          {introFeatures.map((f) => (
            <FeatureRow key={f.title} {...f} />
          ))}
        </div>

      </div>
    </div>
  )
}

function Sub2Stats() {
  return (
    <div className="py-12 px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center justify-center py-8 ${
                i < stats.length - 1 ? 'border-r' : ''
              }`}
              style={{ borderColor: 'rgba(108,117,125,0.2)' }}
            >
              <span
                className="leading-none mb-2"
                style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)',
                }}
              >
                {s.value}
              </span>
              <span className="text-label" style={{ color: 'var(--color-text-tertiary)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Sub3Philosophy() {
  return (
    <div className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left — icon rows */}
        <div className="flex flex-col gap-7">
          {philosophyFeatures.map((f) => (
            <FeatureRow key={f.title} {...f} />
          ))}
        </div>

        {/* Right — text */}
        <div>
  

          <h2 className="text-h1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>
            Principles That Drive<br />
            Everything We Do
          </h2>

          {/* Accent underline */}
          <div
            className="mt-3 mb-5 h-[3px] w-16 rounded-full"
            style={{ background: 'var(--color-highlight)' }}
          />

          <p className="text-body-lg" style={{ color: 'var(--color-text-secondary)' }}>
            Every engagement we take on is guided by a set of beliefs forged through years of
            working inside complex enterprises — what works, what fails, and what makes the
            difference between a demo and a lasting system.
          </p>
        </div>

      </div>
    </div>
  )
}

function S2CoreContent() {
  return (
    <>
      <Sub1Intro />
      <Sub2Stats />
      <Sub3Philosophy />
    </>
  )
}

export default S2CoreContent
