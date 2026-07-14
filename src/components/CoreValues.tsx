'use client';

import React from 'react';
import styles from './CoreValues.module.css';

interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function CoreValues() {
  const values: ValueItem[] = [
    {
      title: 'Innovation',
      description: "We push beyond the state-of-the-art. Every line of code is an opportunity to redefine what's possible in neural computation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}>
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <line x1="9" y1="18" x2="15" y2="18" />
          <line x1="10" y1="22" x2="14" y2="22" />
        </svg>
      )
    },
    {
      title: 'Transparency',
      description: "Complex AI shouldn't be a black box. We prioritize explainability and ethical traceability in every model we deploy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: 'Technical Excellence',
      description: "Precision is our baseline. We architect systems with 99.99% reliability, ensuring mission-critical performance at scale.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    }
  ];

  return (
    <section id="values" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <h2 className={styles.title}>Core Values</h2>
          <p className={styles.subtext}>
            The principles that guide our engineering and define our partnership with global leaders.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                {value.icon}
              </div>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDescription}>{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
