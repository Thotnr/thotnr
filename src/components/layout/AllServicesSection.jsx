import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

function useInView(threshold = 0.06) {
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

function SubItem({ sub, serviceSlug, idx, inView, colDelay }) {
  const [hov, setHov] = useState(false)
  const d = colDelay + 0.20 + idx * 0.042

  return (
    <Link
      to={`/services/${serviceSlug}`}
      style={{ textDecoration: 'none', display: 'block' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          height: '34px',

          borderBottom: '1px solid rgba(52, 72, 92, 0.10)',

          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(-10px)',

          transition: `
            opacity 0.5s ease ${d}s,
            transform 0.5s cubic-bezier(0.16,1,0.3,1) ${d}s
          `,
        }}
      >
        <span
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            flexShrink: 0,

            background: hov
              ? 'var(--color-highlight)'
              : 'rgba(52, 72, 92, 0.46)',

            transition: 'background 0.2s ease',
          }}
        />

        <span
          className="text-body-sm"
          style={{
            color: !hov
              ? 'rgba(15, 23, 42, 0.98)'
              : 'var(--color-highlight)',

            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',

            transition: 'color 0.2s ease',
          }}
        >
          {sub.name}
        </span>
      </div>
    </Link>
  )
}

function ServiceColumn({ service, index, inView }) {
  const [hov, setHov] = useState(false)
  const d = index * 0.10
  const isLast = index === services.length - 1

  return (
    <div
      style={{
        padding: '0 20px',
        borderRight: isLast ? 'none' : '1px solid rgba(29,53,87,0.15)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.65s ease ${d}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${d}s`,
      }}
    >
      {/* Title — fixed height so 1-line titles align with 2-line titles */}
      <Link
        to={`/services/${service.slug}`}
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'flex-start',
          minHeight: '50px',
          marginBottom: '16px',
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <h3
          className="text-h4"
          style={{
            color: hov ? 'var(--color-secondary)' : 'var(--color-text-primary)',
            lineHeight: 1.3,
            fontWeight: 600,
            transition: 'color 0.24s ease',
          }}
        >
          {service.title}
        </h3>
      </Link>

      {/* Separator */}
      <div
        style={{
          height: '1px',
          background: 'rgba(29,53,87,0.14)',
          marginBottom: '0',
          transformOrigin: 'left',
          transform: inView ? 'scaleX(1)' : 'scaleX(0)',
          transition: `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${d + 0.15}s`,
        }}
      />

      {/* Sub-services */}
      <div>
        {service.subServices.map((sub, i) => (
          <SubItem
            key={sub.name}
            sub={sub}
            serviceSlug={service.slug}
            idx={i}
            inView={inView}
            colDelay={d}
          />
        ))}
      </div>
    </div>
  )
}

function AllServicesSection() {
  const [secRef, inView] = useInView(0.05)

  return (
    <section
      ref={secRef}
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{
        background: 'radial-gradient(ellipse at 80% 10%, rgba(255,255,255,0.4) 0%, var(--color-accent) 60%)',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(22px)',
            transition: 'opacity 0.65s ease, transform 0.65s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className="text-h4 text-[var(--color-highlight)]">Practice Areas</p>
          <h2 className="text-h1" style={{ color: 'var(--color-text-primary)', lineHeight: 1.15 }}>
            Everything We Build
          </h2>
          <p className="text-body mt-2 max-w-2xl" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            Five practice areas, fifty capabilities — each built around a single ambition: intelligence that augments.
          </p>
        </div>

        {/* 5-column grid — 1 col mobile → 2 sm → 3 lg → 5 xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-10 gap-x-0">
          {services.map((service, i) => (
            <ServiceColumn
              key={service.slug}
              service={service}
              index={i}
              inView={inView}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default AllServicesSection
