import { useState } from 'react'

function SubServiceCard({ name, desc, image, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <style>{`
        @keyframes subCardIn {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sub-card-${index} {
          animation: subCardIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${0.05 + index * 0.07}s both;
        }
      `}</style>

      <div
        className={`sub-card-${index}`}
        style={{
          position: 'relative',
          borderRadius: '14px',
          overflow: 'hidden',
          aspectRatio: '4/3',
          cursor: 'default',
          border: `1px solid ${hovered ? 'rgba(168,218,220,0.35)' : 'rgba(255,255,255,0.08)'}`,
          transition: 'border-color 0.35s ease',
          flexShrink: 0,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <img
          src={image}
          alt={name}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            filter: hovered ? 'brightness(0.55)' : 'brightness(0.45)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease',
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(29,53,87,0.97) 0%, rgba(29,53,87,0.55) 45%, rgba(29,53,87,0.05) 75%, transparent 100%)',
          }}
        />

        {/* Text content */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '22px 24px',
          }}
        >
          <h4
            className="text-h4"
            style={{ color: 'var(--color-text-white)', lineHeight: 1.3, marginBottom: '0' }}
          >
            {name}
          </h4>
          <p
            className="text-body-sm"
            style={{
              color: 'rgba(255,255,255,0.65)',
              marginTop: '6px',
              lineHeight: 1.5,
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s',
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </>
  )
}

function S3SubServices({ service }) {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-h4 text-[var(--color-highlight)]">{service.eyebrow}</p>
          <h2 className="text-h1 text-white" style={{ marginBottom: '12px' }}>
            What We Build
          </h2>
          <p className="text-body" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '520px' }}>
            {service.subServices.length} specialised capabilities within {service.title}.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.subServices.map((sub, i) => (
            <SubServiceCard
              key={sub.name}
              name={sub.name}
              desc={sub.desc}
              image={sub.image}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S3SubServices
