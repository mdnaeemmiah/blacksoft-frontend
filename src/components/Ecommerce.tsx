'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Ecommerce.module.css';
import { useEcommerceCards } from '../utils/ecommerceStore';

export default function Ecommerce() {
  const [cards] = useEcommerceCards();
  const visibleCards = cards.filter((card) => card.enabled);

  return (
    <section id="ecommerce" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.headerBlock}>
          <span className={styles.tag}>HYPER-PERSONALIZATION</span>
          <h2 className={styles.title}>E-commerce: Personalized Agentic Shopping</h2>
        </div>

        <div className={styles.grid}>
          {visibleCards.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.imageContainer}>
                {item.isPlaceholder || !item.imageSrc ? (
                  <div className={styles.imagePlaceholder}>
                    <svg className={styles.placeholderIcon} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="50" cy="15" r="3" fill="currentColor" />
                      <line x1="50" y1="15" x2="50" y2="28" />
                      <rect x="20" y="28" width="60" height="52" rx="10" />
                      <circle cx="38" cy="48" r="5" fill="currentColor" />
                      <circle cx="62" cy="48" r="5" fill="currentColor" />
                      <path d="M35,66 L65,66" />
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
