'use client';

import React from 'react';
import styles from './Stats.module.css';
import { useInView, useCountUp } from '../utils/useAnimation';

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

  const [ref, visible] = useInView<HTMLElement>(0.1, true);

  return (
    <section ref={ref} className={styles.statsSection}>
      <div className={`container ${styles.statsContainer}`}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} trigger={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, trigger }: { stat: StatItem; index: number; trigger: boolean }) {
  // Parse target number and symbol strings (e.g. "50+" -> target: 50, suffix: "+")
  const numericPart = parseInt(stat.value.replace(/[^0-9]/g, ''), 10) || 0;
  const prefix = stat.value.startsWith('$') ? '$' : '';
  const suffix = stat.value.replace(/[0-9$]/g, '');

  const countedVal = useCountUp(numericPart, 2200, trigger);

  return (
    <div
      className={styles.statCard}
      style={{
        opacity: trigger ? 1 : 0,
        transform: trigger ? 'none' : 'translateY(30px)',
        transition: `opacity 0.8s ${index * 0.15}s var(--ease-out), transform 0.8s ${index * 0.15}s var(--ease-out)`,
      }}
    >
      <div className={styles.value}>
        {prefix}
        {countedVal}
        {suffix}
      </div>
      <h3 className={styles.label}>{stat.label}</h3>
      <p className={styles.description}>{stat.description}</p>
    </div>
  );
}
