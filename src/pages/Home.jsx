import React from 'react'
import HeroSection from './Home components/HeroSection'
import TwoCardSection from './Home components/TwoCardSection'
import Section1 from './Home components/Section1'
import Section2 from './Home components/Section2'
import FAQ from './Home components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>

        <HeroSection />
        <TwoCardSection />
        <Section1 />
        <Section2 />
        <FAQ />
        <Footer/>

    </div>
  )
}

export default Home