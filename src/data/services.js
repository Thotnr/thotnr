
import aiServiceImg           from '../assets/images/ai-service.jpg'
import generativeAIImg        from '../assets/images/services/generative-AI.jpeg'
import machineLearningImg     from '../assets/images/services/machine-learning.jpg'
import intelligentAutoImg     from '../assets/images/services/intelligence-automation.jpg'
import aiStrategyImg          from '../assets/images/services/ai-strategy-roadmap.jpg'
import mlOpsImg               from '../assets/images/services/ml-ops.jpg'

import aiSubStrategyImg       from '../assets/images/services/AI/ai-strategy.png'
import aiSubGenerativeImg     from '../assets/images/services/AI/generative-ai.png'
import aiSubCopilotImg        from '../assets/images/services/AI/enterprise-copilot.png'
import aiSubAgentsImg         from '../assets/images/services/AI/ai-agrnts.png'
import aiSubMLImg             from '../assets/images/services/AI/machime-learning.png'
import aiSubPredictiveImg     from '../assets/images/services/AI/predictive-analysis.png'
import aiSubAutoImg           from '../assets/images/services/AI/intelligence-automation.png'
import aiSubKnowledgeImg      from '../assets/images/services/AI/knowledge-ai.png'
import aiSubMLOpsImg          from '../assets/images/services/AI/ml-ops.png'
import aiSubResponsibleImg    from '../assets/images/services/AI/responsible-ai.png'

import enterpriseArchImg      from '../assets/images/enterprise-architect.jpg'

import entSubArchImg          from '../assets/images/services/enterprise/enterprise-architect.jpg'

import dataSubEngineeringImg   from '../assets/images/services/data/data-engineering.png'
import dataSubPlatformImg      from '../assets/images/services/data/data-plateform.png'
import dataSubWarehouseImg     from '../assets/images/services/data/data-warehouse.png'
import dataSubAnalyticsImg     from '../assets/images/services/data/analytics-engineering.png'
import dataSubBIImg            from '../assets/images/services/data/business-intelligence.png'
import dataSubProductEngImg    from '../assets/images/services/data/product-engineering.png'
import dataSubSoftwareEngImg   from '../assets/images/services/data/software-engineering.png'
import dataSubAPIImg           from '../assets/images/services/data/api-engineering.png'
import dataSubQualityImg       from '../assets/images/services/data/quality-engineering.png'
import dataSubGovernanceImg    from '../assets/images/services/data/data-governance.png'

import cloudSubStrategyImg     from '../assets/images/services/cloud/cloud-strategy.png'
import cloudSubMigrationImg    from '../assets/images/services/cloud/cloud-migration.png'
import cloudSubLandingImg      from '../assets/images/services/cloud/landing-zones.png'
import cloudSubEngineeringImg  from '../assets/images/services/cloud/cloud-engineering.png'
import cloudSubPlatformImg     from '../assets/images/services/cloud/plateform-engineering.png'
import cloudSubDevOpsImg       from '../assets/images/services/cloud/devops-automation.png'
import cloudSubSecurityImg     from '../assets/images/services/cloud/cloud-security.png'
import cloudSubObsImg          from '../assets/images/services/cloud/observility-sre.png'
import cloudSubFinOpsImg       from '../assets/images/services/cloud/finops.png'

import expSubDigitalStratImg   from '../assets/images/services/experience/digital-strategy.png'
import expSubExpDesignImg      from '../assets/images/services/experience/experience-design.png'
import expSubServiceDesignImg  from '../assets/images/services/experience/service-design.png'
import expSubUXImg             from '../assets/images/services/experience/ux-research.png'
import expSubUISystemImg       from '../assets/images/services/experience/ui-design-system.png'
import customerJourneysImg       from '../assets/images/services/experience/coustomer-journeys.png'
import expSubCXImg             from '../assets/images/services/experience/customer-experience.png'
import expSubTrustImg          from '../assets/images/services/experience/trust-by-design.png'
import expSubChangeImg         from '../assets/images/services/experience/change-enablement.png'
import expSubInnovationImg     from '../assets/images/services/experience/innovation-advisory.png'
import entSubBizArchImg       from '../assets/images/services/enterprise/business-architectur.jpg'
import entSubCapabilityImg    from '../assets/images/services/enterprise/capability-modelling.png'
import entSubCurrentStateImg  from '../assets/images/services/enterprise/current-state-management.png'
import entSubTargetStateImg   from '../assets/images/services/enterprise/target-state-architecture.png'
import entSubTechArchImg      from '../assets/images/services/enterprise/techology-architectur.png'
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

import experienceDesignImg    from '../assets/images/services/experience-design.png'
import uxResearchImg          from '../assets/images/services/ux-research.jpg'
import userExperienceImg      from '../assets/images/user-experience.jpg'
import securityRiskImg        from '../assets/images/security-risk.jpg'
import web3Img                from '../assets/images/services/web-3.jpg'

import servicesCoverVideo     from '../assets/videos/services-cover.mp4'
import aiCoverVideo           from '../assets/videos/ai-cover.mp4'

