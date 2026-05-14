import { useState } from 'react'
import { Link } from 'react-router-dom'

import creditas      from '../../../assets/images/clients/creditas-removebg-preview.png'
import standardBank  from '../../../assets/images/clients/standard_bank-removebg-preview.png'
import vodacom       from '../../../assets/images/clients/vodacom.png'
import zs            from '../../../assets/images/clients/zs-removebg-preview.png'
import angloAmerican from '../../../assets/images/clients/anglo-american.png'
import hollard       from '../../../assets/images/clients/hollard.png'
import csav          from '../../../assets/images/clients/csav.png'
import tata          from '../../../assets/images/clients/tata.png'
import nykaa         from '../../../assets/images/clients/nykaa.png'

const featured = [
  { id: 1, name: 'Standard Bank',    logo: standardBank,  logoH: 150, logoW: 250 },
  { id: 2, name: 'Vodacom',          logo: vodacom,        logoH: 80,  logoW: 120 },
  { id: 3, name: 'ZS',               logo: zs,             logoH: 100, logoW: 140 },
  { id: 4, name: 'Hollard',          logo: hollard,        logoH: 70,  logoW: 130 },
  { id: 5, name: 'Anglo American',   logo: angloAmerican,  logoH: 110, logoW: 160 },
  { id: 6, name: 'Creditas',         logo: creditas,       logoH: 120, logoW: 160 },
  { id: 7, name: 'Rexall',             logo: csav,           logoH: 80,  logoW: 130 },
  { id: 8, name: 'Tata International', logo: tata,         logoH: 80,  logoW: 130 },
  { id: 9, name: 'Nykaa',            logo: nykaa,          logoH: 70,  logoW: 120 },
]

const stats = [
  { value: '22+',  label: 'Enterprise Clients' },
  { value: '12+',  label: 'Years of Delivery'  },
  { value: '100%', label: 'Retention Rate'      },
]

function LogoCard({ logo, name, logoH, logoW }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative flex flex-col items-center justify-center rounded-2xl h-full min-h-24 transition-all duration-300 hover:scale-[1.03] overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.85), rgba(255,255,255,0.75))',
        border: '1px solid rgba(255,255,255,0.10)',
        paddingBottom: '22px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo */}
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="object-contain max-w-full"
          style={{
            height: `${logoH}px`,
            width: `${logoW}px`,
            transition: 'opacity 0.25s ease',
            opacity: hovered ? 0 : 1,
          }}
        />
      ) : (
        <span
          className="text-h4 font-semibold text-center px-4 leading-tight"
          style={{
            color: 'var(--color-text-primary)',
            transition: 'opacity 0.25s ease',
            opacity: hovered ? 0 : 1,
          }}
        >
          {name}
        </span>
      )}

      {/* Permanent name label at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-center px-2 pb-2"
        style={{
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.25s ease',
        }}
      >
        <span
        className='text-body'
          style={{
            // fontFamily: 'var(--font-mono)',
            // fontSize: '12px',
            // letterSpacing: '0.07em',
            // textTransform: 'uppercase',
            color: 'var(--color-secondary)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
            textAlign: 'center',
            display: 'block',
          }}
        >
          {name}
        </span>
      </div>

      {/* Hover overlay — name prominent on navy */}
      <div
        className="absolute inset-0 flex items-center justify-center px-3"
        style={{
          background: 'var(--color-secondary)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.25s ease',
          pointerEvents: 'none',
        }}
      >
        <span className="text-h4 font-semibold text-white text-center leading-tight">
          {name}
        </span>
      </div>
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

          {/* RIGHT: 3×3 logo grid — stretches to match left height */}
          <div className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 h-full">
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
              transition: 'background 0.22s ease, border-color 0.22s ease, color 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.borderColor = '#ffffff'
              e.currentTarget.style.color = 'var(--color-secondary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
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
