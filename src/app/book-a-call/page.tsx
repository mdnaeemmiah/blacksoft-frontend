'use client';

import React from 'react';
import Link from 'next/link';
import { getApiBaseUrl } from '../../utils/apiClient';
import styles from './page.module.css';

// ── Option lists ──────────────────────────────────────────────────────────────
const SERVICES = [
  'Web Development',
  'App Development',
  'UX/UI Design',
  'AI-Powered Development',
  'Brand Identity Design',
];

const BUDGETS = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
];

const COUNTRY_CODES = [
  { code: '+93', country: 'AF' },
  { code: '+355', country: 'AL' },
  { code: '+213', country: 'DZ' },
  { code: '+376', country: 'AD' },
  { code: '+244', country: 'AO' },
  { code: '+1-264', country: 'AI' },
  { code: '+1-268', country: 'AG' },
  { code: '+54', country: 'AR' },
  { code: '+374', country: 'AM' },
  { code: '+297', country: 'AW' },
  { code: '+61', country: 'AU' },
  { code: '+43', country: 'AT' },
  { code: '+994', country: 'AZ' },
  { code: '+1-242', country: 'BS' },
  { code: '+973', country: 'BH' },
  { code: '+880', country: 'BD' },
  { code: '+1-246', country: 'BB' },
  { code: '+375', country: 'BY' },
  { code: '+32', country: 'BE' },
  { code: '+501', country: 'BZ' },
  { code: '+229', country: 'BJ' },
  { code: '+1-441', country: 'BM' },
  { code: '+975', country: 'BT' },
  { code: '+591', country: 'BO' },
  { code: '+387', country: 'BA' },
  { code: '+267', country: 'BW' },
  { code: '+55', country: 'BR' },
  { code: '+673', country: 'BN' },
  { code: '+359', country: 'BG' },
  { code: '+226', country: 'BF' },
  { code: '+257', country: 'BI' },
  { code: '+855', country: 'KH' },
  { code: '+237', country: 'CM' },
  { code: '+1', country: 'CA' },
  { code: '+238', country: 'CV' },
  { code: '+1-345', country: 'KY' },
  { code: '+236', country: 'CF' },
  { code: '+235', country: 'TD' },
  { code: '+56', country: 'CL' },
  { code: '+86', country: 'CN' },
  { code: '+57', country: 'CO' },
  { code: '+269', country: 'KM' },
  { code: '+242', country: 'CG' },
  { code: '+243', country: 'CD' },
  { code: '+682', country: 'CK' },
  { code: '+506', country: 'CR' },
  { code: '+385', country: 'HR' },
  { code: '+53', country: 'CU' },
  { code: '+357', country: 'CY' },
  { code: '+420', country: 'CZ' },
  { code: '+45', country: 'DK' },
  { code: '+253', country: 'DJ' },
  { code: '+1-767', country: 'DM' },
  { code: '+1-809', country: 'DO' },
  { code: '+593', country: 'EC' },
  { code: '+20', country: 'EG' },
  { code: '+503', country: 'SV' },
  { code: '+240', country: 'GQ' },
  { code: '+291', country: 'ER' },
  { code: '+372', country: 'EE' },
  { code: '+251', country: 'ET' },
  { code: '+298', country: 'FO' },
  { code: '+679', country: 'FJ' },
  { code: '+358', country: 'FI' },
  { code: '+33', country: 'FR' },
  { code: '+594', country: 'GF' },
  { code: '+689', country: 'PF' },
  { code: '+241', country: 'GA' },
  { code: '+220', country: 'GM' },
  { code: '+995', country: 'GE' },
  { code: '+49', country: 'DE' },
  { code: '+233', country: 'GH' },
  { code: '+350', country: 'GI' },
  { code: '+30', country: 'GR' },
  { code: '+299', country: 'GL' },
  { code: '+1-473', country: 'GD' },
  { code: '+590', country: 'GP' },
  { code: '+1-671', country: 'GU' },
  { code: '+502', country: 'GT' },
  { code: '+224', country: 'GN' },
  { code: '+245', country: 'GW' },
  { code: '+592', country: 'GY' },
  { code: '+509', country: 'HT' },
  { code: '+504', country: 'HN' },
  { code: '+852', country: 'HK' },
  { code: '+36', country: 'HU' },
  { code: '+354', country: 'IS' },
  { code: '+91', country: 'IN' },
  { code: '+62', country: 'ID' },
  { code: '+98', country: 'IR' },
  { code: '+964', country: 'IQ' },
  { code: '+353', country: 'IE' },
  { code: '+972', country: 'IL' },
  { code: '+39', country: 'IT' },
  { code: '+225', country: 'CI' },
  { code: '+1-876', country: 'JM' },
  { code: '+81', country: 'JP' },
  { code: '+962', country: 'JO' },
  { code: '+7', country: 'KZ' },
  { code: '+254', country: 'KE' },
  { code: '+686', country: 'KI' },
  { code: '+965', country: 'KW' },
  { code: '+996', country: 'KG' },
  { code: '+856', country: 'LA' },
  { code: '+371', country: 'LV' },
  { code: '+961', country: 'LB' },
  { code: '+266', country: 'LS' },
  { code: '+231', country: 'LR' },
  { code: '+218', country: 'LY' },
  { code: '+423', country: 'LI' },
  { code: '+370', country: 'LT' },
  { code: '+352', country: 'LU' },
  { code: '+853', country: 'MO' },
  { code: '+389', country: 'MK' },
  { code: '+261', country: 'MG' },
  { code: '+265', country: 'MW' },
  { code: '+60', country: 'MY' },
  { code: '+960', country: 'MV' },
  { code: '+223', country: 'ML' },
  { code: '+356', country: 'MT' },
  { code: '+692', country: 'MH' },
  { code: '+596', country: 'MQ' },
  { code: '+222', country: 'MR' },
  { code: '+230', country: 'MU' },
  { code: '+262', country: 'YT' },
  { code: '+52', country: 'MX' },
  { code: '+691', country: 'FM' },
  { code: '+373', country: 'MD' },
  { code: '+377', country: 'MC' },
  { code: '+976', country: 'MN' },
  { code: '+382', country: 'ME' },
  { code: '+1-664', country: 'MS' },
  { code: '+212', country: 'MA' },
  { code: '+258', country: 'MZ' },
  { code: '+95', country: 'MM' },
  { code: '+264', country: 'NA' },
  { code: '+674', country: 'NR' },
  { code: '+977', country: 'NP' },
  { code: '+31', country: 'NL' },
  { code: '+599', country: 'AN' },
  { code: '+687', country: 'NC' },
  { code: '+64', country: 'NZ' },
  { code: '+505', country: 'NI' },
  { code: '+227', country: 'NE' },
  { code: '+234', country: 'NG' },
  { code: '+683', country: 'NU' },
  { code: '+850', country: 'KP' },
  { code: '+1-670', country: 'MP' },
  { code: '+47', country: 'NO' },
  { code: '+968', country: 'OM' },
  { code: '+92', country: 'PK' },
  { code: '+680', country: 'PW' },
  { code: '+970', country: 'PS' },
  { code: '+507', country: 'PA' },
  { code: '+675', country: 'PG' },
  { code: '+595', country: 'PY' },
  { code: '+51', country: 'PE' },
  { code: '+63', country: 'PH' },
  { code: '+48', country: 'PL' },
  { code: '+351', country: 'PT' },
  { code: '+1-787', country: 'PR' },
  { code: '+974', country: 'QA' },
  { code: '+262', country: 'RE' },
  { code: '+40', country: 'RO' },
  { code: '+7', country: 'RU' },
  { code: '+250', country: 'RW' },
  { code: '+290', country: 'SH' },
  { code: '+1-869', country: 'KN' },
  { code: '+1-758', country: 'LC' },
  { code: '+508', country: 'PM' },
  { code: '+1-784', country: 'VC' },
  { code: '+685', country: 'WS' },
  { code: '+378', country: 'SM' },
  { code: '+239', country: 'ST' },
  { code: '+966', country: 'SA' },
  { code: '+221', country: 'SN' },
  { code: '+381', country: 'RS' },
  { code: '+248', country: 'SC' },
  { code: '+232', country: 'SL' },
  { code: '+65', country: 'SG' },
  { code: '+421', country: 'SK' },
  { code: '+386', country: 'SI' },
  { code: '+677', country: 'SB' },
  { code: '+252', country: 'SO' },
  { code: '+27', country: 'ZA' },
  { code: '+82', country: 'KR' },
  { code: '+34', country: 'ES' },
  { code: '+94', country: 'LK' },
  { code: '+249', country: 'SD' },
  { code: '+597', country: 'SR' },
  { code: '+268', country: 'SZ' },
  { code: '+46', country: 'SE' },
  { code: '+41', country: 'CH' },
  { code: '+963', country: 'SY' },
  { code: '+886', country: 'TW' },
  { code: '+992', country: 'TJ' },
  { code: '+255', country: 'TZ' },
  { code: '+66', country: 'TH' },
  { code: '+228', country: 'TG' },
  { code: '+690', country: 'TK' },
  { code: '+676', country: 'TO' },
  { code: '+1-868', country: 'TT' },
  { code: '+216', country: 'TN' },
  { code: '+90', country: 'TR' },
  { code: '+993', country: 'TM' },
  { code: '+1-649', country: 'TC' },
  { code: '+688', country: 'TV' },
  { code: '+256', country: 'UG' },
  { code: '+380', country: 'UA' },
  { code: '+971', country: 'AE' },
  { code: '+44', country: 'UK' },
  { code: '+1', country: 'US' },
  { code: '+598', country: 'UY' },
  { code: '+998', country: 'UZ' },
  { code: '+678', country: 'VU' },
  { code: '+58', country: 'VE' },
  { code: '+84', country: 'VN' },
  { code: '+1-284', country: 'VG' },
  { code: '+1-340', country: 'VI' },
  { code: '+681', country: 'WF' },
  { code: '+967', country: 'YE' },
  { code: '+260', country: 'ZM' },
  { code: '+263', country: 'ZW' },
];

