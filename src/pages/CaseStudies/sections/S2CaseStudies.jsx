import { Link } from 'react-router-dom'
import { caseStudies } from '../../../data/caseStudies'

function CaseBlock({ industry, headline, desc, image, slug, index }) {
  const isImageLeft = index % 2 === 0

  return (
    <div
      className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-12 md:gap-16 py-10`}
      style={{ borderBottom: '1px solid rgba(108,117,125,0.12)' }}
    >
      <div className="w-full md:w-[55%] flex-shrink-0">
        <img
          src={image}
          alt={headline}
          className="w-full rounded-xl object-cover"
          style={{ aspectRatio: '16/10' }}
        />
      </div>

      <div className="w-full md:w-[45%] flex flex-col justify-center">
        <p className="text-h3 mb-3" style={{ color: 'var(--color-highlight)' }}>
          {industry}
        </p>

        <h2 className="text-h2 leading-snug mb-5" style={{ color: 'var(--color-text-primary)' }}>
          {headline}
        </h2>

        <p className="text-body-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
          {desc}
          <Link
            to={`/case-studies/${slug}`}
            className="ml-2 inline-flex items-center gap-2 text-lg font-semibold no-underline transition-all duration-200 hover:gap-3"
            style={{ color: 'var(--color-secondary)' }}
          >
            Read More..
          </Link>
        </p>
      </div>
    </div>
  )
}

function S2CaseStudies() {
  return (
    <section className="px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        <div className="pt-16">
          <h2 className="text-h1" style={{ color: 'var(--color-text-primary)' }}>
            Case Studies
          </h2>
          <p className="text-body max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            Eight engagements across industries — each one a measurable shift from AI ambition to enterprise reality.
          </p>
        </div>

        {caseStudies.map((c, i) => (
          <CaseBlock
            key={c.slug}
            industry={c.meta.sector}
            headline={c.coverTagline}
            desc={c.challenge.description}
            image={c.coverImg}
            slug={c.slug}
            index={i}
          />
        ))}

        <div className="pb-16" />

      </div>
    </section>
  )
}

export default S2CaseStudies
