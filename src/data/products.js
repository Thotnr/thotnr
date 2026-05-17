import djuboLogo      from '../assets/images/products/djubo.png'
import edumarshalLogo from '../assets/images/products/edumarshal.png'
import cittaLogo      from '../assets/images/products/citta.png'
import qampLogo       from '../assets/images/products/qamp.png'

export const products = [
  // ─── DJUBO ───────────────────────────────────────────────────────────────
  {
    id:          1,
    slug:        'djubo',
    name:        'Djubo',
    domain:      'Hospitality',
    builtYear:   2014,
    tagline:     'The operating system for modern hotels.',
    description: 'Djubo is a fully integrated hotel technology suite that consolidates property management, channel distribution, and revenue intelligence into one real-time platform. Built for independent properties and large chains alike, it removes the fragmentation that costs hotels time, revenue, and guest satisfaction.',
    motive:      'Hotels were losing revenue to fragmented tools — one system for bookings, another for pricing, another for guest records. We built Djubo to give properties a single source of truth: one platform that sees everything, acts intelligently, and scales as the business grows.',
    problemSolved: 'Properties were operating across 5–7 disconnected tools, causing double bookings, manual reconciliation, and blind-spot pricing decisions. Djubo unified the entire hotel operation under one intelligent layer — eliminating the gaps where revenue was quietly disappearing.',
    features: [
      { icon: 'Building2', label: 'Channel Management',   desc: 'Sync rates and availability across 100+ OTAs in real time — eliminating overbookings, rate parity violations, and the daily manual update cycle.' },
      { icon: 'BarChart2', label: 'AI Revenue Manager',   desc: 'Machine learning-driven pricing engine that continuously analyses demand signals, competitor rates, and occupancy forecasts to maximise RevPAR automatically.' },
      { icon: 'Users',     label: 'Unified Operations',   desc: 'PMS, housekeeping, F&B, point-of-sale, and guest communication — all from one interface, from check-in to checkout.' },
    ],
    howItWorks: [
      { step: '01', title: 'Connect Your Property',      desc: 'Set up your hotel on Djubo, link to your existing PMS, and configure room types, rate plans, and distribution rules in a guided onboarding flow.' },
      { step: '02', title: 'Sync Across All Channels',   desc: 'Djubo pushes real-time rate and availability updates to 100+ OTAs simultaneously — eliminating overbookings and the manual update cycles that cost properties hours each day.' },
      { step: '03', title: 'Let AI Price Your Rooms',    desc: 'The AI Revenue Manager analyses demand trends, competitor rates, and market signals to set optimal pricing automatically — without manager intervention.' },
      { step: '04', title: 'Run Your Full Operation',    desc: 'Front desk, housekeeping, F&B, billing, and guest communication all operate from a single interface — one connected system from arrival to checkout.' },
    ],
    useCases: [
      { audience: 'Independent Hotels',     title: 'Replace five tools with one platform',      desc: 'Boutique and independent properties running separate PMS, channel manager, booking engine, and rate shopper systems eliminate integration overhead — and the revenue gaps that come with it.' },
      { audience: 'Hotel Chains & Groups',  title: 'Centralise multi-property management',      desc: 'Chain operators gain a consolidated view of inventory, pricing, and performance across every property, with group-level rate strategies that push to individual hotels in real time.' },
      { audience: 'Resort Operators',       title: 'Manage complex ancillary revenue',          desc: 'Resorts with F&B, spa, activities, and multiple room categories integrate every revenue centre into one operational system — with unified billing and guest profile management.' },
      { audience: 'Revenue Managers',       title: 'Price with data, not instinct',             desc: 'Djubo\'s AI Revenue Manager tracks competitor pricing and demand signals continuously, giving revenue teams the intelligence to defend rate decisions and capture RevPAR they were leaving on the table.' },
    ],
    metrics: [
      { value: '2,500+', label: 'Hotels on Platform',   context: 'Independent hotels, boutique properties, and chains across 19 countries managing their full operation on Djubo.' },
      { value: '100+',   label: 'OTA Connections',      context: 'Real-time two-way sync with global and regional booking platforms — Booking.com, Expedia, Agoda, Airbnb, and beyond.' },
      { value: '19',     label: 'Countries Served',     context: 'From South Asia to the Middle East and Southeast Asia — Djubo operates where hospitality businesses actually grow.' },
    ],
    stat: { number: '2,500+', label: 'Hotels on platform' },
    logo: djuboLogo,
    logoW: 220,
    logoH: 100,
  },

  // ─── EDUMARSHAL ──────────────────────────────────────────────────────────
  {
    id:          2,
    slug:        'edumarshal',
    name:        'Edumarshal',
    domain:      'Education',
    builtYear:   2018,
    tagline:     'Institutional intelligence for the modern school.',
    description: 'Edumarshal is a comprehensive 50+ module ERP system designed for schools and educational institutions. It integrates student lifecycle management, academic operations, fee collection, and HR into a single platform — digitising the full administrative and academic lifecycle from admissions to alumni.',
    motive:      'Educational institutions were running on paper registers, disconnected fee software, and manual attendance — each system creating its own data island. We built Edumarshal to give institutions one intelligent platform that understands the full student journey, from first application to final result.',
    problemSolved: 'Schools and colleges were spending 30–40% of administrative time on manual data entry and reconciliation across isolated systems. Edumarshal unified the institution\'s entire operational layer, freeing educators to focus on outcomes rather than administrative overhead.',
    features: [
      { icon: 'BookOpen',   label: 'Academic Management',  desc: 'Auto-generated timetabling, daily attendance tracking, multi-scheme grade management, and real-time result publishing — all connected in one academic workflow.' },
      { icon: 'CreditCard', label: 'Fee & Finance',         desc: 'Automated fee reminders, multi-gateway online payment collection, real-time reconciliation, and financial dashboards that eliminate the manual ledger.' },
      { icon: 'Calendar',   label: 'Stakeholder Engagement', desc: 'Real-time communication between teachers, students, and parents — events, assessments, and updates visible in one portal, from any device.' },
    ],
    howItWorks: [
      { step: '01', title: 'Configure Your Institution',   desc: 'Set up your full academic structure — departments, classes, batches, grading schemes, and fee rules — in a guided configuration that applies across all campuses and academic years.' },
      { step: '02', title: 'Manage Admissions Digitally',  desc: 'Process applications, shortlist candidates, and complete enrollments through a fully digital workflow. Student records created at admission carry automatically through every subsequent module.' },
      { step: '03', title: 'Run Academics End to End',     desc: 'Auto-generated timetables, daily attendance, internal assessments, result publishing, and parent communication all operate within the same connected system — visible to every stakeholder in real time.' },
      { step: '04', title: 'Close the Financial Loop',     desc: 'Automated fee reminders, multi-gateway payment collection, and real-time reconciliation eliminate the manual ledger work that consumes administrative bandwidth every month.' },
    ],
    useCases: [
      { audience: 'Schools & K-12',           title: 'From admission to report card in one system', desc: 'Schools running paper registers, disconnected fee software, and manual examination tracking consolidate every process into Edumarshal — with parent-facing portals and automated communication included by default.' },
      { audience: 'Colleges & Universities',   title: 'Managing complex multi-department workflows', desc: 'Higher education institutions with elective structures, multi-department timetabling, and large student populations manage complexity without adding administrative headcount.' },
      { audience: 'Coaching Institutes',       title: 'Batch management at high volume',             desc: 'Coaching centres running concurrent batches across subjects track attendance, deliver assessments, and communicate results — without spreadsheets or manual reconciliation.' },
      { audience: 'Multi-Campus Networks',     title: 'One dashboard, every campus',                 desc: 'School chains and multi-campus groups manage all institutions from a centralised view while preserving campus-level autonomy — with consolidated reporting for leadership.' },
    ],
    metrics: [
      { value: '300+', label: 'Institutions Served', context: 'Schools, colleges, and coaching institutes across India and Southeast Asia running full institution management on Edumarshal.' },
      { value: '50+',  label: 'Integrated Modules',  context: 'From admissions to alumni — every dimension of institutional life covered in one platform without third-party integrations.' },
      { value: '40%',  label: 'Admin Time Saved',    context: 'Average reduction in administrative overhead across institutions in their first academic year on the platform, validated across the client base.' },
    ],
    stat: { number: '300+', label: 'Institutions served' },
    logo: edumarshalLogo,
    logoW: 300,
    logoH: 130,
  },

  // ─── CITTA ───────────────────────────────────────────────────────────────
  {
    id:          3,
    slug:        'citta',
    name:        'Citta',
    domain:      'Enterprise Data',
    builtYear:   2021,
    tagline:     'The multi-tenant SaaS platform for data-driven applications.',
    description: 'Citta is an enterprise-grade, multi-tenant SaaS platform that lets organisations design data applications, manage complex pipelines, and distribute reusable solutions across teams and clients — all from a unified, secure, and scalable environment. Built for organisations that need to deliver data-driven applications at scale, with strong tenant isolation, version control, and reusable solution distribution.',
    motive:      'Organisations were building data applications across fragmented stacks — separate tools for ETL, BI, and application development, each creating its own data island. We built Citta to collapse that complexity into a single governed platform where pipelines, application logic, and multi-tenant distribution all live and operate together.',
    problemSolved: 'Data engineering teams were spending 60–70% of their time on integration plumbing rather than value-generating logic, while enterprise clients needed to distribute solutions across multiple client tenants without building custom infrastructure. Citta\'s marketplace, POD-based isolation, and visual pipeline builder eliminate both problems simultaneously.',
    features: [
      { icon: 'Layers',     label: 'Multi-Tenant Architecture', desc: 'Host multiple tenants on a single platform with full isolation — configurable single-tenant or multi-tenant PODs, dedicated database servers, and selective metadata synchronisation.' },
      { icon: 'Package',    label: 'Solution Marketplace',      desc: 'ASSET tenants publish reusable Solution Packages. CLIENT tenants subscribe, customise, and deploy — without duplicating object data or breaking upstream components.' },
      { icon: 'ShieldCheck', label: 'Enterprise Security',      desc: 'Row-Level Security, OKTA SSO, tenant-level data isolation, and encrypted secrets management for HIPAA, GDPR, and PCI DSS deployment patterns.' },
    ],
    howItWorks: [
      { step: '01', title: 'Design Your Tenant Hierarchy',  desc: 'Define your organisational structure — from top-level instance through tenants, accounts, and App Groups. Each tenant is designated ASSET (builder) or CLIENT (consumer), with POD-level isolation configured from day one.' },
      { step: '02', title: 'Build Data Applications Visually', desc: 'Create objects, define fields and relationships, and configure ETL pipelines through a visual Read → Transform → Write interface. SQL nodes, custom functions, and Spark connectors handle every enterprise data engineering pattern.' },
      { step: '03', title: 'Package and Version Solutions', desc: 'Wrap App Groups and Data Projects into Solution Packages with full version control. Create releases, map them to deployment environments, and maintain a complete audit trail from first commit to production.' },
      { step: '04', title: 'Distribute Through the Marketplace', desc: 'ASSET tenants publish Solution Packages to the centralised marketplace. CLIENT tenants subscribe, install, and customise without altering the original. Customised solutions can be republished to other clients — without duplicating object data.' },
    ],
    useCases: [
      { audience: 'Healthcare Organisations',  title: 'HIPAA-compliant data in dedicated PODs',      desc: 'Patient record management in single-tenant PODs meets HIPAA isolation requirements without custom infrastructure — Citta\'s architecture enforces the boundary at the platform level.' },
      { audience: 'Financial Services',         title: 'Maximum isolation for sensitive data',         desc: 'Banks and financial institutions use single-tenant POD configuration with customised encryption and access controls to meet internal security policies and regulatory mandates.' },
      { audience: 'SaaS Vendors',               title: 'Build once, distribute to many clients',       desc: 'Software vendors use ASSET tenants to build and publish Solution Packages. Each CLIENT tenant installs, customises, and operates independently — Citta handles all distribution mechanics.' },
      { audience: 'Enterprise Data Teams',      title: 'One platform to build, deploy, and govern',   desc: 'Large enterprises replace fragmented ETL tools, BI stacks, and bespoke application frameworks with a single governed platform for data ingestion, transformation, and distribution.' },
      { audience: 'E-Commerce Platforms',       title: 'Dedicated resources for peak performance',    desc: 'High-traffic platforms use dedicated PODs to guarantee resource exclusivity during peak seasons — performance is isolated from other tenants regardless of platform-wide load.' },
      { audience: 'CI/CD Engineering Teams',    title: 'Isolated environments, zero conflicts',        desc: 'Separate development, testing, and production environments prevent interference between concurrent releases — critical for teams running continuous deployment without risking data integrity.' },
    ],
    metrics: [
      { value: '2,000+', label: 'Object Partitions',       context: 'Citta\'s partitioning engine supports up to 2,000 partitions per object for high-volume, high-cardinality enterprise data management at scale.' },
      { value: '150+',   label: 'Integration Connectors',  context: 'Native Spark, Hadoop, and S3 connectors alongside custom JAR deployment — every enterprise data source has a path into Citta.' },
      { value: '3',      label: 'Compliance Frameworks',   context: 'HIPAA, GDPR, and PCI DSS deployment patterns built into Citta\'s architecture — structural isolation from day one, not retrofitted compliance.' },
    ],
    stat: { number: '150+', label: 'Integration connectors' },
    logo: cittaLogo,
    logoW: 220,
    logoH: 120,
  },

  // ─── QAMP ────────────────────────────────────────────────────────────────
  {
    id:          4,
    slug:        'qamp',
    name:        'Qamp',
    domain:      'Hyperlocal',
    builtYear:   2025,
    tagline:     'AI-first hyper-local discovery and communication for India.',
    description: 'Qamp is an AI-first hyperlocal discovery and communication platform built for India\'s booming services sector. It connects communities, individuals, and local businesses through seamless, geo-contextual communication — making local services discoverable, accessible, and easy to engage with. Fully bootstrapped and incubated by Thotnr, Qamp\'s MVP is targeting launch in key Indian markets by end of Q2 2026.',
    motive:      'India\'s services sector is growing faster than any market on earth, yet local businesses and service providers remain invisible online — hidden behind aggregators that extract margin without building real relationships. We built Qamp to close this gap: giving communities, individuals, and businesses a single hyper-local layer where discovery is AI-powered, communication is seamless, and the local economy can actually work for the people in it.',
    problemSolved: 'Local service businesses in India lack a direct channel to their community — they either pay aggregator commissions or rely entirely on word-of-mouth. Consumers can\'t easily discover trusted local services, and communities have no unified communication layer. Qamp addresses all three simultaneously: AI-driven discovery, community communication, and business visibility — purpose-built for the world\'s fastest-growing B2C market.',
    features: [
      { icon: 'MapPin',       label: 'AI-Powered Discovery',        desc: 'Geo-aware AI that surfaces relevant local services, businesses, and community listings based on location, context, and behaviour — not paid placements or aggregator rankings.' },
      { icon: 'MessageCircle', label: 'Community Communication',    desc: 'A unified communication layer connecting communities, individuals, and businesses in the same hyper-local context — from neighbourhood announcements to direct service requests.' },
      { icon: 'Briefcase',    label: 'Services Sector Focus',       desc: 'Purpose-built for India\'s burgeoning services economy — from home services to local retail — with an architecture that scales from a single market to pan-India coverage.' },
    ],
    howItWorks: [
      { step: '01', title: 'Discover Your Local Context',       desc: 'Set your location and Qamp maps your hyper-local world — nearby businesses, community groups, and service providers visible within your geographic context from day one.' },
      { step: '02', title: 'Communicate Across Your Community', desc: 'Send and receive communications within your hyper-local network — between neighbours, community associations, and local businesses — all within a single unified platform.' },
      { step: '03', title: 'Find and Engage Local Services',    desc: 'Browse AI-curated service providers relevant to your context, read community-verified responses, and connect directly — no aggregator layer, no commission extraction.' },
      { step: '04', title: 'Grow as a Local Business',          desc: 'Businesses and service providers list their offerings, manage their community presence, and receive direct enquiries — gaining geo-contextual visibility without platform dependency.' },
    ],
    useCases: [
      { audience: 'Community Residents',            title: 'Everything local, in one place',              desc: 'Discover verified local services, stay connected with neighbourhood updates, and communicate directly with local businesses — all within a single hyper-local feed tailored to your location.' },
      { audience: 'Local Service Providers',        title: 'Get discovered without the commission',        desc: 'Service providers gain visibility in their target geography without paying aggregator margins — building a direct community presence and managing enquiries without platform dependency.' },
      { audience: 'Local Businesses',               title: 'Reach customers in your radius',              desc: 'Reach customers within your service area through geo-contextual visibility and community communication tools — direct engagement, not algorithmic placement.' },
      { audience: 'Community Associations & RWAs',  title: 'Manage community communications at scale',    desc: 'Resident welfare associations manage community announcements, connect residents with vetted service providers, and maintain a living local directory — all from one platform.' },
    ],
    metrics: [
      { value: '#1',       label: 'Fastest-Growing B2C Market', context: 'India is the world\'s fastest-growing B2C market. Qamp is purpose-built for this economy — targeting key Indian markets for MVP launch by end of Q2 2026.' },
      { value: 'AI-First', label: 'Discovery Architecture',     context: 'Qamp\'s discovery engine is AI-native from inception — not retrofitted intelligence on a legacy platform. Every recommendation and match is contextually intelligent.' },
      { value: 'Q2 2026',  label: 'MVP Launch Target',          context: 'Qamp is targeting MVP launch in key Indian markets by end of Q2 2026, fully bootstrapped and incubated within Thotnr.' },
    ],
    stat: { number: 'Q2 \'26', label: 'MVP launch target' },
    logo: qampLogo,
    logoW: 180,
    logoH: 80,
  },
]
