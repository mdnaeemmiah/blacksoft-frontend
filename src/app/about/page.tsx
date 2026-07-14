import React from 'react';
import Navbar from '../../components/Navbar';
import AboutHero from '../../components/AboutHero';
import CoreValues from '../../components/CoreValues';
import Architects from '../../components/Architects';
import Careers from '../../components/Careers';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <CoreValues />
        <Architects />
        <Careers />
      </main>
      <Footer />
    </>
  );
}
