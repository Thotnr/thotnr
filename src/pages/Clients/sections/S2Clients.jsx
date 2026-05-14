import { useState } from 'react'
import bazinga        from '../../../assets/images/clients/tribe-logo.svg'
import bookclip       from '../../../assets/images/clients/bookclip-removebg-preview.png'
import creditas       from '../../../assets/images/clients/creditas-removebg-preview.png'
import digispice      from '../../../assets/images/clients/digispice-removebg-preview.png'
import djubo          from '../../../assets/images/clients/djubo.png'
import eool           from '../../../assets/images/clients/eool-removebg-preview.png'
import healthscroll   from '../../../assets/images/clients/healthscroll-removebg-preview.png'
import lexinnova      from '../../../assets/images/clients/lexinnova-removebg-preview.png'
import lexus          from '../../../assets/images/clients/lexus-removebg-preview.png'
import nykaa          from '../../../assets/images/clients/nykaa.png'
import openSky        from '../../../assets/images/clients/open_sky-removebg-preview.png'
import ovations       from '../../../assets/images/clients/ovations-removebg-preview.png'
import rio2016        from '../../../assets/images/clients/Rio_2016.png'
import servitium      from '../../../assets/images/clients/servitium-removebg-preview.png'
import standardBank   from '../../../assets/images/clients/standard_bank-removebg-preview.png'
import swayam         from '../../../assets/images/clients/swayam.png'
import tata           from '../../../assets/images/clients/tata.png'
import vtm            from '../../../assets/images/clients/vtm-removebg-preview.png'
import zs             from '../../../assets/images/clients/zs-removebg-preview.png'
import kingdom        from '../../../assets/images/clients/kingdom.png'
import csav           from '../../../assets/images/clients/csav.png'
import vodacom        from '../../../assets/images/clients/vodacom.png'
import angloAmerican  from '../../../assets/images/clients/anglo-american.png'
import hollard        from '../../../assets/images/clients/hollard.png'
import bajaj        from '../../../assets/images/clients/bajaj-auto.png'
import obasa        from '../../../assets/images/clients/obasa.png'
import ukg        from '../../../assets/images/clients/ukg.svg'





// logoH / logoW (px) — tune per client until visual weight feels equal across cards
const clients = [
  { id:  1, name: 'Standard Bank',  logo: standardBank,   logoH: 100, logoW: 450 },
  { id:  2, name: 'Vodacom',        logo: vodacom,        logoH: 70, logoW: 150 },
  { id:  3, name: 'ZS',             logo: zs,             logoH: 86, logoW: 150  },
  { id:  4, name: 'Hollard',        logo: hollard,        logoH: 80, logoW: 150 },
  { id:  5, name: 'Rexall',         logo: csav,           logoH: 94, logoW: 180 },
  { id:  6, name: 'Anglo American', logo: angloAmerican,  logoH: 88, logoW: 130 },
  { id:  7, name: 'Creditas',       logo: creditas,       logoH: 84, logoW: 150 },
  { id:  8, name: 'Bajaj Auto',     logo: bajaj,          logoH: 80, logoW: 130 },
  { id:  9, name: 'UKG',            logo: ukg,            logoH: 88, logoW: 100 },
  { id:  10, name: 'Obasa',          logo: obasa,          logoH: 84, logoW: 150 },
  { id:  11, name: 'Tata',           logo: tata,           logoH: 94, logoW: 140 },
  { id:  12, name: 'Nykaa',          logo: nykaa,          logoH: 86, logoW: 140 },
  { id:  13, name: 'Lexus',          logo: lexus,          logoH: 98, logoW: 160 },
  { id: 14, name: 'Digispice',      logo: digispice,      logoH: 98, logoW: 170 },
  { id: 15, name: 'Rio 2016',       logo: rio2016,        logoH: 92, logoW: 150  },
  { id: 16, name: 'Lexinnova',      logo: lexinnova,      logoH: 96, logoW: 180 },
  { id: 17, name: 'Tribe',        logo: bazinga,          logoH: 96, logoW: 100 },
  { id: 18, name: 'Ovations',       logo: ovations,       logoH: 96, logoW: 180 },
  { id: 19, name: 'Bookclip',       logo: bookclip,       logoH: 96, logoW: 180 },
  { id: 20, name: 'Eool',           logo: eool,           logoH: 96, logoW: 180 },
  { id: 21, name: 'Healthscroll',   logo: healthscroll,   logoH: 96, logoW: 180 },
  { id: 22, name: 'VMT',            logo: vtm,            logoH: 96, logoW: 180 },
]

function LogoCard({ logo, name, logoH, logoW }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative flex flex-col overflow-hidden cursor-default rounded-3xl"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.52), rgba(255,255,255,0.36))',
        border: `1px solid ${hovered ? 'rgba(29,53,87,0.18)' : 'rgba(29,53,87,0.08)'}`,
        boxShadow: hovered
          ? '0 16px 48px rgba(6,4,31,0.12)'
          : '0 10px 30px rgba(6,4,31,0.06)',
        minHeight: '188px',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease, border-color 0.35s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Soft hover glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at top right, rgba(225,29,72,0.10), transparent 42%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '24px',
          right: '24px',
          height: '2px',
          background: 'var(--color-highlight)',
          transformOrigin: 'center',
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      />

      {/* Logo area */}
      <div
        className="flex items-center justify-center flex-1"
        style={{ padding: '28px 20px 16px' }}
      >
        <img
          src={logo}
          alt={name}
          className="object-contain"
          style={{
            height: `${logoH}px`,
            width: `${logoW}px`,
            maxWidth: '100%',
            transform: hovered ? 'scale(0.92)' : 'scale(1)',
            opacity: hovered ? 0.28 : 1,
            transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease',
          }}
        />
      </div>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          marginLeft: '20px',
          marginRight: '20px',
          background: hovered
            ? 'rgba(29,53,87,0.12)'
            : 'rgba(29,53,87,0.07)',
          transition: 'background 0.35s ease',
        }}
      />

      {/* Permanent name label */}
      <div
        className="flex items-center justify-center"
        style={{
          padding: '10px 16px',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.35s ease',
        }}
      >
        <span
          className="text-body"
          style={{
            color: 'var(--color-secondary)',
            
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
            display: 'block',
          }}
        >
          {name}
        </span>
      </div>

      {/* Hover name pill — centered overlay */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center px-4"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.45s ease, transform 0.45s cubic-bezier(0.16,1,0.3,1)',
          pointerEvents: 'none',
        }}
      >
        <div
          className="rounded-full px-5 py-2 backdrop-blur-md"
          style={{
            background: 'rgba(255,255,255,0.82)',
            border: '1px solid rgba(29,53,87,0.12)',
            boxShadow: '0 8px 24px rgba(6,4,31,0.1)',
          }}
        >
          <p
            className="text-label text-center"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {name}
          </p>
        </div>
      </div>
    </div>
  )
}

function S2Clients() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-12">
          <p className="text-h4 text-[var(--color-highlight)]">22+ Enterprises</p>
          <h2 className="text-h1 mt-1" style={{ color: 'var(--color-text-primary)' }}>
            Every Client, Every Story
          </h2>
          <p
            className="text-body mt-3 max-w-2xl leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Each relationship is built on trust, long-term thinking, and outcomes that matter —
            not just the contract.
          </p>
        </div>

        {/* Cards grid — 2 cols mobile → 3 tablet → 4 desktop → 5 wide */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {clients.map((client) => (
            <LogoCard
              key={client.id}
              logo={client.logo}
              name={client.name}
              logoH={client.logoH}
              logoW={client.logoW}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S2Clients
