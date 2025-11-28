import React from 'react'
import Layout from '../Components/Layout';
import Hero from '../Sections/ServiceSection/Hero';
import AllService from '../Sections/ServiceSection/AllService';

const ServicePage = () => {
  return (
    <Layout>
        <Hero/>
        <AllService/>
    </Layout>
  )
}

export default ServicePage