export default function MinimalBookACallPage() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneCode, setPhoneCode] = React.useState('+880');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [service, setService] = React.useState('');
  const [budget, setBudget] = React.useState('');
  const [details, setDetails] = React.useState('');

  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const fullPhone = phoneNumber ? `${phoneCode} ${phoneNumber}` : '';

    try {
      const apiBase = getApiBaseUrl();
      const res = await fetch(`${apiBase}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: fullPhone || null,
          project_type: service || null,
          budget_range: budget || null,
          message: details || null,
        }),
      });

      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  // Submitted screen
  if (submitted) {
    return (
      <div className={styles.pageContainer} style={{ justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px', background: '#ffffff', padding: '40px', borderRadius: '20px', border: '1px solid #e1dfda', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>🚀</div>
          <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Thank You!</h1>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
            We have received your project details. Our team will review your requirements and reach out to you within 24 hours.
          </p>
          <Link href="/" style={{
            display: 'inline-block',
            padding: '12px 32px',
            borderRadius: '9999px',
            background: 'var(--primary)',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}>
            Back to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      
      {/* Back button */}
      <div className={styles.backWrapper}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </div>

      {/* Main card container */}
      <div className={styles.card}>
        
        {/* Header Block */}
        <span className={styles.tag}>
          SEND A MESSAGE
        </span>
        <h1 className={styles.title}>
          Tell us about your project
        </h1>
        <p className={styles.subtitle}>
          Fill in the details below and our team will reach out within <strong style={{ color: '#334155' }}>24 hours</strong>.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name *</label>
            <input
              required
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. John Smith"
              className={styles.input}
            />
          </div>

          {/* Email & Phone Row */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address *</label>
              <input
                required
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Phone Number *</label>
              <div className={styles.phoneWrapper}>
                {/* Code selector */}
                <div className={styles.phoneCodeSelect}>
                  <select
                    value={phoneCode}
                    onChange={e => setPhoneCode(e.target.value)}
                    className={styles.select}
                  >
                    {COUNTRY_CODES.map(c => (
                      <option key={`${c.country}-${c.code}`} value={c.code} style={{ background: '#ffffff', color: '#0f172a' }}>
                        {c.country} {c.code}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Number input */}
                <input
                  required
                  type="tel"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  placeholder="01712345678"
                  className={styles.input}
                />
              </div>
            </div>
          </div>

          {/* Service & Budget Row */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Service Required *</label>
              <select
                required
                value={service}
                onChange={e => setService(e.target.value)}
                className={styles.select}
              >
                <option value="" style={{ background: '#ffffff', color: '#0f172a' }}>Select a service</option>
                {SERVICES.map(s => (
                  <option key={s} value={s} style={{ background: '#ffffff', color: '#0f172a' }}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Project Budget *</label>
              <select
                required
                value={budget}
                onChange={e => setBudget(e.target.value)}
                className={styles.select}
              >
                <option value="" style={{ background: '#ffffff', color: '#0f172a' }}>Select a range</option>
                {BUDGETS.map(b => (
                  <option key={b} value={b} style={{ background: '#ffffff', color: '#0f172a' }}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Project Details *</label>
            <textarea
              required
              value={details}
              onChange={e => setDetails(e.target.value)}
              rows={6}
              placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
              className={styles.input}
              style={{ resize: 'vertical', lineHeight: 1.6 }}
            />
          </div>

          {error && (
            <p style={{ color: '#ef4444', fontSize: '13px', margin: 0 }}>
              ⚠ {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={styles.submitBtn}
          >
            {loading ? (
              <span>Sending...</span>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(45deg) translate(-2px, 2px)' }}>
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <span>Send Inquiry</span>
              </>
            )}
          </button>

        </form>

      </div>
    </div>
  );
}
