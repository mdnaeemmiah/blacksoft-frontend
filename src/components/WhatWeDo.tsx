'use client';

import React from 'react';
import styles from './WhatWeDo.module.css';
import { useServiceCards } from '../utils/servicesStore';
import ScrollReveal from './ScrollReveal';

export default function WhatWeDo() {
  const [cards, hydrated] = useServiceCards();
  const visibleCards = cards.filter((card) => card.enabled);

  if (hydrated && visibleCards.length === 0) {
    return null;
  }

  return (
    <section id="what-we-do" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal animationClass="reveal-slide-up">
          <div className={styles.headerBlock}>
            <div className={styles.titleBlock}>
              <span className={styles.tag}>WHAT WE DO</span>
              <h2 className={styles.title}>Services tailored for next-generation systems.</h2>
            </div>
            <p className={styles.subtext}>
              We combine high-performance software engineering with custom AI logic to help ambitious startup founders and enterprise companies build modern platforms.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {visibleCards.map((card, index) => (
            <ScrollReveal key={card.id} animationClass="reveal-slide-up" delay={index * 100}>
              <article className={styles.card}>
                <div className={styles.icon}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
