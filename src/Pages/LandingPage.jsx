import React from 'react'
import Layout from '../Components/Layout'
import Hero from '../Sections/LandingSection.jsx/Hero'
import Impact from '../Sections/LandingSection.jsx/Impact'
import Careers from '../Sections/LandingSection.jsx/Careers'
import Contact from '../Sections/LandingSection.jsx/Contact'

const LandingPage = () => {
  return (
    <Layout>
         <Hero/>
         <Impact/>
         <Careers/>
         <Contact/>
    </Layout>
  )
}

export default LandingPage