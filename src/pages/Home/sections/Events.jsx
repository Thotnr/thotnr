import aiSummitImg from '../../../assets/images/ai-summit.jpg'

function Events() {
  return (
    <>
      <style>{`
        @keyframes eyebrowFade {
          from { opacity: 0; letter-spacing: 0.3em; }
          to   { opacity: 1; letter-spacing: 0.1em; }
        }
        @keyframes headSlide {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ev-eyebrow  { animation: eyebrowFade 0.8s ease 0.1s both; }
        .ev-headline { animation: headSlide 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s both; }

        /* Image wrap — full width on mobile, fixed on md+ */
        .ev-img-wrap {
          overflow: hidden;
          border-radius: 8px;
          flex-shrink: 0;
          width: 100%;
          height: 220px;
        }
        @media (min-width: 768px) {
          .ev-img-wrap {
            width: 300px;
            height: auto;
            min-height: 260px;
          }
        }
        @media (min-width: 1024px) {
          .ev-img-wrap {
            width: 380px;
            height: 280px;
            min-height: unset;
          }
        }
        .ev-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
          display: block;
        }
        .ev-img-wrap:hover img { transform: scale(1.07); }

        .ev-card-title {
          color: var(--color-text-primary);
          text-decoration: none;
          display: block;
          transition: color 0.2s ease;
        }

        /* Vertical divider — desktop only */
        .ev-divider-v {
          display: none;
        }
        @media (min-width: 1024px) {
          .ev-divider-v {
            display: block;
            width: 1px;
            background: rgba(11,15,25,0.1);
            flex-shrink: 0;
            align-self: stretch;
          }
        }

        /* Horizontal divider between cards — mobile + tablet only */
        .ev-divider-h {
          display: block;
          height: 1px;
          background: rgba(11,15,25,0.1);
          margin: 4px 0;
        }
        @media (min-width: 1024px) {
          .ev-divider-h {
            display: none;
          }
        }

        /* Card padding — tight on mobile, medium on tablet, original on desktop */
        .ev-card {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 12px;
          flex: 1;
          padding: 16px 0;
        }
        @media (min-width: 768px) {
          .ev-card {
            padding: 8px 20px;
            gap: 14px;
          }
        }
        @media (min-width: 1024px) {
          .ev-card {
            padding: 8px 40px;
            gap: 16px;
          }
        }

        /* Cards container — stacks on mobile/tablet, row on desktop */
        .ev-cards-wrap {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        @media (min-width: 1024px) {
          .ev-cards-wrap {
            flex-direction: row;
            align-items: stretch;
          }
        }

        /* Outer row — stacks on mobile, row on tablet+ */
        .ev-row {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        @media (min-width: 768px) {
          .ev-row {
            flex-direction: row;
            align-items: stretch;
            gap: 0;
          }
        }
      `}</style>

      <section className="py-16 px-5 md:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8 text-center lg:text-left">
            <p className="text-h4 text-[var(--color-highlight)]">
              Upcoming
            </p>
            <h1
              className="ev-headline text-h1"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Featured Events
            </h1>
          </div>

          {/* Content row */}
          <div className="ev-row">

            {/* Image */}
            <div className="ev-img-wrap">
              <img src={aiSummitImg} alt="AI Leadership Summit 2025" />
            </div>

            {/* Cards wrapper — stacks on mobile/tablet, side by side on desktop */}
            <div className="ev-cards-wrap">

              {/* Card 1 */}
              <div className="ev-card">
                <p
                  className="text-h4"
                  style={{ color: 'var(--color-highlight)' }}
                >
                  Upcoming event | May 14, 2026
                </p>
                <h2 className="ev-card-title text-h3">
                  AI Leadership Summit
                </h2>
                <p
                  className="text-body-lg"
                  style={{ color: 'var(--color-text-secondary)', }}
                >
                  A curated gathering of enterprise AI leaders — sharing what's
                  actually working in production environments, governance
                  frameworks, and C-suite AI alignment.
                </p>
              </div>

              {/* Divider — horizontal on mobile/tablet, vertical on desktop */}
              <div className="ev-divider-h" />
              <div className="ev-divider-v" />

              {/* Card 2 */}
              <div className="ev-card">
                <p
                  className="text-h4"
                  style={{ color: 'var(--color-highlight)' }}
                >
                  Upcoming event | May 12, 2026
                </p>
                <h2 className="ev-card-title text-h3">
                  Enterprise AI Workshop
                </h2>
                <p
                  className="text-body-lg"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Hands-on half-day workshop covering AI readiness assessment,
                  use-case prioritisation, and rapid prototyping frameworks your
                  team can apply immediately.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Events
