'use client';

import React from 'react';
import Link from 'next/link';
import styles from './CTA.module.css';
import { useSiteConfig } from '../utils/configStore';

export default function CTA() {
  const title = useSiteConfig('cta.title');
  const description = useSiteConfig('cta.description');
  const primary = useSiteConfig('cta.primary');
  const secondary = useSiteConfig('cta.secondary');

  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.ctaCard}>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>
              {description}
            </p>
            <div className={styles.buttons}>
              <Link href="/book-a-call" className="btn btn-white">
                {primary}
              </Link>
              <Link href="#portfolio" className="btn btn-outline-white">
                {secondary}
              </Link>
            </div>
          </div>
          {/* Subtle overlay shapes for rich glassmorphic styling */}
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
        </div>
      </div>
    </section>
  );
}
