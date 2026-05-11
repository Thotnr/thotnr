import { Layers, Brain, ShieldCheck } from 'lucide-react'
import orbusLogo from '../../../assets/images/orbus-logo.svg'

const capabilities = [
  {
    icon: Layers,
    title: 'Enterprise Architecture Management',
    desc: 'OrbusInfinity gives Thotnr clients a single source of truth — mapping technology landscapes to business strategy before a single model is trained or a workflow is automated.',
  },
  {
    icon: Brain,
    title: 'AI-Ready Infrastructure Mapping',
    desc: "With O.ai embedded in the platform, clients can govern AI adoption, identify high-value automation opportunities, and prioritise investments using real capability and portfolio data.",
  },
  {
    icon: ShieldCheck,
    title: 'Transformation Governance',
    desc: '150+ integrations and a Gartner-validated methodology ensure every Thotnr-led transformation is tracked, measured, and auditable at the portfolio level — from day one.',
  },
]

const stats = [
  { value: '600+', label: 'Enterprise organisations worldwide' },
  { value: '4×',   label: 'Gartner Magic Quadrant Leader' },
  { value: '3×',   label: 'Forrester Wave Leader' },
]

function S4Partners() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)] overflow-hidden">
      <style>{`
        @keyframes ptFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ptSlideLeft {
          from { opacity: 0; transform: translateX(-36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes ptSlideRight {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes ptCardIn {
          from { opacity: 0; transform: scale(0.95) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ptLogoFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-9px); }
        }
        @keyframes ptBadgePulse {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(230,57,70,0.4); }
          60%       { opacity: 0.7; transform: scale(0.72); box-shadow: 0 0 0 5px rgba(230,57,70,0); }
        }
        @keyframes ptLineExpand {
          from { width: 0; opacity: 0; }
          to   { width: 64px; opacity: 1; }
        }
        @keyframes ptStatPop {
          from { opacity: 0; transform: scale(0.80) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ptCardGlow {
          0%, 100% { box-shadow: 0 8px 40px rgba(11,15,25,0.07); }
          50%       { box-shadow: 0 12px 56px rgba(11,15,25,0.12), 0 0 0 1px rgba(230,57,70,0.08); }
        }

        .pt-eyebrow  { animation: ptFadeUp 0.6s ease 0.15s both; }
        .pt-h2       { animation: ptFadeUp 0.65s ease 0.28s both; }
        .pt-line     { display: block; animation: ptLineExpand 0.8s ease 0.42s both; }
        .pt-desc     { animation: ptFadeUp 0.6s ease 0.44s both; }

        .pt-card     { animation: ptCardIn 0.85s cubic-bezier(0.16,1,0.3,1) 0.52s both,
                                   ptCardGlow 4s ease-in-out 2.8s infinite; }
        .pt-left     { animation: ptSlideLeft 0.72s cubic-bezier(0.16,1,0.3,1) 0.70s both; }
        .pt-logo-img { animation: ptLogoFloat 5s ease-in-out 1.8s infinite; }
        .pt-badge-dot { animation: ptBadgePulse 2.4s ease-in-out 2.2s infinite; }
        .pt-right    { animation: ptSlideRight 0.72s cubic-bezier(0.16,1,0.3,1) 0.80s both; }
        .pt-cap-0    { animation: ptFadeUp 0.55s ease 0.92s both; }
        .pt-cap-1    { animation: ptFadeUp 0.55s ease 1.07s both; }
        .pt-cap-2    { animation: ptFadeUp 0.55s ease 1.22s both; }
        .pt-stat-0   { animation: ptStatPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 1.10s both; }
        .pt-stat-1   { animation: ptStatPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 1.25s both; }
        .pt-stat-2   { animation: ptStatPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 1.40s both; }

        .pt-stat-card {
          transition: transform 0.32s cubic-bezier(0.16,1,0.3,1), box-shadow 0.32s ease;
        }
        .pt-stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(11,15,25,0.10) !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div className="mb-12">
          <p className="pt-eyebrow text-h4 mb-3 text-[var(--color-highlight)]">
            Technology Partners
          </p>
          <h2
            className="pt-h2 text-h1 leading-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Built on the World's Leading<br className="hidden md:block" />
            Enterprise Architecture Platform
          </h2>
          <div
            className="pt-line mt-3 mb-5 h-[3px] rounded-full"
            style={{ background: 'var(--color-highlight)' }}
          />
          <p
            className="pt-desc text-body max-w-2xl"
            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
          >
            Thotnr is an official technology partner of Orbus Software — bringing together
            AI engineering and enterprise architecture management to give clients total
            visibility over their technology landscape before, during, and after every
            transformation.
          </p>
        </div>

        {/* ── Main showcase card ── */}
        <div
          className="pt-card rounded-2xl overflow-hidden mb-6 bg-white"
          style={{ border: '1px solid rgba(11,15,25,0.07)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr]">

            {/* LEFT — Logo + identity */}
            <div
              className="pt-left flex flex-col justify-center items-center lg:items-start gap-7 p-8 md:p-10 lg:p-12
                         border-b lg:border-b-0 lg:border-r"
              style={{ borderColor: 'rgba(11,15,25,0.07)' }}
            >
              {/* Logo */}
              <div className="pt-logo-img">
                <img
                  src={orbusLogo}
                  alt="Orbus Software"
                  className="w-auto"
                  style={{ maxHeight: '52px', maxWidth: '196px', objectFit: 'contain' }}
                />
              </div>

              {/* Official partner badge */}
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(230,57,70,0.05)',
                  border: '1px solid rgba(230,57,70,0.16)',
                }}
              >
                <span
                  className="pt-badge-dot flex-shrink-0 rounded-full"
                  style={{ width: 7, height: 7, background: 'var(--color-highlight)', display: 'inline-block' }}
                />
                <span
                  className="text-label"
                  style={{ color: 'var(--color-highlight)', letterSpacing: '0.10em' }}
                >
                  Official Technology Partner
                </span>
              </div>

              {/* Divider */}
              <div
                className="w-full"
                style={{ height: '1px', background: 'rgba(11,15,25,0.07)' }}
              />

              {/* Platform info */}
              <div className="text-center lg:text-left">
                <p
                  className="text-label mb-2"
                  style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.12em' }}
                >
                  Powered by
                </p>
                <p
                  className="text-h3 font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  OrbusInfinity
                </p>
                <p
                  className="text-body-sm"
                  style={{ color: 'var(--color-text-tertiary)', lineHeight: 1.7 }}
                >
                  Total Visibility.<br />
                  Confident Decisions.<br />
                  Smarter Transformation.
                </p>
              </div>
            </div>

            {/* RIGHT — Capabilities */}
            <div className="pt-right flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <p
                className="text-label mb-2"
                style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.12em' }}
              >
                What This Partnership Delivers
              </p>
              <h3
                className="text-h2 leading-tight mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Enterprise Architecture<br />
                Meets AI Engineering
              </h3>
              <p
                className="text-body mb-8"
                style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: '480px' }}
              >
                Thotnr clients gain access to OrbusInfinity — recognised by Gartner and
                Forrester as a global category leader — integrated with our AI practice
                to de-risk and accelerate every enterprise transformation.
              </p>

              {/* Capability rows */}
              <div className="flex flex-col gap-7">
                {capabilities.map(({ icon: Icon, title, desc }, i) => (
                  <div key={title} className={`pt-cap-${i} flex items-start gap-4`}>
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg mt-0.5"
                      style={{ background: 'rgba(230,57,70,0.07)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--color-highlight)' }} strokeWidth={2} />
                    </div>
                    <div>
                      <h4
                        className="text-h4 font-semibold mb-1"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        {title}
                      </h4>
                      <p
                        className="text-body-sm"
                        style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Stat cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`pt-stat-${i} pt-stat-card flex flex-col items-center justify-center
                          text-center py-8 px-6 rounded-xl bg-white`}
              style={{
                border: '1px solid rgba(11,15,25,0.07)',
                boxShadow: '0 2px 16px rgba(11,15,25,0.04)',
              }}
            >
              <span
                className="mb-2 leading-none"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 700,
                  color: 'var(--color-highlight)',
                  lineHeight: 1,
                }}
              >
                {value}
              </span>
              <span
                className="text-body-sm"
                style={{ color: 'var(--color-text-secondary)', lineHeight: 1.55, maxWidth: '160px' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default S4Partners
