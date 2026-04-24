import imgFeatured   from '../../../assets/images/ai-summit.jpg'
import imgItem1      from '../../../assets/images/user-experience.jpg'
import imgItem2      from '../../../assets/images/security-risk.jpg'
import imgItem3      from '../../../assets/images/ai.jpg'
import imgItem4      from '../../../assets/images/ai-service.jpg'
import imgItem5      from '../../../assets/images/enterprise-architect.jpg'
import imgItem6      from '../../../assets/images/cloud.jpg'

const featured = {
  category: 'Artificial Intelligence',
  headline: 'Why Most Enterprise AI Projects Fail Before They Start',
  desc:     'The gap between AI ambition and production reality is not a technology problem. It is an organisational one. After working with over 200 enterprises, we have mapped the patterns that separate the projects that scale from the ones that stall — and what leaders can do about it.',
  image:    imgFeatured,
  href:     '#',
}

const articles = [
  {
    category: 'Experience Design',
    headline: 'The Next Generation User Experience Today',
    desc:     'The computer user interface has perhaps been the most frustrating aspect of technology adoption since the dawn of the computer age. Humans had to adapt to using a computer — and AI is finally reversing that.',
    image:    imgItem1,
    href:     '#',
  },
  {
    category: 'Security',
    headline: 'Security Risks to Watch Out For in Your Web Application',
    desc:     'This article deals with the top known vulnerabilities that exist in systems — regularly published as the OWASP top 10 — from a practitioner\'s point of view.',
    image:    imgItem2,
    href:     '#',
  },
  {
    category: 'Artificial Intelligence',
    headline: 'Postulates to Artificial Intelligence',
    desc:     'An introductory discussion on what intelligence actually is, and what it means to call something artificial — the foundations, not the tools.',
    image:    imgItem3,
    href:     '#',
  },
  {
    category: 'AI Strategy',
    headline: 'Building an AI-Ready Organisation',
    desc:     'The operating muscle companies need to absorb AI capability is not built overnight. Here is how leading enterprises are developing it deliberately.',
    image:    imgItem4,
    href:     '#',
  },
  {
    category: 'Enterprise Architecture',
    headline: 'The True Cost of Legacy Architecture',
    desc:     'Technical debt is not just a developer\'s problem. It is a strategic liability that compounds — blocking AI adoption, slowing delivery, and inflating operating cost every quarter it stays.',
    image:    imgItem5,
    href:     '#',
  },
  {
    category: 'Cloud',
    headline: 'Cloud Migration Without the Regret',
    desc:     'Most cloud migrations deliver less than half their projected savings. Here is the framework we use to ensure the economics actually work — before a single workload moves.',
    image:    imgItem6,
    href:     '#',
  },
]

function FeaturedInsight({ category, headline, desc, image, href }) {
  return (
    <div className="mb-10">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl mb-8">
        <img
          src={image}
          alt={headline}
          className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          style={{ height: '480px' }}
        />
      </div>

      {/* Content
      <div className="max-w-3xl">
        <p className="text-label text-[var(--color-highlight)] mb-3">{category}</p>

        <h2
          className="text-h1 leading-tight mb-5"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {headline}
        </h2>

        <p className="text-body-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          {desc}
        </p>

        <a
          href={href}
          className="text-sm font-semibold inline-flex items-center gap-1 no-underline transition-all duration-150 hover:gap-2"
          style={{ color: 'var(--color-highlight)' }}
        >
          Know more →
        </a>
      </div> */}
    </div>
  )
}

function ArticleRow({ category, headline, desc, image, href, index }) {
  const isImageLeft = index % 2 === 0

  return (
    <div
      className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 py-6`}
      
    >
      {/* Image — DOM first → mobile: image first, content second */}
      <div className="w-full md:w-[45%] flex-shrink-0 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={headline}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[55%] flex flex-col justify-center">
        <p className="text-h3 text-[var(--color-highlight)] mb-3">{category}</p>

        <h3
          className="text-h2 leading-snug mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {headline}
        </h3>

        <p className="text-body mb-6 line-clamp-3" style={{ color: 'var(--color-text-secondary)' }}>
          {desc}
          <a
          href={href}
          className="ml-2 text-sm font-semibold inline-flex items-center gap-1 no-underline transition-all duration-150 hover:gap-2"
          style={{ color: 'var(--color-secondary)' }}
        >
          Read more..
        </a>
        </p>
        
      </div>
    </div>
  )
}

function S2EditorialFeed() {
  return (
    <section
      className="pt-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-h1" style={{ color: 'var(--color-text-primary)' }}>
            Latest Thinking
          </h2>
        </div>

        {/* Featured */}
        <FeaturedInsight {...featured} />

        {/* Alternating list */}
        {articles.map((article, i) => (
          <ArticleRow key={article.headline} {...article} index={i} />
        ))}
      </div>
    </section>
  )
}

export default S2EditorialFeed
