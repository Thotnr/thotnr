import { Link } from 'react-router-dom'

import creditas      from '../../../assets/images/clients/creditas-removebg-preview.png'
import standardBank  from '../../../assets/images/clients/standard_bank-removebg-preview.png'
import vodacom       from '../../../assets/images/clients/vodacom.png'
import zs            from '../../../assets/images/clients/zs-removebg-preview.png'
import angloAmerican from '../../../assets/images/clients/anglo-american.png'
import hollard       from '../../../assets/images/clients/hollard.png'
// import hollard from '../../../assets/images/clients/hollard.png'  ← add file then uncomment

const featured = [
  { id: 1, name: 'Standard Bank',  logo: standardBank,  logoH: 120, logoW: 250 },
  { id: 2, name: 'Vodacom',        logo: vodacom,        logoH: 80, logoW: 130 },
  { id: 3, name: 'ZS',             logo: zs,             logoH: 100, logoW: 170  },
  { id: 4, name: 'Hollard',        logo: hollard,        logoH: 70, logoW: 150 },
  { id: 5, name: 'Anglo American', logo: angloAmerican,  logoH: 130, logoW: 200 },
  { id: 6, name: 'Creditas',       logo: creditas,       logoH: 80, logoW: 150 },
]

const stats = [
  { value: '22+',  label: 'Enterprise Clients' },
  { value: '12+',  label: 'Years of Delivery'  },
  { value: '100%', label: 'Retention Rate'      },
]

function LogoCard({ logo, name, logoH, logoW }) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl h-full min-h-24 transition-all duration-300 hover:scale-[1.03]"
      style={{
        background: 'var(--color-primary)',
        border: '1px solid rgba(255,255,255,0.10)',
      }}
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="object-contain"
          style={{ height: `${logoH}px`, width: `${logoW}px` }}
        />
      ) : (
        <span
          className="text-h4 font-semibold text-center px-4 leading-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {name}
        </span>
      )}
    </div>
  )
}

function Clients() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* ── TOP ROW: left content + right cards — equal height ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* LEFT: content */}
          <div className="flex flex-col justify-between gap-8">

            {/* Eyebrow + headline + description */}
            <div>
              <p className="text-h4 text-[var(--color-highlight)]">Trusted By Brands</p>
              <h2 className="text-h1 text-white mt-1">Our Clients</h2>
              <p className="text-body text-white/60 mt-3 leading-relaxed max-w-lg">
                We partner with forward-thinking enterprises to turn operational complexity
                into competitive clarity — built on long-term trust and measurable outcomes.
                From fintech startups to global mining groups, every engagement is shaped
                around the client's reality, not a template.
              </p>
            </div>

            {/* Stats — vertical list */}
            <div className="flex flex-col gap-5">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="flex items-baseline gap-4"
                  style={{
                    paddingBottom: i < stats.length - 1 ? '20px' : '0',
                    borderBottom: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  }}
                >
                  <span
                    className="text-h1 font-bold leading-none flex-shrink-0"
                    style={{ color: 'var(--color-highlight)' }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-body-lg"
                    style={{ color: 'rgba(255,255,255,0.50)' }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: 2×3 logo grid — stretches to match left height */}
          <div className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 h-full">
            {featured.map((client) => (
              <LogoCard key={client.id} logo={client.logo} name={client.name} logoH={client.logoH} logoW={client.logoW} />
            ))}
          </div>

        </div>

        {/* ── BOTTOM ROW: full-width centered button ── */}
        <div className="flex justify-center">
          <Link
            to="/clients"
            className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold cursor-pointer bg-transparent"
            style={{
              border: '1px solid rgba(255,255,255,0.28)',
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-highlight)'
              e.currentTarget.style.color = 'var(--color-highlight)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'
              e.currentTarget.style.color = '#ffffff'
            }}
          >
            View all clients
            
          </Link>
        </div>


      </div>
    </section>
  )
}

export default Clients
