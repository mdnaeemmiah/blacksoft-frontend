'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Ecommerce.module.css';

interface EcomProduct {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isPlaceholder?: boolean;
}

export default function Ecommerce() {
  const products: EcomProduct[] = [
    {
      title: 'Visual Search & Discovery',
      description: 'AI-driven visual recognition allowing customers to find products using nothing but a single image capture.',
      imageSrc: '/images/solutions_visual_search.png',
      imageAlt: 'Blacksoft Visual Search Shoe Scan App'
    },
    {
      title: 'Autonomous Shopping Agents',
      description: 'Intelligent agents that manage procurement, negotiation, and scheduling for enterprise-scale B2B e-commerce.',
      imageSrc: '',
      imageAlt: 'Blacksoft Autonomous AI Shopping Agent',
      isPlaceholder: true
    },
    {
      title: 'Predictive Inventory Management',
      description: 'Anticipate demand surges before they happen, optimizing logistics and reducing overhead by up to 40%.',
      imageSrc: '/images/solutions_predictive_inventory.png',
      imageAlt: 'Blacksoft Predictive Inventory Logistics Dashboard'
    }
  ];

  return (
    <section id="ecommerce" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <span className={styles.tag}>HYPER-PERSONALIZATION</span>
          <h2 className={styles.title}>E-commerce: Personalized Agentic Shopping</h2>
        </div>

        {/* 3-Card Grid */}
        <div className={styles.grid}>
          {products.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                {item.isPlaceholder ? (
                  <div className={styles.imagePlaceholder}>
                    <svg className={styles.placeholderIcon} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {/* Antenna */}
                      <circle cx="50" cy="15" r="3" fill="currentColor" />
                      <line x1="50" y1="15" x2="50" y2="28" />
                      {/* Head shape */}
                      <rect x="20" y="28" width="60" height="52" rx="10" />
                      {/* Eyes */}
                      <circle cx="38" cy="48" r="5" fill="currentColor" />
                      <circle cx="62" cy="48" r="5" fill="currentColor" />
                      {/* Mouth */}
                      <path d="M35,66 L65,66" />
                      {/* Ears */}
                      <rect x="14" y="44" width="6" height="20" rx="3" />
                      <rect x="80" y="44" width="6" height="20" rx="3" />
                    </svg>
                  </div>
                ) : (
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={340}
                    height={240}
                    className={styles.image}
                  />
                )}
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
