import { useState } from 'react'

const roles = [
  {
    id: 1,
    title: 'Senior Software Engineer – Java',
    department: 'Engineering',
    description: "Design and build high-throughput backend services for enterprise clients across banking, healthcare, and logistics. You'll own entire service domains — from architecture decisions to production observability.",
    responsibilities: [
      'Design scalable microservices using Java 17+ and Spring Boot',
      'Own the reliability and performance of services serving millions of requests',
      'Work directly with enterprise clients to understand domain requirements',
      'Mentor junior engineers and lead technical design reviews',
    ],
    requirements: [
      '5+ years building production Java services',
      'Strong understanding of distributed systems and event-driven architecture',
      'Experience with cloud platforms (AWS, GCP, or Azure)',
      'Excellent written communication — clients are senior stakeholders',
    ],
    meta: { experience: '5+ Years', openings: '2 Positions', location: 'Noida / Remote' },
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    description: "Build and operate the infrastructure that keeps enterprise AI systems running at scale. You'll work across CI/CD, Kubernetes, and cloud platforms — with a strong emphasis on reliability and cost efficiency.",
    responsibilities: [
      'Design and maintain Kubernetes clusters on AWS EKS and GCP GKE',
      'Build and optimise CI/CD pipelines using GitHub Actions and ArgoCD',
      'Implement infrastructure as code using Terraform',
      'Drive FinOps practices and cloud cost reduction initiatives',
    ],
    requirements: [
      '3+ years in a DevOps or platform engineering role',
      'Deep hands-on Kubernetes experience in production',
      'Proficiency with Terraform and infrastructure-as-code',
      'Experience with monitoring stacks (Prometheus, Grafana, OpenTelemetry)',
    ],
    meta: { experience: '3+ Years', openings: '3 Positions', location: 'Noida / Remote' },
  },
  {
    id: 3,
    title: 'AI / ML Engineer',
    department: 'AI & Data',
    description: "Build the ML systems that sit at the core of Thotnr's AI capabilities — from RAG pipelines and LLM integrations to predictive models and MLOps infrastructure. You'll take models from research into production.",
    responsibilities: [
      'Design and deploy RAG systems, fine-tuned LLMs, and ML pipelines',
      'Build MLOps infrastructure for model monitoring, versioning, and retraining',
      'Collaborate with clients to frame ML problems and interpret results',
      'Evaluate and integrate emerging AI frameworks and models',
    ],
    requirements: [
      '3+ years in applied ML or AI engineering roles',
      'Strong Python skills and proficiency with PyTorch or JAX',
      'Hands-on experience shipping LLM-based systems to production',
      'Familiarity with vector databases, embedding models, and retrieval systems',
    ],
    meta: { experience: '3+ Years', openings: '4 Positions', location: 'Noida / Remote' },
  },
  {
    id: 4,
    title: 'Frontend Engineer – React',
    department: 'Engineering',
    description: "Build the interfaces that enterprise users interact with daily — from AI copilot dashboards to complex data visualisation tools. You care about performance, accessibility, and pixel-level precision.",
    responsibilities: [
      'Build production React applications for enterprise clients',
      'Implement complex UI patterns: data tables, real-time dashboards, drag-and-drop',
      'Collaborate with designers to deliver faithful, accessible implementations',
      'Optimise for performance — Core Web Vitals, bundle size, and render efficiency',
    ],
    requirements: [
      '3+ years with React in production',
      'Strong CSS and layout skills — you can implement a design system from scratch',
      'Experience with TypeScript, state management, and testing',
      'Attention to accessibility and cross-browser compatibility',
    ],
    meta: { experience: '3+ Years', openings: '2 Positions', location: 'Noida / Remote' },
  },
  {
    id: 5,
    title: 'Enterprise Solutions Architect',
    department: 'Architecture',
    description: "Define the technology direction for our most complex enterprise engagements. You'll bridge business requirements and technical execution — working with C-suite stakeholders and engineering leads alike.",
    responsibilities: [
      'Lead architecture design across cloud, data, and AI domains',
      'Produce technical roadmaps aligned to business capability goals',
      'Guide engineering teams through phased delivery of complex systems',
      'Represent Thotnr in client architecture review boards',
    ],
    requirements: [
      '8+ years in software engineering with 3+ in architecture roles',
      'Broad expertise across cloud platforms, data platforms, and integration patterns',
      'Proven track record of leading large-scale enterprise architecture programmes',
      'Strong executive communication and stakeholder management skills',
    ],
    meta: { experience: '8+ Years', openings: '1 Position', location: 'Noida / Johannesburg' },
  },
  {
    id: 6,
    title: 'UX Researcher',
    department: 'Experience Design',
    description: "Conduct the deep organisational and user research that underpins our experience design practice. You'll turn complex enterprise workflows into clear, validated design problems that the team can solve.",
    responsibilities: [
      'Plan and execute qualitative and quantitative user research studies',
      'Conduct ethnographic research inside client organisations',
      'Synthesise research into actionable design briefs and mental models',
      'Build research repositories and champion evidence-based design decisions',
    ],
    requirements: [
      '3+ years in UX research, preferably in enterprise or B2B contexts',
      'Proficiency with research methods: interviews, diary studies, usability testing',
      'Strong analytical and storytelling skills — you make data compelling',
      'Experience working in cross-functional teams with designers and engineers',
    ],
    meta: { experience: '3+ Years', openings: '1 Position', location: 'Noida / Remote' },
  }
];

