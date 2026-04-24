import djuboLogo from '../../../assets/images/product1.png'
import qampLogo from '../../../assets/images/product3.png'
import edumarshelLogo from '../../../assets/images/product1.png'
import cittLogo from '../../../assets/images/product3.png'

const products = [
  {
    id: 1,
    name: "Djubo",
    tagline: "Hospitality OS",
    desc: "Hotel tech suite for smarter operations",
    tint: "bg-accent-soft",
    logo: djuboLogo,
  },
  {
    id: 2,
    name: "Qamp",
    tagline: "Growth Engine",
    desc: "Campaign workflows built for growth teams",
    tint: "bg-tech/10",
    logo: qampLogo,
  },
  {
    id: 3,
    name: "Edumarshel",
    tagline: "Edu Platform",
    desc: "Education platform for modern institutions",
    tint: "bg-purple/10",
    logo: edumarshelLogo,
  },
  {
    id: 4,
    name: "Citt",
    tagline: "Smart Infra",
    desc: "Smart city infrastructure and data systems",
    tint: "bg-orange-100",
    logo: cittLogo,
  },
]

function Product({ item, index }) {
  return (
    <a
      href="#"
      className="
        group block
        px-12 py-24 text-center
        [perspective:1200px]
        cursor-pointer
      "
      style={{
        animation: `fadeSlideUp 0.7s ease forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
      }}
    >
      {/* 3D WRAPPER */}
      <div
        className="
          flex flex-col items-center
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:
          [transform:translateY(-12px)_rotateX(5deg)_rotateY(-5deg)]
        "
      >
        {/* LOGO (NO BACKGROUND — HERO) */}
        <img
          src={item.logo}
          alt={item.name}
          className="
            w-24 md:w-32 h-auto object-contain
            mb-10

            transition-all duration-500

            group-hover:
            [transform:translateZ(60px)_scale(1.08)]
          "
        />

        {/* RED TAGLINE */}
        <p
          className="
            text-accent text-sm font-semibold tracking-wide mb-2
            transition-all duration-500
            group-hover:[transform:translateZ(30px)]
          "
        >
          {item.tagline}
        </p>

        {/* NAME */}
        <h3
          className="
            text-xl md:text-2xl font-semibold text-ink mb-3 tracking-tight
            transition-all duration-500
            group-hover:[transform:translateZ(25px)]
          "
        >
          {item.name}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-base text-slate leading-relaxed max-w-[260px]
            transition-all duration-500
            group-hover:[transform:translateZ(20px)]
          "
        >
          {item.desc}
        </p>
      </div>
    </a>
  )
}


export default function Products() {
  return (
    <section className="bg-surface pb-0 pt-0 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER → LEFT ALIGNED */}
        <div className="mb-0 max-w-2xl">
          <p className="cs-eyebrow t-eyebrow mb-3 text-accent">Build For Enterprises</p>

          <h2 className="cs-headline t-headline text-ink mb-4">
              Our{' '}
              <span className="text-accent">Products</span>
            </h2>

      
          <p className="cs-sub t-sub text-muted-dk">
              Architecting the foundational intelligence that powers the world’s most ambitious digital ecosystems.
            </p>
        </div>

        {/* PRODUCTS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-4 items-center">

          {products.map((item, i) => (
            <Product
              key={item.id}
              item={item}
              index={i}
              isLast={i === products.length - 1}
            />
          ))}

        </div>
      </div>
    </section>
  )
}