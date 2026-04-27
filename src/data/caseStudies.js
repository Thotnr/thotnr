
import prodcutEngineer from '../assets/images/studies/creditas.jpg'
import imgNykaa from '../assets/images/studies/nykaa.jpg'
import imgLambda from '../assets/images/studies/aws-lambda.png'
import imgCloud from '../assets/images/studies/mining.png'
import imgEnterprise from '../assets/images/studies/standard_bank.jpg'
import imgWeb from '../assets/images/studies/zs.jpg'
import imgTata from '../assets/images/studies/tata.jpg'
import imgGlytec from '../assets/images/studies/glytec.jpg'
import imgAmerican from '../assets/images/studies/anglo-american.jpg'
import imgAIPowered from '../assets/images/studies/case-study-5.png'
import imgAgenticAI from '../assets/images/studies/case-study-4.png'
import imgEnterpriseAI from '../assets/images/studies/case-study-3.png'
import imgInsuranceIntelligence from '../assets/images/studies/case-study-2.png'
import imgRexallFieldSales from '../assets/images/studies/case-study-1.png'

import csVideo1 from '../assets/videos/case-study-1.mp4'
import csVideo2 from '../assets/videos/case-study-2.mp4'
import csVideo3 from '../assets/videos/case-study-3.mp4'
import csVideo4 from '../assets/videos/case-study-4.mp4'
import csVideo5 from '../assets/videos/case-study-5.mp4'

import portrait1 from '../assets/images/about-us_Gaurav-Kumar.jpg'
import portrait2 from '../assets/images/about-us_Sankalp.jpg'
import portrait3 from '../assets/images/about-us_Gaurav-Verma.jpg'
import portrait4 from '../assets/images/about-us_Love.jpg'
import portrait5 from '../assets/images/about-us_Bharat.jpg'
import portrait6 from '../assets/images/about-us_Hariraj.jpg'
import portrait7 from '../assets/images/about-us_Deepak.jpg'
import portrait8 from '../assets/images/about-us_Neha.jpg'

