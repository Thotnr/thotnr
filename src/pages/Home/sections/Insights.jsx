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
      className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border-subtle)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.3)',
      }}
    >
      <div className="relative overflow-hidden h-48 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(17,24,39,0.7) 0%, transparent 60%)',
          }}
        />
        <span
          className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
          style={{
            background: 'var(--color-accent)',
            color: '#fff',
          }}
        >
          {category}
        </span>
      </div>

      <div className="flex flex-col flex-1 gap-4 p-6">
        <h3
          className="text-lg font-semibold leading-snug transition-colors duration-200 group-hover:text-red-400"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {title}
        </h3>

        <div
          className="w-10 h-px"
          style={{ background: 'var(--color-accent)', opacity: 0.5 }}
        />

        <p
          className="text-sm leading-relaxed flex-1 line-clamp-4"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {excerpt}
        </p>

             <a   href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold mt-auto w-fit transition-all duration-200 hover:gap-3"
          style={{ color: 'var(--color-accent)' }}
        >
          Read More...
          
        </a>
      </div>
    </article>
  )
}

function Insights() {
  return (
    <section
      className="py-20 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-bg-secondary)' }}
    >
      <div className="mx-auto">

        <div className="text-start mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            Thinking Out Loud
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Our Insights
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Perspectives on technology, strategy, and the future of intelligent enterprise — from the Thotnr team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {articles.map((a) => (
            <InsightCard key={a.title} {...a} />
          ))}
        </div>

        <div className="flex justify-center">
  
    <a href="#"
    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
    style={{
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.2)',
      color: 'var(--color-text-primary)',
      letterSpacing: '0.04em',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
      e.currentTarget.style.color = '#ffffff'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'transparent'
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
      e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
    }}
  >
    View All Insights
    <span>→</span>
  </a>
</div>

      </div>
    </section>
  )
}

export default Insights
