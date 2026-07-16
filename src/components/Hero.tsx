'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useSiteConfig } from '../utils/configStore';
import { useMouseTilt, useInView, SplitText } from '../utils/useAnimation';

export default function Hero() {
  const tag = useSiteConfig('home.hero.tag');
  const title = useSiteConfig('home.hero.title');
  const description = useSiteConfig('home.hero.description');

  // 3D tilt effect on the card
  const { ref: cardRef, style: cardTiltStyle } = useMouseTilt(8);

  // Reveal trigger for content
  const [contentRef, contentVisible] = useInView(0.05, true);

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Ambient background orbs */}
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />
      <div className={styles.orb3} aria-hidden />
      <div className={styles.gridOverlay} aria-hidden />

      <div className={`container ${styles.heroContainer}`}>
        {/* ── LEFT CONTENT ── */}
        <div ref={contentRef} className={styles.heroContent}>
          <div
            className={styles.tag}
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'none' : 'translateY(12px)',
              transition: 'opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out)',
            }}
          >
            <span className={styles.liveDot} />
            {tag || 'AI-Powered Software Studio'}
          </div>

          <h1 className={styles.title}>
            <SplitText
              text={(title || 'Build software that thinks.').split('\n')[0]}
              visible={contentVisible}
              delay={100}
              stagger={55}
            />
            {title && title.includes('\n') ? (
              <>
                <br />
                <span className={styles.titleAccent}>
                  <SplitText
                    text={title.split('\n')[1] || ''}
                    visible={contentVisible}
                    delay={250}
                    stagger={55}
                  />
                </span>
              </>
            ) : (
              <span className={styles.titleAccent}>
                {' '}
                <SplitText
                  text="intelligently."
                  visible={contentVisible}
                  delay={350}
                  stagger={50}
                />
              </span>
            )}
          </h1>

          <p
            className={styles.description}
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.8s 0.5s var(--ease-out), transform 0.8s 0.5s var(--ease-out)',
            }}
          >
            {description || 'We build AI-native software, intelligent agents, and scalable platforms that accelerate your business from concept to competitive advantage.'}
          </p>

          <div
            className={styles.buttonGroup}
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.8s 0.65s var(--ease-out), transform 0.8s 0.65s var(--ease-out)',
            }}
          >
            <Link href="/book-a-call" className={`btn btn-primary`}>
              Schedule a Consultation
            </Link>
            <Link href="/solutions" className={`btn btn-secondary ${styles.btnArrow}`}>
              Explore Solutions
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div
            className={styles.proofRow}
            style={{
              opacity: contentVisible ? 1 : 0,
              transition: 'opacity 1s 0.85s var(--ease-out)',
            }}
          >
            <div className={styles.proofItem}>
              <div className={styles.proofDot}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              AI-native delivery
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <div className={styles.proofDot}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              Fast time-to-market
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <div className={styles.proofDot}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              Enterprise-grade security
            </div>
          </div>
        </div>

        {/* ── RIGHT GRAPHIC ── */}
        <div className={styles.heroGraphic} aria-label="AI workspace preview">
          <div className={styles.orbit} />
          <div className={styles.orbit2} />

          <div ref={cardRef} className={styles.workspaceCard} style={cardTiltStyle}>
            {/* Top bar */}
            <div className={styles.workspaceTop}>
              <div className={styles.windowDots}>
                <span className={`${styles.windowDot} ${styles.dotRed}`} />
                <span className={`${styles.windowDot} ${styles.dotYellow}`} />
                <span className={`${styles.windowDot} ${styles.dotGreen}`} />
              </div>
              <span>mishi.intelligence / workspace</span>
              <span className={styles.workspaceStatus}>● LIVE</span>
            </div>

            {/* Body */}
            <div className={styles.workspaceBody}>
              {/* Sidebar rail */}
              <div className={styles.workspaceRail}>
                <span className={styles.railActive}>Overview</span>
                <span>Agents</span>
                <span>Knowledge</span>
                <span>Deployments</span>
                <span>Analytics</span>
              </div>

              {/* Main panel */}
              <div className={styles.workspaceMain}>
                <div className={styles.workspaceHeading}>
                  <small>Good morning, team</small>
                  <b>Command center</b>
                </div>

                <div className={styles.signalCard}>
                  <div>
                    <small>Operations intelligence</small>
                    <strong>92.8%</strong>
                    <span className={styles.signalUp}>▲ +14.6% this week</span>
                  </div>
                  <div className={styles.signalBars}>
                    <i/><i/><i/><i/><i/><i/><i/>
                  </div>
                </div>

                <div className={styles.miniGrid}>
                  <div>
                    <small>Active agents</small>
                    <b>24</b>
                    <em>across 6 teams</em>
                  </div>
                  <div>
                    <small>Tasks automated</small>
                    <b>18.4k</b>
                    <em>this month</em>
                  </div>
                </div>

                <div className={styles.activityRow}>
                  <span className={styles.activityPulse} />
                  Agent Atlas completed a workflow
                  <time>2m ago</time>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className={styles.floatingBadge}>
            <div className={styles.badgeIcon}>✦</div>
            <div className={styles.badgeText}>
              <small>Next action</small>
              <strong>Ship the smarter workflow</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
