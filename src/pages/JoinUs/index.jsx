import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

function JoinUs() {
  return (
    <>
      <Navbar />
      <section
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: 'var(--color-primary)' }}
      >
        <div className="text-center">
          <p className="text-label text-[var(--color-highlight)]">Coming Soon</p>
          <h1 className="text-h1 mt-2" style={{ color: 'var(--color-text-primary)' }}>Join Us</h1>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default JoinUs
