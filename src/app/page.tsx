import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import WhatWeDo from '../components/WhatWeDo';
import WhoWeAre from '../components/WhoWeAre';
import WhyUs from '../components/WhyUs';
import Capabilities from '../components/Capabilities';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <WhatWeDo />
        <WhoWeAre />
        <WhyUs />
        <Capabilities />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
