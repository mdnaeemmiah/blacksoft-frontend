import React from 'react';
import Navbar from '../../components/Navbar';
import AboutHero from '../../components/AboutHero';
import MissionVision from '../../components/MissionVision';
import CoreValues from '../../components/CoreValues';
import Careers from '../../components/Careers';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <MissionVision />
        <CoreValues />
        <Careers />
      </main>
      <Footer />
    </>
  );
}