export const services = [
  // ─── 01 AI AND INTELLIGENCE ──────────────────────────────────────────────────
  {
    slug: 'ai-intelligence',
    number: '01',
    title: 'AI and Intelligence',
    eyebrow: 'Intelligence Augmented',
    tagline: 'Intelligent systems that augment human capability, improve decisions, automate operations, and accelerate innovation.',
    description: "Thotnr's AI & Intelligence practice builds systems that extend and amplify human decision-making. We don't build AI that sidelines teams — we build AI that makes them exponentially more effective. Our practice spans the full intelligence stack: from defining your AI strategy and deploying enterprise copilots, to engineering production-grade ML systems and operationalising AI through governance, observability, and responsible-AI design.",
    highlights: [
      'AI strategy and roadmaps aligned to measurable business outcomes',
      'Generative AI and enterprise copilots built for production, not demos',
      'AI agents that perceive, reason, and act across complex workflows',
      'Machine learning and predictive analytics from experimentation to scale',
      'MLOps platforms and responsible AI frameworks that sustain trust',
    ],
    coverImage: aiServiceImg,
    coverVideo: aiCoverVideo,
    subServices: [
      {
        name: 'AI Strategy',
        desc: 'From AI ambition to measurable value',
        image: aiSubStrategyImg,
        detail: {
          tagline: 'From AI ambition to compounding, measurable enterprise value',
          body: 'Most AI initiatives fail not because of technology, but because of strategy. We develop AI strategies grounded in business reality — translating ambition into prioritised roadmaps, investment cases, and operating models that make AI a compounding organisational capability rather than a one-off experiment that fades with the pilot.',
          capabilities: [
            'AI maturity assessment & competitive benchmarking',
            'Use-case prioritisation & business case development',
            'AI operating model & governance design',
            'AI investment sequencing & ROI frameworks',
            'Executive alignment & change enablement',
          ],
        },
      },
      {
        name: 'Generative AI',
        desc: 'Systems that create and reason',
        image: aiSubGenerativeImg,
        detail: {
          tagline: 'Intelligence that creates, reasons, and transforms at enterprise scale',
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
        name: 'Enterprise Copilots',
        desc: 'AI that works alongside your teams',
        image: aiSubCopilotImg,
        detail: {
          tagline: 'AI coworkers that amplify every team\'s decision-making capacity',
          body: 'Enterprise Copilots are purpose-built AI assistants embedded directly into the workflows your teams already use. We design and engineer domain-specific copilots — trained on your business context, integrated with your data systems, and tuned for the specific decisions and actions that make the difference in your operations.',
          capabilities: [
            'Domain-specific copilot design & engineering',
            'Enterprise knowledge base integration',
            'Context-aware workflow assistance',
            'Copilot personalisation & role-based tuning',
            'Human-AI handoff & escalation design',
          ],
        },
      },
      {
        name: 'AI Agents',
        desc: 'Autonomous agents that act and learn',
        image: aiSubAgentsImg,
        detail: {
          tagline: 'AI that doesn\'t just advise — it acts, learns, and improves',
          body: 'AI Agents move beyond passive analysis into active operation — perceiving their environment, reasoning over goals, and executing multi-step tasks autonomously. We architect and deploy AI agent systems that integrate with your enterprise tools, operate within governed boundaries, and compound in capability as they accumulate operational experience.',
          capabilities: [
            'Agentic architecture & goal-directed system design',
            'Tool-use & enterprise system integration',
            'Multi-agent orchestration & coordination',
            'Agent monitoring, guardrails & safety boundaries',
            'Autonomous workflow design & exception handling',
          ],
        },
      },
      {
        name: 'Machine Learning',
        desc: 'Models that learn and adapt continuously',
        image: aiSubMLImg,
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
        name: 'Predictive Analytics',
        desc: 'See what\'s coming before it arrives',
        image: aiSubPredictiveImg,
        detail: {
          tagline: 'Decisions made with foresight, not hindsight',
          body: 'Predictive analytics transforms historical data into forward-looking intelligence — giving your teams the ability to anticipate demand, forecast risk, and act before problems materialise. We build predictive systems that integrate with your decision workflows, delivering foresight at the speed and scale operational teams actually need.',
          capabilities: [
            'Demand forecasting & trend modelling',
            'Risk prediction & early warning systems',
            'Customer behaviour & churn modelling',
            'Scenario planning & Monte Carlo simulation',
            'Predictive model deployment & integration',
          ],
        },
      },
      {
        name: 'Intelligent Automation',
        desc: 'Automate complex workflows precisely',
        image: aiSubAutoImg,
        detail: {
          tagline: 'Remove friction. Amplify human capacity at enterprise scale.',
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
        name: 'Knowledge AI',
        desc: 'Institutional knowledge made intelligent',
        image: aiSubKnowledgeImg,
        detail: {
          tagline: 'Institutional knowledge surfaced at the moment decisions are made',
          body: 'Every organisation contains vast stores of tacit and explicit knowledge — in documents, systems, processes, and the minds of experienced people. Knowledge AI captures, structures, and surfaces this knowledge at the precise moment decisions require it, making your organisation\'s collective intelligence accessible to every team and available at every scale.',
          capabilities: [
            'Enterprise knowledge graph design & engineering',
            'Semantic search & intelligent retrieval systems',
            'Document intelligence & unstructured data processing',
            'Knowledge base curation & continuous enrichment',
            'Contextual knowledge delivery & integration',
          ],
        },
      },
      {
        name: 'MLOps',
        desc: 'AI that stays reliable in production',
        image: aiSubMLOpsImg,
        detail: {
          tagline: 'Models in production. Intelligence in sustained, reliable operation.',
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
      {
        name: 'Responsible AI',
        desc: 'AI you can trust, explain, and govern',
        image: aiSubResponsibleImg,
        detail: {
          tagline: 'AI built to be trusted — by regulators, users, and the people it affects',
          body: 'Responsible AI is not a constraint on innovation — it is the foundation that makes AI sustainable. We embed ethics, explainability, fairness, and governance into AI system design from the start, ensuring your AI investments are built to earn and sustain trust across users, regulators, and the communities they touch.',
          capabilities: [
            'AI ethics & fairness assessment frameworks',
            'Explainability & interpretability by design',
            'Bias detection, audit & mitigation',
            'AI regulatory compliance (EU AI Act, sector-specific)',
            'AI governance operating model & policy design',
          ],
        },
      },
    ],
  },

  // ─── 02 ENTERPRISE ARCHITECTURE ──────────────────────────────────────────────
  {
    slug: 'enterprise-architecture',
    number: '02',
    title: 'Enterprise Architecture',
    eyebrow: 'Systems That Scale',
    tagline: 'Architecture that connects business ambition, technology direction, transformation execution, and long-term governance.',
    description: 'Our Enterprise Architecture practice designs the structural foundations that allow organisations to scale with purpose. We bring together business strategy and technology design to create architectures that eliminate fragmentation, reduce complexity, and position the enterprise to absorb change. From current state assessment to target state blueprinting, modernisation roadmaps, and governance design, our architects operate at the intersection of business intent and technical execution.',
    highlights: [
      'Enterprise and business architecture blueprints aligned to strategic ambition',
      'Capability modelling that connects investment directly to business outcomes',
      'Current and target state architecture design with clear transition pathways',
      'Data, integration, and technology architecture across the full enterprise stack',
      'Architecture governance that keeps decisions disciplined without slowing delivery',
    ],
    coverImage: enterpriseArchImg,
    coverVideo: servicesCoverVideo,
    subServices: [
      {
        name: 'Enterprise Architecture',
        desc: 'Blueprints for purposeful scale',
        image: entSubArchImg,
        detail: {
          tagline: 'Structures that absorb change and enable purposeful, sustained scale',
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
        name: 'Business Architecture',
        desc: 'Aligning strategy with operating reality',
        image: entSubBizArchImg,
        detail: {
          tagline: 'Strategy made real through structured, coherent operating design',
          body: 'Business architecture translates strategic intent into operating reality — defining how an organisation creates value, structures its capabilities, and governs its processes to execute consistently at scale. We design business architectures that give leadership a shared language for transformation and a rigorous framework for prioritisation.',
          capabilities: [
            'Business capability modelling & heat-mapping',
            'Value stream analysis & optimisation',
            'Process architecture & governance design',
            'Organisational design for strategic alignment',
            'Business architecture governance & assurance',
          ],
        },
      },
      {
        name: 'Capability Modelling',
        desc: 'Map what your business can do today',
        image: entSubCapabilityImg,
        detail: {
          tagline: 'From strategic ambition to a clear map of where capability must grow',
          body: 'Capability modelling gives organisations a structured view of what they need to be able to do, how mature those capabilities currently are, and where investment creates the greatest strategic leverage. We build capability models that connect business strategy directly to technology investment — making transformation prioritisation a disciplined, evidence-based process.',
          capabilities: [
            'Business capability identification & taxonomy',
            'Capability maturity assessment & benchmarking',
            'Capability heat-mapping & investment prioritisation',
            'Capability-to-application mapping',
            'Strategic capability gap analysis',
          ],
        },
      },
      {
        name: 'Current State Assessment',
        desc: 'Know exactly where you stand today',
        image: entSubCurrentStateImg,
        detail: {
          tagline: 'An unsparing view of today — the foundation every transformation needs',
          body: 'You cannot design where you are going without a rigorous understanding of where you are. Current state assessment gives organisations the honest, evidence-based baseline that transformation decisions demand — mapping systems, processes, capabilities, and technical debt with the depth that drives confident, risk-aware investment decisions.',
          capabilities: [
            'Enterprise systems landscape analysis & documentation',
            'Technical debt identification & quantification',
            'Process maturity & efficiency assessment',
            'Architecture debt & risk scoring',
            'Assessment reporting for executive and board audiences',
          ],
        },
      },
      {
        name: 'Target State Architecture',
        desc: 'Define where your enterprise must go',
        image: entSubTargetStateImg,
        detail: {
          tagline: 'A clear, designed vision of where your enterprise architecture must arrive',
          body: 'Target state architecture defines the future — the systems, capabilities, and structural design that positions the enterprise to realise its strategic ambition. We design target states that are ambitious enough to be transformative and grounded enough to be executable, bridging the gap between vision and a realistic, sequenced roadmap for delivery.',
          capabilities: [
            'Target state architecture design & documentation',
            'Scenario modelling & architecture options analysis',
            'Transition architecture & interim state design',
            'Target state validation with stakeholder alignment',
            'Architecture principles & standards for the future state',
          ],
        },
      },
      {
        name: 'Technology Architecture',
        desc: 'Technology structured to create advantage',
        image: entSubTechArchImg,
        detail: {
          tagline: 'Technology structured to create compounding, strategic business advantage',
          body: 'Technology architecture defines how the technology portfolio — applications, platforms, data, and infrastructure — works together to create business capability. We design technology architectures that eliminate the fragmentation that constrains growth, enabling the enterprise to move faster, integrate more easily, and build on a coherent, well-governed technology foundation.',
          capabilities: [
            'Application landscape design & rationalisation',
            'Integration architecture & API ecosystem design',
            'Technology standards & platform selection',
            'Security architecture & compliance alignment',
            'Technology architecture governance & patterns',
          ],
        },
      },
      {
        name: 'Data Architecture',
        desc: 'Data structures intelligence at every layer',
        image: dataEngineeringImg,
        detail: {
          tagline: 'Data designed from the ground up to become an intelligence asset',
          body: 'Data architecture is the structural design that determines whether your data becomes an organisational asset or an operational burden. We design data architectures that enable trusted, scalable, and governed access to information across the enterprise — creating the structural foundation on which analytics, AI, and operational intelligence all depend.',
          capabilities: [
            'Enterprise data model & schema design',
            'Data domain & ownership governance design',
            'Data lake, warehouse & lakehouse architecture',
            'Master data management & reference data design',
            'Data architecture patterns & standards governance',
          ],
        },
      },
      {
        name: 'Integration Architecture',
        desc: 'Systems that work together coherently',
        image: apiIntegrationImg,
        detail: {
          tagline: 'Connected systems that operate as one coherent, intelligent enterprise',
          body: 'Integration architecture is the invisible backbone that determines whether your systems collaborate or conflict. We design integration architectures that enable seamless, reliable data and service exchange across the enterprise — creating coherent, observable connectivity that scales with your growth without accumulating the technical debt that constrains it.',
          capabilities: [
            'Integration architecture patterns & standards',
            'API ecosystem & API gateway design',
            'Event-driven & message-based architecture',
            'B2B & partner ecosystem integration design',
            'Integration governance & dependency management',
          ],
        },
      },
      {
        name: 'Modernisation Roadmaps',
        desc: 'Retire the past. Build for the future.',
        image: digitalTransformImg,
        detail: {
          tagline: 'A structured, sequenced path from where you are to where you must be',
          body: 'Modernisation without a roadmap is transformation without direction. We design modernisation roadmaps that sequence the retirement of legacy constraints and the construction of modern capability in a phased, business-continuity-first approach — giving leadership the confidence that transformation is governed, funded, and progressing toward a clearly defined destination.',
          capabilities: [
            'Modernisation opportunity identification & prioritisation',
            'Wave-based transformation programme design',
            'Legacy decommission planning & risk sequencing',
            'Business continuity & risk management through transformation',
            'Modernisation governance & progress reporting frameworks',
          ],
        },
      },
      {
        name: 'Architecture Governance',
        desc: 'Keep architecture decisions disciplined',
        image: strategyConsultImg,
        detail: {
          tagline: 'Architecture decisions governed with rigour, consistency, and accountability',
          body: 'Architecture governance is the discipline that keeps technology decisions aligned to strategy as organisations scale, teams grow, and complexity increases. We design and operate architecture governance frameworks that embed design authority, decision review, and standards enforcement into the fabric of delivery — without becoming bureaucratic overhead that slows teams down.',
          capabilities: [
            'Architecture review board (ARB) design & operation',
            'Architecture decision records (ADR) & governance process',
            'Design principles, standards & guardrails',
            'Architecture compliance review & assurance',
            'Governance tooling & workflow integration',
          ],
        },
      },
    ],
  },

  // ─── 03 DATA AND ENGINEERING ─────────────────────────────────────────────────
  {
    slug: 'data-engineering',
    number: '03',
    title: 'Data and Engineering',
    eyebrow: 'Built to Last',
    tagline: 'Reliable data foundations and engineering capabilities that turn strategy, intelligence, and product ideas into scalable digital systems.',
    description: 'Data is the raw material of intelligence — but only when it is reliable, accessible, and well-engineered. Our Data & Engineering practice builds the digital foundations that transform data into an organisational asset. We engineer data pipelines, platforms, and warehouses that power analytics and AI, build products that ship fast and scale reliably, and deliver software that performs under enterprise conditions. Every system we build is designed for durability — not just delivery.',
    highlights: [
      'Data engineering, platforms, and warehousing built for enterprise-scale reliability',
      'Analytics engineering and business intelligence that every team can trust',
      'Product and software engineering with enterprise-grade architecture discipline',
      'API engineering for seamless, governed system connectivity',
      'Quality and data governance embedded across the full lifecycle',
    ],
    coverImage: dataEngineeringImg,
    coverVideo: servicesCoverVideo,
    subServices: [
      {
        name: 'Data Engineering',
        desc: 'Reliable pipelines, trusted data',
        image: dataSubEngineeringImg,
        detail: {
          tagline: 'Pipelines that carry intelligence to every corner of the enterprise',
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
        name: 'Data Platforms',
        desc: 'Scalable foundations for enterprise data',
        image: dataSubPlatformImg,
        detail: {
          tagline: 'Data platform designed to grow with the intelligence demands of your enterprise',
          body: 'A data platform is not just storage — it is the operating environment that determines how accessible, reliable, and scalable your data capability is across the entire organisation. We design and build data platforms that combine the right architectural patterns, tooling choices, and governance structures to serve every analytics, AI, and operational intelligence use case.',
          capabilities: [
            'Data platform architecture & technology selection',
            'Data lake, lakehouse & warehouse platform engineering',
            'Streaming & batch processing platform design',
            'Multi-cloud & hybrid data platform strategy',
            'Data platform operations, monitoring & SLAs',
          ],
        },
      },
      {
        name: 'Data Warehousing',
        desc: 'Structured intelligence at enterprise scale',
        image: dataSubWarehouseImg,
        detail: {
          tagline: 'A single source of structured, trusted truth for every enterprise decision',
          body: 'Data warehousing remains one of the most powerful tools in enterprise intelligence — a well-designed warehouse eliminates the data silos, inconsistencies, and query performance problems that prevent teams from making decisions with confidence. We design and build warehouses that are structured for business logic, optimised for analytical performance, and governed for sustained trust.',
          capabilities: [
            'Dimensional modelling & data vault design',
            'Cloud data warehouse engineering (Snowflake, BigQuery, Redshift)',
            'ETL/ELT pipeline engineering & orchestration',
            'Warehouse performance optimisation & query tuning',
            'Data warehouse governance, documentation & lineage',
          ],
        },
      },
      {
        name: 'Analytics Engineering',
        desc: 'Clean models, trusted metrics everywhere',
        image: dataSubAnalyticsImg,
        detail: {
          tagline: 'Analytics built on clean models that everyone in the enterprise trusts',
          body: 'Analytics engineering bridges the gap between raw data and business-ready metrics — creating the transformation layer that ensures every team in the organisation works from the same definitions, the same data, and the same truth. We build analytics engineering practices that make metrics trustworthy, consistent, and independently accessible across every business function.',
          capabilities: [
            'dbt model design & transformation layer engineering',
            'Semantic layer & metrics store architecture',
            'Data testing & freshness SLA governance',
            'Analytics asset cataloguing & documentation',
            'Analytics engineering team practices & tooling',
          ],
        },
      },
      {
        name: 'Business Intelligence',
        desc: 'Insight at the speed of decisions',
        image: dataSubBIImg,
        detail: {
          tagline: 'Intelligence delivered at the speed decisions need to be made',
          body: 'Business intelligence is most powerful when it reaches the right person, with the right insight, at the moment they need to act. We build BI solutions that move beyond static dashboards — creating governed, self-service analytics environments where every team can explore data, surface insights, and make decisions without depending on a central analytics queue.',
          capabilities: [
            'BI platform engineering & architecture (Power BI, Tableau, Looker)',
            'Self-service analytics enablement & governance',
            'Dashboard design, KPI definition & metric standards',
            'Report automation & scheduled delivery',
            'BI adoption programmes & data literacy enablement',
          ],
        },
      },
      {
        name: 'Product Engineering',
        desc: 'Products built to ship and scale reliably',
        image: dataSubProductEngImg,
        detail: {
          tagline: 'Products that ship on time, scale reliably, and compound in value over time',
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
        desc: 'Enterprise-grade software, every time',
        image: dataSubSoftwareEngImg,
        detail: {
          tagline: 'Software built with the craft and discipline production demands',
          body: 'Software engineering is not just writing code — it is the craft of building systems that are correct, maintainable, and built to last. We bring enterprise engineering discipline to every engagement: rigorous design, clean architecture, comprehensive testing, and the operational thinking that ensures what we build performs under production pressure for years, not quarters.',
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
        name: 'API Engineering',
        desc: 'APIs that connect everything cleanly',
        image: dataSubAPIImg,
        detail: {
          tagline: 'APIs designed for longevity, developer experience, and seamless integration',
          body: 'Modern enterprises are ecosystems of systems — and API engineering is the discipline that makes them work as one. We design APIs that are developer-friendly and built for longevity, integration architectures that are resilient under load, and connectivity layers that allow your entire technology portfolio to operate coherently and evolve without fragility.',
          capabilities: [
            'API design, versioning & documentation standards',
            'RESTful & GraphQL API development',
            'Webhook & event-driven integration patterns',
            'API gateway, security layer & rate limiting',
            'Integration testing & contract testing frameworks',
          ],
        },
      },
      {
        name: 'Quality Engineering',
        desc: 'Quality embedded from the start',
        image: dataSubQualityImg,
        detail: {
          tagline: 'Quality built in from the first line — not scrambled in at the end',
          body: 'Quality engineering is about building quality into the software development lifecycle from the start, not testing it in at the end. We design automated testing strategies, performance benchmarks, and quality gates that give engineering teams the confidence to ship fast without accumulating the kind of risk that eventually forces a costly and unplanned slowdown.',
          capabilities: [
            'Test strategy & automation framework design',
            'Functional, regression & end-to-end test automation',
            'Performance, load & stress testing',
            'Security & accessibility testing',
            'Quality engineering culture & team coaching',
          ],
        },
      },
      {
        name: 'Data Governance',
        desc: 'Data you can trust and account for',
        image: dataSubGovernanceImg,
        detail: {
          tagline: 'Data the enterprise can trust, explain, and account for at scale',
          body: 'Data governance is the operating framework that makes data trustworthy, accessible, and accountable across the enterprise. We design and implement governance programmes that establish clear data ownership, quality standards, access controls, and lineage tracking — creating the conditions under which AI, analytics, and operational intelligence can scale without losing integrity.',
          capabilities: [
            'Data governance framework design & implementation',
            'Data ownership, stewardship & accountability models',
            'Data quality standards & automated monitoring',
            'Metadata management & enterprise data catalogue',
            'Regulatory compliance (GDPR, CCPA) & data privacy frameworks',
          ],
        },
      },
    ],
  },

  // ─── 04 CLOUD AND INFRASTRUCTURE ─────────────────────────────────────────────
  {
    slug: 'cloud-infrastructure',
    number: '04',
    title: 'Cloud and Infrastructure',
    eyebrow: 'Cloud-Native by Design',
    tagline: 'Cloud-native infrastructure, platforms, and operations engineered for resilience, automation, security, and cost control.',
    description: 'Modern enterprises operate on cloud. Our Cloud & Infrastructure practice designs, migrates, and operates the resilient platforms that underpin enterprise workloads. We go beyond lift-and-shift — building cloud-native architectures that are observable, automated, cost-efficient, and built for growth. From cloud strategy and landing zones to DevOps automation, security, and FinOps, we make your operating model cloud-native from the ground up.',
    highlights: [
      'Cloud strategy and migration across AWS, Azure, and GCP with zero disruption',
      'Landing zones and cloud engineering designed for security and scale from day one',
      'Platform and infrastructure engineering that eliminates operational toil',
      'DevOps automation pipelines that give teams the ability to ship fast and safely',
      'Cloud security, observability, and FinOps that sustain reliability and cost control',
    ],
    coverImage: cloudImg,
    coverVideo: servicesCoverVideo,
    subServices: [
      {
        name: 'Cloud Strategy',
        desc: 'Cloud decisions that create real advantage',
        image: cloudSubStrategyImg,
        detail: {
          tagline: 'Cloud decisions made with the rigour strategic advantage demands',
          body: 'Cloud strategy is not a technology choice — it is a business decision with decade-long consequences. We develop cloud strategies grounded in business reality, analysing workload characteristics, commercial objectives, and risk appetite to define the optimal cloud posture for your organisation — and a credible, sequenced roadmap to get there.',
          capabilities: [
            'Cloud readiness assessment & business case',
            'Multi-cloud & hybrid cloud strategy design',
            'Cloud operating model & governance framework',
            'Workload placement & cloud target architecture',
            'Cloud investment planning & commercial optimisation',
          ],
        },
      },
      {
        name: 'Cloud Migration',
        desc: 'Migrate with confidence and zero disruption',
        image: cloudSubMigrationImg,
        detail: {
          tagline: 'Migrate with precision, governance, and zero disruption to operations',
          body: 'Cloud migration is one of the most risk-laden technical programmes in enterprise. We bring structured methodology, tooling expertise, and operational discipline to execute migrations with precision — managing every dimension from dependency mapping and wave planning to cutover execution and post-migration stabilisation at enterprise scale.',
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
        name: 'Landing Zones',
        desc: 'The secure foundation for cloud operations',
        image: cloudSubLandingImg,
        detail: {
          tagline: 'A secure, governed cloud foundation that every workload can build on',
          body: 'A cloud landing zone is the foundational environment that determines how safely and efficiently every workload you move to cloud will operate. We design and build production-grade landing zones that embed security, governance, network segmentation, and compliance controls from day one — eliminating the structural remediation that most enterprises face after rushed migrations.',
          capabilities: [
            'Landing zone architecture & design (AWS, Azure, GCP)',
            'Identity & access management (IAM) foundation design',
            'Network topology, security zones & private connectivity',
            'Policy-as-code & automated guardrail enforcement',
            'Multi-account & subscription governance design',
          ],
        },
      },
      {
        name: 'Cloud Engineering',
        desc: 'Cloud-native architecture at enterprise scale',
        image: cloudSubEngineeringImg,
        detail: {
          tagline: 'Cloud-native from the foundation — not a migration, a reimagination',
          body: 'Cloud engineering is not lift-and-shift — it is the reimagination of how applications and platforms are designed to take full advantage of cloud elasticity, resilience, and scale. We engineer cloud-native systems across AWS, Azure, and GCP that are observable, automated, cost-optimised, and built to grow with your ambitions without accumulating operational debt.',
          capabilities: [
            'Cloud-native architecture & design patterns',
            'Container orchestration & Kubernetes engineering',
            'Serverless & event-driven platform design',
            'Multi-cloud & hybrid cloud engineering',
            'FinOps & cloud cost intelligence platforms',
          ],
        },
      },
      {
        name: 'Infrastructure Engineering',
        desc: 'Resilient infrastructure for enterprise workloads',
        image: infraEngineeringImg,
        detail: {
          tagline: 'Infrastructure engineered to hold the weight of enterprise ambition',
          body: 'Infrastructure is the silent foundation on which every digital service depends. We design and build infrastructure systems that are resilient, observable, and engineered for the performance demands of enterprise workloads — with the automation and monitoring discipline to keep them reliable as usage grows, failure modes multiply, and operational complexity compounds.',
          capabilities: [
            'Infrastructure architecture & technical design',
            'Infrastructure-as-Code (Terraform, Pulumi, Bicep)',
            'Network design, security hardening & private connectivity',
            'Disaster recovery & business continuity engineering',
            'Observability, monitoring & alerting platform design',
          ],
        },
      },
      {
        name: 'Platform Engineering',
        desc: 'Internal platforms for engineering velocity',
        image: cloudSubPlatformImg,
        detail: {
          tagline: 'Platforms that make every engineering team dramatically more productive',
          body: 'Platform engineering is the discipline of building internal developer platforms that make engineering teams dramatically more productive. We design and operate internal development platforms — golden paths, self-service tooling, shared infrastructure — that reduce cognitive load and free your engineers to focus on building products, not managing plumbing.',
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
        name: 'DevOps Automation',
        desc: 'Automate delivery, eliminate all toil',
        image: cloudSubDevOpsImg,
        detail: {
          tagline: 'Automate delivery. Eliminate toil. Ship with confidence at scale.',
          body: 'DevOps closes the gap between development speed and operational reliability. We design and implement DevOps platforms and automation pipelines that give engineering teams the ability to ship fast, safely, and repeatedly — eliminating the manual toil that slows delivery, introduces human error, and erodes engineering morale under sustained delivery pressure.',
          capabilities: [
            'CI/CD pipeline design & implementation at scale',
            'Infrastructure automation & configuration management',
            'GitOps & declarative deployment patterns',
            'Shift-left security (DevSecOps) integration',
            'SRE practice design & toil elimination',
          ],
        },
      },
      {
        name: 'Cloud Security',
        desc: 'Security built into every cloud layer',
        image: cloudSubSecurityImg,
        detail: {
          tagline: 'Security embedded into every layer of the cloud, not added after',
          body: 'Cloud security is not a set of tools applied over the top — it is a design discipline embedded into the architecture, deployment patterns, and operations of every cloud workload. We design cloud security postures that protect enterprise environments through preventive controls, continuous detection, and rapid response capability aligned to modern threat landscapes.',
          capabilities: [
            'Cloud security architecture & posture design',
            'Identity, access & privileged account management (PAM)',
            'Security information & event management (SIEM/SOAR)',
            'Cloud compliance automation (CIS, NIST, ISO 27001)',
            'Threat detection, vulnerability management & incident response',
          ],
        },
      },
      {
        name: 'Observability & SRE',
        desc: 'See everything. Respond before it breaks.',
        image: cloudSubObsImg,
        detail: {
          tagline: 'See everything in production before users notice anything has broken',
          body: 'Observability gives engineering and operations teams the visibility to understand how systems are behaving in production — not just whether they are up. Combined with Site Reliability Engineering disciplines, we help organisations build the monitoring, alerting, and incident response capabilities that keep digital services reliable under the pressures of enterprise scale.',
          capabilities: [
            'Observability platform engineering (metrics, logs, traces)',
            'SLO & error budget design & management',
            'Alerting strategy & on-call practice design',
            'Chaos engineering & resilience testing',
            'Post-incident review & reliability improvement programmes',
          ],
        },
      },
      {
        name: 'FinOps',
        desc: 'Control cloud spend, maximise ROI',
        image: cloudSubFinOpsImg,
        detail: {
          tagline: 'Cloud spend governed with the same rigour as every capital allocation',
          body: 'Cloud without FinOps is cloud without accountability. We build FinOps capabilities that give organisations full visibility into cloud spend, the governance structures to control it, and the engineering disciplines to optimise it — ensuring cloud investment translates into business value rather than unchecked infrastructure cost accumulation.',
          capabilities: [
            'Cloud cost visibility & allocation architecture',
            'Unit economics & cost-per-unit modelling',
            'Engineering cost optimisation (rightsizing, reserved capacity)',
            'FinOps operating model & accountability design',
            'Showback, chargeback & financial reporting automation',
          ],
        },
      },
    ],
  },

  // ─── 05 EXPERIENCE, DESIGN AND TRUST ─────────────────────────────────────────
  {
    slug: 'experience-design-trust',
    number: '05',
    title: 'Experience, Design and Trust',
    eyebrow: 'Human-Centred Intelligence',
    tagline: 'Human-centred digital experiences designed with strategy, usability, adoption, security, and trust at the core.',
    description: 'The value of technology is ultimately measured by the people who use it. Our Experience, Design & Trust practice creates the human layer of digital systems — combining digital strategy, design craft, service design, UX research, and trust-by-design governance. We create experiences that earn adoption, embed security and ethics from the first design decision, and develop the change and innovation capabilities that make transformation last.',
    highlights: [
      'Digital strategy grounded in business reality and designed for measurable impact',
      'Experience, service, and customer journey design built around real human behaviour',
      'UX research and UI design systems that eliminate assumptions before they ship',
      'Trust by design — security, ethics, and privacy embedded from the first decision',
      'Change enablement and innovation advisory that make transformation actually land',
    ],
    coverImage: experienceDesignImg,
    coverVideo: servicesCoverVideo,
    subServices: [
      {
        name: 'Digital Strategy',
        desc: 'Direction for the digital enterprise',
        image: expSubDigitalStratImg,
        detail: {
          tagline: 'Digital direction grounded in business reality and designed to compound',
          body: 'Digital strategy is not a technology plan — it is a business strategy for how digital capabilities create competitive advantage. We develop digital strategies that are commercially grounded, technically credible, and sequenced for delivery — giving leadership teams the direction, conviction, and investment rationale needed to execute transformation at scale.',
          capabilities: [
            'Digital business model design & assessment',
            'Digital investment portfolio prioritisation',
            'Platform & ecosystem strategy',
            'Digital transformation programme design',
            'Board-level digital advisory & governance',
          ],
        },
      },
      {
        name: 'Experience Design',
        desc: 'Experiences users trust and return to',
        image: expSubExpDesignImg,
        detail: {
          tagline: 'Experiences users trust, return to, and recommend to those around them',
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
        name: 'Service Design',
        desc: 'Every touchpoint, every channel, coherent',
        image: expSubServiceDesignImg,
        detail: {
          tagline: 'Experiences that hold together across every channel, team, and moment',
          body: 'Service design looks beyond the screen to the full ecosystem of people, processes, and systems that create a service experience. We design services that are coherent across every touchpoint — from digital interfaces to human interactions — ensuring the experience your customers receive is intentional, consistent, and capable of scaling without losing quality.',
          capabilities: [
            'End-to-end service mapping & blueprinting',
            'Backstage & frontstage process design',
            'Cross-channel experience consistency design',
            'Service operations & delivery model design',
            'Service prototyping & pilot validation',
          ],
        },
      },
      {
        name: 'Customer Journeys',
        desc: 'Map and improve every customer moment',
        image: customerJourneysImg,
        detail: {
          tagline: 'Every customer moment designed with intention, measured with precision',
          body: 'Customer journey mapping reveals the gap between the experience organisations intend to deliver and the experience customers actually have. We map journeys with granular depth — uncovering the friction, drop-off, and frustration that erodes loyalty — and redesign them with the precision that turns moments of friction into moments of competitive differentiation.',
          capabilities: [
            'Customer journey mapping & current state analysis',
            'Persona development & customer segmentation',
            'Friction identification & experience gap analysis',
            'Journey redesign & future state prototyping',
            'Journey performance measurement & tracking frameworks',
          ],
        },
      },
      {
        name: 'UX Research',
        desc: 'Insight that eliminates expensive assumptions',
        image: expSubUXImg,
        detail: {
          tagline: 'Research that eliminates expensive assumptions before they ship to production',
          body: 'Decisions made without user insight are expensive bets. UX research transforms those bets into informed choices — giving design and product teams the evidence they need to build what users actually need, not what teams assume. We conduct research that is rigorous, rapid, and directly connected to real design and product decisions that matter.',
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
        name: 'UI Design Systems',
        desc: 'Consistent design at enterprise scale',
        image: expSubUISystemImg,
        detail: {
          tagline: 'Design systems that make consistency effortless and quality scalable',
          body: 'A UI design system is the shared language that allows enterprise product teams to build consistent, accessible, and high-quality interfaces at scale — without reinventing patterns with every product and every team. We design and build design systems that are component-rich, well-governed, and engineered to evolve with your product portfolio as it grows.',
          capabilities: [
            'Design system architecture, tokens & component library',
            'Accessibility (WCAG) standards & implementation',
            'Figma-to-code design handoff workflows',
            'Design system governance, documentation & versioning',
            'Adoption programmes & designer-developer collaboration models',
          ],
        },
      },
      {
        name: 'Customer Experience',
        desc: 'Human-centred, loyalty-generating design',
        image: expSubCXImg,
        detail: {
          tagline: 'Customer experience that generates loyalty and drives measurable business outcomes',
          body: 'Customer experience is the sum of every interaction your customers have with your brand — and it is one of the most durable sources of competitive advantage. We design customer experiences built around real human behaviour: mapping journeys, eliminating friction, and creating touchpoints that build loyalty, drive conversion, and earn the kind of recommendation that compounds.',
          capabilities: [
            'CX strategy & experience vision development',
            'Omnichannel experience design & consistency',
            'Personalisation & adaptive experience architecture',
            'Voice of customer (VoC) programme design',
            'CX measurement frameworks & loyalty strategy',
          ],
        },
      },
      {
        name: 'Trust by Design',
        desc: 'Security and ethics embedded by design',
        image: expSubTrustImg,
        detail: {
          tagline: 'Trust embedded from the first design decision — never retrofitted',
          body: 'Trust is not a feature — it is a design outcome. We embed security, privacy, ethics, and transparency into the design of digital systems from the very beginning, ensuring the experiences and AI systems organisations deploy are built to earn and sustain trust with every user, customer, and regulator they touch.',
          capabilities: [
            'Privacy-by-design & data minimisation frameworks',
            'Security UX & transparent permission systems',
            'AI ethics & fairness in product design',
            'Trust signalling & transparency design patterns',
            'Regulatory alignment (GDPR, AI Act) in experience design',
          ],
        },
      },
      {
        name: 'Change Enablement',
        desc: 'Make transformation actually land',
        image: expSubChangeImg,
        detail: {
          tagline: 'Transformation that lands in the organisation, not just the delivery team',
          body: 'Technology transformation only creates value when people adopt it. Change enablement is the practice of designing, sequencing, and communicating transformation in ways that earn organisational buy-in, build capability, and ensure the systems and processes you implement are actually used the way they were intended — at every level of the organisation.',
          capabilities: [
            'Change impact assessment & readiness analysis',
            'Stakeholder engagement strategy & communications design',
            'Training design & learning journey development',
            'Change champion networks & embedded adoption support',
            'Adoption measurement & sustained behaviour change',
          ],
        },
      },
      {
        name: 'Innovation Advisory',
        desc: 'Systematic paths to what comes next',
        image: expSubInnovationImg,
        detail: {
          tagline: 'Innovation as a discipline — systematic, measurable, and compounding',
          body: 'Innovation is not an accident — it is a discipline. We help organisations build the systematic capabilities, cultural conditions, and strategic frameworks that make breakthrough innovation repeatable and compounding. Our innovation advisory practice connects visionary thinking with execution rigour, turning ideas into durable competitive advantage rather than fading pilot programmes.',
          capabilities: [
            'Innovation portfolio design & governance',
            'Innovation lab design & operating model',
            'Open innovation & ecosystem strategy',
            'Innovation pipeline management & stage-gate processes',
            'Design thinking & rapid prototyping facilitation',
          ],
        },
      },
    ],
  },
]
