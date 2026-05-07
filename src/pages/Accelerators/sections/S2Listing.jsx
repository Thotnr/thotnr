import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Plus } from 'lucide-react'
import { accelerators } from '../../../data/accelerators'

const INITIAL_COUNT = 6
const INCREMENT     = 3

const STYLES = `
  @keyframes listCardIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .lst-card {
    transition: transform 0.36s cubic-bezier(0.16,1,0.3,1), box-shadow 0.36s ease;
  }
  .lst-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 24px 52px rgba(29,53,87,0.16) !important;
  }
  .lst-card .lst-img {
    transition: transform 0.65s cubic-bezier(0.16,1,0.3,1);
  }
  .lst-card:hover .lst-img {
    transform: scale(1.07);
  }
  .lst-card .lst-arrow {
    transition: transform 0.26s ease;
    display: inline-flex;
  }
  .lst-card:hover .lst-arrow {
    transform: translateX(5px);
  }
  .lst-card .lst-cta {
    transition: color 0.2s ease;
  }
  .lst-card:hover .lst-cta {
    color: var(--color-highlight) !important;
  }
  .load-more-btn {
    transition: background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
  }
  .load-more-btn:hover {
    background: var(--color-highlight) !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(230,57,70,0.25);
  }
`

function ListingCard({ slug, image, category, title, tagline, tags, animDelay }) {
  return (
    <Link
      to={`/accelerators/${slug}`}
      className="lst-card flex flex-col h-full no-underline rounded-2xl overflow-hidden"
      style={{
        background: '#ffffff',
        boxShadow: '0 4px 20px rgba(29,53,87,0.08)',
        animation: `listCardIn 0.55s cubic-bezier(0.16,1,0.3,1) ${animDelay}s both`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: '210px' }}>
        <img
          src={image}
          alt={title}
          className="lst-img w-full h-full object-cover"
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(11,15,25,0.52) 0%, rgba(11,15,25,0.08) 55%, transparent 100%)',
        }} />
        <span
          className="absolute top-4 left-4 text-label rounded-full px-3 py-1.5"
          style={{ background: 'var(--color-highlight)', color: '#ffffff', letterSpacing: '0.06em' }}
        >
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-7">

        <h3
          className="text-h3 mb-3"
          style={{ color: 'var(--color-text-primary)', lineHeight: 1.22 }}
        >
          {title}
        </h3>

        <p
          className="text-body-sm flex-1 mb-5"
          style={{ color: 'var(--color-text-secondary)', lineHeight: 1.78 }}
        >
          {tagline}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-caption rounded-full px-3 py-1"
              style={{
                background: 'rgba(29,53,87,0.06)',
                color: 'var(--color-text-secondary)',
                border: '1px solid rgba(29,53,87,0.09)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ height: '1px', background: 'rgba(29,53,87,0.09)', marginBottom: '20px' }} />

        <div className="lst-cta flex items-center justify-between" style={{ color: 'var(--color-secondary)' }}>
          <span className="text-body-sm font-semibold">Explore Accelerator</span>
          <span className="lst-arrow">
            <ArrowRight size={16} strokeWidth={2} />
          </span>
        </div>

      </div>
    </Link>
  )
}

function S2Listing() {
  const categories = ['All', ...new Set(accelerators.map((a) => a.category))]
  const [active,  setActive]  = useState('All')
  const [visible, setVisible] = useState(INITIAL_COUNT)

  const filtered = active === 'All'
    ? accelerators
    : accelerators.filter((a) => a.category === active)

  const shown    = filtered.slice(0, visible)
  const hasMore  = visible < filtered.length

  function handleFilter(cat) {
    setActive(cat)
    setVisible(INITIAL_COUNT)
  }

  function handleLoadMore() {
    setVisible((v) => v + INCREMENT)
  }

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <style>{STYLES}</style>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-h4 text-[var(--color-highlight)] mb-2">Explore Accelerators</p>
          <h2 className="text-h1 text-[var(--color-text-primary)] mb-3">
            Ready-to-deploy AI capabilities for modern teams
          </h2>
          <p className="text-body text-[var(--color-text-secondary)] max-w-2xl">
            Each accelerator is a reusable implementation layer that can be adapted
            to your workflows, systems, and enterprise requirements.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className="px-5 py-2 rounded-full text-body-sm font-medium border cursor-pointer"
              style={{
                transition: 'background 0.18s ease, color 0.18s ease, border-color 0.18s ease',
                background:   active === cat ? 'var(--color-secondary)' : 'transparent',
                color:        active === cat ? '#ffffff' : 'var(--color-text-secondary)',
                borderColor:  active === cat ? 'var(--color-secondary)' : 'rgba(29,53,87,0.2)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Equal-height grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {shown.map((acc, i) => (
            <ListingCard
              key={acc.slug}
              {...acc}
              animDelay={i * 0.08}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 flex justify-center">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              className="load-more-btn inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-body-sm cursor-pointer border-none"
              style={{ background: 'var(--color-secondary)', color: '#ffffff' }}
            >
              <Plus size={16} strokeWidth={2.2} />
              Load More
            </button>
          ) : (
            <p className="text-body-sm" style={{ color: 'var(--color-text-tertiary)' }}>
            </p>
          )}
        </div>

      </div>
    </section>
  )
}

export default S2Listing
