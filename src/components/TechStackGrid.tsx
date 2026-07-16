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
    case 'frontend':
      return (
        <svg {...iconProps}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'backend':
      return (
        <svg {...iconProps}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 8l2 2-2 2" />
          <line x1="11" y1="10" x2="15" y2="10" />
        </svg>
      );
    case 'mobile':
      return (
        <svg {...iconProps}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case 'database':
      return (
        <svg {...iconProps}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14a9 3 0 0 0 18 0V5" />
          <path d="M3 12a9 3 0 0 0 18 0" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...iconProps}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case 'ai':
      return (
        <svg {...iconProps}>
          <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z" />
          <circle cx="9" cy="9" r="1" fill="currentColor" />
          <circle cx="15" cy="9" r="1" fill="currentColor" />
        </svg>
      );
    case 'design':
      return (
        <svg {...iconProps}>
          <circle cx="13.5" cy="6.5" r="3.5" />
          <circle cx="17.5" cy="10.5" r="3.5" />
          <circle cx="8.5" cy="7.5" r="3.5" />
          <circle cx="6.5" cy="12.5" r="3.5" />
          <path d="M12 20 C12 20 4 17 4 12.5 S7 6.5 7 6.5" />
        </svg>
      );
    case 'devops':
      return (
        <svg {...iconProps}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 'testing':
      return (
        <svg {...iconProps}>
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      );
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
