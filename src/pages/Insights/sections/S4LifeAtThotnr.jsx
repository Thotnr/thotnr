import imgLarge   from '../../../assets/images/case1.jpg'
import imgSmall1  from '../../../assets/images/life-at-thotnr-2.jpg'
import imgSmall2  from '../../../assets/images/about-us.jpg'
import imgBanner  from '../../../assets/images/work-life.jpg'

function S4LifeAtThotnr() {
  return (
    <section
      className="py-20 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        {/* Row 1 — Text Block + Large Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Text */}
          <div
            className="flex flex-col justify-center px-10 py-12 rounded-2xl"
            style={{ background: 'var(--color-secondary)' }}
          >
            <p className="text-h4 text-[var(--color-highlight)]">
              Life at Thotnr
            </p>
            <h2 className="text-h1 text-white leading-tight mb-5">
              Built by People Who Care About Getting It Right
            </h2>
            <p className="text-body text-white/70">
              We are practitioners, researchers, and builders who have spent careers
              inside the hardest problems in enterprise technology. The culture we
              have built reflects that — rigorous, curious, and deeply human.
            </p>
          </div>

          {/* Large image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={imgLarge}
              alt="Team at work"
              className="w-full h-full object-cover"
              style={{ minHeight: '360px' }}
            />
          </div>

        </div>

        {/* Row 2 — Small Img + Small Img + Text Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="overflow-hidden rounded-2xl">
            <img
              src={imgSmall1}
              alt="Collaboration"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={imgSmall2}
              alt="Office life"
              className="w-full h-64 object-cover object-top"
            />
          </div>

          {/* Text */}
          <div
            className="flex flex-col justify-center px-8 py-10 rounded-2xl"
            style={{ background: 'rgba(29,53,87,0.06)' }}
          >
            <h3 className="text-h3 mb-3" style={{ color: 'var(--color-text-primary)' }}>
              Where Deep Work Happens
            </h3>
            <p className="text-body-sm" style={{ color: 'var(--color-text-secondary)' }}>
              We give people the time, trust, and resources to do their best thinking —
              because the problems we work on deserve it.
            </p>
          </div>

        </div>

        {/* Row 3 — Wide Image Banner */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={imgBanner}
            alt="Thotnr"
            className="w-full object-cover"
            style={{ height: '280px', objectPosition: 'center 40%' }}
          />
        </div>

      </div>
    </section>
  )
}

export default S4LifeAtThotnr
