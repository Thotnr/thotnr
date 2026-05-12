import {
  Building2, BarChart2, Users,
  BookOpen, CreditCard, Calendar,
  Scan, Sparkles, TrendingUp,
  Wifi, Zap, Wrench,
  Layers, Package, ShieldCheck,
} from 'lucide-react'

const ICON_MAP = {
  Building2, BarChart2, Users,
  BookOpen, CreditCard, Calendar,
  Scan, Sparkles, TrendingUp,
  Wifi, Zap, Wrench,
  Layers, Package, ShieldCheck,
}

function FeatureCard({ icon, label, desc, index }) {
  const Icon = ICON_MAP[icon]
  return (
    <div
      className={`pdf-feat-${index} flex flex-col p-6 lg:p-7 rounded-2xl`}
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.10)',
      }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-11 h-11 rounded-xl mb-5 flex-shrink-0"
        style={{ background: 'rgba(230,57,70,0.12)', border: '1px solid rgba(230,57,70,0.20)' }}
      >
        {Icon && <Icon size={20} style={{ color: 'var(--color-highlight)' }} strokeWidth={1.8} />}
      </div>

      {/* Label */}
      <h4
        className="text-h4 font-semibold mb-3"
        style={{ color: 'var(--color-text-white)' }}
      >
        {label}
      </h4>

      {/* Desc */}
      <p
        className="text-body-sm"
        style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}
      >
        {desc}
      </p>
    </div>
  )
}

function S3Features({ product }) {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <style>{`
        @keyframes pdfFeatIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pdf-feat-0 { animation: pdfFeatIn 0.6s ease 0.12s both; }
        .pdf-feat-1 { animation: pdfFeatIn 0.6s ease 0.26s both; }
        .pdf-feat-2 { animation: pdfFeatIn 0.6s ease 0.40s both; }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-h4 text-[var(--color-highlight)] mb-2">Core Capabilities</p>
          <h2 className="text-h1 text-white leading-tight">
            What {product.name} Does
          </h2>
          <p className="text-body mt-2 max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>
            Three capabilities that define how {product.name} delivers value in production.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {product.features.map((f, i) => (
            <FeatureCard key={f.label} {...f} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S3Features
