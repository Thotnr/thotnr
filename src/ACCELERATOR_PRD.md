# ACCELERATOR_PRD.md

## Purpose

Build a premium, professional, and scalable **Accelerators** experience for the website.

This PRD covers three UI areas:

1. **Home Page / Accelerators Section**
2. **Accelerator Listing Page**
3. **Accelerator Detail Page**

The UI must be built in a reusable way so that future accelerators can be added by updating only the accelerator data array, without changing layout logic.

---

# 1. Naming Standard

Use the word **Accelerators**, not Escalators.

Correct naming:

- Section name: **Accelerators**
- Listing page name: **Accelerators**
- Single item label: **Accelerator**
- Detail page route: `/accelerators/:slug`

Avoid:

- Escalators
- Tools
- Features
- Utilities

---

# 2. Global Design Rules

## 2.1 Color Rules

Use only existing CSS design tokens from `index.css`.

Do not hardcode colors inside JSX.

Required colors:

- Home / Accelerators section background: `--color-accent`
- Accelerator listing section background: `--color-primary`
- Accelerator detail description section background: `--color-primary`

Use token-based classes or CSS variables only.

Example:

```jsx
<section style={{ background: 'var(--color-primary)' }}>
```

or preferred if Tailwind token exists:

```jsx
<section className="bg-primary">
```

## 2.2 Responsive Rules

All sections must be fully responsive.

Desktop:

- Use max-width container.
- Cards should display in 3-column grid where possible.
- Hero content should be positioned at top `20%`, left `10%`.

Tablet:

- Cards should display in 2-column grid.
- Hero content should keep left alignment but reduce width.
- Maintain readable spacing.

Mobile:

- Cards should display in 1-column grid.
- Hero content should remain readable and not overflow.
- Reduce heading sizes.
- Preserve enough vertical spacing.

## 2.3 Visual Style

The UI should feel:

- Premium
- Clean
- Enterprise-grade
- Professional
- Minimal
- Scalable

Use little animations.
Use subtle hover effects.

---

Use one shared data array for all three UI locations.

---

# 4. Shared Accelerator Data Structure

Create a file:

```txt
src/data/accelerators.js
```

The data structure must support:

- Home page cards
- Listing page cards
- Detail page full content
- Future accelerators

Use this structure:

```js
export const accelerators = [
  {
    slug: '',
    label: 'Accelerator',
    title: '',
    category: '',
    tagline: '',
    shortDescription: '',
    tags: [],
    icon: '',
    overview: '',
    challenge: '',
    solution: '',
    capabilities: [],
    howItWorks: [],
    businessValue: [],
    deployment: ''
  }
]
```

---

# 5. Accelerator Data

## 5.1 Full Data Array

