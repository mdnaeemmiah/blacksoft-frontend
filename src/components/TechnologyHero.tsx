'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TechnologyHero.module.css';

import { useSiteConfig } from '../utils/configStore';

export default function TechnologyHero() {
  const tag = useSiteConfig('tech.hero.tag');
  const title = useSiteConfig('tech.hero.title');
  const description = useSiteConfig('tech.hero.description');
  const cta = useSiteConfig('tech.hero.cta');

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        
        {/* Left column content */}
        <div className={styles.content}>
          <span className={styles.tag}>{tag}</span>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.description}>
            {description}
          </p>
          <div className={styles.actionBtn}>
            <Link href="#stack" className="btn btn-primary">
              {cta} <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>

        {/* Right column visual */}
        <div className={styles.graphic}>
          <div className={styles.imageCard}>
            <Image
              src="/images/technology_hero_compute.png"
              alt="Blacksoft Neural Compute Cluster Infrastructure"
              width={540}
              height={540}
              priority
              className={styles.image}
            />
            <div className={styles.badgeOverlay}>
              <div className={styles.badgeTitle}>INFRASTRUCTURE META</div>
              <p className={styles.badgeText}>
                Active cluster status: Online. Under 0.4ms avg node latency across 1,024 cluster lanes.
              </p>
            </div>
            <div className={styles.glowBg}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
