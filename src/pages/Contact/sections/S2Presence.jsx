import mapImg from '../../../assets/images/footprints-map.png'

const offices = [
  {
    label: 'Head Office',
    city: 'Noida, India',
    address: "Berger Delhi One, C-001/A2,\nBlock B, Sector 16, Noida,\nUttar Pradesh, India (201301)",
  },
  {
    label: 'Sales Office',
    city: 'Johannesburg, South Africa',
    address: "424 HONEYDEW ROAD WEST\nSUNDOWNER\nJOHANNESBURG\nGAUTENG – 2188",
  },
]

// Updated countries array — use this
const countries = [
  'Australia', 'Chile', 'Israel', 'Saudi Arabia', 'South Africa',
  'USA', 'Canada', 'India', 'Kuwait', 'Singapore', 'United Kingdom'
]
function OfficeBlock({ label, city, address, last }) {
  return (
    <div className={`py-4 ${!last ? 'border-b' : ''}`} style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
      <p className="text-h4 text-[var(--color-highlight)] mb-2">{label}</p>
      <h4 className="text-h4 mb-1" style={{ color: 'var(--color-text-primary)' }}>{city}</h4>
      <p className="text-body-sm whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>
        {address}
      </p>
    </div>
  )
}

function S2Presence() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Top grid — Brand Narrative (3fr) + Office Presence (2fr) */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-start mb-16">

          {/* Left — Brand Narrative */}
          <div>
            <p className="text-h3 text-[var(--color-secondary)] mb-3">
              Global Presence. Enterprise Focus.
            </p>

            <h2 className="text-h1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>
              Built Where You Are,<br />
              Thinking Beyond<br />
              Borders
            </h2>

            <div
              className="mt-3 mb-5 h-[3px] w-16 rounded-full"
              style={{ background: 'var(--color-highlight)' }}
            />

            <p className="text-body max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
              Thotnr operates across six markets, combining deep local knowledge with a globally
              consistent delivery model. Our teams are embedded in the same enterprise environments
              our clients operate in — so nothing gets lost in translation.
            </p>
          </div>

          {/* Right — Office Presence */}
          <div>
            {offices.map((office, i) => (
              <OfficeBlock
                key={office.label}
                {...office}
                last={i === offices.length - 1}
              />
            ))}
          </div>

        </div>

        {/* Bottom — Digital Footprint */}
        {/* Bottom — Digital Footprint */}
<div className="relative">
  {/* Header row */}
  <div className="flex items-center justify-between mb-8">
    <p className="text-h3 text-[var(--color-secondary)]">OUR GLOBAL FOOTPRINT</p>
    <span
      className="text-label"
      style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.12em' }}
    >
      {countries.length} COUNTRIES
    </span>
  </div>

  {/* Country pills grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-8">
    {countries.map((country) => (
      <div
        key={country}
        className="flex items-center gap-2 px-3 py-2 rounded-lg"
        style={{
          background: 'var(--color-surface, rgba(0,0,0,0.04))',
          border: '1px solid var(--color-border, rgba(0,0,0,0.08))',
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

  {/* Full-width map — no height cap, no object-cover */}
  <div className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
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
