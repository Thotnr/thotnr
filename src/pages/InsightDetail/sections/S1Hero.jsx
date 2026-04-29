function S1Hero({ data }) {
  return (
    <section className="relative w-full" style={{ height: '100vh' }}>
      <img
        src={data.coverImg}
        alt={data.subheadline}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.28) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.20) 100%)
          `,
        }}
      />

      <div
        className="absolute flex flex-col gap-5"
        style={{ top: '60%', left: '10%', right: '10%', transform: 'translateY(-50%)' }}
      >

        <h1
          style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(36px, 8.5vw, 72px)',
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: '-0.032em',
          color: 'var(--color-text-white)',
          marginBottom: '28px',
          textTransform: 'uppercase !important',
        }}
        >
          {data.subheadline.toUpperCase()}
        </h1>

      </div>
    </section>
  )
}

export default S1Hero
