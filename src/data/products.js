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
  },

  // ─── QAMP ────────────────────────────────────────────────────────────────
  {
    id:          4,
    slug:        'qamp',
    name:        'Qamp',
    domain:      'Smart Infrastructure',
    builtYear:   2022,
    tagline:     'Intelligent infrastructure management at scale.',
    description: 'Qamp is an IoT-enabled building intelligence platform that monitors, optimises, and predicts the behaviour of physical infrastructure — from energy systems to occupancy patterns. It turns passive buildings into data-driven environments that reduce operational cost, prevent equipment failure, and improve the experience of everyone inside.',
    motive:      'Buildings account for 40% of global energy consumption, yet most are managed by legacy systems that react rather than anticipate. We built Qamp to embed intelligence into physical infrastructure — making buildings active participants in reducing waste and preventing the failures that cost operations teams the most.',
    problemSolved: 'Facility managers were reacting to failures rather than preventing them, and energy was being wasted on unoccupied spaces running at full capacity. Qamp\'s predictive intelligence layer surfaces failure indicators 72+ hours in advance and cuts energy waste significantly — shifting facilities from reactive to proactive management.',
    features: [
      { icon: 'Wifi',   label: 'IoT Monitoring',         desc: 'Real-time sensor data from HVAC, lighting, access control, and energy systems — unified across all building zones in a single operational view.' },
      { icon: 'Zap',    label: 'Energy Optimisation',    desc: 'AI-driven energy scheduling that cuts consumption by predicting occupancy patterns, adjusting systems proactively, and eliminating waste in unoccupied zones.' },
      { icon: 'Wrench', label: 'Predictive Maintenance', desc: 'Anomaly detection and failure prediction that surfaces maintenance needs an average of 72 hours before systems fail — shifting from reactive to preventive operations.' },
    ],
    howItWorks: [
      { step: '01', title: 'Instrument Your Facility',       desc: 'Deploy IoT sensors across your building systems — HVAC, lighting, access control, energy meters, and occupancy detectors. Qamp\'s hardware-agnostic layer connects devices from 50+ manufacturers without proprietary lock-in.' },
      { step: '02', title: 'Ingest Real-Time Data',          desc: 'Every sensor reading flows into Qamp\'s unified data layer in real time. Readings are normalised, timestamped, and stored — building a complete operational timeline from the moment Qamp goes live.' },
      { step: '03', title: 'Surface Intelligence Automatically', desc: 'Qamp\'s AI layer analyses sensor data continuously — detecting anomalies, forecasting equipment failures 72+ hours ahead, and identifying energy waste patterns across systems and occupancy zones.' },
      { step: '04', title: 'Automate and Alert',             desc: 'Automated responses execute against configured rules: lights dim in unoccupied zones, HVAC pre-conditions before occupancy, and maintenance tickets are created before systems fail — with escalation paths that reach the right person fast.' },
    ],
    useCases: [
      { audience: 'Commercial Buildings',       title: 'Cut energy spend without cutting comfort',    desc: 'Office buildings reduce energy consumption by 35% on average through AI-driven HVAC scheduling, occupancy-based lighting, and demand forecasting — with no measurable impact on occupant comfort.' },
      { audience: 'Hospitals & Healthcare',     title: 'Monitor critical systems without gaps',       desc: 'Healthcare facilities maintain continuous monitoring of HVAC, power, and temperature-sensitive environments — with real-time alerts for systems where downtime has direct clinical consequences.' },
      { audience: 'Manufacturing Plants',       title: 'Predict failures before they become downtime', desc: 'Manufacturers instrument production equipment with Qamp\'s predictive layer — receiving failure warnings 72+ hours ahead, dramatically reducing unplanned downtime and emergency maintenance costs.' },
      { audience: 'Smart Campuses',             title: 'Unify facility management at scale',          desc: 'University campuses and corporate parks manage energy, security, and maintenance across multiple buildings from a single dashboard — replacing disconnected BMS systems with one intelligent layer.' },
    ],
    metrics: [
      { value: '35%',  label: 'Energy Reduction',         context: 'Average reduction in energy consumption across commercial and institutional deployments in their first year on Qamp — validated against pre-deployment baselines.' },
      { value: '72h+', label: 'Failure Prediction Window', context: 'Qamp\'s anomaly detection surfaces equipment failure indicators an average of 72 hours before the event, enabling scheduled maintenance instead of emergency response.' },
      { value: '60%',  label: 'Less Unplanned Downtime',  context: 'Unplanned maintenance incidents drop by 60% on average across Qamp-instrumented facilities within six months of deployment.' },
    ],
    stat: { number: '35%', label: 'Average energy reduction' },
    logo: qampLogo,
  },
]
