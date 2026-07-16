'use client';

import React from 'react';
import styles from './ServicesCatalog.module.css';
import { useAppWebsiteCards, useAiSolutionCards, type SolutionCard } from '../utils/solutionCardsStore';

// Map database category keys to friendly user-facing section titles and subtitles
const CATEGORIES_META: Record<string, { title: string; subtitle: string }> = {
  'App': {
    title: 'Application Development Showcase',
    subtitle: 'High-performance mobile and desktop application systems custom-built for scaling operations.',
  },
  'Website': {
    title: 'Website Development & Platforms',
    subtitle: 'Premium, fast-loading marketing surfaces and digital products built on modern web stacks.',
  },
  'Figma design': {
    title: 'UI/UX & Figma Design Systems',
    subtitle: 'High-fidelity wireframes, premium components libraries, and complete interactive prototypes.',
  },
  'Backend development': {
    title: 'Backend Systems & API Kernels',
    subtitle: 'Scalable data architectures, high-concurrency cloud engines, and robust web server APIs.',
  },
  'AI solution': {
    title: 'AI-Powered Solutions & Agents',
    subtitle: 'Goal-oriented agents, vector databases, and neural interfaces automating business workflows.',
  },
  'Other': {
    title: 'Specialized Operations & Tech',
    subtitle: 'Bespoke software integrations and experimental tools built for specialized domains.',
  },
};

export default function ServicesCatalog() {
  const [appCards] = useAppWebsiteCards();
  const [aiCards] = useAiSolutionCards();

  // Combine and filter active cards
  const allCards = React.useMemo(() => {
    return [...appCards, ...aiCards]
      .filter((c) => c.enabled)
      .map((c) => {
        let cat = c.category || 'App';
        const lower = cat.toLowerCase();
        if (lower === 'app') cat = 'App';
        else if (lower === 'website') cat = 'Website';
        else if (lower.includes('figma') || lower.includes('design')) cat = 'Figma design';
        else if (lower.includes('backend') || lower.includes('developement') || lower.includes('development')) cat = 'Backend development';
        else if (lower.includes('ai') || lower.includes('solution')) cat = 'AI solution';
        else cat = 'Other';
        return { ...c, category: cat };
      });
  }, [appCards, aiCards]);

  // Group cards by category
  const groupedCards = React.useMemo(() => {
    const groups: Record<string, SolutionCard[]> = {};
    allCards.forEach((card) => {
      const cat = card.category;
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(card);
    });
    return groups;
  }, [allCards]);

  // We want to render them in a specific order: App, Website, Figma design, Backend development, AI solution
  const categoriesToRender = Object.keys(groupedCards).sort((a, b) => {
    const order = ['App', 'Website', 'Figma design', 'Backend development', 'AI solution', 'Other'];
    const indexA = order.indexOf(a);
    const indexB = order.indexOf(b);
    const valA = indexA !== -1 ? indexA : 99;
    const valB = indexB !== -1 ? indexB : 99;
    return valA - valB;
  });

  if (allCards.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px', background: 'var(--bg-main)' }}>
        <p style={{ color: 'var(--text-muted)' }}>No solutions catalog items published yet.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {categoriesToRender.map((categoryKey) => {
        const categoryCards = groupedCards[categoryKey];
        const meta = CATEGORIES_META[categoryKey] || {
          title: `${categoryKey} Development`,
          subtitle: `Custom-built systems tailored for ${categoryKey.toLowerCase()} architecture.`,
        };

        return (
          <section className={styles.section} key={categoryKey} id={`section-${categoryKey.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
            <div className={`container ${styles.container}`}>
              
              {/* Section Header */}
              <div className={styles.headerBlock}>
                <span className={styles.tag}>{categoryKey.toUpperCase()}</span>
                <h2 className={styles.title}>{meta.title}</h2>
                <p className={styles.subtext}>{meta.subtitle}</p>
              </div>

              {/* Grid of Cards */}
              <div className={styles.grid}>
                {categoryCards.map((card, index) => (
                  <a className={styles.card} href={card.link || '#solutions'} key={card.id}>
                    <div className={styles.cardTop}>
                      <span className={styles.index}>0{index + 1}</span>
                      <span className={styles.icon}>{card.icon}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                    <div className={styles.footerLine} />
                  </a>
                ))}
              </div>

            </div>
          </section>
        );
      })}
    </div>
  );
}
