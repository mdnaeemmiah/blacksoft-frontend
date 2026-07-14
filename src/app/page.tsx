import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Capabilities from '../components/Capabilities';
import Pathway from '../components/Pathway';
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
        <Capabilities />
        <Pathway />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
