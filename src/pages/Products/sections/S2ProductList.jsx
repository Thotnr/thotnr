import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '../../../data/products'

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

function ProductCard({ product, index }) {
  const numStr = String(index + 1).padStart(2, '0')
  const shortDesc = product.description.length > 120
    ? product.description.slice(0, 120).trimEnd() + '…'
    : product.description

  return (
    <Link
      to={`/products/${product.slug}`}
      className="pd-product-card group flex flex-col rounded-2xl overflow-hidden no-underline h-full"
    >
      {/* Logo banner — light bg so logos show in real colors */}
      <div
        className="relative flex items-center justify-center flex-shrink-0"
        style={{ background: 'var(--color-primary)', height: '188px' }}
      >
        <span
          className="absolute top-5 left-5 text-body-sm"
          style={{ color: 'var(--color-secondary)', letterSpacing: '0.18em' }}
        >
          {numStr}
        </span>
        <span
          className="absolute top-5 right-5 text-body-sm"
          style={{ color: 'var(--color-secondary)', letterSpacing: '0.12em' }}
        >
          Est. {product.builtYear}
        </span>

        <img
          src={product.logo}
          alt={product.name}
          style={{
            maxHeight: `${product.logoH ?? 90}px`,
            maxWidth: `${product.logoW ?? 200}px`,
            objectFit: 'contain',
          }}
        />

        {/* Bottom fade into card body */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(241,250,238,0.7))' }}
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-7 lg:p-8">

        {/* Domain badge */}
        <span
          className="inline-block self-start mb-4 px-2 py-1 rounded-full text-body-sm"
          style={{
            color: 'var(--color-highlight)',
            border: '1px solid rgba(230,57,70,0.22)',
            background: 'rgba(230,57,70,0.05)',
          }}
        >
          {product.domain}
        </span>

        {/* Name */}
        <h3
          className="text-h2 leading-tight mb-1"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {product.name}
        </h3>

        {/* Tagline */}
        <p
          className="text-body-lg mb-4"
          style={{
            color: 'var(--color-text-secondary)',
            fontStyle: 'italic',
            lineHeight: 1.5,
          }}
        >
          {product.tagline}
        </p>

        {/* Short description */}
        <p
          className="text-body-sm flex-1 mb-6"
          style={{ color: 'var(--color-text-tertiary)', lineHeight: 1.78 }}
        >
          {shortDesc}
        </p>

        {/* Divider */}
        <div className="mb-5" style={{ height: '1px', background: 'rgba(11,15,25,0.08)' }} />

        {/* Stat + CTA row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col leading-none">
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(22px, 2.4vw, 28px)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: 1,
              }}
            >
              {product.stat.number}
            </span>
            <span
              className="text-caption mt-1.5"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              {product.stat.label}
            </span>
          </div>

          <div className="pd-cta flex items-center gap-2 px-4 py-2 rounded-full text-body-sm font-semibold flex-shrink-0">
            Know More
           
          </div>
        </div>

      </div>
    </Link>
  )
}

function S2ProductList() {

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <style>{`
        @keyframes pdCardIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pd-card-0 { animation: pdCardIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .pd-card-1 { animation: pdCardIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.20s both; }
        .pd-card-2 { animation: pdCardIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.32s both; }
        .pd-card-3 { animation: pdCardIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.44s both; }

        .pd-product-card {
          background: #ffffff;
          border: 1px solid rgba(11,15,25,0.08);
          box-shadow: 0 4px 24px rgba(11,15,25,0.06);
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;
        }
        .pd-product-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 24px 56px rgba(11,15,25,0.12), 0 0 0 1.5px rgba(230,57,70,0.16);
        }
        .pd-cta {
          background: var(--color-secondary);
          color: #ffffff;
          transition: background 0.22s ease;
        }
        .pd-product-card:hover .pd-cta {
          background: var(--color-highlight);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <p className="text-h4 text-[var(--color-highlight)]">What We've Built</p>
            <h2 className="text-h1 text-[var(--color-text-primary)]">Our Product Portfolio</h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">
              Each product was born from a real enterprise problem — domain-specific, deeply researched,
              and built to compound in value over time.
            </p>
          </div>

          {/* Logo size control */}
          {/* <div className="flex items-center gap-2 flex-shrink-0 md:mb-1">
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
            <SizeBtn label="+" onClick={() => setLogoSize(s => Math.min(148, s + 8))} />
          </div> */}
        </div>

        {/* 2-col card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {products.map((product, i) => (
            <div key={product.id} className={`pd-card-${i} flex`}>
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default S2ProductList
