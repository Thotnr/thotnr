import { Layers, Brain, ShieldCheck, Globe, Database, GitMerge } from 'lucide-react'
import orbusLogo from '../../../assets/images/orbus-logo.svg'
import iserverLogo from '../../../assets/images/orbus-iServer.webp'

const infinityCapabilities = [
  {
    icon: Layers,
    title: 'Enterprise Architecture Management',
    desc: 'A single source of truth — mapping technology landscapes to business strategy before a single model is trained or a workflow is automated.',
  },
  {
    icon: Brain,
    title: 'AI-Ready Infrastructure with O.ai',
    desc: 'Govern AI adoption, identify high-value automation opportunities, and prioritise investments using real capability and portfolio data.',
  },
  {
    icon: ShieldCheck,
    title: 'Transformation Governance at Scale',
    desc: '150+ integrations and a Gartner-validated methodology — every transformation tracked, measured, and auditable at the portfolio level.',
  },
]

const iserverCapabilities = [
  {
    icon: Globe,
    title: 'Standards-Based Architecture Modelling',
    desc: 'TOGAF, ArchiMate, UML, and BPMN 2.0 support — industry-standard compliance with zero configuration overhead.',
  },
  {
    icon: Database,
    title: 'Centralised Repository & Collaboration',
    desc: 'Live-sync architecture models across teams, with a web portal for broader stakeholder visibility and documentation access.',
  },
  {
    icon: GitMerge,
    title: 'Deep Microsoft Ecosystem Integration',
    desc: 'Native Visio, SharePoint, and Office 365 connectivity — rapid adoption for enterprises already invested in Microsoft tools.',
  },
]

const stats = [
  { value: '600+', label: 'Enterprise organisations worldwide' },
  { value: '4×',   label: 'Gartner Magic Quadrant Leader' },
  { value: '3×',   label: 'Forrester Wave Leader' },
]

