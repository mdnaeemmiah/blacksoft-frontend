'use client';

import React from 'react';
import styles from './WhoWeAre.module.css';
import { useWhoWeAreSettings } from '../utils/whoWeAreStore';
import { useInView, SplitText } from '../utils/useAnimation';
import Link from 'next/link';

export default function WhoWeAre() {
  const settings = useWhoWeAreSettings();
  const [textRef, textVisible] = useInView(0.15, true);
  const [statsRef, statsVisible] = useInView(0.15, true);

  return (
    <section id="who-we-are" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Left: Text */}
          <div ref={textRef}>
            <span
              className={styles.tag}
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'none' : 'translateY(16px)',
                transition: 'opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out)',
              }}
            >
              {settings.tag}
            </span>

            <h2 className={styles.title}>
              <SplitText
                text={settings.title}
                visible={textVisible}
                delay={100}
                stagger={50}
                tag="span"
              />
            </h2>

            <p
              className={styles.description}
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.8s 0.5s var(--ease-out), transform 0.8s 0.5s var(--ease-out)',
              }}
            >
              {settings.description}
            </p>

            <Link
              href="/about"
              className={styles.ctaLink}
              style={{
                opacity: textVisible ? 1 : 0,
                transition: 'opacity 0.8s 0.65s var(--ease-out)',
              }}
            >
              Learn more about our methods <span>→</span>
            </Link>
          </div>

          {/* Right: Stats */}
          <div ref={statsRef} className={styles.statsColumn}>
            {[
              { num: settings.highlight1Num, label: settings.highlight1Label },
              { num: settings.highlight2Num, label: settings.highlight2Label },
              { num: settings.highlight3Num, label: settings.highlight3Label },
            ].map((item, i) => (
              <div
                key={i}
                className={styles.statCard}
                style={{
                  opacity: statsVisible ? 1 : 0,
                  transform: statsVisible ? 'none' : 'translateX(30px)',
                  transition: `opacity 0.7s ${0.15 + i * 0.12}s var(--ease-out), transform 0.7s ${0.15 + i * 0.12}s var(--ease-out)`,
                }}
              >
                <div className={styles.statNum}>{item.num}</div>
                <div className={styles.statLabel}>{item.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
