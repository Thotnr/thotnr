import imgAiSummit    from '../assets/images/ai-summit.jpg'
import imgUX          from '../assets/images/insites/terraform.png'
import imgSecurity    from '../assets/images/insites/cloud-usecase.jpg'
import imgTechPartner    from '../assets/images/insites/tech-partner.jpeg'
import imgExperience    from '../assets/images/insites/user-experience.jpg'
import imgPostulates    from '../assets/images/insites/ai.jpg'
import imgContainers    from '../assets/images/insites/containers.jpg'
import imgOwasp    from '../assets/images/insites/security.jpg'
import imgRpa    from '../assets/images/insites/rpa.jpeg'
import imgDna    from '../assets/images/insites/dna.jpg'
import imgAI          from '../assets/images/ai.jpg'
import imgAIService   from '../assets/images/insites/cloud.jpg'
import imgEnterprise  from '../assets/images/insites/rest-api.jpeg'
import imgCloud       from '../assets/images/insites/cloud-migration.jpeg'
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


import case1     from '../assets/images/insites/case1.jpg'
import case2     from '../assets/images/insites/case2.jpg'
import case3     from '../assets/images/insites/case3.jpg'
import case4     from '../assets/images/insites/case4.jpg'
import case5     from '../assets/images/insites/case5.jpg'
import case6     from '../assets/images/insites/case6.jpg'
import case7     from '../assets/images/insites/case7.jpg'
import case8     from '../assets/images/insites/case8.jpg'
import case9     from '../assets/images/insites/case9.jpg'
import case10     from '../assets/images/insites/case10.jpg'
import case11     from '../assets/images/insites/case11.jpg'
import case12     from '../assets/images/insites/case12.jpg'
import case13     from '../assets/images/insites/case13.jpg'


