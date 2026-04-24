const clients = [
  { id: 1, abbr: "RIO", name: "Rio 2016" },
  { id: 2, abbr: "OS", name: "OpenSky Resorts" },
  { id: 3, abbr: "LX", name: "Lexus" },
  { id: 4, abbr: "BC", name: "Bookclip.com" },
  { id: 5, abbr: "HS", name: "Health Scroll" },
  { id: 6, abbr: "SV", name: "Servitium" },
  { id: 7, abbr: "ZS", name: "ZS Associates" },
  { id: 8, abbr: "VM", name: "VMT" },
  { id: 9, abbr: "DJ", name: "Djubo" },
  { id: 10, abbr: "LI", name: "LexInnova" },
  { id: 11, abbr: "DS", name: "DiGiSPICE" },
  { id: 12, abbr: "BZ", name: "Bazinga!" },
  { id: 13, abbr: "KD", name: "Kingdom of Dreams" },
  { id: 14, abbr: "NY", name: "Nykaa" },
  { id: 15, abbr: "CR", name: "Creditas" },
  { id: 16, abbr: "PP", name: "Peppl" },
  { id: 17, abbr: "SW", name: "Swayam" },
  { id: 18, abbr: "HF", name: "HeroFinCorp" },
  { id: 19, abbr: "TI", name: "Tata International" },
  { id: 20, abbr: "SB", name: "Standard Bank" },
  { id: 21, abbr: "OV", name: "Ovation" },
  { id: 22, abbr: "CS", name: "CSAV" },
]

function Logo({ client }) {
  return (
    <div className="group w-full h-24 [perspective:1200px]">
      <div className="
        relative w-full h-full duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        [transform-style:preserve-3d]
        group-hover:[transform:rotateY(180deg)]
      ">
        {/* FRONT */}
        <div className="
          absolute inset-0 rounded-xl flex items-center justify-center
          bg-card border border-border-dk
          text-muted text-sm font-semibold tracking-wider
          backdrop-blur-md
          shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
          group-hover:border-accent/40
          transition-all duration-500
          [backface-visibility:hidden]
        ">
          <span className="opacity-70 group-hover:opacity-100 transition">
            {client.abbr}
          </span>
        </div>

        {/* BACK */}
        <div className="
          absolute inset-0 rounded-xl flex items-center justify-center
          bg-card border border-accent/40
          text-ink-soft text-xl font-medium text-center px-3
          shadow-[0_0_25px_rgba(225,29,72,0.15)]
          [transform:rotateY(180deg)]
          [backface-visibility:hidden]
        ">
          {client.name}
        </div>
      </div>
    </div>
  )
}

function Clients() {
  return (
    <section className="bg-dark min-h-screen py-20 px-6 relative overflow-hidden">

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-6 gap-x-6 gap-y-8 items-center">

          {/* ROW 1 */}
          {clients.slice(0, 6).map(c => (
            <Logo key={c.id} client={c} />
          ))}

          {/* ROW 2 LEFT */}
          {clients.slice(6, 8).map(c => (
            <Logo key={c.id} client={c} />
          ))}

          {/* CENTER TEXT (takes 2 cols) */}
          <div className="col-span-2 text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-soft mb-4">
              Our <span className="text-accent">Clients</span>

            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Have a project in mind, or looking for creative solutions?
            </p>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        
      </div>

          {/* ROW 2 RIGHT */}
          {clients.slice(8, 10).map(c => (
            <Logo key={c.id} client={c} />
          ))}

          {/* ROW 3 */}
          {clients.slice(10, 16).map(c => (
            <Logo key={c.id} client={c} />
          ))}

          {/* ROW 4 */}
          {clients.slice(16, 22).map(c => (
            <Logo key={c.id} client={c} />
          ))}

        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[160px] rounded-full translate-x-1/2 translate-y-1/2" />
    </section>
  )
}

export default Clients