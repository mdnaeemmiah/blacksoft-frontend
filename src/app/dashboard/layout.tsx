'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  groupName: string;
  items: NavItem[];
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '';

  const navGroups: NavGroup[] = [
    {
      groupName: 'Core',
      items: [
        { label: 'Overview', href: '/dashboard/overview' }
      ]
    },
    {
      groupName: 'Website Manager',
      items: [
        { label: 'Pages', href: '/dashboard/website/pages' },
        { label: 'Navigation', href: '/dashboard/website/navigation' },
        { label: 'Footer Settings', href: '/dashboard/website/footer' },
        { label: 'Announcements', href: '/dashboard/website/announcement' },
        { label: 'Site Settings', href: '/dashboard/website/settings' }
      ]
    },
    {
      groupName: 'Static Pages',
      items: [
        { label: 'Homepage', href: '/dashboard/homepage' },
        { label: 'About Page', href: '/dashboard/about' },
        { label: 'Technology Page', href: '/dashboard/technology' },
        { label: 'Enterprise Page', href: '/dashboard/enterprise' },
        { label: 'Services', href: '/dashboard/services' },
        { label: 'Solutions', href: '/dashboard/solutions' },
        { label: 'Industries', href: '/dashboard/industries' },
        { label: 'Portfolio', href: '/dashboard/portfolio' },
        { label: 'Case Studies', href: '/dashboard/case-studies' },
        { label: 'Process', href: '/dashboard/process' },
        { label: 'Pricing', href: '/dashboard/pricing' },
        { label: 'FAQ', href: '/dashboard/faq' },
        { label: 'Contact Details', href: '/dashboard/contact' }
      ]
    },
    {
      groupName: 'Publications',
      items: [
        { label: 'Blog Posts', href: '/dashboard/blog' },
        { label: 'Categories', href: '/dashboard/blog/categories' },
        { label: 'Tags Manager', href: '/dashboard/blog/tags' },
        { label: 'Comments', href: '/dashboard/blog/comments' }
      ]
    },
    {
      groupName: 'People & Careers',
      items: [
        { label: 'Testimonials', href: '/dashboard/testimonials' },
        { label: 'Team Members', href: '/dashboard/team' },
        { label: 'Careers & Jobs', href: '/dashboard/careers' }
      ]
    },
    {
      groupName: 'CRM & Pipelines',
      items: [
        { label: 'Leads Tracker', href: '/dashboard/leads' },
        { label: 'Clients Roster', href: '/dashboard/clients' },
        { label: 'Projects Grid', href: '/dashboard/projects' }
      ]
    },
    {
      groupName: 'Data & SEO',
      items: [
        { label: 'Media Library', href: '/dashboard/media' },
        { label: 'Forms Manager', href: '/dashboard/forms' },
        { label: 'Newsletters', href: '/dashboard/newsletter' },
        { label: 'SEO Settings', href: '/dashboard/seo' },
        { label: 'Analytics Stats', href: '/dashboard/analytics' }
      ]
    },
    {
      groupName: 'Access & Control',
      items: [
        { label: 'Users Roster', href: '/dashboard/users' },
        { label: 'Roles Definition', href: '/dashboard/roles' },
        { label: 'Permissions Matrix', href: '/dashboard/permissions' }
      ]
    },
    {
      groupName: 'Configuration',
      items: [
        { label: 'Integrations', href: '/dashboard/integrations' },
        { label: 'Global Settings', href: '/dashboard/settings' }
      ]
    },
    {
      groupName: 'Personal Account',
      items: [
        { label: 'Profile Settings', href: '/dashboard/profile' },
        { label: 'Security & Keys', href: '/dashboard/security' },
        { label: 'Notifications', href: '/dashboard/notifications' },
        { label: 'Activity Logs', href: '/dashboard/activity-log' }
      ]
    }
  ];

  // Helper to get breadcrumbs paths
  const getBreadcrumbs = () => {
    const parts = pathname.split('/').filter(p => p);
    return parts.map((part, idx) => {
      const name = part.charAt(0).toUpperCase() + part.slice(1);
      return (
        <span key={idx}>
          {idx > 0 && <span>/</span>}
          {name}
        </span>
      );
    });
  };

  return (
    <div className={styles.dashboardContainer}>
      
      {/* Sidebar Section */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/dashboard" className={styles.logo}>
            Mishi<span>Ai</span> Hub
          </Link>
        </div>
        <nav className={styles.sidebarNav}>
          {navGroups.map((group, groupIdx) => (
            <div key={groupIdx} className={styles.navGroup}>
              <span className={styles.groupLabel}>{group.groupName}</span>
              {group.items.map((item, itemIdx) => {
                const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="9" y1="3" x2="9" y2="21" />
                    </svg>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className={styles.contentArea}>
        
        {/* Top Header bar */}
        <header className={styles.topBar}>
          <div className={styles.breadcrumbs}>
            {getBreadcrumbs()}
          </div>

          <div className={styles.topActions}>
            {/* Search Input box */}
            <div className={styles.searchBox}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input type="text" placeholder="Quick search..." className={styles.searchInput} />
            </div>

            {/* Notification trigger button */}
            <button className={styles.notificationBtn} aria-label="Notifications">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <div className={styles.notifBadge}></div>
            </button>

            {/* User Profile Chip */}
            <div className={styles.profileChip}>
              <div className={styles.avatar}>A</div>
              <span className={styles.profileName}>Admin</span>
            </div>
          </div>
        </header>

        {/* Dynamic Route Children Viewport */}
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>

    </div>
  );
}
