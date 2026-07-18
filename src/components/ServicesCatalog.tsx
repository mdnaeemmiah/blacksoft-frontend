'use client';

import React from 'react';
import styles from './ServicesCatalog.module.css';
import { useAppWebsiteCards, useAiSolutionCards, type SolutionCard } from '../utils/solutionCardsStore';
import { useInView } from '../utils/useAnimation';

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

const CATEGORIES_ORDER = ['App', 'Website', 'Figma design', 'Backend development', 'AI solution'];

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
          <CategorySection
            key={categoryKey}
            categoryKey={categoryKey}
            categoryCards={categoryCards}
            meta={meta}
          />
        );
      })}
    </div>
  );
}

function CategorySection({
  categoryKey,
  categoryCards,
  meta,
}: {
  categoryKey: string;
  categoryCards: SolutionCard[];
  meta: { title: string; subtitle: string };
}) {
  const [headerRef, headerVisible] = useInView(0.1, true);

  return (
    <section className={styles.section} id={`section-${categoryKey.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
      <div className={`container ${styles.container}`}>
        
        {/* Section Header */}
        <div 
          ref={headerRef} 
          className={styles.headerBlock}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out)',
          }}
        >
          <span className={styles.tag}>{categoryKey.toUpperCase()}</span>
          <h2 className={styles.title}>{meta.title}</h2>
          <p className={styles.subtext}>{meta.subtitle}</p>
        </div>

        {/* Grid of Cards */}
        <div className={styles.grid}>
          {categoryCards.length > 0 ? (
            categoryCards.map((card, index) => (
              <ServiceCardItem key={card.id} card={card} index={index} />
            ))
          ) : (
            (() => {
              const pl = SECTION_PLACEHOLDERS[categoryKey];
              if (!pl) return null;
              return (
                <PlaceholderCardItem pl={pl} categoryKey={categoryKey} />
              );
            })()
          )}
        </div>

      </div>
    </section>
  );
}

function ServiceCardItem({ card, index }: { card: SolutionCard; index: number }) {
  const [ref, visible] = useInView<HTMLDivElement>(0.1, true);
  const cardLink = card.link || '#solutions';

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(30px)',
        transition: `opacity 0.7s ${index * 0.1}s var(--ease-out), transform 0.7s ${index * 0.1}s var(--ease-out)`,
      }}
    >
      {card.imageSrc ? (
        <img 
          src={card.imageSrc} 
          alt={card.imageAlt || card.title} 
          className={styles.cardImage} 
        />
      ) : (
        <div className={styles.cardMediaFallback} aria-hidden="true">
          <span className={styles.icon}>{card.icon}</span>
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardDescription}>{card.description}</p>
        <a href={cardLink} className={styles.detailsLink}>See details</a>
        <a href={cardLink} className={styles.liveLink}>
          <span>View live</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5h5v5M19 5l-9 9" />
            <path d="M19 14v5H5V5h5" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function PlaceholderCardItem({ pl, categoryKey }: { pl: { title: string; description: string; icon: string; link: string }; categoryKey: string }) {
  const [ref, visible] = useInView<HTMLAnchorElement>(0.1, true);
  return (
    <a 
      ref={ref}
      className={`${styles.card} ${styles.placeholderCard}`}
      href={pl.link} 
      style={{ 
        borderStyle: 'dashed', 
        borderColor: 'rgba(92, 64, 51, 0.15)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(30px)',
        transition: 'opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out)',
      }}
    >
      <div className={styles.cardTop}>
        <span className={styles.index} style={{ opacity: 0.5 }}>REQUEST</span>
        <span className={styles.icon} style={{ background: 'rgba(92, 64, 51, 0.05)' }}>{pl.icon}</span>
      </div>
      <h3 className={styles.cardTitle} style={{ opacity: 0.9 }}>{pl.title}</h3>
      <p className={styles.cardDescription} style={{ opacity: 0.7 }}>{pl.description}</p>
      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-1)', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
        Start your project <span>↗</span>
      </span>
      <div className={styles.footerLine} />
    </a>
  );
}
