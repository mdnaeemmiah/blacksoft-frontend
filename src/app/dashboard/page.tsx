'use client';

import React from 'react';
import { useSiteConfig } from '../../utils/configStore';
import CallModal, { openCallModal } from '../../components/CallModal';

const metrics = [
  { label: 'Published pages', value: '18', detail: 'Homepage, brand pages, and service routes' },
  { label: 'Open actions', value: '7', detail: 'Copy updates, reviews, and routing checks' },
  { label: 'Live alerts', value: '2', detail: 'Items requiring attention this week' },
];

const actions = [
  'Review homepage and hero copy for consistency.',
  'Check active leads and content approvals.',
  'Confirm analytics tags and form routing.',
];

export default function DashboardOverviewPage() {
  const brandName = useSiteConfig('navbar.brand');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 0.9fr)',
          gap: '20px',
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            padding: '28px',
            borderRadius: '20px',
            background: 'linear-gradient(145deg, rgba(37, 99, 235, 0.18), rgba(15, 23, 42, 0.92))',
            border: '1px solid var(--border-light)',
            boxShadow: '0 24px 80px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.18em', color: 'var(--primary)' }}>
              {brandName.toUpperCase()} ADMIN
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-white)', lineHeight: 1.1 }}>
              Dashboard Overview
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '62ch' }}>
              Review site health, content status, and the next set of admin tasks from one place.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '22px' }}>
            <button className="btn btn-primary" onClick={() => openCallModal()}>
              Book a Call
            </button>
            <button className="btn btn-secondary" type="button">
              Overview
            </button>
          </div>
        </div>

        <div
          style={{
            padding: '28px',
            borderRadius: '20px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
          }}
        >
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '16px' }}>
            Route Actions
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: 0, margin: 0, listStyle: 'none' }}>
            {actions.map((action) => (
              <li
                key={action}
                style={{
                  padding: '14px 16px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-muted)',
                }}
              >
                {action}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '16px',
        }}
      >
        {metrics.map((metric) => (
          <article
            key={metric.label}
            style={{
              padding: '20px',
              borderRadius: '18px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
            }}
          >
            <div style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-light)' }}>
              {metric.label}
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-white)', marginTop: '6px' }}>
              {metric.value}
            </div>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              {metric.detail}
            </p>
          </article>
        ))}
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '16px',
        }}
      >
        <article
          style={{
            padding: '24px',
            borderRadius: '18px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
          }}
        >
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '14px' }}>
            Current Scope
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            You are editing the dashboard overview.
          </p>
        </article>

        <article
          style={{
            padding: '24px',
            borderRadius: '18px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
          }}
        >
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '14px' }}>
            Next Checks
          </h3>
          <ol style={{ paddingLeft: '18px', margin: 0, color: 'var(--text-muted)', lineHeight: 1.8 }}>
            <li>Confirm copy, media, and CTA labels for the overview.</li>
            <li>Verify links and dashboard navigation targets.</li>
            <li>Push the final content after review.</li>
          </ol>
        </article>
      </section>

      <CallModal />
    </div>
  );
}
