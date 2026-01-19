import React from 'react';
import Company from '../components/Company';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Work from '../components/Work';
import Teams from '../components/Teams';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const Home = () => {
  return(
    <div>
      <Hero />
      <Company />
      <Services />
      <Work />
      <Teams />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;