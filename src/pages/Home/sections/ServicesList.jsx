import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { services as servicesData } from '../../../data/services'

const cards = servicesData.map((s, i) => ({
  slug:    s.slug,
  title:   s.title,
  tagline: s.eyebrow,
  stat:    ['3× faster AI adoption', '60% faster delivery cycles', '5× data pipeline efficiency', '40% infrastructure savings', '45% higher engagement'][i],
  desc:    [
    'We build AI systems that extend human decision-making — from GenAI to MLOps, making teams faster and operations more resilient.',
    'We design structural foundations that align business strategy with technology — eliminating fragmentation and built for where the enterprise is going.',
    'We engineer the data pipelines and applications that turn raw information into organisational intelligence, reliable by design.',
    'Cloud-native architectures, migrations, and platforms — built for resilience, automation, and cost efficiency at enterprise scale.',
    'Human-centred design, security governance, and innovation strategy — the human layer of every digital system we build.',
  ][i],
  image:   s.coverImage,
}))

function ExpandingCard({ slug, title, tagline, stat, desc, image }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/services/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col justify-end overflow-hidden rounded-2xl"
      style={{
        flex: hovered ? '2.5' : '1',
        minHeight: '420px',
        transition: 'flex 0.5s cubic-bezier(0.4,0,0.2,1)',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      {/* Background image — inner wrapper guarantees overflow clip on all flex items */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: hovered
            ? 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.18) 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.10) 100%)',
          transition: 'background 0.5s ease',
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-7 flex flex-col gap-2">
        <p
          className="text-label font-medium"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          {tagline}
        </p>

        <h3
          className="font-semibold text-white leading-tight"
          style={{
            fontSize: hovered ? '1.35rem' : '1.2rem',
            transition: 'font-size 0.3s ease',
          }}
        >
          {title}
        </h3>

        <div
          className="overflow-hidden"
          style={{
            maxHeight: hovered ? '80px' : '0px',
            opacity: hovered ? 1 : 0,
            transition: 'max-height 0.4s ease, opacity 0.4s ease',
          }}
        >
          <p className="text-body leading-relaxed pt-1" style={{ color: 'rgba(255,255,255,0.72)' }}>
            {desc}
          </p>
        </div>
      </div>
    </Link>
  )
}

function ServicesList() {
  const navigate = useNavigate()

  const row1 = cards.slice(0, 2)
  const row2 = cards.slice(2, 5)

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-h4 text-[var(--color-highlight)]">What We Deliver</p>
          <h2 className="text-h1 text-white">Services We Offer</h2>
          <p className="text-body text-white/70 mt-2 max-w-2xl"
          style={{color: 'rgba(255,255,255,0.85)', lineHeight: 1.75}}
          >
            End-to-end capabilities across AI, architecture, and cloud — engineered to move your enterprise from ambition to execution.
          </p>
        </div>

        {/* ── Cards ── */}
        {/*
          Desktop (lg+)  : row 1 has 2 expanding cards, row 2 has 3 expanding cards
          Tablet (md–lg) : all 5 in a 2-col grid — done via display:contents on svc-row
          Mobile         : stacked vertically
        */}
        <style>{`
          @media (min-width: 768px) and (max-width: 1023px) {
            .svc-all-cards {
              display: grid !important;
              grid-template-columns: repeat(2, 1fr);
              gap: 16px !important;
            }
            .svc-row {
              display: contents;
            }
          }
        `}</style>

        <div className="svc-all-cards flex flex-col gap-4">
          <div className="svc-row flex flex-col lg:flex-row gap-4">
            {row1.map((svc) => (
              <ExpandingCard key={svc.title} {...svc} />
            ))}
          </div>
          <div className="svc-row flex flex-col lg:flex-row gap-4">
            {row2.map((svc) => (
              <ExpandingCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>

        {/* Show more */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold cursor-pointer bg-transparent"
            style={{
              border: '1px solid rgba(255,255,255,0.28)',
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              transition: 'background 0.22s ease, border-color 0.22s ease, color 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.borderColor = '#ffffff'
              e.currentTarget.style.color = 'var(--color-secondary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'
              e.currentTarget.style.color = '#ffffff'
            }}
          >
            Show more
          </button>
        </div>

      </div>
    </section>
  )
}

export default ServicesList
