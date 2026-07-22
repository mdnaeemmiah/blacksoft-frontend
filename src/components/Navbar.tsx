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
        <Link href="/home" className={styles.logo}>
          <svg viewBox="0 0 32 32" className={styles.logoIcon} width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="namisoftGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <path 
              d="M16 16C18 13 21 10 24 10C28 10 30 13 30 16C30 19 28 22 24 22C21 22 18 19 16 16C14 13 11 10 8 10C4 10 2 13 2 16C2 19 4 22 8 22C11 22 14 19 16 16Z" 
              stroke="url(#namisoftGradNav)" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
          Namisoft
        </Link>

        <nav className={styles.navMenu}>
          <Link href="/home" className={`${styles.navLink} ${pathnameStr === '/home' ? styles.navActive : ''}`}>Home</Link>
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
