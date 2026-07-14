'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutHero.module.css';

import { useSiteConfig } from '../utils/configStore';

export default function AboutHero() {
  const tag = useSiteConfig('about.hero.tag');
  const title = useSiteConfig('about.hero.title');
  const description = useSiteConfig('about.hero.description');
  const cta = useSiteConfig('about.hero.cta');

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        
        {/* Left content */}
        <div className={styles.content}>
          <span className={styles.tag}>{tag}</span>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.description}>
            {description}
          </p>
          <div className={styles.actionBtn}>
            <Link href="#values" className="btn btn-primary">
              {cta} <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>

        {/* Right graphic image */}
        <div className={styles.graphic}>
          <div className={styles.imageCard}>
            <Image
              src="/images/about_hero_data.png"
              alt="Blacksoft Neural Data Processing"
              width={540}
              height={540}
              priority
              className={styles.image}
            />
            {/* Badge overlay */}
            <div className={styles.badgeOverlay}>
              <div className={styles.badgeTitle}>REAL-TIME PROCESSING</div>
              <p className={styles.badgeText}>
                Processing over 4.2 petabytes of neural data daily with sub-millisecond latency.
              </p>
            </div>
            <div className={styles.glowBg}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
