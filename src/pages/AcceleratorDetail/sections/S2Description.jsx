import { Link } from 'react-router-dom'
import {
  Mail, ShieldCheck, Calendar, Paperclip, PenTool,
  Filter, Zap, Target, Lock, AlertTriangle, ClipboardCheck, TrendingUp,
  CheckCircle2, ArrowRight,
} from 'lucide-react'

const iconMap = {
  'mail': Mail,
  'shield-check': ShieldCheck,
  'calendar': Calendar,
  'paperclip': Paperclip,
  'pen-tool': PenTool,
  'filter': Filter,
  'zap': Zap,
  'target': Target,
  'lock': Lock,
  'alert-triangle': AlertTriangle,
  'clipboard-check': ClipboardCheck,
  'trending-up': TrendingUp,
}

/* ── Overview ──────────────────────────────────────────────── */
function Overview({ overview }) {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-h4 text-[var(--color-highlight)] mb-3">Overview</p>
            <h2 className="text-h2 text-[var(--color-text-primary)]" style={{ lineHeight: 1.2 }}>
              What this accelerator does
            </h2>
            <div
              className="mt-4 h-[3px] w-12 rounded-full"
              style={{ background: 'var(--color-highlight)' }}
            />
          </div>
          <div>
            <p
              className="text-body-lg text-[var(--color-text-secondary)]"
              style={{ lineHeight: 1.8 }}
            >
              {overview}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Challenge / Solution ──────────────────────────────────── */
function ChallengeAndSolution({ challenge, solution }) {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Challenge */}
          <div
            className="rounded-xl p-8"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <p className="text-label mb-4" style={{ color: 'var(--color-highlight)' }}>
              The Challenge
            </p>
            <p className="text-body text-white/70" style={{ lineHeight: 1.8 }}>
              {challenge}
            </p>
          </div>

          {/* Solution */}
          <div
            className="rounded-xl p-8"
            style={{
              background: 'rgba(168,218,220,0.08)',
              border: '1px solid rgba(168,218,220,0.2)',
            }}
          >
            <p className="text-label mb-4" style={{ color: 'var(--color-accent)' }}>
              Our Solution
            </p>
            <p className="text-body text-white/70" style={{ lineHeight: 1.8 }}>
              {solution}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Key Capabilities ──────────────────────────────────────── */
function KeyCapabilities({ capabilities }) {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-h4 text-[var(--color-highlight)] mb-2">Capabilities</p>
          <h2 className="text-h1 text-[var(--color-text-primary)]">Key Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon] || Zap
            return (
              <div
                key={cap.title}
                className="rounded-xl p-7"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(29,53,87,0.09)',
                  boxShadow: '0 2px 12px rgba(29,53,87,0.05)',
                  animation: `capIn 0.45s ease ${i * 0.07}s both`,
                }}
              >
                <style>{`
                  @keyframes capIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: translateY(0); }
                  }
                `}</style>
                <div
                  className="inline-flex items-center justify-center rounded-lg mb-5"
                  style={{ width: '44px', height: '44px', background: 'rgba(29,53,87,0.07)' }}
                >
                  <Icon size={20} strokeWidth={1.8} style={{ color: 'var(--color-secondary)' }} />
                </div>
                <h3 className="text-h4 text-[var(--color-text-primary)] mb-2" style={{ lineHeight: 1.3 }}>
                  {cap.title}
                </h3>
                <p className="text-body-sm text-[var(--color-text-secondary)]" style={{ lineHeight: 1.75 }}>
                  {cap.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

/* ── How It Works ──────────────────────────────────────────── */
function HowItWorks({ howItWorks }) {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <style>{`
        .hiw-connector {
          display: none;
        }
        @media (min-width: 1024px) {
          .hiw-connector {
            display: block;
            flex: 1;
            height: 1px;
            background: rgba(168,218,220,0.25);
            margin-top: 22px;
            align-self: flex-start;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-h4 mb-2" style={{ color: 'var(--color-accent)' }}>Process</p>
          <h2 className="text-h1 text-white">How It Works</h2>
        </div>

        {/* Desktop: horizontal row. Mobile: vertical stack */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
          {howItWorks.map((step, i) => (
            <>
              <div
                key={step.step}
                className="flex flex-col lg:flex-1"
                style={{ minWidth: 0 }}
              >
                {/* Step number */}
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.20em',
                  color: 'var(--color-accent)',
                  opacity: 0.7,
                  marginBottom: '12px',
                  display: 'block',
                }}>
                  {step.step}
                </span>

                {/* Step marker dot */}
                <div
                  className="w-3 h-3 rounded-full mb-5 flex-shrink-0"
                  style={{ background: 'var(--color-accent)', opacity: 0.7 }}
                />

                <h3
                  className="text-h3 text-white mb-3"
                  style={{ lineHeight: 1.2 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-body-sm text-white/60"
                  style={{ lineHeight: 1.75, paddingRight: '24px' }}
                >
                  {step.description}
                </p>
              </div>

              {/* Connector line between steps (desktop only) */}
              {i < howItWorks.length - 1 && (
                <div key={`conn-${i}`} className="hiw-connector" />
              )}
            </>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ── Business Value ────────────────────────────────────────── */
function BusinessValue({ businessValue }) {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-h4 text-[var(--color-highlight)] mb-2">Outcomes</p>
          <h2 className="text-h1 text-[var(--color-text-primary)]">Business Value</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {businessValue.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl p-6"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(29,53,87,0.09)',
                boxShadow: '0 2px 10px rgba(29,53,87,0.04)',
              }}
            >
              <CheckCircle2
                size={20}
                strokeWidth={1.8}
                className="flex-shrink-0 mt-0.5"
                style={{ color: 'var(--color-secondary)' }}
              />
              <p className="text-body text-[var(--color-text-secondary)]" style={{ lineHeight: 1.7 }}>
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ── Deployment ────────────────────────────────────────────── */
function Deployment({ deployment }) {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <p className="text-h4 text-[var(--color-highlight)] mb-2">Integration</p>
          <h2 className="text-h1 text-[var(--color-text-primary)]">Deployment</h2>
        </div>

        <div
          className="rounded-xl p-8 md:p-10"
          style={{
            background: 'var(--color-secondary)',
            border: '1px solid rgba(29,53,87,0.15)',
          }}
        >
          <p
            className="text-body-lg text-white/75"
            style={{ lineHeight: 1.85, maxWidth: '860px' }}
          >
            {deployment}
          </p>
        </div>

      </div>
    </section>
  )
}

/* ── CTA ───────────────────────────────────────────────────── */
function CTABlock() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2
          className="text-h1 text-white mb-4"
          style={{ lineHeight: 1.2 }}
        >
          Want to explore this accelerator for your business?
        </h2>
        <p
          className="text-body text-white/65 max-w-2xl mx-auto mb-8"
          style={{ lineHeight: 1.8 }}
        >
          Let's discuss how this accelerator can be adapted to your workflows,
          systems, and enterprise goals.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-body-sm no-underline"
          style={{ background: 'var(--color-highlight)', color: 'var(--color-text-white)' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-text-primary)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-highlight)'; e.currentTarget.style.color = 'var(--color-text-white)' }}
        >
          Talk to Us
          <ArrowRight size={16} strokeWidth={2} />
        </Link>

      </div>
    </section>
  )
}

/* ── Main export ───────────────────────────────────────────── */
function S2Description({ accelerator }) {
  return (
    <>
      <Overview overview={accelerator.overview} />
      <ChallengeAndSolution challenge={accelerator.challenge} solution={accelerator.solution} />
      <KeyCapabilities capabilities={accelerator.capabilities} />
      <HowItWorks howItWorks={accelerator.howItWorks} />
      <BusinessValue businessValue={accelerator.businessValue} />
      <Deployment deployment={accelerator.deployment} />
      <CTABlock />
    </>
  )
}

export default S2Description
