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

// Order of categories to always render on the Solutions page
const CATEGORIES_ORDER = ['App', 'Website', 'Figma design', 'Backend development', 'AI solution'];

// Premium showcase placeholder cards for categories with no published items
const SECTION_PLACEHOLDERS: Record<string, { title: string; description: string; icon: string; link: string }> = {
  'App': {
    title: 'Custom Mobile & Desktop Showcase',
    description: 'Bespoke native applications engineered for optimal speed, fluidity, and seamless integration with your company operations.',
    icon: '📱',
    link: '/book-a-call',
  },
  'Website': {
    title: 'Premium Corporate Web Surfaces',
    description: 'High-speed marketing layers and interactive web products designed for exceptional conversion rate performance.',
    icon: '🌐',
    link: '/book-a-call',
  },
  'Figma design': {
    title: 'High-Fidelity Product UI/UX Systems',
    description: 'Complete UI component libraries, prototypes, and dynamic layout systems built for direct frontend translation.',
    icon: '🎨',
    link: '/book-a-call',
  },
  'Backend development': {
    title: 'Secure Cloud & API Architectures',
    description: 'High-concurrency data layers, robust server controllers, and zero-trust authentication protocols tailored to scale.',
    icon: '⚙️',
    link: '/book-a-call',
  },
  'AI solution': {
    title: 'Agentic Automations & LLM Engines',
    description: 'Context-specific AI assistants, neural language layers, and workflow automation blocks that eliminate routine task loops.',
    icon: '🧠',
    link: '/book-a-call',
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {CATEGORIES_ORDER.map((categoryKey) => {
        const categoryCards = groupedCards[categoryKey] || [];
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
                {categoryCards.length > 0 ? (
                  categoryCards.map((card, index) => (
                    <a className={styles.card} href={card.link || '#solutions'} key={card.id}>
                      <div className={styles.cardTop}>
                        <span className={styles.index}>0{index + 1}</span>
                        <span className={styles.icon}>{card.icon}</span>
                      </div>
                      {card.imageSrc && (
                        <img 
                          src={card.imageSrc} 
                          alt={card.imageAlt || card.title} 
                          className={styles.cardImage} 
                        />
                      )}
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <p className={styles.cardDescription}>{card.description}</p>
                      <div className={styles.footerLine} />
                    </a>
                  ))
                ) : (
                  // If category has no items, render a placeholder card
                  (() => {
                    const pl = SECTION_PLACEHOLDERS[categoryKey];
                    if (!pl) return null;
                    return (
                      <a className={styles.card} href={pl.link} style={{ borderStyle: 'dashed', borderColor: 'rgba(255,255,255,0.15)' }}>
                        <div className={styles.cardTop}>
                          <span className={styles.index} style={{ opacity: 0.5 }}>REQUEST</span>
                          <span className={styles.icon} style={{ background: 'rgba(99, 102, 241, 0.08)' }}>{pl.icon}</span>
                        </div>
                        <h3 className={styles.cardTitle} style={{ opacity: 0.9 }}>{pl.title}</h3>
                        <p className={styles.cardDescription} style={{ opacity: 0.7 }}>{pl.description}</p>
                        <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--primary)', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          Start your project <span>↗</span>
                        </span>
                        <div className={styles.footerLine} />
                      </a>
                    );
                  })()
                )}
              </div>

            </div>
          </section>
        );
      })}
    </div>
  );
}
