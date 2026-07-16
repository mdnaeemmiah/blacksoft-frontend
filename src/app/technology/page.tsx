import React from 'react';
import Navbar from '../../components/Navbar';
import TechStackGrid from '../../components/TechStackGrid';
import Capabilities from '../../components/Capabilities';
import Footer from '../../components/Footer';

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main>
        <TechStackGrid />
        <Capabilities />
      </main>
      <Footer />
    </>
  );
}
