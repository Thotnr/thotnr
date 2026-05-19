# TIA Page Implementation Brief

## Purpose
Build a premium, animated, responsive TIA landing page for the Thotnr website using the exact content below.

TIA means **Thotnr Intelligence Augmentation**.

The page should feel like a high-end enterprise AI framework page: polished, structured, interactive, cinematic, and professional. Animations should feel cool and impressive, but not gimmicky or childish.

Do not hardcode fonts, colors, or typography rules in this brief. Follow the existing project design system and `CLAUDE.md` rules.

**Color direction:** choose colors according to the existing background color and project tokens so the page looks cool, premium, readable, and consistent.

---

# Global Page Requirements

## Responsive Requirements
- Desktop: use rich split layouts, sticky panels, horizontal journeys, interactive diagrams, hover states, and scroll-driven animations.
- Tablet: preserve visual storytelling but reduce density; convert horizontal journeys into stacked or swipe-like panels.
- Mobile: all layouts must stack cleanly; animations should be lighter, readable, and performance-safe.
- No section should break when content increases in the future.
- All CTAs must remain visible, tappable, and accessible on mobile.

## Animation Requirements
Use professional animation patterns across the page:
- Scroll-triggered reveals.
- Parallax layers.
- Magnetic hover cards.
- Animated connector lines.
- Sequential timeline reveals.
- Smooth accordion expansion.
- Chat typing simulation.
- Count-up metric reveals.
- Diagram node hover states.
- Reduced motion support for accessibility.

Animations must be smooth and premium:
- Use staggered motion.
- Avoid excessive bouncing.
- Avoid cartoon-like motion.
- Use subtle depth, glow, blur-to-clear, scale, and transform effects.
- Use `prefers-reduced-motion` fallback.

---

# SECTION 1 — Hero

## Content

### Eyebrow
THE FRAMEWORK

### Hero Word
TIA

### Subtitle
Thotnr Intelligence Augmentation

### Definition Line
A framework, a delivery model, and soon — a product you can talk to.

### Three Tabs Below Definition
Discipline | Delivery Model | Product →

### Supporting Paragraph
We build enterprise AI that is grounded in your data, embedded in your workflows, and measured by outcomes your business can defend.

### Primary CTA
Explore the Framework ↓

Interaction: on click, scroll to Section 4 — TIA Framework.

### Secondary CTA
✦ Ask TIA — Beta

Interaction: on click, open Ask TIA chatbot UI / modal.

## Layout Structure
- Full viewport hero section.
- Video background fills the entire section.
- Add a soft overlay layer above the video for readability.
- Content sits above video.
- Content position: left 10%, top 10%.
- Keep content aligned left.
- Keep enough breathing space around hero text and CTAs.
- Three tabs should sit under definition line as compact navigation chips.
- CTA row should sit below supporting paragraph.

## Animation Direction
- Background video loads with subtle dark overlay fade.
- Eyebrow fades in first.
- Hero word TIA appears with cinematic scale and blur-to-clear reveal.
- Subtitle and definition line slide upward softly.
- Three tabs reveal one by one.
- CTA buttons reveal last.
- Add subtle floating particles or framework-line motion above video if it matches existing design system.

## Responsive Behavior
- Desktop: content stays left 10%, top 10%.
- Tablet: content remains left aligned but width increases.
- Mobile: content should move lower if needed for readability, but stay visually hero-like.
- Video must cover full screen without distortion.

---

# SECTION 2 — Origin Story

## Content

### Eyebrow
THE ORIGIN

### Main Heading
TIA was born from a problem we kept seeing.

### Founder Names
HARIRAJ · SANJAY · GAURAV VERMA

### Founder Label
Founders, TIA

### Story Paragraph 1
Across 20+ enterprise AI engagements — spanning pharma, financial services, insurance, and digital lending — we saw the same pattern repeat:

### Story Paragraph 2
Models worked in demos. Pilots didn't reach scale. Production rarely arrived. Quarters passed. Budgets stretched. Outcomes stayed promised, not delivered.

### Story Paragraph 3
We stopped blaming the model. We started fixing the framework around it — the data discipline, the delivery rhythm, the governance, the way intelligence was embedded into how the business actually operated.

