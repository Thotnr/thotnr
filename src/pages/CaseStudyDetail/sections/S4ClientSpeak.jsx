function S4ClientSpeak({ clientSpeak }) {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left — portrait */}
        <div>
          <img
            src={clientSpeak.image}
            alt={clientSpeak.name}
            className="w-full"
            style={{ maxHeight: '600px', aspectRatio: '5/4' }}
          />
        </div>

        {/* Right — quote + attribution */}
        <div className="flex flex-col gap-8">
          <p
            className="text-h2 leading-snug"
            style={{
              color: 'var(--color-secondary)',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
            }}
          >
            &ldquo;{clientSpeak.quote}&rdquo;
          </p>

          <div>
            <p className="text-h4" style={{ color: 'var(--color-text-primary)' }}>
              {clientSpeak.name}
            </p>
            <p className="text-body mt-1" style={{ color: 'var(--color-text-secondary)' }}>
              {clientSpeak.role}, {clientSpeak.company}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default S4ClientSpeak