function ChevronIcon({ open }) {
  return (
    <svg
      width="18" height="18" viewBox="0 0 18 18" fill="none"
      style={{
        transition: 'transform 0.3s ease',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        flexShrink: 0,
      }}
    >
      <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MetaItem({ label, value }) {
  return (
    <div className="py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
      <p className="text-label text-white/50 mb-1">{label}</p>
      <p className="text-h4 text-white">{value}</p>
    </div>
  )
}

function RoleRow({ role, open, onToggle }) {
  return (
    <div
      className="border-b"
      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
    >
      {/* Header row — always visible */}
      <button
        className="w-full flex items-center justify-between py-6 text-left bg-transparent border-none cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center gap-5">
          <h3
            className="text-h3"
            style={{ color: open ? 'var(--color-accent)' : '#ffffff', transition: 'color 0.2s ease' }}
          >
            {role.title}
          </h3>
          <span
            className="text-label px-3 py-1 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            {role.department}
          </span>
        </div>
        <span style={{ color: open ? 'var(--color-accent)' : 'rgba(255,255,255,0.4)' }}>
          <ChevronIcon open={open} />
        </span>
      </button>

      {/* Expanded panel */}
      <div
        style={{
          maxHeight: open ? '800px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 pb-10">

          {/* Left — description + bullets */}
          <div>
            <p className="text-body text-white/70 mb-7">{role.description}</p>

            <div className="mb-6">
              <p className="text-h4 text-[var(--color-highlight)] mb-3">Responsibilities</p>
              <ul className="flex flex-col gap-2">
                {role.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span
                      className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--color-accent)' }}
                    />
                    <span className="text-body-sm text-white/70">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-h4 text-[var(--color-highlight)] mb-3">Requirements</p>
              <ul className="flex flex-col gap-2">
                {role.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span
                      className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--color-accent)' }}
                    />
                    <span className="text-body-sm text-white/70">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — meta */}
          <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <MetaItem label="Experience" value={role.meta.experience} />
            <MetaItem label="Openings" value={role.meta.openings} />
            <MetaItem label="Location" value={role.meta.location} />
          </div>

        </div>
      </div>
    </div>
  )
}

function S3OpenRoles() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-h4 text-[var(--color-highlight)]">Open Roles</p>
          <h2 className="text-h1 text-white leading-tight">Current Opportunities</h2>
          <p className="text-body text-white/70 mt-2 max-w-2xl">
            We're growing deliberately — every hire is a long-term bet on the right person,
            not a headcount number.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          {roles.map((role) => (
            <RoleRow
              key={role.id}
              role={role}
              open={openId === role.id}
              onToggle={() => toggle(role.id)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S3OpenRoles
