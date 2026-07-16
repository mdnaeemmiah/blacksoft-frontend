'use client';

import React from 'react';
import Link from 'next/link';
import { useContactInfo } from '../../utils/contactStore';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  const contact = useContactInfo();

  const hasPolicy = contact.privacyPolicy && contact.privacyPolicy.trim() !== '';

  return (
    <>
      <Navbar />
      <main style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-main)',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 32px',
        }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: '32px' }}>
            <Link href="/" style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase' as const,
              color: '#5c4033',
              background: 'rgba(92, 64, 51, 0.06)',
              border: '1px solid rgba(92, 64, 51, 0.14)',
              padding: '5px 14px',
              borderRadius: '100px',
              marginBottom: '20px',
            }}>
              Legal
            </div>
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 900,
              color: 'var(--text-white)',
              letterSpacing: '-1px',
              lineHeight: 1.15,
              margin: '0 0 16px 0',
            }}>
              Privacy Policy
            </h1>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
            }}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'rgba(92, 64, 51, 0.1)',
            marginBottom: '48px',
          }} />

          {/* Policy Content */}
          {hasPolicy ? (
            <div style={{
              fontSize: '1rem',
              color: 'var(--text-white)',
              lineHeight: 1.8,
              whiteSpace: 'pre-wrap',
            }}>
              {contact.privacyPolicy}
            </div>
          ) : (
            <div style={{
              padding: '60px 40px',
              textAlign: 'center' as const,
              background: 'rgba(92, 64, 51, 0.02)',
              border: '1px solid rgba(92, 64, 51, 0.08)',
              borderRadius: '20px',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📄</div>
              <h2 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text-white)',
                margin: '0 0 8px 0',
              }}>
                Privacy Policy Coming Soon
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Our privacy policy is being drafted and will be published here shortly.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
