'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useSiteConfig } from '../utils/configStore';

export default function Hero() {
  const tag = useSiteConfig('home.hero.tag');
  const title = useSiteConfig('home.hero.title');
  const description = useSiteConfig('home.hero.description');
  const cta = useSiteConfig('home.hero.cta');

  return (
    <>
      <section id="hero" className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className={styles.tag}><span className={styles.liveDot} />{tag}</div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttonGroup}>
              <Link href="/book-a-call" className="btn btn-primary">Schedule a Consultation</Link>
              <Link href="#services" className={`btn btn-secondary ${styles.portfolioBtn}`}>
                View Case Studies <span className={styles.arrow}>{'->'}</span>
              </Link>
            </div>
            <div className={styles.proofRow}>
              <span>Built for teams moving from idea to impact</span>
              <span className={styles.proofLine} />
              <strong>AI-native delivery</strong>
            </div>
          </div>

          <div className={styles.heroGraphic} aria-label="AI product workspace preview">
            <div className={styles.orbit} />
            <div className={styles.workspaceCard}>
              <div className={styles.workspaceTop}>
                <span><i className={styles.windowDot} /> Mishi intelligence / workspace</span>
                <span className={styles.workspaceStatus}>● LIVE</span>
              </div>
              <div className={styles.workspaceBody}>
                <div className={styles.workspaceRail}>
                  <span className={styles.railActive}>Overview</span><span>Agents</span><span>Knowledge</span><span>Deployments</span>
                </div>
                <div className={styles.workspaceMain}>
                  <div className={styles.workspaceHeading}><span>Good morning, team</span><b>Command center</b></div>
                  <div className={styles.signalCard}>
                    <div><small>Operations intelligence</small><strong>92.8%</strong><span className={styles.signalUp}>+14.6% this week</span></div>
                    <div className={styles.signalBars}><i /><i /><i /><i /><i /><i /><i /></div>
                  </div>
                  <div className={styles.miniGrid}>
                    <div><small>Active agents</small><b>24</b><em>across 6 teams</em></div>
                    <div><small>Tasks automated</small><b>18.4k</b><em>this month</em></div>
                  </div>
                  <div className={styles.activity}><span className={styles.activityPulse} /> Agent Atlas completed a workflow <time>2m ago</time></div>
                </div>
              </div>
            </div>
            <div className={styles.floatingLabel}><span className={styles.labelIcon}>✦</span><span><small>Next action</small><b>Ship the smarter workflow</b></span></div>
          </div>
        </div>
      </section>
    </>
  );
}
