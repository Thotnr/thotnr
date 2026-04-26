import { useState } from 'react'

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
import heroFincorp    from '../../../assets/images/clients/hero-fincorp.png'
import csav           from '../../../assets/images/clients/csav.png'

const clients = [
  { id:  1, name: 'Tata',           logo: tata          },
  { id:  2, name: 'Nykaa',          logo: nykaa         },
  { id:  3, name: 'Standard Bank',  logo: standardBank  },
  { id:  4, name: 'Lexus',          logo: lexus         },
  { id:  5, name: 'Hero Fincorp',   logo: heroFincorp   },
  { id:  6, name: 'ZS',             logo: zs            },
  { id:  7, name: 'Creditas',       logo: creditas      },
  { id:  8, name: 'Kingdom',        logo: kingdom       },
  { id:  9, name: 'Servitium',      logo: servitium     },
  { id: 10, name: 'Digispice',      logo: digispice     },
  { id: 11, name: 'Rio 2016',       logo: rio2016       },
  { id: 12, name: 'Swayam',         logo: swayam        },
  { id: 13, name: 'Djubo',          logo: djubo         },
  { id: 14, name: 'Lexinnova',      logo: lexinnova     },
  { id: 15, name: 'Bazinga',        logo: bazinga       },
  { id: 16, name: 'CSAV',           logo: csav          },
  { id: 17, name: 'Open Sky',       logo: openSky       },
  { id: 18, name: 'Ovations',       logo: ovations      },
  { id: 19, name: 'Bookclip',       logo: bookclip      },
  { id: 20, name: 'Eool',           logo: eool          },
  { id: 21, name: 'Healthscroll',   logo: healthscroll  },
  { id: 22, name: 'VTM',            logo: vtm           },
]

const stats = [
  { value: '22+',  label: 'Enterprise Clients'  },
  { value: '12+',  label: 'Years of Delivery'   },
  { value: '100%', label: 'Retention Rate'       },
]

function LogoCard({ logo, name }) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-[1.03]"
      style={{
        background: 'var(--color-primary)',
        border: '1px solid rgba(255,255,255,0.10)',
        minHeight: '100px',
        backdropFilter: 'blur(6px)',
      }}
    >
      <img
        src={logo}
        alt={name}
        className="object-contain"
        style={{ maxHeight: '52px', maxWidth: '80%' }}
      />
    </div>
  )
}

const INITIAL_COUNT = 12

function Clients() {
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? clients : clients.slice(0, INITIAL_COUNT)

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── TOP: header + stats ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">

          {/* Left — eyebrow + headline + description */}
          <div className="max-w-xl">
            <p className="text-h4 text-[var(--color-highlight)]">Trusted By Brands</p>
            <h2 className="text-h1 text-white">Our Clients</h2>
            <p className="text-body text-white/60 mt-2 leading-relaxed">
              We partner with forward-thinking enterprises to turn operational complexity
              into competitive clarity — built on long-term trust and measurable outcomes.
            </p>
          </div>

          {/* Right — stats */}
          <div className="flex items-center gap-0 flex-shrink-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col gap-1 px-8"
                style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.10)' : 'none' }}
              >
                <span className="text-4xl font-bold leading-none" style={{ color: 'var(--color-highlight)' }}>
                  {s.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.40)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* ── CLIENT GRID — 4 per row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {visible.map((client) => (
            <LogoCard key={client.id} logo={client.logo} name={client.name} />
          ))}
        </div>

        {/* ── SHOW MORE / LESS ── */}
        {!showAll && clients.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer bg-transparent"
              style={{ border: '1px solid rgba(255,255,255,0.25)', color: '#ffffff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-highlight)'
                e.currentTarget.style.color = 'var(--color-highlight)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.color = '#ffffff'
              }}
            >
              Show more
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default Clients