### Closing Line
That framework became TIA.

### Founder Quote
"After the 20th pilot, we stopped blaming the model. We started fixing the framework."

— Hariraj, Co-founder

## Layout Structure
Use a **Founder Memory Wall + Story Timeline** layout.

- Left side: founder image composition.
- Add founder images from `assets/images/`.
- Founder portraits should appear as premium editorial cards, slightly overlapping or staggered.
- Under founder images, show founder names and label.
- Right side: vertical story timeline with 3 story cards and one closing line card.
- Founder quote appears as a large premium quote card below the founder image area or spanning the bottom of the section.

## Animation Direction
- Founder image cards enter with layered parallax.
- Story cards reveal one by one as the user scrolls.
- Timeline connector line draws vertically while scrolling.
- Closing line should glow / scale subtly when it enters.
- Quote card pins briefly and fades from blur to clear.
- Add slow background orbit lines or small particles behind founders for depth.

## Responsive Behavior
- Desktop: 2-column layout with founders left and timeline right.
- Tablet: founders on top, timeline below.
- Mobile: single-column stack; founder images become a horizontal swipe/stack or compact collage.

---

# SECTION 3 — The Three Pillars

## Content

### Eyebrow
THREE PILLARS

### Main Heading
TIA stands on three pillars.  
Each holds the others up.

## Pillar 01
### Title
Discipline

### Subtitle
The thinking behind TIA.

### Description
Data first. Outcomes led. Governance by design. We treat AI as a discipline — not a demo. Every TIA engagement begins with a worldview the enterprise can defend.

### Core Beliefs
- Data before model
- Outcomes before outputs
- Production before pilots
- Discipline before demos

### CTA
Read the TIA Principles →

Interaction: scroll to Section 6 — TIA Principles.

## Pillar 02
### Title
Delivery Model

### Subtitle
The way we work.

### Description
Sense → Shape → Scale. A three-phase engagement built for enterprise reality. Repeatable, measurable, accountable — without sacrificing depth or governance.

### Phases
- Sense — Understand the enterprise reality
- Shape — Design the right AI capability
- Scale — Embed into systems and operations

### CTA
See the framework in action →

Interaction: scroll to Section 4 or Section 5.

## Pillar 03 · Beta · Coming Soon
### Title
Product

### Subtitle
The future of TIA.

### Description
Soon, the framework will talk back. Ask TIA — a conversational interface to the discipline itself. Self-assess your AI readiness. Surface opportunities. Get a TIA-shaped plan, on demand.

### Sample Prompts Inside Mini-Demo Card
- How AI-ready is my data? →
- Find AI angles in pharma. →
- Map a TIA engagement for my business. →

### CTA
Join the Ask TIA waitlist →

Interaction: scroll to Section 9 — Ask TIA.

## Layout Structure
Use a **3D Pillar System**.

- Section heading centered at top.
- Three large vertical cards arranged horizontally on desktop.
- Each card should feel like a pillar: tall, structured, dimensional.
- Use card number, title, subtitle, description, content list, and CTA.
- Product card should look slightly futuristic and beta-oriented.
- Product card includes a mini chat/demo panel with sample prompts.
- Add subtle connector lines between all three cards to communicate dependency.

## Animation Direction
- Cards rise upward like physical pillars during scroll.
- Connector lines draw between cards after they appear.
- Hover: card tilts gently in 3D and lifts slightly.
- Discipline card can reveal beliefs as staggered bullets.
- Delivery card can animate Sense → Shape → Scale as small moving steps.
- Product card can animate prompt chips with subtle pulse.

## Responsive Behavior
- Desktop: 3 cards in one row.
- Tablet: 2 cards on first row and Product full-width below, or stacked cards.
- Mobile: stacked cards with reduced 3D intensity.

---

# SECTION 4 — The TIA Framework Diagram

## Content

### Eyebrow
THE FRAMEWORK

### Main Heading
One picture. Three phases. Three capabilities.

### Subheading
Built on your data, measured by your growth.

## Diagram Phase Nodes — Top Row
### SENSE
Map the enterprise reality — data, systems, decisions, constraints.

### SHAPE
Identify and design AI capabilities aligned to business value.

