import { useState } from 'react'
import djuboLogo from '../../../assets/images/clients/djubo.png'
import kingdomLogo from '../../../assets/images/clients/kingdom.png'
import nykaaLogo from '../../../assets/images/citta.png'
import rioLogo from '../../../assets/images/qamp.png'

const products = [
  { id: 1, name: 'Djubo', tagline: 'Hospitality', logo: djuboLogo },
  { id: 2, name: 'Edumarshal', tagline: 'Education', logo: kingdomLogo },
  { id: 3, name: 'Citta', tagline: 'Skin Health', logo: nykaaLogo },
  { id: 4, name: 'Qamp', tagline: 'Smart Infra', logo: rioLogo },
]

function ProductCard({ item }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-xl flex flex-col items-center justify-center text-center cursor-default"
      style={{
        minHeight: '150px',
        background: 'rgba(255,255,255,0.86)',
        border: `1px solid ${hovered ? 'rgba(11,15,25,0.14)' : 'rgba(11,15,25,0.07)'}`,
        boxShadow: hovered
          ? '0 18px 42px rgba(11,15,25,0.12)'
          : '0 8px 24px rgba(11,15,25,0.06)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.28s ease',
        padding: '20px 20px',
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: 'var(--color-highlight)',
          opacity: hovered ? 0.55 : 0,
          transition: 'opacity 0.28s ease',
        }}
      />

      <div
        className="flex items-center justify-center mb-2"
        style={{
          width: '100%',
          height: '76px',
        }}
      >
        <img
          src={item.logo}
          alt={item.name}
          style={{
            maxHeight: '58px',
            maxWidth: '180px',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            opacity: 1,
            filter: hovered ? 'contrast(1.08)' : 'contrast(1)',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'all 0.28s ease',
          }}
        />
      </div>

      <h3
        className="m-0"
        style={{
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: 1.15,
          color: 'var(--color-text-primary)',
          marginBottom: '7px',
        }}
      >
        {item.name}
      </h3>

    </div>
  )
}

export default function Products() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          <div className="max-w-xl">
            <p
              className="text-h4"
              style={{ color: 'var(--color-highlight)'}}
            >
              Built for Enterprises
            </p>

            <h2
              className="text-h1"
              style={{ color: 'var(--color-text-primary)', marginBottom: '12px' }}
            >
              Our Products
            </h2>

            <div
              style={{
                width: '42px',
                height: '2px',
                background: 'var(--color-highlight)',
                opacity: 0.32,
                borderRadius: '2px',
                marginBottom: '28px',
              }}
            />

            <p
              className="text-body"
              style={{ color: 'var(--color-text-secondary)', marginBottom: '18px' }}
            >
              Architecting the foundational intelligence that powers modern enterprises —
              from hospitality to education, growth systems to smart infrastructure.
            </p>

            <p
              className="text-body"
              style={{ color: 'var(--color-text-secondary)', opacity: 0.8 }}
            >
              Built to integrate seamlessly, scale reliably, and deliver measurable impact
              across your organisation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}