export const insights = [
  {
    slug: 'why-enterprise-ai-fails',
    coverImg: imgAiSummit,
    tagline: 'Artificial Intelligence',
    subheadline: 'Why Most Enterprise AI Projects Fail Before They Start',
    authorName: 'Thotnr',
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
        image: case1,
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
  slug: 'terraform-iaac',
  coverImg: imgUX,
  tagline: 'DevOps',
  subheadline: 'Terraform – IaaC',
  authorName: 'Thotnr',
  authorRole: 'Head of Experience Design',
  authorImage: authorNeha,
  publishDate: 'January 09, 2023',
  contentBlocks: [
    {
      type: 'intro',
      text: "Most IT organizations have already adopted cloud computing as their preferred IT infrastructure services in order to increase IT efficiency and reduce operational costs. However, managing IT infrastructure across multiple clouds, data centers, environments and servers become even more complex when different teams within an organization may need similar infrastructure for their slightly different requirements. Infrastructure as a code solution called Terraform has emerged as one of the best solutions for an IT organization to reduce such complexity while growing infrastructure at scale."
    },
    {
      type: 'paragraph',
      text: 'In this article, we will briefly discuss Terraform, its workflow and feature set.'
    },
    {
      type: 'heading',
      text: "Terraform and its Use Case"
    },
    {
      type: 'paragraph',
      text: "Terraform is an infrastructure-as-code tool created by HashiCorp which helps in provisioning of cloud resources. This is majorly used by DevOps to automate various infrastructure tasks. Terraform describes complete infrastructure in the form of code which acts as a common language for servers that may come from different cloud service providers such as Azure, AWS or Google Cloud Platform which helps to build and manage these resources in parallel across providers."
    },
    {
      type: 'bullets',
      items: [
        'Providing an Infrastructure-as-code for cloud service providers like Azure or AWS. Provisioning of public clouds via a provider, a plugin that wraps existing APIs with languages like Azure biceps to create Terraform syntax.',
        'Terraform helps in deploying large systems that involve highly complex topology.',
        'Terraform has the capability to deploy resources into multiple cloud providers utilizing the same syntax without having engineers familiarize with multiple tools and technologies.',
        'Terraform allows you to perform orchestration of resources for multi cloud and hybrid cloud platforms.',
      ]
    },
    {
      type: 'heading',
      text: 'Benefits of Using Terraform'
    },
    {
      type: 'image_text',
      image: case2,
      imageAlt: 'Terraform infrastructure as code',
      imageLeft: true,
      text: 'Better collaboration and tracking within team — Infrastructure-as-code can be linked with issue tracking systems where teams can collaborate, share and save their codes for future reference. Automated infrastructure management lets Terraform create configuration file templates that can be used multiple times to create the same development, test and production environments, reducing manual effort, time and development cost significantly.'
    },
    {
      type: 'bullets',
      items: [
        'Better collaboration and tracking within team – Infrastructure-as-code can be linked with issue tracking systems where teams can collaborate, share and save their codes for future reference.',
        'Automated infrastructure management – Terraform creates configuration file templates that can be used multiple times to create the same development, test and production environments.',
        'Reduced development cost – As the same configuration file templates can be reused, it reduces manual efforts, resources, time and development cost.',
        'Enhanced Security – Infrastructure-as-code is an automated process that needs less human intervention, hence increasing overall security of computing architecture and data.',
      ]
    },
    {
      type: 'heading',
      text: 'How Does Terraform Work?'
    },
    {
      type: 'paragraph',
      text: 'Terraform gives you the options to define and manage your infrastructure using configuration files and version controls. There are two main components of Terraform architecture: Core and Providers.'
    },
    {
      type: 'quote',
      text: 'Terraform takes both inputs and compares desired output with the current state to determine the gap — creating, updating, or deleting resources to provision infrastructure as per desired output.',
      attribution: 'Terraform Core Workflow'
    },
    {
      type: 'paragraph',
      text: 'The Core workflow takes inputs from users about what resources to create or provision, plus the current state of infrastructure. It then determines the gap and configures the architecture accordingly.'
    },
    {
      type: 'paragraph',
      text: 'Terraform has more than a hundred cloud providers that grant access to their resources — including Azure, AWS and GCP. Providers enable interacting with specific APIs and expose the resources Terraform has defined using Go language. Once a provider is configured and authenticated, it gives access to create multiple available resources. For AWS, for instance, Terraform will also have access to EC2 instances and resources within the tech stack.'
    },
    {
      type: 'paragraph',
      text: 'The Configuration and Providers of Terraform enable you to create, alter, and improve infrastructure in a safe and predictable manner using infrastructure-as-code.'
    },
  ]
},

{
  slug: 'datacenter-migration',
  coverImg: imgSecurity,
  tagline: 'Cloud & Infrastructure',
  subheadline: 'Datacenter to Cloud Migration',
  authorName: 'Thotnr',
  authorRole: 'Head of Experience Design',
  authorImage: authorNeha,
  publishDate: 'January 09, 2023',
  contentBlocks: [
    {
      type: 'intro',
      text: "Moving from On Premise to Cloud is a strategic decision and needs a long-term vision for an organization. It will require a change in mindset of employees besides putting investment of money. Migration approach can be divided in 4 phases: Consolidation of Details, Migration Planning, Migration Execution and Migration Optimization."
    },
    {
      type: 'paragraph',
      text: 'It looks simple in concept but practically it changes the day to day working of an organization. The company needs to transition all existing hardware, software, networking and operations into a different environment. Migration journey often starts with a desire to save cost or to become cloud native.'
    },
    {
      type: 'heading',
      text: 'Consolidation of Details'
    },
    {
      type: 'image_text',
      image: case3,
      imageAlt: 'Data center consolidation and planning',
      imageLeft: true,
      text: 'First Phase is the Detailing phase. Upcoming cloud partners prepare documents of the entire Data Center footprint — OS and hardware details, applications installed, storage details, network details, maintenance & patching details, license details and asset details. The objective is to obtain a detailed view of all relevant assets of the current Data Centre. Cross functional discussions among all business units should also be started to align all important stakeholders for upcoming changes.'
    },
    {
      type: 'heading',
      text: 'Migration Planning'
    },
    {
      type: 'paragraph',
      text: 'All details gathered in the detailing phase are leveraged to create a detailed migration plan. Migration may have multiple waves with each wave migrating some part of it. As a best practice, non-production waves should be targeted first.'
    },
    {
      type: 'bullets',
      items: [
        'Current server details like computing, storage, virtualization mapping to cloud. First phase can be started keeping all stats the same as in the datacenter.',
        'Multiple waves can be planned as per need — by Production / Non-production waves.',
        'Sufficient time for testing should be planned post deployment of infrastructure.',
        'Applications with less dependencies should be migrated first. Target simple & predictable migrations to gain confidence.',
        'Necessary training to staff should be planned so they can be allocated to work in a cloud environment.',
      ]
    },
    {
      type: 'heading',
      text: 'Migration Execution'
    },
    {
      type: 'paragraph',
      text: 'This phase executes the plans prepared in the migration planning phase. Organizations need to keep track of exact steps and configurations — the same steps will be repeated for production and non-production waves. All required infrastructure components must be configured similar to the existing datacenter, with required access to databases and dependent softwares verified, and application performance tested.'
    },
    {
      type: 'quote',
      text: 'Success of the execution phase depends on aggressive testing, debugging and closure of defects. Multiple iterations should be used to ensure that the application is working properly on new infrastructure.',
      attribution: 'Migration Execution Best Practice'
    },
    {
      type: 'heading',
      text: 'Migration Optimization'
    },
    {
      type: 'bullets',
      items: [
        'Review Computing Power and Storage — To further save costs or improve performance.',
        'Plan more automation activities to reduce operational overhead.',
      ]
    },
    {
      type: 'paragraph',
      text: 'Post migration and periodic review, one will have better visibility on resource consumption and cost. Over a period of time, better plans can be selected for compute resources, storage and virtual machines as per the need.'
    },
    {
      type: 'quote',
      text: 'Performing data center migration is a big task but following the above mentioned strategy, the complete process can be broken down in multiple small phases which makes the overall process simple.',
      attribution: 'A phased approach across Consolidation, Planning, Execution and Optimization ensures risks are minimized at every wave, and the organization steadily builds cloud confidence from non-production to full production migration.'
    },
  ]
},

  {
  slug: 'cloud-migration-benefits',
  coverImg: imgAIService,
  tagline: 'Cloud',
  subheadline: 'Benefits of Migrating to Cloud',
  authorName: 'Thotnr',
  authorRole: 'Head of Experience Design',
  authorImage: authorNeha,
  publishDate: 'January 05, 2023',
  contentBlocks: [
    {
      type: 'intro',
      text: "Migrating to cloud increases IT efficiency and reduces IT costs, but there are some challenges to consider such as planning and costs. Here is how migration benefits and challenges are addressed across Cost Optimisation, Flexibility, Security, Compliance, Backup and Monitoring."
    },
    {
      type: 'heading',
      text: 'Benefits of Migrating to Cloud'
    },
    {
      type: 'heading',
      text: 'Cost Optimisation'
    },
    {
      type: 'image_text',
      image: case4,
      imageAlt: 'Cloud cost optimisation',
      imageLeft: true,
      text: 'Cloud computing is an efficient and cost-effective way to reduce operational costs while improving IT processes. By moving to the cloud, your company benefits from only paying for what you need — without maintaining costly data centers.'
    },
    {
      type: 'bullets',
      items: [
        'Pay as you use — The pay-as-you-go model allows you to pay only for the services you use, drastically reducing costs and customising your setup based on usage.',
        'Reduce Carbon Footprint — Reduce energy costs in terms of electricity and cooling by outsourcing to a cloud provider that offers more energy-efficient infrastructure.',
        'IT Operations — Reduce the need for expensive IT technicians to manage and maintain hardware.',
        'Reduce Office Footprint — Reducing real estate costs and encouraging more decentralized offices.',
      ]
    },
    {
      type: 'heading',
      text: 'Flexibility & Scalability'
    },
    {
      type: 'paragraph',
      text: 'With cloud computing, your company can scale up and down based on its IT needs and business plan. Organizations can reshape their infrastructure and workloads to better meet today\'s needs without being confined by outdated equipment and assets.'
    },
    {
      type: 'bullets',
      items: [
        'Automate Scaling — As demand spikes or if the organization needs more powerful compute resources, resource allocation can be instantly altered.',
        'Change Ready — As applications and usage evolve, infrastructure can also evolve quickly without requiring major changes.',
        'Support Hybrid-Cloud — Utilize both public and private clouds to maximize resource efficiency.',
        'Support Global Presence — Improve performance by running workloads close to where users and customers are located using cloud platforms with a global presence.',
      ]
    },
    {
      type: 'heading',
      text: 'Improved Security'
    },
    {
      type: 'bullets',
      items: [
        'Shared Responsibility — The shared responsibility model requires you to create and maintain a secure cloud environment for your users while the provider secures the underlying infrastructure.',
        'Stronger Security — Cloud computing offers much stronger security than traditional data centers by storing business information centrally, with security analytics and cross-enterprise visibility.',
        'Automatic Updates — Most cloud providers keep their network and resources secure by performing periodic tests and patching vulnerabilities as soon as they are detected.',
      ]
    },
    {
      type: 'heading',
      text: 'Compliance, Backup & Monitoring'
    },
    {
      type: 'bullets',
      items: [
        'Certification — Many cloud providers hold compliance certifications such as ISO27001, PCI-DSS, AICPA/SOC and HIPAA, ensuring your data meets industry-specific regulatory requirements.',
        'Business Continuity — Most providers offer robust DR and business continuity features, with data stored across multiple data centers and geographical regions.',
        'High Availability — If one server fails, other servers take over the workload, ensuring no single point of failure.',
        'Central Management Tools — Cloud providers offer centralized tools for managing and monitoring both on-premises and cloud infrastructure from one place.',
        'Monitoring — Centralized logging and monitoring helps operational services by providing information on hotspots and potential issues.',
      ]
    },
    {
      type: 'heading',
      text: 'Challenges to Migration'
    },
    {
      type: 'quote',
      text: 'If properly planned and contingencies are in place, the migration can be a smooth one.',
      attribution: 'Cloud Migration Best Practice'
    },
    {
      type: 'bullets',
      items: [
        'Cost — A lift-and-shift may initially be higher due to legacy applications, but making small changes toward cloud-native services reduces cost in the medium to long term. Using provider tools to monitor resource usage is highly recommended.',
        'Security & Privacy — Network security and potential vulnerabilities must be assessed before migration. Key checks include end-to-end encryption, real-time threat monitoring, data backup, and alignment with compliance standards like HIPAA, PCI DSS and CCPA.',
        'Downtime — The biggest risk when moving large amounts of data is network outages. Creating a backup IT environment as a temporary server during migration is a common workaround, though temporary servers may be unable to handle peak loads.',
      ]
    },
    {
      type: 'paragraph',
      text: 'Cloud migration, when approached with thorough planning and the right contingencies, delivers lasting gains in cost efficiency, security, scalability and operational visibility — far outweighing the short-term challenges of the transition itself.'
    },
  ]
},

  {
  slug: 'rest-game-changer',
  coverImg: imgEnterprise,
  tagline: 'Enterprise Architecture',
  subheadline: 'Is REST The Biggest Game Changer Of All?',
  authorName: 'Sankalp',
  authorRole: 'Enterprise Architecture Lead',
  authorImage: authorGauravV,
  publishDate: 'September 19, 2022',
  contentBlocks: [
    {
      type: 'intro',
      text: "Within the computer industry it is sacrilege to call a technology a game changer. Game changers are claimed everyday but seldom live more than a couple of years. Some, however, have been true to their name — microprocessors, RDBMS, the internet. This brings us to REST, defined in Roy Fielding's PhD thesis in 2000, which quietly and fundamentally changed how software systems communicate."
    },
    {
      type: 'paragraph',
      text: "Fielding's dissertation defined a framework for understanding software architecture via architectural styles and demonstrated how styles can be used to guide the architectural design of network-based application software. The web and HTTP by their very nature are scalable, reliable and simple to use. It is only obvious to expose services over the web using web standards. This is simply REST."
    },
    {
      type: 'heading',
      text: 'REST and RDBMS — A Parallel'
    },
    {
      type: 'image_text',
      image: case5,
      imageAlt: 'REST architecture and standardisation',
      imageLeft: false,
      text: 'The author draws an analogy between REST and RDBMS — both have an identical approach towards simplicity and address a similar set of problems. In database design, normalization and creation of entities is the art form while CRUD operations are standardised. On similar lines, it is the design of entity structure — the formation of nouns in the design space — that is the challenge. Once URIs and resource representation are fulfilled, the remainder is simple CRUD-like operations.'
    },
    {
      type: 'quote',
      text: 'REST is successful for the same reasons RDBMS are — they bring standardisation towards sharing resources and processes. It naturally is decentralised and scales as the web scales.',
      attribution: 'Architectural Parallel — REST & RDBMS'
    },
    {
      type: 'heading',
      text: 'Why REST Works at Scale'
    },
    {
      type: 'bullets',
      items: [
        'REST needs no special privileges — most IT infrastructure already allows HTTP(S), making adoption frictionless across environments.',
        'Simple consumption — most client systems allow HTTP access with no special libraries or structures, usable on both mobile and web.',
        'Naturally decentralised — scales as the web scales, with no central bottleneck or proprietary protocol dependency.',
      ]
    },
    {
      type: 'heading',
      text: 'Where REST Falls Short'
    },
    {
      type: 'paragraph',
      text: "Some design principles of true REST are difficult to achieve in practice. From Roy Fielding's original paper:"
    },
    {
      type: 'quote',
      text: 'Communication must be stateless in nature, such that each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server.',
      attribution: 'Roy Fielding, Architectural Styles and the Design of Network-based Software Architectures (2000)'
    },
    {
      type: 'bullets',
      items: [
        'Most applications have a concept of a session — not all requests contain complete information for fulfilment, breaking true statelessness.',
        'Many clients do not allow PUT and DELETE verbs and some firewalls disallow them, requiring creative solutions such as X-HTTP-METHOD-OVERRIDE.',
        'Workflows do not fall cleanly into REST whose primary purpose is to expose resources — not to model complex multi-step processes.',
      ]
    },
    {
      type: 'paragraph',
      text: "As the article started with REST being a game changer, the author believes the same to be true — primarily because it has such a large use case for implementation. Its constraints, even where imperfectly observed, have produced a more consistent, interoperable and scalable web than any proprietary alternative could have."
    },
  ]
},

 {
  slug: 'when-cloud-not-needed',
  coverImg: imgCloud,
  tagline: 'Cloud',
  subheadline: '6 Use Cases When Cloud Is Not Needed',
  authorName: 'Sankalp',
  authorRole: 'Cloud Engineering Lead',
  authorImage: authorBharat,
  publishDate: 'September 19, 2022',
  contentBlocks: [
    {
      type: 'intro',
      text: "The shift to cloud has brought cost savings, flexibility and ease of use — and it would not be an exaggeration to say cloud is one of the cornerstones that allowed the startup revolution. But all technologies have a place. This article highlights the scenarios where cloud may not be applicable — because a poor craftsman blames the tool."
    },
    {
      type: 'paragraph',
      text: "Cloud computing has a large problem space, however there exist scenarios where it is not the right fit. Under those circumstances it is prudent to use the proper tool rather than force cloud into an unsuitable use case."
    },
    {
      type: 'heading',
      text: 'Six Scenarios Where Cloud Falls Short'
    },
    {
      type: 'image_text',
      image: case6,
      imageAlt: 'Cloud limitations and use cases',
      imageLeft: false,
      text: 'Clouds are best suited for open source deployments that allow easy scaling at a moment\'s notice. This scenario changes when licensed databases or proprietary software are used — licenses prohibit such scale out, leaving cloud to be just another data center with licensing costs and cycles coming into picture. If the software is available from the vendor as PAAS, it should be considered, though PAAS brings its own set of challenges.'
    },
    {
      type: 'bullets',
      items: [
        '#1 Software License — Licensed or proprietary software prohibits the scale-out that makes cloud valuable, effectively reducing cloud to an expensive data center.',
        '#2 Using PAAS Software — PAAS offers managed services and lower staffing costs, but risks vendor lock-in and makes it hard to migrate large databases out of a cloud platform.',
        '#3 Long Term Cost — Cloud has a low cost of entry with hourly billing and on-demand scaling. However as predictability comes in and costs accumulate, a long-term move back to a data center may be the prudent strategy.',
        '#4 Data Security and Regulations — Cloud may not follow all regulations. Data residency laws, cross-border restrictions and compliance requirements can make cloud unsuitable or force odd strategies like splitting data and applications across separate physical locations.',
        '#5 VPN to a Data Center — Accessing private data center applications over VPN is slow, unreliable and increases complexity requiring a dedicated network engineering team. Where database access is needed, deploying the application in a datacenter next to the DB is recommended instead.',
        '#6 Applications Not Designed for Cloud — Many applications are not designed to scale out. Cloud is designed for horizontal scale — deploying applications that cannot support this, or building VMs inside cloud VMs, is a strategy to fail.',
      ]
    },
    {
      type: 'quote',
      text: 'Cloud like any tool has a set of use cases and when used in an unintended manner will only cause sorrow.',
      attribution: 'Cloud Strategy — Know Your Use Case'
    },
    {
      type: 'paragraph',
      text: 'Suitable precautions should be taken before committing to cloud. Security should be built over the application and exposed over services rather than relying on VPN. And when licensing, regulation or architecture constraints apply, deploying on-premise is not a step backward — it is the right engineering decision.'
    },
  ]
},

  {
  slug: 'tech-partner-guide-founders',
  coverImg: imgTechPartner,
  tagline: 'AI Strategy',
  subheadline: "Non-Tech Founder's Tech Partner Checklist",
  authorName: 'Sankalp',
  authorRole: 'CEO, Thotnr',
  authorImage: authorGauravK,
  publishDate: 'September 19, 2022',
  contentBlocks: [
    {
      type: 'intro',
      text: "Non-technical founders risk being seen as unqualified when dealing with technology — but Jack Ma, Rashmi Sinha and Evan Spiegel prove otherwise. The success of a technology project depends more on you as founder than on the vendor. Ideas need multiple iterations. If a vendor says he understood everything after the first discussion, just walk away."
    },
    {
      type: 'paragraph',
      text: "You should educate yourself on concepts like waterfall, agile and risk. With that basic understanding, here are the top nine aspects to watch out for when looking for a technology partner."
    },
    {
      type: 'heading',
      text: 'Own Your Source Code, Email and Environments'
    },
    {
      type: 'image_text',
      image: case7,
      imageAlt: 'Founder owning intellectual property and source code',
      imageLeft: true,
      text: 'Source code is your intellectual property and should remain with you. As founder you need complete control — be an administrator of all systems, own the hardware, domain names, SSL certificates and environments. These should be paid by your credit cards and you should have commercial rights on them. Beware of deals too good to be true — vendors who manage and own everything in a package will eventually milk you. Ensure you sign a contract that clearly spells out that source code and environments are your IP.'
    },
    {
      type: 'heading',
      text: 'Evaluate Multiple Technology Options'
    },
    {
      type: 'quote',
      text: 'When the only tool you have is a hammer then all problems look like nails.',
      attribution: 'On choosing the right technology stack'
    },
    {
      type: 'paragraph',
      text: 'Technology is just a tool and you need to ensure your craftsman knows how to use more than one. Run away from shops that insist there exists only one option. Ask for technology options, understand the design choices and short and long term benefits, costs and risks of each. Individuals who are one-technology shops often fail — they may not use the best tool for the job.'
    },
    {
      type: 'heading',
      text: 'Vendor Selection and Commercial Models'
    },
    {
      type: 'bullets',
      items: [
        'Steer Away from WordPress, Magento & In-the-Box Vendors — As a startup you are building something never done before. Existing packaged software will require heavy unintended customisation and will lead to issues. Vendors who rely on prepackaged solutions cannot run with you to new horizons.',
        'Understand Commercial Models — Fixed bid fixes scope and risk sits with the vendor. Time and material buys hours. Ask for proposals for both. Software development is an art with many risks — a vendor who does not understand these models has no experience building systems.',
        'Fortnightly Demos and Payment Milestones — Insist on a plan with fortnightly deliverables that can be demoed and tested. This allows a private beta early on and enables feedback. Tie payments to deliveries — pay when milestones are met.',
      ]
    },
    {
      type: 'heading',
      text: 'Execution, QA and Team Practices'
    },
    {
      type: 'bullets',
      items: [
        'Weekly Risk and Issues Reviews — Projects do not slip by a month on the last day, they slip one day at a time. Risks and issues managed in time have minimal impact. If a vendor is not raising concerns, they are likely not managing them.',
        'Build a QA Practice — Learn to define bug priority and insist on acceptance criteria. Tie fortnightly payment milestones to the said acceptance criteria for greater predictability on product delivery.',
        'Have the Team Work From Your Site — Close collaboration is key to success. Insist that the team works from your office with you.',
        'Estimate the Project Yourself — Insist on detailed proposals with team size, experience and time. Find market salaries for those roles, calculate and add a profit markup. If the vendor is not earning a decent profit, they will not deliver your project.',
      ]
    },
    {
      type: 'paragraph',
      text: 'Being a non-technical founder is not a disadvantage — it is a different vantage point. Armed with the right questions, the right contracts and the right commercial understanding, you can hold any technology partner accountable and build something genuinely new.'
    },
  ]
},

  {
  slug: 'robotic-process-automation',
  coverImg: imgRpa,
  tagline: 'Automation',
  subheadline: 'What is RPA?',
  authorName: 'Sankalp',
  authorRole: 'ML Engineering Lead',
  authorImage: authorDeepak,
  publishDate: 'September 19, 2022',
  contentBlocks: [
    {
      type: 'intro',
      text: "The global RPA market is expected to reach $22 billion by 2025, according to Forrester. Robotic Process Automation is the use of software bots to automate repetitive, rules-based tasks within or between computer systems — working against existing user interfaces with no need to construct original software integrations, and requiring no changes to existing technology."
    },
    {
      type: 'paragraph',
      text: "RPA is different from other automation technologies in that it is a client-side technology — not a server-side technology. It works against user interfaces, not server APIs. This allows organisations to automate operations using their existing applications exactly as they are."
    },
    {
      type: 'heading',
      text: 'The Technology Behind RPA'
    },
    {
      type: 'image_text',
      image: case8,
      imageAlt: 'Robotic process automation technology',
      imageLeft: false,
      text: 'The software used to create bots is called an RPA authoring tool. These tools expose the application UI model as an interactable interface to author user workflows. Although RPA is marketed as an end-user tool designed to replace human interaction with computers, it requires some degree of skill to customise and define a flow — especially to handle error scenarios, configurability and high-level abstractions, since end users are seldom trained for abstract computer modelling.'
    },
    {
      type: 'heading',
      text: 'Attended vs. Unattended RPA'
    },
    {
      type: 'bullets',
      items: [
        'Attended RPA — Requires some level of human intervention. Used in the front office, working alongside human workers. Can still be triggered by system events.',
        'Unattended RPA — Requires no human intervention to complete tasks. Can be triggered by system events or scheduled to run automatically. Works on enterprise data behind the scenes on back-end servers.',
      ]
    },
    {
      type: 'heading',
      text: 'Where RPA Is Most Useful'
    },
    {
      type: 'paragraph',
      text: 'RPA may be used to perform any repetitive task a human does. The RPA journey begins with the business defining a process and a detailed workflow with errors, exceptions and scenarios — which is then automated using an RPA tool. Tools may be scheduled and time-shared; for example, during business hours the bot may work a HRMS while late at night it handles end-of-day processes.'
    },
    {
      type: 'bullets',
      items: [
        'Downloading and sending reports via email.',
        'Copying files from a remote location.',
        'Resetting passwords on request.',
        'Repetitive data manipulation such as in spreadsheets.',
        'Automating QA processes.',
      ]
    },
    {
      type: 'quote',
      text: 'While RPA tools allow simple decision making and flow control, they are not currently suited for areas that require creative input or a high level of intelligence.',
      attribution: 'RPA Scope and Limitations'
    },
    {
      type: 'heading',
      text: 'Benefits of RPA'
    },
    {
      type: 'bullets',
      items: [
        'Boosting Productivity — RPA allows employees to focus on high-value tasks that only they can do, while leaving repetitive work to bots.',
        'Improve Efficiency to Generate Savings — Faster processing times and reduced errors lower processing costs and increase per-employee output.',
        'Accuracy and Consistency — Achieving 100% error-free data accuracy is within reach as automation eliminates errors on repetitive tasks.',
        'Better Data Security — RPA reduces the number of human touches required to process personal information, keeping data more secure.',
        'Scale on Demand — RPA can scale up and down instantly to handle any volume of work, making it a particular advantage in workflows with irregular volume.',
        'Better Customer Service — By spending less time on rote administrative tasks, staff can turn their attention back to customers.',
      ]
    },
    {
      type: 'paragraph',
      text: 'As existing applications require no reconfiguration or development, RPA sits uniquely apart from other software — it consumes and uses existing applications rather than replacing them. This makes it one of the lowest-friction paths to operational automation available to enterprises today.'
    },
  ]
},

  {
  slug: 'next-generation-user-experience',
  coverImg: imgExperience,
  tagline: 'Experience Design',
  subheadline: 'The Next Generation User Experience Today',
  authorName: 'Sankalp',
  authorRole: 'Head of Experience Design',
  authorImage: authorNeha,
  publishDate: 'August 23, 2022',
  contentBlocks: [
    {
      type: 'intro',
      text: "The computer user interface has perhaps been the most frustrating aspect of technology adoption since the dawn of the computer age. Humans had to adapt to using a computer — from punch cards to keyboards to touch. The new style of user interaction will not be an evolution of the human hand but a revolution in how humans interact with computers. And the good news is this is available today, commercially, out of research labs."
    },
    {
      type: 'paragraph',
      text: "All such experiences required us to do something unnatural — guided and limited by how the application wishes the user to behave. This article discusses consumer technologies available today to design what is possible now, short of surgical implants into cognitive processing."
    },
    {
      type: 'heading',
      text: 'Voice as the New Interface'
    },
    {
      type: 'image_text',
      image: case9,
      imageAlt: 'Voice driven user experience and natural interfaces',
      imageLeft: false,
      text: '"Ok Google, send a message to John Doe" or "Siri, call Jane Doe" — these work today, yet most applications have not exploited these abilities. This voice-driven user experience will have no text inputs. Users will not be authenticated by what they know such as passwords, but by what they are — fingerprints, voice and face recognition, as already used by Amazon, the App Store and Play Store. Speech-to-text and natural language processing are commercially available through Dialogflow, Watson Conversation and Amazon Lex — the heavy lifting is already done, waiting to be unwrapped.'
    },
    {
      type: 'quote',
      text: 'All that remains is to plug in the business and exploit what will truly be the greatest shift in how applications have been designed.',
      attribution: 'On the natural user experience opportunity'
    },
    {
      type: 'heading',
      text: 'The Impedance Between Human Thinking and Computer Interaction'
    },
    {
      type: 'paragraph',
      text: 'Humans see tasks as a means to an end. A sales executive thinks: "I need the YTD report for last quarter to replan my yearly targets." The computer action required is to navigate a reports page, select a report, and input a date range. Similarly, purchasing a product online has moved from requesting a salesperson to searching, filtering and comparing — when the natural ask was simply "I would like to buy a brown formal shoe under $100."'
    },
    {
      type: 'paragraph',
      text: 'It is this translation of asks — and the extra steps required to precisely define the ask — that causes the impedance. One should notice how voice-driven design is oriented towards being a human being and not a slave to a machine. We recognise each other by faces, we request tasks, give instructions and provide feedback all using speech.'
    },
    {
      type: 'heading',
      text: 'Industries Ready for This Shift'
    },
    {
      type: 'bullets',
      items: [
        'Cab applications — requesting a ride in natural language without navigating pickup, destination and payment screens.',
        'Online shopping — especially groceries, where a natural spoken request replaces search, filter and compare.',
        'Messaging, calendaring and personal assistants — already partially exploited but far from mainstream adoption.',
        'Business reporting tools — goal-oriented queries replacing multi-step report navigation.',
      ]
    },
    {
      type: 'paragraph',
      text: 'Both B2B and B2C segments can exploit this shift. The back-end technology is commercially available and mobile penetration is sufficient to consume this experience. If you have APIs, services and mobile apps — you are most likely ready. The need to expose business as a service is the primary prerequisite. The computers will continue to work as they always have, but the impedance of interaction is now also absorbed by the machines. The question is not whether this shift will happen — a natural user experience is inevitable and will affect every possible application. The question is whether your business will lead it or follow it.'
    },
  ]
},

{
  slug: 'owasp-security-guide',
  coverImg: imgOwasp,
  tagline: 'Security',
  subheadline: 'Security Risks to Watch Out For in Your Web Application',
  authorName: 'Sankalp',
  authorRole: 'Security Architecture Lead',
  authorImage: authorHariraj,
  publishDate: 'August 23, 2022',
  contentBlocks: [
    {
      type: 'intro',
      text: "OWASP — the Open Web Application Security Project — is a worldwide not-for-profit organization focused on improving software security, regularly publishing the top security holes across applications and suggestions for fixing them. The major cause of security issues is that security is an afterthought. Security should be baked into the design of the application, not patched in later."
    },
    {
      type: 'paragraph',
      text: "This article borrows heavily from OWASP and presents the same from a developer's point of view. The sections below provide an overview of each vulnerability and point to detailed resources, describing possible technologies used and marking potential risks."
    },
    {
      type: 'heading',
      text: 'Injection'
    },
    {
      type: 'image_text',
      image: case10,
      imageAlt: 'Application security and injection attacks',
      imageLeft: false,
      text: 'An injection attack occurs when user input is entered such that executing code produces undesired data. This happens when input is not validated or filtered — famously in SQL injection but equally applicable to NoSQL, ORM and LDAP. Consider a login query using username and password fields — if a user enters "username ; Select * From Users;" the query evaluates and exposes all users. All sources of input — cookies, form fields, JSON, headers — must be validated. Filtering code ensures protection.'
    },
    {
      type: 'heading',
      text: 'Authentication, Access and Data Vulnerabilities'
    },
    {
      type: 'bullets',
      items: [
        'Broken Authentication — Exploited via brute force attacks on known username and password databases, and session hijacking. Fixed by enforcing strong passwords, Single Sign-On, SSL, and two-factor authentication.',
        'Sensitive Data Exposure — If data is intercepted it should not be usable. Man-in-the-middle attacks must be stopped. Sensitive data must be salted and encrypted in motion and at rest — credit cards, FTP files and all shared data must travel over TLS/SSL with strong algorithms and keys.',
        'Broken Access Control — Authentication controls who has access but not what kind of access. Defining access control only in UI without enforcing it on the API or business layer is poor practice. Claims-based or role-based authorization frameworks greatly improve protection against unprivileged access.',
        'XML External Entities — XML and JSON parsers can have vulnerabilities allowing execution of unwanted code. In modern dynamic languages, code scripts may be embedded in data and executed server-side.',
      ]
    },
    {
      type: 'heading',
      text: 'Infrastructure, Code and Runtime Vulnerabilities'
    },
    {
      type: 'bullets',
      items: [
        'Security Misconfiguration — Poor hardening leaves vulnerabilities open — especially items left configured for development debugging that reach production. Running processes as root, exposing stack traces and incorrect directory privileges all increase attack surface. Once patched, the surface area is greatly reduced.',
        'Cross-Site Scripting (XSS) — JavaScript may be embedded in user input and stored in a database, then executed on a victim\'s computer to transmit vital information or redirect users. Anti-XSS filters on incoming HTTP streams prevent this.',
        'Insecure Deserialization — Serialized input when deserialized may exploit underlying issues such as buffer overflow. Strict type checks and deserialization into known entities provide safety, though this is harder to manage in dynamic languages.',
        'Using Components with Known Vulnerabilities — New vulnerabilities are found regularly in applications and libraries. Attackers rely on long patch cycles. It is imperative to apply patches as and when they become available.',
      ]
    },
    {
      type: 'quote',
      text: 'Excellent logging not only helps prevent and circumvent attacks but also informs of security problems that may be fixed before they are exploited.',
      attribution: 'On Insufficient Logging & Monitoring'
    },
    {
      type: 'paragraph',
      text: 'Monitoring and alerting are primary tools for finding and taking immediate corrective action. When an attack occurs, logs are the primary tool for response and postmortem. Tools such as Splunk, ELK and Logstash may be employed to actively respond to attacks. Security is not a feature to be added — it is a discipline to be designed in from the start.'
    },
  ]
},

  {
  slug: 'postulates-to-ai',
  coverImg: imgPostulates,
  tagline: 'Artificial Intelligence',
  subheadline: 'Postulates to Artificial Intelligence',
  authorName: 'Sankalp',
  authorRole: 'ML Engineering Lead',
  authorImage: authorDeepak,
  publishDate: 'August 23, 2022',
  contentBlocks: [
    {
      type: 'intro',
      text: "What is intelligence — and can a machine possess it? This article begins with that philosophical question, traces it through the Turing Test and the Chinese Room argument, and arrives at the distinction between Specialized AI and General AI. It then pivots to one of the most practical technology shifts in modern computing: containers — what they are, how they differ from virtual machines, and why enterprises should start investing in them now."
    },
    {
      type: 'paragraph',
      text: "Denis Diderot wrote in Pensées Philosophiques: 'If they find a parrot who could answer to everything, I would claim it to be an intelligent being without hesitation.' Extended to machines — would a machine that answers everything as a human would, be intelligent? These questions remain largely philosophical, open to interpretation, and as yet unanswered."
    },
    {
      type: 'heading',
      text: 'The Turing Test — Defining Machine Intelligence'
    },
    {
      type: 'image_text',
      image: case11,
      imageAlt: 'Turing test and machine intelligence',
      imageLeft: false,
      text: 'Alan Turing, one of the first pioneers in machine intelligence, proposed: "If a machine behaves as intelligently as a human being, then it is as intelligent as a human being." In a 1950 paper he reduced the problem of defining intelligence to a simple question of conversation — if a human interrogator talking to either a human or a computer behind closed screens cannot distinguish between the two, the computer may be considered intelligent.'
    },
    {
      type: 'bullets',
      items: [
        'Intelligence vs Consciousness — Would a machine have consciousness and be able to feel? Is consciousness required for intelligence?',
        'Dualism — Does intelligence have only physical components, or does it also have non-physical ones?',
        'Scope of AI — A machine that can solve all problems a human can. To achieve this, all aspects of learning and features of intelligence must be precisely defined so a machine may simulate them.',
      ]
    },
    {
      type: 'heading',
      text: 'The Chinese Room — Strong AI vs Weak AI'
    },
    {
      type: 'paragraph',
      text: 'One of the top criticisms of the Turing Test is the Chinese Room argument. Assume a computer program accepts input in Chinese and produces a response in Chinese, passing the Turing Test. Does the program understand Chinese — or is it simulating understanding? If it understands, it is Strong AI. If it merely simulates, it is Weak AI.'
    },
    {
      type: 'bullets',
      items: [
        'Why should intelligence be defined in terms of human capabilities and limitations — should intelligence not be larger than human capacity?',
        'Human intelligence is driven by experience, instincts and the unconscious mind that does not follow fixed rules.',
        'The Turing Test is unable to distinguish intelligence as defined by babies or children.',
        'What if the program maps every neuron in a human brain? Would intelligence require functioning within limited capacity and resources, as humans do?',
      ]
    },
    {
      type: 'quote',
      text: 'Artificial General Intelligence is the creation of machine intelligence that could do anything a human can — an active area of research that requires understanding human intelligence before it may be synthesized.',
      attribution: 'Specialized AI vs General AI'
    },
    {
      type: 'paragraph',
      text: 'Systems such as machine learning and deep learning produce Specialized AI — good at one trained task such as playing chess or classifying images, requiring retraining for new problem classes. Artificial General Intelligence — the ability to solve a large class of problems as a human would — remains the frontier.'
    },
    {
      type: 'heading',
      text: 'Containers — Virtualization Evolved'
    },
    {
      type: 'paragraph',
      text: 'In the world we live in, computer technology is expanding at an unprecedented rate. One concept borrowed from the mainframe world — containers — has taken the tech world by storm. To understand containers, one must first understand virtualization: the ability to create a virtual instance of a resource — hardware, device or operating system.'
    },
    {
      type: 'bullets',
      items: [
        'Hypervisor — Virtualizes hardware by creating virtual disks, CPUs and network interfaces. The VM hosts an OS which hosts applications. Type 1 (bare metal) runs directly on hardware; Type 2 requires a host OS.',
        'Abstract Computers (JVM, CLR) — Run inside an OS and provide a completely different instruction set than raw hardware. Essentially programming models making software development friendlier.',
        'LPAR — Logical partitioning of mainframe resources, allowing separate virtualized computers with separate operating systems.',
        'Containers — Virtualize the operating system itself, not the hardware. The OS kernel allows multiple isolated user-space instances. Each container feels like a real OS but competing resources are managed by the underlying OS.',
      ]
    },
    {
      type: 'image_text',
      image: imgEnterprise,
      imageAlt: 'Docker containers and DevOps deployment',
      imageLeft: true,
      text: 'Containers have several benefits over traditional hypervisors. Each VM instance does not require a separate OS installation — reducing memory, CPU footprint and licensing costs for OS and antivirus. Startup and shutdown times drop from minutes to single-digit seconds. From a DevOps perspective, a container guarantees identical configuration and software across all environments — no configuration mismatch between development, test and production. The build process prepares a container image; that image is what gets deployed.'
    },
    {
      type: 'bullets',
      items: [
        'Challenge — Containers require load balancers that can work across different ports, unlike VMs where no such port mapping is needed.',
        'Risk — If the host OS fails, it may bring down multiple containers simultaneously — unlike VMs where one VM failure does not affect others.',
        'Isolation — VMs provide stronger isolation; users managing containers have access to all containers on a machine. Databases are particularly hard to manage in containers.',
        'Distribution — Container instances should be distributed across separate physical OS instances. Tools like CoreOS manage containers across separate physical machines for reliability.',
      ]
    },
    {
      type: 'quote',
      text: 'Enterprises should start investing in containers and take the first steps they took for VMs and clouds. This transition will need a mindset change where DB, application and network teams trust each other.',
      attribution: 'Container Adoption — The Path Forward'
    },
    {
      type: 'paragraph',
      text: 'Virtualization is also moving beyond servers — new techniques now exist to virtualize the mobile ecosystem, allowing a single phone to run multiple mobile VMs with different images for home and work. From machine intelligence to container infrastructure, these are not isolated concepts — they are converging threads of a computing landscape expanding faster than at any point in history. Container virtualization is here to stay. Start preparing.'
    },
  ]
},

  {
  slug: 'containers-overview',
  coverImg: imgContainers,
  tagline: 'Enterprise Architecture',
  subheadline: 'An Overview of Containers',
  authorName: 'Sankalp',
  authorRole: 'Enterprise Architecture Lead',
  authorImage: authorGauravV,
  publishDate: 'August 23, 2022',
  contentBlocks: [
    {
      type: 'intro',
      text: "One concept borrowed from the mainframe world — containers — has taken the tech world by storm. To understand containers, we must start with virtualization: the ability to create a virtual instance of a resource, whether hardware, device or operating system. This covers hypervisors, abstract computers like JVM, LPARs and OS-level containers. On the face of it these technologies may seem similar — but they are not."
    },
    {
      type: 'heading',
      text: 'The Virtualization Landscape'
    },
    {
      type: 'bullets',
      items: [
        'Hypervisor — Virtualizes hardware by creating virtual disks, CPUs and network interfaces. The virtual machine hosts an OS which in turn hosts applications. Type 1 (bare) hypervisors run directly on hardware; Type 2 require a host OS.',
        'Abstract Computers (JVM / CLR) — Run inside an OS and provide a completely different instruction set than raw hardware. They are programming models designed to make software development friendly.',
        'LPAR — A technique to logically divide and allocate resources of a mainframe, allowing separate virtualized computers that may host separate operating systems.',
        'Containers — Virtualize the operating system itself rather than the hardware. The OS kernel allows multiple isolated user-space instances, each feeling like a real OS while the kernel manages competing resources.',
      ]
    },
    {
      type: 'heading',
      text: 'How Containers Work — Docker'
    },
    {
      type: 'image_text',
      image: case12,
      imageAlt: 'Docker containers and OS virtualization',
      imageLeft: true,
      text: 'Containers are OS-level virtualization. Each container feels it has access to a root directory but using chroot, each is in a separate directory. For example, running a Tomcat container maps its internal port 8080 to an external port 8888 on the real machine — something hardware virtualization does not require. This allows multiple container instances to run within one OS, each mapped to a different physical port. The primary deployment benefit is that a container guarantees configuration and software across all environments — a Tomcat 8 container with JDK 8 is identical everywhere, with no configuration mismatch.'
    },
    {
      type: 'heading',
      text: 'Containers vs. Hypervisors — Benefits and Challenges'
    },
    {
      type: 'bullets',
      items: [
        'No separate OS per instance — Containers do not require a full operating system installation per instance, reducing memory, CPU footprint and licensing costs for OS, antivirus and related software.',
        'Faster startup — Launching a container takes single-digit seconds versus minutes for a VM, since no full OS boot sequence is required.',
        'Lower isolation — If the host OS fails, it may bring down multiple containers. In the VM world, one VM failing does not affect others. Type 1 hypervisors (standard in commercial clouds) further minimise risk.',
        'Resource management still required — Containers, like VMs, require resource allocation to ensure no starvation occurs across instances.',
        'Load balancing complexity — Containers introduce the need for load balancers that can work across applications on different ports.',
        'Databases are harder to manage — Containers are not well suited to stateful workloads like databases. Users managing containers have access to all containers on a machine, reducing isolation.',
      ]
    },
    {
      type: 'quote',
      text: 'Containers are the future and are here to stay. Enterprises should start investing in containers and take the first steps like they took for VMs and clouds.',
      attribution: 'On Enterprise Container Adoption'
    },
    {
      type: 'paragraph',
      text: 'To improve reliability, container instances should be distributed across separate physical OS instances. Tools like CoreOS — a distributed Linux OS — manage containers across separate physical machines. This transition will require a mindset change where DB, application and network teams trust each other and collaborate on shared infrastructure.'
    },
    {
      type: 'paragraph',
      text: 'Finally, virtualization is no longer limited to servers. New techniques now exist to virtualize the mobile ecosystem — a single mobile phone could run multiple mobile VMs, enabling one device for both home and work with separate images, and reducing development and testing overhead by building against a VM deployable on any hardware.'
    },
  ]
},
{
  slug: 'dna-data-storage-future',
  coverImg: imgDna,
  tagline: 'Deep Storage',
  subheadline: 'DNA For Storage and Archival of Data',
  authorName: 'Sankalp',
  authorRole: 'ML Engineering Lead',
  authorImage: authorDeepak,
  publishDate: 'August 23, 2022',
  contentBlocks: [
    {
      type: 'intro',
      text: "This is one of those million-years-into-the-future kind of articles — part of a larger series on uncharted horizons, technologies in their inception phase or sitting in someone's lab. DNA for computing and data storage are upcoming biological technologies currently in development. This article explores DNA as a medium for long-term storage, redundancy, data replication and error correction."
    },
    {
      type: 'heading',
      text: 'What Makes DNA a Great Medium for Data Storage?'
    },
    {
      type: 'image_text',
      image: case13,
      imageAlt: 'DNA data storage biological computing',
      imageLeft: true,
      text: 'DNA has several advantages over traditional storage mechanisms — from magnetic mediums to solid state drives. One gram of DNA can store over 200 petabytes of data for a period of two millennia. As a biological building block designed to replicate, DNA has extreme self-correcting measures built in — checking itself against mutation at every step. And being a product of biological evolution, DNA is potentially apocalypse-proof: even if a planet-wide disaster sent future generations down a different technological path, DNA could still be read.'
    },
    {
      type: 'bullets',
      items: [
        'Extreme density — One gram of DNA can store over 200 petabytes of data per gram for a period of two millennia, far exceeding any current storage medium.',
        'Self-error correcting — DNA is designed to replicate and has built-in mechanisms to check and correct itself against mutation.',
        'Very long life — DNA survives for millennia but requires a cold and dry environment for preservation.',
        'Apocalypse-proof — As a biological medium independent of current technology stacks, DNA could potentially still be read by future generations even after a civilisation-level disruption.',
      ]
    },
    {
      type: 'heading',
      text: 'Where the Technology Stands Today'
    },
    {
      type: 'paragraph',
      text: 'Current DNA storage technologies are not commercially available and tend to be read-only. Until recently, access to data on DNA has been sequential and hence extremely slow. New research by Microsoft is creating synthetic DNA and using a library of primers attached to DNA sequences — primers combined with polymerase chain reaction allow targeting of specific DNA sequences, moving toward random access rather than sequential reads.'
    },
    {
      type: 'quote',
      text: 'The study of DNA for storage also leads to DNA computing — where biological models like DNA and molecules may be used for computing itself, not just storage.',
      attribution: 'On the broader implications of biological computing'
    },
    {
      type: 'paragraph',
      text: 'This technology is not available today but is a must to watch. As research from labs like Microsoft advances synthetic DNA and random-access retrieval, what is today a theoretical horizon may become the foundational storage architecture of a future that current mediums simply cannot sustain.'
    },
  ]
}
]
