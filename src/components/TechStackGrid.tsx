'use client';

import React from 'react';
import styles from './TechStackGrid.module.css';

interface TechItem {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

export default function TechStackGrid() {
  const stack: TechItem[] = [
    {
      title: 'PyTorch & TensorFlow',
      category: 'DEEP LEARNING PLATFORMS',
      description: 'Custom neural kernels, transformer backbones, and specialized gradient optimization paths.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'NVIDIA H100 Tensor Core',
      category: 'ACCELERATED HARDWARE',
      description: 'Distributed matrix computation pipelines with sub-millisecond node-to-node transfer speeds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}>
          <rect x="2" y="2" width="20" height="20" rx="4" />
          <path d="M6 10h12M10 6v12" />
        </svg>
      )
    },
    {
      title: 'Kubernetes & Docker',
      category: 'ORCHESTRATION & CONTAINERIZATION',
      description: 'Dynamic pod autoscaling, zero-downtime rolling updates, and fully isolated model container runtime envs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}>
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
          <line x1="12" y1="22" x2="12" y2="12" />
          <line x1="22" y1="8.5" x2="12" y2="12" />
          <line x1="2" y1="8.5" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: 'Next.js & React Server Components',
      category: 'FRONTEND COMPILATION FRAMEWORKS',
      description: 'Statically prerendered enterprise interfaces, lightning-fast edge streaming, and type-safe backend schemas.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      )
    }
  ];

  return (
    <section id="stack" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <h2 className={styles.title}>Our Technology Stack</h2>
          <p className={styles.subtext}>
            Built on battle-tested frameworks and advanced cloud kernels.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className={styles.grid}>
          {stack.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                {item.icon}
              </div>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
