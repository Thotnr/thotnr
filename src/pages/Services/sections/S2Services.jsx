import { useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../../data/services'

function ServiceRow({ slug, number, title, eyebrow, tagline, description, coverImage, index }) {
  const [hovered, setHovered] = useState(false)
  const isImageLeft = index % 2 === 0
  const nudge = isImageLeft ? 'translateX(6px)' : 'translateX(-6px)'

  return (
    <div
      className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-14 py-12 md:py-16`}
      style={{ borderBottom: '1px solid var(--color-divider)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* IMAGE */}
      <div
        className="w-full md:w-[50%] flex-shrink-0 overflow-hidden rounded-2xl"
        style={{
          boxShadow: hovered
            ? '0 24px 64px rgba(11,15,25,0.18)'
            : '0 8px 32px rgba(11,15,25,0.08)',
          transition: 'box-shadow 0.6s ease',
        }}
      >
        <img
          src={coverImage}
          alt={title}
          className="w-full object-cover block rounded-2xl"
          style={{
            aspectRatio: '16/10',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-[50%] flex flex-col gap-5">

        
        

        {/* Eyebrow */}
        <p
          className="text-body"
          style={{ color: 'var(--color-highlight)', letterSpacing: '0.14em' }}
        >
          {eyebrow}
        </p>

        {/* Title */}
        <h3
          className="text-h2 text-[var(--color-text-primary)]"
          style={{
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>

        {/* Tagline */}
        <p
          className="text-body-sm"
          style={{
            color: 'var(--color-text-tertiary)',
            fontStyle: 'italic',
            lineHeight: 1.7,
          }}
        >
          {tagline}
        </p>

        {/* Description */}
        <p
          className="text-body text-[var(--color-text-secondary)] line-clamp-4"
          style={{ lineHeight: 1.8 }}
        >
          {description}
        </p>

        {/* CTA */}
        <Link
          to={`/services/${slug}`}
          className='text-body'
          style={{
            
            
            
            color: 'var(--color-text-primary)',
           
            // transition: 'color 0.25s ease, border-color 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-highlight)'
            e.currentTarget.style.borderColor = 'var(--color-highlight)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-text-primary)'
            e.currentTarget.style.borderColor = 'var(--color-divider)'
          }}
        >
          Read more...
          
        </Link>

      </div>
    </div>
  )
}

function S2Services() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-4">
          <p className="text-h4 text-[var(--color-highlight)]">What We Offer</p>
          <h2 className="text-h1 text-[var(--color-text-primary)]">Our Services</h2>
          <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">
            Five integrated practice areas designed for the complexity of modern enterprise transformation.
          </p>
        </div>

        {/* Top border */}
        <div className="mt-10" style={{ borderTop: '1px solid var(--color-divider)' }} />

        {/* Rows */}
        {services.map((svc, i) => (
          <ServiceRow
            key={svc.slug}
            slug={svc.slug}
            number={svc.number}
            title={svc.title}
            eyebrow={svc.eyebrow}
            tagline={svc.tagline}
            description={svc.description}
            coverImage={svc.coverImage}
            index={i}
          />
        ))}

      </div>
    </section>
  )
}

export default S2Services
