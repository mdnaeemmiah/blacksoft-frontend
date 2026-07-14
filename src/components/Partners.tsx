'use client';

import React from 'react';
import styles from './Partners.module.css';

const PARTNERS = [
  'METALOGIC',
  'CLOUDRISE',
  'ZENITH AI',
  'NOVASPHERE',
  'VELOCITY',
  'LUMINA'
];

export default function Partners() {
  return (
    <section className={styles.partnersSection}>
      <div className={`container ${styles.partnersContainer}`}>
        <p className={styles.heading}>TRUSTED BY GLOBAL INNOVATORS</p>
        <div className={styles.logoGrid}>
          {PARTNERS.map((partner, index) => (
            <div key={index} className={styles.logoItem}>
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
