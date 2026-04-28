import { useState } from 'react'
import { Link } from 'react-router-dom'
import { insights } from '../../../data/insights'

const INITIAL_COUNT = 7

function InsightBlock({ tagline, subheadline, contentBlocks, coverImg, slug, index }) {
  const isImageLeft = index % 2 === 0
  const desc = contentBlocks?.find((b) => b.type === 'intro')?.text ?? ''

  return (
    <div
      className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-16 py-10`}
      style={{ borderBottom: '1px solid rgba(108,117,125,0.12)' }}
    >
      {/* Image */}
      <div className="w-full md:w-[55%] flex-shrink-0">
        <img
          src={coverImg}
          alt={subheadline}
          className="w-full rounded-xl object-cover"
          style={{ aspectRatio: '16/10' }}
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[45%] flex flex-col justify-center gap-4">
        <p className="text-h4" style={{ color: 'var(--color-highlight)' }}>
          {tagline}
        </p>

        <h2 className="text-h2 leading-snug" style={{ color: 'var(--color-text-primary)' }}>
          {subheadline}
        </h2>

        <p
          className="text-body-lg line-clamp-4"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {desc}
        </p>

        <Link
          to={`/insights/${slug}`}
          className="inline-flex items-center gap-2 text-body font-semibold no-underline transition-all duration-200 hover:gap-3"
          style={{ color: 'var(--color-secondary)' }}
        >
          Read More..
        </Link>
      </div>
    </div>
  )
}

function S2EditorialFeed() {
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? insights : insights.slice(0, INITIAL_COUNT)

  return (
    <section className="px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        <div className="pt-16">
          <h2 className="text-h1" style={{ color: 'var(--color-text-primary)' }}>
            Latest Thinking
          </h2>
          <p className="text-body max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            Perspectives on technology, strategy, and the future of intelligent enterprise.
          </p>
        </div>

        {visible.map((article, i) => (
          <InsightBlock key={article.slug} {...article} index={i} />
        ))}

        {/* Load More */}
        {!showAll && insights.length > INITIAL_COUNT && (
          <div className="flex justify-center py-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full text-body-sm font-semibold border transition-all duration-300 cursor-pointer bg-transparent"
              style={{ border: '1px solid var(--color-text-primary)', color: 'var(--color-text-primary)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-text-primary)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-primary)' }}
            >
              Load More
            </button>
          </div>
        )}

        <div className="pb-16" />

      </div>
    </section>
  )
}

export default S2EditorialFeed
