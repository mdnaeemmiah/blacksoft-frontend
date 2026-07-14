'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EnterpriseHero.module.css';

import { useSiteConfig } from '../utils/configStore';

export default function EnterpriseHero() {
  const tag = useSiteConfig('enterprise.hero.tag');
  const title = useSiteConfig('enterprise.hero.title');
  const description = useSiteConfig('enterprise.hero.description');
  const cta = useSiteConfig('enterprise.hero.cta');
  const sla = useSiteConfig('enterprise.stats.sla');

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
            <Link href="#security" className="btn btn-primary">
              {cta} <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>

        {/* Right column visual */}
        <div className={styles.graphic}>
          <div className={styles.imageCard}>
            <Image
              src="/images/enterprise_hero_security.png"
              alt="MishiAi Enterprise Cloud Security Architecture"
              width={540}
              height={540}
              priority
              className={styles.image}
            />
            <div className={styles.badgeOverlay}>
              <div className={styles.badgeTitle}>COMPLIANCE READY</div>
              <p className={styles.badgeText}>
                {sla}
              </p>
            </div>
            <div className={styles.glowBg}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
