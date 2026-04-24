import img1 from '../../../assets/images/case1.jpg'
import img2 from '../../../assets/images/case2.jpg'
import img3 from '../../../assets/images/ai-service.jpg'
import img4 from '../../../assets/images/enterprise-architect.jpg'
import img5 from '../../../assets/images/cloud.jpg'
import img6 from '../../../assets/images/ai-summit.jpg'
import img7 from '../../../assets/images/user-experience.jpg'
import img8 from '../../../assets/images/security-risk.jpg'

const cases = [
  {
    id: 1,
    industry: 'Financial Services',
    headline: 'How a Global Bank Transformed Credit Risk with AI',
    desc: 'We embedded an end-to-end ML decisioning layer into a tier-1 bank\'s credit origination stack, reducing decision time by 73% while improving portfolio quality. Seamless automation allowed the bank to scale loan processing capacity without increasing operational overhead.',
    image: img1,
  },
  {
    id: 2,
    industry: 'Healthcare',
    headline: 'AI-Powered Clinical Triage Across 12 Hospitals',
    desc: 'We deployed intelligent triage systems that reduced patient wait times and improved diagnosis prioritisation across multiple hospital networks. Real-time data analysis empowered clinicians to focus on high-acuity cases, delivering faster, more effective patient outcomes.',
    image: img2,
  },
  {
    id: 3,
    industry: 'Artificial Intelligence',
    headline: 'Building a Production-Grade GenAI Platform for a Retail Giant',
    desc: 'A leading retail enterprise needed a personalisation engine that could process millions of customer signals daily. We architected a RAG-based recommendation system that increased basket size by 28% and cut time-to-insight from days to seconds.',
    image: img3,
  },
  {
    id: 4,
    industry: 'Enterprise Architecture',
    headline: 'Modernising a Legacy Architecture Across 40 Business Units',
    desc: 'A multinational conglomerate was running on fragmented, decade-old systems that blocked AI adoption. We delivered a phased enterprise architecture transformation — aligning technology to business capability and unlocking a 60% faster delivery cycle.',
    image: img4,
  },
  {
    id: 5,
    industry: 'Cloud',
    headline: '40% Infrastructure Cost Reduction Through Cloud-Native Redesign',
    desc: 'We migrated a high-traffic SaaS platform from on-premise monoliths to a cloud-native microservices architecture on AWS. The result: 40% lower infrastructure cost, 99.97% uptime, and the platform\'s first successful Black Friday without incident.',
    image: img5,
  },
  {
    id: 6,
    industry: 'Manufacturing',
    headline: 'Predictive Maintenance That Reduced Downtime by 65%',
    desc: 'A global manufacturer was losing millions annually to unplanned equipment failures. We built sensor-data pipelines and ML anomaly detection models that gave maintenance teams a 72-hour advance warning window — cutting unplanned downtime by 65%.',
    image: img6,
  },
  {
    id: 7,
    industry: 'Experience Design',
    headline: 'Redesigning the Enterprise UX for a 50,000-Seat ERP Rollout',
    desc: 'Enterprise software adoption was stalling due to poor user experience. We led the end-to-end UX redesign of a core ERP interface, cutting training time by half and increasing daily active usage by 3x within the first quarter of launch.',
    image: img7,
  },
  {
    id: 8,
    industry: 'Cybersecurity',
    headline: 'AI-Driven Threat Detection for a National Financial Network',
    desc: 'We built a real-time threat detection system that processes over 2 billion network events daily across a national payments infrastructure. Anomaly detection latency dropped from 8 minutes to under 4 seconds, stopping three major breach attempts in the first year.',
    image: img8,
  },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block">
      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function CaseBlock({ industry, headline, desc, image, index }) {
  const isImageLeft = index % 2 === 0

  return (
    <div
      className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-12 md:gap-16 py-10`}
      style={{ borderBottom: '1px solid rgba(108,117,125,0.12)' }}
    >
      {/* Image — always first in DOM so mobile order is image → content */}
      <div className="w-full md:w-[55%] flex-shrink-0">
        <img
          src={image}
          alt={headline}
          className="w-full rounded-xl object-cover"
          style={{ aspectRatio: '16/10' }}
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[45%] flex flex-col justify-center">

        <p className="text-h3 mb-3" style={{ color: 'var(--color-highlight)' }}>
          {industry}
        </p>

        <h2 className="text-h2 leading-snug mb-5" style={{ color: 'var(--color-text-primary)' }}>
          {headline}
        </h2>

        <p className="text-body-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
          {desc} 
          <a
          href="#"
          className="ml-2 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
          style={{ color: 'var(--color-secondary)' }}
        >
          Read More..
        </a>
        </p>

        

      </div>
    </div>
  )
}

function S2CaseStudies() {
  return (
    <section className="px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="pt-16">
          <h2 className="text-h1" style={{ color: 'var(--color-text-primary)' }}>
            Case Studies
          </h2>
          <p className="text-body max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            Eight engagements across industries — each one a measurable shift from AI ambition to enterprise reality.
          </p>
        </div>

        {/* Alternating blocks */}
        {cases.map((c, i) => (
          <CaseBlock key={c.id} {...c} index={i} />
        ))}

        {/* Bottom padding */}
        <div className="pb-16" />

      </div>
    </section>
  )
}

export default S2CaseStudies
