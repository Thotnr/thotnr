import { useState } from 'react'
import { Link } from 'react-router-dom'

const principles = [
  {
    number:  '01',
    title:   'Built for depth',
    desc:    'Products that understand context deeply, not just surface-level data. Every feature traces back to a nuanced understanding of the domain it operates in.',
  },
  {
    number:  '02',
    title:   'Built for scale',
    desc:    'Architected from day one to serve thousands of enterprises without degradation. Performance and reliability are structural decisions, not retrofitted afterthoughts.',
  },
  {
    number:  '03',
    title:   'Built to last',
    desc:    'No trend-chasing. Every product we ship solves a structural, enduring problem — and is built with the longevity to evolve alongside it for decades.',
  },
]

function PrincipleCard({ number, title, desc }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col"
      style={{
        paddingLeft: '20px',
        borderLeft: `2px solid ${hovered ? 'var(--color-accent)' : 'rgba(255,255,255,0.12)'}`,
        transition: 'border-color 0.3s ease',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.16em',
          color: 'rgba(255,255,255,0.35)',
          marginBottom: '12px',
        }}
      >
        {number}
      </span>

      <h3
        className="text-h3"
        style={{
          color: hovered ? 'var(--color-accent)' : 'var(--color-text-white)',
          marginBottom: '10px',
          transition: 'color 0.3s ease',
          lineHeight: 1.25,
        }}
      >
        {title}
      </h3>

      <p
        className="text-body"
        style={{ color: 'rgba(255,255,255,0.62)', lineHeight: 1.7 }}
      >
        {desc}
      </p>
    </div>
  )
}

function S3Philosophy() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-h4 text-[var(--color-highlight)]">Our Approach</p>
          <h2 className="text-h1 text-white">How We Build</h2>
          <p className="text-body mt-2 max-w-xl" style={{ color: 'rgba(255,255,255,0.62)' }}>
            Three principles that govern every product decision we make — from architecture to interface.
          </p>
        </div>

        {/* Principle cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {principles.map((p) => (
            <PrincipleCard key={p.number} {...p} />
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-16 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div>
            <p
              className="text-h3"
              style={{ color: 'var(--color-text-white)', marginBottom: '6px' }}
            >
              Have a product idea?
            </p>
            <p className="text-body" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Let's explore whether it's the right problem to build for.
            </p>
          </div>

          <Link
            to="/contact"
            className="flex-shrink-0 flex items-center gap-2 px-7 py-3 rounded-full no-underline font-semibold"
            style={{
              border: '1px solid var(--color-accent)',
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-accent)'
              e.currentTarget.style.color      = 'var(--color-secondary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color      = 'var(--color-accent)'
            }}
          >
            Talk to us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default S3Philosophy
