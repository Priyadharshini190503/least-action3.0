import React from 'react'
import Layout from '../Components/Layout'
import Hero from '../Sections/LandingSection.jsx/Hero'
import Impact from '../Sections/LandingSection.jsx/Impact'
import Careers from '../Sections/LandingSection.jsx/Careers'
import Contact from '../Sections/LandingSection.jsx/Contact'
import Testimonial from '../Sections/LandingSection.jsx/Testimonial'
import MobileIndustriesData from '../Sections/LandingSection.jsx/Industries'
import Portfolio from '../Sections/LandingSection.jsx/Portfolio'
import Team from '../Sections/LandingSection.jsx/Team'

const LandingPage = () => {
  return (
    <Layout>
         <Hero/>
         <Impact/>
         <MobileIndustriesData/>
         <Portfolio/>
         <Careers/>
         <Team/>
         <Testimonial/>
         <Contact/>
    </Layout>
  )
}

export default LandingPage