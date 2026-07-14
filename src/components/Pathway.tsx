'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Pathway.module.css';

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Pathway() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      id: 'consult',
      number: '01',
      title: 'Consult',
      description: 'Deep audit of your infrastructure and AI readiness to define a high-impact roadmap.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.stepIconSvg}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      id: 'design',
      number: '02',
      title: 'Design',
      description: 'Rapid prototyping and UX strategy to ensure the experience is intuitive and powerful.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.stepIconSvg}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    },
    {
      id: 'build',
      number: '03',
      title: 'Build',
      description: 'High-fidelity execution using the latest ML frameworks and cloud-native architectures.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.stepIconSvg}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      id: 'scale',
      number: '04',
      title: 'Scale',
      description: 'Post-launch optimization, continuous training, and multi-region deployment support.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.stepIconSvg}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    }
  ];

  return (
    <section id="enterprise" className={styles.pathwaySection}>
      <div className={`container ${styles.pathwayContainer}`}>
        {/* Left Column Content */}
        <div className={styles.leftColumn}>
          <span className={styles.tag}>EXECUTIVE FRAMEWORK</span>
          <h2 className={styles.title}>Our Proven Pathway to Production</h2>
          <p className={styles.subtitle}>
            We combine agile methodologies with deep technical oversight to ensure every line of code adds measurable business value.
          </p>

          {/* Interactive Step List */}
          <div className={styles.stepList}>
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div 
                  key={step.id} 
                  className={`${styles.stepItem} ${isActive ? styles.stepActive : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={styles.iconContainer}>
                    {step.icon}
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>
                      <span className={styles.stepNumber}>{step.number}</span>
                      {step.title}
                    </h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column Image Graphic */}
        <div className={styles.rightColumn}>
          <div className={styles.imageCard}>
            <Image 
              src="/images/pathway_laboratory.png" 
              alt="Blacksoft Production Wafer Lab" 
              width={540} 
              height={540}
              className={styles.pathwayImage}
            />
            {/* Visual labels mimicking overlay text in screenshot */}
            <div className={styles.waferBadge}>
              <span className={styles.badgePulse}></span>
              SYSTEMS QA TEST ACTIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