### SCALE
Embed intelligence into workflows, governance, and operations.

## Diagram Capability Nodes — Bottom Row
### CONTEXT
Grounded in trusted data, knowledge, and operating reality.

### DECISIONING
Augmented judgment with controlled autonomy.

### EXECUTION
Embedded into systems, processes, and daily work.

## Flow Labels
### Input
YOUR DATA

### Output
YOUR GROWTH

### Helper Caption
Hover any node to see what happens there.

## Layout Structure
Use an **Interactive Intelligence Map**.

- Center the diagram as the main visual object of the page.
- Left side has input label: YOUR DATA.
- Right side has output label: YOUR GROWTH.
- Top row has Sense → Shape → Scale.
- Bottom row has Context → Decisioning → Execution.
- Connect all nodes with animated lines.
- Each node should have default compact state and expanded hover/focus state.
- On hover, show node description in a small floating panel or inside the node.

## Animation Direction
- Diagram lines draw themselves on scroll.
- Data particles flow from left to right.
- Sense, Shape, Scale light up sequentially.
- Context, Decisioning, Execution activate after phase row.
- Hover any node: node expands, nearby connectors brighten, description appears.
- Final output label “YOUR GROWTH” receives the flow and subtly pulses.

## Responsive Behavior
- Desktop: full diagram with two rows.
- Tablet: diagram can become a slightly compressed grid.
- Mobile: convert into vertical flow: Your Data → Sense → Shape → Scale → Context → Decisioning → Execution → Your Growth.
- Hover behavior must also work as tap/focus behavior on mobile.

---

# SECTION 5 — Anatomy of a TIA Engagement

## Content

### Eyebrow
IN PRACTICE

### Main Heading
What a TIA engagement actually looks like.

## Phase 01 · Weeks 1–4
### Title
Sense

### What We Do
- Data landscape audit — where it lives, how clean it is, what it can prove
- System and workflow mapping — current state, bottlenecks, decision points
- Stakeholder interviews — across business, IT, and operations
- Governance and risk assessment

### You Receive
- Data Readiness Report
- Enterprise AI Opportunity Landscape

### Ask TIA Preview Prompt
"Run a Data Readiness check on my org" — coming soon

## Phase 02 · Weeks 4–8
### Title
Shape

### What We Do
- AI use case identification and prioritization
- Solution architecture across data, model, infrastructure
- ROI modeling and risk assessment
- Capability roadmap with phased delivery plan

### You Receive
- AI Opportunity Map
- TIA Capability Blueprint

### Ask TIA Preview Prompt
"Show me my highest-impact AI opportunities" — coming soon

## Phase 03 · Weeks 8–16+
### Title
Scale

### What We Do
- End-to-end AI deployment across infrastructure and workflows
- Integration with existing systems and processes
- Governance, monitoring, and observability setup
- Team enablement and operational handover

### You Receive
- Production-grade AI capability
- TIA Governance Layer

### Ask TIA Preview Prompt
"Show me my AI outcomes this quarter" — coming soon

## Layout Structure
Use a **Horizontal Phase Journey**.

- Sticky section heading on the left or top.
- Three large phase panels: Sense, Shape, Scale.
- Each phase panel includes weeks label, title, What We Do, You Receive, and Ask TIA preview prompt.
- Use artifact-style mini cards for “You Receive”.
- Ask TIA prompt should look like a command input preview.

## Animation Direction
- Desktop: scroll-driven horizontal journey.
- As user scrolls, each phase slides into focus.
- Previous phase compresses into completed state.
- Current phase expands and becomes visually dominant.
- “You Receive” cards animate like generated reports.
- Ask TIA prompt types in when the phase becomes active.

## Responsive Behavior
- Desktop: horizontal pinned scroll is allowed.
- Tablet: use snap panels or stacked large phase sections.
- Mobile: stack phases vertically; avoid forced horizontal scrolling.

---

# SECTION 6 — The TIA Principles

## Content

### Eyebrow
WHAT WE BELIEVE

### Main Heading
Seven principles. One discipline.

## Principle 01
### Title
Data before model.

### Description
If the data can't prove it, the model can't sustain it.

## Principle 02
### Title
Outcomes before outputs.

### Description
An AI that ships is not the goal. An AI that pays back is.

