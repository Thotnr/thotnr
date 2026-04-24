import coverFinancial      from '../assets/images/case1.jpg'
import coverHealthcare      from '../assets/images/case2.jpg'
import coverGenAI           from '../assets/images/ai-service.jpg'
import coverEnterprise      from '../assets/images/enterprise-architect.jpg'
import coverCloud           from '../assets/images/cloud.jpg'
import coverManufacturing   from '../assets/images/ai-summit.jpg'
import coverExperience      from '../assets/images/user-experience.jpg'
import coverCyber           from '../assets/images/security-risk.jpg'

import portrait1 from '../assets/images/about-us_Gaurav-Kumar.jpg'
import portrait2 from '../assets/images/about-us_Sankalp.jpg'
import portrait3 from '../assets/images/about-us_Gaurav-Verma.jpg'
import portrait4 from '../assets/images/about-us_Love.jpg'
import portrait5 from '../assets/images/about-us_Bharat.jpg'
import portrait6 from '../assets/images/about-us_Hariraj.jpg'
import portrait7 from '../assets/images/about-us_Deepak.jpg'
import portrait8 from '../assets/images/about-us_Neha.jpg'

export const caseStudies = [
  {
    slug: 'financial-services',
    coverImg: coverFinancial,
    coverTagline: 'Credit Risk, Reimagined with AI',
    coverSubheadline: 'How a tier-1 bank cut loan decision time by 73% without adding headcount.',
    meta: {
      sector: 'Financial Services',
      company: 'Global Tier-1 Bank',
      service: 'AI & Machine Learning',
      offering: 'Credit Risk Transformation',
    },
    challenge: {
      title: 'A Decisioning Stack Built for Another Era',
      description: 'The bank\'s credit origination process relied on rule-based systems assembled over two decades, producing decisions in 3–5 business days and yielding inconsistent portfolio outcomes. With digital lending competitors operating at sub-minute decisioning speeds, the bank faced rising customer attrition and a widening competitive gap it could no longer ignore.',
    },
    solution: {
      title: 'End-to-End ML Decisioning Layer',
      description: 'We embedded a fully automated ML decisioning layer into the bank\'s existing origination stack — integrating bureau data, behavioural signals, and alternative data sources into a real-time scoring engine. The architecture was designed for auditability and regulatory transparency from day one, ensuring the models could be explained to both internal risk committees and external regulators without friction.',
    },
    outcome: {
      title: '73% Faster Decisions, Stronger Portfolio',
      description: 'Loan decision time dropped from 3–5 days to under 4 hours. Portfolio default rates improved by 18% in the first two quarters as the model captured risk signals the legacy rules had missed. Operational capacity scaled without adding headcount, and the bank launched a fully digital SME lending product within six months of go-live.',
    },
    clientSpeak: {
      quote: 'Thotnr didn\'t just build a model — they changed how our risk organisation thinks about decisioning. We now have a system we can defend to the regulator and scale with confidence.',
      name: 'Rajiv Anand',
      role: 'Chief Risk Officer',
      company: 'Global Tier-1 Bank',
      image: portrait1,
    },
    cta: {
      headline: 'Ready to Transform Your Risk Infrastructure?',
      description: 'We work with financial institutions to embed AI that meets the bar for enterprise scale, regulatory scrutiny, and performance.',
      buttonText: 'Start a Conversation',
    },
  },
  {
    slug: 'healthcare',
    coverImg: coverHealthcare,
    coverTagline: 'Clinical Triage at the Speed of Intelligence',
    coverSubheadline: 'Deploying AI-powered triage across 12 hospitals to save time where it matters most.',
    meta: {
      sector: 'Healthcare',
      company: 'Multi-Site Hospital Network',
      service: 'Applied AI',
      offering: 'Clinical Decision Support',
    },
    challenge: {
      title: 'Overwhelmed Staff, Delayed Diagnoses',
      description: 'Across 12 hospitals, emergency departments were operating at 140% capacity during peak periods, with triage nurses manually classifying thousands of incoming patients per day. High-acuity cases were frequently deprioritised due to volume, leading to adverse outcomes and regulatory scrutiny. The network needed intelligence, not more staff.',
    },
    solution: {
      title: 'Real-Time AI Triage Engine',
      description: 'We built a clinical decision support system that ingests patient vitals, chief complaints, and historical data at intake and surfaces a real-time acuity score to triage staff. The model was trained on five years of de-identified records and validated by a clinical advisory board before deployment. Integration with existing EMR systems ensured zero workflow disruption.',
    },
    outcome: {
      title: 'Faster Care for the Patients Who Need It Most',
      description: 'Average patient wait times fell by 34% within the first quarter of deployment. High-acuity case misclassification dropped by 61%, and clinician satisfaction scores reached their highest recorded level. The network\'s CMO cited the system as the most impactful technology investment in the last decade.',
    },
    clientSpeak: {
      quote: 'We were sceptical that an AI system could operate safely in a live emergency environment. Thotnr proved us wrong — methodically, transparently, and with clinical rigour at every step.',
      name: 'Dr. Priya Mehta',
      role: 'Chief Medical Officer',
      company: 'Multi-Site Hospital Network',
      image: portrait2,
    },
    cta: {
      headline: 'AI That Belongs in Clinical Environments',
      description: 'We build healthcare AI that meets the standards of patient safety, clinical governance, and real-world performance.',
      buttonText: 'Talk to Our Team',
    },
  },
  {
    slug: 'generative-ai',
    coverImg: coverGenAI,
    coverTagline: 'Production-Grade GenAI for the Enterprise',
    coverSubheadline: 'Building a RAG-based personalisation engine that processes millions of signals daily.',
    meta: {
      sector: 'Retail & E-Commerce',
      company: 'Leading Retail Enterprise',
      service: 'Generative AI',
      offering: 'Personalisation Platform',
    },
    challenge: {
      title: 'Personalisation at Scale Was Unsolved',
      description: 'Despite having one of the largest customer datasets in the sector, the retailer\'s recommendation engine was producing generic outputs that failed to reflect real purchase intent. Time-to-insight for merchandising teams was measured in days, not seconds, and the product catalogue was simply too dynamic for static rules to keep pace.',
    },
    solution: {
      title: 'RAG-Powered Recommendation Architecture',
      description: 'We designed and deployed a Retrieval-Augmented Generation (RAG) system that combined a fine-tuned language model with a real-time vector store of product, customer, and contextual data. The system processes over 4 million customer signals per day and surfaces hyper-relevant product recommendations at sub-200ms latency — without requiring batch retraining.',
    },
    outcome: {
      title: '28% Higher Basket Size, Days to Seconds',
      description: 'Average basket size increased by 28% within three months of launch. Time-to-insight for merchandising teams collapsed from 48 hours to under 10 seconds. The system\'s contextual awareness enabled the retailer to launch a seasonal campaign personalisation capability that had previously been considered technically infeasible.',
    },
    clientSpeak: {
      quote: 'What Thotnr built isn\'t a recommendation widget — it\'s a strategic capability. The speed at which we can now respond to customer behaviour has changed our entire go-to-market approach.',
      name: 'Ananya Sharma',
      role: 'Chief Digital Officer',
      company: 'Leading Retail Enterprise',
      image: portrait3,
    },
    cta: {
      headline: 'Build GenAI That Actually Ships',
      description: 'We take generative AI from prototype to production — with the architecture, governance, and integration work that makes it real.',
      buttonText: 'Explore GenAI Services',
    },
  },
  {
    slug: 'enterprise-architecture',
    coverImg: coverEnterprise,
    coverTagline: 'Legacy No More. Enterprise Unleashed.',
    coverSubheadline: 'How a multinational unlocked a 60% faster delivery cycle by modernising its core architecture.',
    meta: {
      sector: 'Conglomerate / Multi-Industry',
      company: 'Multinational Conglomerate',
      service: 'Enterprise Architecture',
      offering: 'Architecture Transformation',
    },
    challenge: {
      title: 'A Decade of Technical Debt Across 40 Business Units',
      description: 'The conglomerate was running on a patchwork of siloed, decade-old systems across 40 business units — each with its own data model, integration layer, and release cadence. The fragmentation made AI adoption practically impossible and had pushed average feature delivery time to 6–9 months per initiative. Leadership recognised that no digital strategy could succeed on this foundation.',
    },
    solution: {
      title: 'Phased Architecture Transformation',
      description: 'We designed and executed a phased enterprise architecture transformation anchored around business capabilities rather than legacy system boundaries. A domain-driven design approach allowed us to modernise incrementally without disrupting live operations. We introduced a shared data platform, standardised API contracts, and a federated delivery model that gave each business unit independence without sacrificing enterprise coherence.',
    },
    outcome: {
      title: '60% Faster Delivery, AI-Ready Foundation',
      description: 'Feature delivery cycles compressed from 6–9 months to under 10 weeks. Three business units launched AI initiatives within 12 months of the architecture work concluding — previously impossible with the old stack. The shared data platform became a new commercial asset, now being licensed to two of the group\'s strategic partners.',
    },
    clientSpeak: {
      quote: 'Thotnr navigated our organisational complexity with a level of maturity I have rarely seen. They didn\'t just deliver a blueprint — they built the capability for us to keep evolving without them.',
      name: 'Suresh Kapoor',
      role: 'Group CTO',
      company: 'Multinational Conglomerate',
      image: portrait4,
    },
    cta: {
      headline: 'Is Your Architecture Limiting Your Strategy?',
      description: 'We help enterprises modernise the foundation without stopping the business — phased, pragmatic, and built to last.',
      buttonText: 'Discuss Your Architecture',
    },
  },
  {
    slug: 'cloud',
    coverImg: coverCloud,
    coverTagline: '40% Lower Costs. 99.97% Uptime.',
    coverSubheadline: 'A cloud-native redesign that survived its first Black Friday without a single incident.',
    meta: {
      sector: 'SaaS / Technology',
      company: 'High-Traffic SaaS Platform',
      service: 'Cloud Engineering',
      offering: 'Cloud-Native Migration',
    },
    challenge: {
      title: 'On-Premise Monoliths in a Multi-Tenant World',
      description: 'The SaaS platform had grown rapidly on an on-premise monolithic architecture that was never designed for multi-tenant scale. Annual Black Friday events triggered cascading failures that required a full engineering war room for 36 hours. Infrastructure costs were consuming 38% of revenue, and the engineering team spent more time managing incidents than shipping features.',
    },
    solution: {
      title: 'Cloud-Native Microservices on AWS',
      description: 'We led the end-to-end migration from on-premise monoliths to a cloud-native microservices architecture on AWS — using EKS for container orchestration, Aurora for stateful workloads, and a fully automated CI/CD pipeline built on GitHub Actions. The migration was executed in 14 sprints with zero customer-facing downtime, using a strangler-fig pattern to de-risk each service extraction.',
    },
    outcome: {
      title: 'First Clean Black Friday in Company History',
      description: 'Infrastructure costs fell by 40% within six months of migration completion. Uptime reached 99.97% — the highest in the company\'s history. The engineering team\'s feature velocity increased by 3.5× as incident response demand collapsed. The platform\'s first Black Friday post-migration ran without a single P1 incident, ending a multi-year streak of annual crises.',
    },
    clientSpeak: {
      quote: 'Our team had been dreading Black Friday for three years. This year we watched the traffic spike from a dashboard and went home at 6pm. That\'s what Thotnr\'s work meant in practice.',
      name: 'Vikram Nair',
      role: 'VP of Engineering',
      company: 'High-Traffic SaaS Platform',
      image: portrait5,
    },
    cta: {
      headline: 'Your Infrastructure Should Work for You',
      description: 'We design and execute cloud-native migrations that reduce cost, eliminate fragility, and free your engineers to build.',
      buttonText: 'Plan Your Migration',
    },
  },
  {
    slug: 'manufacturing',
    coverImg: coverManufacturing,
    coverTagline: 'Predict the Failure Before It Happens',
    coverSubheadline: 'Giving maintenance teams a 72-hour warning window and cutting downtime by 65%.',
    meta: {
      sector: 'Manufacturing',
      company: 'Global Industrial Manufacturer',
      service: 'Industrial AI',
      offering: 'Predictive Maintenance',
    },
    challenge: {
      title: 'Unplanned Failures Were Costing Millions',
      description: 'Across 8 production facilities, the manufacturer was losing an estimated $14M annually to unplanned equipment failures. Maintenance schedules were calendar-based rather than condition-based, leading to both premature part replacement and missed failure signals. A single turbine failure could halt an entire production line for 18–72 hours.',
    },
    solution: {
      title: 'Sensor-Data Pipelines and ML Anomaly Detection',
      description: 'We instrumented 340 high-value assets across the manufacturer\'s facilities with IoT sensor packages and built real-time data pipelines feeding into an ML anomaly detection layer. Models were trained on 4 years of historical failure data and tuned to surface actionable alerts — not false positives. A custom dashboard gave maintenance supervisors a prioritised work queue updated every 15 minutes.',
    },
    outcome: {
      title: '65% Less Downtime, 72-Hour Warning Window',
      description: 'Unplanned downtime fell by 65% in the 12 months following full deployment. Maintenance teams now receive failure warnings an average of 72 hours in advance, converting reactive firefighting into planned interventions. Annual maintenance cost savings of $9.2M were realised in year one, delivering full programme ROI within 14 months.',
    },
    clientSpeak: {
      quote: 'We went from finding out a machine had failed to finding out a machine was going to fail. That shift in posture has fundamentally changed how we run these facilities.',
      name: 'Arun Tiwari',
      role: 'Head of Operations',
      company: 'Global Industrial Manufacturer',
      image: portrait6,
    },
    cta: {
      headline: 'Stop Reacting. Start Predicting.',
      description: 'We build industrial AI systems that give your operations team the visibility to act before failure occurs.',
      buttonText: 'Explore Industrial AI',
    },
  },
  {
    slug: 'experience-design',
    coverImg: coverExperience,
    coverTagline: 'Enterprise Software People Actually Use',
    coverSubheadline: 'Tripling daily active usage across a 50,000-seat ERP rollout in one quarter.',
    meta: {
      sector: 'Enterprise Software',
      company: 'Global ERP Provider',
      service: 'Experience Design',
      offering: 'UX Transformation',
    },
    challenge: {
      title: 'A $40M ERP Nobody Wanted to Use',
      description: 'A global ERP rollout to 50,000 employees across 22 countries was stalling at 31% daily active usage — far below the 80% threshold required for the programme to deliver its business case. Support ticket volumes were running at 3× the projected rate, training completion was at 44%, and executive sponsors were facing pressure to explain the ROI of the largest technology investment in the company\'s history.',
    },
    solution: {
      title: 'End-to-End UX Redesign',
      description: 'We conducted deep ethnographic research across 6 user archetypes in 4 geographies and rebuilt the ERP interface from the workflow outward — not the feature list inward. A design system was created to ensure consistency across modules, and a progressive disclosure model was implemented to surface only the interactions each role needed. Training programmes were redesigned around embedded guidance rather than classroom instruction.',
    },
    outcome: {
      title: '3× Usage in One Quarter',
      description: 'Daily active usage climbed from 31% to 94% within the first quarter of the redesigned interface rolling out. Support ticket volume fell by 67%. Average training completion time dropped by 52%. The programme sponsor delivered a public case study at the company\'s annual customer summit — turning what had been a risk item into a flagship reference.',
    },
    clientSpeak: {
      quote: 'Thotnr understood something most UX firms miss — enterprise users aren\'t low expectations, they\'re just users with different jobs to do. They designed for the job, not the spec sheet.',
      name: 'Meera Iyer',
      role: 'Chief People Officer',
      company: 'Global ERP Provider',
      image: portrait7,
    },
    cta: {
      headline: 'Design for the People Doing the Work',
      description: 'We help enterprises close the gap between technology investment and employee adoption — through research-led, outcome-driven experience design.',
      buttonText: 'Talk About Your Rollout',
    },
  },
  {
    slug: 'cybersecurity',
    coverImg: coverCyber,
    coverTagline: 'Two Billion Events. Four Seconds to Detection.',
    coverSubheadline: 'AI-driven threat detection that stopped three major breach attempts in its first year.',
    meta: {
      sector: 'Financial Infrastructure',
      company: 'National Payments Network',
      service: 'Cybersecurity AI',
      offering: 'Threat Detection Platform',
    },
    challenge: {
      title: 'A National Payments Network Under Persistent Threat',
      description: 'Processing over 2 billion network events daily across critical national financial infrastructure, the organisation\'s legacy SIEM was generating thousands of unactionable alerts per day and missing sophisticated low-and-slow attacks entirely. Detection latency averaged 8 minutes — an eternity in modern threat timelines. Three significant breach attempts in the prior 24 months had reinforced the urgency of a fundamental capability upgrade.',
    },
    solution: {
      title: 'Real-Time AI Threat Detection',
      description: 'We architected and deployed a purpose-built AI threat detection platform capable of processing 2B+ events per day with sub-5-second detection latency. The system uses a multi-layer ML approach — combining supervised models trained on labelled threat data with unsupervised anomaly detection for novel attack patterns. Threat scoring, case management, and analyst tooling were designed in close collaboration with the security operations team to ensure real-world usability.',
    },
    outcome: {
      title: '4-Second Detection. Three Breaches Stopped.',
      description: 'Anomaly detection latency dropped from 8 minutes to under 4 seconds. In the first year of operation, the system identified and enabled the containment of three major breach attempts before data exfiltration occurred — estimated to have prevented losses exceeding $200M. The security operations team reduced false-positive alert volume by 94%, allowing analysts to focus on genuine threats.',
    },
    clientSpeak: {
      quote: 'The system didn\'t just improve our detection capability — it changed the confidence level of our entire security posture. We now have the visibility to defend infrastructure that the country depends on.',
      name: 'Kiran Desai',
      role: 'Chief Information Security Officer',
      company: 'National Payments Network',
      image: portrait8,
    },
    cta: {
      headline: 'Critical Infrastructure Demands Critical Intelligence',
      description: 'We build cybersecurity AI systems that operate at the scale, speed, and precision required to protect what matters most.',
      buttonText: 'Secure Your Infrastructure',
    },
  },
]
