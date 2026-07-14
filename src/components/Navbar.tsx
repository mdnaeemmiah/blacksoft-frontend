'use client';

import React, { useState, useEffect } from 'react';
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
  const isMainPage = pathnameStr === '/';
  const navCta = useSiteConfig('navbar.cta');
  
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showSpecs, setShowSpecs] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    if (savedTheme === 'light') {
      document.documentElement.classList.add('lightTheme');
      setTimeout(() => {
        setTheme('light');
      }, 0);
    }
  }, []);

  const toggleTheme = () => {
    let nextTheme: 'dark' | 'light';
    if (theme === 'dark') {
      nextTheme = 'light';
      document.documentElement.classList.add('lightTheme');
      localStorage.setItem('theme', 'light');
    } else {
      nextTheme = 'dark';
      document.documentElement.classList.remove('lightTheme');
      localStorage.setItem('theme', 'dark');
    }
    setTheme(nextTheme);
    setShowSpecs(true);
  };

  useEffect(() => {
    if (showSpecs) {
      const timer = setTimeout(() => {
        setShowSpecs(false);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [showSpecs]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logo}>
          Mishi<span>Ai</span>
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.navMenu}>
          <Link href="/#hero" className={`${styles.navLink} ${pathnameStr === '/' ? styles.navActive : ''}`}>Home</Link>
          <Link href="/solutions" className={`${styles.navLink} ${pathnameStr.startsWith('/solutions') ? styles.navActive : ''}`}>Solutions</Link>
          <Link href="/technology" className={`${styles.navLink} ${pathnameStr.startsWith('/technology') ? styles.navActive : ''}`}>Technology</Link>
          <Link href="/enterprise" className={`${styles.navLink} ${pathnameStr.startsWith('/enterprise') ? styles.navActive : ''}`}>Enterprise</Link>
          <Link href="/about" className={`${styles.navLink} ${pathnameStr.startsWith('/about') ? styles.navActive : ''}`}>About</Link>
        </nav>

        {/* CTA Button */}
        <div className={styles.navCta}>
          <Link href={isMainPage ? "#contact" : "/#contact"} className="btn btn-primary">
            {navCta}
          </Link>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.themeIcon}>
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.themeIcon}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Burger Button */}
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

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/#hero" className={`${styles.mobileLink} ${pathnameStr === '/' ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/solutions" className={`${styles.mobileLink} ${pathnameStr.startsWith('/solutions') ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link href="/technology" className={`${styles.mobileLink} ${pathnameStr.startsWith('/technology') ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>Technology</Link>
          <Link href="/enterprise" className={`${styles.mobileLink} ${pathnameStr.startsWith('/enterprise') ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>Enterprise</Link>
          <Link href="/about" className={`${styles.mobileLink} ${pathnameStr.startsWith('/about') ? styles.navActive : ''}`} onClick={() => setIsOpen(false)}>About</Link>
          <Link href={isMainPage ? "#contact" : "/#contact"} className={`btn btn-primary ${styles.mobileCta}`} onClick={() => setIsOpen(false)}>
            {navCta}
          </Link>
          <button onClick={toggleTheme} className={styles.mobileThemeToggle} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
          </button>
        </nav>
      </div>

      {/* Theme Specs Popup Display Overlay */}
      {showSpecs && (
        <div className={styles.specsPanel}>
          <div className={styles.specsHeader}>
            <h4>🎨 Theme Specifications</h4>
            <button onClick={() => setShowSpecs(false)} className={styles.specsClose}>×</button>
          </div>
          <div className={styles.specsBody}>
            <div className={styles.specRow}>
              <span>System Name</span>
              <strong>{theme === 'dark' ? 'MishiAi Elite' : 'Lumina Enterprise'}</strong>
            </div>
            <div className={styles.specRow}>
              <span>Mode</span>
              <strong>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</strong>
            </div>
            <div className={styles.specRow}>
              <span>Background</span>
              <div className={styles.colorPreview}>
                <span className={styles.colorDot} style={{ backgroundColor: theme === 'dark' ? '#0b0f19' : '#faf8ff' }}></span>
                <code>{theme === 'dark' ? '#0B0F19' : '#FAF8FF'}</code>
              </div>
            </div>
            <div className={styles.specRow}>
              <span>Primary</span>
              <div className={styles.colorPreview}>
                <span className={styles.colorDot} style={{ backgroundColor: theme === 'dark' ? '#c3c0ff' : '#004ac6' }}></span>
                <code>{theme === 'dark' ? '#C3C0FF' : '#004AC6'}</code>
              </div>
            </div>
            <div className={styles.specRow}>
              <span>Headline Font</span>
              <code>Plus Jakarta Sans</code>
            </div>
            <div className={styles.specRow}>
              <span>Body Font</span>
              <code>Inter</code>
            </div>
          </div>
          <div className={styles.specsProgress}></div>
        </div>
      )}
    </header>
  );
}
