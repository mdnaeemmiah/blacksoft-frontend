import React from 'react';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      {/* Mock Header Block */}
      <div className={styles.headerBlock}>
        <div className={`${styles.skeleton} ${styles.tagSkeleton}`}></div>
        <div className={`${styles.skeleton} ${styles.titleSkeleton}`}></div>
        <div className={`${styles.skeleton} ${styles.subtextSkeleton}`}></div>
      </div>

      {/* Mock Category Group 1 */}
      <div className={styles.categoryGroup}>
        <div className={`${styles.skeleton} ${styles.categoryLabelSkeleton}`}></div>
        <div className={styles.grid}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className={styles.cardSkeleton}>
              <div className={`${styles.skeleton} ${styles.iconSkeleton}`}></div>
              <div className={`${styles.skeleton} ${styles.categoryTagSkeleton}`}></div>
              <div className={`${styles.skeleton} ${styles.cardTitleSkeleton}`}></div>
              <div className={`${styles.skeleton} ${styles.cardDescSkeletonLine1}`}></div>
              <div className={`${styles.skeleton} ${styles.cardDescSkeletonLine2}`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Mock Category Group 2 */}
      <div className={styles.categoryGroup}>
        <div className={`${styles.skeleton} ${styles.categoryLabelSkeleton}`}></div>
        <div className={styles.grid}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={styles.cardSkeleton}>
              <div className={`${styles.skeleton} ${styles.iconSkeleton}`}></div>
              <div className={`${styles.skeleton} ${styles.categoryTagSkeleton}`}></div>
              <div className={`${styles.skeleton} ${styles.cardTitleSkeleton}`}></div>
              <div className={`${styles.skeleton} ${styles.cardDescSkeletonLine1}`}></div>
              <div className={`${styles.skeleton} ${styles.cardDescSkeletonLine2}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
