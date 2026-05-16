import { useState, useEffect, useRef } from 'react'

function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(el)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function WordReveal({ text, inView, delay = 0, className, style }) {
  return (
    <span className={className} style={{ display: 'block', ...style }} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: '0.26em' }}
        >
          <span
            style={{
              display: 'inline-block',
              transform: inView ? 'translateY(0)' : 'translateY(108%)',
              transition: `transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 0.055}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  )
}

function CapabilityCard({ text, isDark, cardIndex, inView }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '22px 24px',
        borderRadius: '12px',
        border: isDark
          ? `1px solid ${hovered ? 'rgba(168,218,220,0.4)' : 'rgba(255,255,255,0.08)'}`
          : `1px solid ${hovered ? 'rgba(29,53,87,0.3)' : 'rgba(11,15,25,0.09)'}`,
        background: isDark
          ? hovered ? 'rgba(168,218,220,0.09)' : 'rgba(255,255,255,0.04)'
          : hovered ? 'rgba(29,53,87,0.05)' : 'white',
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'translateY(0) rotateX(0deg)'
          : 'translateY(40px) rotateX(12deg)',
        transition: [
          `opacity 0.6s ease ${0.62 + cardIndex * 0.09}s`,
          `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${0.62 + cardIndex * 0.09}s`,
          'border-color 0.3s ease',
          'background 0.3s ease',
        ].join(', '),
        cursor: 'default',
      }}
    >
      <div
        style={{
          height: '2px',
          borderRadius: '2px',
          background: 'var(--color-accent)',
          marginBottom: '14px',
          width: hovered ? '40px' : '24px',
          transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <p
        className="text-body"
        style={{
          color: isDark ? 'rgba(255,255,255,0.85)' : 'var(--color-text-secondary)',
          lineHeight: 1.55,
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  )
}

function SubServiceSection({ sub, index }) {
  const isDark = index % 2 === 0
  const imgRight = index % 2 !== 0
  const [sectionRef, inView] = useInView()

  const si = index

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 md:px-10 lg:px-16 relative overflow-hidden"
      style={{ background: isDark ? 'var(--color-secondary)' : 'var(--color-primary)' }}
    >
      <style>{`
        @keyframes orb-a-${si} {
          0%,100% { transform: translate(0,0) scale(1); }
          30%      { transform: translate(28px,-38px) scale(1.07); }
          65%      { transform: translate(-18px,22px) scale(0.96); }
        }
        @keyframes orb-b-${si} {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-32px,18px) scale(1.05); }
          70%      { transform: translate(22px,-28px) scale(0.97); }
        }
        @keyframes shimmer-${si} {
          0%   { background-position: -200% 0; }
          100% { background-position: 300% 0; }
        }
      `}</style>

      {/* Floating orbs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(168,218,220,0.11) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(29,53,87,0.07) 0%, transparent 65%)',
          top: '-140px',
          ...(imgRight ? { left: '-100px' } : { right: '-100px' }),
          filter: 'blur(32px)',
          animation: `orb-a-${si} 14s ease-in-out infinite`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(230,57,70,0.07) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(168,218,220,0.14) 0%, transparent 65%)',
          bottom: '-80px',
          ...(imgRight ? { right: '-60px' } : { left: '-60px' }),
          filter: 'blur(40px)',
          animation: `orb-b-${si} 18s ease-in-out infinite`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>

        {/* Top row: image + content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 md:mb-20">

          {/* ── Image ── */}
          <div
            className={imgRight ? 'lg:order-last' : ''}
            style={{ position: 'relative' }}
          >
            {/* Ambient glow halo */}
            <div
              style={{
                position: 'absolute',
                inset: '-16px',
                borderRadius: '32px',
                background: isDark
                  ? 'radial-gradient(ellipse at center, rgba(168,218,220,0.18) 0%, transparent 65%)'
                  : 'radial-gradient(ellipse at center, rgba(29,53,87,0.1) 0%, transparent 65%)',
                opacity: inView ? 1 : 0,
                transition: 'opacity 1.2s ease 0.6s',
                pointerEvents: 'none',
              }}
            />

            {/* Image wrapper — translate+scale entrance */}
            <div
              style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                transform: inView
                  ? 'translateX(0) scale(1)'
                  : `translateX(${imgRight ? '56px' : '-56px'}) scale(0.94)`,
                opacity: inView ? 1 : 0,
                transition: 'transform 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, opacity 0.7s ease 0.1s',
                boxShadow: isDark
                  ? '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(168,218,220,0.14)'
                  : '0 24px 64px rgba(11,15,25,0.16), 0 0 0 1px rgba(11,15,25,0.07)',
              }}
            >
              {/* Image — zoom out as section enters */}
              <img
                src={sub.image}
                alt={sub.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  transform: inView ? 'scale(1)' : 'scale(1.13)',
                  transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                  filter: isDark
                    ? 'brightness(0.85) contrast(1.06)'
                    : 'brightness(0.95) contrast(1.03)',
                }}
              />

              {/* Directional color overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(29,53,87,0.22) 0%, transparent 55%)'
                    : 'linear-gradient(135deg, rgba(241,250,238,0.14) 0%, transparent 55%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Wipe overlay — reveals image on scroll entry */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: isDark ? 'var(--color-secondary)' : 'var(--color-primary)',
                  transformOrigin: imgRight ? 'right center' : 'left center',
                  transform: inView ? 'scaleX(0)' : 'scaleX(1)',
                  transition: 'transform 0.9s cubic-bezier(0.77, 0, 0.175, 1) 0.18s',
                  zIndex: 4,
                  pointerEvents: 'none',
                }}
              />

              {/* Accent edge line that animates after wipe */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  ...(imgRight ? { right: 0 } : { left: 0 }),
                  width: '3px',
                  background: 'var(--color-accent)',
                  opacity: inView ? 0.7 : 0,
                  transform: inView ? 'scaleY(1)' : 'scaleY(0)',
                  transformOrigin: 'top center',
                  transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.0s, opacity 0.4s ease 1.0s',
                  zIndex: 5,
                }}
              />
            </div>
          </div>

          {/* ── Content ── */}
          <div className={imgRight ? 'lg:order-first' : ''}>

            {/* Leading line draw */}
            <div
              style={{
                height: '1px',
                background: isDark ? 'rgba(168,218,220,0.55)' : 'rgba(29,53,87,0.35)',
                marginBottom: '28px',
                width: inView ? '36px' : '0',
                transition: 'width 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
              }}
            />

            {/* Sub-service name — word reveal */}
            <WordReveal
              text={sub.name}
              inView={inView}
              delay={0.32}
              className="text-h1"
              style={{
                color: isDark ? 'var(--color-text-white)' : 'var(--color-text-primary)',
                lineHeight: 1.15,
                fontWeight: 600,
                marginBottom: '18px',
              }}
            />

            {/* Accent bar — draws + shimmers */}
            <div
              style={{
                height: '2px',
                borderRadius: '2px',
                marginBottom: '22px',
                width: inView ? '40px' : '0',
                background: inView
                  ? 'linear-gradient(90deg, var(--color-highlight) 0%, rgba(255,255,255,0.75) 50%, var(--color-highlight) 100%)'
                  : 'var(--color-highlight)',
                backgroundSize: '200% 100%',
                animation: inView ? `shimmer-${si} 1.6s ease 1.15s 1` : 'none',
                transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.58s',
              }}
            />

            {/* Tagline */}
            <p
              style={{
                fontFamily: 'var(--font-accent)',
                // fontStyle: 'italic',
                fontSize: '20px',
                lineHeight: 1.52,
                color: isDark ? 'var(--color-accent)' : 'var(--color-secondary)',
                marginBottom: '20px',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 0.75s ease 0.7s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
              }}
            >
              {sub.detail.tagline}
            </p>

            {/* Body */}
            <p
              className="text-body-lg"
              style={{
                color: isDark ? 'rgba(255,255,255,0.85)' : 'var(--color-text-secondary)',
                lineHeight: 1.75,
                margin: 0,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 0.75s ease 0.86s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.86s',
              }}
            >
              {sub.detail.body}
            </p>

          </div>
        </div>

        {/* ── Capabilities ── */}
        <div>
          {/* Divider — scaleX draw */}
          <div
            style={{
              height: '1px',
              background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(11,15,25,0.1)',
              marginBottom: '36px',
              transformOrigin: 'left center',
              transform: inView ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.52s',
            }}
          />

          <p
            className="text-body"
            style={{
              // color: isDark ? 'rgba(255,255,255,0.9)' : 'var(--color-secondary)',
              color: 'var(--color-highlight)',
              marginBottom: '20px',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.5s ease 0.6s',
              textTransform: 'uppercase'
            }}
          >
            Capabilities
          </p>

          {/* Cards — staggered 3-D entrance */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
            style={{ perspective: '1000px' }}
          >
            {sub.detail.capabilities.map((cap, ci) => (
              <CapabilityCard
                key={ci}
                text={cap}
                isDark={isDark}
                cardIndex={ci}
                inView={inView}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function S3SubServices({ service }) {
  return (
    <>
      {service.subServices.map((sub, i) => (
        <SubServiceSection key={sub.name} sub={sub} index={i} />
      ))}
    </>
  )
}

export default S3SubServices
