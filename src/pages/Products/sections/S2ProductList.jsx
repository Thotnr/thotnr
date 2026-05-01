import {
  Building2, BarChart2, Users,
  BookOpen, CreditCard, Calendar,
  Scan, Sparkles, TrendingUp,
  Wifi, Zap, Wrench,
} from 'lucide-react'
import { products } from '../../../data/products'

const ICON_MAP = {
  Building2, BarChart2, Users,
  BookOpen, CreditCard, Calendar,
  Scan, Sparkles, TrendingUp,
  Wifi, Zap, Wrench,
}

function ProductLogoCard({ index, logo, name, builtYear }) {
  const numStr = String(index + 1).padStart(2, '0')
  return (
    <div
      className="w-full md:w-[200px] flex-shrink-0 rounded-2xl flex flex-col items-center justify-between p-6"
      style={{
        background: 'rgba(168,218,220,0.12)',
        minHeight: '200px',
        border: '1px solid rgba(168,218,220,0.25)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '24px',
          fontWeight: 600,
          letterSpacing: '0.18em',
          color: 'var(--color-text-tertiary)',
          alignSelf: 'flex-start',
        }}
      >
        {numStr}
      </span>

      <img
        src={logo}
        alt={name}
        style={{
          maxHeight: '72px',
          maxWidth: '160px',
          objectFit: 'contain',
        }}
      />

      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-text-tertiary)',
          alignSelf: 'flex-end',
        }}
      >
        Est. {builtYear}
      </span>
    </div>
  )
}

function ProductBasicInfo({ domain, name, tagline, description, stat }) {
  return (
    <div className="flex-1 flex flex-col justify-center py-2">
      <span
        className="inline-block self-start mb-4 px-3 py-1 rounded-full"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          border: '1px solid var(--color-highlight)',
          color: 'var(--color-highlight)',
        }}
      >
        {domain}
      </span>

      <h2
        className="text-h1"
        style={{ color: 'var(--color-text-primary)', marginBottom: '8px', lineHeight: 1.15 }}
      >
        {name}
      </h2>

      <p
        className="text-body-lg"
        style={{ color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '14px' }}
      >
        {tagline}
      </p>

      <p
        className="text-body"
        style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: '20px' }}
      >
        {description}
      </p>

      <div className="flex items-baseline gap-3">
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '36px',
            fontWeight: 800,
            lineHeight: 1,
            color: 'var(--color-text-primary)',
          }}
        >
          {stat.number}
        </span>
        <span className="text-body-sm" style={{ color: 'var(--color-text-tertiary)' }}>
          {stat.label}
        </span>
      </div>
    </div>
  )
}

function FeatureCard({ icon, label, desc }) {
  const Icon = ICON_MAP[icon]
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: 'rgba(168,218,220,0.07)', border: '1px solid rgba(168,218,220,0.18)' }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className="flex items-center justify-center rounded-lg flex-shrink-0"
          style={{ width: '32px', height: '32px', background: 'rgba(230,57,70,0.08)' }}
        >
          {Icon && <Icon size={15} color="var(--color-highlight)" strokeWidth={1.8} />}
        </div>
        <p
          className="text-body-sm font-semibold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {label}
        </p>
      </div>
      <p className="text-body-sm" style={{ color: 'var(--color-text-tertiary)', lineHeight: 1.6 }}>
        {desc}
      </p>
    </div>
  )
}

function ProductItem({ product, index }) {
  return (
    <div className="product-item">
      {/* ROW 1: Logo Card + Basic Details */}
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch">
        <ProductLogoCard
          index={index}
          logo={product.logo}
          name={product.name}
          builtYear={product.builtYear}
        />
        <ProductBasicInfo
          domain={product.domain}
          name={product.name}
          tagline={product.tagline}
          description={product.description}
          stat={product.stat}
        />
      </div>

      {/* ROW 2: Details + Features */}
      <div className="mt-8 lg:mt-10">
        {/* Why built + Problem solved */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 mb-6"
          style={{
            borderTop: '1px solid rgba(11,15,25,0.09)',
            borderBottom: '1px solid rgba(11,15,25,0.09)',
          }}
        >
          <div>
            <p
              className="mb-2"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-highlight)',
              }}
            >
              Why We Built It
            </p>
            <p className="text-body-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              {product.motive}
            </p>
          </div>
          <div>
            <p
              className="mb-2"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-highlight)',
              }}
            >
              Problem Solved
            </p>
            <p className="text-body-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              {product.problemSolved}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.features.map((f) => (
            <FeatureCard key={f.label} {...f} />
          ))}
        </div>
      </div>
    </div>
  )
}

function S2ProductList() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]"
    >
      <style>{`
        @keyframes productIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .product-item { animation: productIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .product-item:nth-child(1) { animation-delay: 0.05s; }
        .product-item:nth-child(2) { animation-delay: 0.2s;  }
        .product-item:nth-child(3) { animation-delay: 0.35s; }
        .product-item:nth-child(4) { animation-delay: 0.5s;  }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-h4 text-[var(--color-highlight)]">What We've Built</p>
          <h2 className="text-h1 text-[var(--color-text-primary)]">Our Product Portfolio</h2>
          <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">
            Each product was born from a real enterprise problem — domain-specific, deeply researched,
            and built to compound in value over time.
          </p>
        </div>

        {/* Product list */}
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
          {products.map((product, index) => (
            <div key={product.id}>
              <ProductItem product={product} index={index} />
              {index < products.length - 1 && (
                <div
                  className="mt-16 md:mt-20 lg:mt-24"
                  style={{ height: '1px', background: 'rgba(11,15,25,0.07)' }}
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default S2ProductList
