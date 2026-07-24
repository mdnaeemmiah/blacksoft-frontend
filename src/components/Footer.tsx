'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import { useSiteConfig } from '../utils/configStore';
import { useServiceCards } from '../utils/servicesStore';
import { useContactInfo } from '../utils/contactStore';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const footerDesc = useSiteConfig('footer.description');
  const footerCopy = useSiteConfig('footer.copyright');

  // Live contact info from DB
  const contact = useContactInfo();

  const [services] = useServiceCards();
  const visibleServices = services.filter((card) => card.enabled);
  const displayServices = visibleServices.length > 0 
    ? visibleServices.slice(0, 4).map(s => ({ title: s.title, href: '/technology' }))
    : [
        { title: 'Custom AI Agents', href: '/technology' },
        { title: 'LLM Fine-Tuning', href: '/technology' },
        { title: 'Workflow Automation', href: '/technology' },
        { title: 'Cloud Architecture', href: '/technology' }
      ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        {/* Brand Description Column */}
        <div className={styles.brandCol}>
          <Link href="/home" className={styles.logo} aria-label="Namisoft home">
            <Image
              className={styles.logoImage}
              src="/images/namisoft-logo-transparent.png"
              alt="Namisoft"
              width={132}
              height={64}
            />
          </Link>
          <p className={styles.description}>
            {footerDesc}
          </p>
          <div className={styles.socials}>
            {/* LinkedIn */}
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column 1: Services */}
        <div className={styles.linksCol}>
          <h3 className={styles.colTitle}>Services</h3>
          <ul className={styles.linksList}>
            {displayServices.map((service, idx) => (
              <li key={idx}>
                <Link href={service.href} className={styles.link}>
                  {service.title}
                </Link>
              </li>
            ))}
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

        {/* Links Column 3: Contact — DB-backed */}
        <div className={styles.contactCol}>
          <h3 className={styles.colTitle}>Contact</h3>
          <ul className={styles.contactList}>
            {contact.location && (
              <li className={styles.contactItem}>{contact.location}</li>
            )}
            {contact.email && (
              <li className={styles.contactItem}>
                Email: <a href={`mailto:${contact.email}`} className={styles.email}>{contact.email}</a>
              </li>
            )}
            {contact.phone && (
              <li className={styles.contactItem}>
                Phone: <a href={`tel:${contact.phone}`} className={styles.email}>{contact.phone}</a>
              </li>
            )}
            {!contact.location && !contact.email && !contact.phone && (
              <li className={styles.contactItem} style={{ opacity: 0.4 }}>Contact info coming soon</li>
            )}
          </ul>
        </div>

      </div>

      <div className={`container ${styles.bottomMeta}`}>
        <p className={styles.copy}>&copy; {currentYear} {footerCopy}</p>
        <div className={styles.legal}>
          <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
          <Link href="#" className={styles.legalLink}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