function CapRow({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg mt-0.5"
        style={{ background: 'rgba(230,57,70,0.08)' }}
      >
        <Icon size={16} style={{ color: 'var(--color-highlight)' }} strokeWidth={2} />
      </div>
      <div>
        <h4 className="text-h4 font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </h4>
        <p className="text-body-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

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
          50%       { transform: translateY(-8px); }
        }
        @keyframes ptBadgePulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(230,57,70,0.4); }
          60%       { opacity: 0.65; box-shadow: 0 0 0 6px rgba(230,57,70,0); }
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
          50%       { box-shadow: 0 14px 56px rgba(11,15,25,0.12), 0 0 0 1px rgba(29,53,87,0.07); }
        }

        .pt-eyebrow  { animation: ptFadeUp 0.6s ease 0.15s both; }
        .pt-h2       { animation: ptFadeUp 0.65s ease 0.28s both; }
        .pt-line     { display: block; animation: ptLineExpand 0.8s ease 0.42s both; }
        .pt-desc     { animation: ptFadeUp 0.6s ease 0.44s both; }
        .pt-card     { animation: ptCardIn 0.85s cubic-bezier(0.16,1,0.3,1) 0.52s both,
                                   ptCardGlow 4s ease-in-out 2.8s infinite; }
        .pt-header   { animation: ptFadeUp 0.65s ease 0.62s both; }
        .pt-left     { animation: ptSlideLeft 0.72s cubic-bezier(0.16,1,0.3,1) 0.78s both; }
        .pt-logo-img { animation: ptLogoFloat 5s ease-in-out 1.8s infinite; }
        .pt-badge-dot { animation: ptBadgePulse 2.4s ease-in-out 2.2s infinite; }
        .pt-right    { animation: ptSlideRight 0.72s cubic-bezier(0.16,1,0.3,1) 0.88s both; }
        .pt-cap-0    { animation: ptFadeUp 0.5s ease 0.94s both; }
        .pt-cap-1    { animation: ptFadeUp 0.5s ease 1.08s both; }
        .pt-cap-2    { animation: ptFadeUp 0.5s ease 1.22s both; }
        .pt-icap-0   { animation: ptFadeUp 0.5s ease 1.04s both; }
        .pt-icap-1   { animation: ptFadeUp 0.5s ease 1.18s both; }
        .pt-icap-2   { animation: ptFadeUp 0.5s ease 1.32s both; }
        .pt-stat-0   { animation: ptStatPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 1.24s both; }
        .pt-stat-1   { animation: ptStatPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 1.39s both; }
        .pt-stat-2   { animation: ptStatPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 1.54s both; }

        .pt-stat-card {
          transition: transform 0.32s cubic-bezier(0.16,1,0.3,1), box-shadow 0.32s ease;
        }
        .pt-stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 44px rgba(11,15,25,0.10) !important;
        }

        /* Colorise the greyscale iServer logo — deep steel-blue */
        .pt-iserver-logo {
          filter: brightness(0) saturate(100%) invert(22%) sepia(46%) saturate(700%) hue-rotate(186deg) brightness(85%);
        }

        /* Gradient number text */
        .pt-stat-num {
          background: linear-gradient(135deg, #1D3557 0%, #457B9D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
            Powered by Two Industry-Leading<br className="hidden md:block" />
            Enterprise Architecture Platforms
          </h2>
          <div
            className="pt-line mt-3 mb-5 h-[3px] rounded-full"
            style={{ background: 'var(--color-highlight)' }}
          />
          <p
            className="pt-desc text-body max-w-2xl"
            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
          >
            Thotnr is an official technology partner of Orbus Software — combining AI
            engineering with the world's most comprehensive enterprise architecture stack to
            give clients total visibility over their technology landscape before, during, and
            after every transformation.
          </p>
        </div>

        {/* ── Main showcase card ── */}
        <div
          className="pt-card rounded-2xl overflow-hidden mb-6 bg-white"
          style={{ border: '1px solid rgba(11,15,25,0.07)' }}
        >

          {/* Card header — Orbus branding bar */}
          <div
            className="pt-header flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 px-8 md:px-10 lg:px-12 py-6 border-b"
            style={{ borderColor: 'rgba(11,15,25,0.07)', background: 'rgba(29,53,87,0.025)' }}
          >
            {/* Orbus logo */}
            <div className="pt-logo-img flex-shrink-0">
              <img
                src={orbusLogo}
                alt="Orbus Software"
                className="w-auto"
                style={{ maxHeight: '44px', maxWidth: '172px', objectFit: 'contain' }}
              />
            </div>

            {/* Divider */}
            <div
              className="hidden sm:block self-stretch flex-shrink-0"
              style={{ width: '1px', background: 'rgba(11,15,25,0.08)' }}
            />

            {/* Partner badge */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full self-start"
              style={{
                background: 'rgba(230,57,70,0.06)',
                border: '1px solid rgba(230,57,70,0.20)',
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

            {/* Tagline — right-aligned on large screens */}
            <p
              className="text-body-sm sm:ml-auto"
              style={{ color: 'var(--color-text-tertiary)', maxWidth: '280px' }}
            >
              Architecture intelligence across cloud and on-premises environments.
            </p>
          </div>

          {/* ── Two platform panels ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT — OrbusInfinity */}
            <div
              className="pt-left flex flex-col p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r"
              style={{ borderColor: 'rgba(11,15,25,0.07)' }}
            >
              {/* Platform label */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span
                  className="text-label px-3 py-1.5 rounded-full font-semibold"
                  style={{
                    background: 'rgba(29,53,87,0.07)',
                    color: 'var(--color-secondary)',
                    letterSpacing: '0.08em',
                  }}
                >
                  OrbusInfinity
                </span>
                <span
                  className="text-caption px-2 py-1 rounded"
                  style={{ background: 'rgba(230,57,70,0.07)', color: 'var(--color-highlight)' }}
                >
                  Cloud · SaaS
                </span>
              </div>

              <h3
                className="text-h3 leading-snug mb-3"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Enterprise Architecture<br />Meets AI Engineering
              </h3>
              <p
                className="text-body-sm mb-8"
                style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
              >
                Recognised by Gartner and Forrester as a global category leader — integrated
                with Thotnr's AI practice to de-risk and accelerate every enterprise transformation.
              </p>

              <div className="flex flex-col gap-6">
                {infinityCapabilities.map(({ icon, title, desc }, i) => (
                  <div key={title} className={`pt-cap-${i}`}>
                    <CapRow icon={icon} title={title} desc={desc} />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — iServer */}
            <div className="pt-right flex flex-col p-8 md:p-10 lg:p-12">
              {/* Platform label — iServer logo + badge */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <img
                  src={iserverLogo}
                  alt="Orbus iServer"
                  className="pt-iserver-logo h-8 w-auto object-contain flex-shrink-0"
                />
                <span
                  className="text-caption px-2 py-1 rounded"
                  style={{ background: 'rgba(230,57,70,0.07)', color: 'var(--color-highlight)' }}
                >
                  On-Premises
                </span>
              </div>

              <h3
                className="text-h3 leading-snug mb-3"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Architecture Governance<br />on Your Infrastructure
              </h3>
              <p
                className="text-body-sm mb-8"
                style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
              >
                A standards-first EA platform built on Microsoft technology — giving teams a
                governed, centralised repository for architecture models that fits into existing
                enterprise tooling without friction.
              </p>

              <div className="flex flex-col gap-6">
                {iserverCapabilities.map(({ icon, title, desc }, i) => (
                  <div key={title} className={`pt-icap-${i}`}>
                    <CapRow icon={icon} title={title} desc={desc} />
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
                className="pt-stat-num mb-2 leading-none"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 700,
                  lineHeight: 1,
                  display: 'block',
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
