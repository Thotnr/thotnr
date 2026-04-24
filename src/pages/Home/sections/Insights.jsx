import { Link } from 'react-router-dom'
import img1 from '../../../assets/images/user-experience.jpg'
import img2 from '../../../assets/images/security-risk.jpg'
import img3 from '../../../assets/images/ai.jpg'

const articles = [
  {
    image:    img1,
    category: 'Experience Design',
    title:    'The Next Generation User Experience Today',
    excerpt:  'The computer user interface has perhaps been the most frustrating aspect of technology adoption since the dawn of the computer age. Humans had to adapt to using a computer. Operators have moved from punch cards to keyboards, and the mouse, finally arriving at a touch interface…',
    href:     '#',
  },
  {
    image:    img2,
    category: 'Security',
    title:    'Security Risks to Watch Out For in Your Web Application',
    excerpt:  "This article deals with the top known vulnerabilities that exist in systems. These are regularly published as OWASP top 10. This article does not claim to be original research but discusses the known top vulnerabilities from a programmer's point of view...",
    href:     '#',
  },
  {
    image:    img3,
    category: 'Artificial Intelligence',
    title:    'Postulates to Artificial Intelligence',
    excerpt:  'This article forms an introductory discussion on the upcoming concept of Artificial Intelligence. This article defines what intelligence is and how one could identify artificial intelligence — not the tools, but the foundations...',
    href:     '#',
  },
]

function InsightCard({ image, category, title, excerpt, href }) {
  return (
    <article
      className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: '#ffffff',
        border: '1px solid var(--color-border-subtle)',
      }}
    >
      {/* Image */}
      <div className="overflow-hidden h-48 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 gap-4 p-5">

        {/* Category (ONLY highlight usage) */}
        <span
          className="text-[11px] font-semibold uppercase tracking-wide"
          style={{ color: 'var(--color-secondary)' }}
        >
          {category}
        </span>

        {/* Title */}
        <h3
          className="text-lg font-semibold leading-snug"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed line-clamp-4"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {excerpt}
        </p>

        {/* CTA (neutral, no highlight) */}
        <Link
          to="/insights"
          className="text-sm font-medium mt-auto inline-flex items-center gap-1 no-underline transition-all duration-200 hover:gap-2"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Read more..
        </Link>
      </div>
    </article>
  )
}
function Insights() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }} // ✅ fixed
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p
            className="text-h3 text-[var(--color-highlight)]"
          >
            Thinking Out Loud
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Our Insights
          </h2>

          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Perspectives on technology, strategy, and the future of intelligent enterprise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {articles.map((a) => (
            <InsightCard key={a.title} {...a} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/insights"
            className="inline-block px-6 py-3 rounded-full text-sm font-medium border no-underline transition-all duration-300"
            style={{ border: '1px solid var(--color-text-primary)', color: 'var(--color-text-primary)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-text-primary)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-primary)' }}
          >
            View all insights
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Insights