import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { accelerators } from '../../../data/accelerators'

const CARD_STYLES = `
  @keyframes accCardSlideUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes accHeaderFade {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .acc-section-header {
    animation: accHeaderFade 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both;
  }
  .acc-card-0 { animation: accCardSlideUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.20s both; }
  .acc-card-1 { animation: accCardSlideUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.34s both; }
  .acc-card-2 { animation: accCardSlideUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.48s both; }

  .acc-card {
    transition: transform 0.38s cubic-bezier(0.16,1,0.3,1), box-shadow 0.38s ease;
  }
  .acc-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 28px 60px rgba(29,53,87,0.18) !important;
  }
  .acc-card .acc-img {
    transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
  }
  .acc-card:hover .acc-img {
    transform: scale(1.08);
  }
  .acc-card .acc-arrow {
    transition: transform 0.28s ease;
    display: inline-flex;
  }
  .acc-card:hover .acc-arrow {
    transform: translateX(6px);
  }
  .acc-card .acc-cta-line {
    transition: color 0.2s ease;
  }
  .acc-card:hover .acc-cta-line {
    color: var(--color-highlight);
  }
  .acc-view-all-btn {
    transition: background 0.22s ease, transform 0.22s ease;
  }
  .acc-view-all-btn:hover {
    background: var(--color-highlight) !important;
    transform: translateY(-2px);
  }
`

function AcceleratorCard({ slug, image, category, title, tagline, tags, index }) {
  return (
    <Link
      to={`/accelerators/${slug}`}
      className={`acc-card acc-card-${index} flex flex-col h-full no-underline rounded-2xl overflow-hidden`}
      style={{
        background: '#ffffff',
        boxShadow: '0 4px 24px rgba(29,53,87,0.09)',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: '210px' }}>
        <img
          src={image}
          alt={title}
          className="acc-img w-full h-full object-cover"
        />
        {/* Scrim for text legibility */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(11,15,25,0.55) 0%, rgba(11,15,25,0.1) 55%, transparent 100%)',
        }} />
        {/* Category pill */}
        <span
          className="absolute top-4 left-4 text-label rounded-full px-3 py-1.5"
          style={{
            background: 'var(--color-highlight)',
            color: '#ffffff',
            letterSpacing: '0.06em',
          }}
        >
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-7">

        {/* Title */}
        <h3
          className="text-h3 mb-3"
          style={{ color: 'var(--color-text-primary)', lineHeight: 1.22 }}
        >
          {title}
        </h3>

        {/* Tagline — grows to push CTA to bottom */}
        <p
          className="text-body-sm flex-1 mb-5"
          style={{ color: 'var(--color-text-secondary)', lineHeight: 1.78 }}
        >
          {tagline}
        </p>

        {/* Tags */}
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

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(29,53,87,0.09)', marginBottom: '20px' }} />

        {/* CTA row */}
        <div
          className="acc-cta-line flex items-center justify-between"
          style={{ color: 'var(--color-secondary)' }}
        >
          <span className="text-body-sm font-semibold">Explore Accelerator</span>
          <span className="acc-arrow">
            <ArrowRight size={16} strokeWidth={2} />
          </span>
        </div>

      </div>
    </Link>
  )
}

function Accelerators() {
  const items = accelerators.slice(0, 3)

  return (
    <section
      className="py-20 px-6 md:px-10 lg:px-16"
      style={{
        background: 'radial-gradient(ellipse at 80% 10%, rgba(255,255,255,0.4) 0%, var(--color-accent) 60%)',
      }}
    >
      <style>{CARD_STYLES}</style>
      <div className="max-w-7xl mx-auto">

        {/* Header — split layout: heading left, description + CTA right */}
        <div className="acc-section-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <div className="max-w-lg">
            <p
              className="text-h4 mb-3"
              style={{ color: 'var(--color-highlight)' }}
            >
              AI Accelerators
            </p>
            <h2
              className="text-h1"
              style={{ color: 'var(--color-text-primary)', lineHeight: 1.12 }}
            >
              Pre-built AI for faster enterprise transformation
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-5 max-w-sm">
            <p
              className="text-body lg:text-right"
              style={{ color: 'var(--color-text-secondary)', lineHeight: 1.78 }}
            >
              Deployable solution frameworks that reduce delivery time, lower risk,
              and move teams from idea to production faster.
            </p>
            <Link
              to="/accelerators"
              className="acc-view-all-btn inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-body-sm no-underline flex-shrink-0"
              style={{ background: 'var(--color-secondary)', color: '#ffffff' }}
            >
              View All Accelerators
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>

        </div>

        {/* Equal-height 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {items.map((acc, i) => (
            <AcceleratorCard key={acc.slug} {...acc} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Accelerators
