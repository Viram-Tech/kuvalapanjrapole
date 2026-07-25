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

export default function Home() {
  return (
    <>
      <HorizonHeader />
      <BrandMark />
      <main>
        <Hero />
        <Overview />
        <Sponsor />
        <SevaReport />
        <About />
        <Contact />
      </main>
      <Footer />
      <OnTop />
    </>
  )
}