## Principle 03
### Title
Production before pilots.

### Description
We engineer for the day after launch, not the demo before it.

## Principle 04
### Title
Discipline before demos.

### Description
Impressive on stage is easy. Defensible in production is the work.

## Principle 05
### Title
Governance by design, not by audit.

### Description
Risk, compliance, and oversight are built in from week one — not retrofitted.

## Principle 06
### Title
Workflows before features.

### Description
AI that fits how teams already work is the AI that gets adopted.

## Principle 07
### Title
AI inside the business, not beside it.

### Description
Intelligence belongs in the operating model — not in a parallel project.

## Layout Structure
Use a **Principle Stack / Manifesto Wall**.

- Large section heading at top.
- Seven principle rows.
- Each row includes number, title, and description.
- Rows should feel like a premium manifesto, not normal cards.
- Use strong spacing and clean hierarchy from existing design system.
- Optionally make numbers sticky or oversized within each row.

## Animation Direction
- Rows reveal sequentially on scroll.
- Each principle row slides from alternating directions.
- Hover/focus expands the active row slightly.
- Active row can reveal a subtle background grid/line system.
- Final principle triggers a small concluding visual lock-in moment.

## Responsive Behavior
- Desktop: full-width rows or two-column manifesto grid.
- Tablet: rows stack with balanced spacing.
- Mobile: simple vertical list with lighter animation.

---

# SECTION 7 — TIA + Your Industry

## Content

### Eyebrow
WHERE TIA WORKS

### Main Heading
TIA adapts to where you operate.

### Note
Add images in each industry card.

## Industry 01
### Title
Pharma & Healthcare

### Signature Use Case
Autonomous Field Intelligence

### Outcome Metric
40% faster HCP decisions across 1,200+ touchpoints

### Short Description
Real-time sales and HCP intelligence replacing quarterly manual analysis. AI-powered field coaching, smart targeting, and early risk detection — embedded into the rep workflow.

### CTA
Read the full story →

CTA note: Rexall case study.

## Industry 02
### Title
Finance & Banking

### Signature Use Case
Real-time Risk & Conversational Operations

### Outcome Metric
60%+ reduction in live-agent hand-offs

### Short Description
Embedded Agentic AI across lending journeys — from acquisition to collections. Journey-aware agents, RAG-grounded responses, real-time platform actions, with strict guardrails and compliance.

### CTA
Read the full story →

CTA note: Creditas case study.

## Industry 03
### Title
Life & Short-Term Insurance

### Signature Use Case
AI-Powered Claims & Underwriting Intelligence

### Outcome Metric
Claims STP lifted from 18% to 44%

### Short Description
End-to-end Agentic AI for claims operations. Document intelligence, fraud network detection pre-payment, autonomous claims decisioning — fully POPIA and GDPR compliant.

### CTA
Read the full story →

CTA note: SA Insurer case study.

## Fallback CTA
Operating in a different industry?  
Tell us about your business →

## Layout Structure
Use **Industry Intelligence Cards**.

- Three premium image-led cards.
- Each card includes image, industry title, signature use case, outcome metric, description, and CTA.
- Industry image should be meaningful and professional.
- Outcome metric should be visually prominent but not overwhelming.
- Fallback CTA sits below all cards as a centered conversion strip.

## Animation Direction
- Cards reveal with staggered entrance.
- Image zooms subtly on hover.
- Outcome metric count/reveal animation on scroll.
- Hover card: reveal a “TIA lens applied” overlay or small scanning effect.
- CTA arrow moves subtly on hover.

## Responsive Behavior
- Desktop: three cards in row.
- Tablet: two cards + one full-width card, or stacked.
- Mobile: cards stack with images on top.

---

# SECTION 8 — TIA in Action

## Content

### Eyebrow
PROOF

### Main Heading
TIA in action.

### Subheading
Real engagements. Real outcomes. The same framework.

### Note
Add logo in each case study. Take logos from `assets/images/clients/`.

## Case Study 01 · Pharma & Healthcare
### Title
Rexall — Autonomous Field Intelligence

### The Context
Rexall operates one of Canada's largest pharmacy chains with a large field force serving thousands of HCPs. Performance management ran on manual quarterly analysis — strategic decisions were being made on data already 3 months old.

