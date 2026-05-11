import mapImg from '../../../assets/images/location-map.png'

const offices = [
  {
    label: 'Head Office',
    country: 'India',
    city: 'Noida, Uttar Pradesh',
    address: "Berger Delhi One, C-001/A2\nBlock B, Sector 16\nNoida, Uttar Pradesh 201301",
  },
  {
    label: 'Regional Office',
    country: 'United States',
    city: 'Newark, Delaware',
    address: "Thotnr Consulting Inc\n254 Chapman Rd, Ste 208\nNewark, DE 19702",
  },
  {
    label: 'Sales Office',
    country: 'South Africa',
    city: 'Johannesburg, Gauteng',
    address: "424 Honeydew Road West\nSundowner, Johannesburg\nGauteng – 2188",
  },
]

const countries = [
  'Australia', 'Chile', 'Israel', 'Saudi Arabia', 'South Africa',
  'USA', 'Canada', 'India', 'Kuwait', 'Singapore', 'United Kingdom'
]

function OfficeCard({ label, country, city, address }) {
  return (
    <div
      className="flex flex-col p-6 lg:p-8 rounded-2xl h-full"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(11,15,25,0.08)',
        boxShadow: '0 2px 20px rgba(11,15,25,0.05)',
      }}
    >
      {/* Red top accent */}
      <div
        className="mb-6 h-[2px] w-10 rounded-full flex-shrink-0"
        style={{ background: 'var(--color-highlight)' }}
      />

      {/* Label — mono eyebrow */}
      <p
        className="text-body-sm mb-3"
        style={{ color: 'var(--color-highlight)', letterSpacing: '0.12em' }}
      >
        {label}
      </p>

      {/* Country */}
      <h4
        className="text-h3 mb-1"
        style={{ color: 'var(--color-text-primary)', lineHeight: 1.2 }}
      >
        {country}
      </h4>

      {/* City */}
      <p
        className="text-body-sm mb-3"
        style={{ color: 'var(--color-text-tertiary)' }}
      >
        {city}
      </p>

      {/* Address */}
      <p
        className="text-body-sm whitespace-pre-line mt-auto"
        style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85 }}
      >
        {address}
      </p>
    </div>
  )
}

function S2Presence() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Narrative header — full width */}
        <div className="mb-12 md:mb-14">
          <p className="text-h4 mb-3" style={{ color: 'var(--color-secondary)' }}>
            Global Presence. Enterprise Focus.
          </p>
          <h2
            className="text-h1 leading-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Built Where You Are,<br />
            Thinking Beyond Borders
          </h2>
          <div
            className="mt-3 mb-5 h-[3px] w-16 rounded-full"
            style={{ background: 'var(--color-highlight)' }}
          />
          <p
            className="text-body max-w-2xl"
            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
          >
            Thotnr operates across eleven markets, combining deep local knowledge with a globally
            consistent delivery model. Our teams are embedded in the same enterprise environments
            our clients operate in — so nothing gets lost in translation.
          </p>
        </div>

        {/* Office cards — equal-height 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 items-stretch">
          {offices.map((office) => (
            <OfficeCard key={office.label} {...office} />
          ))}
        </div>

        {/* Thin section divider */}
        <div
          className="mb-12"
          style={{ height: '1px', background: 'rgba(11,15,25,0.07)' }}
        />

        {/* Global Footprint */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <p
              className="text-h4"
              style={{ color: 'var(--color-secondary)', letterSpacing: '0.04em' }}
            >
              OUR GLOBAL FOOTPRINT
            </p>
            <span
              className="text-label"
              style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.12em' }}
            >
              {countries.length} COUNTRIES
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-8">
            {countries.map((country) => (
              <div
                key={country}
                className="flex items-center gap-2 px-3 py-2 rounded-lg"
                style={{
                  background: 'rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <span
                  className="shrink-0 rounded-sm"
                  style={{
                    width: 10,
                    height: 10,
                    background: 'var(--color-secondary)',
                    opacity: 0.85,
                  }}
                />
                <span
                  className="text-h4"
                  style={{ color: 'var(--color-text-primary)', fontSize: '0.78rem' }}
                >
                  {country}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full overflow-hidden rounded-xl" style={{ lineHeight: 0 }}>
            <img
              src={mapImg}
              alt="Thotnr global presence map"
              className="w-full"
              style={{ display: 'block', height: 'auto' }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default S2Presence
