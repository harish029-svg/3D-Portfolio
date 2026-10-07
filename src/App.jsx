import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStackSection from './sections/TechStackSection.jsx'
import LogoSection from './sections/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import AchievementsSection from './sections/AchievementsSection.jsx'
import EducationSection from './sections/EducationSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <ShowcaseSection />
        <TechStackSection />
        <LogoSection />
        <FeatureCards />
        <ExperienceSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App