'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '';

  const getBreadcrumbs = () => {
    const isOverview = pathname === '/dashboard' || pathname === '/dashboard/';
    return (
      <span>
        <span>Dashboard</span>
        <span>/</span>
        <span>{isOverview ? 'Overview' : 'Overview'}</span>
      </span>
    );
  };

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/dashboard" className={styles.logo}>
            Blacksoft Hub
          </Link>
        </div>
        <nav className={styles.sidebarNav}>
          <div className={styles.navGroup}>
            <span className={styles.groupLabel}>Core</span>
            <Link
              href="/dashboard"
              className={`${styles.navLink} ${pathname === '/dashboard' || pathname === '/dashboard/' ? styles.activeLink : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
              Overview
            </Link>
            <Link
              href="/dashboard/trusted-by-global-innovators"
              className={`${styles.navLink} ${pathname.startsWith('/dashboard/trusted-by-global-innovators') ? styles.activeLink : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                <path d="M12 20l-6.5 3 1.7-7.1L1 10.4l7.2-.6L12 3l3.8 6.8 7.2.6-6.2 5.5 1.7 7.1z" />
              </svg>
              Trusted Innovators
            </Link>
            <Link
              href="/dashboard/architecting-intelligence"
              className={`${styles.navLink} ${pathname.startsWith('/dashboard/architecting-intelligence') ? styles.activeLink : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
              Architecting Intelligence
            </Link>
          </div>
        </nav>
      </aside>

      <div className={styles.contentArea}>
        <header className={styles.topBar}>
          <div className={styles.breadcrumbs}>
            {getBreadcrumbs()}
          </div>

          <div className={styles.topActions}>
            <div className={styles.searchBox}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input type="text" placeholder="Quick search..." className={styles.searchInput} />
            </div>

            <button className={styles.notificationBtn} aria-label="Notifications">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <div className={styles.notifBadge}></div>
            </button>

            <div className={styles.profileChip}>
              <div className={styles.avatar}>A</div>
              <span className={styles.profileName}>Admin</span>
            </div>
          </div>
        </header>

        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
