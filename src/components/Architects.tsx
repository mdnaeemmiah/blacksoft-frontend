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
      {/* Background ambient light decorations */}
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      <div className={`container ${styles.container}`}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>OUR CREATIVE DIRECTORS & ARCHITECTS</span>
          <h2 className={styles.title}>{settings.title || 'The Architects of Blacksoft'}</h2>
          <p className={styles.subtext}>
            {settings.subtitle || 'A group of engineers, designers, and system builders dedicated to crafting next-generation digital products.'}
          </p>
        </div>

        {/* Members Grid */}
        <div className={styles.grid}>
          {members.length > 0 ? (
            members.map((member) => (
              <div key={member.id} className={styles.memberCard}>
                <div className={styles.cardGlow} />
                
                {/* Image Showcase */}
                <div className={styles.imageContainer}>
                  {member.imageSrc ? (
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt || member.name}
                      width={280}
                      height={280}
                      className={styles.image}
                      priority
                    />
                  ) : (
                    // Premium Avatar Placeholder
                    <div className={styles.avatarPlaceholder}>
                      <span className={styles.avatarInitial}>{member.name.charAt(0)}</span>
                    </div>
                  )}

                  {/* Tech stack logo badge */}
                  {member.logo && (
                    <div className={styles.logoBadge}>
                      <img src={member.logo} alt="Technology icon" className={styles.logoIcon} />
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className={styles.info}>
                  <div className={styles.roleTag}>{member.role}</div>
                  
                  <div className={styles.nameRow}>
                    <h3 className={styles.name}>{member.name}</h3>
                    {member.link && (
                      <a href={member.link} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={`${member.name}'s profile`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {member.bio && <p className={styles.bio}>{member.bio}</p>}
                </div>
              </div>
            ))
          ) : (
            // Premium Placeholder state if there are no members in the database
            <div className={styles.emptyStateContainer}>
              <div className={styles.emptyCard}>
                <div className={styles.emptyIcon}>✨</div>
                <h3>No members published yet</h3>
                <p>Team members can be managed and added dynamically using the Admin Dashboard settings.</p>
                <Link href="/book-a-call" className="btn btn-primary" style={{ marginTop: '12px' }}>
                  Join Our Team
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action Footer link */}
        {settings.ctaLabel && (
          <div className={styles.footerRow}>
            <Link href={settings.ctaLink || '/book-a-call'} className={styles.teamLink}>
              {settings.ctaLabel} <span className={styles.upArrow}>↗</span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
