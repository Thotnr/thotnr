import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import djuboLogo from '../../../assets/images/products/djubo.png'
import kingdomLogo from '../../../assets/images/products/edumarshal.png'
import cittaLogo from '../../../assets/images/products/citta.png'
import qampLogo from '../../../assets/images/products/qamp.png'

const products = [
  {
    id: 1,
    slug: 'djubo',
    name: 'Djubo',
    tagline: 'End-to-end hospitality intelligence',
    domain: 'Hospitality',
    logo: djuboLogo,
    logoW: 200,
    logoH: 200,
  },
  {
    id: 2,
    slug: 'edumarshal',
    name: 'Edumarshal',
    tagline: 'Learning infrastructure for institutions',
    domain: 'Education',
    logo: kingdomLogo,
    logoW: 300,
    logoH: 300,
  },
  {
    id: 3,
    slug: 'citta',
    name: 'Citta',
    tagline: 'AI-driven personalised skin health',
    domain: 'Skin Health',
    logo: cittaLogo,
    logoW: 230,
    logoH: 230,
  },
  {
    id: 4,
    slug: 'qamp',
    name: 'Qamp',
    tagline: 'AI-first hyper-local discovery and communication for India.',
    domain: 'Hyperlocal',
    logo: qampLogo,
    logoW: 200,
    logoH: 200,
  },
]

function ProductCard({ name, tagline, domain, logo, logoW, logoH, slug, hovered, setHovered }) {
  return (
    <Link
      to={`/products/${slug}`}
      style={{ display: 'block', textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
    <div
      className="relative flex h-[360px] flex-col items-center justify-center overflow-hidden rounded-[28px] cursor-pointer"
      style={{
        padding: '42px 28px 34px',
        background:
          'linear-gradient(145deg, rgba(255,255,255,0.45), rgba(255,255,255,0.32))',
        border: `1px solid ${hovered ? 'rgba(225,29,72,0.16)' : 'rgba(11,15,25,0.08)'}`,
        boxShadow: hovered
          ? '0 26px 70px rgba(11,15,25,0.13), 0 8px 20px rgba(225,29,72,0.08)'
          : '0 10px 34px rgba(11,15,25,0.06)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition:
          'transform 0.36s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Hover arrow — top-right, fades in to signal clickability */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: `1px solid ${hovered ? 'rgba(225,29,72,0.3)' : 'rgba(11,15,25,0.10)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translate(0,0)' : 'translate(3px,-3px)',
        transition: 'opacity 0.28s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.28s ease',
        zIndex: 10,
      }}>
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
          <path d="M1 13L13 1M13 1H5M13 1V9"
            stroke={hovered ? 'var(--color-highlight)' : 'var(--color-text-tertiary)'}
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: 'stroke 0.28s ease' }}
          />
        </svg>
      </div>
      {/* Soft background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(225,29,72,0.10), transparent 42%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Domain pill */}
      <span
        className="relative z-10 mb-7 rounded-full px-3 py-1"
        style={{
          fontSize: '12px',
          letterSpacing: '0.12em',
          color: hovered ? 'var(--color-highlight)' : 'var(--color-secondary)',
          background: hovered ? 'rgba(225,29,72,0.07)' : 'rgba(11,15,25,0.04)',
          transition: 'color 0.3s ease, background 0.3s ease',
          fontFamily: 'var(--font-mono)',
          textTransform: 'uppercase',
        }}
      >
        {domain}
      </span>

      {/* Logo */}
      <div
        className="relative z-10 flex items-center justify-center w-full"
        style={{
          height: '88px',
          marginBottom: '30px',
        }}
      >
        <img
          src={logo}
          alt={name}
          style={{
            maxHeight: `${logoH}px`,
            maxWidth: `${logoW}px`,
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.36s ease',
          }}
        />
      </div>

      {/* Name */}
      <h3
        className="relative z-10 m-0 text-center"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '20px',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          marginBottom: '10px',
          lineHeight: 1.2,
        }}
      >
        {name}
      </h3>

      {/* Tagline */}
      <p
        className="relative z-10 text-center m-0"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '14px',
          fontWeight: 400,
          color: 'var(--color-text-tertiary)',
          lineHeight: 1.55,
          maxWidth: '260px',
        }}
      >
        {tagline}
      </p>

      {/* Accent underline */}
      <div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{
          width: hovered ? '100%' : '0%',
          background: 'var(--color-highlight)',
          transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </div>
    </Link>
  )
}

export default function Products() {
  const navigate = useNavigate()
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <p className="text-h4 text-[var(--color-highlight)]">
              Built for Enterprises
            </p>

            <h2 className="text-h1 text-[var(--color-text-primary)]">
              Our Products
            </h2>

            <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">
              Architecting the foundational intelligence that powers modern enterprises —
              from hospitality to education and skin health. Built to integrate seamlessly,
              scale reliably, and deliver measurable impact.
            </p>
          </div>
        </div>

        {/* Cards - responsive 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              {...p}
              hovered={hoveredId === p.id}
              setHovered={(v) => setHoveredId(v ? p.id : null)}
            />
          ))}
        </div>

        {/* Show more */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold cursor-pointer bg-transparent"
            style={{
              border: '1px solid rgba(11,15,25,0.2)',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              transition:
                'background 0.22s ease, border-color 0.22s ease, color 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-text-primary)'
              e.currentTarget.style.borderColor = 'var(--color-text-primary)'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(11,15,25,0.2)'
              e.currentTarget.style.color = 'var(--color-text-primary)'
            }}
          >
            View all products
          </button>
        </div>

      </div>
    </section>
  )
}