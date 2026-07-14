'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { useSiteConfig } from '../utils/configStore';
import CallModal, { openCallModal } from './CallModal';

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
          Blacksoft
        </Link>

        <nav className={styles.navMenu}>
          <Link href="/#hero" className={`${styles.navLink} ${pathnameStr === '/' ? styles.navActive : ''}`}>Home</Link>
          <Link href="/solutions" className={`${styles.navLink} ${pathnameStr.startsWith('/solutions') ? styles.navActive : ''}`}>Solutions</Link>
          <Link href="/technology" className={`${styles.navLink} ${pathnameStr.startsWith('/technology') ? styles.navActive : ''}`}>Technology</Link>
          <Link href="/enterprise" className={`${styles.navLink} ${pathnameStr.startsWith('/enterprise') ? styles.navActive : ''}`}>Enterprise</Link>
          <Link href="/about" className={`${styles.navLink} ${pathnameStr.startsWith('/about') ? styles.navActive : ''}`}>About</Link>
        </nav>

        <div className={styles.navCta}>
          <button onClick={() => openCallModal()} className="btn btn-primary">
            {navCta}
          </button>
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
          <Link href="/enterprise" className={`${styles.mobileLink} ${pathnameStr.startsWith('/enterprise') ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>Enterprise</Link>
          <Link href="/about" className={`${styles.mobileLink} ${pathnameStr.startsWith('/about') ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>About</Link>
          <button onClick={() => { openCallModal(); setIsOpen(false); }} className={`btn btn-primary ${styles.mobileCta}`}>
            {navCta}
          </button>
        </nav>
      </div>

      <CallModal />
    </header>
  );
}
