'use client';

import React from 'react';
import styles from './SolutionsHero.module.css';

import { useSiteConfig } from '../utils/configStore';

export default function SolutionsHero() {
  const tag = useSiteConfig('solutions.hero.tag');
  const title = useSiteConfig('solutions.hero.title');
  const description = useSiteConfig('solutions.hero.description');

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        {/* Header content */}
        <div className={styles.headerBlock}>
          <span className={styles.tag}>{tag}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>
            {description}
          </p>
        </div>

        {/* Big centered hero image placeholder */}
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <svg className={styles.placeholderIcon} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Base */}
              <path d="M20,80 L80,80" />
              <path d="M30,80 L35,65 L65,65 L70,80" />
              {/* Arm joints */}
              <circle cx="50" cy="65" r="4" fill="currentColor" />
              <line x1="50" y1="65" x2="35" y2="40" />
              <circle cx="35" cy="40" r="4" fill="currentColor" />
              <line x1="35" y1="40" x2="60" y2="25" />
              <circle cx="60" cy="25" r="4" fill="currentColor" />
              {/* Tool/Hand */}
              <path d="M60,25 L65,18 M60,25 L70,22 M63,15 L68,17" />
            </svg>
          </div>
          {/* Subtle glowing elements */}
          <div className={styles.glow1}></div>
          <div className={styles.glow2}></div>
        </div>
      </div>
    </section>
  );
}
