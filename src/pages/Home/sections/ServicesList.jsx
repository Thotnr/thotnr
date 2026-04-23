import { useState } from 'react'
import aiServiceImg from '../../../assets/images/ai-service.jpg';
import enterpriseArchitectImg from '../../../assets/images/enterprise-architect.jpg';
import cloudImg from '../../../assets/images/cloud.jpg';
const featuredServices = [
  {
    title: 'Artificial Intelligence',
    tagline: 'From strategy to production-ready AI',
    stat: '3x faster AI adoption',
    desc: 'We turn AI ambition into running systems — strategy, engineering, and deployment under one roof.',
    image: aiServiceImg,
    href: '#',
    accentColor: '#E11D48',
    softColor: '#FF6B8A',
    hoverBorder: 'hover:border-red-500/40',
    topLine: 'from-red-600',
    tintBg: 'from-red-600/10',
    statBg: 'bg-red-600/10 border border-red-600/25 text-red-400',
    statDot: 'bg-red-500',
    ctaColor: 'text-red-400',
  },
  {
    title: 'Enterprise Architecture',
    tagline: 'Systems that scale with your ambition',
    stat: '60% faster review cycles',
    desc: 'We map, modernise, and future-proof your technology landscape — built for the next decade.',
    image: enterpriseArchitectImg,
    href: '#',
    accentColor: '#3B82F6',
    softColor: '#93C5FD',
    hoverBorder: 'hover:border-blue-500/40',
    topLine: 'from-blue-500',
    tintBg: 'from-blue-600/10',
    statBg: 'bg-blue-600/10 border border-blue-500/25 text-blue-300',
    statDot: 'bg-blue-500',
    ctaColor: 'text-blue-300',
  },
  {
    title: 'Cloud',
    tagline: 'Migrate, modernise, operate at scale',
    stat: '40% infrastructure savings',
    desc: 'From lift-and-shift to cloud-native transformation — we engineer cloud strategies that actually reduce cost.',
    image: cloudImg,
    href: '#',
    accentColor: '#8B5CF6',
    softColor: '#C4B5FD',
    hoverBorder: 'hover:border-violet-500/40',
    topLine: 'from-violet-500',
    tintBg: 'from-violet-600/10',
    statBg: 'bg-violet-600/10 border border-violet-500/25 text-violet-300',
    statDot: 'bg-violet-500',
    ctaColor: 'text-violet-300',
  },
]

const allServices = [
  'AI Strategy & Consulting',
  'NLP & Conversational AI',
  'Computer Vision',
  'Predictive Analytics',
  'Process Automation',
  'MLOps & Deployment',
  'Decision Intelligence',
  'Risk AI',
  'Customer AI',
  'Data Engineering',
  'AI Governance',
  'AI Training & Enablement',
  'Enterprise Architecture',
  'Application Modernisation',
  'API & Integration',
  'ERP Consulting',
  'Digital Supply Chain',
  'Business Process Consulting',
  'Cloud Migration',
  'Cloud Native Development',
  'FinOps',
  'Site Reliability Engineering',
  'DevOps & Platform Engineering',
  'Resilience Engineering',
  'Customer Experience & Design',
  'Product Engineering',
  'Web 3.0 & Blockchain',
  'AR / VR & Immersive Tech',
  'Cybersecurity',
  'Low Code Platforms',
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ExpandingCard({ title, tagline, stat, desc, image, href, hoverBorder, topLine, tintBg, statBg, statDot, ctaColor, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col justify-end overflow-hidden rounded-2xl cursor-pointer no-underline border border-white/8 ${hoverBorder} transition-all duration-500`}
      style={{
        flex: hovered ? '2.8' : '1',
        minHeight: '420px',
        transition: 'flex 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.3s ease',
      }}
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-600 ${hovered ? 'scale-107' : 'scale-100'}`}
        style={{ transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)' }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,4,31,0.97)] via-[rgba(6,4,31,0.55)] to-[rgba(6,4,31,0.1)]" />

      {/* Accent tint on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${tintBg} to-transparent transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Top accent line on hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${topLine} to-transparent transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Index number */}
      <div className="absolute top-5 right-5 font-mono text-[11px] font-bold text-white/18 tracking-widest">
        0{index + 1}
      </div>

      {/* Content */}
      <div className="relative z-10 p-7 flex flex-col gap-2.5">

        {/* Stat pill */}
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide w-fit ${statBg} transition-all duration-350 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${statDot}`} />
          {stat}
        </div>

        {/* Tagline */}
        <p className="text-xs text-white/45 m-0 tracking-wide truncate">
          {tagline}
        </p>

        {/* Title */}
        <h3
          className={`font-extrabold text-gray-50 m-0 leading-tight tracking-tight whitespace-nowrap transition-all duration-350 ${hovered ? 'text-2xl' : 'text-xl'}`}
        >
          {title}
        </h3>

        {/* Description — expand on hover */}
        <div
          className="overflow-hidden transition-all duration-400"
          style={{ maxHeight: hovered ? '80px' : '0px', transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)' }}
        >
          <p className="text-[13px] text-white/60 leading-relaxed m-0 pt-1">
            {desc}
          </p>
        </div>

        {/* CTA */}
        <div
          className={`flex items-center gap-2 text-[13px] font-semibold ${ctaColor} transition-all duration-300 ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2.5'}`}
          style={{ transitionDelay: hovered ? '120ms' : '0ms' }}
        >
          Explore
          <ArrowIcon />
        </div>
      </div>
    </a>
  )
}

function ServiceRow({ label }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer transition-all duration-200 ${hovered ? 'pl-2.5' : 'pl-0'}`}
    >
      <span className={`text-sm font-medium transition-colors duration-200 ${hovered ? 'text-red-600' : 'text-gray-700'}`}>
        {label}
      </span>
      <span className={`text-red-600 transition-opacity duration-200 shrink-0 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <ArrowIcon />
      </span>
    </div>
  )
}

