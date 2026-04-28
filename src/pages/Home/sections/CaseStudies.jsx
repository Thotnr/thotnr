import { Link } from 'react-router-dom'
import { caseStudies } from '../../../data/caseStudies'

const featured = caseStudies.slice(0, 3)

function CaseRow({ industry, headline, description, image, slug, index }) {
  const isReversed = index % 2 !== 0

  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center mb-12`}>

      {/* Image */}
      <div className={isReversed ? 'order-1 md:order-2' : ''}>
        <img
          src={image}
          alt={headline}
          className="w-full h-[320px] object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className={isReversed ? 'order-2 md:order-1' : ''}>
        <p
          className="text-h4 mb-3"
          style={{ color: 'var(--color-secondary)' }}
        >
          {industry}
        </p>

        <h3
          className="text-h2 font-semibold mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {headline}
        </h3>

        <p
          className="text-body mb-2 line-clamp-4"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {description}
        </p>

        <Link
          to={`/case-studies/${slug}`}
          className="text-body-sm font-medium no-underline"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Read more..
        </Link>
      </div>

    </div>
  )
}

function CaseStudies() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-h4 text-[var(--color-highlight)]">
            Real Impact
          </p>

          <h2
            className="text-h1"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Our Case Studies
          </h2>
        </div>

        {featured.map((c, i) => (
          <CaseRow
            key={c.slug}
            industry={c.meta.sector}
            headline={c.coverTagline}
            description={c.challenge.description}
            image={c.coverImg}
            slug={c.slug}
            index={i}
          />
        ))}

        {/* CTA */}
        <div className="text-center mt-4">
          <Link
            to="/case-studies"
            className="inline-block px-6 py-3 rounded-full text-body-sm font-medium border no-underline transition-all duration-300"
            style={{ border: '1px solid var(--color-text-primary)', color: 'var(--color-text-primary)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-text-primary)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-primary)' }}
          >
            View all studies
          </Link>
        </div>

      </div>
    </section>
  )
}

export default CaseStudies
