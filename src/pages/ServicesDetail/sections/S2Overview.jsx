function S2Overview({ service }) {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* Left column — description + highlights (3/5 width) */}
          <div className="lg:col-span-3">

            {/* Category number + eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                {service.number}
              </span>
              <div style={{ width: '28px', height: '1px', background: 'var(--color-text-tertiary)', opacity: 0.4 }} />
              <p
                className="text-label"
                style={{ color: 'var(--color-text-tertiary)' }}
              >
                {service.eyebrow}
              </p>
            </div>

            <h2
              className="text-h1 text-[var(--color-text-primary)]"
              style={{ marginBottom: '24px', lineHeight: 1.2 }}
            >
              {service.title}
            </h2>

            <div
              style={{
                width: '40px',
                height: '2px',
                background: 'var(--color-accent)',
                borderRadius: '2px',
                marginBottom: '28px',
              }}
            />

            <p
              className="text-body-lg text-[var(--color-text-secondary)]"
              style={{ lineHeight: 1.75, marginBottom: '28px' }}
            >
              {service.description}
            </p>

            {/* Highlights list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {service.highlights.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    padding: '14px 0',
                    borderBottom: '1px solid var(--color-divider)',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--color-accent)',
                      flexShrink: 0,
                      marginTop: '8px',
                    }}
                  />
                  <p className="text-body" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right column — capabilities index (2/5 width) */}
          <div className="lg:col-span-2">

            <div
              style={{
                padding: '32px',
                background: 'var(--color-secondary)',
                borderRadius: '16px',
              }}
            >
              <p
                className="text-label"
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '24px',
                  letterSpacing: '0.14em',
                }}
              >
                {service.subServices.length} Capabilities
              </p>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {service.subServices.map((sub, i) => (
                  <div
                    key={sub.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 0',
                      borderBottom: i < service.subServices.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'rgba(255,255,255,0.25)',
                        minWidth: '22px',
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-body-sm"
                      style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}
                    >
                      {sub.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default S2Overview
