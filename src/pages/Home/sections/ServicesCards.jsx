import { useState, useEffect, useRef } from 'react'
import icon1 from '../../../assets/images/human-ai.png'
import icon2 from '../../../assets/images/human-meets-ai.png'
import icon3 from '../../../assets/images/collabration-layers.png'

function useInView(threshold = 0.12) {
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

const capabilities = [
  {
    icon: icon1,
    category: 'Augmentation',
    title: 'Augmented Decisions',
    body: 'We design AI systems that sharpen human judgment with speed, scale, and precision — surfacing the right intelligence at the right moment so every decision is faster, better-informed, and more accountable.',
  },
  {
    icon: icon2,
    category: 'Grounded AI',
    title: 'Grounded AI',
    body: 'AI grounded in your enterprise context — connected to your data, your domain, and your operational reality. Not a generic model, but intelligence built around the specifics of how your business actually works.',
  },
  {
    icon: icon3,
    category: 'Integration',
    title: 'Embedded Execution',
    body: 'Intelligence embedded directly into workflows, systems, and decision points — not a standalone tool, but a native enterprise capability that improves efficiency, consistency, and adaptability over time.',
  },
]

function CapabilityCard({ icon, category, title, body, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '16px',
        padding: '36px 32px 28px',
        background: hovered
          ? 'rgba(255,255,255,0.072)'
          : 'rgba(255,255,255,0.038)',
        border: `1px solid ${hovered ? 'rgba(168,218,220,0.24)' : 'rgba(255,255,255,0.08)'}`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        transform: inView
          ? hovered ? 'translateY(-10px)' : 'translateY(0)'
          : 'translateY(44px)',
        opacity: inView ? 1 : 0,
        boxShadow: hovered
          ? '0 32px 72px rgba(0,0,0,0.6), 0 0 56px rgba(168,218,220,0.07), inset 0 1px 0 rgba(255,255,255,0.06)'
          : '0 4px 28px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)',
        transition: [
          `opacity 0.78s ease ${0.15 + index * 0.14}s`,
          `transform 0.78s cubic-bezier(0.16,1,0.3,1) ${0.15 + index * 0.14}s`,
          'background 0.35s ease',
          'border-color 0.35s ease',
          'box-shadow 0.45s ease',
        ].join(', '),
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
        overflow: 'hidden',
      }}
    >

      {/* Icon + ambient glow */}
      <div style={{ position: 'relative', marginBottom: '28px', width: '104px', height: '104px' }}>
        <div
          style={{
            position: 'absolute',
            inset: '-28px',
            borderRadius: '50%',
            background: hovered
              ? 'radial-gradient(circle, rgba(168,218,220,0.2) 0%, transparent 68%)'
              : 'radial-gradient(circle, rgba(168,218,220,0.07) 0%, transparent 68%)',
            transition: 'background 0.45s ease',
            pointerEvents: 'none',
          }}
        />
        <img
          src={icon}
          alt={title}
          style={{
            width: '104px',
            height: '104px',
            objectFit: 'contain',
            position: 'relative',
            zIndex: 1,
            filter: hovered
              ? 'brightness(1.12) drop-shadow(0 0 12px rgba(168,218,220,0.25))'
              : 'brightness(1)',
            transition: 'filter 0.45s ease',
          }}
        />
      </div>

      {/* Category label */}
      <p
        className="text-label"
        style={{ color: 'var(--color-accent)', marginBottom: '10px' }}
      >
        {category}
      </p>

      {/* Title */}
      <h3
        className="text-h3"
        style={{
          color: 'var(--color-text-white)',
          lineHeight: 1.25,
          marginBottom: '14px',
          fontWeight: 600,
        }}
      >
        {title}
      </h3>

      {/* Body */}
      <p
        className="text-body"
        style={{
          color: 'rgba(255,255,255,0.85)', lineHeight: 1.75,
          flex: 1,
        }}
      >
        {body}
      </p>


      {/* Arrow button */}
    
      {/* Bottom accent glow line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '15%',
          right: '15%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)',
          opacity: hovered ? 0.65 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />
    </div>
  )
}

function ServicesCards() {
  const [sectionRef, inView] = useInView()

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16 relative overflow-hidden"
      style={{ background: 'var(--color-secondary)' }}
    >
      {/* Decorative radial glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-120px',
          left: '-80px',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,218,220,0.09) 0%, transparent 62%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-80px',
          right: '-60px',
          width: '440px',
          height: '440px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,57,70,0.07) 0%, transparent 62%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '640px',
          height: '360px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(168,218,220,0.04) 0%, transparent 62%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div ref={sectionRef} className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-12 md:mb-14">

          {/* Left: eyebrow + heading */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(26px)',
              transition: 'opacity 0.78s ease, transform 0.78s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
              
              <p className="text-h4 mb-4 tracking-widest" style={{ color: 'var(--color-highlight)' }}>
              AI Capabilities
            </p>
            </div>

            <h2
              className="text-h1"
              style={{ color: 'var(--color-text-white)', lineHeight: 1.16, fontWeight: 600 }}
            >
              The foundations of{' '}
              <span
                style={{
                  fontFamily: 'var(--font-accent)',
                  fontStyle: 'italic',
                  color: 'var(--color-accent)',
                }}
              >
                Intelligence Augmented
              </span>
            </h2>
          </div>

          {/* Right: description */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(26px)',
              transition: 'opacity 0.78s ease 0.16s, transform 0.78s cubic-bezier(0.16,1,0.3,1) 0.16s',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '2px',
                borderRadius: '2px',
                background: 'var(--color-highlight)',
                marginBottom: '20px',
              }}
            />
            <p
              className="text-body-lg"
              style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}
            >
              Three core capabilities turn AI from a standalone model into practical business value. We focus on improving decisions, grounding AI in real business context, and embedding it into execution — so intelligence does not sit outside the enterprise, but works within it.
            </p>
          </div>
        </div>

        {/* ── Cards ── */}
        <style>{`
          @media (min-width: 768px) and (max-width: 1023px) {
            .cap-cards-grid .cap-card-col-2 {
              grid-column: 1 / -1;
              max-width: calc(50% - 10px);
              margin-left: auto;
              margin-right: auto;
              width: 100%;
            }
          }
        `}</style>
        <div className="cap-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {capabilities.map((cap, i) => (
            <div key={cap.title} className={i === 2 ? 'cap-card-col-2' : ''} style={{ display: 'flex', flexDirection: 'column' }}>
              <CapabilityCard {...cap} index={i} inView={inView} />
            </div>
          ))}
        </div>

        {/* ── Insight strip ── */}
        <div
          style={{
            marginTop: '28px',
            padding: '18px 28px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.78s ease 0.58s, transform 0.78s cubic-bezier(0.16,1,0.3,1) 0.58s',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-mono)',
                fontSize: '16px',
                opacity: 0.75,
                flexShrink: 0,
              }}
            >
              ✦
            </span>
            <p
              style={{
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                fontSize: '17px',
                lineHeight: 1.4,
                color: 'var(--color-text-white)',
                margin: 0,
              }}
            >
              One principle. Three capabilities. Real impact.
            </p>
          </div>
          <p
            className="text-body-sm"
            style={{
              color: 'rgba(255,255,255,0.85)', lineHeight: 1.75,
              
              maxWidth: '340px',
             
              textAlign: 'right',
            }}
          >
            Built for enterprises where intelligence must do more than impress — it must perform within the business.
          </p>
        </div>

      </div>
    </section>
  )
}

export default ServicesCards
