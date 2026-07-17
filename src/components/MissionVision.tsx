'use client';

import React from 'react';
import styles from './MissionVision.module.css';
import { useSiteConfig } from '../utils/configStore';
import { useInView } from '../utils/useAnimation';

export default function MissionVision() {
  const missionTitle = useSiteConfig('about.mission.title') || 'Architecting Tomorrow';
  const missionDesc = useSiteConfig('about.mission.description') || 'To provide the computational infrastructure and customized intelligence models that empower humanity to compute faster, smarter, and with complete explainability.';
  const visionTitle = useSiteConfig('about.vision.title') || 'The Century of Neural Nets';
  const visionDesc = useSiteConfig('about.vision.description') || 'We envision a future where autonomous digital employees and predictive neural systems integrate natively into all industries, optimizing performance for the next century.';

  const [ref, visible] = useInView(0.1, true);

  return (
    <section ref={ref} className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Mission Card */}
          <div 
            className={styles.card}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(-30px)',
              transition: 'opacity 0.8s 0.1s var(--ease-out), transform 0.8s 0.1s var(--ease-out)',
            }}
          >
            <div className={styles.cardGlow} />
            <span className={styles.tag}>OUR MISSION</span>
            <h2 className={styles.title}>{missionTitle}</h2>
            <p className={styles.description}>{missionDesc}</p>
          </div>

          {/* Vision Card */}
          <div 
            className={styles.card}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(30px)',
              transition: 'opacity 0.8s 0.25s var(--ease-out), transform 0.8s 0.25s var(--ease-out)',
            }}
          >
            <div className={styles.cardGlow} />
            <span className={styles.tag}>OUR VISION</span>
            <h2 className={styles.title}>{visionTitle}</h2>
            <p className={styles.description}>{visionDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
