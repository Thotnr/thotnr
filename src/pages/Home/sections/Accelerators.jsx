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

          {/* Category pill with Blackish Gradient Overlay */}
          <span
            className="absolute top-4 left-4 text-xs rounded-full px-2 py-1"
            style={{
              // The first gradient is the "overlay", the second is your base color
              background: `
                linear-gradient(to right, 
                  rgba(29, 53, 87, 1.0) 0%, 
                  rgba(29, 53, 87, 0.8) 50%, 
                  rgba(29, 53, 87, 0.2) 100%
                ), 
                rgba(230, 57, 70, 0.9)`,
              color: '#ffffff',
              fontWeight: '500',
              letterSpacing: '0.06em',
              // Optional: Add a subtle border to keep it crisp against the image
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {category}
          </span>
        </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-7">

        {/* Title */}
        <h3
          className="text-h3 mb-2"
          style={{ color: 'var(--color-text-primary)', lineHeight: 1.22 }}
        >
          {title}
        </h3>

        {/* Tagline — grows to push CTA to bottom */}
        <p
          className="text-body-sm flex-1 mb-3"
          style={{ color: 'var(--color-text-secondary)', lineHeight: 1.78 }}
        >
          {tagline}
        </p>

        {/* Tags */}
        {/* <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs rounded-full px-3 py-1"
              style={{
                background: 'rgba(29, 53, 87, 0.06)', 
                color: 'var(--color-text-secondary)',
                border: '1px solid rgba(230, 57, 70, 0.2)', 
              }}
            >
              {tag}
            </span>
          ))}
        </div> */}

        {/* CTA row */}
        <div
          className="acc-cta-line flex items-center justify-between"
          style={{ color: 'var(--color-secondary)' }}
        >
          <span className="text-body-sm font-semibold">Read more...</span>
        </div>

      </div>
    </Link>
  )
}

function Accelerators() {
  const items = accelerators.slice(0, 3)

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{
        background: 'radial-gradient(ellipse at 80% 10%, rgba(255,255,255,0.4) 0%, var(--color-accent) 60%)',
      }}
    >
      <style>{CARD_STYLES}</style>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="acc-section-header mb-8">
          <p
            className="text-h4 mb-3"
            style={{ color: 'var(--color-highlight)' }}
          >
           TIA Accelerators
          </p>
          <h2
            className="text-h1"
            style={{ color: 'var(--color-text-primary)', lineHeight: 1.12 }}
          >
            TIA Accelerators for faster AI transformation
          </h2>
          <p
            className="text-body mt-3 max-w-2xl"
            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.78 }}
          >
            Deployable solution frameworks that reduce delivery time, lower risk,
            and move teams from idea to production faster.
          </p>
        </div>

        {/* Equal-height 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {items.map((acc, i) => (
            <AcceleratorCard key={acc.slug} {...acc} index={i} />
          ))}
        </div>

        {/* CTA — centered below cards */}
        <div className="text-center mt-10">
          <Link
            to="/accelerators"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-body-sm font-medium border no-underline transition-all duration-300"
            style={{ border: '1px solid var(--color-secondary)', color: 'var(--color-secondary)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-text-primary)'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--color-secondary)'
            }}
          >
            View all accelerators
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Accelerators