```js
export const accelerators = [
  {
    slug: 'ai-smart-emailing-assistant',
    label: 'Accelerator',
    title: 'AI Smart Emailing Assistant',
    category: 'Communication Automation',
    icon: 'mail',
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
          'Understands conversation history, sender intent, and thread context to generate highly relevant draft replies automatically.'
      },
      {
        icon: 'calendar',
        title: 'Smart Scheduling',
        description:
          'Detects meeting intent, checks calendar availability, and suggests scheduling responses with accurate time coordination.'
      },
      {
        icon: 'paperclip',
        title: 'Attachment Validation',
        description:
          'Identifies missing, incorrect, or referenced attachments before emails are sent to reduce communication mistakes.'
      },
      {
        icon: 'pen-tool',
        title: 'Personalized Writing Style',
        description:
          'Adapts tone, structure, and language patterns to match individual or organizational communication styles.'
      },
      {
        icon: 'filter',
        title: 'Intelligent Email Filtering',
        description:
          'Separates actionable conversations from low-priority or informational emails to reduce inbox overload.'
      },
      {
        icon: 'zap',
        title: 'Real-Time Draft Generation',
        description:
          'Produces ready-to-send draft replies within seconds directly inside the user’s existing email workflow.'
      }
    ],

    howItWorks: [
      {
        step: '01',
        title: 'Connect',
        description:
          'Integrates securely with existing email and calendar systems using enterprise authentication standards.'
      },
      {
        step: '02',
        title: 'Analyze',
        description:
          'Continuously reads incoming messages, conversation threads, and contextual signals to understand intent.'
      },
      {
        step: '03',
        title: 'Draft',
        description:
          'Generates intelligent draft replies with scheduling suggestions, tone adaptation, and attachment checks.'
      },
      {
        step: '04',
        title: 'Review & Send',
        description:
          'Drafts appear directly in the mailbox for quick review, approval, and dispatch by the user.'
      }
    ],

    businessValue: [
      'Faster response times across internal and external communication',
      'Reduced manual effort spent drafting repetitive emails',
      'Improved consistency in tone and professional communication',
      'Lower risk of missed attachments, scheduling errors, and overlooked actions',
      'Increased productivity without changing existing workflows or tools'
    ],

    deployment:
      'Designed to integrate seamlessly with enterprise email and productivity ecosystems including Microsoft 365 and Google Workspace. Deploys securely through APIs and enterprise authentication layers while preserving existing workflows, permissions, and compliance requirements. Scales from individual productivity enhancement to organization-wide communication automation.'
  },

  {
    slug: 'ai-trust-safety-shield',
    label: 'Accelerator',
    title: 'AI Trust & Safety Shield',
    category: 'AI Governance & Security',
    icon: 'shield-check',
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
          'Inspects prompts and responses in-flight to block unsafe, harmful, or policy-violating content before execution.'
      },
      {
        icon: 'target',
        title: 'Continuous Red-Teaming',
        description:
          'Simulates adversarial attacks including jailbreaks, prompt injections, and extraction attempts to identify vulnerabilities proactively.'
      },
      {
        icon: 'lock',
        title: 'Sensitive Data Protection',
        description:
          'Detects and redacts confidential information, credentials, and PII across both prompts and generated outputs.'
      },
      {
        icon: 'alert-triangle',
        title: 'Hallucination Detection',
        description:
          'Flags fabricated, inconsistent, or low-confidence model responses to improve reliability and trustworthiness.'
      },
      {
        icon: 'clipboard-check',
        title: 'Compliance Enforcement',
        description:
          'Applies configurable organizational and regulatory policies aligned with standards such as GDPR, HIPAA, and EU AI Act.'
      },
      {
        icon: 'chart-line',
        title: 'AI Observability & Audit',
        description:
          'Provides centralized dashboards, interaction logs, and audit trails for security, governance, and risk teams.'
      }
    ],

    howItWorks: [
      {
        step: '01',
        title: 'Integrate',
        description:
          'Connect AI applications, agents, or APIs through lightweight SDKs or proxy gateways.'
      },
      {
        step: '02',
        title: 'Assess',
        description:
          'Continuously benchmark systems against thousands of adversarial and policy-driven attack scenarios.'
      },
      {
        step: '03',
        title: 'Protect',
        description:
          'Apply real-time guardrails and runtime policies to every AI interaction.'
      },
      {
        step: '04',
        title: 'Monitor',
        description:
          'Track threats, model drift, compliance events, and operational risks through centralized observability dashboards.'
      }
    ],

    businessValue: [
      'Reduced exposure to AI-driven security and compliance risks',
      'Faster and safer deployment of enterprise AI initiatives',
      'Continuous assurance of AI reliability and policy alignment',
      'Centralized governance across multiple AI systems and vendors',
      'Audit-ready visibility for security, compliance, and risk stakeholders'
    ],

    deployment:
      'Compatible with major LLM providers, enterprise AI platforms, and self-hosted models. Deploys through SDKs, API gateways, or sidecar proxies with minimal infrastructure changes. Supports organization-wide AI governance while scaling securely across production workloads.'
  }
]
```

---

# 6. Home Page / Accelerators Section

## 6.1 Location

Add this section to the Home page.

## 6.2 Background

Use:

```css
background: var(--color-accent);
```

## 6.3 Purpose

The Home page section should show a premium preview of available accelerators.

It should not show full detail content.

## 6.4 Layout Structure

```txt
Section Wrapper
  Eyebrow / Label
  Heading
  Short Intro
  Accelerator Card Grid
  CTA Button
```

## 6.5 Content

Eyebrow:

```txt
AI Accelerators
```

Heading:

```txt
Pre-built AI accelerators for faster enterprise transformation
```

Intro:

```txt
Deployable AI solution frameworks designed to reduce delivery time, lower risk, and help teams move from idea to production faster.
```

CTA:

```txt
View All Accelerators
```

CTA should route to:

```txt
/accelerators
```

## 6.6 Card Content

Each card should show:

- Icon
- Category
- Title
- Tagline
- Short description preview
- 2 or 3 tags
- CTA text: `Explore Accelerator`

