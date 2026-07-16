'use client';

import React from 'react';
import {
  useTechnologyStackCards,
  useTechnologyStackSettings,
} from '../utils/technologyStackStore';
import styles from './TechStackGrid.module.css';
import { useInView } from '../utils/useAnimation';

function renderOfficialIcon(title: string, iconKey: string, className: string) {
  const norm = title.toLowerCase().trim();
  const iconProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };

  if (norm.includes('figma')) {
    return (
      <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" fill="#0ACF83"/>
        <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0z" fill="#1ABC9C"/>
        <path d="M8 18a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4z" fill="#19BC9C"/>
        <path d="M4 12a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4z" fill="#F24E1E"/>
        <path d="M4 6a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4z" fill="#FF7262"/>
      </svg>
    );
  }

  if (norm.includes('react')) {
    return (
      <svg viewBox="-11.5 -10.23 23 20.46" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }

  if (norm.includes('next.js') || norm.includes('nextjs')) {
    return (
      <svg viewBox="0 0 180 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" fill="#000"/>
        <path d="M149.5 157.5L86.1 70.3H74.1v43.4h9.6V81.3l56.2 76.9c3.5-4.3 6.7-9 9.6-14zM83.7 113.7h9.6V90l-9.6-13.1v36.8z" fill="#fff"/>
      </svg>
    );
  }

  if (norm.includes('angular')) {
    return (
      <svg viewBox="0 0 250 250" className={className} xmlns="http://www.w3.org/2000/svg">
        <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031"/>
        <polygon points="125,30 125,52.2 125,230 203.9,186.3 218.1,63.2" fill="#C3002F"/>
        <path d="M125,52.1L66.8,182.6h21.7l11.7-29.2h49.7l11.7,29.2h21.7L125,52.1z M113.6,135.5l11.4-28.5l11.4,28.5H113.6z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (norm.includes('vue')) {
    return (
      <svg viewBox="0 0 196.32 170.02" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M121.05,0L98.16,39.65L75.27,0H0l98.16,170.02L196.32,0H121.05z" fill="#41B883"/>
        <path d="M121.05,0L98.16,39.65L75.27,0H38.75l59.41,102.91L157.57,0H121.05z" fill="#35495E"/>
      </svg>
    );
  }

  if (norm.includes('svelte')) {
    return (
      <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF3E00" d="M18.8 14.8c-.8-1.5-2-2-3-2.3l-2-.5c-.8-.2-1.3-.4-1.6-.7-.3-.3-.4-.7-.4-1.2 0-.6.2-1 .7-1.3.5-.3 1.2-.5 2-.5 1 0 1.7.2 2.2.6.5.4 1 1 1 1.8l3-.3c-.2-1.6-1-2.8-2.2-3.7C17.3 6.6 15.6 6 13.7 6c-2 0-3.6.5-4.8 1.6C7.7 8.7 7 10 7 11.8c0 1.7.6 3 1.8 3.8 1 .8 2.5 1.2 4.2 1.6l1.7.4c1 .2 1.6.5 2 .9.4.4.5 1 .5 1.7 0 .8-.4 1.5-1.1 2-.7.5-1.7.7-3 .7-1.3 0-2.3-.3-3.1-1-.8-.7-1.2-1.7-1.3-3.1l-3 .3c.2 2.2 1.1 3.8 2.7 5 1.6 1 3.7 1.6 6 1.6 2.3 0 4.2-.6 5.5-1.8 1.4-1.2 2-2.8 2-4.8 0-1.8-.7-3.2-1.9-4.2z"/>
      </svg>
    );
  }

  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="#3178c6" rx="3"/>
        <path d="M12.92 18.29c.12-.11.23-.21.31-.3s.18-.21.26-.35.15-.31.19-.51.06-.44.06-.72V8.47h2.24v8.11c0 .54-.08 1.01-.24 1.41a3.02 3.02 0 0 1-.72 1.08c-.34.31-.79.55-1.33.7s-1.17.23-1.89.23c-.76 0-1.42-.09-2-.27s-1.07-.46-1.48-.82l1.19-1.57c.28.23.6.41.94.53s.73.18 1.17.18c.55 0 .96-.08 1.25-.23s.51-.36.6-.62M18.8 6.55c.34.22.62.53.84.92s.33.87.33 1.44c0 .56-.11 1.04-.33 1.44s-.53.71-.92.93a4.01 4.01 0 0 1-1.41.33v.09c.61.1 1.1.33 1.47.7s.55.9.55 1.57c0 .65-.13 1.19-.38 1.61s-.6.76-1.04 1.01-1 .38-1.66.38c-.73 0-1.38-.13-1.94-.38s-.99-.61-1.3-.1c-.3-.49-.46-1.09-.47-1.8H15c0 .48.11.85.34 1.11s.57.39 1 .39c.39 0 .69-.09.9-.28s.32-.47.32-.85c0-.39-.12-.68-.35-.87s-.6-.28-1.12-.28h-.87v-1.88h.8c.48 0 .84-.09 1.06-.27s.33-.45.33-.81c0-.35-.1-.62-.31-.8s-.52-.27-.92-.27c-.36 0-.66.08-.9.23s-.41.38-.51.68h-2.18c.1-.82.43-1.46.99-1.92s1.33-.69 2.31-.69c.89 0 1.65.18 2.27.55z" fill="#fff"/>
      </svg>
    );
  }

  switch (iconKey) {
    case 'figma':
      return (
        <svg {...iconProps} stroke="currentColor">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1-3.5 3.5V2z" />
          <path d="M12 12.5a3.5 3.5 0 1 1 3.5-3.5H12v3.5z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          <path d="M5 18.5A3.5 3.5 0 0 1 8.5 15H12v3.5a3.5 3.5 0 1 1-7 0z" />
        </svg>
      );
    case 'frontend':
      return (
        <svg {...iconProps}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case 'app':
      return (
        <svg {...iconProps}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case 'backend':
      return (
        <svg {...iconProps}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'deployment':
      return (
        <svg {...iconProps}>
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
  }
}

const CATEGORY_ORDER = ['FIGMA', 'FRONTEND', 'APP', 'BACKEND', 'DEPLOYMENT'];

export default function TechStackGrid() {
  const allCards = useTechnologyStackCards().filter((item) => item.enabled);
  const settings = useTechnologyStackSettings();

  const grouped = React.useMemo(() => {
    const map: Record<string, typeof allCards> = {};
    allCards.forEach((card) => {
      const cat = card.category || 'OTHER';
      if (!map[cat]) map[cat] = [];
      map[cat].push(card);
    });

    const sorted = Object.keys(map).sort((a, b) => {
      const ai = CATEGORY_ORDER.indexOf(a);
      const bi = CATEGORY_ORDER.indexOf(b);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return a.localeCompare(b);
    });

    return sorted.map((cat) => ({ category: cat, cards: map[cat] }));
  }, [allCards]);

  const [headerRef, headerVisible] = useInView(0.1, true);

  if (allCards.length === 0) return null;

  return (
    <section id="stack" className={styles.section}>
      <div className={`container ${styles.container}`}>

        {/* Header */}
        <div 
          ref={headerRef} 
          className={styles.headerBlock}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out)',
          }}
        >
          <span className={styles.tag}>OUR TECHNOLOGY STACK</span>
          <h2 className={styles.title}>
            {settings.sectionTitle || 'Our Technology Stack'}
          </h2>
          <p className={styles.subtext}>
            {settings.sectionSubtitle || 'Built on battle-tested frameworks and advanced cloud kernels.'}
          </p>
        </div>

        {/* Grouped category sections */}
        {grouped.map(({ category, cards }) => (
          <div key={category} className={styles.categoryGroup}>
            <div className={styles.categoryLabel}>{category}</div>
            <div className={styles.grid}>
              {cards.map((item, index) => (
                <TechStackCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

function TechStackCard({ item, index }: { item: ReturnType<typeof useTechnologyStackCards>[number]; index: number }) {
  const [ref, visible] = useInView(0.1, true);
  return (
    <div 
      ref={ref}
      className={styles.card}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `opacity 0.6s ${index * 0.08}s var(--ease-out), transform 0.6s ${index * 0.08}s var(--ease-out)`,
      }}
    >
      <div className={styles.iconContainer}>
        {item.imageSrc ? (
          <img src={item.imageSrc} alt={item.imageAlt || item.title} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2px' }} />
        ) : (
          renderOfficialIcon(item.title, item.iconKey, styles.iconSvg)
        )}
      </div>
      <span className={styles.categoryTag}>{item.category}</span>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardDescription}>{item.description}</p>
    </div>
  );
}