### Through the TIA Lens — Sense
We mapped 5 years of HCP visit data, sales transactions, territory configurations, and CRM coverage gaps. Surfaced the structural lag: insight cycle was running 3 months behind decisions.

### Through the TIA Lens — Shape
Identified the two highest-impact decision points — weekly territory prioritization and rep-level coaching. Designed an Agentic AI platform anchored to these decisions, not generic 'AI for sales.'

### Through the TIA Lens — Scale
Deployed end-to-end on Snowflake + AWS. Autonomous agents running bell-curve segmentation, pattern detection, and performance scoring. A GenAI recommendation engine translates analytics into plain-language weekly plans — embedded into the rep workflow.

### The Outcome
- Insight cycle compressed from 3 months to 7–15 days
- AI-powered field coaching activated across the entire force
- Smart HCP targeting — high-potential professionals auto-prioritized
- Early risk detection — performance declines flagged weeks before quarterly impact
- Autonomous opportunity discovery — AI agents surface untapped territories

### CTA
Read the full Rexall case study →

## Case Study 02 · Life & Short-Term Insurance
### Title
SA Insurer — End-to-End Agentic AI for Insurance Operations

### The Context
A leading South African insurer running Life and short-term lines (motor, property, liability). Manual claims processing, reactive rule-based fraud detection, 5-day motor assessment cycles — operating under strict POPIA and GDPR obligations.

### Through the TIA Lens — Sense
Mapped the legacy claims journey end-to-end: 18% straight-through processing, fragmented data across document systems, fraud flagged post-payment, dark data trapped from cross-sell.

### Through the TIA Lens — Shape
Designed four orchestrated AI agents — Document Intake, Fraud Network, Claims Decision, Revenue & Lead — built on Azure AI Foundry. Governance and compliance designed into the architecture from week one, not retrofitted.

### Through the TIA Lens — Scale
Phased rollout across Life and Insure divisions. Document Intelligence replaced legacy OCR. Semantic Kernel powered real-time fraud network graph analysis. WhatsApp concierge for FNOL-to-assessment workflows.

### The Outcome
- Claims STP lifted from 18% to 44%
- Motor assessment turnaround reduced by 3 working days
- R285 cost savings per motor assessment via workflow optimization
- Fraud syndicates surfaced pre-payment via ML network graph analysis
- 10+ AI use cases deployed into production across Life and Insure
- Dark data transformed into live revenue intelligence

### CTA
Read the full SA Insurer case study →

## Case Study 03 · Finance & Digital Lending
### Title
Creditas — Embedded Agentic AI Across the Customer Lifecycle

### The Context
Creditas, one of Brazil's leading digital lending platforms, ran polished web apps across acquisition, account management, and collections — but every meaningful interaction required a live agent. Support queues overwhelmed, drop-offs high, costs scaling linearly with users.

### Through the TIA Lens — Sense
Audited the full customer lifecycle, identified where live-agent dependency was creating bottlenecks. Quantified drop-offs, repetitive query volume, and revenue leakage from missed personalization moments.

### Through the TIA Lens — Shape
Designed a journey-aware Agentic AI platform — RAG-grounded for accuracy, MCP-enabled for real-time platform actions, with human-in-the-loop checkpoints for compliance. Multi-agent orchestration: Journey Intelligence, Conversational Operations, Help Desk.

### Through the TIA Lens — Scale
Deployed across the full lifecycle. Agents detect intent, recommend actions, execute platform operations (payments, bookings, status), and learn continuously — all within a detect-recommend-act-learn loop with strict guardrails.

### The Outcome
- 60%+ reduction in live-agent hand-offs
- 25–30% lift in offer conversion via context-rich personalization
- Average query resolution under 30 seconds
- 80%+ first-contact resolution on help-desk queries (RAG-grounded)
- 70%+ of routine platform operations automated via MCP
- Scalable agentic foundation across the customer lifecycle

### CTA
Read the full Creditas case study →

## Layout Structure
Use a **Case Study Operating Theatre** layout.

