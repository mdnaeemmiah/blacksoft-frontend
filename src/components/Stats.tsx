'use client';

import React from 'react';
import styles from './Stats.module.css';
import { useInView, useCountUp } from '../utils/useAnimation';
import { useStatsSettings } from '../utils/statsStore';

interface StatItem {
  value: string;
  label: string;
  description: string;
}

export default function Stats() {
  const settings = useStatsSettings();
  const stats: StatItem[] = [
    {
      value: settings.stat1Value,
      label: settings.stat1Label,
      description: settings.stat1Description
    },
    {
      value: settings.stat2Value,
      label: settings.stat2Label,
      description: settings.stat2Description
    },
    {
      value: settings.stat3Value,
      label: settings.stat3Label,
      description: settings.stat3Description
    }
  ];

  const [ref, visible] = useInView<HTMLElement>(0.1, true);

  // Only show stats that have been configured in the admin dashboard
  const activeStats = stats.filter(s => s.label.trim() !== '' || s.value.trim() !== '');
  const isHidden = activeStats.length === 0;

  return (
    <section 
      ref={ref} 
      className={styles.statsSection} 
      style={isHidden ? { opacity: 0, height: 0, padding: 0, overflow: 'hidden', pointerEvents: 'none' } : undefined}
    >
      {!isHidden && (
        <div className={`container ${styles.statsContainer}`}>
          <div className={styles.grid}>
            {activeStats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} trigger={visible} />
            ))}
          </div>
        </div>
      )}
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
