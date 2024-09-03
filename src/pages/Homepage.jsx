import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import CTASection from '../components/sections/CTASection'
import IntervenantsSection from '../components/sections/IntervenantsSection'
import StepsSection from '../components/sections/StepsSection'

const Homepage = () => {
  return (
    <>
        <Header/>
        <main>
            <HeroSection/>
            <ServicesSection/>
            <FeaturesSection/>
            <HowItWorksSection/>
            <StepsSection/>
            <IntervenantsSection/>
            <CTASection/>
        </main>
        <Footer/>
    </>
  )
}

export default Homepage
