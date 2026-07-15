'use client';

import React from 'react';
import styles from './WhyUs.module.css';
import { useWhyUsCards } from '../utils/whyUsStore';

export default function WhyUs() {
  const [cards, hydrated] = useWhyUsCards();
  const visibleCards = cards.filter((card) => card.enabled);

  if (hydrated && visibleCards.length === 0) {
    return null;
  }

  return (
    <section id="why-us" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.headerBlock}>
          <span className={styles.tag}>WHY US</span>
          <h2 className={styles.title}>Engineered for computational excellence.</h2>
          <p className={styles.subtext}>
            We combine architectural performance, mathematical clarity, and absolute security to deliver software that starts ahead and stays ahead.
          </p>
        </div>

        <div className={styles.grid}>
          {visibleCards.map((card) => (
            <article key={card.id} className={styles.card}>
              <div className={styles.icon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
