import HorizonHeader from '../components/HorizonHeader.jsx'
import BrandMark from '../components/BrandMark.jsx'
import OnTop from '../components/OnTop.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../sections/Hero.jsx'
import Overview from '../sections/Overview.jsx'
import Sponsor from '../sections/Sponsor.jsx'
import SevaReport from '../sections/SevaReport.jsx'
import About from '../sections/About.jsx'
import Contact from '../sections/Contact.jsx'

// Thin full-width rule to separate the (all-light) sections.
function Rule() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="border-t border-line" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <HorizonHeader />
      <BrandMark />
      <main>
        <Hero />
        <Overview />
        <Rule />
        <Sponsor />
        <Rule />
        <SevaReport />
        <Rule />
        <About />
        <Rule />
        <Contact />
      </main>
      <Footer />
      <OnTop />
    </>
  )
}
