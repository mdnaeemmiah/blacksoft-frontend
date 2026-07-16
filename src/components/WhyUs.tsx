'use client';

import React from 'react';
import styles from './WhyUs.module.css';
import { useWhyUsCards, type WhyUsCard } from '../utils/whyUsStore';
import { useInView } from '../utils/useAnimation';

export default function WhyUs() {
  const [cards, hydrated] = useWhyUsCards();
  const visibleCards = cards.filter((card) => card.enabled);
  const [headerRef, headerVisible] = useInView(0.1, true);

  if (hydrated && visibleCards.length === 0) {
    return null;
  }

  return (
    <section id="why-us" className={styles.section}>
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
          <span className={styles.tag}>Why Us</span>
          <h2 className={styles.title}>Engineered for computational excellence.</h2>
          <p className={styles.subtext}>
            We combine architectural performance, mathematical clarity, and absolute security to deliver software that starts ahead and stays ahead.
          </p>
        </div>

        <div className={styles.grid}>
          {visibleCards.map((card, index) => (
            <WhyUsCard key={card.id} card={card} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function WhyUsCard({
  card,
  index,
}: {
  card: WhyUsCard;
  index: number;
}) {
  const [ref, visible] = useInView(0.1, true);
  return (
    <article
      ref={ref}
      className={styles.card}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(40px) scale(0.97)',
        transition: `opacity 0.7s ${0.08 + index * 0.1}s var(--ease-out), transform 0.7s ${0.08 + index * 0.1}s var(--ease-out)`,
      }}
    >
      <div className={styles.icon}>{card.icon}</div>
      {card.imageSrc && (
        <img src={card.imageSrc} alt={card.imageAlt || card.title} className={styles.cardImage} />
      )}
      <h3 className={styles.cardTitle}>{card.title}</h3>
      <p className={styles.cardDescription}>{card.description}</p>
    </article>
  );
}
