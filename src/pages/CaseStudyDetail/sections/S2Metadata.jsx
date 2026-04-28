function S2Metadata({ meta }) {
  const fields = [
    { label: 'Sector',   value: meta.sector   },
    { label: 'Company',  value: meta.company  },
    { label: 'Service',  value: meta.service  },
    { label: 'Offering', value: meta.offering },
  ]

  return (
    <section
      className="px-6 md:px-10 lg:px-16 py-12"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {fields.map((f, i) => (
            <div
              key={f.label}
              className="px-6 py-2"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.10)' : 'none',
              }}
            >
              <p
                className="text-label mb-2"
                style={{ color: 'rgba(255,255,255,0.40)' }}
              >
                {f.label}
              </p>
              <p
                className="text-h4 font-semibold leading-snug"
                style={{ color: '#ffffff' }}
              >
                {f.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default S2Metadata
