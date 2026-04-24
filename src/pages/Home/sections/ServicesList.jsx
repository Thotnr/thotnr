import { useState } from 'react'
import aiServiceImg from '../../../assets/images/ai-service.jpg'
import enterpriseArchitectImg from '../../../assets/images/enterprise-architect.jpg'
import cloudImg from '../../../assets/images/cloud.jpg'

const featuredServices = [
  {
    title: 'Artificial Intelligence',
    tagline: 'From strategy to production-ready AI',
    stat: '3x faster AI adoption',
    desc: 'We turn AI ambition into running systems — strategy, engineering, and deployment under one roof.',
    image: aiServiceImg,
    href: '#',
  },
  {
    title: 'Enterprise Architecture',
    tagline: 'Systems that scale with your ambition',
    stat: '60% faster review cycles',
    desc: 'We map, modernise, and future-proof your technology landscape — built for the next decade.',
    image: enterpriseArchitectImg,
    href: '#',
  },
  {
    title: 'Cloud',
    tagline: 'Migrate, modernise, operate at scale',
    stat: '40% infrastructure savings',
    desc: 'From lift-and-shift to cloud-native transformation — we engineer cloud strategies that actually reduce cost.',
    image: cloudImg,
    href: '#',
  },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

function ExpandingCard({ title, tagline, stat, desc, image, href, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 transition-all duration-500"
      style={{
        flex: hovered ? '2.5' : '1',
        minHeight: '420px',
      }}
    >
      {/* Background */}
      <img
        src={image}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
          hovered ? 'scale-105' : 'scale-100'
        }`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Subtle accent tint (VERY LIGHT) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to top, rgb(var(--color-highlight-rgb) / 0.08), transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col gap-2">

        {/* Stat (only accent usage) */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-all ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'rgb(var(--color-highlight-rgb) / 0.08)',
            color: 'var(--color-highlight)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-highlight)' }} />
          {stat}
        </div>

        <p className="text-xs text-white/50">{tagline}</p>

        <h3 className="text-xl font-semibold text-white leading-tight">
          {title}
        </h3>

        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: hovered ? '80px' : '0px' }}
        >
          <p className="text-sm text-white/70 pt-2">{desc}</p>
        </div>

        <div
          className={`flex items-center gap-2 text-sm font-medium transition-all ${
            hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
          style={{ color: 'var(--color-highlight)' }}
        >
          Explore <ArrowIcon />
        </div>

      </div>
    </a>
  )
}

function ServicesList() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p
            className="text-label text-[var(--color-highlight)]"
           
          >
            What We Deliver
          </p>

          <h2
            className="text-h1 text-white"
          >
            Services We Offer
          </h2>

          <p
            className="text-body text-white/70 mt-2 max-w-2xl"
            
          >
            End-to-end capabilities across AI, architecture, and cloud — engineered to move your enterprise from ambition to execution.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-4" style={{ minHeight: '420px' }}>
          {featuredServices.map((svc, i) => (
            <ExpandingCard key={svc.title} {...svc} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesList