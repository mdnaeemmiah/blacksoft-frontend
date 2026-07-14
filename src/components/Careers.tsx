'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Careers.module.css';

interface Job {
  id: string;
  title: string;
  location: string;
}

export default function Careers() {
  const jobs: Job[] = [
    {
      id: 'ml-eng',
      title: 'Senior Machine Learning Engineer',
      location: 'Remote / Palo Alto, CA'
    },
    {
      id: 'designer',
      title: 'Product Designer (SaaS Luxury)',
      location: 'Remote / London, UK'
    },
    {
      id: 'infra-arch',
      title: 'Infrastructure Architect',
      location: 'Palo Alto, CA / Remote'
    }
  ];

  return (
    <section id="careers" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Left Column: Copy & Jobs */}
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Build the Future</h2>
          <p className={styles.description}>
            We are looking for the outliers—the researchers who dream in neural nets and the engineers who optimize for the last nanosecond. Join us in building the operating system for the next century.
          </p>

          {/* Job List */}
          <div className={styles.jobList}>
            {jobs.map((job) => (
              <Link key={job.id} href="#contact" className={styles.jobItem}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <p className={styles.jobLocation}>{job.location}</p>
                </div>
                <div className={styles.arrowContainer}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowSvg}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Openings Link */}
          <Link href="#contact" className={styles.viewAll}>
            View All 14 Openings
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.downArrowSvg}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </Link>
        </div>

        {/* Right Column: Statement Card */}
        <div className={styles.rightColumn}>
          <div className={styles.statementCard}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Innovation is our only constant.</h2>
              <p className={styles.cardDescription}>
                No legacy baggage. No corporate bureaucracy. Just pure engineering focus.
              </p>
            </div>
            {/* Background shapes */}
            <div className={styles.shape1}></div>
            <div className={styles.shape2}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
