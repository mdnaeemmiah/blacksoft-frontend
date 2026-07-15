import React from 'react';
import Navbar from '../../components/Navbar';
import Architects from '../../components/Architects';
import Footer from '../../components/Footer';

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'calc(var(--header-height) + 60px)', minHeight: '80vh', backgroundColor: 'var(--bg-main)' }}>
        <Architects />
      </main>
      <Footer />
    </>
  );
}
