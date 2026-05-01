import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import aiServiceImg          from '../../../assets/images/ai-service.jpg'
import enterpriseArchitectImg from '../../../assets/images/enterprise-architect.jpg'
import cloudImg              from '../../../assets/images/cloud.jpg'
import strategyImg           from '../../../assets/images/offer-service.jpg'
import experienceImg         from '../../../assets/images/user-experience.jpg'
import dataImg               from '../../../assets/images/ai.jpg'

const services = [
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
  {
    title:   'Strategy & Consulting',
    tagline: 'Direction, clarity, execution',
    stat:    '2× faster strategic alignment',
    desc:    'We partner with leadership to define direction, prioritise transformation, and build execution-ready roadmaps for the decade ahead.',
    image:   strategyImg,
  },
  {
    title:   'Experience Design',
    tagline: 'Human-centred, outcome-driven',
    stat:    '45% higher engagement',
    desc:    'Human-centred design for digital products — from research to interaction design — that drives adoption and delivers business outcomes.',
    image:   experienceImg,
  },
  {
    title:   'Data Engineering',
    tagline: 'Pipelines that power intelligence',
    stat:    '5× data pipeline efficiency',
    desc:    'We build the data foundations that power intelligent systems — streaming pipelines, lakehouses, and analytics platforms at scale.',
    image:   dataImg,
  },
]

function ExpandingCard({ title, tagline, stat, desc, image }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col justify-end overflow-hidden rounded-2xl cursor-default"
      style={{
        flex: hovered ? '2.5' : '1',
        minHeight: '420px',
        transition: 'flex 0.5s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)',
        }}
      />

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
    </div>
  )
}

function ServicesList() {
  const navigate = useNavigate()

  const row1 = services.slice(0, 3)
  const row2 = services.slice(3, 6)

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

        {/* ── Cards ── */}
        {/*
          Desktop (lg+)  : two flex rows, each with 3 expanding cards
          Tablet (md–lg) : all 6 in a 2-col grid — done via display:contents on svc-row
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
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-highlight)'
              e.currentTarget.style.color = 'var(--color-highlight)'
            }}
            onMouseLeave={(e) => {
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
