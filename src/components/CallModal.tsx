'use client';

import React from 'react';
import { getApiBaseUrl } from '@/utils/apiClient';

export function openCallModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('blacksoft_open_call'));
  }
}

const PROJECT_TYPES = [
  'Web Application',
  'Mobile App (iOS / Android)',
  'AI / ML Solution',
  'E-commerce Platform',
  'API / Backend System',
  'Custom Software',
  'SaaS Product',
  'Other',
];

const BUDGET_RANGES = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
  'Flexible / Not sure yet',
];

const TIMELINES = [
  'ASAP (< 1 month)',
  '1 – 3 months',
  '3 – 6 months',
  '6+ months',
  'Just exploring ideas',
];

const HOW_HEARD = [
  'Google Search',
  'LinkedIn',
  'Referral / Word of mouth',
  'Social Media',
  'Online Ad',
  'Other',
];

export default function CallModal() {
  const [open, setOpen] = React.useState(false);

  // Fields
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [projectType, setProjectType] = React.useState('');
  const [budgetRange, setBudgetRange] = React.useState('');
  const [timeline, setTimeline] = React.useState('');
  const [preferredDatetime, setPreferredDatetime] = React.useState('');
  const [howHeard, setHowHeard] = React.useState('');
  const [message, setMessage] = React.useState('');

  // UI state
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');
  const [step, setStep] = React.useState(1); // 2-step form

  React.useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('blacksoft_open_call', onOpen);
    return () => window.removeEventListener('blacksoft_open_call', onOpen);
  }, []);

  function close() {
    setOpen(false);
    setSubmitted(false);
    setError('');
    setStep(1);
    setName(''); setEmail(''); setCompany(''); setProjectType('');
    setBudgetRange(''); setTimeline(''); setPreferredDatetime(''); setHowHeard(''); setMessage('');
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${getApiBaseUrl()}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, email,
          company: company || null,
          project_type: projectType || null,
          budget_range: budgetRange || null,
          timeline: timeline || null,
          preferred_datetime: preferredDatetime || null,
          how_heard: howHeard || null,
          message: message || null,
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

  if (!open) return null;

  // ─── Shared styles ───────────────────────────────────────────────────────────

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: 8,
    border: '1.5px solid #e2e8f0', background: '#f8fafc',
    color: '#1e293b', fontSize: 14, fontFamily: 'inherit',
    outline: 'none', transition: 'border-color 0.2s',
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle, cursor: 'pointer', appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center',
    paddingRight: 36,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11, fontWeight: 700, color: '#475569', letterSpacing: '0.06em',
    textTransform: 'uppercase', marginBottom: 5, display: 'block',
  };

  const requiredStar = <span style={{ color: '#ef4444' }}> *</span>;

  // ─── Overlay wrapper ─────────────────────────────────────────────────────────

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(10, 14, 30, 0.80)',
      backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, padding: '16px',
      animation: 'fadeInUp 0.2s ease',
    }}>
      <div style={{
        width: 580, maxWidth: '100%',
        background: '#ffffff',
        borderRadius: 20,
        color: '#1e293b',
        boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
        overflow: 'hidden',
        maxHeight: '90vh',
        display: 'flex', flexDirection: 'column',
      }}>

        {/* ── Modal header ─────────────────────────────────────────────── */}
        <div style={{
          padding: '24px 28px 20px',
          borderBottom: '1px solid #f1f5f9',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#0f172a' }}>
              Book a Free Consultation
            </h3>
            {!submitted && (
              <p style={{ margin: '4px 0 0', fontSize: 13, color: '#64748b' }}>
                Tell us about your project — we'll get back within 24 hours.
              </p>
            )}
          </div>
          <button onClick={close} style={{
            background: '#f1f5f9', border: 'none', color: '#475569',
            fontSize: 18, width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', marginLeft: 16,
          }}>×</button>
        </div>

        {/* ── Success state ──────────────────────────────────────────────── */}
        {submitted ? (
          <div style={{ padding: '48px 28px', textAlign: 'center' }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>🚀</div>
            <h4 style={{ color: '#0f172a', fontSize: 20, marginBottom: 8 }}>You're all set!</h4>
            <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6, maxWidth: 380, margin: '0 auto' }}>
              We've received your project details. A member of our team will reach out to
              <strong> {email}</strong> within 24 hours to schedule your call.
            </p>
            <button onClick={close} style={{
              marginTop: 24, padding: '11px 32px', borderRadius: 9999,
              background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
              color: '#fff', fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(79,70,229,0.3)',
            }}>Done</button>
          </div>
        ) : (
          <>
            {/* ── Step indicator ─────────────────────────────────────────── */}
            <div style={{ padding: '14px 28px 0', display: 'flex', gap: 8, alignItems: 'center' }}>
              {[1, 2].map(s => (
                <React.Fragment key={s}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', fontSize: 12, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: step >= s ? 'linear-gradient(135deg,#4f46e5,#3b82f6)' : '#e2e8f0',
                    color: step >= s ? '#fff' : '#94a3b8',
                    transition: 'all 0.3s',
                  }}>{s}</div>
                  {s < 2 && (
                    <div style={{
                      flex: 1, height: 2, borderRadius: 2,
                      background: step > s ? 'linear-gradient(90deg,#4f46e5,#3b82f6)' : '#e2e8f0',
                      transition: 'background 0.3s',
                    }} />
                  )}
                </React.Fragment>
              ))}
              <span style={{ fontSize: 12, color: '#94a3b8', marginLeft: 8 }}>
                Step {step} of 2
              </span>
            </div>

            {/* ── Scrollable form body ──────────────────────────────────── */}
            <form onSubmit={submit} style={{ overflowY: 'auto', flex: 1 }}>
              <div style={{ padding: '20px 28px', display: 'grid', gap: 16 }}>

                {step === 1 && (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={labelStyle}>Full Name{requiredStar}</label>
                        <input required value={name} onChange={e => setName(e.target.value)}
                          placeholder="Jane Smith" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Work Email{requiredStar}</label>
                        <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
                          placeholder="jane@company.com" style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Company / Organisation</label>
                      <input value={company} onChange={e => setCompany(e.target.value)}
                        placeholder="Acme Corp" style={inputStyle} />
                    </div>

                    <div>
                      <label style={labelStyle}>Project Type{requiredStar}</label>
                      <select required value={projectType} onChange={e => setProjectType(e.target.value)}
                        style={selectStyle}>
                        <option value="">— Select a project type —</option>
                        {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={labelStyle}>Budget Range</label>
                        <select value={budgetRange} onChange={e => setBudgetRange(e.target.value)}
                          style={selectStyle}>
                          <option value="">— Select budget —</option>
                          {BUDGET_RANGES.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Timeline</label>
                        <select value={timeline} onChange={e => setTimeline(e.target.value)}
                          style={selectStyle}>
                          <option value="">— Select timeline —</option>
                          {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 4 }} />
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        type="button"
                        disabled={!name || !email || !projectType}
                        onClick={() => setStep(2)}
                        style={{
                          padding: '11px 28px', borderRadius: 9999,
                          background: (!name || !email || !projectType) ? '#e2e8f0' : 'linear-gradient(135deg,#4f46e5,#3b82f6)',
                          color: (!name || !email || !projectType) ? '#94a3b8' : '#fff',
                          fontWeight: 600, fontSize: 14, border: 'none',
                          cursor: (!name || !email || !projectType) ? 'not-allowed' : 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >Next →</button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label style={labelStyle}>Preferred Date & Time for the Call</label>
                      <input type="datetime-local" value={preferredDatetime}
                        onChange={e => setPreferredDatetime(e.target.value)} style={inputStyle} />
                    </div>

                    <div>
                      <label style={labelStyle}>How did you hear about us?</label>
                      <select value={howHeard} onChange={e => setHowHeard(e.target.value)}
                        style={selectStyle}>
                        <option value="">— Select an option —</option>
                        {HOW_HEARD.map(h => <option key={h} value={h}>{h}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={labelStyle}>Project Description / Agenda{requiredStar}</label>
                      <textarea required value={message} onChange={e => setMessage(e.target.value)}
                        rows={5}
                        placeholder="Briefly describe your project, goals, and any specific challenges you're facing…"
                        style={{ ...inputStyle, resize: 'vertical' }} />
                    </div>

                    {error && (
                      <p style={{ color: '#ef4444', fontSize: 13, margin: 0 }}>⚠ {error}</p>
                    )}

                    <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 4 }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                      <button type="button" onClick={() => setStep(1)} style={{
                        padding: '11px 22px', borderRadius: 9999, border: '1.5px solid #e2e8f0',
                        background: 'transparent', color: '#475569', fontWeight: 600, fontSize: 14,
                        cursor: 'pointer',
                      }}>← Back</button>
                      <button type="submit" disabled={loading} style={{
                        padding: '11px 28px', borderRadius: 9999,
                        background: loading ? '#94a3b8' : 'linear-gradient(135deg,#4f46e5,#3b82f6)',
                        color: '#fff', fontWeight: 600, fontSize: 14, border: 'none',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        boxShadow: loading ? 'none' : '0 4px 15px rgba(79,70,229,0.35)',
                        transition: 'all 0.2s',
                      }}>{loading ? 'Sending…' : '🚀 Submit Request'}</button>
                    </div>
                  </>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
