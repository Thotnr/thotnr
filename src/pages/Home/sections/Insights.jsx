import { Link } from 'react-router-dom'
import { insights } from '../../../data/insights'

const featured = insights.slice(0, 3)

function InsightCard({ coverImg, tagline, subheadline, slug, contentBlocks }) {
  const excerpt = contentBlocks?.find((b) => b.type === 'intro')?.text ?? ''

  return (
    <article
      className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: '#ffffff',
        border: '1px solid var(--color-border-subtle)',
      }}
    >
      {/* Image */}
      <div className="overflow-hidden h-48 w-full">
        <img
          src={coverImg}
          alt={subheadline}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 gap-4 p-5">

        {/* Category */}
        <span
          className="text-[11px] font-semibold uppercase tracking-wide"
          style={{ color: 'var(--color-secondary)' }}
        >
          {tagline}
        </span>

        {/* Title */}
        <h3
          className="text-lg font-semibold leading-snug"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {subheadline}
        </h3>

        {/* Excerpt */}
        <p
          className="text-sm leading-relaxed line-clamp-4"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {excerpt}
        </p>

        {/* CTA — links to the specific detail page */}
        <Link
          to={`/insights/${slug}`}
          className="text-sm font-medium mt-auto inline-flex items-center gap-1 no-underline transition-all duration-200 hover:gap-2"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Read more..
        </Link>
      </div>
    </article>
  )
}

function Insights() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 max-w-xl">
          <p className="text-h4 text-[var(--color-highlight)]">Thinking Out Loud</p>
          <h2
            className="text-h1"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Our Insights
          </h2>
          <p className="text-body leading-relaxed mt-2 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            Perspectives on technology, strategy, and the future of intelligent enterprise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((a) => (
            <InsightCard key={a.slug} {...a} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/insights"
            className="inline-block px-6 py-3 rounded-full text-sm font-medium border no-underline transition-all duration-300"
            style={{ border: '1px solid var(--color-text-primary)', color: 'var(--color-text-primary)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-text-primary)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-primary)' }}
          >
            View all insights
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Insights
