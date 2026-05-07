import emailImg      from '../assets/images/user-experience.jpg'
import securityImg   from '../assets/images/security-risk.jpg'
import analyticsImg  from '../assets/images/enterprise-architect.jpg'

export const accelerators = [
  {
    slug: 'ai-smart-emailing-assistant',
    label: 'Accelerator',
    title: 'AI Smart Emailing Assistant',
    category: 'Communication Automation',
    icon: 'mail',
    image: emailImg,
    tagline:
      'Intelligent email automation that drafts contextual replies directly inside your mailbox — in seconds.',
    shortDescription:
      'An intelligent email automation layer that reads incoming messages, understands conversational context, and generates ready-to-send draft replies directly within your mailbox. It handles scheduling, validates attachments, adapts to your writing style, and filters out non-actionable mail — delivering drafts in near real-time without disrupting your existing workflow.',
    tags: ['Email Automation', 'Scheduling', 'Productivity'],

    overview:
      'An enterprise-ready accelerator that automates the most time-consuming part of professional communication — drafting email responses. It integrates seamlessly with existing email and calendar systems, continuously analyzes incoming conversations, and generates contextually accurate drafts without changing how teams already work.',

    challenge:
      'Professionals spend a significant portion of their day managing emails — reading threads, drafting replies, scheduling meetings, verifying attachments, and maintaining consistent communication tone. Manual handling slows response cycles, introduces inconsistencies, and increases the risk of missed follow-ups, scheduling conflicts, and communication errors.',

    solution:
      'The assistant continuously monitors incoming correspondence, understands conversational context and intent, and generates ready-to-review draft replies directly within the user\'s mailbox. It intelligently handles scheduling coordination, attachment validation, tone adaptation, and email prioritization — enabling faster and more consistent communication with minimal manual effort.',

    capabilities: [
      {
        icon: 'mail',
        title: 'Context-Aware Drafting',
        description:
          'Understands conversation history, sender intent, and thread context to generate highly relevant draft replies automatically.',
      },
      {
        icon: 'calendar',
        title: 'Smart Scheduling',
        description:
          'Detects meeting intent, checks calendar availability, and suggests scheduling responses with accurate time coordination.',
      },
      {
        icon: 'paperclip',
        title: 'Attachment Validation',
        description:
          'Identifies missing, incorrect, or referenced attachments before emails are sent to reduce communication mistakes.',
      },
      {
        icon: 'pen-tool',
        title: 'Personalized Writing Style',
        description:
          'Adapts tone, structure, and language patterns to match individual or organizational communication styles.',
      },
      {
        icon: 'filter',
        title: 'Intelligent Email Filtering',
        description:
          'Separates actionable conversations from low-priority or informational emails to reduce inbox overload.',
      },
      {
        icon: 'zap',
        title: 'Real-Time Draft Generation',
        description:
          'Produces ready-to-send draft replies within seconds directly inside the user\'s existing email workflow.',
      },
    ],

    howItWorks: [
      {
        step: '01',
        title: 'Connect',
        description:
          'Integrates securely with existing email and calendar systems using enterprise authentication standards.',
      },
      {
        step: '02',
        title: 'Analyze',
        description:
          'Continuously reads incoming messages, conversation threads, and contextual signals to understand intent.',
      },
      {
        step: '03',
        title: 'Draft',
        description:
          'Generates intelligent draft replies with scheduling suggestions, tone adaptation, and attachment checks.',
      },
      {
        step: '04',
        title: 'Review & Send',
        description:
          'Drafts appear directly in the mailbox for quick review, approval, and dispatch by the user.',
      },
    ],

    businessValue: [
      'Faster response times across internal and external communication',
      'Reduced manual effort spent drafting repetitive emails',
      'Improved consistency in tone and professional communication',
      'Lower risk of missed attachments, scheduling errors, and overlooked actions',
      'Increased productivity without changing existing workflows or tools',
    ],

    deployment:
      'Designed to integrate seamlessly with enterprise email and productivity ecosystems including Microsoft 365 and Google Workspace. Deploys securely through APIs and enterprise authentication layers while preserving existing workflows, permissions, and compliance requirements. Scales from individual productivity enhancement to organization-wide communication automation.',
  },

  {
    slug: 'ai-trust-safety-shield',
    label: 'Accelerator',
    title: 'AI Trust & Safety Shield',
    category: 'AI Governance & Security',
    icon: 'shield-check',
    image: securityImg,
    tagline:
      'Continuous protection for your production AI — guardrails, red-teaming, and real-time defense against adversarial threats.',
    shortDescription:
      'A continuous protection layer for enterprise AI applications that combines automated red-teaming, real-time guardrails, and policy-driven monitoring. It defends production LLMs against prompt injection, data leakage, hallucinations, and adversarial misuse — keeping AI systems safe, compliant, and audit-ready at scale.',
    tags: ['AI Safety', 'Guardrails', 'Compliance'],

    overview:
      'A dedicated security and reliability layer for enterprise AI applications. The accelerator continuously tests, monitors, and defends large language model deployments against prompt injection, data leakage, hallucinations, and adversarial misuse — ensuring AI systems remain safe, compliant, and production-ready at scale.',

    challenge:
      'Enterprises deploying generative AI face a growing surface of risk — prompt injections, jailbreaks, sensitive data exposure, hallucinated outputs, and regulatory non-compliance. Traditional application security tools were never built for the probabilistic, language-driven nature of LLMs, leaving production AI systems exposed to rapidly evolving threats.',

    solution:
      'The accelerator wraps enterprise AI systems in a continuous defense layer that combines automated adversarial testing, real-time guardrails, and policy-driven monitoring. It identifies vulnerabilities before attackers do, blocks unsafe interactions at runtime, and provides complete audit visibility across AI operations.',

    capabilities: [
      {
        icon: 'shield-check',
        title: 'Real-Time Guardrails',
        description:
          'Inspects prompts and responses in-flight to block unsafe, harmful, or policy-violating content before execution.',
      },
      {
        icon: 'target',
        title: 'Continuous Red-Teaming',
        description:
          'Simulates adversarial attacks including jailbreaks, prompt injections, and extraction attempts to identify vulnerabilities proactively.',
      },
      {
        icon: 'lock',
        title: 'Sensitive Data Protection',
        description:
          'Detects and redacts confidential information, credentials, and PII across both prompts and generated outputs.',
      },
      {
        icon: 'alert-triangle',
        title: 'Hallucination Detection',
        description:
          'Flags fabricated, inconsistent, or low-confidence model responses to improve reliability and trustworthiness.',
      },
      {
        icon: 'clipboard-check',
        title: 'Compliance Enforcement',
        description:
          'Applies configurable organizational and regulatory policies aligned with standards such as GDPR, HIPAA, and EU AI Act.',
      },
      {
        icon: 'trending-up',
        title: 'AI Observability & Audit',
        description:
          'Provides centralized dashboards, interaction logs, and audit trails for security, governance, and risk teams.',
      },
    ],

    howItWorks: [
      {
        step: '01',
        title: 'Integrate',
        description:
          'Connect AI applications, agents, or APIs through lightweight SDKs or proxy gateways.',
      },
      {
        step: '02',
        title: 'Assess',
        description:
          'Continuously benchmark systems against thousands of adversarial and policy-driven attack scenarios.',
      },
      {
        step: '03',
        title: 'Protect',
        description:
          'Apply real-time guardrails and runtime policies to every AI interaction.',
      },
      {
        step: '04',
        title: 'Monitor',
        description:
          'Track threats, model drift, compliance events, and operational risks through centralized observability dashboards.',
      },
    ],

    businessValue: [
      'Reduced exposure to AI-driven security and compliance risks',
      'Faster and safer deployment of enterprise AI initiatives',
      'Continuous assurance of AI reliability and policy alignment',
      'Centralized governance across multiple AI systems and vendors',
      'Audit-ready visibility for security, compliance, and risk stakeholders',
    ],

    deployment:
      'Compatible with major LLM providers, enterprise AI platforms, and self-hosted models. Deploys through SDKs, API gateways, or sidecar proxies with minimal infrastructure changes. Supports organization-wide AI governance while scaling securely across production workloads.',
  },

  {
    slug: 'ai-analytics-co-pilot',
    label: 'Accelerator',
    title: 'AI Analytics Co-Pilot',
    category: 'Business Intelligence',
    icon: 'trending-up',
    image: analyticsImg,
    tagline:
      'Real-time AI insights from your enterprise data — surfaced through natural language, automated dashboards, and proactive anomaly detection.',
    shortDescription:
      'An intelligent analytics layer that connects to your existing data systems and delivers instant, actionable insights without requiring SQL expertise. It answers natural language queries, surfaces trends proactively, generates automated reports, and flags anomalies — giving every stakeholder the right data at the right time.',
    tags: ['Business Intelligence', 'Analytics', 'Data Insights'],

    overview:
      'A practical AI co-pilot for enterprise analytics teams and business leaders. It connects to existing data warehouses, BI platforms, and operational databases — enabling any team member to query data conversationally, receive automated insight summaries, and act on proactive alerts without waiting for a data analyst.',

    challenge:
      'Most enterprise data sits underutilized. Data teams are overwhelmed with one-off report requests, dashboards go stale, and frontline decision-makers wait days for insights they need immediately. Manually maintaining BI tooling, training stakeholders, and building custom queries for every business question creates friction at every layer of the organization.',

    solution:
      'The Analytics Co-Pilot connects to your data ecosystem and provides a natural language interface for querying, summarizing, and visualizing information. It proactively surfaces anomalies, generates recurring reports, and delivers personalized insight digests to the right people — eliminating the gap between raw data and informed decisions.',

    capabilities: [
      {
        icon: 'trending-up',
        title: 'Proactive Anomaly Detection',
        description:
          'Monitors data streams continuously and surfaces deviations, trends, and outliers before they become critical business problems.',
      },
      {
        icon: 'filter',
        title: 'Natural Language Querying',
        description:
          'Ask questions in plain English and receive instant, structured data responses without writing SQL or building custom reports.',
      },
      {
        icon: 'zap',
        title: 'Real-Time Data Processing',
        description:
          'Processes and analyzes live data streams to deliver up-to-the-minute insights across dashboards and automated alerts.',
      },
      {
        icon: 'shield-check',
        title: 'Governed Data Access',
        description:
          'Enforces row-level and column-level data permissions to ensure stakeholders only access data they are authorized to view.',
      },
      {
        icon: 'target',
        title: 'Goal-Aligned Insights',
        description:
          'Aligns insight delivery to business KPIs and team objectives, ensuring analytics output drives measurable outcomes.',
      },
      {
        icon: 'clipboard-check',
        title: 'Automated Report Delivery',
        description:
          'Schedules and generates structured insight reports for key metrics, delivered directly to stakeholders on a defined cadence.',
      },
    ],

    howItWorks: [
      {
        step: '01',
        title: 'Connect',
        description:
          'Integrates with existing data warehouses, databases, and BI tools through secure, governed connectors.',
      },
      {
        step: '02',
        title: 'Index',
        description:
          'Builds a semantic understanding of your data schema, metrics definitions, and business context.',
      },
      {
        step: '03',
        title: 'Query',
        description:
          'Business users ask questions in natural language; the system translates, executes, and returns structured insights.',
      },
      {
        step: '04',
        title: 'Monitor',
        description:
          'Runs continuously in the background to surface anomalies and deliver automated insight reports on schedule.',
      },
    ],

    businessValue: [
      'Faster access to business insights without BI specialist bottlenecks',
      'Reduced time spent on manual report building and data preparation',
      'Proactive identification of anomalies before they escalate into issues',
      'Democratized data access across departments and seniority levels',
      'Better-informed decisions delivered faster at every layer of the organization',
    ],

    deployment:
      'Designed to integrate with modern data stacks including Snowflake, BigQuery, Databricks, and Redshift. Connects to existing BI platforms such as Tableau, Power BI, and Looker. Deploys via secure API connectors and role-based access controls. Scales from departmental analytics use cases to organization-wide data intelligence.',
  },

  
]