export const caseStudies = [


  // ++++++ 1 ++++
  {
    slug: 'autonomous-field-intelligence-rexall',
    coverImg: imgRexallFieldSales,
    coverVideo: csVideo1,
    coverTagline: 'AUTONOMOUS FIELD INTELLIGENCE',
    coverSubheadline: 'Redefining Field Sales For Rexall',
    meta: {
      sector: 'PHARMA & HEALTHCARE',
      company: 'REXALL',
      service: 'PHARMA',
      offering: 'AGENTIC AI & DATA INTELLIGENCE',
    },
    challenge: {
      title: 'The 3-Month Information Gap In Field Sales',
      description: 'Rexall relied on a large field force of sales representatives to build relationships with Health Care Professionals, but the organization was hampered by a traditional, reactive approach to performance management. Sales and visit data were collected and analyzed manually on a quarterly basis, meaning insights reached managers only after the quarter had ended. This 3-month lag led to missed opportunities, an inability to make mid-quarter course corrections, and an over-reliance on habit-based targeting rather than data-driven strategies.',
    },
    solution: {
      title: 'A GenAI-Powered Platform For Autonomous Field Intelligence',
      description: 'THOTNR designed and built an end-to-end Agentic AI platform that transformed Rexall’s siloed data into a real-time decision engine. By ingesting sales transactions, HCP visit data, and territory information into a Snowflake data lake, we established a centralized, live intelligence asset. An AWS-based Agentic AI platform, powered by a Python-driven analytics engine, orchestrates autonomous agents that continuously perform bell-curve segmentation, pattern detection, and performance scoring. A GenAI recommendation engine translates these complex insights into actionable, plain-language strategies, providing every representative with personalized weekly visit plans and high-value targeting lists.',
    },
    outcome: {
      title: 'What We Accomplished',
      description: 'FROM QUARTERLY TO FORTNIGHTLY INTELLIGENCE\n• Compressed the sales insight cycle from 3 months to 7–15 days, turning historical records into live intelligence.\n• Replaced manual, subjective analysis with AI-powered, continuous performance segmentation.\n• Activated AI-powered field coaching, providing every representative with a data-backed strategy for their specific territory.\n• Enabled smarter HCP targeting by automatically identifying and prioritizing high-potential professionals.\n• Implemented early risk detection, flagging performance declines weeks before they impacted quarterly targets.\n• Deployed autonomous opportunity discovery, allowing AI agents to surface untapped territories and new market potential.',
    },
    clientSpeak: {
      quote: 'For years, our field strategy was reactive — we made decisions in Month 4 based on what happened in Month 1. THOTNR didn\'t just speed up our analytics; they rebuilt the way our field force operates. Our reps now walk in with AI-backed plans, our managers see risks before they hit the numbers, and we\'re discovering opportunities we didn\'t even know existed. THOTNR turned three months of dead data into a living intelligence engine.',
      name: 'To Be Provided',
      role: 'To Be Provided',
      company: 'REXALL',
      image: portrait2,
    },
    cta: {
      headline: 'AI That Belongs in Clinical Environments',
      description: 'We build healthcare AI that meets the standards of patient safety, clinical governance, and real-world performance.',
      buttonText: 'Talk to Our Team',
    },
  },
  {
    slug: 'ai-powered-insurance-intelligence',
    coverImg: imgInsuranceIntelligence,
    coverVideo: csVideo2,
    coverTagline: 'AI-POWERED INSURANCE INTELLIGENCE',
    coverSubheadline: 'Reimagining Claims With Agentic AI',
    meta: {
      sector: 'INSURANCE & FINANCIAL SERVICES',
      company: '[CLIENT NAME]',
      service: 'AI & DATA ENGINEERING',
      offering: 'AGENTIC AI & AUTOMATION',
    },
    challenge: {
      title: 'Manual Claims Processing & Reactive Fraud Detection',
      description: 'The client, a leading insurer across Life and short-term lines, struggled with a manual, siloed, and reactive claims journey. Only 18% of claims were processed without human intervention, while motor assessments took up to five days. Rigid, rule-based fraud checks only flagged issues post-payment, and valuable revenue intelligence remained trapped in dark data. The operation required a unified, AI-powered decision layer to automate clean cases, detect fraud syndicates pre-payment, and unlock cross-sell opportunities.',
    },
    solution: {
      title: 'An End-To-End Agentic AI Platform For Insurance Operations',
      description: 'THOTNR deployed an enterprise-grade Agentic AI platform built on Azure AI Foundry, unifying disparate data sources into a single intelligence layer. We replaced legacy OCR with advanced Document Intelligence and utilized Semantic Kernel for real-time fraud network graph analysis and lead propensity scoring. Four autonomous agents—Document Intake, Fraud Network, Claims Decision, and Revenue & Lead—were orchestrated to handle the claims loop, supported by a WhatsApp concierge for end-to-end FNOL-to-assessment workflows. The solution was delivered through a phased rollout, ensuring full compliance with POPIA, GDPR, and regional regulatory standards.',
    },
    outcome: {
      title: 'What We Accomplished',
      description: 'CLAIMS STP LIFTED FROM 18% TO 44%\n• Lifted claims Straight-Through-Processing (STP) from 18% to 44%, significantly increasing efficiency.\n• Reduced motor assessment turnaround time by 3 working days via WhatsApp-led workflows.\n• Achieved cost savings of R285 per motor assessment by optimizing workflow prioritization.\n• Surfaced fraud syndicates pre-payment using ML-driven network graph analysis.\n• Deployed over 10 AI use cases into production across Life and Insure divisions.\n• Transformed dark data into a live revenue asset through real-time lead and broker intelligence.',
    },
    clientSpeak: {
      quote: 'We came to THOTNR with a claims operation built on manual triage and reactive fraud detection. What we got back was a live, AI-powered decision engine. STP more than doubled, fraud syndicates are caught before payment, and our claims teams are finally focused on what matters — complex cases and customer outcomes. THOTNR didn\'t just deliver technology; they reshaped how we do insurance.',
      name: 'To Be Provided',
      role: 'To Be Provided',
      company: '[CLIENT NAME]',
      image: portrait2,
    },
    cta: {
      headline: 'AI That Belongs in Clinical Environments',
      description: 'We build healthcare AI that meets the standards of patient safety, clinical governance, and real-world performance.',
      buttonText: 'Talk to Our Team',
    },
  },
  {
    slug: 'enterprise-ai-architecture-governance',
    coverImg: imgEnterpriseAI,
    coverVideo: csVideo3,
    coverTagline: 'AI ARCHITECTURE AND GOVERNANCE',
    coverSubheadline: 'Enterprise Architecting AI For Hollard',
    meta: {
      sector: 'INSURANCE & FINANCIAL SERVICES',
      company: 'HOLLARD',
      service: 'ENTERPRISE AI ARCHITECTURE',
      offering: 'AI FOUNDATION & GOVERNANCE',
    },
    challenge: {
      title: 'Building A Secure, Compliant & Scalable AI Foundation Across The Enterprise',
      description: 'As one of South Africa’s largest privately-owned insurance groups, Hollard faced the challenge of scaling AI adoption across diverse business divisions with unique regulatory and technical needs. Without a unified architectural backbone, AI initiatives risked fragmentation, inconsistent security guardrails, and exposure to risks like hallucinations, data leakage, and compliance failures. Hollard required an enterprise-grade AI foundation that could balance cloud agility with on-premise security while providing a strategy for safely extending AI capabilities to brokers and partners.',
    },
    solution: {
      title: 'An End-To-End AI Foundation, Governed By Design',
      description: 'THOTNR established a comprehensive AI Reference Architecture on an enterprise cloud landing zone, covering core capabilities such as Agentic AI, document understanding, and computer vision. We implemented a dedicated AI Security Reference Architecture built on Responsible AI standards, featuring LLM firewalls, prompt shielding, and adversarial testing. We codified Enterprise Architecture Principles and structured governance forums to oversee AI initiatives, while delivering an AI Hosting Decision Matrix to guide cloud-vs-on-prem deployments based on compliance and cost requirements. This foundation is further supported by proactive monitoring to control token-driven spend and a secure integration strategy for ecosystem partners.',
    },
    outcome: {
      title: 'What We Accomplished',
      description: 'A SECURE, GOVERNED & SCALABLE AI FOUNDATION FOR THE ENTERPRISE\n• Established comprehensive Enterprise Architecture Principles for AI, codifying data governance, ownership, and accountability.\n• Delivered full AI and AI Security Reference Architectures aligned with global standards and regional regulations.\n• Operationalized structured AI governance forums as a unified review and approval gateway for all business divisions.\n• Built an AI Hosting Decision Matrix for informed cloud, on-premise, or edge technology choices.\n• Deployed policy-driven governance with proactive usage and risk monitoring to prevent security drift and cost spikes.\n• Designed a forward-looking integration strategy to securely extend AI capabilities to brokers and ecosystem partners.\n• Activated a portfolio of AI initiatives across enterprise architecture, IT operations, and security domains.',
    },
    clientSpeak: {
      quote: 'Adopting AI at enterprise scale isn\'t a tooling decision — it\'s an architecture, security, and governance decision. THOTNR didn\'t just hand us a reference diagram; they helped us build the AI Foundation our group runs on. From the architectural principles and security framework to the governance forums and integration strategy, every business division now has a clear, compliant path to AI. They\'ve made responsible AI adoption a reality, not an aspiration.',
      name: 'To Be Provided',
      role: 'To Be Provided',
      company: 'HOLLARD',
      image: portrait2,
    },
    cta: {
      headline: 'AI That Belongs in Clinical Environments',
      description: 'We build healthcare AI that meets the standards of patient safety, clinical governance, and real-world performance.',
      buttonText: 'Talk to Our Team',
    },
  },
  {
    slug: 'agentic-ai-for-digital-lending',
    coverImg: imgAgenticAI,
    coverVideo: csVideo4,
    coverTagline: 'AGENTIC AI FOR DIGITAL LENDING',
    coverSubheadline: 'Reimagining Engagement For Creditas',
    meta: {
      sector: 'FINTECH & DIGITAL LENDING',
      company: 'CREDITAS',
      service: 'AGENTIC AI & CONVERSATIONAL AUTOMATION',
      offering: 'AI-POWERED CUSTOMER ENGAGEMENT',
    },
    challenge: {
      title: 'Fragmented Customer Journeys & Heavy Agent Dependency Across Acquisition And Collections',
      description: 'Creditas operated multiple web applications spanning the full customer lifecycle, from acquisition to collections. While well-built, these touchpoints demanded heavy live-agent intervention for guidance and routine actions. Customer journeys were fragmented and reactive, leading to missed personalized offers and high drop-off rates. Furthermore, the help desk was overwhelmed by repetitive queries—such as policy clarifications and status checks—bottlenecking human capacity and driving up costs. THOTNR was engaged to embed an Agentic AI capability capable of understanding user intent in real-time, executing platform operations, and resolving queries autonomously.',
    },
    solution: {
      title: 'An Embedded Agentic AI Layer Powered By RAG, MCP & Autonomous Orchestration',
      description: 'THOTNR deployed a journey-aware agentic platform that continuously monitors user behavior and product signals. A Retrieval-Augmented Generation (RAG) layer, built on Creditas’s internal knowledge base, ensures grounded, accurate responses with near-zero hallucinations. Through a Model Context Protocol (MCP) layer, the agent securely invokes real-time platform functions, allowing it to initiate payments, fetch account data, and execute bookings conversationally. We orchestrated multiple agents—Journey Intelligence, Conversational Operations, and Help Desk—within a detect-recommend-act-learn loop, all while maintaining strict guardrails and human-in-the-loop checkpoints for compliance.',
    },
    outcome: {
      title: 'What We Accomplished',
      description: '60%+ REDUCTION IN AGENT HAND-OFFS\n• Reduced live-agent hand-offs by over 60%, allowing human teams to focus on high-value cases.\n• Lifted offer conversion rates by 25–30% through context-rich, intent-driven personalization.\n• Cut average query resolution time to under 30 seconds via real-time agentic action.\n• Achieved 80%+ first-contact resolution on help-desk queries using the RAG-grounded knowledge layer.\n• Automated 70%+ of routine platform operations, including booking flows and payment initiation, through MCP.\n• Embedded a scalable agentic foundation across the full customer lifecycle, transforming static interfaces into intelligent conversational experiences.',
    },
    clientSpeak: {
      quote: 'We came to THOTNR with a clear problem — our web platforms were generating great traffic, but every meaningful interaction still depended on a human agent. THOTNR didn\'t build us a chatbot; they built us an agentic layer that reads our customers, answers their questions, and executes our platform operations end-to-end. Acquisition is more personalised, collections is more efficient, and our agents finally focus on the cases that need them. The shift has been transformational.',
      name: 'To Be Provided',
      role: 'To Be Provided',
      company: 'CREDITAS',
      image: portrait2,
    },
    cta: {
      headline: 'AI That Belongs in Clinical Environments',
      description: 'We build healthcare AI that meets the standards of patient safety, clinical governance, and real-world performance.',
      buttonText: 'Talk to Our Team',
    },
  },
  {
    slug: 'ai-powered-hospitality-automation',
    coverImg: imgAIPowered,
    coverVideo: csVideo5,
    coverTagline: 'AI-POWERED HOSPITALITY AUTOMATION',
    coverSubheadline: 'Reimagining Support For Djubo',
    meta: {
      sector: 'HOSPITALITY & TRAVEL TECH',
      company: 'DJUBO',
      service: 'AI/ML & CONVERSATIONAL AUTOMATION',
      offering: 'CHATBOT DESIGN & DEVELOPMENT',
    },
    challenge: {
      title: 'Scaling Hotelier Support Across A Fast-Growing, Multi-Product Hospitality Platform',
      description: 'Djubo, a leading cloud-based hospitality suite trusted by 2,500+ hotels across 19 countries, faced significant support challenges due to its platform breadth. Hoteliers needed accurate, contextual guidance across diverse modules like Property Management, Channel Management, and Revenue Management. Traditional FAQ pages were insufficient, leading to support team bottlenecks, rising costs, and slow resolution for repetitive queries. Djubo engaged THOTNR to build an AI/ML-powered chatbot to understand intent, automate routine workflows, and free human agents to focus on complex, high-value cases.',
    },
    solution: {
      title: 'An End-To-End AI/ML Chatbot Built On Conversational NLP, RAG & Deep Platform Integration',
      description: 'THOTNR managed the chatbot program end-to-end, from conversational design and intent modeling to NLP engineering and system deployment. We created a hospitality-aware assistant using a robust intent and entity framework tailored to hotelier workflows. A Retrieval-Augmented Generation (RAG) layer was implemented, grounding the bot in Djubo’s own product documentation and knowledge base to ensure accuracy. Deeply integrated into the web and mobile platform, the solution was refined through iterative testing to serve both first-time users and experienced operators.',
    },
    outcome: {
      title: 'What We Accomplished',
      description: 'AUTOMATED HOTELIER SUPPORT, AT SCALE\n• Delivered an end-to-end AI/ML-powered chatbot designed, developed, integrated, and deployed across the Djubo platform.\n• Improved automation across hotelier support workflows, deflecting routine queries and accelerating resolution.\n• Lifted response accuracy through a RAG-grounded knowledge layer trained on Djubo’s product documentation.\n• Enhanced the customer experience for 2,500+ hotels across 19 countries with 24/7 instant, contextual answers.\n• Built a scalable foundation capable of expanding into new product modules, languages, and use cases.\n• Established a delivery partnership marked by clear communication, on-time execution, and sustained post-launch improvement.',
    },
    clientSpeak: {
      quote: 'Managing Quality is top priority for an e-Commerce site, an issue in production for any reason means loss of business. When we met THOTNR we were looking for testers, but we got a lot more. THOTNR has been a team of dedicated QE professionals who not only took care of testing but assured us that what was being shipped out was high quality each time every time. These individuals went above the call of duty and managed 3rd parties, ensured business needs were met. They were QE, Product Management and Production Support all rolled into one. We may need to rewrite the book on QE.',
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
    slug: 'product-engineer',
    coverImg: prodcutEngineer,
    coverTagline: 'Product Engineering',
    coverSubheadline: 'Engine For FINTECH StartUp',
    meta: {
      sector: 'Finance & Banking',
      company: 'Creditas Solutions',
      service: 'Delinquent Account Processing',
      offering: 'Development Services',
    },
    challenge: {
      title: 'Developing Financial Technology',
      description: 'Creditas was an idea that found ignition in an IIT incubation cell. Helping lenders optimize their collection and recovery performance. The minds behind the product we non-techies, and that is where they need a technically sound thought partner! Their original prototype was lagging in catching up with the growth of Creditas, slowing down progress with problems in scaling, poor quality code etc. They sought solutions that matched their speed. THOTNR identified the scope to adjust, modify and help adapt to the trending pace of technology.',
    },
    solution: {
      title: 'Enable a TECH Team So That The Core Focus Remained On Business',
      description: 'THOTNR offered an initial team comprising of an architect, a back-end, and a front-end developer. This small team took over the existing platform by both supporting the existing php application and also starting to build the next-generation platform as a set of cloud native services. High-quality practices were put in place such as – Micro Services, DevOps, Cloud Native architecture etc. This led to predictable high-quality applications that allowed the business to grow 400% every month',
    },
    outcome: {
      title: 'What We Accomplished',
      description: 'Loan decision time dropped from 3–5 days to under 4 hours. Portfolio default rates improved by 18% in the first two quarters as the model captured risk signals the legacy rules had missed. Operational capacity scaled without adding headcount, and the bank launched a fully digital SME lending product within six months of go-live.',
    },
    clientSpeak: {
      quote: 'They say software projects are over budget and usually fail. As a founder of an organization, ours almost did, until THOTNR came to the rescue. Vendors shortsightedly think of their business before ours. Ritualistically under-quoting projects to win them and then be gone by the way of the dodo, when things get tough. Under-quoting means they do not have competent staff. The THOTNR team is a breath of fresh air in this convoluted environment. Their rates, not the lowest, are fair. They have a talented team that has our interests first in their mind. With us, they work in a staff augmentation mode out of our space. They have completely assimilated our IT process and let us focus on business. This is what we want, focus on what we are good at while they take care of our backbone. | wish all success to THOTNR and have no hesitation in recommending them to anyone looking for a high-quality IT services partner.',
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
    slug: 'redefining-qualify-for-nykaa',
    coverImg: imgNykaa,
    coverTagline: 'Redefining Quality For Nykaa',
    coverSubheadline: 'seller portal quality engineering',
    meta: {
      sector: 'Fashion & Beauty',
      company: 'NYKAA',
      service: 'E-COMMERCE',
      offering: 'Quality Assurance',
    },
    challenge: {
      title: 'Skilled Manpower & Quality Engineering Processes',
      description: 'With exponential growth as one of the leading online first platform, efficient skilled resource and high-quality delivery was the key challenge. When the leading cosmetic e-retail brand grew, blooming into the offline space they required a solid landing. Process optimization that took care of critical auxiliary functions such as vendors, and logistics that need equal dedication for the best results. THOTNR identifies a tweak to the QE systems that required experienced support that could debug issues, developer support, analysis, engagement, and inputs from internal stakeholders that would eventually cease the slippage of releases. The crux was to ensure timely launches within the system to stay abreast with competition in type as well as technology.',
    },
    solution: {
      title: 'Multidisciplinary QE Professionals For Improved Processes',
      description: 'THOTNR deployed a team of QE engineers that had built-in elasticity. A team of highly skilled individuals grew as NYKAA grew. QE typically spotlights the business and not the technology, we understood the diverse landscape of Nykaa’s recognized product and technology needs and deployed multidisciplinary QE professionals, who tested the web and mobile applications considering the business requirement. This approach led to a small team leading the effort of the entire QE process. With THOTNR, QUALITY was preserved with Practiced Automation & Quality Engineering.',
    },
    outcome: {
      title: 'What We Accomplished',
      description: 'ZERO DEFECTS RELEASE\nSuccessfully delivering zero defect production releasing staggered Ownership and Production, now owned by THOTNR. Going beyond expectations with QE, we helped develop in debugging with support from log analysis. Preserving quality by bringing in practices of Automation as part of CI/CD+ on production. Engaging with stakeholders to ensure all asks were met for an assured release in sign-off.',
    },
    clientSpeak: {
      quote: 'Managing Quality is top priority for an e-Commerce site, an issue in production for any reason means loss of business. When we met THOTNR we were looking for testers, but we got a lot more. THOTNR has been a team of dedicated QE professionals who not only took care of testing but assured us that what was being shipped out was high quality each time every time. These individuals went above the call of duty and managed 3rd parties, ensured business needs were met. They were QE, Product Management and Production Support all rolled into one. We may need to rewrite the book on QE.',
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
  slug: 'serverless-computing',
  coverImg: imgLambda,
  coverTagline: 'Serverless Computing',
  coverSubheadline: 'Cloud Native Lambda Architecture',
  meta: {
    sector: 'Banking',
    company: 'Creditas',
    service: 'Cloud',
    offering: 'Serverless Computing',
  },
  challenge: {
    title: 'Scaling a Cost-Conscious Java Application Beyond Traditional Infrastructure',
    description: 'Creditas had a huge investment in AWS infrastructure. As a startup they had been cost-conscious and pragmatic about technology selection — leading to a traditional Java application with cache and a database. As the application grew, the appetite to experiment also increased. Opportunities were discovered to build the next set of applications as Spring Boot microservices. While the logical architecture was microservices, the hosting and physical application structure was up for debate. A critical architecture decision was agreed upon: whatever technique was used, it must be deployable on traditional EC2 machines in case the solution failed.',
  },
  solution: {
    title: 'AWS Lambda with Spring Boot — Pay Per Request Without Vendor Lock-In',
    description: 'The customer wanted to reap the benefit of pay-per-request while ensuring code remained deployable on standard EC2 instances and Lambda assuming an underlying JVM. During development, the Spring Boot Lambda adapter was not yet available. A solution called Lambada allowed writing a traditional Spring Boot application and hosting it in AWS Lambda. Solutions were built for cold start and throttling of requests. A critical benefit emerged — write connections to the database were only opened if the request was not a GET. GET requests were routed to read replicas of the DB, providing significant performance gain.',
  },
  outcome: {
    title: 'Dramatic Cost Reduction with Zero Vendor Lock-In',
    description: 'Costs were dramatically reduced and there was no vendor lock-in. As confidence in the technology increased, adapters to AWS Lambda were adopted across other programming languages going forward. The success of this first Lambda engagement established a pattern — cloud native solutions designed with lock-in possibility in mind, always deployable on traditional infrastructure as a fallback, exploiting the full benefit of serverless while preserving architectural freedom.',
  },
  clientSpeak: {
    quote: 'Cloud native technologies are lucrative but can lead to vendor lock-ins which can be more expensive than traditional vendor lock-in for products — because your entire infrastructure is controlled. Cloud native solution designs should always be done with this lock-in possibility in mind to exploit the full benefit of the solution.',
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
    slug: 'cloud-migration',
    coverImg: imgCloud,
    coverTagline: 'Cloud Migration – Anglo American',
    coverSubheadline: 'Seamless migration from On-Premise to Microsoft Azure',
    meta: {
      sector: 'Mining',
      company: 'Anglo American',
      service: 'Precious Gems',
      offering: 'Cloud Migration',
    },
    challenge: {
      title: 'Overcoming Connectivity and Infrastructure Limitations',
      description: 'Anglo American, a major mining group, faced significant challenges in transitioning from traditional data centers to the cloud. Historically, limited network connectivity at mine sites and remote offices made cloud-based solutions impractical. Additionally, the company relied on numerous home-grown applications with extensive historical modifications, and their internal IT staff lacked specialized training in cloud technologies. The core challenge was to design a migration strategy that addressed these constraints while achieving business goals like cost efficiency and centralized management.',
    },
    solution: {
      title: 'Strategic Lift-and-Shift with Infrastructure as Code',
      description: 'THOTNR recommended a "lift-and-shift" migration strategy to minimize application disruption and training requirements, while selectively enabling cloud-native services like managed databases, monitoring, and alerts. We meticulously mapped the existing data center infrastructure, including machines, OS patch levels, and DNS settings. To ensure consistency and reproducibility, we provisioned the environment using Terraform (Infrastructure as Code) and managed configurations with Ansible, allowing the organization to replicate infrastructure on demand.',
    },
    outcome: {
      title: 'Achieving Efficiency and Scalability',
      description: 'Through this strategic migration, Anglo American successfully moved scores of applications to the cloud, resulting in a 30% reduction in Total Cost of Ownership (TCO) and a 70% reduction in required team size. We established a clear cloud migration roadmap, defined cloud-native architecture guidelines tailored to their landscape, and guided their teams through successful pilot migrations. Today, the customer has a scaled, empowered team driving their migration strategy, with THOTNR continuing as a strategic architectural partner.',
    },
    clientSpeak: {
      quote: 'Managing Quality is top priority for an e-Commerce site, an issue in production for any reason means loss of business. When we met THOTNR we were looking for testers, but we got a lot more. THOTNR has been a team of dedicated QE professionals who not only took care of testing but assured us that what was being shipped out was high quality each time every time. These individuals went above the call of duty and managed 3rd parties, ensured business needs were met. They were QE, Product Management and Production Support all rolled into one. We may need to rewrite the book on QE.',
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
    slug: 'enterprise-architecture',
    coverImg: imgEnterprise,
    coverTagline: 'Enterprise Architecture',
    coverSubheadline: 'Steering Automation',
    meta: {
      sector: 'Banking',
      company: 'Standard Bank',
      service: 'BSFI',
      offering: 'Architecture Consulting',
    },
    challenge: {
      title: 'Unblocking Bottlenecks To Speed Growth',
      description: 'Standard Bank relied on a homegrown enterprise bus as the central integration backbone for all banking services, including ATMs and online banking. This system had grown organically through various acquisitions and mergers, leading to significant performance fluctuations. The reliance on expensive Hot-Hot Disaster Recovery (DR) sites further complicated the operational efficiency and scalability of this critical infrastructure.',
    },
    solution: {
      title: 'Architectural Analysis and Blueprint Modernization',
      description: 'THOTNR conducted a comprehensive as-is analysis of the existing system, culminating in a detailed current-state diagram of the enterprise bus. By applying standard architectural practices and identifying critical gaps, we developed and deployed a robust blueprint for a new integration architecture. This strategy was implemented for both the bank and its external vendors to ensure seamless and efficient communication across the ecosystem.',
    },
    outcome: {
      title: 'What We Accomplished',
      description: 'We achieved significant architecture simplification by reducing the number of connection points and moving toward a handful of highly robust components. Our team defined and standardized integration patterns as a problem-solution pair, identified the absence of essential monitoring tools, and recommended a clear retirement path for obscure and legacy technologies.',
    },
    clientSpeak: {
      quote: 'Managing Quality is top priority for an e-Commerce site, an issue in production for any reason means loss of business. When we met THOTNR we were looking for testers, but we got a lot more. THOTNR has been a team of dedicated QE professionals who not only took care of testing but assured us that what was being shipped out was high quality each time every time. These individuals went above the call of duty and managed 3rd parties, ensured business needs were met. They were QE, Product Management and Production Support all rolled into one. We may need to rewrite the book on QE.',
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
    slug: 'zs',
    coverImg: imgWeb,
    coverTagline: 'ZS',
    coverSubheadline: 'Disruption By Innovation',
    meta: {
      sector: 'Healthcare',
      company: 'ZS',
      service: 'Pharma Sales Force Consulting',
      offering: 'Architecture Consulting',
    },
    challenge: {
      title: 'Amping Up Tech At ZS',
      description: 'ZS, a prominent pharma consulting team, possessed deep domain expertise but required support to align their technology systems with a long-term strategic vision. While they were experienced in large-scale initiatives and delivering value through AI and ML, they needed to build a robust foundation. Specifically, they required a scalable backend infrastructure and effective mobile-based delivery channels to support their business growth, both currently and in the future.',
    },
    solution: {
      title: 'Architecting The Force Of Sales',
      description: 'THOTNR deployed a team of seasoned architects specialized in both OLTP (Online Transactional Processing) and OLAP (Online Analytical Processing) applications. We conducted a thorough assessment to identify, map, and propose a comprehensive long-term architectural solution. To accelerate development and project delivery, we mentored the existing team and integrated additional niche technology capabilities to strengthen their technical foundation.',
    },
    outcome: {
      title: 'What We Accomplished',
      description: 'We provided high-level architecture consulting that served as the bedrock for their future initiatives. By defining and implementing rigorous architecture practices and providing expert mentorship, we empowered the ZS team to manage complex technical initiatives independently. This collaboration ensured that their technical roadmap was effectively supported by the right processes and expert guidance.',
    },
    clientSpeak: {
      quote: 'Managing Quality is top priority for an e-Commerce site, an issue in production for any reason means loss of business. When we met THOTNR we were looking for testers, but we got a lot more. THOTNR has been a team of dedicated QE professionals who not only took care of testing but assured us that what was being shipped out was high quality each time every time. These individuals went above the call of duty and managed 3rd parties, ensured business needs were met. They were QE, Product Management and Production Support all rolled into one. We may need to rewrite the book on QE.',
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
    slug: 'tata-motor-automobile',
    coverImg: imgTata,
    coverTagline: 'Tata Motor Automobile',
    coverSubheadline: 'Mobilizing Solutions For Automobiles',
    meta: {
      sector: 'Automotive',
      company: 'Tata Motor International',
      service: 'E-COMMERCE',
      offering: 'L1, L2 & L3 Support',
    },
    challenge: {
      title: 'Leveling Up Legacy Applications',
      description: 'Tata Motors South Africa relied on a custom ERP, Encadia, for spare parts sales, which suffered from a lack of transparency in costing and processing. Their Magento 1x-based eCommerce application was plagued by significant delays, excessive customizations, and high team churn, rendering it unready for customers. The manual workflow caused burnout in the L1 support team, and despite suggestions to move to a 2x platform, the system failed to deliver the required transparency, resulting in poor user adoption due to a lack of documentation.',
    },
    solution: {
      title: 'Rapid Deployment and System Optimization',
      description: 'THOTNR deployed a high-skilled, three-person team of PHP and Magento experts to stabilize and revitalize the platform. Within just 15 days—significantly faster than the anticipated three-month timeline—the team conducted a comprehensive audit, addressed critical issues, and successfully launched the application to production. By identifying and implementing missing best practices, such as proper source control and correct system integrations, we significantly improved the application architecture.',
    },
    outcome: {
      title: 'What We Accomplished',
      description: 'We brought the application to life in record time, resulting in a 200% increase in footfall and a 90% reduction in user abandonment. The project streamlined operations by reducing the support footprint to three L1/L2 members in South Africa and one L3 support expert in India. Furthermore, the $40K USD investment into the new line of business was fully recovered within three months of sales.',
    },
    clientSpeak: {
      quote: 'Managing Quality is top priority for an e-Commerce site, an issue in production for any reason means loss of business. When we met THOTNR we were looking for testers, but we got a lot more. THOTNR has been a team of dedicated QE professionals who not only took care of testing but assured us that what was being shipped out was high quality each time every time. These individuals went above the call of duty and managed 3rd parties, ensured business needs were met. They were QE, Product Management and Production Support all rolled into one. We may need to rewrite the book on QE.',
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
    slug: 'redefining-qualify-for-nykaa',
    coverImg: imgGlytec,
    coverTagline: 'GLYTEC',
    coverSubheadline: 'Advance Technology For Glytec',
    meta: {
      sector: 'Healthcare Solutions',
      company: 'GLYTECH',
      service: 'Digitizing Dosage Of Insulin',
      offering: 'L1, L2 & L3 Support',
    },
    challenge: {
      title: 'Digitizing Diabetes Care',
      description: 'GLYTECH faced critical challenges while developing a customized IoT device for managing diabetes. The project encountered significant technical hurdles related to low-footprint device programming and complex hardware-software interfacing. They required specialized support to scale their IoT programming capabilities, as well as assistance in overcoming broader challenges related to application development and system integration.',
    },
    solution: {
      title: 'Unleashing The Experts',
      description: 'THOTNR deployed a high-impact team of three experts specializing in UI, Android, IoT, and Backend development. Our approach focused on three pillars: designing optimized interface protocols to minimize system glitches; executing a smooth migration of legacy code from PHP to .NET; and migrating all legacy systems to cloud containers to ensure a cost-effective and highly reliable architecture.',
    },
    outcome: {
      title: 'What We Accomplished',
      description: 'We achieved a 30% reduction in cost per release and successfully implemented HIPAA-compliant deployment, significantly reducing costs associated with external audits. We ensured steady code migration aligned with healthcare industry standards, while drastically reducing production bugs and accelerating time-to-market for both the IoT device and the backend infrastructure through the establishment of clear, protocol-driven design practices.',
    },
    clientSpeak: {
      quote: 'Managing Quality is top priority for an e-Commerce site, an issue in production for any reason means loss of business. When we met THOTNR we were looking for testers, but we got a lot more. THOTNR has been a team of dedicated QE professionals who not only took care of testing but assured us that what was being shipped out was high quality each time every time. These individuals went above the call of duty and managed 3rd parties, ensured business needs were met. They were QE, Product Management and Production Support all rolled into one. We may need to rewrite the book on QE.',
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
    slug: 'anglo-american',
    coverImg: imgAmerican,
    coverTagline: 'Anglo American',
    coverSubheadline: 'Engineering Development',
    meta: {
      sector: 'Mining',
      company: 'AngloAmerican',
      service: 'Mining',
      offering: 'Cloud Architecture Consulting',
    },
    challenge: {
      title: 'Inserting Cloud Architecture Into The DNA System',
      description: 'AngloAmerican maintained various mission-critical applications within their existing data center. Given that the integration and implementation of applications in this environment were prohibitively expensive, the company faced an urgent need to transition. The core challenge was that the necessary expertise for modifications and migration toward a cloud-native architecture was absent from the organization’s existing system DNA.',
    },
    solution: {
      title: 'The Seamless Shift To Cloud',
      description: 'THOTNR deployed a specialized team of cloud architects to oversee the transformation. We mapped and analyzed the existing landscape before activating a structured "lift and shift" approach. Our team provided the strategic foundation by defining a comprehensive cloud roadmap, establishing clear migration guidelines, and creating a "golden copy" architectural standard to guide the transition.',
    },
    outcome: {
      title: 'Cloud Architecture & Migration',
      description: 'We successfully migrated scores of applications from the data center to the cloud, resulting in a 30% reduction in Total Cost of Ownership (TCO). Our team guided migration efforts through successful pilot programs, defined the roadmap for future migrations, and established comprehensive cloud migration and cloud-native architecture guidelines tailored specifically to the AngloAmerican technology landscape.',
    },
    clientSpeak: {
      quote: 'Managing Quality is top priority for an e-Commerce site, an issue in production for any reason means loss of business. When we met THOTNR we were looking for testers, but we got a lot more. THOTNR has been a team of dedicated QE professionals who not only took care of testing but assured us that what was being shipped out was high quality each time every time. These individuals went above the call of duty and managed 3rd parties, ensured business needs were met. They were QE, Product Management and Production Support all rolled into one. We may need to rewrite the book on QE.',
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
  }
]
