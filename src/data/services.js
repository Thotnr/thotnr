
import aiServiceImg           from '../assets/images/ai-service.jpg'
import generativeAIImg        from '../assets/images/services/generative-AI.jpeg'
import machineLearningImg     from '../assets/images/services/machine-learning.jpg'
import intelligentAutoImg     from '../assets/images/services/intelligence-automation.jpg'
import aiStrategyImg          from '../assets/images/services/ai-strategy-roadmap.jpg'
import mlOpsImg               from '../assets/images/services/ml-ops.jpg'

import enterpriseArchImg      from '../assets/images/enterprise-architect.jpg'
import digitalTransformImg    from '../assets/images/services/digital-transformation.jpg'
import enterprisePlatformImg  from '../assets/images/services/enterprise-plateform.jpg'
import enterpriseModImg       from '../assets/images/services/enterprise-modernisation.jpg'
import apiIntegrationImg      from '../assets/images/services/api-integration.jpg'
import strategyConsultImg     from '../assets/images/services/strategy-consultancy.jpg'

import dataEngineeringImg     from '../assets/images/services/data-engineering.jpg'
import infraEngineeringImg    from '../assets/images/services/infrastructure-engineering.jpg'
import productEngineeringImg  from '../assets/images/services/product-engineering.jpg'
import techEngineeringImg     from '../assets/images/services/tech-engineering.jpg'
import qualityEngineeringImg  from '../assets/images/services/quality-engineering.jpg'

import cloudImg               from '../assets/images/cloud.jpg'
import cloudMigrationImg      from '../assets/images/services/cloud-migration.jpg'

import experienceDesignImg    from '../assets/images/services/experience-design.jpg'
import uxResearchImg          from '../assets/images/services/ux-research.jpg'
import userExperienceImg      from '../assets/images/user-experience.jpg'
import securityRiskImg        from '../assets/images/security-risk.jpg'
import web3Img                from '../assets/images/services/web-3.jpg'

import servicesCoverVideo     from '../assets/videos/services-cover.mp4'
import aiCoverVideo           from '../assets/videos/ai-cover.mp4'

