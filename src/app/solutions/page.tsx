import React from 'react';
import Navbar from '../../components/Navbar';
import SolutionsHero from '../../components/SolutionsHero';
import Healthcare from '../../components/Healthcare';
import Fintech from '../../components/Fintech';
import Ecommerce from '../../components/Ecommerce';
import SolutionsCTA from '../../components/SolutionsCTA';
import Footer from '../../components/Footer';
import { AiSolutions, AppWebsites } from '../../components/SolutionCatalog';

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SolutionsHero />
        <AppWebsites />
        <AiSolutions />
        <Healthcare />
        <Fintech />
        <Ecommerce />
        <SolutionsCTA />
      </main>
      <Footer />
    </>
  );
}
