'use client';

import React from 'react';
import {
  useTechnologyStackCards,
  useTechnologyStackSettings,
  type TechnologyStackIconKey,
} from '../utils/technologyStackStore';
import styles from './TechStackGrid.module.css';

function renderIcon(iconKey: TechnologyStackIconKey) {
  const iconProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: styles.iconSvg,
  };

  switch (iconKey) {
    case 'hardware':
      return (
        <svg {...iconProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" />
          <path d="M6 10h12M10 6v12" />
        </svg>
      );
    case 'orchestration':
      return (
        <svg {...iconProps}>
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
          <line x1="12" y1="22" x2="12" y2="12" />
          <line x1="22" y1="8.5" x2="12" y2="12" />
          <line x1="2" y1="8.5" x2="12" y2="12" />
        </svg>
      );
    case 'frontend':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );
    case 'growth':
    default:
      return (
        <svg {...iconProps}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
  }
}

export default function TechStackGrid() {
  const stack = useTechnologyStackCards().filter((item) => item.enabled);
  const settings = useTechnologyStackSettings();

  return (
    <section id="stack" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <h2 className={styles.title}>{settings.sectionTitle}</h2>
          <p className={styles.subtext}>
            {settings.sectionSubtitle}
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className={styles.grid}>
          {stack.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconContainer}>
                {renderIcon(item.iconKey)}
              </div>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
