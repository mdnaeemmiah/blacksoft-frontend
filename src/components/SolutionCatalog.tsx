'use client';

import React from 'react';
import styles from './SolutionCatalog.module.css';
import { useAiSolutionCards, useAppWebsiteCards, type SolutionCard } from '../utils/solutionCardsStore';

function CardGrid({ cards }: { cards: SolutionCard[] }) {
  return (
    <div className={styles.grid}>
      {cards.filter((card) => card.enabled).map((card, index) => (
        <a className={styles.card} href={card.link || '#solutions'} key={card.id}>
          <div className={styles.cardTop}><span className={styles.index}>0{index + 1}</span><span className={styles.icon}>{card.icon}</span></div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <span className={styles.learn}>Explore <b>↗</b></span>
        </a>
      ))}
    </div>
  );
}

export function AppWebsites() {
  const [cards] = useAppWebsiteCards();
  return <section id="app-websites" className={styles.section}><div className={`container ${styles.container}`}><div className={styles.header}><span className={styles.eyebrow}>APP & WEBSITE</span><h2>Digital products people know how to use.</h2><p>From a focused product site to a full operational platform, we design and build the web layer around your business.</p></div><CardGrid cards={cards} /></div></section>;
}

export function AiSolutions() {
  const [cards] = useAiSolutionCards();
  return <section id="ai-solutions" className={`${styles.section} ${styles.aiSection}`}><div className={`container ${styles.container}`}><div className={styles.header}><span className={styles.eyebrow}>AI SOLUTIONS</span><h2>Intelligence that moves work forward.</h2><p>Practical AI systems that connect your people, data, and tools without turning your operation into a black box.</p></div><CardGrid cards={cards} /></div></section>;
}
