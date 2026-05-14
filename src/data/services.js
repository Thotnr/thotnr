
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
      {
        name: 'Artificial Intelligence',
        desc: 'End-to-end AI at scale',
        image: aiServiceImg,
        detail: {
          tagline: 'Where machine precision meets human ambition',
          body: 'We architect end-to-end AI systems that integrate seamlessly into your operational fabric — from perception and prediction to autonomous decision-making. Our AI solutions are engineered to augment human judgement at every layer, amplifying what your teams are capable of rather than replacing the people who drive your business forward.',
          capabilities: [
            'Computer vision & perception systems',
            'Natural language understanding & processing',
            'Predictive & prescriptive analytics engines',
            'Autonomous decision & recommendation systems',
            'Responsible AI governance & ethics frameworks',
          ],
        },
      },
      {
        name: 'Generative AI',
        desc: 'Systems that create and reason',
        image: generativeAIImg,
        detail: {
          tagline: 'Intelligence that creates, reasons, and transforms',
          body: 'Generative AI is rewriting what is possible. We build production-grade GenAI applications using large language models, retrieval-augmented generation, and agentic architectures — systems that synthesise knowledge across context, reason over complex data, and generate value at enterprise scale rather than simply retrieving answers.',
          capabilities: [
            'LLM selection, fine-tuning & deployment',
            'RAG-powered enterprise knowledge systems',
            'Agentic workflows & multi-agent orchestration',
            'Multimodal AI application engineering',
            'Prompt engineering & guardrail frameworks',
          ],
        },
      },
      {
        name: 'Machine Learning',
        desc: 'Models that learn and adapt',
        image: machineLearningImg,
        detail: {
          tagline: 'Models that learn. Systems that never stop adapting.',
          body: 'Machine learning is most powerful when it moves beyond the notebook. We take ML from experimentation to production — building models that continuously learn from new signals, adapt to shifting patterns, and deliver sustained accuracy in live enterprise environments where the data never stands still.',
          capabilities: [
            'Supervised, unsupervised & reinforcement learning',
            'Feature engineering & data pipeline design',
            'Model training, evaluation & cross-validation',
            'Continuous learning & drift management',
            'Explainability & interpretable ML systems',
          ],
        },
      },
      {
        name: 'Intelligent Automation',
        desc: 'Automate complex workflows precisely',
        image: intelligentAutoImg,
        detail: {
          tagline: 'Remove friction. Amplify human capacity at scale.',
          body: 'Intelligent automation is the intersection of AI and operational efficiency — automating complex, judgement-heavy workflows that traditional RPA cannot touch. We combine process intelligence, AI-driven decision logic, and deep system integration to eliminate operational friction at its source, freeing your teams to focus on work that compounds.',
          capabilities: [
            'Intelligent document processing & extraction',
            'AI-powered process orchestration',
            'Decision automation with full explainability',
            'Workflow intelligence & exception handling',
            'Human-in-the-loop automation design',
          ],
        },
      },
      {
        name: 'AI Strategy & Roadmaps',
        desc: 'From AI ambition to value',
        image: aiStrategyImg,
        detail: {
          tagline: 'From AI ambition to compounding measurable value',
          body: 'Most AI initiatives fail not because of technology, but because of strategy. We develop AI strategies grounded in business reality — translating ambition into prioritised roadmaps, investment cases, and operating models that make AI a compounding organisational capability rather than a one-off experiment that fades with the pilot.',
          capabilities: [
            'AI maturity assessment & competitive benchmarking',
            'Use-case prioritisation & business case development',
            'AI operating model & governance design',
            'Responsible AI ethics & risk frameworks',
            'Executive alignment & change enablement',
          ],
        },
      },
      {
        name: 'MLOps',
        desc: 'Operationalise ML at enterprise scale',
        image: mlOpsImg,
        detail: {
          tagline: 'Models in production. Intelligence in sustained operation.',
          body: 'Building a great model is the beginning, not the end. MLOps is the discipline that keeps AI systems reliable, observable, and improving over time. We design and operate MLOps platforms that automate the entire ML lifecycle — from experiment tracking to deployment, monitoring, and retraining — ensuring your AI investments deliver compounding returns.',
          capabilities: [
            'ML pipeline automation & orchestration',
            'Model registry, versioning & governance',
            'Production monitoring & drift detection',
            'Continuous retraining & model refresh cycles',
            'CI/CD pipelines for machine learning systems',
          ],
        },
      },
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
      {
        name: 'Enterprise Architecture',
        desc: 'Blueprints for scalable enterprises',
        image: enterpriseArchImg,
        detail: {
          tagline: 'Structures that absorb change and enable purposeful scale',
          body: 'Enterprise architecture is not a diagram on a wall — it is the governing logic of how your technology portfolio creates business capability. We design architectures that eliminate fragmentation, reduce structural debt, and create the conditions for every business initiative to execute at the speed your market demands.',
          capabilities: [
            'Target-state architecture blueprinting',
            'Architecture governance & design principles',
            'Technology portfolio rationalisation',
            'Capability mapping & business alignment',
            'Architecture review & independent assurance',
          ],
        },
      },
      {
        name: 'Solution Architecture',
        desc: 'Technical design for business goals',
        image: enterpriseModImg,
        detail: {
          tagline: 'From intent to implementation — precisely and without waste',
          body: 'Good solution architecture is the bridge between business requirements and engineering reality. Our architects design solutions that are technically sound, commercially viable, and built to real-world constraints — translating ambition into blueprints that engineering teams can actually execute without reworking halfway through.',
          capabilities: [
            'Solution design & architecture blueprints',
            'Technology selection & vendor evaluation',
            'Non-functional requirement definition',
            'Architecture decision records (ADRs)',
            'Solution assurance & design review gates',
          ],
        },
      },
      {
        name: 'Digital Transformation',
        desc: 'Legacy to cloud-native transformation',
        image: digitalTransformImg,
        detail: {
          tagline: 'Legacy to cloud-native — with the rigour transformation demands',
          body: 'Digital transformation is one of the most consequential programmes an organisation can undertake. We bring the technical depth, delivery rigour, and change expertise to navigate it safely — migrating from legacy systems to cloud-native platforms while managing business continuity, stakeholder expectations, and the realities of operating at enterprise scale.',
          capabilities: [
            'Transformation strategy & phased roadmap design',
            'Legacy system assessment & migration planning',
            'Cloud-native platform engineering',
            'Agile delivery at enterprise scale',
            'Change management & adoption enablement',
          ],
        },
      },
      {
        name: 'Enterprise Modernisation',
        desc: 'Retire debt, unlock capability',
        image: enterprisePlatformImg,
        detail: {
          tagline: 'Systematically retire the past. Build capability for the future.',
          body: 'Technical debt is a tax on your future — and it compounds. Enterprise modernisation is the discipline of retiring it systematically, not through big-bang rewrites but through targeted, incremental transformation that maintains operational continuity while progressively replacing legacy constraints with modern, composable capability.',
          capabilities: [
            'Legacy application assessment & decommission planning',
            'Strangler-fig & incremental migration patterns',
            'Database modernisation & data migration',
            'Monolith-to-microservices decomposition',
            'Modernisation risk management & governance',
          ],
        },
      },
      {
        name: 'Systems Integration',
        desc: 'Connect systems and ecosystems',
        image: apiIntegrationImg,
        detail: {
          tagline: 'Connected systems. One coherent enterprise operating as one.',
          body: 'Fragmented systems are the hidden cost of enterprise growth. We design and engineer integrations that connect your applications, data sources, and partner ecosystems — creating coherent data flows and unified operational views that allow teams to work from a single, trusted source of truth across the entire organisation.',
          capabilities: [
            'API-led integration architecture',
            'Event-driven & real-time integration patterns',
            'Enterprise service bus & middleware engineering',
            'B2B & partner ecosystem integration',
            'Integration governance & API management',
          ],
        },
      },
      {
        name: 'Technology Strategy',
        desc: 'Technology decisions that compound',
        image: strategyConsultImg,
        detail: {
          tagline: 'Every technology decision is a bet on your future',
          body: 'We help executive and technology leaders make those bets deliberately — building technology strategies that align investment priorities, guide build-versus-buy decisions, and create compounding competitive advantage through consistent, principled choices that accumulate into a structural edge over time.',
          capabilities: [
            'Technology vision & multi-year roadmaps',
            'Build vs buy vs partner evaluation frameworks',
            'Vendor selection & technology due diligence',
            'Innovation portfolio management',
            'Board-level technology advisory',
          ],
        },
      },
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
      {
        name: 'Data & Analytics',
        desc: 'Data-driven decisions at scale',
        image: dataEngineeringImg,
        detail: {
          tagline: 'Intelligence begins with data you can actually trust',
          body: 'Data is the raw material of intelligence — but only when it is reliable, accessible, and well-structured. We build analytics platforms and data ecosystems that give every team in your organisation access to trusted, timely insights, transforming data from a byproduct of operations into your most strategic competitive asset.',
          capabilities: [
            'Data warehouse & lakehouse architecture',
            'BI & visualisation platform engineering',
            'Advanced analytics & statistical modelling',
            'Real-time analytics & streaming pipelines',
            'Data literacy & self-service enablement',
          ],
        },
      },
      {
        name: 'Data Engineering',
        desc: 'Reliable pipelines, quality data',
        image: infraEngineeringImg,
        detail: {
          tagline: 'Pipelines that carry intelligence with precision at scale',
          body: 'Data engineering is the foundation that determines whether your analytics and AI systems are trustworthy or not. We build reliable, observable data pipelines that ingest, transform, and serve data at enterprise scale — with the quality controls and lineage tracking that make downstream intelligence genuinely reliable.',
          capabilities: [
            'Data pipeline design & batch/streaming ingestion',
            'Data transformation & ELT/ETL engineering',
            'Data quality frameworks & automated validation',
            'Data lineage, observability & cataloguing',
            'Data mesh & domain-oriented architecture',
          ],
        },
      },
      {
        name: 'Product Engineering',
        desc: 'Products built to ship and scale',
        image: productEngineeringImg,
        detail: {
          tagline: 'Products that ship on time and scale without compromise',
          body: 'Product engineering at enterprise scale demands more than good code — it demands architecture thinking, delivery rigour, and product discipline. We build digital products from concept to production, combining engineering excellence with product thinking to deliver experiences that users adopt and businesses can rely on through every growth phase.',
          capabilities: [
            'Product design & technical architecture',
            'Full-stack application development',
            'Mobile & cross-platform engineering',
            'Performance engineering & load optimisation',
            'Product velocity & delivery acceleration',
          ],
        },
      },
      {
        name: 'Software Engineering',
        desc: 'Enterprise-grade software, always',
        image: techEngineeringImg,
        detail: {
          tagline: 'Engineering software built to perform and last in production',
          body: 'Software engineering is not just writing code — it is the craft of building systems that are correct, maintainable, and built to last. We bring enterprise engineering discipline to every engagement: rigorous design, clean architecture, comprehensive testing, and the operational thinking that ensures what we build performs under production pressure.',
          capabilities: [
            'Backend & microservices engineering',
            'Frontend & component system engineering',
            'Clean architecture & design patterns',
            'Code review, refactoring & technical health',
            'Engineering standards & practice design',
          ],
        },
      },
      {
        name: 'Quality Engineering',
        desc: 'Quality embedded across the lifecycle',
        image: qualityEngineeringImg,
        detail: {
          tagline: 'Quality built in from the start — not tested in at the end',
          body: 'Quality engineering is about building quality into the software development lifecycle from the start, not testing it in at the end. We design automated testing strategies, performance benchmarks, and quality gates that give engineering teams the confidence to ship fast without accumulating the kind of risk that eventually forces a slowdown.',
          capabilities: [
            'Test strategy & automation framework design',
            'Functional, regression & E2E test automation',
            'Performance, load & stress testing',
            'Security & accessibility testing',
            'Quality engineering culture & team coaching',
          ],
        },
      },
      {
        name: 'API & Integration Engineering',
        desc: 'Seamless connectivity, everywhere',
        image: apiIntegrationImg,
        detail: {
          tagline: 'Seamless connectivity across every system and boundary',
          body: 'Modern enterprises are ecosystems of systems — and API & Integration Engineering is the discipline that makes them work as one. We design APIs that are developer-friendly and built for longevity, integration architectures that are resilient under load, and connectivity layers that allow your entire technology portfolio to operate coherently.',
          capabilities: [
            'API design, versioning & documentation standards',
            'RESTful & GraphQL API development',
            'Webhook & event-driven integration patterns',
            'API gateway, security layer & rate limiting',
            'Integration testing & contract testing',
          ],
        },
      },
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
      {
        name: 'Cloud Engineering',
        desc: 'Cloud-native from the ground up',
        image: cloudImg,
        detail: {
          tagline: 'Cloud-native from the foundation — not the afterthought',
          body: 'Cloud engineering is not lift-and-shift — it is the reimagination of how applications and platforms are designed to take full advantage of cloud elasticity, resilience, and scale. We engineer cloud-native systems across AWS, Azure, and GCP that are observable, automated, cost-optimised, and built to grow with your ambitions.',
          capabilities: [
            'Cloud-native architecture & design patterns',
            'Multi-cloud & hybrid cloud strategy',
            'Container orchestration & Kubernetes engineering',
            'Serverless & event-driven platform design',
            'FinOps & cloud cost intelligence',
          ],
        },
      },
      {
        name: 'Cloud Migration',
        desc: 'Migrate with zero disruption',
        image: cloudMigrationImg,
        detail: {
          tagline: 'Migrate with zero disruption and maximum confidence',
          body: 'Cloud migration is one of the most risk-laden technical programmes in enterprise. We bring structured methodology, tooling expertise, and operational discipline to execute migrations with precision — managing every dimension from dependency mapping and wave planning to cutover execution and post-migration stabilisation at scale.',
          capabilities: [
            'Migration readiness assessment & scoring',
            'Wave planning & application dependency mapping',
            'Database & data migration engineering',
            'Zero-downtime cutover planning & execution',
            'Post-migration optimisation & stabilisation',
          ],
        },
      },
      {
        name: 'Infrastructure Engineering',
        desc: 'Resilient infrastructure for enterprise',
        image: infraEngineeringImg,
        detail: {
          tagline: 'Resilient infrastructure engineered for enterprise-grade reliability',
          body: 'Infrastructure is the silent foundation on which every digital service depends. We design and build infrastructure systems that are resilient, observable, and engineered for the performance demands of enterprise workloads — with the automation and monitoring discipline to keep them reliable as usage grows and failure modes multiply.',
          capabilities: [
            'Infrastructure architecture & technical design',
            'Infrastructure-as-Code (Terraform, Pulumi)',
            'Network design & security hardening',
            'Disaster recovery & business continuity engineering',
            'Observability, monitoring & alerting platforms',
          ],
        },
      },
      {
        name: 'Platform Engineering',
        desc: 'Internal platforms for velocity',
        image: enterprisePlatformImg,
        detail: {
          tagline: 'Internal platforms that make every engineering team faster',
          body: 'Platform engineering is the discipline of building internal developer platforms that make engineering teams dramatically more productive. We design and operate internal development platforms — golden paths, self-service tooling, shared infrastructure — that reduce cognitive load and free your engineers to focus on building products, not plumbing.',
          capabilities: [
            'Internal developer platform (IDP) design & build',
            'Golden path templates & developer tooling',
            'Self-service infrastructure provisioning',
            'Developer experience (DX) optimisation',
            'Platform governance & adoption enablement',
          ],
        },
      },
      {
        name: 'Platform Infrastructure',
        desc: 'Foundations for cloud-native apps',
        image: techEngineeringImg,
        detail: {
          tagline: 'The bedrock layer every cloud-native application depends on',
          body: 'Platform infrastructure is the foundational layer — the compute, storage, networking, and runtime systems that every cloud-native application builds on. We design and operate infrastructure platforms that are hardened for production, optimised for cost, and built with the operational maturity that enterprise workloads demand under sustained pressure.',
          capabilities: [
            'Compute & container platform engineering',
            'Storage strategy & data persistence layers',
            'Network architecture & private connectivity',
            'Platform security & compliance hardening',
            'Capacity planning & performance tuning',
          ],
        },
      },
      {
        name: 'DevOps & Infrastructure Automation',
        desc: 'Automate delivery, eliminate toil',
        image: intelligentAutoImg,
        detail: {
          tagline: 'Automate delivery. Eliminate toil. Ship with confidence.',
          body: 'DevOps closes the gap between development speed and operational reliability. We design and implement DevOps platforms and automation pipelines that give engineering teams the ability to ship fast, safely, and repeatedly — eliminating the manual toil that slows delivery, introduces human error, and erodes engineering morale at scale.',
          capabilities: [
            'CI/CD pipeline design & implementation',
            'Infrastructure automation & configuration management',
            'GitOps & declarative deployment patterns',
            'Shift-left security (DevSecOps) integration',
            'SRE practice design & toil elimination',
          ],
        },
      },
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
      {
        name: 'Strategy & Consulting',
        desc: 'Strategy grounded in technology',
        image: strategyConsultImg,
        detail: {
          tagline: 'Strategy that creates credible, executable paths to the future',
          body: "Strategy without execution capability is just planning. We bring together business intelligence, technology expertise, and delivery rigour to develop strategies that don't just define the future — they create a credible path to reach it. Our consulting practice operates at the intersection of organisational ambition and technical feasibility.",
          capabilities: [
            'Digital strategy & innovation roadmaps',
            'Organisational capability assessment',
            'Operating model design & transformation',
            'Executive stakeholder alignment & advisory',
            'Business case development & investment planning',
          ],
        },
      },
      {
        name: 'Experience Design',
        desc: 'Experiences users trust and return',
        image: experienceDesignImg,
        detail: {
          tagline: 'Experiences users trust, return to, and rely on every day',
          body: 'Great experience design is not decoration — it is the discipline that determines whether technology creates value or friction. We design experiences from first principles, grounding every decision in real user behaviour and business goals, creating products that earn genuine adoption because they are built around how people actually work and think.',
          capabilities: [
            'Product & service experience design',
            'Information architecture & interaction design',
            'Design system creation & governance',
            'Usability testing & iterative validation',
            'Accessibility & inclusive design standards',
          ],
        },
      },
      {
        name: 'Customer Experience Design',
        desc: 'Human-centred, adoption-driven design',
        image: userExperienceImg,
        detail: {
          tagline: 'Human-centred design connected directly to revenue outcomes',
          body: 'Customer experience is the sum of every interaction your users have with your brand across every touchpoint. We design customer experiences built around real human behaviour — mapping journeys, identifying friction points, and creating touchpoints that build loyalty, drive conversion, and create the kind of experiences that earn recommendation.',
          capabilities: [
            'Customer journey mapping & service design',
            'CX strategy & experience vision development',
            'Omnichannel experience design & consistency',
            'Personalisation & adaptive experience architecture',
            'CX measurement frameworks & loyalty strategy',
          ],
        },
      },
      {
        name: 'UX Research',
        desc: 'Insights that shape every decision',
        image: uxResearchImg,
        detail: {
          tagline: 'Insights that eliminate expensive assumptions before they ship',
          body: 'Decisions made without user insight are expensive bets. UX research transforms those bets into informed choices — giving design and product teams the evidence they need to build what users actually need, not what teams assume. We conduct research that is rigorous, rapid, and directly connected to real design and product decisions.',
          capabilities: [
            'User interviews & contextual inquiry',
            'Usability testing & task analysis',
            'Quantitative survey & diary research',
            'Jobs-to-be-done & needs analysis',
            'Research synthesis & insight activation',
          ],
        },
      },
      {
        name: 'Security & Risk Management',
        desc: 'Enterprise resilience from day one',
        image: securityRiskImg,
        detail: {
          tagline: 'Enterprise resilience — built in from day one, not bolted on',
          body: "Security is not a control layer applied at the end — it is a design principle embedded from the start. We integrate security and risk management into the architecture, development, and operations of digital systems, building enterprises that are resilient against today's threat landscape while remaining compliant with the governance standards that protect trust.",
          capabilities: [
            'Security architecture & threat modelling',
            'Risk assessment & vulnerability management',
            'Compliance frameworks (ISO 27001, SOC 2, GDPR)',
            'Penetration testing & security assurance',
            'Security operations & incident response planning',
          ],
        },
      },
      {
        name: 'Web3 & Emerging Technology',
        desc: 'Next era, first principles thinking',
        image: web3Img,
        detail: {
          tagline: 'Next-era technology evaluated with first principles rigour',
          body: 'Emerging technologies demand a first principles approach — not hype, but rigorous evaluation of what genuinely creates value. We help organisations navigate Web3, decentralised systems, and next-generation technologies with the strategic clarity to distinguish sustainable innovation from noise, and the technical capability to execute when the opportunity is real.',
          capabilities: [
            'Blockchain architecture & smart contract development',
            'Decentralised application (dApp) engineering',
            'Tokenomics design & governance frameworks',
            'Web3 integration with enterprise systems',
            'Emerging technology scouting & feasibility',
          ],
        },
      },
      {
        name: 'Innovation Strategy',
        desc: 'Systematic paths to breakthrough',
        image: techEngineeringImg,
        detail: {
          tagline: 'Systematic paths to breakthrough that compound over time',
          body: 'Innovation is not an accident — it is a discipline. We help organisations build the systematic capabilities, cultural conditions, and strategic frameworks that make breakthrough innovation repeatable and compounding. Our innovation strategy practice creates the structures that connect visionary thinking with execution, turning ideas into durable competitive advantage.',
          capabilities: [
            'Innovation portfolio design & governance',
            'Innovation lab design & operating model',
            'Open innovation & ecosystem strategy',
            'Innovation pipeline management',
            'Design thinking & rapid prototyping',
          ],
        },
      },
    ],
  },
]
