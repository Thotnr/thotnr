import { useState } from 'react'

import aiServiceImg          from '../../../assets/images/ai-service.jpg'
import enterpriseArchitectImg from '../../../assets/images/enterprise-architect.jpg'
import cloudImg              from '../../../assets/images/cloud.jpg'
import userExperienceImg     from '../../../assets/images/user-experience.jpg'
import securityRiskImg       from '../../../assets/images/security-risk.jpg'
import aiImg                 from '../../../assets/images/ai.jpg'
import aiPageCoverImg        from '../../../assets/images/ai-page-cover.jpg'
import aiHeroBgImg           from '../../../assets/images/thotnr_ai_hero_bg.png'
import aiSummitImg           from '../../../assets/images/ai-summit.jpg'
import case2Img              from '../../../assets/images/case2.jpg'
import bankingImg            from '../../../assets/images/banking.jpg'
import caseStudyCoverImg     from '../../../assets/images/case-study-cover.jpg'
import product3Img           from '../../../assets/images/product3.jpg'
import insightsCoverImg      from '../../../assets/images/insights-cover.jpg'
import healthMedicalImg      from '../../../assets/images/health-medical.jpg'
import lifeAtThotnrImg       from '../../../assets/images/life-at-thotnr-2.jpg'
import entertainmentImg      from '../../../assets/images/entertainment.jpg'
import fashionRetailImg      from '../../../assets/images/fashion-retail.jpg'
import telecomImg            from '../../../assets/images/tele-communications.jpg'
import realEstateImg         from '../../../assets/images/real-estate.jpg'
import automotiveImg         from '../../../assets/images/automotive.jpg'
import pharmaImg             from '../../../assets/images/pharma.jpg'
import cloudPngImg           from '../../../assets/images/cloud.png'
import shippingImg           from '../../../assets/images/shipping-logistics.jpg'

const services = [
  {
    title: 'Artificial Intelligence',
    desc:  'From strategy to production-ready AI systems.',
    image: aiServiceImg,
  },
  {
    title: 'Enterprise Architecture',
    desc:  'Systems that scale with your ambition.',
    image: enterpriseArchitectImg,
  },
  {
    title: 'Cloud Engineering',
    desc:  'Migrate, modernise, and operate at scale.',
    image: cloudImg,
  },
  {
    title: 'Customer Experience & Design',
    desc:  'Human-centred design that drives adoption.',
    image: userExperienceImg,
  },
  {
    title: 'Security & Risk Management',
    desc:  'Enterprise-grade resilience from day one.',
    image: securityRiskImg,
  },
  {
    title: 'Data & Analytics',
    desc:  'Turning raw data into decisions that matter.',
    image: aiImg,
  },
  {
    title: 'Generative AI',
    desc:  'Build intelligent systems that create, reason, and act.',
    image: aiPageCoverImg,
  },
  {
    title: 'Machine Learning',
    desc:  'Scalable models that learn and improve over time.',
    image: aiHeroBgImg,
  },
  {
    title: 'Intelligent Automation',
    desc:  'Automate complex workflows with precision and control.',
    image: aiSummitImg,
  },
  {
    title: 'AI Strategy & Roadmap',
    desc:  'A clear path from AI ambition to business value.',
    image: case2Img,
  },
  {
    title: 'MLOps',
    desc:  'Operationalise ML at scale with robust pipelines.',
    image: bankingImg,
  },
  {
    title: 'Data Engineering',
    desc:  'Reliable data infrastructure that powers every insight.',
    image: caseStudyCoverImg,
  },
  {
    title: 'Strategy & Consulting',
    desc:  'Enterprise strategy grounded in technology reality.',
    image: product3Img,
  },
  {
    title: 'Technology & Engineering',
    desc:  'Full-stack engineering built for enterprise demands.',
    image: insightsCoverImg,
  },
  {
    title: 'Web 3.0',
    desc:  'Decentralised solutions for the next generation of business.',
    image: healthMedicalImg,
  },
  {
    title: 'Enterprise Platform',
    desc:  'Unified platforms that connect people, data, and processes.',
    image: lifeAtThotnrImg,
  },
  {
    title: 'Digital Transformation',
    desc:  'End-to-end transformation from legacy to cloud-native.',
    image: entertainmentImg,
  },
  {
    title: 'Experience Design',
    desc:  'Craft experiences that users trust and return to.',
    image: fashionRetailImg,
  },
  {
    title: 'UX Research',
    desc:  'Deep user insight that shapes every design decision.',
    image: telecomImg,
  },
  {
    title: 'API & Integration Architecture',
    desc:  'Seamless connectivity across systems and ecosystems.',
    image: realEstateImg,
  },
  {
    title: 'Enterprise Modernisation',
    desc:  'Retire technical debt and unlock future-ready architecture.',
    image: automotiveImg,
  },
  {
    title: 'Product Engineering',
    desc:  'Build products that ship fast and scale confidently.',
    image: pharmaImg,
  },
  {
    title: 'Quality Engineering',
    desc:  'Automated testing and QA embedded across the lifecycle.',
    image: cloudPngImg,
  },
  {
    title: 'Cloud Migration',
    desc:  'Lift, shift, and modernise with zero downtime.',
    image: shippingImg,
  },
  {
    title: 'Infrastructure Engineering',
    desc:  'Resilient infrastructure designed for enterprise workloads.',
    image: aiImg,
  },
]

function ServiceCard({ title, desc, image }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl overflow-hidden cursor-default"
      style={{
        border: '1px solid rgba(0,0,0,0.08)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 12px 32px rgba(0,0,0,0.12)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Image */}
      <div className="h-[340px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.4s ease',
          }}
        />
      </div>

      {/* Text */}
      <div className="p-5 bg-white">
        <h3 className="text-h3" style={{ color: 'var(--color-text-primary)' }}>{title}</h3>
        <p className="text-body-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
      </div>
    </div>
  )
}

function S2Services() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-h4 text-[var(--color-highlight)]">What We Offer</p>
          <h2 className="text-h1 text-[var(--color-text-primary)]">Our Services</h2>
          <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">
            End-to-end capabilities built for enterprise scale — from strategy to execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S2Services
