import djuboLogo      from '../assets/images/products/djubo.png'
import edumarshalLogo from '../assets/images/products/edumarshal.png'
import cittaLogo      from '../assets/images/products/citta.png'
import qampLogo       from '../assets/images/products/qamp.png'

export const products = [
  {
    id:          1,
    name:        'Djubo',
    domain:      'Hospitality',
    builtYear:   2014,
    tagline:     'The operating system for modern hotels.',
    description: 'Djubo is a full-stack hospitality intelligence platform that consolidates reservations, revenue management, and front-desk operations into a single, real-time system. Built for independent properties and large chains alike, it removes the fragmentation that costs hotels time, revenue, and guest satisfaction.',
    motive:      'Hotels were losing revenue to fragmented tools — one system for bookings, another for pricing, another for guest records. We built Djubo to give properties a single source of truth: one platform that sees everything, acts intelligently, and scales as the business grows.',
    problemSolved: 'Properties were operating across 5–7 disconnected tools, causing double bookings, manual reconciliation, and blind-spot pricing decisions. Djubo unified the entire hotel operation under one intelligent layer — eliminating the gaps where revenue was quietly disappearing.',
    features: [
      { icon: 'Building2', label: 'Channel Management',   desc: 'Sync rates and availability across 100+ OTAs in real time — eliminating overbookings and manual updates.' },
      { icon: 'BarChart2', label: 'Revenue Intelligence', desc: 'Dynamic pricing engine that adjusts rates based on demand signals, competitor data, and occupancy forecasts.' },
      { icon: 'Users',     label: 'Front Desk Ops',       desc: 'Unified guest management from check-in to checkout — reservations, housekeeping, and billing in one flow.' },
    ],
    stat: { number: '1,200+', label: 'Hotels on platform' },
    logo: djuboLogo,
  },
  {
    id:          2,
    name:        'Edumarshal',
    domain:      'Education',
    builtYear:   2018,
    tagline:     'Institutional intelligence for the modern school.',
    description: 'Edumarshal is a comprehensive institution management platform that digitises the full administrative and academic lifecycle of a school or college. From admissions to alumni, it gives administrators, teachers, students, and parents a connected, real-time view of institutional life.',
    motive:      'Educational institutions were running on paper registers, disconnected fee software, and manual attendance — each system creating its own data island. We built Edumarshal to give institutions one intelligent platform that understands the full student journey.',
    problemSolved: 'Schools and colleges were spending 30–40% of administrative time on manual data entry and reconciliation across isolated systems. Edumarshal unified the institution\'s entire operational layer, freeing educators to focus on outcomes rather than overhead.',
    features: [
      { icon: 'BookOpen',   label: 'Academic Management', desc: 'Timetable scheduling, attendance tracking, grade management, and progress reporting in one connected flow.' },
      { icon: 'CreditCard', label: 'Fee Collection',      desc: 'Automated fee reminders, online payment collection, and real-time financial dashboards for administration.' },
      { icon: 'Calendar',   label: 'Parent Engagement',   desc: 'Real-time communication between teachers, students, and parents — events, assessments, and updates in one portal.' },
    ],
    stat: { number: '300+', label: 'Institutions served' },
    logo: edumarshalLogo,
  },
  {
    id:          3,
    name:        'Citta',
    domain:      'Skin Health',
    builtYear:   2021,
    tagline:     'Personalised skin intelligence, powered by AI.',
    description: 'Citta is an AI-driven skin health platform that analyses individual skin profiles and delivers clinically-informed, personalised care recommendations. It moves beyond generic skincare advice to provide a continuously evolving regimen based on how your skin responds over time.',
    motive:      'The skincare industry was built on generalisation — the same product pushed to millions of different skin types. We built Citta to invert that model: start from the individual, build a deep skin profile, and let the intelligence adapt as the skin changes.',
    problemSolved: 'Consumers were spending significantly on products that did not match their actual skin type or concerns. Citta\'s AI analysis reduced trial-and-error from months to minutes — delivering personalised regimens from the very first interaction.',
    features: [
      { icon: 'Scan',       label: 'AI Skin Analysis',    desc: 'Deep skin profiling using computer vision — texture, tone, hydration, and concern mapping in seconds.' },
      { icon: 'Sparkles',   label: 'Personalised Regimen',desc: 'AI-generated, clinician-reviewed skincare routines that evolve as your skin condition changes.' },
      { icon: 'TrendingUp', label: 'Progress Tracking',   desc: 'Monthly assessments that measure improvement, flag regressions, and refine recommendations continuously.' },
    ],
    stat: { number: '50K+', label: 'Skin profiles analysed' },
    logo: cittaLogo,
  },
  {
    id:          4,
    name:        'Qamp',
    domain:      'Smart Infrastructure',
    builtYear:   2022,
    tagline:     'Intelligent infrastructure management at scale.',
    description: 'Qamp is an IoT-enabled building intelligence platform that monitors, optimises, and predicts the behaviour of physical infrastructure — from energy systems to occupancy patterns. It turns passive buildings into data-driven environments that reduce cost and improve experience.',
    motive:      'Buildings account for 40% of global energy consumption, yet most are managed by legacy systems that react rather than anticipate. We built Qamp to embed intelligence into physical infrastructure — making buildings active participants in reducing waste.',
    problemSolved: 'Facility managers were reacting to failures rather than preventing them, and energy was wasted on unoccupied spaces running at full capacity. Qamp\'s predictive layer reduced energy waste significantly and cut unplanned maintenance incidents by half.',
    features: [
      { icon: 'Wifi',   label: 'IoT Monitoring',        desc: 'Real-time sensor data from HVAC, lighting, access, and energy systems — unified in a single operational view.' },
      { icon: 'Zap',    label: 'Energy Optimisation',   desc: 'AI-driven energy scheduling that cuts consumption by predicting occupancy patterns and demand cycles.' },
      { icon: 'Wrench', label: 'Predictive Maintenance',desc: 'Anomaly detection and failure prediction that surfaces maintenance needs before systems fail.' },
    ],
    stat: { number: '35%', label: 'Average energy reduction' },
    logo: qampLogo,
  },
]
