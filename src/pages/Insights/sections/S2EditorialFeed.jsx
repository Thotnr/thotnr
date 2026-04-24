import { Link } from 'react-router-dom'
import { insights } from '../../../data/insights'

const featured  = insights[0]
const articles  = insights.slice(1)

function FeaturedInsight({ coverImg, tagline, subheadline, slug }) {
  return (
    <div className="mb-10">
      <Link to={`/insights/${slug}`} className="block overflow-hidden rounded-2xl no-underline">
        <img
          src={coverImg}
          alt={subheadline}
          className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          style={{ height: '480px' }}
        />
      </Link>
    </div>
  )
}

function ArticleRow({ tagline, subheadline, desc, coverImg, slug, index }) {
  const isImageLeft = index % 2 === 0

  return (
    <div
      className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 py-6`}
    >
      {/* Image */}
      <div className="w-full md:w-[45%] flex-shrink-0 overflow-hidden rounded-xl">
        <img
          src={coverImg}
          alt={subheadline}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[55%] flex flex-col justify-center">
        <p className="text-h3 text-[var(--color-highlight)] mb-3">{tagline}</p>

        <h3
          className="text-h2 leading-snug mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {subheadline}
        </h3>

        <p className="text-body mb-6 line-clamp-3" style={{ color: 'var(--color-text-secondary)' }}>
          {insights.find(i => i.slug === slug)?.contentBlocks?.find(b => b.type === 'intro')?.text}
          <Link
            to={`/insights/${slug}`}
            className="ml-2 text-sm font-semibold inline-flex items-center gap-1 no-underline transition-all duration-150 hover:gap-2"
            style={{ color: 'var(--color-secondary)' }}
          >
            Read more..
          </Link>
        </p>
      </div>
    </div>
  )
}

function S2EditorialFeed() {
  return (
    <section
      className="pt-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-h1" style={{ color: 'var(--color-text-primary)' }}>
            Latest Thinking
          </h2>
        </div>

        {/* Featured */}
        <FeaturedInsight {...featured} />

        {/* Alternating article list */}
        {articles.map((article, i) => (
          <ArticleRow key={article.slug} {...article} index={i} />
        ))}

      </div>
    </section>
  )
}

export default S2EditorialFeed
