import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

// Row 1: first 2 services (AI & Intelligence, Enterprise Architecture)
// Row 2: remaining 3 (Data & Engineering, Cloud, Experience, Design & Trust)
const ROW1 = services.slice(0, 2)
const ROW2 = services.slice(2)

function useInView(threshold = 0.08) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function ServiceBlock({ service, colIndex, rowOffset, inView }) {
  const [hovered, setHovered] = useState(false)
  const staggerDelay = (rowOffset + colIndex) * 0.13

  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${staggerDelay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${staggerDelay}s`,
      }}
    >
      {/* Eyebrow */}
      <p className="text-body-sm" style={{ color: 'var(--color-highlight)', marginBottom: '14px' }}>
        {service.eyebrow}
      </p>

      {/* Heading — the clickable link */}
      <Link
        to={`/services/${service.slug}`}
        style={{ textDecoration: 'none', display: 'block' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Title row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <h3
            className="text-h2"
            style={{
              color: hovered ? 'var(--color-secondary)' : 'var(--color-text-primary)',
              lineHeight: 1.2,
              flex: 1,
              transition: 'color 0.28s ease',
            }}
          >
            {service.title}
          </h3>

          {/* Arrow — moves diagonally on hover */}
          <svg
            width="18" height="18" viewBox="0 0 14 14" fill="none"
            style={{
              marginTop: '5px',
              flexShrink: 0,
              opacity: hovered ? 1 : 0,                                     
              transform: hovered ? 'translate(0,0)' : 'translate(-4px,4px)',
              transition: 'opacity 0.3s ease, transform 0.38s cubic-bezier(0+.16,1,0.3,1)',                                          
            }}
          >
            <path
              d="M1 13L13 1M13 1H5M13 1V9"
              stroke={hovered ? 'var(--color-secondary)' : 'var(--color-text-tertiary)'}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: 'stroke 0.28s ease' }}
            />
          </svg>
        </div>

        {/* Animated underline — grows from left on hover */}
        <div
          style={{
            height: '2px',
            background: 'var(--color-secondary)',
            marginTop: '10px',
            borderRadius: '2px',
            transformOrigin: 'left center',
            transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </Link>

      {/* Sub-services — stagger in after heading */}
      <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '13px' }}>
        {service.subServices.map((sub, i) => (
          <div
            key={sub.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(8px)',
              transition: `opacity 0.55s ease ${staggerDelay + 0.28 + i * 0.07}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${staggerDelay + 0.28 + i * 0.07}s`,
            }}
          >
            <div
              style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: 'var(--color-accent)', flexShrink: 0,
              }}
            />
            <span className="text-body-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {sub.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AllServicesSection() {
  const [headerRef, headerInView] = useInView(0.2)
  const [row1Ref, row1InView] = useInView(0.1)
  const [sepRef, sepInView] = useInView(0.3)
  const [row2Ref, row2InView] = useInView(0.08)

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{
        background: 'radial-gradient(ellipse at 80% 10%, rgba(255,255,255,0.4) 0%, var(--color-accent) 60%)',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-14"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.75s ease, transform 0.75s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div>
            <p className="text-h4" style={{ color: 'var(--color-highlight)' }}>Practice Areas</p>
            <h2 className="text-h1" style={{ color: 'var(--color-text-primary)', lineHeight: 1.15 }}>
              Everything We Build
            </h2>
          </div>
          <div>
            <p
              className="text-body"
              style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: '480px' }}
            >
              Five integrated practice areas spanning thirty-one capabilities — each built around a single ambition: intelligence that augments.
            </p>
          </div>
        </div>

        {/* Row 1 — 2 equal columns */}
        <div
          ref={row1Ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
        >
          {ROW1.map((svc, i) => (
            <ServiceBlock
              key={svc.slug}
              service={svc}
              colIndex={i}
              rowOffset={0}
              inView={row1InView}
            />
          ))}
        </div>

        {/* Horizontal row separator — animates in */}
        <div
          ref={sepRef}
          style={{
            height: '1px',
            background: 'rgba(29,53,87,0.12)',
            margin: '56px 0',
            transformOrigin: 'left center',
            transform: sepInView ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 1s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        />

        {/* Row 2 — 3 equal columns */}
        <div
          ref={row2Ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          {ROW2.map((svc, i) => (
            <ServiceBlock
              key={svc.slug}
              service={svc}
              colIndex={i}
              rowOffset={ROW1.length}
              inView={row2InView}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default AllServicesSection
