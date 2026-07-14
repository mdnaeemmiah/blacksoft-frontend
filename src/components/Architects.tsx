'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTeamMembers, useTeamSettings } from '../utils/teamMembersStore';
import styles from './Architects.module.css';

export default function Architects() {
  const members = useTeamMembers().filter((member) => member.enabled);
  const settings = useTeamSettings();

  return (
    <section id="architects" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.headerRow}>
          <div className={styles.leftHeader}>
            <h2 className={styles.title}>{settings.title}</h2>
            <p className={styles.subtext}>{settings.subtitle}</p>
          </div>
          <div className={styles.rightHeader}>
            <Link href={settings.ctaLink} className={styles.teamLink}>
              {settings.ctaLabel} <span className={styles.upArrow}>↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {members.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  width={260}
                  height={260}
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
