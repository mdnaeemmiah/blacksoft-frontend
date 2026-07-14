'use client';

import React from 'react';
import styles from './Capabilities.module.css';
import { useCapabilityCards } from '../utils/capabilitiesStore';

export default function Capabilities() {
  const [cards] = useCapabilityCards();
  const visibleCards = cards.filter((card) => card.enabled);

  return (
    <section id="services" className={styles.capabilitiesSection}>
      <div className={`container ${styles.capabilitiesContainer}`}>
        <div className={styles.headerBlock}>
          <span className={styles.tag}>CORE CAPABILITIES</span>
          <h2 className={styles.title}>Architecting Intelligence</h2>
          <p className={styles.subtext}>
            From bespoke automation to enterprise-grade AI models, we build core engineering for modern business.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {visibleCards.map((item) => (
            <article key={item.id} className={styles.card}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '18px',
                  display: 'grid',
                  placeItems: 'center',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
                  border: '1px solid rgba(255,255,255,0.1)',
                  marginBottom: '18px',
                  color: 'var(--text-white)',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                }}
              >
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <a href={item.link || '#services'} className={styles.learnMore}>
                Learn more <span className={styles.learnArrow}>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
