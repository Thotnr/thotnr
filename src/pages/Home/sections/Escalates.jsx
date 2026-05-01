import { Target, TrendingUp, LayoutGrid } from 'lucide-react'

const metrics = [
  { number: '3',   suffix: '×', label: 'Faster decisions after 90 days' },
  { number: '68',  suffix: '%', label: 'Reduction in repeated manual work' },
  { number: '4',   suffix: '×', label: 'ROI growth by month six' },
  { number: '100', suffix: '%', label: 'Built on your data, not generic models' },
]

const cards = [
  {
    Icon: Target,
    title: 'Starts sharp. Gets sharper.',
    desc: 'Day one, the system understands your context. By day ninety, it knows your patterns, language, and priorities — and acts on them with precision.',
  },
  {
    Icon: TrendingUp,
    title: 'Value that compounds over time.',
    desc: 'Unlike one-time builds, our systems grow in value — learning from every workflow, decision, and outcome your organisation produces.',
  },
  {
    Icon: LayoutGrid,
    title: 'Scales without losing depth.',
    desc: 'As your organisation grows, intelligence scales across teams and geographies — without sacrificing the contextual depth that makes it useful.',
  },
]

function Escalates() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-tertiary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Zone 1 — Header */}
        <div className='mb-8'>
          <p 
          className="text-h4"
          style={{
            color: 'var(--color-accent)',
            marginBottom: '10px',
          }}>
            Why It Escalates
          </p>

          <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 4vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--color-text-white)',
              marginBottom: '4px',
            }}>
            Intelligence that grows
            <br />
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
              the more you use it.
            </em>
          </h2>

          <p 
          className='text-body mt-2 max-w-2xl'
          style={{
        
            color: 'rgba(255, 255, 255, 0.72)',
            
          }}>
            Most tools plateau the moment they're deployed. Thotnr compounds. Every interaction deepens the system's understanding of your business — so results don't just hold, they accelerate.
          </p>
        </div>

        {/* Zone 2 — Metrics Strip */}
        <style>{`
          .escalates-metric:nth-child(2n)   { border-left: 1px solid var(--color-overlay-border); }
          .escalates-metric:nth-child(n+3)  { border-top:  1px solid var(--color-overlay-border); }
          @media (min-width: 768px) {
            .escalates-metric               { border-top: none; border-left: none; }
            .escalates-metric:nth-child(n+2){ border-left: 1px solid var(--color-overlay-border); }
          }
        `}</style>
        <div
          className="mb-[28px] grid grid-cols-2 md:flex overflow-hidden rounded-xl"
          style={{ background: 'var(--color-overlay-metric)' }}
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              className="escalates-metric md:flex-1 flex flex-col justify-center"
              style={{ padding: '24px 22px' }}
            >
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '34px',
                fontWeight: 700,
                lineHeight: 1,
                color: 'var(--color-text-white)',
                margin: 0,
              }}>
                {m.number}
                <span style={{ color: 'var(--color-accent)' }}>{m.suffix}</span>
              </p>
              <p 
              className='text-body mt-2'
              style={{
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.55)',
                lineHeight: '1.2'
                
              }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Zone 3 — Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '14px' }}
        >
          {cards.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="rounded-xl"
              style={{
                background: 'var(--color-overlay-card)',
                border: '1px solid var(--color-overlay-border)',
                padding: '22px',
              }}
            >
              <div
                className="inline-flex items-center justify-center rounded-lg mb-3"
                style={{
                  background: 'var(--color-icon-bg)',
                  width: '36px',
                  height: '36px',
                }}
              >
                <Icon size={18} color="var(--color-accent)" strokeWidth={1.8} />
              </div>

              <p 
              className='text-h3'
              style={{
                fontFamily: 'var(--font-heading)',
                lineHeight: '1.2',
                fontWeight: 600,
                color: 'var(--color-text-white)',
                margin: '0 0 8px',
              }}>
                {title}
              </p>

              <p 
              className='text-body'
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 400,
                lineHeight: 1.4,
                color: 'rgba(255, 255, 255, 0.65)',
                margin: 0,
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  )
}

export default Escalates
