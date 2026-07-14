import React from 'react';
import Navbar from '../../components/Navbar';
import TechnologyHero from '../../components/TechnologyHero';
import TechStackGrid from '../../components/TechStackGrid';
import Capabilities from '../../components/Capabilities';
import Footer from '../../components/Footer';

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main>
        <TechnologyHero />
        <TechStackGrid />
        <Capabilities />
      </main>
      <Footer />
    </>
  );
}
