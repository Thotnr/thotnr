import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import djuboLogo   from '../../../assets/images/products/djubo.png'
import kingdomLogo from '../../../assets/images/products/edumarshal.png'
import cittaLogo   from '../../../assets/images/products/citta.png'

const products = [
  {
    id:      1,
    name:    'Djubo',
    tagline: 'End-to-end hospitality intelligence',
    domain:  'Hospitality',
    logo:    djuboLogo,
  },
  {
    id:      2,
    name:    'Edumarshal',
    tagline: 'Learning infrastructure for institutions',
    domain:  'Education',
    logo:    kingdomLogo,
  },
  {
    id:      3,
    name:    'Citta',
    tagline: 'AI-driven personalised skin health',
    domain:  'Skin Health',
    logo:    cittaLogo,
  },
]

function SizeBtn({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-full cursor-pointer"
      style={{
        width: '26px',
        height: '26px',
        background: 'rgba(11,15,25,0.06)',
        border: '1px solid rgba(11,15,25,0.10)',
        color: 'var(--color-text-secondary)',
        fontFamily: 'var(--font-heading)',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 1,
        transition: 'background 0.18s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(11,15,25,0.12)' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(11,15,25,0.06)' }}
    >
      {label}
    </button>
  )
}

function ProductCard({ name, tagline, domain, logo, logoSize, hovered, setHovered }) {
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center overflow-hidden rounded-2xl cursor-default"
      style={{
        padding: '44px 32px 36px',
        background: '#ffffff',
        border: `1px solid ${hovered ? 'rgba(11,15,25,0.11)' : 'rgba(11,15,25,0.06)'}`,
        boxShadow: hovered
          ? '0 20px 52px rgba(11,15,25,0.10), 0 4px 12px rgba(11,15,25,0.06)'
          : '0 2px 12px rgba(11,15,25,0.04)',
        transform: hovered ? 'translateY(-7px)' : 'translateY(0)',
        transition: 'transform 0.36s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Domain pill */}
      <span
        className="text-label mb-6 px-3 py-1 rounded-full"
        style={{
          fontSize: '10px',
          letterSpacing: '0.12em',
          color: hovered ? 'var(--color-highlight)' : 'var(--color-text-tertiary)',
          background: hovered ? 'rgba(230,57,70,0.07)' : 'rgba(11,15,25,0.04)',
          transition: 'color 0.3s ease, background 0.3s ease',
          fontFamily: 'var(--font-mono)',
          textTransform: 'uppercase',
        }}
      >
        {domain}
      </span>

      {/* Logo */}
      <div
        className="flex items-center justify-center"
        style={{ height: '80px', width: '100%', marginBottom: '28px' }}
      >
        <img
          src={logo}
          alt={name}
          style={{
            maxHeight: `${logoSize}px`,
            maxWidth: `${Math.round(logoSize * 2.94)}px`,
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
        className="m-0 text-center"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '18px',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          marginBottom: '8px',
          lineHeight: 1.2,
        }}
      >
        {name}
      </h3>

      {/* Tagline */}
      <p
        className="text-center m-0"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '13px',
          fontWeight: 400,
          color: 'var(--color-text-tertiary)',
          lineHeight: 1.5,
          maxWidth: '180px',
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
  const [logoSize, setLogoSize] = useState(68)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <p className="text-h4 text-[var(--color-highlight)]">Built for Enterprises</p>
            <h2 className="text-h1 text-[var(--color-text-primary)]">Our Products</h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">
              Architecting the foundational intelligence that powers modern enterprises — from hospitality to education
              and skin health. Built to integrate seamlessly, scale reliably, and deliver measurable impact.
            </p>
          </div>

          {/* Logo size control */}
          <div className="flex items-center gap-2 flex-shrink-0 md:mb-1">
            <span
              className="text-caption"
              style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.10em' }}
            >
              LOGO
            </span>
            <SizeBtn label="−" onClick={() => setLogoSize(s => Math.max(32, s - 8))} />
            <span
              className="text-caption text-center"
              style={{ color: 'var(--color-text-secondary)', minWidth: '36px' }}
            >
              {logoSize}px
            </span>
            <SizeBtn label="+" onClick={() => setLogoSize(s => Math.min(140, s + 8))} />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold cursor-pointer bg-transparent"
            style={{
              border: '1px solid rgba(11,15,25,0.2)',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              transition: 'background 0.22s ease, border-color 0.22s ease, color 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-text-primary)'
              e.currentTarget.style.borderColor = 'var(--color-secondary)'
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
