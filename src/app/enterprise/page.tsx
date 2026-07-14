import React from 'react';
import Navbar from '../../components/Navbar';
import EnterpriseHero from '../../components/EnterpriseHero';
import Pathway from '../../components/Pathway';
import EnterpriseSecurity from '../../components/EnterpriseSecurity';
import Stats from '../../components/Stats';
import Footer from '../../components/Footer';

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <main>
        <EnterpriseHero />
        <Pathway />
        <EnterpriseSecurity />
        <Stats />
      </main>
      <Footer />
    </>
  );
}
