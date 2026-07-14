'use client';

import React from 'react';
import styles from './Stats.module.css';

interface StatItem {
  value: string;
  label: string;
  description: string;
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      value: '50+',
      label: 'Products Shipped',
      description: 'High-performance solutions deployed globally for industry leaders.'
    },
    {
      value: '$250M+',
      label: 'Value Generated',
      description: 'Measured ROI and operational efficiency delivered for our partners.'
    },
    {
      value: '100%',
      label: 'Success Rate',
      description: 'Unwavering technical excellence and commitment to project delivery.'
    }
  ];

  return (
    <section className={styles.statsSection}>
      <div className={`container ${styles.statsContainer}`}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.value}>{stat.value}</div>
              <h3 className={styles.label}>{stat.label}</h3>
              <p className={styles.description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
