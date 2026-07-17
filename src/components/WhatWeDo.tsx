'use client';

import React from 'react';
import styles from './WhatWeDo.module.css';
import { useServiceCards } from '../utils/servicesStore';
import { useInView } from '../utils/useAnimation';

export default function WhatWeDo() {
  const [cards, hydrated] = useServiceCards();
  const visibleCards = cards.filter((card) => card.enabled);
  const [headerRef, headerVisible] = useInView(0.1, true);

  if (hydrated && visibleCards.length === 0) {
    return null;
  }

  return (
    <section id="what-we-do" className={styles.section}>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={styles.headerBlock}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(30px)',
            transition: 'opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out)',
          }}
        >
          <div className={styles.titleBlock}>
            <span className={styles.tag}>What We Do</span>
            <h2 className={styles.title}>Services tailored for<br />next-generation systems.</h2>
          </div>
          <p className={styles.subtext}>
            We combine high-performance software engineering with custom AI logic to build modern, scalable platforms.
          </p>
        </div>

        <div className={styles.grid}>
          {visibleCards.map((card, index) => (
            <ServiceCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ card, index }: { card: { id: string; icon: string; title: string; description: string }; index: number }) {
  const [ref, visible] = useInView(0.1, true);
  return (
    <article
      ref={ref}
      className={styles.card}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(40px)',
        transition: `opacity 0.7s ${0.1 + index * 0.08}s var(--ease-out), transform 0.7s ${0.1 + index * 0.08}s var(--ease-out)`,
      }}
    >
      <div className={styles.icon}>{card.icon}</div>
      <h3 className={styles.cardTitle}>{card.title}</h3>
      <p className={styles.cardDescription}>{card.description}</p>
    </article>
  );
}
