'use client';

import React from 'react';
import styles from './WhoWeAre.module.css';
import { useWhoWeAreSettings } from '../utils/whoWeAreStore';
import Link from 'next/link';

export default function WhoWeAre() {
  const settings = useWhoWeAreSettings();

  return (
    <section id="who-we-are" className={styles.section}>
      {/* Visual glowing decorations */}
      <div className={styles.glowBlob1} />
      <div className={styles.glowBlob2} />

      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Text details */}
          <div>
            <span className={styles.tag}>{settings.tag}</span>
            <h2 className={styles.title}>{settings.title}</h2>
            <p className={styles.description}>{settings.description}</p>
            <Link href="/about" className={styles.ctaLink}>
              Learn more about our methods <span>→</span>
            </Link>
          </div>

          {/* Right Highlights/Stats Column */}
          <div className={styles.statsColumn}>
            <div className={styles.statCard}>
              <div className={styles.statNum}>{settings.highlight1Num}</div>
              <div className={styles.statLabel}>{settings.highlight1Label}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>{settings.highlight2Num}</div>
              <div className={styles.statLabel}>{settings.highlight2Label}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>{settings.highlight3Num}</div>
              <div className={styles.statLabel}>{settings.highlight3Label}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
