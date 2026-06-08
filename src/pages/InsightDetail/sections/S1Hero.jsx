import { urlFor } from '../../../lib/sanityClient'

function S1Hero({ data }) {

  const coverImage =
    data.coverImage
      ? urlFor(data.coverImage)
          .width(2000)
          .url()
      : ''

  return (
    <section
      className="relative w-full"
      style={{
        height: '100vh',
      }}
    >

      <img
        src={coverImage}
        alt={data.subheadline}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to right,
              rgba(0,0,0,.88),
              rgba(0,0,0,.18)
            ),

            linear-gradient(
              to bottom,
              rgba(0,0,0,.55),
              rgba(0,0,0,.12)
            )
          `,
        }}
      />

      <div
        className="absolute z-10"
        style={{
          top: '60%',
          left: '10%',
          right: '10%',
          transform: 'translateY(-50%)',
        }}
      >

        <p
          className="text-label"
          style={{
            color:
              'rgba(255,255,255,.55)',

            marginBottom:
              '18px',
          }}
        >
          {data.category?.replace(
            /-/g,
            ' '
          )}
        </p>

        <h1
          style={{
            fontFamily:
              'var(--font-accent)',

            fontSize:
              'clamp(36px,8vw,76px)',

            lineHeight:
              1.1,

            letterSpacing:
              '-0.04em',

            color:
              '#fff',

            maxWidth:
              '1050px',

            marginBottom:
              '30px',
          }}
        >
          {
            data.subheadline
          }
        </h1>

        <div
          style={{
            display:
              'flex',

            gap:
              '14px',

            alignItems:
              'center',
          }}
        >

          {
            data.author?.name &&
            (
              <>

                <span
                  style={{
                    color:
                      'rgba(255,255,255,.92)',
                  }}
                >
                  {
                    data.author.name
                  }
                </span>

                <span
                  style={{
                    color:
                      'rgba(255,255,255,.30)',
                  }}
                >
                  •
                </span>

                <span
                  style={{
                    color:
                      'rgba(255,255,255,.60)',
                  }}
                >
                  {
                    data.publishDate
                  }
                </span>

              </>
            )
          }

        </div>

      </div>

    </section>
  )
}

export default S1Hero