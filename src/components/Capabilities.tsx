'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Capabilities.module.css';

interface Capability {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

export default function Capabilities() {
  const capabilities: Capability[] = [
    {
      title: 'Custom AI Agents',
      description: 'Autonomous digital employees tailored to your business logic and operational goals.',
      link: '#services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIconSvg}>
          <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
          <path d="M12 6v6h6" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: 'LLM Specialization',
      description: 'Fine-tuning and deploying advanced LLMs for context-specific, high-performance tasks.',
      link: '#services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIconSvg}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6a3.5 3.5 0 0 0-3.5 3.5c0 3 3.5 3 3.5 5.5v1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      )
    },
    {
      title: 'Workflow Automation',
      description: 'Streamlining legacy environments with intelligent, self-correcting software bridges.',
      link: '#services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIconSvg}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      title: 'Enterprise Web',
      description: 'Scalable, high-fidelity web applications with a foundation of performance and security.',
      link: '#services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIconSvg}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
          <path d="M3 9h18" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className={styles.capabilitiesSection}>
      <div className={`container ${styles.capabilitiesContainer}`}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <span className={styles.tag}>CORE CAPABILITIES</span>
          <h2 className={styles.title}>Architecting Intelligence</h2>
          <p className={styles.subtext}>
            From bespoke automation to enterprise-grade AI models, we build core engineering for modern business.
          </p>
        </div>

        {/* Card Grid */}
        <div className={styles.cardGrid}>
          {capabilities.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <Link href={item.link} className={styles.learnMore}>
                Learn more <span className={styles.learnArrow}>↗</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
