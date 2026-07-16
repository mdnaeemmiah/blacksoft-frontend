'use client';

import React from 'react';
import Link from 'next/link';
import styles from './CTA.module.css';
import { useSiteConfig } from '../utils/configStore';
import { useInView, SplitText } from '../utils/useAnimation';

export default function CTA() {
  const title = useSiteConfig('cta.title') || 'Ready to start your next project?';
  const description = useSiteConfig('cta.description') || 'Get in touch with our team of expert engineers and designers to build your next high-performance system.';
  const primary = useSiteConfig('cta.primary') || 'Schedule a Consultation';
  const secondary = useSiteConfig('cta.secondary') || 'Explore Our Stack';

  const [ref, visible] = useInView(0.1, true);

  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div ref={ref} className={styles.ctaCard}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              <SplitText
                text={title}
                visible={visible}
                delay={100}
                stagger={50}
              />
            </h2>
            <p
              className={styles.description}
              style={{
                opacity: visible ? 0.8 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.8s 0.4s var(--ease-out), transform 0.8s 0.4s var(--ease-out)',
              }}
            >
              {description}
            </p>
            <div
              className={styles.buttons}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.8s 0.55s var(--ease-out), transform 0.8s 0.55s var(--ease-out)',
              }}
            >
              <Link href="/book-a-call" className="btn btn-white">
                {primary}
              </Link>
              <Link href="/technology" className="btn btn-outline-white">
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