- Use a sticky left-side case selector on desktop.
- Right side contains detailed case story.
- Each case study should have logo, title, context, Sense, Shape, Scale, Outcome, and CTA.
- Sense / Shape / Scale should appear as repeated framework lens cards.
- Outcomes should appear as verified result bullets or metric cards.
- Allow future case studies to be added without breaking layout.

## Animation Direction
- Case selector remains sticky while scrolling through cases.
- Active case highlights as the user scrolls.
- Logo and title reveal first.
- Sense / Shape / Scale cards animate like a system scan.
- Outcomes reveal with check/verify animation.
- Metrics count up where applicable.
- Switching between cases can crossfade content smoothly.

## Responsive Behavior
- Desktop: sticky selector + detailed content.
- Tablet: selector becomes top tabs.
- Mobile: each case becomes an accordion or stacked story block.

---

# SECTION 9 — Ask TIA

## Content

### Eyebrow
COMING SOON

### Main Heading
Meet Ask TIA.  
The framework, in conversation.

### Subhead
Soon, you won't just hire TIA. You'll talk to it.

### TIA Greeting Inside Chat Mockup
Hi. I'm TIA. I can help you think through enterprise AI — grounded in your data, shaped for your business, scaled with governance. What would you like to explore?

### Sample Prompt Buttons
- 📊 Assess my AI readiness
- 🎯 Find AI opportunities in my industry
- 🗺️ Map a TIA engagement for my business
- 💼 Talk to the Thotnr team

## Waitlist Section Heading
Ask TIA is in private beta.

## Form Fields
- Email — required
- Company — required
- Role — required dropdown: CIO, CDO, CTO, CEO, Head of AI/Data, Other
- Industry — optional dropdown: Pharma, Finance, Insurance, Other

## Submit Button
Join the waitlist →

## Helper Text Below Form
We'll invite you to the closed beta in waves. No spam. Unsubscribe anytime.

## Post-Submission Confirmation
You're on the list. We'll be in touch soon. Until then, the framework is yours to explore.

## Layout Structure
Use a **Live Product Teaser + Waitlist Panel**.

- Left side: Ask TIA chat mockup.
- Right side: private beta waitlist form.
- Chat mockup should look like a premium product interface.
- Prompt buttons should sit below TIA greeting.
- Waitlist form should be clean, simple, and conversion focused.
- This same chat UI should also be reusable as a modal opened from Hero secondary CTA.

## Animation Direction
- Chat greeting types in when section enters viewport.
- Prompt buttons appear one by one.
- Clicking sample prompts can trigger fake thinking dots and a short placeholder response.
- Form panel slides in like a product drawer.
- Submit success state should smoothly replace the form with confirmation.

## Responsive Behavior
- Desktop: chat left, form right.
- Tablet: chat above, form below.
- Mobile: single-column; chat mockup simplified and form fields full width.

---

# SECTION 10 — Frequently Asked Questions

## Content

### Eyebrow
COMMON QUESTIONS

### Main Heading
What people ask about TIA.

## Q1
### Question
How is TIA different from agile AI delivery?

### Answer
Agile is a delivery methodology. TIA is a discipline that includes delivery — plus a worldview (data-first, outcomes-led), a governance model (built in from day one), and a future product layer (Ask TIA). Agile tells you HOW to ship. TIA tells you WHAT to build, WHY it matters, and HOW to keep it accountable.

## Q2
### Question
Do we need to be data-mature to start with TIA?

### Answer
No. The Sense phase exists precisely because most enterprises aren't. We map your data reality — including the gaps — and tell you what's possible today, what needs fixing first, and where to start. Data maturity is an outcome of TIA, not a prerequisite.

## Q3
### Question
What does a typical TIA engagement cost?

### Answer
Engagement sizes vary based on phase scope. Sense (4 weeks) is a fixed-scope engagement. Shape (4 weeks) builds on Sense outputs. Scale is variable based on the capability being deployed. We can scope any of these as standalone or as a full Sense → Shape → Scale sequence. Talk to us for a tailored proposal.

## Q4
### Question
Can we license TIA internally?

### Answer
Today, TIA is delivered by Thotnr. We're not currently licensing the framework standalone. However, once Ask TIA launches (private beta in 2026), enterprise teams will be able to access the framework's intelligence directly through the product.