Card click should route to:

```txt
/accelerators/{slug}
```

## 6.7 Card Grid

Desktop:

```txt
3 columns
```

Tablet:

```txt
2 columns
```

Mobile:

```txt
1 column
```

Since currently only two accelerators exist, display two cards centered nicely on desktop.

When more accelerators are added, grid should automatically wrap.

## 6.8 Visual Direction

Use clean professional cards.

Recommended card style:

- Subtle border
- Soft shadow
- Rounded corners
- Minimal hover lift
- Strong title hierarchy
- Tags displayed as small pills
- CTA aligned at bottom

---

# 7. Accelerator Listing Page

## 7.1 Route

Create page route:

```txt
/accelerators
```

## 7.2 Page Sections

```txt
1. Hero Section
2. Accelerators Listing Section
```

---

## 7.3 Hero Section

Hero section should be same style as other website pages.

Requirements:

- Background video in hero
- Content position: top `20%`, left `10%`
- Text aligned left
- Use overlay if required for readability

Hero content:

Eyebrow:

```txt
AI Accelerators
```

Heading:

```txt
Enterprise AI Accelerators
```

Subtitle:

```txt
Reusable AI solution frameworks built to solve enterprise challenges faster, safer, and with less implementation risk.
```

## 7.4 Accelerators Listing Section

Background:

```css
background: var(--color-primary);
```

Purpose:

Show all accelerators from the data array.

## 7.5 Listing Layout

```txt
Section Header
  Label
  Heading
  Intro

Optional Filter Tabs
  All
  Communication Automation
  AI Governance & Security

Accelerator Grid
  Accelerator Cards
```

## 7.6 Listing Section Content

Label:

```txt
Explore Accelerators
```

Heading:

```txt
Ready-to-deploy AI capabilities for modern teams
```

Intro:

```txt
Each accelerator is designed as a reusable implementation layer that can be adapted to your workflows, systems, and enterprise requirements.
```

## 7.7 Optional Filter Tabs

Filters should be data-driven from `category`.

Current categories:

```txt
All
Communication Automation
AI Governance & Security
```

If filtering is too much for current phase, structure the component so it can be added later.

## 7.8 Listing Card

Each listing card should show:

- Icon
- Label: Accelerator
- Category
- Title
- Tagline
- Short description
- Tags
- 3 capability previews from `capabilities`
- CTA: Explore Accelerator

Card CTA route:

```txt
/accelerators/{slug}
```

---

# 8. Accelerator Detail Page

## 8.1 Route

Create dynamic detail route:

```txt
/accelerators/:slug
```

The page should find the selected accelerator from the shared `accelerators` data array using `slug`.

If slug does not exist, show a clean not-found state.

---

## 8.2 Detail Page Sections

```txt
1. Hero Section
2. Description Section
```

Description section will contain all accelerator detail content.

---

## 8.3 Hero Section

Hero section should be same style as other website pages.

Requirements:

- Background video in hero
- Content position: top `20%`, left `10%`
- Text aligned left
- Use current accelerator title as main tagline

For example:

```txt
AI Smart Emailing Assistant
```

Hero content should use data fields:

- Label
- Title
- Tagline
- Tags

Hero layout:

```txt
[Label: Accelerator]
[Main Heading: accelerator.title]
[Subtitle: accelerator.tagline]
[Tags]
```

Important:

For the AI Smart Emailing Assistant detail page, the main hero heading must be:

```txt
AI Smart Emailing Assistant
```

For AI Trust & Safety Shield detail page, the main hero heading must be:

```txt
AI Trust & Safety Shield
```

---

## 8.4 Description Section

Background:

```css
background: var(--color-primary);
```

The description section should contain all detailed content for each accelerator.

Recommended structure:

```txt
Overview
Challenge / Solution
Key Capabilities
How It Works
Business Value
Deployment
CTA
```

---

## 8.5 Overview Section

Layout:

```txt
Two-column layout on desktop
Single-column on mobile
```

Left:

```txt
Overview heading
```

Right:

```txt
Overview body
```

Data:

```js
accelerator.overview
```

---

## 8.6 Challenge / Solution Section

Layout:

Desktop:

```txt
Two cards side by side
```

Mobile:

```txt
Stacked cards
```

Card 1:

```txt
The Challenge
accelerator.challenge
```

Card 2:

```txt
Our Solution
accelerator.solution
```

---

## 8.7 Key Capabilities Section

