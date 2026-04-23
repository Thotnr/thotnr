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

        .ev-img-wrap {
          overflow: hidden;
          border-radius: 8px;
          flex-shrink: 0;
          width: 380px;
          height: 280px;
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
          color: #1e2d4f;
          text-decoration: none;
          display: block;
          transition: color 0.2s ease;
          font-size: clamp(22px, 2.2vw, 30px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.3px;
        }
        .ev-card-title:hover { color: var(--color-accent); }

        .ev-divider {
          width: 1px;
          background: #e2e8f0;
          flex-shrink: 0;
          align-self: stretch;
        }
      `}</style>

      <section className="pt-20 px-6 md:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p
                className="ev-eyebrow text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--color-accent)' }}
              >
                Upcoming
              </p>
              <h2
                className="ev-headline text-3xl sm:text-4xl font-bold tracking-tight"
                style={{ color: '#010716' }}
              >
                Featured Events
              </h2>
            </div>
            <a
              href="#"
              className="text-sm font-bold no-underline transition-colors duration-150"
              style={{ color: '#010716' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#010716' }}
            >
              View All Events →
            </a>
          </div>

          {/* Single row — exactly Nagarro */}
          <div className="flex flex-col md:flex-row items-stretch gap-0">

            {/* Image */}
            <div className="ev-img-wrap">
              <img src={aiSummitImg} alt="AI Leadership Summit 2025" />
            </div>

            {/* Card 1 */}
            <div className="flex flex-col justify-start gap-4 flex-1 px-10 py-2">
              <p
                className="text-sm font-semibold"
                style={{ color: 'var(--color-accent)' }}
              >
                Upcoming event | May 14, 2026
              </p>
              <a href="#" className="ev-card-title">
                AI Leadership Summit 2025
              </a>
              <p
                className="leading-relaxed"
                style={{
                  color: '#64748b',
                  fontSize: '16px',
                  lineHeight: '1.7',
                }}
              >
                A curated gathering of enterprise AI leaders — sharing what's
                actually working in production environments, governance
                frameworks, and C-suite AI alignment.
              </p>
            </div>

            {/* Vertical divider */}
            <div className="ev-divider hidden md:block" />

            {/* Card 2 */}
            <div className="flex flex-col justify-start gap-4 flex-1 px-10 py-2">
              <p
                className="text-sm font-semibold"
                style={{ color: 'var(--color-accent)' }}
              >
                Upcoming event | May 12, 2026
              </p>
              <a href="#" className="ev-card-title">
                Enterprise AI Workshop
              </a>
              <p
                className="leading-relaxed"
                style={{
                  color: '#64748b',
                  fontSize: '16px',
                  lineHeight: '1.7',
                }}
              >
                Hands-on half-day workshop covering AI readiness assessment,
                use-case prioritisation, and rapid prototyping frameworks your
                team can apply immediately.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Events