function ServicesList() {
  const [expanded, setExpanded] = useState(false)

  const col1 = allServices.slice(0, 10)
  const col2 = allServices.slice(10, 20)
  const col3 = allServices.slice(20)

  return (
    <section className="pt-20 pb-10 px-6 md:px-10 lg:px-16" style={{ background: 'var(--color-bg-primary)' }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Premium Header ── */}
          <div className="text-start mb-10">
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-red-600 mb-4">
                  What We Deliver
                </p>
                <>
  <style>{`
    @keyframes offerPop {
      0%, 100% {
        text-shadow:
          1px 1px 0 #7f0020,
          2px 2px 0 #6b001a,
          3px 3px 0 #570015,
          4px 4px 0 #450010,
          5px 5px 0 #35000c,
          6px 6px 18px rgba(0,0,0,0.5),
          0 0 28px rgba(225,29,72,0.35),
          0 0 55px rgba(225,29,72,0.12);
        transform: translateZ(0) scale(1);
      }
      50% {
        text-shadow:
          1px 1px 0 #9f0028,
          2px 2px 0 #8a0022,
          3px 3px 0 #7f0020,
          4px 4px 0 #6b001a,
          5px 5px 0 #570015,
          6px 6px 0 #450010,
          7px 7px 22px rgba(0,0,0,0.55),
          0 0 45px rgba(225,29,72,0.65),
          0 0 85px rgba(225,29,72,0.22),
          0 0 110px rgba(225,29,72,0.08);
        transform: translateZ(10px) scale(1.03);
      }
    }
  `}</style>

  <h2
    className="text-4xl sm:text-5xl font-extrabold leading-tight m-0 shrink-0"
    style={{
      color: 'var(--color-text-dark)',
      letterSpacing: '-1.5px',
      transformStyle: 'preserve-3d',
      perspective: '600px',
    }}
  >
    Services We{' '}
    <span
      className="text-red-600"
      style={{
        display: 'inline-block',
        
      }}
    >
      Offer
    </span>
  </h2>
</>
                <p className="text-base leading-relaxed m-0"
                style={{ color: 'var(--color-gray-500)' }}
              >
                End-to-end capabilities across AI, architecture, and cloud — engineered to move your enterprise from ambition to execution.
              </p>
          </div>

        {/* ── Expanding cards ── */}
        <div className="flex gap-3 mb-10" style={{ minHeight: '420px' }}>
          {featuredServices.map((svc, i) => (
            <ExpandingCard key={svc.title} {...svc} index={i} />
          ))}
        </div>

        {/* ── All Services header ── */}
        <div className="flex items-center justify-between border-t border-gray-200">
          <h3 className="text-lg font-bold m-0" style={{ color: 'var(--color-text-dark)' }}>
            All Services
          </h3>
          <button
            onClick={() => setExpanded((e) => !e)}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 border ${
              expanded
                ? 'bg-red-50 border-red-600 text-red-600'
                : 'bg-transparent border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600'
            }`}
          >
            {expanded ? 'Hide' : 'Show All'}
            <ChevronIcon open={expanded} />
          </button>
        </div>

        {/* ── Expandable list ── */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: expanded ? '900px' : '0px', transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)' }}
        >
          <div className="border-t border-gray-200 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12">
            {[col1, col2, col3].map((col, ci) => (
              <div key={ci}>
                {col.map((svc) => (
                  <ServiceRow key={svc} label={svc} />
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesList
