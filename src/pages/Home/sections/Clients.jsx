import csav       from '../../../assets/images/clients/csav.png'
import djubo      from '../../../assets/images/clients/djubo.png'
import heroFincorp from '../../../assets/images/clients/hero-fincorp.png'
import kingdom    from '../../../assets/images/clients/kingdom.png'
import nykaa      from '../../../assets/images/clients/nykaa.png'
import rio2016    from '../../../assets/images/clients/Rio_2016.png'
import swayam     from '../../../assets/images/clients/swayam.png'
import tata       from '../../../assets/images/clients/tata.png'

const clients = [
  { id: 1, name: 'CSAV',          logo: csav        },
  { id: 2, name: 'Djubo',         logo: djubo       },
  { id: 3, name: 'Hero Fincorp',  logo: heroFincorp },
  { id: 4, name: 'Kingdom',       logo: kingdom     },
  { id: 5, name: 'Nykaa',         logo: nykaa       },
  { id: 6, name: 'Rio 2016',      logo: rio2016     },
  { id: 7, name: 'Swayam',        logo: swayam      },
  { id: 8, name: 'Tata',          logo: tata        },
]

const stats = [
  { value: '8+',   label: 'Enterprise Clients'   },
  { value: '12+',  label: 'Years of Delivery'    },
  { value: '100%', label: 'Retention Rate'        },
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

function Clients() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — logo grid */}
          <div className="grid grid-cols-2 gap-4">
            {clients.map((client) => (
              <LogoCard key={client.id} logo={client.logo} name={client.name} />
            ))}
          </div>

          {/* RIGHT — content */}
          <div className="flex flex-col gap-8 max-w-md">

            {/* Eyebrow + Heading */}
            <div>
              <p className="text-h3 text-[var(--color-highlight)]">Trusted By Brands</p>
              <h2 className="text-h1 text-white mt-1">Our Clients</h2>
              <p className="text-body text-white/65 mt-4 leading-relaxed">
                We partner with forward-thinking enterprises to turn operational complexity into competitive clarity. Every engagement is built on long-term trust, measurable outcomes, and a commitment to delivery that does not stop at go-live.
              </p>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-0 pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-1 px-4"
                  style={{
                    borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                  }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{ color: 'var(--color-highlight)' }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Clients
