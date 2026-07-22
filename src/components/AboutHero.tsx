'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutHero.module.css';
import { useSiteConfig } from '../utils/configStore';
import { useInView, SplitText } from '../utils/useAnimation';

export default function AboutHero() {
  const tag = useSiteConfig('about.hero.tag') || 'WHO WE ARE';
  const title = useSiteConfig('about.hero.title') || 'Pioneering custom neural solutions.';
  const description = useSiteConfig('about.hero.description') || 'We specialize in tailoring machine learning pipelines and real-time inference clusters for high-throughput enterprises.';
  const cta = useSiteConfig('about.hero.cta') || 'Learn More';

  const [ref, visible] = useInView(0.1, true);

  return (
    <section ref={ref} className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        
        {/* Left content */}
        <div className={styles.content}>
          <span 
            className={styles.tag}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(12px)',
              transition: 'opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out)',
            }}
          >
            {tag}
          </span>
          <h1 className={styles.title}>
            <SplitText
              text={title}
              visible={visible}
              delay={100}
              stagger={45}
            />
          </h1>
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
            className={styles.actionBtn}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.8s 0.55s var(--ease-out), transform 0.8s 0.55s var(--ease-out)',
            }}
          >
            <Link href="#values" className="btn btn-primary">
              {cta} <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>

        {/* Right graphic image */}
        <div 
          className={styles.graphic}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'scale(0.96)',
            transition: 'opacity 1s 0.3s var(--ease-out), transform 1s 0.3s var(--ease-out)',
          }}
        >
          <div className={styles.imageCard}>
            <Image
              src="/images/about_hero_data.png"
              alt="Namisoft Neural Data Processing"
              width={540}
              height={540}
              priority
              className={styles.image}
            />
            {/* Badge overlay */}
            <div 
              className={styles.badgeOverlay}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.8s 0.6s var(--ease-out), transform 0.8s 0.6s var(--ease-out)',
              }}
            >
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
