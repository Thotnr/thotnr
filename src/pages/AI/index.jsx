import Navbar       from '../../components/layout/Navbar'
import Footer       from '../../components/layout/Footer'
import S1Hero       from './sections/S1Hero'
import FeatureBlock from './sections/FeatureBlock'
import S6CTA        from './sections/S6CTA'
import S7Form       from './sections/S7Form'

import imgAiService         from '../../assets/images/ai-service.jpg'
import imgAi                from '../../assets/images/ai.jpg'
import imgEnterpriseArchitect from '../../assets/images/enterprise-architect.jpg'
import imgCloud             from '../../assets/images/cloud.jpg'
import Statement from './sections/Statement'

// ── S2 data ────────────────────────────────────────────────────────────────────
const s2 = {
  eyebrow:  'AI Strategy',
  headline: 'From AI Ambition\nto Enterprise Reality',
  blocks: [
    {
      title: 'Readiness Assessment',
      desc:  'We evaluate your data maturity, systems landscape, and organisational capacity before recommending any AI investment — so every decision is grounded in your reality.',
    },
    {
      title: 'Strategic Roadmap',
      desc:  'A phased, ROI-prioritised plan that sequences AI use cases by impact, feasibility, and readiness — giving your leadership team a clear path from now to scale.',
    },
  ],
}

// ── S3 data ────────────────────────────────────────────────────────────────────
const s3 = {
  eyebrow:   'Generative AI',
  headline:  'Production-Grade GenAI,\nBuilt for Your Enterprise',
  paragraph: 'We don\'t build demos. We engineer LLM-powered systems that connect to your real data, integrate with your existing infrastructure, and stay reliable under enterprise load.',
  blocks: [
    {
      title: 'RAG Systems',
      desc:  'Retrieval-augmented generation over your enterprise knowledge base — giving AI accurate, current answers grounded in your actual documents and data.',
    },
    {
      title: 'Copilots & Assistants',
      desc:  'Custom AI assistants trained on your business context — for sales, operations, compliance, or any workflow where faster, smarter responses move the needle.',
    },
  ],
}

// ── S4 data ────────────────────────────────────────────────────────────────────
const s4 = {
  eyebrow:  'Automation',
  headline: 'Replace Manual Workflows\nwith Context-Aware AI',
  blocks: [
    {
      title: 'Process Intelligence',
      desc:  'We identify and map the high-volume, rule-heavy tasks inside your organisation — then engineer AI-powered automation that handles them without human bottlenecks.',
    },
    {
      title: 'Workflow Integration',
      desc:  'AI actions wired directly into your existing tools and systems — so automation happens where work already lives, not in a separate product nobody uses.',
    },
  ],
}

// ── S5 data ────────────────────────────────────────────────────────────────────
const s5 = {
  eyebrow:   'MLOps',
  headline:  'AI That Stays\nReliable at Scale',
  paragraph: 'Deploying a model is not the finish line. We build the monitoring, governance, and retraining infrastructure that keeps AI performing as your data and business evolve.',
  blocks: [
    {
      title: 'Model Monitoring',
      desc:  'Continuous tracking of model drift, prediction quality, and pipeline health — with alerts and dashboards that give your team visibility before problems reach production.',
    },
    {
      title: 'Responsible AI',
      desc:  'Audit trails, explainability layers, and governance frameworks built in from day one — meeting regulatory requirements without slowing down delivery.',
    },
  ],
}

function AI() {
  return (
    <>
      <Navbar />

      <S1Hero />

      <Statement/>

      {/* S2 — AI Strategy (dark, image left) */}
      <FeatureBlock imageLeft={true} dark={true} image={imgAiService} {...s2} />

      {/* S3 — Generative AI (light, content left) */}
      <FeatureBlock imageLeft={false} dark={false} image={imgAi} {...s3} />

      {/* S4 — Automation (dark, image left) */}
      <FeatureBlock imageLeft={true} dark={true} image={imgEnterpriseArchitect} {...s4} />

      {/* S5 — MLOps (light, content left) */}
      <FeatureBlock imageLeft={false} dark={false} image={imgCloud} {...s5} />

      <S6CTA />
      <S7Form />

      <Footer />
    </>
  )
}

export default AI
