import React from 'react';
import Navbar from '../../components/Navbar';
import ServicesCatalog from '../../components/ServicesCatalog';
import SolutionsCTA from '../../components/SolutionsCTA';
import Footer from '../../components/Footer';

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesCatalog />
        <SolutionsCTA />
      </main>
      <Footer />
    </>
  );
}
