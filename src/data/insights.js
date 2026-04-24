import imgAiSummit    from '../assets/images/ai-summit.jpg'
import imgUX          from '../assets/images/user-experience.jpg'
import imgSecurity    from '../assets/images/security-risk.jpg'
import imgAI          from '../assets/images/ai.jpg'
import imgAIService   from '../assets/images/ai-service.jpg'
import imgEnterprise  from '../assets/images/enterprise-architect.jpg'
import imgCloud       from '../assets/images/cloud.jpg'
import imgCase1       from '../assets/images/case1.jpg'
import imgCase2       from '../assets/images/case2.jpg'

import authorGauravK  from '../assets/images/about-us_Gaurav-Kumar.jpg'
import authorSankalp  from '../assets/images/about-us_Sankalp.jpg'
import authorGauravV  from '../assets/images/about-us_Gaurav-Verma.jpg'
import authorLove     from '../assets/images/about-us_Love.jpg'
import authorBharat   from '../assets/images/about-us_Bharat.jpg'
import authorHariraj  from '../assets/images/about-us_Hariraj.jpg'
import authorDeepak   from '../assets/images/about-us_Deepak.jpg'
import authorNeha     from '../assets/images/about-us_Neha.jpg'

export const insights = [
  {
    slug: 'why-enterprise-ai-fails',
    coverImg: imgAiSummit,
    tagline: 'Artificial Intelligence',
    subheadline: 'Why Most Enterprise AI Projects Fail Before They Start',
    authorName: 'Gaurav Kumar',
    authorRole: 'CEO, Thotnr',
    authorImage: authorGauravK,
    publishDate: 'March 2025',
    contentBlocks: [
      {
        type: 'intro',
        text: 'The gap between AI ambition and production reality is not a technology problem. It is an organisational one. After working with over 200 enterprises, we have mapped the patterns that separate the projects that scale from the ones that stall — and what leaders can do about it.',
      },
      {
        type: 'paragraph',
        text: 'Every enterprise AI initiative begins with genuine excitement. A board deck promises transformation. A proof of concept surprises everyone in the room. Budget is approved. And then, somewhere between that approval and the eighteen-month mark, the project quietly dies — not because the technology failed, but because the organisation was never ready to absorb it.',
      },
      {
        type: 'heading',
        text: 'The Four Failure Patterns',
      },
      {
        type: 'paragraph',
        text: 'Across our engagements, four patterns appear with near-statistical regularity. The first is the Data Mirage: the assumption that because data exists, it is usable. In practice, most enterprise datasets are fragmented across systems built in different decades, governed by teams with different incentives, and too inconsistent to serve as training input without months of remediation work that nobody budgeted for.',
      },
      {
        type: 'bullets',
        items: [
          'Data Mirage — Confusing data existence with data readiness. Most enterprise datasets require 3–6 months of pipeline and governance work before a single model can be trained.',
          'POC Theatre — Building demos optimised for the boardroom, not for production. Handoffs to engineering teams routinely collapse because the demo was never built to scale.',
          'Organisational Antibodies — The informal resistance of teams whose workflows, headcount decisions, or status would be disrupted by a successful AI deployment.',
          'Missing Model-to-Decision Bridge — Building accurate models that nobody can act on, because the outputs are not embedded into the decisioning workflow where the action happens.',
        ],
      },
      {
        type: 'quote',
        text: 'A model that is 94% accurate but never reaches a decision-maker has zero business value. Precision is not a substitute for deployment.',
        attribution: 'Gaurav Kumar, CEO — Thotnr',
      },
      {
        type: 'heading',
        text: 'What the Successful Ones Do Differently',
      },
      {
        type: 'image_text',
        image: imgCase1,
        imageAlt: 'Enterprise AI deployment',
        imageLeft: false,
        text: 'The organisations that successfully scale AI share one counterintuitive trait: they invest in the boring infrastructure before they invest in the exciting models. Data governance, feature pipelines, monitoring frameworks, and change management programmes are the unglamorous prerequisites that determine whether a model ever reaches production — and stays there.',
      },
      {
        type: 'paragraph',
        text: 'They also treat AI deployment as a product problem, not a project problem. Projects end. Products are operated, iterated, and improved over time. The transition from POC to production is not a technical event — it is a governance event. Who owns the model? Who monitors it? Who decides when it needs retraining? These are the questions that separate enterprises that sustain AI capability from those that perpetually restart.',
      },
      {
        type: 'paragraph',
        text: 'The window for competitive advantage through AI is real, but it is not unlimited. The enterprises that build durable AI capability today will set the pace of their industries for the next decade. The ones still running proof of concepts in 2027 will be playing catch-up against an opponent who never stopped shipping.',
      },
    ],
  },

  {
    slug: 'next-gen-ux',
    coverImg: imgUX,
    tagline: 'Experience Design',
    subheadline: 'The Next Generation User Experience Today',
    authorName: 'Neha Jaiswal',
    authorRole: 'Head of Experience Design',
    authorImage: authorNeha,
    publishDate: 'February 2025',
    contentBlocks: [
      {
        type: 'intro',
        text: 'The computer user interface has perhaps been the most frustrating aspect of technology adoption since the dawn of the computer age. Humans had to adapt to using a computer — and AI is finally reversing that dynamic.',
      },
      {
        type: 'paragraph',
        text: 'For decades, the burden of translation sat entirely with the user. You had to learn the machine\'s language — its menus, its shortcuts, its folder hierarchies, its error codes. The machine did not learn yours. This asymmetry was accepted because there was no alternative. There is now.',
      },
      {
        type: 'heading',
        text: 'From Interfaces to Intentions',
      },
      {
        type: 'paragraph',
        text: 'The shift AI enables is not cosmetic. It is architectural. When an interface can interpret intent — when it can infer what you are trying to accomplish from incomplete or ambiguous input — the entire design contract changes. You no longer design around the constraints of what a system can parse. You design around the mental models of what a human wants to do.',
      },
      {
        type: 'image_text',
        image: imgUX,
        imageAlt: 'Next generation user experience',
        imageLeft: true,
        text: 'In enterprise software, this shift is long overdue. The average knowledge worker switches between over a dozen applications per day, losing roughly 40 minutes to context switching alone. AI-native interfaces can collapse this fragmentation — not by replacing the applications, but by surfacing the right capability from the right system at the right moment, without requiring the user to know which application houses it.',
      },
      {
        type: 'heading',
        text: 'The Design Principles That Actually Matter',
      },
      {
        type: 'bullets',
        items: [
          'Design for interruption recovery, not just task completion. Users are constantly pulled away. Interfaces need to understand where they left off.',
          'Ambient intelligence over explicit commands. The best AI experiences feel inevitable, not instructed.',
          'Transparency about uncertainty. Users trust AI more when it acknowledges what it does not know.',
          'Preserve agency. Intelligent suggestions should accelerate decisions, not remove them.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The next generation of enterprise UX will not be built by designers who know AI — it will be built by designers who understand work. The technology is a new material. The discipline is the same: understand what people are actually trying to do, and make that easier. AI just raised the ceiling on what "easier" can mean.',
      },
    ],
  },

  {
    slug: 'security-risks-web-apps',
    coverImg: imgSecurity,
    tagline: 'Security',
    subheadline: 'Security Risks to Watch Out For in Your Web Application',
    authorName: 'Hariraj Singh',
    authorRole: 'Security Architecture Lead',
    authorImage: authorHariraj,
    publishDate: 'January 2025',
    contentBlocks: [
      {
        type: 'intro',
        text: 'This article deals with the top known vulnerabilities that exist in systems — regularly published as the OWASP Top 10 — from a practitioner\'s point of view. Not the theory. The reality of what these look like when they show up in production code.',
      },
      {
        type: 'paragraph',
        text: 'The OWASP Top 10 has been maintained since 2003. In that time, the specific entries have evolved, but the underlying themes have not: injection, broken authentication, misconfiguration, and inadequate logging persist across every update. This is not because the industry lacks knowledge. It is because the incentive structure of software development consistently deprioritises security until after a breach.',
      },
      {
        type: 'heading',
        text: 'The Vulnerabilities That Still Catch Enterprises Out',
      },
      {
        type: 'bullets',
        items: [
          'Injection flaws — SQL, NoSQL, OS, and LDAP injection remain common because input validation is treated as a feature, not a baseline. Every external input is a potential attack surface.',
          'Broken access control — Vertical privilege escalation (accessing admin endpoints without admin rights) is found in the majority of penetration tests we conduct. Path traversal vulnerabilities are similarly routine.',
          'Security misconfiguration — Cloud infrastructure defaults are rarely hardened. S3 buckets left public, API gateways without rate limiting, debug endpoints left enabled in production.',
          'Cryptographic failures — Using MD5 or SHA-1 for passwords in 2025. Transmitting sensitive data without TLS. Storing secrets in source code.',
          'SSRF (Server-Side Request Forgery) — Particularly dangerous in cloud environments where internal metadata services can be reached from application servers.',
        ],
      },
      {
        type: 'quote',
        text: 'The most dangerous vulnerabilities are not the sophisticated zero-days. They are the well-documented, easily preventable ones that teams knew about and chose to ship anyway.',
        attribution: 'Hariraj Singh, Security Architecture Lead',
      },
      {
        type: 'heading',
        text: 'Building Security In, Not Bolting It On',
      },
      {
        type: 'paragraph',
        text: 'The pattern we consistently see in organisations with strong security postures is that security considerations are embedded in the development lifecycle, not appended at the end. Threat modelling happens during design. Static analysis runs in CI. Penetration testing is scheduled, not reactive. And critically, security findings are tracked with the same rigour as feature bugs — not parked in a separate queue that engineering leadership never sees.',
      },
      {
        type: 'paragraph',
        text: 'If your organisation is not conducting regular penetration tests, not running automated SAST/DAST tooling, and not maintaining an active vulnerability management programme, these are not nice-to-haves. They are foundational practices that the threat landscape now demands. The cost of a breach has never been higher. The cost of prevention has never been lower.',
      },
    ],
  },

  {
    slug: 'postulates-to-ai',
    coverImg: imgAI,
    tagline: 'Artificial Intelligence',
    subheadline: 'Postulates to Artificial Intelligence',
    authorName: 'Sankalp',
    authorRole: 'Principal Research Engineer',
    authorImage: authorSankalp,
    publishDate: 'December 2024',
    contentBlocks: [
      {
        type: 'intro',
        text: 'An introductory discussion on what intelligence actually is, and what it means to call something artificial — the foundations, not the tools.',
      },
      {
        type: 'paragraph',
        text: 'Before we can build artificial intelligence, we must agree on what we mean by intelligence. This turns out to be harder than it sounds. Psychologists, neuroscientists, and computer scientists have each defined it differently — and none of those definitions fully satisfies the others. The disagreement is not academic. It shapes what we build, how we evaluate it, and whether we understand what we have made.',
      },
      {
        type: 'heading',
        text: 'What Intelligence Is Not',
      },
      {
        type: 'paragraph',
        text: 'Intelligence is not the ability to perform a single task with superhuman speed. A calculator outperforms any human at arithmetic. A chess engine outperforms any human at chess. Neither is considered intelligent in any meaningful sense. What these systems lack is not capability — it is generalisation. They cannot transfer what they know to a novel domain, adapt to a rule change they were not trained on, or reason about their own reasoning.',
      },
      {
        type: 'quote',
        text: 'A large language model that can pass a bar exam cannot tell you whether it has understood the question or merely pattern-matched to a plausible answer. That distinction matters enormously.',
      },
      {
        type: 'heading',
        text: 'The Three Postulates',
      },
      {
        type: 'bullets',
        items: [
          'Intelligence is relational, not absolute. It only makes sense to speak of intelligence in relation to a domain, a context, and a standard of performance. There is no intelligence in the abstract.',
          'Intelligence requires the capacity for error. A system that cannot be wrong in a domain it operates in is not exhibiting intelligence — it is executing a lookup. The possibility of being wrong is what makes reasoning meaningful.',
          'Intelligence is observable only through behaviour. We cannot inspect intelligence directly. We infer it from how a system responds to novel, ambiguous, or adversarial inputs — not from its performance on benchmarks designed by its own creators.',
        ],
      },
      {
        type: 'paragraph',
        text: 'These postulates do not resolve the debate about whether current AI systems are truly intelligent. They do help clarify the debate. When someone claims that GPT-5 or a future model "is intelligent," they are making a claim about generalisation, error-capacity, and observable behaviour — not about benchmark scores or parameter count. Holding that line, in both research and practice, keeps us honest about what we have built and what remains to be done.',
      },
    ],
  },

  {
    slug: 'ai-ready-organisation',
    coverImg: imgAIService,
    tagline: 'AI Strategy',
    subheadline: 'Building an AI-Ready Organisation',
    authorName: 'Gaurav Kumar',
    authorRole: 'CEO, Thotnr',
    authorImage: authorGauravK,
    publishDate: 'November 2024',
    contentBlocks: [
      {
        type: 'intro',
        text: 'The operating muscle companies need to absorb AI capability is not built overnight. Here is how leading enterprises are developing it deliberately — and what the laggards are getting wrong.',
      },
      {
        type: 'paragraph',
        text: 'AI readiness is not a technical condition. It is an organisational one. The enterprises that consistently extract value from AI investments share a set of structural and cultural characteristics that precede any specific technology deployment. These characteristics are not outcomes of AI adoption — they are preconditions for it.',
      },
      {
        type: 'heading',
        text: 'The Five Dimensions of AI Readiness',
      },
      {
        type: 'bullets',
        items: [
          'Data Infrastructure — Not just data warehouses, but governed, accessible, well-documented datasets that teams can actually use for model training without months of remediation.',
          'Decision Architecture — Explicit mapping of which business decisions should be augmented or automated by AI, with clear ownership and feedback loops.',
          'AI Literacy — A baseline of conceptual understanding across leadership and middle management, sufficient to evaluate AI proposals, interpret outputs, and spot the hallmarks of a flawed deployment.',
          'Talent and Partnerships — A realistic model for building vs. buying AI capability, with partnerships that transfer knowledge rather than creating permanent dependency.',
          'Ethics and Governance — Frameworks for evaluating AI outputs for bias, fairness, and regulatory compliance before deployment — not as an afterthought.',
        ],
      },
      {
        type: 'image_text',
        image: imgAIService,
        imageAlt: 'Building AI capability',
        imageLeft: true,
        text: 'Most organisations have made progress on the technical dimensions of readiness — they have data lakes, they have hired data scientists, they have run proof of concepts. The gap is almost always on the governance and decision architecture dimensions. Who in the organisation owns the responsibility for ensuring that AI outputs are correct? Who reviews model performance over time? The absence of clear answers to these questions is what transforms promising AI initiatives into liability.',
      },
      {
        type: 'quote',
        text: 'AI readiness is not the presence of a data science team. It is the presence of a system for converting data science outputs into better business decisions.',
      },
      {
        type: 'paragraph',
        text: 'Building AI readiness is a two- to three-year programme, not a quarter initiative. It requires sustained investment in infrastructure, people, and process — and it requires executive sponsors who understand that the payoff is not a single project, but a compounding organisational capability. The enterprises making this investment now will be structurally advantaged in every market they compete in for the next decade.',
      },
    ],
  },

  {
    slug: 'cost-of-legacy-architecture',
    coverImg: imgEnterprise,
    tagline: 'Enterprise Architecture',
    subheadline: 'The True Cost of Legacy Architecture',
    authorName: 'Gaurav Verma',
    authorRole: 'Enterprise Architecture Lead',
    authorImage: authorGauravV,
    publishDate: 'October 2024',
    contentBlocks: [
      {
        type: 'intro',
        text: 'Technical debt is not just a developer\'s problem. It is a strategic liability that compounds — blocking AI adoption, slowing delivery, and inflating operating cost every quarter it stays.',
      },
      {
        type: 'paragraph',
        text: 'The term "technical debt" was coined by Ward Cunningham in 1992 as a metaphor for the accumulated cost of shortcuts taken in software development. Thirty years later, most enterprises are not paying interest on that debt — they are drowning in it. Systems built in the 1990s are running core operations in banking, insurance, logistics, and healthcare. The cost of keeping them alive now exceeds the cost of replacing them, but the risk of replacement is perceived as too high to approve.',
      },
      {
        type: 'heading',
        text: 'The Hidden Accounting',
      },
      {
        type: 'bullets',
        items: [
          'Velocity tax — Legacy architectures impose a consistent overhead on every delivery. New features require understanding systems nobody documented and nobody from the original team is still around to explain.',
          'AI blockade — Modern AI and analytics capabilities require clean, accessible, well-structured data. Legacy systems produce exactly the opposite. The enterprise that cannot modernise its architecture cannot adopt AI at scale.',
          'Integration debt — Each point-to-point integration between legacy systems adds another potential failure mode, another team responsible for another part of the mesh, another budget line that cannot be redirected.',
          'Talent cost — Engineers with skills in COBOL, legacy ERP platforms, and mainframe administration command premium rates, retire, and do not get replaced. The knowledge walks out the door.',
        ],
      },
      {
        type: 'quote',
        text: 'We have seen organisations spend more maintaining a legacy system in a single year than a full modernisation programme would have cost. The status quo is not safe — it is just the risk you are used to.',
        attribution: 'Gaurav Verma, Enterprise Architecture Lead',
      },
      {
        type: 'heading',
        text: 'The Path Forward Is Not a Big Bang',
      },
      {
        type: 'paragraph',
        text: 'The failure mode most enterprises fear — the multi-year, over-budget "rip and replace" — is real, but it is a failure of approach, not of intent. Architecture modernisation done well is incremental. It uses techniques like the strangler fig pattern, domain-driven decomposition, and capability-based roadmapping to extract value from legacy systems while systematically reducing dependence on them. The goal is not a single transformation event. It is a sustained reduction in architectural drag, pursued with the same rigour as any other strategic investment.',
      },
      {
        type: 'paragraph',
        text: 'The enterprises that are winning the next decade are not the ones with the largest AI budgets. They are the ones with architectures capable of absorbing AI capability as it matures. That capability does not arrive fully formed — it is built, quarter by quarter, by organisations that chose to invest in their foundations while their competitors were still debating whether to start.',
      },
    ],
  },

  {
    slug: 'cloud-migration-regret',
    coverImg: imgCloud,
    tagline: 'Cloud',
    subheadline: 'Cloud Migration Without the Regret',
    authorName: 'Bharat Garg',
    authorRole: 'Cloud Engineering Lead',
    authorImage: authorBharat,
    publishDate: 'September 2024',
    contentBlocks: [
      {
        type: 'intro',
        text: 'Most cloud migrations deliver less than half their projected savings. Here is the framework we use to ensure the economics actually work — before a single workload moves.',
      },
      {
        type: 'paragraph',
        text: 'Cloud migration regret is a documented phenomenon. Gartner, IDC, and practitioners across the industry have catalogued the pattern: organisations migrate to cloud expecting dramatic cost reduction and operational simplification, then discover eighteen months later that costs have increased and complexity has compounded. The technology was not the problem. The approach was.',
      },
      {
        type: 'heading',
        text: 'Why Lift-and-Shift Fails',
      },
      {
        type: 'paragraph',
        text: 'The root cause of most cloud migration disappointment is treating cloud as a hosting provider rather than a platform capability. Lifting an on-premise workload to a cloud VM and paying cloud-tier pricing for it produces the worst of both worlds: the operational model of on-premise without the cost advantages of cloud-native architecture. This is the lift-and-shift trap, and it is where the majority of cloud project budgets go to die.',
      },
      {
        type: 'image_text',
        image: imgCloud,
        imageAlt: 'Cloud architecture',
        imageLeft: false,
        text: 'Cloud-native migration — the genuine article — involves redesigning workloads to exploit the elasticity, managed services, and pay-as-you-go economics that cloud platforms actually offer. It takes longer and costs more upfront. But it is the only approach that delivers durable cost reduction, because it replaces fixed infrastructure costs with variable costs that scale with actual demand.',
      },
      {
        type: 'heading',
        text: 'The Pre-Migration Checklist',
      },
      {
        type: 'bullets',
        items: [
          'Application portfolio rationalisation — Not every application should move to cloud. Some should be retired. Some should be replaced with SaaS. Migrating technical debt to cloud multiplies it.',
          'Total cost of ownership modelling — Include egress costs, support tiers, licensing under cloud pricing, and the operational cost of managing cloud infrastructure. Cloud is often cheaper, but rarely by the margin the initial estimate suggests.',
          'Data gravity assessment — Applications that process large volumes of data on-premise often generate significant egress costs in cloud. These need to be modelled before migration, not discovered after.',
          'Workload classification — Tier your applications by migration approach: retain, retire, rehost, replatform, refactor, or replace. The proportion in each tier determines your overall programme economics.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Cloud migration done well is one of the highest-return infrastructure investments an enterprise can make. The barrier is not the technology — it is the discipline to model honestly, migrate selectively, and redesign where redesign is warranted. Organisations that approach cloud as an architecture discipline rather than an infrastructure project consistently achieve the outcomes that the others read about in case studies and assume are exceptional.',
      },
    ],
  },

  {
    slug: 'design-systems-enterprise',
    coverImg: imgUX,
    tagline: 'Experience Design',
    subheadline: 'Design Systems for the Enterprise',
    authorName: 'Neha Jaiswal',
    authorRole: 'Head of Experience Design',
    authorImage: authorNeha,
    publishDate: 'August 2024',
    contentBlocks: [
      {
        type: 'intro',
        text: 'A design system is not a component library. It is an operating agreement between design and engineering about what "good" means — and in large organisations, that agreement is worth more than any individual feature.',
      },
      {
        type: 'paragraph',
        text: 'Enterprise software is built by teams. Often dozens of teams, working in parallel, on adjacent products that users must navigate as a coherent whole. Without a shared design system, each team makes its own decisions about spacing, typography, interaction patterns, and error states. The result is an interface that feels like it was assembled from parts of twenty different products — because it was.',
      },
      {
        type: 'heading',
        text: 'What a Design System Actually Contains',
      },
      {
        type: 'bullets',
        items: [
          'Design tokens — The abstract values (colour, spacing, typography, motion) that establish the visual grammar of the product. These should be single-sourced and consumed by both design tools and code.',
          'Component library — Tested, accessible, documented UI components with clear usage guidelines and explicit "do / do not" patterns.',
          'Interaction patterns — Documented standards for common UX flows: form validation, error handling, loading states, empty states. These prevent teams from solving the same problem differently.',
          'Content guidelines — Voice, tone, label conventions, and microcopy standards. Inconsistent language is as confusing as inconsistent UI.',
          'Governance model — Who owns the system, how contributions are reviewed, how breaking changes are communicated, and how consuming teams are supported.',
        ],
      },
      {
        type: 'quote',
        text: 'A design system that engineering teams do not adopt is a design system that does not exist. Adoption is a product problem, not a documentation problem.',
      },
      {
        type: 'paragraph',
        text: 'The governance model is what separates design systems that scale from those that atrophy. Without a clear process for how the system evolves, consuming teams either fork it or ignore it — and after eighteen months you have three slightly different versions of the same component in production. The investment required to maintain a healthy design system is real, but it is trivial compared to the cost of the inconsistency it prevents.',
      },
    ],
  },

  {
    slug: 'zero-trust-architecture',
    coverImg: imgSecurity,
    tagline: 'Security',
    subheadline: 'Zero Trust Architecture in Practice',
    authorName: 'Hariraj Singh',
    authorRole: 'Security Architecture Lead',
    authorImage: authorHariraj,
    publishDate: 'July 2024',
    contentBlocks: [
      {
        type: 'intro',
        text: 'Zero Trust has been a security industry buzzword for over a decade. Most organisations that say they have implemented it have not. Here is what implementation actually looks like — and why the gap between the name and the reality matters.',
      },
      {
        type: 'paragraph',
        text: 'The core principle of Zero Trust is simple: never trust, always verify. No user, device, or network connection is inherently trusted, even if it originates inside the corporate perimeter. Every access request is authenticated, authorised, and continuously validated. This sounds straightforward until you try to implement it across an organisation with fifteen years of implicit-trust assumptions baked into its network architecture, application design, and operational processes.',
      },
      {
        type: 'heading',
        text: 'The Layers That Must Change',
      },
      {
        type: 'bullets',
        items: [
          'Identity and access management — Every identity, human and machine, must be strongly authenticated. Shared accounts, service accounts with excessive privileges, and password-only authentication are incompatible with Zero Trust.',
          'Network micro-segmentation — Lateral movement is the attacker\'s friend. Flat networks where any internal host can reach any other internal host must be replaced with segmented architecture where access is granted by policy, not by geography.',
          'Device trust — Not all devices are equal. Managed, compliant, up-to-date devices should receive different access privileges than unmanaged or personal devices, even when the user identity is the same.',
          'Continuous authorisation — Validating identity at login is not sufficient. Access decisions should be re-evaluated continuously against current context: device health, location, behaviour patterns.',
        ],
      },
      {
        type: 'quote',
        text: 'The perimeter never really protected you. You just did not know it until someone breached it. Zero Trust is the honest acknowledgement that the insider and the outsider threat are the same problem.',
      },
      {
        type: 'paragraph',
        text: 'Implementing Zero Trust is a multi-year programme. The organisations that have done it successfully took an incremental approach: start with identity (the highest-value, lowest-disruption layer), then network segmentation, then device trust, then application-level controls. Each layer delivers independent value. And critically, they maintained executive sponsorship throughout — because Zero Trust consistently requires trading user convenience for security resilience, and that trade-off needs to be owned at the top.',
      },
    ],
  },

  {
    slug: 'llms-in-production',
    coverImg: imgAI,
    tagline: 'Artificial Intelligence',
    subheadline: 'LLMs in Production: What Actually Works',
    authorName: 'Deepak Bindal',
    authorRole: 'ML Engineering Lead',
    authorImage: authorDeepak,
    publishDate: 'June 2024',
    contentBlocks: [
      {
        type: 'intro',
        text: 'Deploying large language models in enterprise production is a categorically different challenge from the demos that make it look easy. Here is what we have learned from deployments at scale.',
      },
      {
        type: 'paragraph',
        text: 'The LLM demo that impresses a boardroom takes an afternoon to build. The production system that reliably serves that capability to fifty thousand users — with acceptable latency, cost, accuracy, and safety properties — takes six to twelve months and involves engineering challenges that no benchmark paper prepares you for.',
      },
      {
        type: 'heading',
        text: 'The Production Problems Nobody Warns You About',
      },
      {
        type: 'bullets',
        items: [
          'Latency under load — LLM inference is computationally expensive. Response time that feels acceptable in a demo becomes a UX failure at production concurrency. Batching, caching, and model distillation are not optional — they are prerequisites.',
          'Hallucination management — All LLMs hallucinate. In production, you need systematic detection and mitigation: retrieval augmentation, output validation, confidence scoring, and graceful degradation for low-confidence outputs.',
          'Prompt injection attacks — Adversarial users will attempt to override system instructions through crafted inputs. Robust system prompt architecture and output validation are essential for any externally-facing deployment.',
          'Cost at scale — Token costs that are negligible in a prototype become material at production volume. Cost modelling, caching strategies, and tiered model selection (using smaller models where large models are overkill) are essential.',
          'Evaluation infrastructure — You cannot improve what you cannot measure. Production LLM systems require evaluation pipelines that can assess output quality at scale — automated where possible, human review where necessary.',
        ],
      },
      {
        type: 'quote',
        text: 'The model is the smallest part of the problem. The hard work is everything around it: the data pipelines, the retrieval systems, the evaluation infrastructure, and the operational processes that keep it honest over time.',
        attribution: 'Deepak Bindal, ML Engineering Lead',
      },
      {
        type: 'paragraph',
        text: 'The enterprises succeeding with LLMs in production are not the ones with the largest context windows or the most parameters. They are the ones that treated deployment as a systems engineering problem from the start — investing in the infrastructure around the model as seriously as in the model itself. The path from prototype to production is not a straight line. It is an architecture problem that requires patience, instrumentation, and a willingness to rebuild when the first approach proves insufficient.',
      },
    ],
  },

  {
    slug: 'ai-talent-gap',
    coverImg: imgAIService,
    tagline: 'AI Strategy',
    subheadline: 'The AI Talent Gap and How to Close It',
    authorName: 'Love Singhal',
    authorRole: 'Head of Talent & Organisation',
    authorImage: authorLove,
    publishDate: 'May 2024',
    contentBlocks: [
      {
        type: 'intro',
        text: 'The AI talent shortage is real. But the conventional response — competing for a small pool of PhDs with inflated compensation — is not the solution. Here is a more durable approach.',
      },
      {
        type: 'paragraph',
        text: 'Every large enterprise is competing for roughly the same population of machine learning engineers, data scientists, and AI product managers. Supply has grown significantly since 2020, but not at anywhere near the rate of demand. The result is a market where the best candidates have multiple offers, where retention is as hard as recruitment, and where organisations without the brand recognition of a FAANG are structurally disadvantaged in the contest for talent.',
      },
      {
        type: 'heading',
        text: 'Rethinking the Talent Model',
      },
      {
        type: 'paragraph',
        text: 'The organisations closing the AI talent gap most effectively are doing so through a portfolio of approaches, not a single strategy. They are building internal capability through deliberate upskilling programmes for existing engineering and analyst talent. They are partnering with specialist firms to access expertise without the overhead of full-time hiring. And they are redesigning roles to make AI work more tractable for talent with adjacent skills — domain experts who can be trained in AI methodology faster than AI experts can be trained in domain knowledge.',
      },
      {
        type: 'bullets',
        items: [
          'Internal upskilling — The fastest path to AI capability is often through people who already understand your business, your data, and your domain. Structured ML training programmes for senior engineers and analysts yield disproportionate returns.',
          'Strategic partnerships — The right partner transfers knowledge, not just deliverables. Embedded advisory models that build internal capability alongside delivery are more valuable than pure outsourcing.',
          'Role redesign — AI Engineer, ML Ops, AI Product Manager, and Prompt Engineer are roles that did not exist five years ago. Your talent architecture needs to reflect where work actually happens now.',
          'Research adjacency — Partnerships with universities, participation in research consortia, and structured internship pipelines into permanent roles are long-cycle but high-quality talent channels.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The AI talent gap will not be solved by any single hire or any single programme. It is solved by the organisations that build talent development as a genuine strategic function — with the same rigour, resourcing, and leadership attention that they give to product or technology strategy. Those organisations will not win every talent contest. But they will stop losing the ones that matter.',
      },
    ],
  },

  {
    slug: 'domain-driven-design',
    coverImg: imgEnterprise,
    tagline: 'Enterprise Architecture',
    subheadline: 'Domain-Driven Design at Enterprise Scale',
    authorName: 'Gaurav Verma',
    authorRole: 'Enterprise Architecture Lead',
    authorImage: authorGauravV,
    publishDate: 'April 2024',
    contentBlocks: [
      {
        type: 'intro',
        text: 'Domain-Driven Design was conceived for complex software problems. At enterprise scale — with hundreds of teams, thousands of services, and decades of accumulated technical decisions — its principles become not just useful but essential.',
      },
      {
        type: 'paragraph',
        text: 'Eric Evans published Domain-Driven Design in 2003 for an audience of software architects building complex systems with rich business logic. Two decades later, the enterprises grappling with the hardest architectural challenges are discovering that the conceptual tools Evans provided — bounded contexts, ubiquitous language, context mapping, aggregates — are exactly the vocabulary they need to reason about systems of a complexity Evans could not have anticipated.',
      },
      {
        type: 'heading',
        text: 'Why DDD Scales',
      },
      {
        type: 'paragraph',
        text: 'The central insight of DDD is that software complexity is not primarily a technical problem — it is a communication problem. When the model in the code does not match the model in the domain expert\'s head, every conversation between engineering and the business generates friction. Every requirement is slightly mistranslated. Every feature shipped is slightly not what was needed. DDD provides tools for aligning these models — and at enterprise scale, that alignment is worth more than any technical optimisation.',
      },
      {
        type: 'bullets',
        items: [
          'Bounded contexts define clear ownership boundaries between teams and between services — the foundation of an autonomous, scalable engineering organisation.',
          'Ubiquitous language eliminates the translation tax between domain experts and engineers. When both sides use the same terms to mean the same things, requirements become specifications.',
          'Context mapping makes inter-team dependencies explicit, manageable, and improvable — rather than the invisible political tensions that accumulate in large engineering organisations.',
          'Aggregates provide a principled approach to transactional consistency in distributed systems, directly addressing one of the hardest problems in microservices architecture.',
        ],
      },
      {
        type: 'quote',
        text: 'DDD at scale is not a software methodology. It is an organisational design tool with a software implementation.',
      },
      {
        type: 'paragraph',
        text: 'The organisations we have seen apply DDD most successfully treat it as a multi-year capability development programme, not a project. They invest in EventStorming workshops, in domain modelling with business experts, in evolutionary architecture reviews. They accept that a codebase that reflects the domain correctly is harder to build but dramatically easier to maintain, extend, and reason about. In a large enterprise, the compounding return on that investment is enormous.',
      },
    ],
  },

  {
    slug: 'finops-cloud-economics',
    coverImg: imgCloud,
    tagline: 'Cloud',
    subheadline: 'FinOps: Making Cloud Economics Actually Work',
    authorName: 'Bharat Garg',
    authorRole: 'Cloud Engineering Lead',
    authorImage: authorBharat,
    publishDate: 'March 2024',
    contentBlocks: [
      {
        type: 'intro',
        text: 'Cloud spend without FinOps is a commitment to recurring cost surprises. Here is how to build the financial discipline that makes cloud economics actually work at enterprise scale.',
      },
      {
        type: 'paragraph',
        text: 'The average large enterprise wastes 32% of its cloud spend, according to Flexera\'s annual State of the Cloud report. This is not because cloud is expensive — it is because cloud purchases are made without the financial discipline that any other major expenditure category would require. Compute is provisioned speculatively and never rightsized. Storage accumulates without lifecycle policies. Reserved instance commitments expire unreplaced. And the teams generating the cost are rarely the teams responsible for paying it.',
      },
      {
        type: 'heading',
        text: 'FinOps Is a Practice, Not a Tool',
      },
      {
        type: 'paragraph',
        text: 'The most common mistake organisations make when addressing cloud cost is buying a cost management tool and expecting it to solve the problem. Tools surface data. They do not change behaviour. FinOps — the Cloud Financial Management discipline formalised by the FinOps Foundation — is a practice that changes the relationship between engineering teams and the economic consequences of their technical decisions.',
      },
      {
        type: 'bullets',
        items: [
          'Visibility first — You cannot optimise what you cannot see. Tagging standards, cost allocation by team and product, and real-time spend dashboards are the foundation of everything else.',
          'Showback before chargeback — Making teams aware of their cloud costs, even before those costs are formally allocated to their budgets, changes spending behaviour significantly.',
          'Engineering-Finance collaboration — FinOps requires sustained dialogue between engineers (who understand what the cost buys) and finance (who understand the budget context). Neither function can do this alone.',
          'Continuous optimisation cadence — Weekly review of rightsizing recommendations, reserved instance utilisation, and savings plan coverage should be part of the operating rhythm of every platform engineering team.',
        ],
      },
      {
        type: 'quote',
        text: 'Every percentage point of cloud waste that FinOps recovers is reinvestment capacity for the work that actually matters. At enterprise cloud scale, those points add up to millions.',
        attribution: 'Bharat Garg, Cloud Engineering Lead',
      },
      {
        type: 'paragraph',
        text: 'The organisations with mature FinOps practices are not those with the lowest cloud spend — they are those with the highest return on cloud spend. They invest more deliberately, waste less structurally, and redeploy the savings into the capabilities that drive competitive differentiation. FinOps is not cost-cutting by another name. It is the discipline that makes cloud investment go further.',
      },
    ],
  },
]
