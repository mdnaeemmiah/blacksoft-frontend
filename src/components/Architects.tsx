'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Architects.module.css';

interface Member {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Architects() {
  const members: Member[] = [
    {
      name: 'Dr. Elena Vance',
      role: 'CHIEF SCIENTIST & FOUNDER',
      imageSrc: '/images/team_elena.png',
      imageAlt: 'Dr. Elena Vance - Chief Scientist & Founder at MishiAi'
    },
    {
      name: 'Marcus Thorne',
      role: 'HEAD OF ENGINEERING',
      imageSrc: '/images/team_marcus.png',
      imageAlt: 'Marcus Thorne - Head of Engineering at MishiAi'
    },
    {
      name: 'Sarah Chen',
      role: 'VP OF STRATEGY',
      imageSrc: '/images/team_sarah.png',
      imageAlt: 'Sarah Chen - VP of Strategy at MishiAi'
    },
    {
      name: 'Julian Kross',
      role: 'LEAD NEURAL ARCHITECT',
      imageSrc: '/images/team_julian.png',
      imageAlt: 'Julian Kross - Lead Neural Architect at MishiAi'
    }
  ];

  return (
    <section id="architects" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Top Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.leftHeader}>
            <h2 className={styles.title}>The Architects</h2>
            <p className={styles.subtext}>
              A team of visionaries, engineers, and researchers dedicated to the pursuit of super-intelligence.
            </p>
          </div>
          <div className={styles.rightHeader}>
            <Link href="#careers" className={styles.teamLink}>
              Full Team History <span className={styles.upArrow}>↗</span>
            </Link>
          </div>
        </div>

        {/* Headshots Grid */}
        <div className={styles.grid}>
          {members.map((member, index) => (
            <div key={index} className={styles.memberCard}>
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
