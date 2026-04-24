import { ArrowRight } from 'lucide-react'

const featured = {
  industry: 'Financial Services',
  metric: '73%',
  metricLabel: 'faster decisioning',
  headline: 'How a Global Bank Transformed Credit Risk with AI',
  description: 'We embedded an end-to-end ML decisioning layer into a tier-1 bank\'s credit origination stack, replacing a 14-step manual review process. The result was a 73% reduction in average decision time and a measurable lift in portfolio quality within the first quarter of deployment.',
}

const supporting = [
  {
    industry: 'Healthcare',
    metric: '4.2×',
    metricLabel: 'ROI in 18 months',
    headline: 'AI-Powered Clinical Triage Cuts Patient Wait Times Across 12 Hospitals',
  },
  {
    industry: 'Retail',
    metric: '91%',
    metricLabel: 'demand forecast accuracy',
    headline: 'Inventory Intelligence Drives €28M Annual Savings for European Retailer',
  },
]

function FeaturedCard({ industry, metric, metricLabel, headline, description }) {
  return (
    <div
      className="cs-featured-card rounded-2xl p-6 flex flex-col"
      style={{
        background: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border-subtle)',
      }}
    >
      <span className="t-eyebrow text-accent mb-6 block">{industry}</span>

      <div className="mb-1">
        <span
          style={{
            fontSize: 'clamp(3rem, 4vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1,
            color: 'var(--color-border)',
            letterSpacing: '-0.03em',
            display: 'block',
          }}
        >
          {metric}
        </span>
      </div>

      <p className="t-sub mb-8" style={{ color: 'var(--color-text-secondary)' }}>
        {metricLabel}
      </p>

      <h3 className="t-title-lg pt-4 mb-4 flex-1" style={{ color: 'var(--color-text-primary)' }}>
        {headline}
      </h3>

      <p className="t-body-lg pt-4 mb-8" style={{ color: 'var(--color-text-secondary)' }}>
        {description}
      </p>

      <a href="#" className="cs-cta t-label text-accent pt-2">
        Know More..
      </a>
    </div>
  )
}

function SupportingCard({ industry, metric, metricLabel, headline, index }) {
  return (
    <div
      className={`cs-support-card cs-support-${index} rounded-2xl p-4 flex flex-col`}
      style={{
        background: 'var(--color-bg-primary)',
        border: '1px solid var(--color-border)',
      }}
    >
      <span className="t-eyebrow text-accent block">{industry}</span>

      <span className="t-title-lg text-[var(--color-card-dk)] block pt-2" style={{ lineHeight: 1, marginBottom: '4px' }}>
        {metric}
      </span>

      <p className="t-caption text-muted-dk">{metricLabel}</p>

      <h3 className="t-title text-ink flex-1 pt-4">{headline}</h3>

      <a href="#" className="cs-cta t-label text-accent pt-2">
        Know More..
      </a>
    </div>
  )
}

function CaseStudies() {
  return (
    <>
      <style>{`
        @keyframes csCardIn {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes csEyebrowFade {
          from { opacity: 0; letter-spacing: 0.3em; }
          to   { opacity: 1; letter-spacing: 0.14em; }
        }

        .cs-eyebrow  { animation: csEyebrowFade 0.8s ease 0.1s both; }
        .cs-headline { animation: csCardIn 0.8s cubic-bezier(0.4,0,0.2,1) 0.25s both; }
        .cs-sub      { animation: csCardIn 0.8s cubic-bezier(0.4,0,0.2,1) 0.4s both; }
        .cs-featured { animation: csCardIn 0.7s cubic-bezier(0.4,0,0.2,1) 0.35s both; }
        .cs-support-0 { animation: csCardIn 0.7s cubic-bezier(0.4,0,0.2,1) 0.45s both; }
        .cs-support-1 { animation: csCardIn 0.7s cubic-bezier(0.4,0,0.2,1) 0.55s both; }

        .cs-featured-card {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
          cursor: pointer;
        }
        .cs-featured-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.3);
        }

        .cs-support-card {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
          cursor: pointer;
        }
        .cs-support-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        }

        .cs-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: gap 0.2s ease;
        }
        .cs-cta:hover { gap: 12px; }
        .cs-arrow { transition: transform 0.2s ease; flex-shrink: 0; }
        .cs-cta:hover .cs-arrow { transform: translateX(3px); }
      `}</style>

      <section className="bg-white py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-10">
            <p className="cs-eyebrow t-eyebrow mb-3 text-accent">Real Results</p>
            <h2 className="cs-headline t-headline text-ink mb-4">
              Case{' '}
              <span className="text-accent">Studies</span>
            </h2>
            <p className="cs-sub t-sub text-muted-dk">
              From strategy to production — outcomes our clients achieved with THOTNR's AI
              partnerships.
            </p>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">

            {/* Featured — 3 of 5 cols */}
            <div className="cs-featured lg:col-span-3">
              <FeaturedCard {...featured} />
            </div>

            {/* Supporting stack — 2 of 5 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {supporting.map((c, i) => (
                <SupportingCard key={c.industry} {...c} index={i} />
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default CaseStudies
