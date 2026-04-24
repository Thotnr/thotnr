import { Link } from 'react-router-dom'
import caseImg1 from '../../../assets/images/case1.jpg'
import caseImg2 from '../../../assets/images/case2.jpg'

const caseStudies = [
  {
    industry: 'Financial Services',
    headline: 'How a Global Bank Transformed Credit Risk with AI',
    description:
"We embedded an end-to-end ML decisioning layer into a tier-1 bank's credit origination stack, reducing decision time by 73% while improving portfolio quality. This seamless automation allowed the bank to scale its loan processing capacity without increasing operational overhead.",
    image: caseImg1,
  },
  {
    industry: 'Healthcare',
    headline: 'AI-Powered Clinical Triage Across 12 Hospitals',
    description:
"We deployed intelligent triage systems that reduced patient wait times and improved diagnosis prioritisation across multiple hospital networks. By integrating real-time data analysis, we empowered clinicians to focus their expertise on high-acuity cases, ultimately leading to faster, more effective patient outcomes.",
    image: caseImg2,
  },
]

function CaseStudies() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p
            className="text-h3 text-[var(--color-highlight)]"
          >
            Real Impact
          </p>

          <h2
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Our Case Studies
          </h2>
        </div>

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">

          {/* Image */}
          <div>
            <img
              src={caseStudies[0].image}
              alt=""
              className="w-full h-[320px] object-cover rounded-xl"
            />
          </div>

          {/* Content */}
          <div>
            <p
              className="text-h4 mb-3"
              style={{ color: 'var(--color-secondary)' }} // subtle accent use (2)
            >
              {caseStudies[0].industry}
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {caseStudies[0].headline}
            </h3>

            <p
              className="text-base mb-2"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {caseStudies[0].description}
            </p>

            <Link
              to="/case-studies"
              className="text-sm font-medium no-underline"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Read more..
            </Link>
          </div>
        </div>

        {/* Row 2 (REVERSED) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Content */}
          <div className="order-2 md:order-1">
            <p
              className="text-h4 mb-3"
              style={{ color: 'var(--color-secondary)' }}
            >
              {caseStudies[1].industry}
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {caseStudies[1].headline}
            </h3>

            <p
              className="text-base mb-2"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {caseStudies[1].description}
            </p>

            <Link
              to="/case-studies"
              className="text-sm font-medium no-underline"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Read more..
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <img
              src={caseStudies[1].image}
              alt=""
              className="w-full h-[320px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-block px-6 py-3 rounded-full text-sm font-medium border no-underline transition-all duration-300"
            style={{ border: '1px solid var(--color-text-primary)', color: 'var(--color-text-primary)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-text-primary)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-primary)' }}
          >
            View all studies
          </Link>
        </div>

      </div>
    </section>
  )
}

export default CaseStudies