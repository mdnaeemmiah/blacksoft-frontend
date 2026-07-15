'use client';

import React from 'react';
import styles from './WhatWeDo.module.css';
import { useServiceCards } from '../utils/servicesStore';

export default function WhatWeDo() {
  const [cards, hydrated] = useServiceCards();
  const visibleCards = cards.filter((card) => card.enabled);

  if (hydrated && visibleCards.length === 0) {
    return null;
  }

  return (
    <section id="what-we-do" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.titleBlock}>
            <span className={styles.tag}>WHAT WE DO</span>
            <h2 className={styles.title}>Services tailored for next-generation systems.</h2>
          </div>
          <p className={styles.subtext}>
            We combine high-performance software engineering with custom AI logic to help ambitious startup founders and enterprise companies build modern platforms.
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
