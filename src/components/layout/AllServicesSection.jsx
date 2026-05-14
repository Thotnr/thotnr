import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

function useInView(threshold = 0.14) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.unobserve(el) }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function SubPill({ name, pillIndex, rowInView }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-label"
      style={{
        display: 'inline-block',
        padding: '6px 14px',
        borderRadius: '100px',
        border: `1px solid ${hovered ? 'rgba(29,53,87,0.4)' : 'rgba(11,15,25,0.11)'}`,
        background: hovered ? 'rgba(29,53,87,0.07)' : 'transparent',
        color: hovered ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
        cursor: 'default',
        opacity: rowInView ? 1 : 0,
        transform: rowInView ? 'translateY(0)' : 'translateY(10px)',
        transition: [
          `opacity 0.55s ease ${0.3 + pillIndex * 0.06}s`,
          `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.3 + pillIndex * 0.06}s`,
          'border-color 0.25s ease',
          'background 0.25s ease',
          'color 0.25s ease',
        ].join(', '),
      }}
    >
      {name}
    </span>
  )
}

function ServiceRow({ service, rowIndex }) {
  const [rowRef, inView] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div ref={rowRef}>
      <style>{`
        @keyframes divider-in-${rowIndex} {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .row-divider-${rowIndex} {
          transform-origin: left center;
          animation: ${inView ? `divider-in-${rowIndex} 0.8s cubic-bezier(0.16,1,0.3,1) ${rowIndex * 0.06}s both` : 'none'};
        }
      `}</style>

      {/* Animated top divider */}
      <div
        className={`row-divider-${rowIndex}`}
        style={{
          height: '1px',
          background: 'rgba(11,15,25,0.09)',
        }}
      />

      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: `opacity 0.72s ease ${rowIndex * 0.09}s, transform 0.72s cubic-bezier(0.16,1,0.3,1) ${rowIndex * 0.09}s`,
        }}
      >
        {/* Left accent bar (hover) */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '12px',
            bottom: '12px',
            width: '2px',
            borderRadius: '2px',
            background: 'var(--color-highlight)',
            transformOrigin: 'top center',
            transform: hovered ? 'scaleY(1)' : 'scaleY(0)',
            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
          }}
        />

        {/* Row background tint */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(29,53,87,0.028)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            borderRadius: '4px',
            pointerEvents: 'none',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10 py-8 md:py-10 pl-6">

          {/* Left — service title */}
          <div className="lg:col-span-2 flex items-start">
            <Link
              to={`/services/${service.slug}`}
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                flex: 1,
              }}
            >
              <div style={{ flex: 1 }}>
                <p
                  className="text-label"
                  style={{
                    color: 'var(--color-highlight)',
                    marginBottom: '8px',
                    display: 'block',
                  }}
                >
                  {service.eyebrow}
                </p>
                <h3
                  className="text-h2"
                  style={{
                    color: hovered ? 'var(--color-secondary)' : 'var(--color-text-primary)',
                    lineHeight: 1.2,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Arrow */}
              <div
                style={{
                  marginTop: '32px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: `1px solid ${hovered ? 'rgba(230,57,70,0.5)' : 'rgba(11,15,25,0.12)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  background: hovered ? 'rgba(230,57,70,0.06)' : 'transparent',
                  transform: hovered ? 'translate(4px, -4px)' : 'translate(0, 0)',
                  transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, background 0.3s ease',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  style={{
                    transform: hovered ? 'rotate(-45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  <path
                    d="M1 13L13 1M13 1H5M13 1V9"
                    stroke={hovered ? 'var(--color-highlight)' : 'var(--color-text-tertiary)'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Right — sub-service pills */}
          <div
            className="lg:col-span-3 flex flex-wrap gap-2 lg:items-start"
            style={{ paddingTop: '2px' }}
          >
            {/* Tagline */}
            <div className="w-full mb-3">
              <p
                className="text-body-sm"
                style={{
                  color: 'var(--color-text-tertiary)',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity 0.6s ease ${0.15 + rowIndex * 0.06}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.15 + rowIndex * 0.06}s`,
                }}
              >
                {service.tagline}
              </p>
            </div>

            {service.subServices.map((sub, pi) => (
              <SubPill
                key={sub.name}
                name={sub.name}
                pillIndex={pi}
                rowInView={inView}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

function AllServicesSection() {
  const [headerRef, headerInView] = useInView(0.2)

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-2"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(22px)',
            transition: 'opacity 0.75s ease, transform 0.75s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div>
            <p className="text-h4 text-[var(--color-highlight)]">Practice Areas</p>
            <h2 className="text-h1 text-[var(--color-text-primary)]" style={{ lineHeight: 1.15 }}>
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
            <p
              className="text-body-sm"
              style={{ color: 'var(--color-text-tertiary)', marginTop: '10px', fontStyle: 'italic' }}
            >
              Select any practice area to explore its full capability depth.
            </p>
          </div>
        </div>

        {/* Service rows */}
        <div>
          {services.map((svc, i) => (
            <ServiceRow key={svc.slug} service={svc} rowIndex={i} />
          ))}
          {/* Final bottom border */}
          <div style={{ height: '1px', background: 'rgba(11,15,25,0.09)' }} />
        </div>

      </div>
    </section>
  )
}

export default AllServicesSection
