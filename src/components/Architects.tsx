'use client';

import React from 'react';
import Link from 'next/link';
import { useTeamMembers, useTeamSettings } from '../utils/teamMembersStore';
import styles from './Architects.module.css';
import { useInView } from '../utils/useAnimation';

export default function Architects() {
  const members = useTeamMembers().filter((member) => member.enabled);
  const settings = useTeamSettings();
  const [headerRef, headerVisible] = useInView(0.1, true);

  return (
    <section id="architects" className={styles.section}>
      {/* Background ambient light decorations */}
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      <div className={`container ${styles.container}`}>
        
        {/* Header Block */}
        <div 
          ref={headerRef} 
          className={styles.headerBlock}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out)',
          }}
        >
          <span className={styles.eyebrow}>OUR CREATIVE DIRECTORS & ARCHITECTS</span>
          <h2 className={styles.title}>{settings.title || 'The Architects of Blacksoft'}</h2>
          <p className={styles.subtext}>
            {settings.subtitle || 'A group of engineers, designers, and system builders dedicated to crafting next-generation digital products.'}
          </p>
        </div>

        {/* Members Grid */}
        <div className={styles.grid}>
          {members.length > 0 ? (
            members.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))
          ) : (
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

function TeamMemberCard({ member, index }: { member: ReturnType<typeof useTeamMembers>[number]; index: number }) {
  const [ref, visible] = useInView(0.1, true);
  return (
    <div 
      ref={ref}
      className={styles.memberCard}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(30px)',
        transition: `opacity 0.7s ${index * 0.1}s var(--ease-out), transform 0.7s ${index * 0.1}s var(--ease-out)`,
      }}
    >
      <div className={styles.cardGlow} />
      
      {/* Image Showcase */}
      <div className={styles.imageContainer}>
        {member.imageSrc ? (
          <img
            src={member.imageSrc}
            alt={member.imageAlt || member.name}
            className={styles.image}
            loading="eager"
          />
        ) : (
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
          <div className={styles.socialsGroup}>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.linkedinLink}`} aria-label={`${member.name}'s LinkedIn`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.githubLink}`} aria-label={`${member.name}'s GitHub`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            )}
            {!member.linkedin && !member.github && member.link && (
              <a href={member.link} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={`${member.name}'s profile`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {member.bio && <p className={styles.bio}>{member.bio}</p>}
      </div>
    </div>
  );
}
