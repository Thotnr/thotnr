import { Link } from 'react-router-dom'
import { insights } from '../../../data/insights'

// Display order + max cards shown per category on Home page
const CATEGORY_CONFIG = [
  { key: 'Vision Augmented',        label: 'Vision Augmented',        limit: 2 },
  { key: 'Cognitive Augmented',     label: 'Cognitive Augmented',     limit: 3 },
  { key: 'Architecture Augmented',  label: 'Architecture Augmented',  limit: 3 },
]

const byCategory = CATEGORY_CONFIG.map(({ key, label, limit }) => ({
  label,
  items: insights.filter((a) => a.category === key).slice(0, limit),
}))

function InsightCard({ coverImg, tagline, subheadline, slug, contentBlocks }) {
  const excerpt = contentBlocks?.find((b) => b.type === 'intro')?.text ?? ''

  return (
    <article
      className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white"
      style={{ border: '1px solid rgba(29,53,87,0.10)' }}
    >
      {/* Image */}
      <div className="overflow-hidden h-48 w-full flex-shrink-0">
        <img
          src={coverImg}
          alt={subheadline}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 gap-3 p-5">
        {/* Tagline */}
        <span className="text-label font-semibold" style={{ color: 'var(--color-secondary)' }}>
          {tagline}
        </span>

        {/* Title */}
        <h3
          className="text-h3 font-semibold leading-snug"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {subheadline}
        </h3>

        {/* Excerpt */}
        <p
          className="text-body-sm leading-relaxed line-clamp-3 flex-1"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {excerpt}
        </p>

        {/* CTA */}
        <Link
          to={`/insights/${slug}`}
          className="text-body-sm font-medium mt-1 inline-flex items-center gap-1 no-underline transition-all duration-200 hover:gap-2"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Read more..
        </Link>
      </div>
    </article>
  )
}

function CategoryRow({ label, items }) {
  if (!items.length) return null

  return (
    <div className="mb-14">
      {/* Category label + extending divider line */}
      <div className="flex items-center gap-5 mb-7">
        <span
          className="text-h4 whitespace-nowrap flex-shrink-0"
          style={{ color: 'var(--color-highlight)' }}
        >
          {label}
        </span>
        <div className="flex-1 h-px" style={{ background: 'rgba(29,53,87,0.12)' }} />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((a) => (
          <InsightCard key={a.slug} {...a} />
        ))}
      </div>
    </div>
  )
}

function Insights() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-12 max-w-xl">
          <p className="text-h4 text-[var(--color-highlight)]">Augmented Insights</p>
          <h2 className="text-h1" style={{ color: 'var(--color-text-primary)' }}>
            Our Insights
          </h2>
          <p
            className="text-body leading-relaxed mt-2 max-w-2xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Perspectives on technology, strategy, and the future of intelligent enterprise.
          </p>
        </div>

        {/* Category rows — Cognitive → Architecture → Vision */}
        {byCategory.map(({ label, items }) => (
          <CategoryRow key={label} label={label} items={items} />
        ))}

        {/* View all CTA */}
        <div className="text-center mt-2">
          <Link
            to="/insights"
            className="inline-block px-6 py-3 rounded-full text-body-sm font-medium border no-underline transition-all duration-300"
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
