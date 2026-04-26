import djuboLogo   from '../../../assets/images/clients/djubo.png'
import kingdomLogo  from '../../../assets/images/clients/kingdom.png'
import nykaaLogo    from '../../../assets/images/citta.png'
import rioLogo      from '../../../assets/images/qamp.png'

const products = [
  {
    id: 1,
    name: "Djubo",
    tagline: "Hospitality OS",
    desc: "Hotel tech suite for smarter operations",
    logo: djuboLogo,
  },
  {
    id: 2,
    name: "Edumarshal",
    tagline: "Growth Engine",
    desc: "Campaign workflows built for growth teams",
    logo: kingdomLogo,
  },
  {
    id: 3,
    name: "Citta",
    tagline: "Edu Platform",
    desc: "Education platform for modern institutions",
    logo: nykaaLogo,
  },
  {
    id: 4,
    name: "Qamp",
    tagline: "Smart Infra",
    desc: "Smart city infrastructure and data systems",
    logo: rioLogo,
  },
]

function ProductCard({ item }) {
  return (
    <div
      className="
        group
        rounded-lg
        p-4
        flex flex-col items-center justify-center text-center
        transition-all duration-300
        hover:-translate-y-1
      "
      style={{
        background: 'var(--color-bg-secondary)',   // premium soft bg
        border: '1px solid var(--color-border-subtle)',
      }}
    >
      {/* Logo */}
      <img
        src={item.logo}
        alt={item.name}
        className="
          w-20 h-20 object-contain mb-3
          opacity-80
          transition-all duration-300
          group-hover:opacity-100 group-hover:scale-105
        "
      />

      {/* Name */}
      <h3
        className="text-sm font-semibold tracking-tight"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {item.name}
      </h3>
    </div>
  )
}

export default function Products() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* 2 COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          {/* LEFT CONTENT */}
<div className="max-w-xl flex flex-col justify-center h-full">

  {/* Tagline */}
  <p
    className="text-h3 font-semibold uppercase tracking-widest mb-4"
    style={{ color: 'var(--color-highlight)' }}
  >
    Build for Enterprises
  </p>

  {/* Headline */}
  <h2
    className="text-h1 md:text-5xl font-bold leading-tight mb-6"
    style={{ color: 'var(--color-text-primary)' }}
  >
    Our Products
  </h2>

  {/* Description */}
  <p
    className="text-base leading-relaxed mb-6"
    style={{ color: 'var(--color-text-secondary)' }}
  >
    Architecting the foundational intelligence that powers modern enterprises —
    from hospitality to education, growth systems to smart infrastructure.
  </p>

  {/* Supporting line (adds weight without clutter) */}
  <p
    className="text-sm mb-8"
    style={{ color: 'var(--color-text-secondary)' }}
  >
    Built to integrate seamlessly, scale reliably, and deliver measurable impact
    across your organisation.
  </p>


</div>

          {/* RIGHT GRID (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}