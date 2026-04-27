function splitQuote(quote) {
  const sentences = quote.match(/[^.!?]+[.!?]+\s*/g) || [quote]
  if (sentences.length <= 1) return { body: quote, highlight: null }
  const last = sentences[sentences.length - 1].trim()
  const body = sentences.slice(0, -1).join('').trim()
  return { body, highlight: last }
}

function S4ClientSpeak({ clientSpeak }) {
  if (!clientSpeak?.quote) return null

  const { quote, name, role, company } = clientSpeak
  const hasAttribution = name && name !== 'To Be Provided'
  const { body, highlight } = splitQuote(quote)

  return (
    <section
      className="px-6 py-16 md:px-10 lg:px-16"
      style={{
        background: 'var(--color-secondary)',
        
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

        {/* Heading */}
        <h2
          className="text-h1"
          style={{ fontWeight: 700, marginBottom: '20px' }}
        >
          <span style={{ color: 'var(--color-highlight)' }}>Client</span>
          <span style={{ color: '#ffffff' }}> Speaks</span>
        </h2>

        {/* Quote block */}
        <div style={{ position: 'relative' }}>
          <blockquote
            style={{
              fontSize: '18px',
              lineHeight: 1.85,
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              margin: 0,
              padding: 0,
            }}
          >
            {highlight ? (
              <>
                <span style={{ color: 'rgba(255,255,255,0.82)' }}>{body} </span>
                <span style={{ color: 'var(--color-highlight)' }}>{highlight}</span>
              </>
            ) : (
              <span style={{ color: 'rgba(255,255,255,0.82)' }}>{quote}</span>
            )}
          </blockquote>
        </div>

      </div>
    </section>
  )
}

export default S4ClientSpeak
