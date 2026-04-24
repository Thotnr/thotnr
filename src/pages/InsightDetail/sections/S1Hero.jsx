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
          className="text-display leading-tight"
          style={{ color: '#ffffff', maxWidth: '760px' }}
        >
          {data.subheadline}
        </h1>

        <div className="flex items-center gap-4 mt-1">
          <img
            src={data.authorImage}
            alt={data.authorName}
            className="w-11 h-11 rounded-full object-cover object-top flex-shrink-0"
          />
          <div>
            <p className="text-body font-semibold" style={{ color: 'rgba(255,255,255,0.92)' }}>
              {data.authorName}
            </p>
            <p className="text-caption" style={{ color: 'rgba(255,255,255,0.58)' }}>
              {data.authorRole} &middot; {data.publishDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default S1Hero