Heading:

```txt
Key Capabilities
```

Render all items from:

```js
accelerator.capabilities
```

Grid:

Desktop:

```txt
3 columns
```

Tablet:

```txt
2 columns
```

Mobile:

```txt
1 column
```

Each card:

```txt
Icon
Title
Description
```

---

## 8.8 How It Works Section

Heading:

```txt
How It Works
```

Render all items from:

```js
accelerator.howItWorks
```

Layout:

Desktop:

```txt
Horizontal 4-step timeline
```

Mobile:

```txt
Vertical stacked timeline
```

Each step:

```txt
Step Number
Title
Description
```

---

## 8.9 Business Value Section

Heading:

```txt
Business Value
```

Render all items from:

```js
accelerator.businessValue
```

Layout options:

Preferred:

```txt
Value cards or clean bullet list with check icons
```

Avoid plain boring list if possible.

---

## 8.10 Deployment Section

Heading:

```txt
Deployment
```

Render:

```js
accelerator.deployment
```

Style:

- Full-width content card
- Subtle border
- Professional technical tone

---

## 8.11 CTA Section

Add CTA at bottom of detail page.

Heading:

```txt
Want to explore this accelerator for your business?
```

Text:

```txt
Let’s discuss how this accelerator can be adapted to your workflows, systems, and enterprise goals.
```

CTA Button:

```txt
Talk to Us
```

Route CTA to contact section or contact page depending on existing website routing.

---

# 9. Component Behavior

## 9.1 Home Page

Use:

```js
accelerators.slice(0, 3)
```

If only two accelerators exist, show both.

If more are added later, show first 3 or first 4 depending on design.

## 9.2 Listing Page

Use:

```js
accelerators
```

Show all accelerators.

## 9.3 Detail Page

Use route slug:

```js
const accelerator = accelerators.find(item => item.slug === slug)
```

Render detail content dynamically.

---

# 10. Routing Requirements

Required routes:

```txt
/accelerators
/accelerators/ai-smart-emailing-assistant
/accelerators/ai-trust-safety-shield
```

Future route format:

```txt
/accelerators/{slug}
```

---

# 11. Accessibility Requirements

- All cards should be keyboard accessible.
- CTA buttons should have visible focus states.
- Video hero must include overlay for text readability.
- Do not rely only on color for meaning.
- Icons should be decorative unless they communicate important meaning.
- Text contrast must be readable on video and colored backgrounds.

---

# 12. Animation Rules

Use subtle animations only.

Allowed:

- Fade in
- Small translate-up on scroll
- Minimal hover lift on cards
- Soft icon hover state

Avoid:

- Heavy 3D effects
- Too many moving elements
- Fast animations
- Distracting transitions

---

# 13. Final Acceptance Criteria

The implementation is complete when:

- Home page has a premium Accelerators section with `--color-accent` background.
- Accelerator listing page exists at `/accelerators`.
- Listing page hero uses video background and content at top `20%`, left `10%`.
- Listing section uses `--color-primary` background.
- Accelerator detail page exists with dynamic slug routing.
- Detail page hero uses video background and accelerator title as main heading.
- Detail page description section uses `--color-primary` background.
- Both accelerators are fully added using shared data.
- Future accelerators can be added by updating only the data array.
- UI is responsive on desktop, tablet, and mobile.
- No hardcoded colors are used in JSX except through CSS variables/design tokens.

---

# 14. Current Accelerators Summary

## AI Smart Emailing Assistant

Category:

```txt
Communication Automation
```

Tagline:

```txt
Intelligent email automation that drafts contextual replies directly inside your mailbox — in seconds.
```

Short Description:

```txt
An intelligent email automation layer that reads incoming messages, understands conversational context, and generates ready-to-send draft replies directly within your mailbox. It handles scheduling, validates attachments, adapts to your writing style, and filters out non-actionable mail — delivering drafts in near real-time without disrupting your existing workflow.
```

## AI Trust & Safety Shield

Category:

```txt
AI Governance & Security
```

Tagline:

```txt
Continuous protection for your production AI — guardrails, red-teaming, and real-time defense against adversarial threats.
```

Short Description:

```txt
A continuous protection layer for enterprise AI applications that combines automated red-teaming, real-time guardrails, and policy-driven monitoring. It defends production LLMs against prompt injection, data leakage, hallucinations, and adversarial misuse — keeping AI systems safe, compliant, and audit-ready at scale.
```
