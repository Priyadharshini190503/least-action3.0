import React from 'react'
import Layout from '../Components/Layout'
import Hero from '../Sections/IndustriesSection/Hero'
import TechTicker from '../Sections/IndustriesSection/TechTicker'
import Specialized from '../Sections/IndustriesSection/Specialized'
import Success from '../Sections/IndustriesSection/Success'
import OurCoreService from '../Sections/IndustriesSection/Ourcoreservice'

const IndustriesPage = () => {
  return (
    <Layout>
        <Hero/>
        <OurCoreService/>
        <TechTicker/>
        <Specialized/>
        <Success/>
    </Layout>
  )
}

export default IndustriesPage