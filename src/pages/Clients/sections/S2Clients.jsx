import bazinga        from '../../../assets/images/clients/bazinga-removebg-preview.png'
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

// logoH / logoW (px) — tune per client until visual weight feels equal across cards
const clients = [
  { id:  1, name: 'Standard Bank',  logo: standardBank,  logoH: 100, logoW: 250 },
  { id:  2, name: 'Vodacom',        logo: vodacom,        logoH: 70, logoW: 150 },
  { id:  3, name: 'ZS',             logo: zs,             logoH: 86, logoW: 150  },
  { id:  4, name: 'Hollard',        logo: hollard,        logoH: 80, logoW: 150 },
  { id:  5, name: 'Anglo American', logo: angloAmerican,  logoH: 88, logoW: 130 },
  { id:  6, name: 'Creditas',       logo: creditas,       logoH: 84, logoW: 150 },
  { id:  7, name: 'Tata',           logo: tata,           logoH: 94, logoW: 140 },
  { id:  8, name: 'Nykaa',          logo: nykaa,          logoH: 86, logoW: 140 },
  { id:  9, name: 'Lexus',          logo: lexus,          logoH: 98, logoW: 160 },
  { id: 10, name: 'Kingdom',        logo: kingdom,        logoH: 90, logoW: 160 },
  { id: 11, name: 'Servitium',      logo: servitium,      logoH: 96, logoW: 160 },
  { id: 12, name: 'Digispice',      logo: digispice,      logoH: 98, logoW: 170 },
  { id: 13, name: 'Rio 2016',       logo: rio2016,        logoH: 92, logoW: 150  },
  { id: 14, name: 'Swayam',         logo: swayam,         logoH: 66, logoW: 140 },
  { id: 15, name: 'Djubo',          logo: djubo,          logoH: 66, logoW: 140 },
  { id: 16, name: 'Lexinnova',      logo: lexinnova,      logoH: 96, logoW: 180 },
  { id: 17, name: 'Bazinga',        logo: bazinga,        logoH: 96, logoW: 180 },
  { id: 18, name: 'CSAV',           logo: csav,           logoH: 94, logoW: 180 },
  { id: 19, name: 'Open Sky',       logo: openSky,        logoH: 96, logoW: 180 },
  { id: 20, name: 'Ovations',       logo: ovations,       logoH: 96, logoW: 180 },
  { id: 21, name: 'Bookclip',       logo: bookclip,       logoH: 96, logoW: 180 },
  { id: 22, name: 'Eool',           logo: eool,           logoH: 96, logoW: 180 },
  { id: 23, name: 'Healthscroll',   logo: healthscroll,   logoH: 96, logoW: 180 },
  { id: 24, name: 'VTM',            logo: vtm,            logoH: 96, logoW: 180 },
]

function LogoCard({ logo, name, logoH, logoW }) {
  return (
    <div
      className="group relative flex flex-col items-center justify-between rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-default"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(29,53,87,0.08)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        padding: '36px 20px 22px',
        minHeight: '168px',
      }}
    >
      {/* Red accent bar — slides in from left on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
        style={{ background: 'var(--color-highlight)' }}
      />

      {/* Logo */}
      <div className="flex flex-1 items-center justify-center w-full">
        <img
          src={logo}
          alt={name}
          className="object-contain"
          style={{ height: `${logoH}px`, width: `${logoW}px`, maxWidth: '100%' }}
        />
      </div>

      {/* Divider */}
      <div
        className="w-full mt-5 mb-3"
        style={{ height: '1px', background: 'rgba(29,53,87,0.06)' }}
      />

      {/* Client name */}
      <p
        className="text-body-sm text-center w-full"
        style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}
      >
        {name}
      </p>
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
