import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import djuboLogo from '../../../assets/images/products/djubo.png'
import kingdomLogo from '../../../assets/images/products/edumarshal.png'
import cittaLogo from '../../../assets/images/products/citta.png'
import qampLogo from '../../../assets/images/products/qamp.png'

const products = [
  {
    id: 1,
    name: 'Djubo',
    tagline: 'End-to-end hospitality intelligence',
    domain: 'Hospitality',
    logo: djuboLogo,
  },
  {
    id: 2,
    name: 'Edumarshal',
    tagline: 'Learning infrastructure for institutions',
    domain: 'Education',
    logo: kingdomLogo,
  },
  {
    id: 3,
    name: 'Citta',
    tagline: 'AI-driven personalised skin health',
    domain: 'Skin Health',
    logo: cittaLogo,
  },
  {
    id: 4,
    name: 'Qamp',
    tagline: 'Intelligent infrastructure management at scale.',
    domain: 'Infrastructure',
    logo: qampLogo,
  },
]

function ProductCard({ name, tagline, domain, logo, logoSize, hovered, setHovered }) {
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-[28px] cursor-default"
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
            maxHeight: `${logoSize}px`,
            maxWidth: `${Math.round(logoSize * 3)}px`,
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
  )
}

export default function Products() {
  const navigate = useNavigate()
  const [logoSize] = useState(100)
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
              logoSize={logoSize}
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