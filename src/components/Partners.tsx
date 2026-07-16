'use client';

import React from 'react';
import styles from './Partners.module.css';
import { useTrustedInnovators } from '../utils/trustedInnovatorsStore';
import { useInView } from '../utils/useAnimation';

export default function Partners() {
  const [partners] = useTrustedInnovators();
  const visiblePartners = partners.filter((partner) => partner.enabled);
  const [ref, visible] = useInView<HTMLElement>(0.1, true);

  if (visiblePartners.length === 0) return null;

  return (
    <section ref={ref} className={styles.partnersSection}>
      <div className={`container ${styles.partnersContainer}`}>
        <p 
          className={styles.heading}
          style={{
            opacity: visible ? 0.6 : 0,
            transform: visible ? 'none' : 'translateY(10px)',
            transition: 'opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out)',
          }}
        >
          TRUSTED BY GLOBAL INNOVATORS
        </p>
        <div className={styles.logoGrid}>
          {visiblePartners.map((partner, index) => (
            <div 
              key={partner.id} 
              className={styles.logoItem}
              style={{
                opacity: visible ? 0.45 : 0,
                transform: visible ? 'none' : 'scale(0.9)',
                transition: `opacity 0.7s ${index * 0.08}s var(--ease-out), transform 0.7s ${index * 0.08}s var(--ease-out)`,
              }}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