## Q5
### Question
Is Ask TIA a separate product?

### Answer
Ask TIA is a product extension of the TIA framework — same discipline, same principles, accessible through conversation. Today TIA is a consulting engagement; soon it will also be a product you can talk to. Both share the same brand and worldview.

## Q6
### Question
How does TIA handle data security and compliance?

### Answer
Governance is a Pillar of TIA, not an afterthought. Every engagement begins with a security and compliance review. We've delivered in environments under POPIA, GDPR, HIPAA, and regional banking regulations. The TIA framework explicitly includes an 'AI Security Reference Architecture' and a hosting decision matrix (cloud vs on-prem) — proven across enterprise clients.

## Fallback CTA
Have a different question? Talk to us →

## Layout Structure
Use a **Split FAQ Console**.

- Left side: sticky FAQ heading and supporting visual/indicator.
- Right side: accordion list.
- Each question expands smoothly.
- Keep one question open by default.
- Fallback CTA appears below accordion.

## Animation Direction
- FAQ rows reveal on scroll.
- Accordion answer expands with smooth height animation.
- Active question gets a subtle progress-line or active indicator.
- CTA arrow moves slightly on hover.

## Responsive Behavior
- Desktop: split layout with sticky left column.
- Tablet: heading above accordion.
- Mobile: simple accordion stack.

---

# SECTION 11 — Final CTA

## Content

### Main Heading
Ready to move beyond AI pilots?

### Supporting Line
TIA is how enterprise AI moves from experiment to operating model.

### CTA 1 — Primary
Talk to the team →

CTA note: Hire TIA.

### CTA 2 — Secondary
✦ Join Ask TIA Beta

CTA note: Talk to the future.

### Closing Tagline
TIA — Thotnr Intelligence Augmentation  
Built on your data · Embedded in your business · Measured by your growth.

## Layout Structure
Use a **Closing Conversion Stage**.

- Large centered CTA area.
- Main heading and supporting line at center.
- Two CTA blocks or buttons below.
- Closing tagline at bottom.
- Use subtle framework-line background or data-flow visual behind CTA.

## Animation Direction
- Section background lines slowly move or draw in.
- Heading reveals with cinematic blur-to-clear.
- Two CTA buttons enter from opposite directions.
- Closing tagline reveals word by word.
- Final background motion should suggest data → intelligence → growth.

## Responsive Behavior
- Desktop: centered premium CTA stage.
- Tablet: centered layout with stacked CTA buttons if needed.
- Mobile: CTA buttons full width and easily tappable.

---

# Ask TIA Chatbot Modal Requirement

The Hero secondary CTA and Section 9 should share the same Ask TIA interface pattern.

## Modal Content
- Greeting message:
  - Hi. I'm TIA. I can help you think through enterprise AI — grounded in your data, shaped for your business, scaled with governance. What would you like to explore?
- Prompt buttons:
  - 📊 Assess my AI readiness
  - 🎯 Find AI opportunities in my industry
  - 🗺️ Map a TIA engagement for my business
  - 💼 Talk to the Thotnr team

## Modal Layout
- Centered overlay modal on desktop.
- Bottom-sheet style modal on mobile.
- Chat interface with greeting, sample prompts, and beta/waitlist CTA.

## Modal Animation
- Backdrop fades in.
- Chat modal scales up with blur-to-clear effect.
- Greeting types in.
- Prompt buttons stagger in.
- Closing modal reverses animation smoothly.

---

# Implementation Notes

- Use existing project component patterns.
- Keep content separated from layout where possible.
- Use reusable data arrays for pillars, phases, principles, industries, case studies, and FAQs.
- Add IDs to important sections for smooth scroll:
  - `tia-origin`
  - `tia-pillars`
  - `tia-framework`
  - `tia-engagement`
  - `tia-principles`
  - `tia-industries`
  - `tia-case-studies`
  - `ask-tia`
  - `tia-faq`
  - `tia-final-cta`
- Primary Hero CTA scrolls to `tia-framework`.
- Pillar Discipline CTA scrolls to `tia-principles`.
- Product CTA scrolls to `ask-tia`.
- Fallback industry CTA routes to contact / consultation flow.
- Case study CTAs should route to corresponding case study pages when available.

