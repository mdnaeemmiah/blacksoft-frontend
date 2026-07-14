'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CallModal, { openCallModal } from './CallModal';
import styles from './Hero.module.css';
import { useSiteConfig } from '../utils/configStore';

export default function Hero() {
  const tag = useSiteConfig('home.hero.tag');
  const title = useSiteConfig('home.hero.title');
  const description = useSiteConfig('home.hero.description');
  const cta = useSiteConfig('home.hero.cta');

  return (
    <>
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Left Content */}
        <div className={styles.heroContent}>
          {/* Subtitle Tag */}
          <div className={styles.tag}>
            <span className={styles.tagIcon}>←</span>
            {tag}
          </div>

          {/* Heading */}
          <h1 className={styles.title}>
            {title}
          </h1>

          {/* Subtext */}
          <p className={styles.description}>
            {description}
          </p>

          {/* Buttons */}
          <div className={styles.buttonGroup}>
            <button onClick={() => openCallModal()} className="btn btn-primary">
              {cta}
            </button>
            <Link href="#portfolio" className={`btn btn-secondary ${styles.portfolioBtn}`}>
              Explore Portfolio <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>

        {/* Right Graphic Mockup */}
        <div className={styles.heroGraphic}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/hero_ai_dashboard.png" 
              alt="Blacksoft Intelligent Dashboard" 
              width={540} 
              height={540}
              priority
              className={styles.mockupImage}
            />
            {/* Soft background glows */}
            <div className={styles.glowBg1}></div>
            <div className={styles.glowBg2}></div>
          </div>
        </div>
      </div>
    </section>
    <CallModal />
    </>
  );
}
