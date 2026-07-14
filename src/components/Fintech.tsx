'use client';

import React from 'react';
import styles from './Fintech.module.css';

export default function Fintech() {
  return (
    <section id="fintech" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Left Column Graphic */}
        <div className={styles.graphic}>
          <div className={styles.imageCard}>
            <div className={styles.imagePlaceholder}>
              <svg className={styles.placeholderIcon} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Roof triangular top */}
                <path d="M15,35 L50,15 L85,35 Z" />
                {/* Roof base architrave */}
                <path d="M18,35 L82,35 M15,40 L85,40" />
                {/* Columns */}
                <line x1="28" y1="40" x2="28" y2="70" />
                <line x1="42" y1="40" x2="42" y2="70" />
                <line x1="58" y1="40" x2="58" y2="70" />
                <line x1="72" y1="40" x2="72" y2="70" />
                {/* Base steps */}
                <path d="M15,70 L85,70 M10,75 L90,75 M5,80 L95,80" />
              </svg>
            </div>
            <div className={styles.glowBg}></div>
          </div>
        </div>

        {/* Right Column Text & Cards */}
        <div className={styles.content}>
          <span className={styles.tag}>SECURE CAPITAL</span>
          <h2 className={styles.title}>Fintech: Automated Compliance & Fraud</h2>
          <p className={styles.description}>
            High-frequency transaction monitoring and adaptive security protocols that evolve with the threat landscape. Our agentic systems handle the complexity of global regulations.
          </p>

          {/* Grid of Cards */}
          <div className={styles.grid}>
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Adaptive Fraud Defense</h3>
              <p className={styles.cardDescription}>
                Self-learning models that identify new fraud patterns in milliseconds.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
                  <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
                  <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4" />
                  <circle cx="8" cy="12" r="2" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Automated Compliance</h3>
              <p className={styles.cardDescription}>
                Dynamic alignment with AML, KYC, and GDPR frameworks across 140+ countries.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
