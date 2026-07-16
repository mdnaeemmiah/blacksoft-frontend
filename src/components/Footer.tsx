'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import { useSiteConfig } from '../utils/configStore';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isSubPage = pathname === '/solutions' || pathname === '/about' || pathname === '/technology' || pathname === '/team';
  const footerDesc = useSiteConfig('footer.description');
  const footerEmail = useSiteConfig('footer.email');
  const footerLocation = useSiteConfig('footer.location');
  const footerCopy = useSiteConfig('footer.copyright');

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        {/* Brand Description Column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            Blacksoft
          </Link>
          <p className={styles.description}>
            {footerDesc}
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} aria-label="Website">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column 1: Services */}
        <div className={styles.linksCol}>
          <h3 className={styles.colTitle}>Services</h3>
          <ul className={styles.linksList}>
            <li><Link href="/technology" className={styles.link}>Custom AI Agents</Link></li>
            <li><Link href="/technology" className={styles.link}>LLM Fine-Tuning</Link></li>
            <li><Link href="/technology" className={styles.link}>Workflow Automation</Link></li>
            <li><Link href="/technology" className={styles.link}>Cloud Architecture</Link></li>
          </ul>
        </div>

        {/* Links Column 2: Company */}
        <div className={styles.linksCol}>
          <h3 className={styles.colTitle}>Company</h3>
          <ul className={styles.linksList}>
            <li><Link href="/solutions" className={styles.link}>Solutions</Link></li>
            <li><Link href="/about" className={styles.link}>About Us</Link></li>
            <li><Link href="/team" className={styles.link}>Our Team</Link></li>
            <li><Link href="/book-a-call" className={styles.link}>Contact</Link></li>
          </ul>
        </div>

        {/* Links Column 3: Contact */}
        <div className={styles.contactCol}>
          <h3 className={styles.colTitle}>Contact</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>{footerLocation}</li>
            <li className={styles.contactItem}>
              Email: <a href={`mailto:${footerEmail}`} className={styles.email}>{footerEmail}</a>
            </li>
          </ul>
        </div>

      </div>

      <div className={`container ${styles.bottomMeta}`}>
        <p className={styles.copy}>&copy; 2026 {footerCopy}</p>
        <div className={styles.legal}>
          <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
          <Link href="#" className={styles.legalLink}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
