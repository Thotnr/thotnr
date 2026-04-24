import client1 from '../../../assets/images/client1.png'
import client2 from '../../../assets/images/client2.png'
import client3 from '../../../assets/images/client3.png'
import client4 from '../../../assets/images/client4.png'

const clients = [
  { id: 1, name: "Rio 2016", logo: client1 },
  { id: 2, name: "OpenSky Resorts", logo: client2 },
  { id: 3, name: "Lexus", logo: client3 },
  { id: 4, name: "Bookclip.com", logo: client4 },
  { id: 5, name: "Health Scroll", logo: client1 },
  { id: 6, name: "Servitium", logo: client2 },
  { id: 7, name: "ZS Associates", logo: client3 },
  { id: 8, name: "VMT", logo: client4 },
]

function LogoCard({ client }) {
  return (
    <div
      className="
        flex items-center justify-center
        h-full min-h-[90px]
        p-1
        rounded-xl
        border transition-all duration-300
        bg-[var(--color-primary)] backdrop-blur-sm
      "
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="flex flex-col items-center justify-center">

        {/* LOGO */}
        <img
          src={client.logo}
          alt={client.name}
          className="
            max-h-14 md:max-h-16 object-contain
            transition-all duration-300
          "
        />

        {/* NAME */}
        <span
          className="text-sm md:text-base font-semibold tracking-tight text-center"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {client.name}
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
      <div className="max-w-7xl mx-auto">

        {/* SPLIT LAYOUT */}
        <div className="grid md:grid-cols-2 gap-16 items-stretch">

          {/* LEFT → GRID */}
          <div className="grid grid-cols-2 gap-5 h-full">
            {clients.map((client) => (
              <LogoCard key={client.id} client={client} />
            ))}
          </div>

          {/* RIGHT → CONTENT */}
          <div className="flex flex-col  h-full max-w-md">

            {/* TOP CONTENT */}
            <div>
              <p
                className="text-label text-[var(--color-highlight)]"
              >
                Trusted By Brands
              </p>

              <h2
                className="text-h1 text-white"
              >
                Our CLients
              </h2>

              <p
                className="text-body text-white/70 mt-2 max-w-2xl"
              >
                In an ever-evolving market, success requires more than expertise—it requires a partner who understands your unique DNA. We collaborate with forward-thinking enterprises to transform operational hurdles into competitive advantages. Through a fusion of data-driven strategy and execution-focused support, we deliver high-impact results that are measurable, repeatable, and aligned with your bottom line.
              </p>
            </div>

            {/* BOTTOM CTA */}
           

            <div className="mt-14">
  <div className="flex gap-4 flex-wrap">

    {/* PRIMARY */}
    <button
      className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
      style={{
        background: 'var(--color-white)',
        color: 'var(--color-secondary)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.85)' // slight dim
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--color-white)'
      }}
    >
      See all clients
    </button>

    {/* SECONDARY */}
    <button
      className="px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300"
      style={{
        border: '1px solid rgba(255,255,255,0.2)',
        color: 'var(--color-white)',
        background: 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.08)' // subtle fill
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
      }}
    >
      Become a client
    </button>

  </div>
</div>
            </div>

          </div>

        </div>

      
    </section>
  )
}

export default Clients