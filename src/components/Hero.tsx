'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useSiteConfig } from '../utils/configStore';
import { useMouseTilt, useInView, SplitText } from '../utils/useAnimation';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  decimals?: number;
  trigger?: boolean;
}

function AnimatedNumber({
  value,
  duration = 1000,
  delay = 0,
  suffix = '',
  decimals = 0,
  trigger = false,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;
    const startValue = 0;
    
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      
      if (elapsed < delay) {
        setDisplayValue(startValue);
        animationFrameId = window.requestAnimationFrame(step);
        return;
      }
      
      const progress = Math.min((elapsed - delay) / duration, 1);
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const current = startValue + easeProgress * (value - startValue);
      setDisplayValue(current);
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [value, duration, delay, trigger]);

  return (
    <>
      {displayValue.toFixed(decimals)}
      {suffix}
    </>
  );
}

export default function Hero() {
  const tag = useSiteConfig('home.hero.tag');
  const title = useSiteConfig('home.hero.title');
  const description = useSiteConfig('home.hero.description');

  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<'/' | '/solutions' | '/technology' | '/about' | '/team'>('/');

  useEffect(() => {
    setLoaded(true);
  }, []);

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
        <div ref={contentRef} className={`${styles.heroContent} ${loaded ? styles.animateIn : ''}`}>
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
            <Link href="/solutions" className={`btn btn-primary`}>
              Explore Services
            </Link>
            <Link href="/about" className={`btn btn-secondary ${styles.btnArrow}`}>
              Learn More
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
        <div className={`${styles.heroGraphic} ${loaded ? styles.animateIn : ''}`} aria-label="AI workspace preview">
          <div className={styles.orbit} />
          <div className={styles.orbit2} />

          <div className={`${styles.workspaceCardWrapper} ${loaded ? styles.loaded : ''}`}>
            <div ref={cardRef} className={styles.workspaceCard} style={cardTiltStyle}>
              {/* Top bar */}
              <div className={styles.workspaceTop}>
                <span style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.75rem', fontFamily: 'var(--font-body)' }}>Blacksoft Console</span>
                <div className={styles.headerActions}>
                  <div className={styles.headerActionBtn}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="16" x2="12" y2="12"/>
                      <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                  </div>
                  <div className={styles.headerActionBtn}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                  </div>
                  <div className={styles.headerActionBtn}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Body */}
              <div className={styles.workspaceBody}>
                {/* Sidebar rail */}
                <div className={styles.workspaceRail}>
                  <div className={styles.railLogo}>B</div>
                  <div className={styles.railMenu}>
                    <span 
                      className={activeTab === '/' ? styles.railActive : ''} 
                      onClick={() => setActiveTab('/')}
                      title="Overview"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                      </svg>
                    </span>
                    <span 
                      className={activeTab === '/team' ? styles.railActive : ''} 
                      onClick={() => setActiveTab('/team')}
                      title="Team"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </span>
                    <span 
                      className={activeTab === '/solutions' ? styles.railActive : ''} 
                      onClick={() => setActiveTab('/solutions')}
                      title="Solutions"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                      </svg>
                    </span>
                    <span 
                      className={activeTab === '/technology' ? styles.railActive : ''} 
                      onClick={() => setActiveTab('/technology')}
                      title="Technology"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                      </svg>
                    </span>
                  </div>
                  <div className={styles.railExit} title="Exit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                      <polyline points="16 17 21 12 16 7"/>
                      <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                  </div>
                </div>

                {/* Main panel */}
                <div className={styles.workspaceMain}>
                  {activeTab === '/' && (
                    <div className={styles.tabPanel}>
                      {/* Header row */}
                      <div className={styles.workspaceHeadingRow}>
                        <div className={styles.workspaceHeading}>
                          <b style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>LIVE STUDIO OVERVIEW</b>
                          <small style={{ marginTop: '2px' }}>Live studio overview status</small>
                        </div>
                        <div className={styles.indicatorRow}>
                          <span className={styles.indicatorItem}><span className={styles.dotActive} />active</span>
                          <span className={styles.indicatorItem}><span className={styles.dotPending} />pending</span>
                          <span className={styles.indicatorItem}><span className={styles.dotComplete} />complete</span>
                        </div>
                      </div>

                      {/* Charts Grid */}
                      <div className={styles.chartsGrid}>
                        {/* Histogram Chart */}
                        <div className={styles.chartPanel}>
                          <div className={styles.chartTitleRow}>
                            <span>Throughput Rate</span>
                            <strong>
                              <AnimatedNumber value={74.8} decimals={1} suffix=" Gb/s" delay={100} duration={800} trigger={loaded} />
                            </strong>
                          </div>
                          <div className={styles.histogramContainer}>
                            {[
                              { label: 'M', val: 45 },
                              { label: 'T', val: 72 },
                              { label: 'W', val: 58 },
                              { label: 'T', val: 92 },
                              { label: 'F', val: 78 },
                            ].map((bar, i) => (
                              <div key={i} className={styles.histogramColumn}>
                                <div className={styles.histogramBarTrack}>
                                  <div 
                                    className={styles.histogramBarFill} 
                                    style={{ 
                                      height: loaded ? `${bar.val}%` : '0%',
                                      transition: `height 1s ${0.1 + i * 0.1}s cubic-bezier(0.16, 1, 0.3, 1)`
                                    }} 
                                  />
                                </div>
                                <span className={styles.histogramLabel}>{bar.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pie / Donut Chart */}
                        <div className={styles.chartPanel}>
                          <div className={styles.chartTitleRow}>
                            <span>System Load</span>
                            <strong>
                              <AnimatedNumber value={84} decimals={0} suffix="%" delay={100} duration={800} trigger={loaded} />
                            </strong>
                          </div>
                          <div className={styles.pieContainer}>
                            <svg className={styles.donutSvg} viewBox="0 0 100 100">
                              <circle 
                                className={styles.donutTrack} 
                                cx="50" 
                                cy="50" 
                                r="40" 
                                fill="transparent" 
                                stroke="rgba(92, 64, 51, 0.05)" 
                                strokeWidth="8" 
                              />
                              <circle 
                                className={styles.donutFill} 
                                cx="50" 
                                cy="50" 
                                r="40" 
                                fill="transparent" 
                                stroke="var(--accent-1)" 
                                strokeWidth="8" 
                                strokeDasharray="251.2" 
                                strokeDashoffset={loaded ? 251.2 - (251.2 * 84) / 100 : 251.2}
                                strokeLinecap="round"
                                transform="rotate(-90 50 50)"
                                style={{
                                  transition: 'stroke-dashoffset 1.2s 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                                }}
                              />
                            </svg>
                            <div className={styles.donutCenter}>
                              <span className={styles.donutNumber}>
                                <AnimatedNumber value={84} decimals={0} suffix="%" delay={200} duration={1000} trigger={loaded} />
                              </span>
                              <span className={styles.donutSub}>Efficiency</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === '/solutions' && (
                    <div className={styles.tabPanel}>
                      {/* Header row */}
                      <div className={styles.workspaceHeadingRow}>
                        <div className={styles.workspaceHeading}>
                          <small>Service Conversions</small>
                          <b>/solutions</b>
                        </div>
                        <div className={styles.liveBadge}>
                          <span className={styles.livePulse} />
                          CONVERSIONS LIVE
                        </div>
                      </div>

                      <div className={styles.analyticsStats}>
                        <div>
                          <small>Inquiries / Week</small>
                          <strong>
                            <AnimatedNumber value={84.0} decimals={0} suffix=" leads" delay={100} duration={800} trigger={activeTab === '/solutions'} />
                          </strong>
                        </div>
                        <div>
                          <small>Conversion Rate</small>
                          <strong>
                            <AnimatedNumber value={2.45} decimals={2} suffix="%" delay={200} duration={800} trigger={activeTab === '/solutions'} />
                          </strong>
                        </div>
                        <div>
                          <small>Active proposals</small>
                          <strong>3 leads</strong>
                        </div>
                      </div>

                      <div className={styles.apiStreamPanel}>
                        <div className={styles.streamRow}>
                          <span className={styles.methodPost}>INQUIRY</span>
                          <code>Custom LLM deployment</code>
                          <span className={styles.streamTime}>1h ago</span>
                          <span className={styles.streamTokens}>processing</span>
                        </div>
                        <div className={styles.streamRow}>
                          <span className={styles.methodPost}>INQUIRY</span>
                          <code>Cloud infrastructure audit</code>
                          <span className={styles.streamTime}>4h ago</span>
                          <span className={styles.streamTokens}>replied</span>
                        </div>
                        <div className={styles.streamRow}>
                          <span className={styles.methodPost}>INQUIRY</span>
                          <code>AI Agent workspace setup</code>
                          <span className={styles.streamTime}>1d ago</span>
                          <span className={styles.streamTokens}>closed</span>
                        </div>
                      </div>

                      <div className={styles.insightsBox}>
                        <span className={styles.insightLight}>💡</span>
                        <p>Throughput is optimized. Solutions page inquiries surged by 14.6% after the visual update.</p>
                      </div>
                    </div>
                  )}

                  {activeTab === '/technology' && (
                    <div className={styles.tabPanel}>
                      {/* Header row */}
                      <div className={styles.workspaceHeadingRow}>
                        <div className={styles.workspaceHeading}>
                          <small>Platform Integrations</small>
                          <b>/technology</b>
                        </div>
                        <div className={styles.liveBadge}>
                          <span className={styles.livePulse} />
                          STACK SYNCED
                        </div>
                      </div>

                      <div className={styles.knowledgeList}>
                        <div className={styles.knowledgeItem}>
                          <span className={styles.docIcon}>⚡</span>
                          <div>
                            <strong>next.js-v16-framework</strong>
                            <small>Active client renderer • healthy</small>
                          </div>
                          <span className={styles.docStatus}>Synced</span>
                        </div>
                        <div className={styles.knowledgeItem}>
                          <span className={styles.docIcon}>🐍</span>
                          <div>
                            <strong>fastapi-backend-api</strong>
                            <small>Async uvicorn app server • healthy</small>
                          </div>
                          <span className={styles.docStatus}>Synced</span>
                        </div>
                        <div className={styles.knowledgeItem}>
                          <span className={styles.docIcon}>🍃</span>
                          <div>
                            <strong>mongodb-vector-database</strong>
                            <small>Remote cluster connection • healthy</small>
                          </div>
                          <span className={styles.docStatus}>Synced</span>
                        </div>
                      </div>

                      <div className={styles.knowledgeFooter}>
                        <div>
                          <small>Total API Queries</small>
                          <strong>
                            <AnimatedNumber value={19.7} decimals={1} suffix="k requests" delay={100} duration={800} trigger={activeTab === '/technology'} />
                          </strong>
                        </div>
                        <div className={styles.statsDivider} />
                        <div>
                          <small>Index Latency</small>
                          <strong>
                            <AnimatedNumber value={12} decimals={0} suffix="ms" delay={200} duration={800} trigger={activeTab === '/technology'} />
                          </strong>
                        </div>
                        <div className={styles.statsDivider} />
                        <div>
                          <small>Cache Hit Rate</small>
                          <strong>
                            <AnimatedNumber value={98.4} decimals={1} suffix="%" delay={300} duration={800} trigger={activeTab === '/technology'} />
                          </strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === '/about' && (
                    <div className={styles.tabPanel}>
                      {/* Header row */}
                      <div className={styles.workspaceHeadingRow}>
                        <div className={styles.workspaceHeading}>
                          <small>Brand Performance</small>
                          <b>/about</b>
                        </div>
                        <div className={styles.liveBadge}>
                          <span className={styles.livePulse} />
                          TELEMETRY SYNC
                        </div>
                      </div>

                      <div className={styles.agentGrid}>
                        <div className={styles.agentCard} style={{ padding: '8px 12px' }}>
                          <div className={styles.agentHeader}>
                            <strong>Session Duration</strong>
                            <span className={`${styles.agentStatus} ${styles.statusActive}`}>4m 24s</span>
                          </div>
                          <div className={styles.agentProgress}>
                            <span style={{ width: '65%' }} />
                          </div>
                        </div>

                        <div className={styles.agentCard} style={{ padding: '8px 12px' }}>
                          <div className={styles.agentHeader}>
                            <strong>Scroll Depth</strong>
                            <span className={`${styles.agentStatus} ${styles.statusActive}`}>78%</span>
                          </div>
                          <div className={styles.agentProgress}>
                            <span style={{ width: '78%' }} />
                          </div>
                        </div>
                      </div>

                      <div className={styles.consoleLog} style={{ flex: 1 }}>
                        <div className={styles.consoleHeader}>
                          <span /> Console Output
                        </div>
                        <code>
                          $ telemetry --page about<br />
                          &gt; INITIALIZING: checking page session events<br />
                          &gt; ANALYZING: session metrics collected successfully<br />
                          &gt; COMPLETE: bounce-rate optimized to 22.4%
                        </code>
                      </div>

                      <div className={styles.agentStatusFooter} style={{ marginTop: '0' }}>
                        <span>Active readers: 12</span>
                        <span className={styles.footerBullet} />
                        <span>
                          Bounce rate: <AnimatedNumber value={22.4} decimals={1} suffix="%" delay={100} duration={800} trigger={activeTab === '/about'} />
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab === '/team' && (
                    <div className={styles.tabPanel}>
                      {/* Header row */}
                      <div className={styles.workspaceHeadingRow}>
                        <div className={styles.workspaceHeading}>
                          <small>Development Velocity</small>
                          <b>/team</b>
                        </div>
                        <div className={styles.liveBadge}>
                          <span className={styles.livePulse} />
                          VELOCITY ONLINE
                        </div>
                      </div>

                      <div className={styles.analyticsStats}>
                        <div>
                          <small>Daily Commits</small>
                          <strong>
                            <AnimatedNumber value={42} decimals={0} suffix=" shas" delay={100} duration={800} trigger={activeTab === '/team'} />
                          </strong>
                        </div>
                        <div>
                          <small>Deploy speed</small>
                          <strong>
                            <AnimatedNumber value={28} decimals={0} suffix=" mins" delay={200} duration={800} trigger={activeTab === '/team'} />
                          </strong>
                        </div>
                        <div>
                          <small>Sprint progress</small>
                          <strong>
                            <AnimatedNumber value={98.6} decimals={1} suffix="%" delay={300} duration={800} trigger={activeTab === '/team'} />
                          </strong>
                        </div>
                      </div>

                      <div className={styles.chartMock}>
                        <span style={{ height: '30%' }} />
                        <span style={{ height: '45%' }} />
                        <span style={{ height: '40%' }} />
                        <span style={{ height: '65%' }} />
                        <span style={{ height: '55%' }} />
                        <span style={{ height: '70%' }} />
                        <span style={{ height: '80%' }} />
                        <span style={{ height: '75%' }} />
                        <span style={{ height: '90%' }} />
                        <span style={{ height: '85%' }} />
                        <span style={{ height: '95%' }} />
                        <span style={{ height: '100%' }} />
                      </div>

                      <div className={styles.insightsBox}>
                        <span className={styles.insightLight}>💡</span>
                        <p>Team velocity remains optimal. Pipeline features delivered this week boosted metrics by 22%.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className={`${styles.floatingBadge} ${loaded ? styles.loaded : ''}`}>
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
