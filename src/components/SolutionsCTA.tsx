'use client';

import React from 'react';
import Link from 'next/link';
import styles from './SolutionsCTA.module.css';
import { useInView } from '../utils/useAnimation';

export default function SolutionsCTA() {
  const [ref, visible] = useInView(0.1, true);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div 
          ref={ref} 
          className={styles.card}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'scale(0.96)',
            transition: 'opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out)',
          }}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>Ready to lead your industry?</h2>
            <p className={styles.description}>
              Partner with Blacksoft to integrate the most advanced AI frameworks into your business workflow today.
            </p>
            <div className={styles.buttons}>
              <Link href="/book-a-call" className="btn btn-primary">
                Schedule Strategy Session
              </Link>
              <Link href="/technology" className="btn btn-secondary">
                Explore Technology Stack
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
