import React from 'react';
import Navbar from '../../components/Navbar';
import TechStackGrid from '../../components/TechStackGrid';
import Footer from '../../components/Footer';

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main>
        <TechStackGrid />
      </main>
      <Footer />
    </>
  );
}
