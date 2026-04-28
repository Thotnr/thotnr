import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import aiServiceImg          from '../../../assets/images/ai-service.jpg'
import enterpriseArchitectImg from '../../../assets/images/enterprise-architect.jpg'
import cloudImg              from '../../../assets/images/cloud.jpg'

const featuredServices = [
  {
    title:   'Artificial Intelligence',
    tagline: 'From strategy to production-ready AI',
    stat:    '3× faster AI adoption',
    desc:    'We turn AI ambition into running systems — strategy, engineering, and deployment under one roof.',
    image:   aiServiceImg,
  },
  {
    title:   'Enterprise Architecture',
    tagline: 'Systems that scale with your ambition',
    stat:    '60% faster delivery cycles',
    desc:    'We map, modernise, and future-proof your technology landscape — built for the next decade.',
    image:   enterpriseArchitectImg,
  },
  {
    title:   'Cloud',
    tagline: 'Migrate, modernise, operate at scale',
    stat:    '40% infrastructure savings',
    desc:    'From lift-and-shift to cloud-native transformation — we engineer cloud strategies that reduce cost.',
    image:   cloudImg,
  },
]

const allServices = [
  // column 1 — AI & Data (first)
  ['Artificial Intelligence', 'Generative AI', 'Machine Learning', 'Intelligent Automation', 'AI Strategy & Roadmap', 'MLOps', 'Data Engineering', 'Data Platform & Analytics'],
  // column 2 — Strategy, Experience & Innovation
  ['Strategy & Consulting', 'Customer Experience & Design', 'Technology & Engineering', 'Web 3.0', 'Enterprise Platform', 'Digital Transformation', 'Experience Design', 'UX Research'],
  // column 3 — Architecture & Cloud
  ['Enterprise Architecture', 'API & Integration Architecture', 'Enterprise Modernisation', 'Product Engineering', 'Quality Engineering', 'Cloud Engineering', 'Cloud Migration', 'Infrastructure Engineering'],
]

function ExpandingCard({ title, tagline, stat, desc, image }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col justify-end overflow-hidden rounded-2xl transition-all duration-500 cursor-default"
      style={{ flex: hovered ? '2.5' : '1', minHeight: '420px' }}
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
      />

      {/* Gradient overlay — cinematic, heavier at bottom */}
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

        {/* Tagline */}
        <p
          className="text-label font-medium"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          {tagline}
        </p>

        {/* Title */}
        <h3
          className="font-semibold text-white leading-tight"
          style={{ fontSize: hovered ? '1.35rem' : '1.2rem', transition: 'font-size 0.3s ease' }}
        >
          {title}
        </h3>

        {/* Desc — expands on hover */}
        <div
          className="overflow-hidden transition-all duration-400"
          style={{ maxHeight: hovered ? '80px' : '0px', opacity: hovered ? 1 : 0 }}
        >
          <p className="text-body leading-relaxed pt-1" style={{ color: 'rgba(255,255,255,0.72)' }}>
            {desc}
          </p>
        </div>

      </div>
    </div>
  )
}

function ServicesList() {
  const [showAll, setShowAll] = useState(false)
  const navigate = useNavigate()

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
          <p className="text-body text-white/70 mt-2 max-w-2xl">
            End-to-end capabilities across AI, architecture, and cloud — engineered to move your enterprise from ambition to execution.
          </p>
        </div>

        {/* Expanding Cards */}
        <div className="flex gap-4" style={{ minHeight: '420px' }}>
          {featuredServices.map((svc) => (
            <ExpandingCard key={svc.title} {...svc} />
          ))}
        </div>

        {/* All Services Bar */}
        <div className="flex items-center justify-between mt-14 pt-4">
          <h3
            className="text-h3 text-white"
          >
            All Services
          </h3>

          <button
            onClick={() => setShowAll((v) => !v)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-body-sm font-semibold border transition-all duration-200 cursor-pointer bg-transparent"
            style={{
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#ffffff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-highlight)'
              e.currentTarget.style.color = 'var(--color-highlight)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              e.currentTarget.style.color = '#ffffff'
            }}
          >
            {showAll ? 'Hide' : 'Show'}
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              style={{
                transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s ease',
              }}
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Expandable services list */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: showAll ? '800px' : '0px', opacity: showAll ? 1 : 0 }}
        >
          <style>{`
            .svc-list-item {
              color: rgba(255,255,255,0.55);
              padding-left: 0;
              transition: color 0.18s ease, padding-left 0.18s ease;
              cursor: default;
            }
            .svc-list-item:hover {
              color: #ffffff;
              padding-left: 10px;
            }
            .svc-list-item::before {
              content: '—';
              margin-right: 8px;
              font-size: 10px;
              color: var(--color-highlight);
              opacity: 0;
              transition: opacity 0.18s ease;
            }
            .svc-list-item:hover::before {
              opacity: 1;
            }
          `}</style>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 pt-8">
            {allServices.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-0.5">
                {col.map((svc) => (
                  <span key={svc} className="svc-list-item py-2 text-body-sm font-medium">
                    {svc}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Know more CTA */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => navigate('/services')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-body-sm font-semibold transition-all duration-200 cursor-pointer bg-transparent"
              style={{ border: '1px solid rgba(255,255,255,0.25)', color: '#ffffff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-highlight)'
                e.currentTarget.style.color = 'var(--color-highlight)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.color = '#ffffff'
              }}
            >
              Know more
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesList
