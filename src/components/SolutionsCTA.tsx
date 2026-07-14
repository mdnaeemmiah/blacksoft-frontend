'use client';

import React from 'react';
import Link from 'next/link';
import styles from './SolutionsCTA.module.css';

export default function SolutionsCTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Ready to lead your industry?</h2>
            <p className={styles.description}>
              Partner with Blacksoft to integrate the most advanced AI frameworks into your business workflow today.
            </p>
            <div className={styles.buttons}>
              <Link href="#contact" className="btn btn-primary">
                Schedule Strategy Session
              </Link>
              <Link href="/docs" className="btn btn-secondary">
                View Technical Documentation
              </Link>
            </div>
          </div>
          {/* Subtle backgrounds */}
          <div className={styles.glowBg}></div>
        </div>
      </div>
    </section>
  );
}
