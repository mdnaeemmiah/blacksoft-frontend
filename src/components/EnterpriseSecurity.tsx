'use client';

import React from 'react';
import styles from './EnterpriseSecurity.module.css';

interface SecurityItem {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

export default function EnterpriseSecurity() {
  const compliance: SecurityItem[] = [
    {
      title: 'Compliance Boundaries',
      category: 'AUDITED COMPLIANCE',
      description: 'System architectures fully compliant with SOC 2 Type II, HIPAA, and GDPR regulations to ensure absolute privacy.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: 'Isolated VPC Deployments',
      category: 'DEDICATED CLOUD SYSTEMS',
      description: 'Run inference and train models inside private Virtual Private Clouds, preventing unauthorized egress or ingress.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: 'Zero-Trust Gateways',
      category: 'POD AUTHENTICATION',
      description: 'Enforce cryptographic zero-trust identities on every model node, container pipeline, and database connector.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Hybrid Cloud Syncing',
      category: 'LOCAL DATA INTEGRATIONS',
      description: 'Unify public cloud computing clusters with on-premise relational databases over high-security IPSec VPN tunnels.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )
    }
  ];

  return (
    <section id="security" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <h2 className={styles.title}>Compliance & Security</h2>
          <p className={styles.subtext}>
            Strict safety boundaries, dedicated hosting options, and audited compliance benchmarks.
          </p>
        </div>

        {/* Security Cards Grid */}
        <div className={styles.grid}>
          {compliance.map((item, index) => (
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
