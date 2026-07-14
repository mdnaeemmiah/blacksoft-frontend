'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Healthcare.module.css';

export default function Healthcare() {
  return (
    <section id="healthcare" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Left Column Text Content */}
        <div className={styles.content}>
          <span className={styles.tag}>MEDICAL INTELLIGENCE</span>
          <h2 className={styles.title}>Healthcare AI: Predictive Diagnostics</h2>
          <p className={styles.description}>
            Transforming patient care with multi-modal neural networks capable of analyzing medical imaging, genomic data, and longitudinal records with superhuman precision.
          </p>

          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Real-time anomaly detection in high-res MRI & CT scans</span>
            </li>
            <li className={styles.featureItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Personalized treatment outcome simulations</span>
            </li>
            <li className={styles.featureItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>HIPAA-compliant on-premise model execution</span>
            </li>
          </ul>

          <div className={styles.actionBtn}>
            <Link href="#contact" className="btn btn-secondary">
              Explore Healthcare Tech
            </Link>
          </div>
        </div>

        {/* Right Column Holographic Image */}
        <div className={styles.graphic}>
          <div className={styles.imageCard}>
            <Image
              src="/images/solutions_healthcare.png"
              alt="MishiAi Healthcare AI Diagnostics"
              width={520}
              height={520}
              className={styles.image}
            />
            {/* Glowing borders */}
            <div className={styles.glowBg}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
