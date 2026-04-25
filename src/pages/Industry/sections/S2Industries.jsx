import imgBanking      from '../../../assets/images/banking.jpg'
import imgHealthcare   from '../../../assets/images/health-medical.jpg'
import imgAutomotive   from '../../../assets/images/automotive.jpg'
import imgTravel       from '../../../assets/images/travel-hospitality.jpg'
import imgSports       from '../../../assets/images/sports.jpg'
import imgShipping     from '../../../assets/images/shipping-logistics.jpg'
import imgTelecom      from '../../../assets/images/tele-communications.jpg'
import imgRealEstate   from '../../../assets/images/real-estate.jpg'
import imgEntertainment from '../../../assets/images/entertainment.jpg'
import imgFashion      from '../../../assets/images/fashion-retail.jpg'
import imgEducation    from '../../../assets/images/education.jpg'
import imgPharma       from '../../../assets/images/pharma.jpg'
import imgLegal        from '../../../assets/images/legal.jpg'
import imgBeauty       from '../../../assets/images/beauty-cosmetics.jpg'

const featured = [
  { name: 'Banking & Financial Services', image: imgBanking,    desc: 'Credit risk, fraud detection, regulatory compliance, and intelligent decisioning at scale.' },
  { name: 'Healthcare & Life Sciences',   image: imgHealthcare, desc: 'Clinical AI, patient intelligence, and connected care infrastructure for modern health systems.' },
  { name: 'Automotive',                   image: imgAutomotive, desc: 'Connected vehicle platforms, supply chain intelligence, and factory floor automation.' },
]

const allIndustries = [
  { name: 'Travel & Hospitality',  image: imgTravel       },
  { name: 'Sports & Analytics',    image: imgSports       },
  { name: 'Shipping & Logistics',  image: imgShipping     },
  { name: 'Telecommunications',    image: imgTelecom      },
  { name: 'Real Estate',           image: imgRealEstate   },
  { name: 'Entertainment',         image: imgEntertainment },
  { name: 'Fashion & Retail',      image: imgFashion      },
  { name: 'Education',             image: imgEducation    },
  { name: 'Pharma & Biotech',      image: imgPharma       },
  { name: 'Legal & Compliance',    image: imgLegal        },
  { name: 'Beauty & Cosmetics',    image: imgBeauty       },
]

function FeaturedCard({ name, image, desc }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{ aspectRatio: '4/5' }}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
        style={{ transform: 'scale(1)' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)' }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
        }}
      />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-h3 text-white leading-tight mb-2">{name}</h3>
        <p className="text-body-sm text-white/70">{desc}</p>
      </div>
    </div>
  )
}

function IndustryCard({ name, image }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl transition-all duration-300 cursor-default"
      style={{
        border: '1px solid rgba(0,0,0,0.08)',
        aspectRatio: '4/3',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }}
      />

      {/* Name */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-body-sm font-semibold text-white leading-tight">{name}</p>
      </div>
    </div>
  )
}

function S2Industries() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-h3 text-[var(--color-highlight)] mb-3">Sectors</p>
          <h2 className="text-h1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>
            Industries We Serve
          </h2>
          <p className="text-body mt-2 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            We bring enterprise-grade AI and technology capability to sectors where the stakes
            are high and the complexity is real.
          </p>
        </div>

        {/* 2.1 — Featured 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((ind) => (
            <FeaturedCard key={ind.name} {...ind} />
          ))}
        </div>

        {/* 2.2 — All Industries */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allIndustries.map((ind) => (
            <IndustryCard key={ind.name} {...ind} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S2Industries
