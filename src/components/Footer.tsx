'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import { useSiteConfig } from '../utils/configStore';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isSubPage = pathname === '/solutions' || pathname === '/about' || pathname === '/technology' || pathname === '/enterprise';
  const [emailInput, setEmailInput] = useState('');
  const footerDesc = useSiteConfig('footer.description');
  const footerEmail = useSiteConfig('footer.email');
  const footerLocation = useSiteConfig('footer.location');
  const footerCopy = useSiteConfig('footer.copyright');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      alert(`Subscribed: ${emailInput}`);
      setEmailInput('');
    }
  };

  const getFooterDescription = () => {
    if (pathname === '/solutions') return "Advancing the frontier of elite AI software development.";
    if (pathname === '/about') return "Defining the frontier of elite software intelligence.";
    if (pathname === '/technology') return "Architecting high-performance neural computing infrastructure.";
    if (pathname === '/enterprise') return "Scaling cognitive enterprise intelligence with absolute compliance.";
    return "Architecting the next generation of intelligent software for world-class innovators and tech leaders.";
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        {/* Brand Description Column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            Mishi<span>Ai</span>
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

        {/* Links Column 1: Services / Solutions */}
        <div className={styles.linksCol}>
          <h3 className={styles.colTitle}>{isSubPage ? "Solutions" : "Services"}</h3>
          <ul className={styles.linksList}>
            {isSubPage ? (
              <>
                <li><Link href="/solutions#healthcare" className={styles.link}>Custom AI Models</Link></li>
                <li><Link href="/solutions#fintech" className={styles.link}>Enterprise Strategy</Link></li>
                <li><Link href="/solutions#ecommerce" className={styles.link}>Data Engineering</Link></li>
                <li><Link href="/solutions#ecommerce" className={styles.link}>MLOps</Link></li>
              </>
            ) : (
              <>
                <li><Link href="/technology" className={styles.link}>Custom AI Agents</Link></li>
                <li><Link href="/technology" className={styles.link}>LLM Fine-Tuning</Link></li>
                <li><Link href="/technology" className={styles.link}>Workflow Automation</Link></li>
                <li><Link href="/technology" className={styles.link}>Cloud Architecture</Link></li>
              </>
            )}
          </ul>
        </div>

        {/* Links Column 2: Company */}
        <div className={styles.linksCol}>
          <h3 className={styles.colTitle}>Company</h3>
          <ul className={styles.linksList}>
            {isSubPage ? (
              <>
                <li><Link href="/about#architects" className={styles.link}>Our Team</Link></li>
                <li><Link href="/about#careers" className={styles.link}>Careers</Link></li>
                <li><Link href="#" className={styles.link}>Privacy Policy</Link></li>
                <li><Link href="#" className={styles.link}>Terms of Service</Link></li>
              </>
            ) : (
              <>
                <li><Link href="/enterprise" className={styles.link}>Our Process</Link></li>
                <li><Link href="/solutions" className={styles.link}>Portfolio</Link></li>
                <li><Link href="/about" className={styles.link}>Insights</Link></li>
                <li><Link href="/about#careers" className={styles.link}>Careers</Link></li>
              </>
            )}
          </ul>
        </div>

        {/* Links Column 3: Contact / Connect */}
        <div className={styles.contactCol}>
          <h3 className={styles.colTitle}>{isSubPage ? "Connect" : "Contact"}</h3>
          
          {isSubPage ? (
            <div className={styles.connectContainer}>
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Newsletter"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.btnArrow}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            </div>
          ) : (
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>{footerLocation}</li>
              <li className={styles.contactItem}>
                Email: <a href={`mailto:${footerEmail}`} className={styles.email}>{footerEmail}</a>
              </li>
            </ul>
          )}
          
          <div className={styles.bottomMeta}>
            <p className={styles.copy}>&copy; {currentYear} {footerCopy}</p>
            {!isSubPage && (
              <div className={styles.legal}>
                <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
                <Link href="#" className={styles.legalLink}>Terms of Service</Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
