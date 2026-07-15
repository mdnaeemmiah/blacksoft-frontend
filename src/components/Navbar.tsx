'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { useSiteConfig } from '../utils/configStore';

function getPathString(path: unknown): string {
  return typeof path === 'string' ? path : '';
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const pathnameStr = getPathString(pathname);
  const navCta = useSiteConfig('navbar.cta');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <svg viewBox="0 0 32 32" className={styles.logoIcon} width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="6" height="17" rx="3" fill="currentColor" />
            <rect x="2" y="23" width="6" height="7" rx="3" fill="currentColor" />
            <path d="M5 25 L12 18" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="14" cy="16" r="4.5" fill="currentColor" />
            <path d="M11 5 h11 c2.76 0 5 2.24 5 5 v0 c0 2.76 -2.24 5 -5 5 h-4" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 27 h11 c2.76 0 5 -2.24 5 -5 v0 c0 -2.76 -2.24 -5 -5 -5 h-4" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Blacksoft
        </Link>

        <nav className={styles.navMenu}>
          <Link href="/#hero" className={`${styles.navLink} ${pathnameStr === '/' ? styles.navActive : ''}`}>Home</Link>
          <Link href="/solutions" className={`${styles.navLink} ${pathnameStr.startsWith('/solutions') ? styles.navActive : ''}`}>Solutions</Link>
          <Link href="/technology" className={`${styles.navLink} ${pathnameStr.startsWith('/technology') ? styles.navActive : ''}`}>Technology</Link>
          <Link href="/about" className={`${styles.navLink} ${pathnameStr.startsWith('/about') ? styles.navActive : ''}`}>About</Link>
          <Link href="/team" className={`${styles.navLink} ${pathnameStr.startsWith('/team') ? styles.navActive : ''}`}>Team</Link>
        </nav>

        <div className={styles.navCta}>
          <Link href="/book-a-call" className="btn btn-primary">
            Book a Call
          </Link>
        </div>

        <button
          className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>

      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/#hero" className={`${styles.mobileLink} ${pathnameStr === '/' ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/solutions" className={`${styles.mobileLink} ${pathnameStr.startsWith('/solutions') ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link href="/technology" className={`${styles.mobileLink} ${pathnameStr.startsWith('/technology') ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>Technology</Link>
          <Link href="/about" className={`${styles.mobileLink} ${pathnameStr.startsWith('/about') ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/team" className={`${styles.mobileLink} ${pathnameStr.startsWith('/team') ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>Team</Link>
          <Link href="/book-a-call" className={`btn btn-primary ${styles.mobileCta}`} onClick={() => setIsOpen(false)}>
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
