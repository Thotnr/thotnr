function S1Hero({ data }) {
  return (
    <section
      className="relative w-full"
      style={{ height: '100vh' }}
    >
      <img
        src={data.coverImg}
        alt={data.coverTagline}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      {/* Overlay — left dark + bottom dark */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.20) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 100%)
          `,
        }}
      />
      {/* Content */}
      <div
        className="absolute flex flex-col gap-5"
        style={{ top: '60%', left: '10%', right: '10%', transform: 'translateY(-50%)' }}
      >
    
        <h1
          className="text-display leading-tight"
          style={{ color: '#ffffff', maxWidth: '700px' }}
        >
          {data.coverTagline}
        </h1>

        <p
          className="text-h4"
          style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '560px' }}
        >
          {data.coverSubheadline}
        </p>
      </div>
    </section>
  )
}

export default S1Hero
