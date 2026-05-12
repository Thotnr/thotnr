import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function S4CTA({ product }) {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-12 px-8 md:px-12 rounded-2xl"
          style={{
            background: '#ffffff',
            border: '1px solid rgba(11,15,25,0.08)',
            boxShadow: '0 4px 32px rgba(11,15,25,0.07)',
          }}
        >
          {/* Left */}
          <div>
            <p
              className="text-body mb-3"
              style={{ color: 'var(--color-highlight)', letterSpacing: '0.12em' }}
            >
              Get Started
            </p>
            <h2
              className="text-h1 leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Ready to explore<br />
              {product.name}?
            </h2>
            <p
              className="text-body mt-3 max-w-lg"
              style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
            >
              Talk to our team about how {product.name} can be tailored to your organisation's
              specific needs and existing infrastructure.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold no-underline text-body-sm"
              style={{ background: 'var(--color-secondary)', color: '#ffffff' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-highlight)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-secondary)' }}
            >
              Contact Us
             
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold no-underline text-body-sm border"
              style={{
                color: 'var(--color-text-secondary)',
                borderColor: 'rgba(11,15,25,0.18)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-secondary)'
                e.currentTarget.style.color = 'var(--color-secondary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(11,15,25,0.18)'
                e.currentTarget.style.color = 'var(--color-text-secondary)'
              }}
            >
              View All Products
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}

export default S4CTA