export const services = [
  {
    slug: 'ai-intelligence',
    number: '01',
    title: 'AI and Intelligence',
    eyebrow: 'Intelligence Augmented',
    tagline: 'Intelligent systems that augment human capability, automate operations, and accelerate innovation.',
    description: "Thotnr's AI & Intelligence practice builds systems that extend and amplify human decision-making. We don't build AI that sidelines teams — we build AI that makes them exponentially more effective. Our practice spans the full intelligence stack: from defining your AI strategy and building production-grade ML pipelines, to deploying GenAI applications and operationalising models at scale through robust MLOps.",
    highlights: [
      'Strategic AI roadmaps aligned to measurable business outcomes',
      'GenAI applications using LLMs, RAG, and agentic architectures',
      'Machine learning systems from experimentation to production',
      'Intelligent automation that removes friction from complex workflows',
      'MLOps platforms for model monitoring, retraining, and governance',
    ],
    coverImage: aiServiceImg,
    coverVideo: aiCoverVideo,
    subServices: [
      { name: 'Artificial Intelligence',   desc: 'End-to-end AI at scale',                    image: aiServiceImg },
      { name: 'Generative AI',             desc: 'Systems that create and reason',             image: generativeAIImg },
      { name: 'Machine Learning',          desc: 'Models that learn and adapt',                image: machineLearningImg },
      { name: 'Intelligent Automation',    desc: 'Automate complex workflows precisely',       image: intelligentAutoImg },
      { name: 'AI Strategy & Roadmaps',    desc: 'From AI ambition to value',                  image: aiStrategyImg },
      { name: 'MLOps',                     desc: 'Operationalise ML at enterprise scale',      image: mlOpsImg },
    ],
  },
  {
    slug: 'enterprise-architecture',
    number: '02',
    title: 'Enterprise Architecture',
    eyebrow: 'Systems That Scale',
    tagline: 'Designing scalable enterprise ecosystems that align business strategy, technology, and transformation.',
    description: 'Our Enterprise Architecture practice designs the structural foundations that allow organisations to scale with purpose. We bring together business strategy and technology design to create architectures that eliminate fragmentation, reduce complexity, and position the enterprise to absorb change. Whether rearchitecting a legacy estate or designing a greenfield platform, our architects operate at the intersection of business intent and technical execution.',
    highlights: [
      'Enterprise and solution architecture blueprints aligned to business goals',
      'Digital transformation from legacy systems to cloud-native platforms',
      'Enterprise modernisation that retires technical debt systematically',
      'Systems integration across complex, multi-vendor technology landscapes',
      'Technology strategy that creates compounding competitive advantage',
    ],
    coverImage: enterpriseArchImg,
    coverVideo: servicesCoverVideo,
    subServices: [
      { name: 'Enterprise Architecture',   desc: 'Blueprints for scalable enterprises',       image: enterpriseArchImg },
      { name: 'Solution Architecture',     desc: 'Technical design for business goals',        image: enterpriseModImg },
      { name: 'Digital Transformation',    desc: 'Legacy to cloud-native transformation',      image: digitalTransformImg },
      { name: 'Enterprise Modernisation',  desc: 'Retire debt, unlock capability',             image: enterprisePlatformImg },
      { name: 'Systems Integration',       desc: 'Connect systems and ecosystems',             image: apiIntegrationImg },
      { name: 'Technology Strategy',       desc: 'Technology decisions that compound',         image: strategyConsultImg },
    ],
  },
  {
    slug: 'data-engineering',
    number: '03',
    title: 'Data and Engineering',
    eyebrow: 'Built to Last',
    tagline: 'Engineering reliable digital foundations, scalable applications, and high-performance data systems.',
    description: 'Data is the raw material of intelligence — but only when it is reliable, accessible, and well-engineered. Our Data & Engineering practice builds the digital foundations that transform data into an organisational asset. We engineer data pipelines that power analytics, build products that ship fast and scale reliably, and deliver software that performs under enterprise conditions. Every system we build is designed for durability — not just delivery.',
    highlights: [
      'Data pipelines and analytics infrastructure built for enterprise scale',
      'Product engineering from concept to reliable, scalable deployment',
      'Full-stack software engineering with enterprise-grade discipline',
      'Quality engineering with automated testing embedded across the lifecycle',
      'API and integration engineering for seamless system connectivity',
    ],
    coverImage: dataEngineeringImg,
    coverVideo: servicesCoverVideo,
    subServices: [
      { name: 'Data & Analytics',              desc: 'Data-driven decisions at scale',          image: dataEngineeringImg },
      { name: 'Data Engineering',              desc: 'Reliable pipelines, quality data',        image: infraEngineeringImg },
      { name: 'Product Engineering',           desc: 'Products built to ship and scale',        image: productEngineeringImg },
      { name: 'Software Engineering',          desc: 'Enterprise-grade software, always',       image: techEngineeringImg },
      { name: 'Quality Engineering',           desc: 'Quality embedded across the lifecycle',   image: qualityEngineeringImg },
      { name: 'API & Integration Engineering', desc: 'Seamless connectivity, everywhere',       image: apiIntegrationImg },
    ],
  },
  {
    slug: 'cloud-infrastructure',
    number: '04',
    title: 'Cloud and Infrastructure',
    eyebrow: 'Cloud-Native by Design',
    tagline: 'Building resilient cloud-native infrastructure and operational platforms for modern enterprises.',
    description: 'Modern enterprises operate on cloud. Our Cloud & Infrastructure practice designs, migrates, and operates the resilient platforms that underpin enterprise workloads. We go beyond lift-and-shift — building cloud-native architectures that are observable, automated, cost-efficient, and built for growth. From greenfield platform engineering to complex migrations, we make your operating model cloud-native from the ground up.',
    highlights: [
      'Cloud engineering and architecture across AWS, Azure, and GCP',
      'Cloud migration with zero-downtime execution and risk mitigation',
      'Infrastructure engineering designed for enterprise-grade resilience',
      'Platform engineering — internal developer platforms that accelerate velocity',
      'DevOps and automation pipelines that eliminate operational toil',
    ],
    coverImage: cloudImg,
    coverVideo: servicesCoverVideo,
    subServices: [
      { name: 'Cloud Engineering',                    desc: 'Cloud-native from the ground up',         image: cloudImg },
      { name: 'Cloud Migration',                      desc: 'Migrate with zero disruption',            image: cloudMigrationImg },
      { name: 'Infrastructure Engineering',           desc: 'Resilient infrastructure for enterprise', image: infraEngineeringImg },
      { name: 'Platform Engineering',                 desc: 'Internal platforms for velocity',         image: enterprisePlatformImg },
      { name: 'Platform Infrastructure',              desc: 'Foundations for cloud-native apps',       image: techEngineeringImg },
      { name: 'DevOps & Infrastructure Automation',   desc: 'Automate delivery, eliminate toil',       image: intelligentAutoImg },
    ],
  },
  {
    slug: 'experience-design-trust',
    number: '05',
    title: 'Experience, Design and Trust',
    eyebrow: 'Human-Centred Intelligence',
    tagline: 'Creating human-centered digital experiences with strategic thinking, governance, and long-term trust.',
    description: 'The value of technology is ultimately measured by the people who use it. Our Experience, Design & Trust practice creates the human layer of digital systems — combining strategic thinking, design craft, security governance, and emerging technology expertise. We design experiences that earn adoption, build compliance frameworks that meet the highest risk standards, and develop strategies that position organisations for the next era of digital business.',
    highlights: [
      'Experience design and UX research that drives adoption and loyalty',
      'Customer experience design built around real human behaviour',
      'Security and risk management aligned to enterprise governance standards',
      'Web3 and emerging technology strategy for next-generation readiness',
      'Innovation strategy that creates systematic pathways to breakthrough',
    ],
    coverImage: experienceDesignImg,
    coverVideo: servicesCoverVideo,
    subServices: [
      { name: 'Strategy & Consulting',         desc: 'Strategy grounded in technology',         image: strategyConsultImg },
      { name: 'Experience Design',             desc: 'Experiences users trust and return',       image: experienceDesignImg },
      { name: 'Customer Experience Design',    desc: 'Human-centred, adoption-driven design',   image: userExperienceImg },
      { name: 'UX Research',                   desc: 'Insights that shape every decision',       image: uxResearchImg },
      { name: 'Security & Risk Management',    desc: 'Enterprise resilience from day one',       image: securityRiskImg },
      { name: 'Web3 & Emerging Technology',    desc: 'Next era, first principles thinking',      image: web3Img },
      { name: 'Innovation Strategy',           desc: 'Systematic paths to breakthrough',         image: techEngineeringImg },
    ],
  },
]
