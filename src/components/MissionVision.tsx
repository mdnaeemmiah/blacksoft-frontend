'use client';

import React from 'react';
import styles from './MissionVision.module.css';
import { useSiteConfig } from '../utils/configStore';

export default function MissionVision() {
  const missionTitle = useSiteConfig('about.mission.title');
  const missionDesc = useSiteConfig('about.mission.description');
  const visionTitle = useSiteConfig('about.vision.title');
  const visionDesc = useSiteConfig('about.vision.description');

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Mission Card */}
          <div className={styles.card}>
            <div className={styles.cardGlow} />
            <span className={styles.tag}>OUR MISSION</span>
            <h2 className={styles.title}>{missionTitle}</h2>
            <p className={styles.description}>{missionDesc}</p>
          </div>

          {/* Vision Card */}
          <div className={styles.card}>
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
