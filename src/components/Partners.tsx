'use client';

import React from 'react';
import styles from './Partners.module.css';
import { useTrustedInnovators } from '../utils/trustedInnovatorsStore';

export default function Partners() {
  const [partners] = useTrustedInnovators();
  const visiblePartners = partners.filter((partner) => partner.enabled);

  if (visiblePartners.length === 0) return null;

  return (
    <section className={styles.partnersSection}>
      <div className={`container ${styles.partnersContainer}`}>
        <p className={styles.heading}>
          TRUSTED BY GLOBAL INNOVATORS
        </p>
        <div className={styles.logoGrid}>
          {visiblePartners.map((partner) => (
            <div
              key={partner.id}
              className={styles.logoItem}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
