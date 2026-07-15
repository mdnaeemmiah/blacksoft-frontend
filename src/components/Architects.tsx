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
                {member.logo && (
                  <div className={styles.logoBadge}>
                    <img src={member.logo} alt="Technology icon" className={styles.logoIcon} />
                  </div>
                )}
              </div>
              <div className={styles.info}>
                <div className={styles.nameRow}>
                  <h3 className={styles.name}>{member.name}</h3>
                  {member.link && (
                    <a href={member.link} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={`${member.name}'s profile`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className={styles.role}>{member.role}</p>
                {member.bio && <p className={styles.bio}>{member.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
