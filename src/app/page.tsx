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
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <ScrollReveal animationClass="reveal-fade" threshold={0.05}>
          <Partners />
        </ScrollReveal>
        
        <WhatWeDo />
        
        <ScrollReveal animationClass="reveal-slide-up" threshold={0.05}>
          <WhoWeAre />
        </ScrollReveal>
        
        <ScrollReveal animationClass="reveal-scale" threshold={0.05}>
          <WhyUs />
        </ScrollReveal>
        
        <ScrollReveal animationClass="reveal-slide-up" threshold={0.05}>
          <Capabilities />
        </ScrollReveal>
        
        <ScrollReveal animationClass="reveal-slide-up" threshold={0.05}>
          <Stats />
        </ScrollReveal>
        
        <ScrollReveal animationClass="reveal-scale" threshold={0.05}>
          <CTA />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
