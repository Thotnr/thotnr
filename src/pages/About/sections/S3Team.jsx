import placeholderImg from '../../../assets/images/test.jpg'
import sankalp from '../../../assets/images/about-us_Sankalp.jpg'
import gauravK from '../../../assets/images/about-us_Gaurav-Kumar.jpg'
import gauravV from '../../../assets/images/about-us_Gaurav-Verma.jpg'
import love from '../../../assets/images/about-us_Love.jpg'
import bharat from '../../../assets/images/about-us_Bharat.jpg'
import hariraj from '../../../assets/images/about-us_Hariraj.jpg'
import deepak from '../../../assets/images/about-us_Deepak.jpg'
import neha from '../../../assets/images/about-us_Neha.jpg'

// Replace placeholderImg with actual headshots when available (e.g. gaurav.jpg)
const team = [
  { id: 1, img: sankalp, name: 'SANKALP',    role: 'A Tech Enthusiast',   desc: 'Thought leader' },
  { id: 2, img: gauravK, name: 'GAURAV KUMAR',      role: 'CEO',  desc: 'Startup visionary & Technopreneur' },
  { id: 3, img: gauravV,name: 'GAURAV VERMA',     role: 'A Varied Industry Expert', desc: 'A Skilled Technocrat' },
  { id: 4, img: love, name: 'LOVE SINGHAL',       role: 'Technical Lead', desc: 'Tech Ideologist' },
  { id: 5, img: bharat,name: 'BHARAT GARG',      role: 'Technical Lead',          desc: 'A Multilingual Coder' },
  { id: 6, img: hariraj,name: 'HARIRAJ SINGH',    role: 'Cloud and Application Technologist',         desc: 'A Tinkerer at Heart' },
  { id: 7, img: deepak,name: 'DEEPAK BINDAL',     role: 'Technical Lead',     desc: 'Natural Technovator' },
  { id: 8, img: neha, name: 'NEHA JAISWAL',     role: 'A Human Resource professional',       desc: 'A Psychologist at Heart' },
]

function TeamCard({ img, name, role, desc }) {
  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ background: 'var(--color-primary)' }}
    >
      {/* Photo */}
      <img
        src={img}
        alt={name}
        className="w-full object-cover"
      />

      {/* Info */}
      <div className="px-5 pt-4 pb-5 flex flex-col">

        {/* Name */}
        <h3
          className="text-h4 font-semibold leading-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {name}
        </h3>

        {/* Role */}
        <p
          className="text-sm mt-1 tracking-wide"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {role}
        </p>

        {/* Subtle divider */}
        <div
          className="mt-3 mb-2 h-[1px] w-10"
          style={{ background: 'var(--color-highlight)', opacity: 0.6 }}
        />

        {/* Optional desc (if needed later) */}
        {desc && (
          <p
            className="text-xs leading-relaxed"
            style={{ color: 'var(--color-text-secondary)', opacity: 0.8 }}
          >
            {desc}
          </p>
        )}
      </div>
    </div>
  )
}

function S3Team() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-h1 text-white">Meet Our Experts</h2>
          <p className="text-body text-white/70 mt-2 max-w-2xl">
            Practitioners who have lived inside enterprise complexity — and built their way out of it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {team.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S3Team
