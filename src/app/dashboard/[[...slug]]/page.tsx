'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { getConfig, setConfig } from '../../../utils/configStore';

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default function DashboardPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug || [];
  const routePath = slug.join('/');

  // Card container style
  const cardStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-card)',
    padding: '24px',
    borderRadius: '16px',
    backdropFilter: 'blur(24px)',
    boxShadow: 'var(--card-shadow)',
    color: 'var(--text-main)',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  };

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid var(--border-light)',
    padding: '12px 16px',
    borderRadius: '8px',
    color: 'var(--text-white)',
    fontSize: '0.85rem',
    outline: 'none',
    width: '100%',
  };

  const selectStyle = {
    ...inputStyle,
    background: 'var(--bg-secondary)',
    cursor: 'pointer',
  };

  const labelStyle = {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: 'var(--text-light)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '6px',
    display: 'block',
  };

  const btnStyle = {
    padding: '10px 20px',
    borderRadius: '999px',
    fontSize: '0.8rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const badgeStyle = (color: string) => ({
    background: `${color}15`,
    color: color,
    padding: '4px 10px',
    borderRadius: '99px',
    fontSize: '0.75rem',
    fontWeight: 600,
  });

  // Render Helpers for Route Groups

  // 1. Core Overview
  if (slug.length === 0 || routePath === 'overview') {
    const stats = [
      { title: 'Website Visitors', count: '142,398', change: '+18.4%', color: '#06b6d4' },
      { title: 'Total Leads', count: '1,482', change: '+12.4%', color: '#4f46e5' },
      { title: 'Active Projects', count: '28', change: 'Normal', color: '#10b981' },
      { title: 'Completed Projects', count: '142', change: '+8.5%', color: '#f59e0b' }
    ];

    const extraStats = [
      { title: 'Blog Readership', count: '12.4K', change: '+24.1%', color: '#ec4899' },
      { title: 'Portfolio Clicks', count: '4,891', change: '+15.2%', color: '#8b5cf6' },
      { title: 'Contact Requests', count: '89', change: '-2.3%', color: '#ef4444' },
      { title: 'Revenue (ARR)', count: '$1.2M', change: '+32.4%', color: '#10b981' }
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '6px', color: 'var(--text-white)' }}>Dashboard Overview</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Welcome to the MishiAi control center. Here is your active cluster snapshot.</p>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {[...stats, ...extraStats].map((stat, idx) => (
            <div key={idx} style={cardStyle}>
              <span style={labelStyle}>{stat.title}</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '8px 0 4px 0', color: 'var(--text-white)' }}>{stat.count}</h3>
              <span style={{ fontSize: '0.8rem', color: stat.change.startsWith('+') || stat.change === 'Normal' ? '#10b981' : '#ef4444', fontWeight: 600 }}>{stat.change} this month</span>
            </div>
          ))}
        </div>

        {/* Performance Charts & Activity */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' }}>
          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-white)' }}>Performance Analytics</h3>
              <span style={badgeStyle('var(--primary)')}>Live telemetry</span>
            </div>
            {/* Custom SVG mockup of a clean chart */}
            <div style={{ height: '220px', display: 'flex', alignItems: 'flex-end', gap: '15px', padding: '10px 0' }}>
              {[45, 60, 55, 70, 85, 90, 75, 80, 95, 110, 100, 120].map((h, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '100%', height: `${h}px`, background: 'var(--accent-gradient)', borderRadius: '4px', opacity: 0.85, transition: 'all 0.3s ease' }}></div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-light)' }}>M{i+1}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={cardStyle}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Recent Activity</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ fontSize: '0.8rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Marcus T.</span> updated solutions page layout <span style={{ color: 'var(--text-light)', fontSize: '0.75rem' }}>(2m ago)</span>
                </div>
                <div style={{ fontSize: '0.8rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>New Lead</span> contact form submission from Meta Corp <span style={{ color: 'var(--text-light)', fontSize: '0.75rem' }}>(15m ago)</span>
                </div>
                <div style={{ fontSize: '0.8rem' }}>
                  <span style={{ color: '#10b981', fontWeight: 600 }}>System</span> sitemap auto-generation completed <span style={{ color: 'var(--text-light)', fontSize: '0.75rem' }}>(1h ago)</span>
                </div>
              </div>
            </div>

            <div style={cardStyle}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-white)' }}>Quick Actions</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <Link href="/dashboard/website/pages" className="btn btn-primary" style={{ ...btnStyle, textAlign: 'center', padding: '10px' }}>📝 Pages</Link>
                <Link href="/dashboard/leads" className="btn btn-secondary" style={{ ...btnStyle, textAlign: 'center', padding: '10px' }}>💼 Leads</Link>
                <Link href="/dashboard/blog" className="btn btn-secondary" style={{ ...btnStyle, textAlign: 'center', padding: '10px' }}>✍️ Blog</Link>
                <Link href="/dashboard/settings" className="btn btn-secondary" style={{ ...btnStyle, textAlign: 'center', padding: '10px' }}>⚙️ settings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Website Pages
  if (routePath === 'website/pages') {
    const sitePages = [
      { name: 'Home', path: '/', status: 'Published', type: 'Static Page' },
      { name: 'About Us', path: '/about', status: 'Published', type: 'Static Page' },
      { name: 'Services', path: '/services', status: 'Published', type: 'Static Page' },
      { name: 'Solutions', path: '/solutions', status: 'Published', type: 'Static Page' },
      { name: 'Portfolio', path: '/portfolio', status: 'Published', type: 'Static Page' },
      { name: 'Blog', path: '/blog', status: 'Published', type: 'Publications' },
      { name: 'Careers', path: '/careers', status: 'Draft', type: 'People & Careers' },
      { name: 'Contact', path: '/contact', status: 'Published', type: 'Static Page' },
      { name: 'Privacy Policy', path: '/privacy', status: 'Published', type: 'Legal' },
      { name: 'Terms & Conditions', path: '/terms', status: 'Published', type: 'Legal' },
      { name: 'Cookie Policy', path: '/cookies', status: 'Scheduled', type: 'Legal' }
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Website Pages</h2>
            <p style={{ color: 'var(--text-muted)' }}>Publish, edit, and organize core directories on MishiAi's Edge network.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Create Page</button>
        </div>

        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Page Name</th>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Path</th>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Type</th>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Status</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sitePages.map((page, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '14px 12px', fontWeight: 600 }}>{page.name}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-muted)' }}><code>{page.path}</code></td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-light)' }}>{page.type}</td>
                  <td style={{ padding: '14px 12px' }}>
                    <span style={badgeStyle(page.status === 'Published' ? '#10b981' : page.status === 'Draft' ? '#f59e0b' : '#3b82f6')}>
                      {page.status}
                    </span>
                  </td>
                  <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                    <button style={{ color: 'var(--primary)', marginRight: '12px', fontSize: '0.8rem', fontWeight: 600 }}>Edit</button>
                    <button style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: 600 }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 3. Navigation
  if (routePath === 'website/navigation') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Navigation Manager</h2>
          <p style={{ color: 'var(--text-muted)' }}>Configure header links, dropdown structures, and mobile menus.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Header & Mega Menu Items</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Home (/)', 'Solutions (/solutions) - Mega Menu', 'Technology (/technology) - Dropdown', 'Company (/about) - Dropdown', 'Careers (/careers)'].map((nav, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '8px' }}>
                  <span style={{ fontSize: '0.85rem' }}>{nav}</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>▲</button>
                    <button style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>▼</button>
                    <button style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600 }}>Edit</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary" style={{ ...btnStyle, marginTop: '20px', width: '100%' }}>+ Add Header Item</button>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Call-To-Action (CTA) Button</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Button Label</label>
                <input id="nav-cta-label" type="text" defaultValue={getConfig('navbar.cta')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Target URL</label>
                <input type="text" defaultValue="/contact" style={inputStyle} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="checkbox" defaultChecked id="cta-glow" style={{ width: '16px', height: '16px' }} />
                <label htmlFor="cta-glow" style={{ fontSize: '0.8rem', cursor: 'pointer' }}>Enable high-luminance hover glow effect</label>
              </div>
              <button 
                onClick={() => {
                  const labelVal = (document.getElementById('nav-cta-label') as HTMLInputElement)?.value;
                  if (labelVal) setConfig('navbar.cta', labelVal);
                  alert('Navigation CTA Button updated!');
                }}
                className="btn btn-primary" 
                style={{ ...btnStyle, marginTop: '10px' }}
              >
                Save CTA Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. Footer
  if (routePath === 'website/footer') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Footer Settings</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage company profiles, legal links, addresses, and newsletter subscription forms.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Company Bio & Details</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Footer Description</label>
              <textarea id="footer-desc" defaultValue={getConfig('footer.description')} style={{ ...inputStyle, height: '100px', resize: 'none' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Office Location</label>
                <input id="footer-location" type="text" defaultValue={getConfig('footer.location')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Contact Email</label>
                <input id="footer-email" type="text" defaultValue={getConfig('footer.email')} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Copyright Text</label>
              <input id="footer-copyright" type="text" defaultValue={getConfig('footer.copyright')} style={inputStyle} />
            </div>
          </div>
          <button 
            onClick={() => {
              const descVal = (document.getElementById('footer-desc') as HTMLTextAreaElement)?.value;
              const locVal = (document.getElementById('footer-location') as HTMLInputElement)?.value;
              const emailVal = (document.getElementById('footer-email') as HTMLInputElement)?.value;
              const copyVal = (document.getElementById('footer-copyright') as HTMLInputElement)?.value;
              if (descVal) setConfig('footer.description', descVal);
              if (locVal) setConfig('footer.location', locVal);
              if (emailVal) setConfig('footer.email', emailVal);
              if (copyVal) setConfig('footer.copyright', copyVal);
              alert('Footer configurations updated successfully!');
            }}
            className="btn btn-primary" 
            style={btnStyle}
          >
            Save Footer Configurations
          </button>
        </div>
      </div>
    );
  }

  // 5. Website Settings
  if (routePath === 'website/settings') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Website Settings</h2>
          <p style={{ color: 'var(--text-muted)' }}>Configure core site parameters, branding assets, defaults, and API script injections.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Meta & Branding Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div>
                <label style={labelStyle}>Website Title</label>
                <input type="text" defaultValue="MishiAi | Elite Decentralized AI Operations Platform" style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Branding Logo (URL)</label>
                  <input type="text" defaultValue="/assets/logo.svg" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Favicon Link (URL)</label>
                  <input type="text" defaultValue="/favicon.ico" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Primary Color Scheme</label>
                  <select style={selectStyle}>
                    <option>Dark Mode (MishiAi Elite)</option>
                    <option>Light Mode (Lumina Enterprise)</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Analytics Tracking ID</label>
                  <input type="text" defaultValue="G-MISHIAI42" style={inputStyle} />
                </div>
              </div>
            </div>
            <button className="btn btn-primary" style={btnStyle}>Apply Brand Settings</button>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Status & Scripts</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Maintenance Mode</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="checkbox" id="maint-switch" style={{ width: '20px', height: '20px' }} />
                  <label htmlFor="maint-switch" style={{ fontSize: '0.85rem' }}>Enable offline holding page</label>
                </div>
              </div>
              <div>
                <label style={labelStyle}>Custom Header Scripts (API, CSS)</label>
                <textarea placeholder="<!-- Insert analytics, pixel trackers, or font sheets here -->" style={{ ...inputStyle, height: '140px', fontFamily: 'monospace', resize: 'none' }} />
              </div>
              <button className="btn btn-secondary" style={btnStyle}>Save Injected Scripts</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. Homepage Sections Builder
  if (routePath === 'homepage') {
    const sections = [
      { id: 'hero', name: 'Hero Banner', enabled: true },
      { id: 'tech', name: 'Trusted Technologies', enabled: true },
      { id: 'about', name: 'About Us Summary', enabled: true },
      { id: 'services', name: 'Services Carousel', enabled: true },
      { id: 'solutions', name: 'AI Solutions Matrix', enabled: true },
      { id: 'portfolio', name: 'Selected Portfolio', enabled: true },
      { id: 'industries', name: 'Target Industries', enabled: true },
      { id: 'why-us', name: 'Why Choose Us Perks', enabled: true },
      { id: 'process', name: 'Development Process Timeline', enabled: true },
      { id: 'stats', name: 'Global Statistics Counter', enabled: true },
      { id: 'testimonials', name: 'Client Testimonials Grid', enabled: true },
      { id: 'faq', name: 'Accordion FAQ Group', enabled: true },
      { id: 'cta', name: 'Luminescent CTA Block', enabled: true },
      { id: 'contact', name: 'Map & Contact Form', enabled: true }
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Homepage Section Manager</h2>
          <p style={{ color: 'var(--text-muted)' }}>Enable, disable, configure, and reorder homepage blocks.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '30px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Active Layout Order</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {sections.map((sec, idx) => (
                <div key={sec.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" defaultChecked={sec.enabled} style={{ width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{idx + 1}. {sec.name}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button style={{ color: 'var(--text-light)' }}>▲</button>
                    <button style={{ color: 'var(--text-light)' }}>▼</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Configure: Hero Banner Section</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Hero Tag</label>
                <input id="home-hero-tag" type="text" defaultValue={getConfig('home.hero.tag')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Headline text</label>
                <input id="home-hero-title" type="text" defaultValue={getConfig('home.hero.title')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Sub-headline text</label>
                <textarea id="home-hero-desc" defaultValue={getConfig('home.hero.description')} style={{ ...inputStyle, height: '80px', resize: 'none' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Background Animation Type</label>
                  <select style={selectStyle}>
                    <option>Animated Aurora Mesh</option>
                    <option>Warp Particle Speed</option>
                    <option>Static Gradient Ring</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Primary CTA Text</label>
                  <input id="home-hero-cta" type="text" defaultValue={getConfig('home.hero.cta')} style={inputStyle} />
                </div>
              </div>
              <button 
                onClick={() => {
                  const tagVal = (document.getElementById('home-hero-tag') as HTMLInputElement)?.value;
                  const titleVal = (document.getElementById('home-hero-title') as HTMLInputElement)?.value;
                  const descVal = (document.getElementById('home-hero-desc') as HTMLTextAreaElement)?.value;
                  const ctaVal = (document.getElementById('home-hero-cta') as HTMLInputElement)?.value;
                  if (tagVal) setConfig('home.hero.tag', tagVal);
                  if (titleVal) setConfig('home.hero.title', titleVal);
                  if (descVal) setConfig('home.hero.description', descVal);
                  if (ctaVal) setConfig('home.hero.cta', ctaVal);
                  alert('Homepage Hero Configuration updated successfully!');
                }}
                className="btn btn-primary" 
                style={btnStyle}
              >
                Save Section Config
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 7. About
  if (routePath === 'about') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>About Us Manager</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage values, mission details, timeline events, and gallery blocks.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Mission & Core Values</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Hero Tag</label>
                <input id="about-hero-tag" type="text" defaultValue={getConfig('about.hero.tag')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Hero Headline</label>
                <input id="about-hero-title" type="text" defaultValue={getConfig('about.hero.title')} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Hero Description</label>
              <textarea id="about-hero-desc" defaultValue={getConfig('about.hero.description')} style={{ ...inputStyle, height: '80px', resize: 'none' }} />
            </div>
            <div>
              <label style={labelStyle}>CTA Button Text</label>
              <input id="about-hero-cta" type="text" defaultValue={getConfig('about.hero.cta')} style={inputStyle} />
            </div>
          </div>
          <button 
            onClick={() => {
              const tagVal = (document.getElementById('about-hero-tag') as HTMLInputElement)?.value;
              const titleVal = (document.getElementById('about-hero-title') as HTMLInputElement)?.value;
              const descVal = (document.getElementById('about-hero-desc') as HTMLTextAreaElement)?.value;
              const ctaVal = (document.getElementById('about-hero-cta') as HTMLInputElement)?.value;
              if (tagVal) setConfig('about.hero.tag', tagVal);
              if (titleVal) setConfig('about.hero.title', titleVal);
              if (descVal) setConfig('about.hero.description', descVal);
              if (ctaVal) setConfig('about.hero.cta', ctaVal);
              alert('About Us Configurations updated successfully!');
            }}
            className="btn btn-primary" 
            style={btnStyle}
          >
            Save Profile Assets
          </button>
        </div>
      </div>
    );
  }

  // Technology Page
  if (routePath === 'technology') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Technology Page Manager</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage your tech stacks grid, compiler capabilities, and latency benchmarks.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Technology Hero Banner</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Hero Tag</label>
                <input id="tech-hero-tag" type="text" defaultValue={getConfig('tech.hero.tag')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Hero Headline</label>
                <input id="tech-hero-title" type="text" defaultValue={getConfig('tech.hero.title')} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Sub-headline</label>
              <textarea id="tech-hero-desc" defaultValue={getConfig('tech.hero.description')} style={{ ...inputStyle, height: '80px', resize: 'none' }} />
            </div>
            <div>
              <label style={labelStyle}>CTA Button Text</label>
              <input id="tech-hero-cta" type="text" defaultValue={getConfig('tech.hero.cta')} style={inputStyle} />
            </div>
          </div>
          <button 
            onClick={() => {
              const tagVal = (document.getElementById('tech-hero-tag') as HTMLInputElement)?.value;
              const titleVal = (document.getElementById('tech-hero-title') as HTMLInputElement)?.value;
              const descVal = (document.getElementById('tech-hero-desc') as HTMLTextAreaElement)?.value;
              const ctaVal = (document.getElementById('tech-hero-cta') as HTMLInputElement)?.value;
              if (tagVal) setConfig('tech.hero.tag', tagVal);
              if (titleVal) setConfig('tech.hero.title', titleVal);
              if (descVal) setConfig('tech.hero.description', descVal);
              if (ctaVal) setConfig('tech.hero.cta', ctaVal);
              alert('Technology Page Configurations updated successfully!');
            }}
            className="btn btn-primary" 
            style={btnStyle}
          >
            Save Hero Config
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '30px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Tech Stack Grid Items</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'CUDA compiler optimization (H100/A100)', cat: 'GPU Layers' },
                { name: 'WebAssembly sandboxed runtimes (WasmEdge)', cat: 'Sandbox' },
                { name: 'Decentralized consensus rings (Raft-ops)', cat: 'Consensus' }
              ].map((stack, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '8px' }}>
                  <span style={{ fontSize: '0.85rem' }}>{stack.name}</span>
                  <span style={badgeStyle('var(--primary)')}>{stack.cat}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Capabilities & Metrics</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Latency Benchmark target</label>
                <input type="text" defaultValue="0.38ms average response time" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Max Throughput Rate</label>
                <input type="text" defaultValue="142.4 Gbps bandwidth" style={inputStyle} />
              </div>
              <button className="btn btn-secondary" style={btnStyle}>Update Capabilities</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Enterprise Page
  if (routePath === 'enterprise') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Enterprise Page Manager</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage enterprise trust parameters, compliance matrices, stats, and pathways.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Enterprise Hero Configuration</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Hero Tag</label>
                <input id="ent-hero-tag" type="text" defaultValue={getConfig('enterprise.hero.tag')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Hero Headline</label>
                <input id="ent-hero-title" type="text" defaultValue={getConfig('enterprise.hero.title')} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Hero Description</label>
              <textarea id="ent-hero-desc" defaultValue={getConfig('enterprise.hero.description')} style={{ ...inputStyle, height: '80px', resize: 'none' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>CTA Button Text</label>
                <input id="ent-hero-cta" type="text" defaultValue={getConfig('enterprise.hero.cta')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>SLA / Compliance Badge Text</label>
                <input id="ent-stats-sla" type="text" defaultValue={getConfig('enterprise.stats.sla')} style={inputStyle} />
              </div>
            </div>
          </div>
          <button 
            onClick={() => {
              const tagVal = (document.getElementById('ent-hero-tag') as HTMLInputElement)?.value;
              const titleVal = (document.getElementById('ent-hero-title') as HTMLInputElement)?.value;
              const descVal = (document.getElementById('ent-hero-desc') as HTMLTextAreaElement)?.value;
              const ctaVal = (document.getElementById('ent-hero-cta') as HTMLInputElement)?.value;
              const slaVal = (document.getElementById('ent-stats-sla') as HTMLInputElement)?.value;
              if (tagVal) setConfig('enterprise.hero.tag', tagVal);
              if (titleVal) setConfig('enterprise.hero.title', titleVal);
              if (descVal) setConfig('enterprise.hero.description', descVal);
              if (ctaVal) setConfig('enterprise.hero.cta', ctaVal);
              if (slaVal) setConfig('enterprise.stats.sla', slaVal);
              alert('Enterprise Page Configurations updated successfully!');
            }}
            className="btn btn-primary" 
            style={btnStyle}
          >
            Save Enterprise Config
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Enterprise Security Checklist</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="checkbox" defaultChecked id="soc2" style={{ width: '18px', height: '18px' }} />
                <label htmlFor="soc2" style={{ fontSize: '0.85rem', cursor: 'pointer' }}>SOC 2 Type II Compliance verification</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="checkbox" defaultChecked id="hipaa" style={{ width: '18px', height: '18px' }} />
                <label htmlFor="hipaa" style={{ fontSize: '0.85rem', cursor: 'pointer' }}>HIPAA compliance policy templates active</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="checkbox" defaultChecked id="gdpr" style={{ width: '18px', height: '18px' }} />
                <label htmlFor="gdpr" style={{ fontSize: '0.85rem', cursor: 'pointer' }}>GDPR localized memory isolation enabled</label>
              </div>
            </div>
            <button className="btn btn-primary" style={btnStyle}>Save Security Directives</button>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Integration Pathway Steps</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { step: 'Phase 1: Compliance Mapping', desc: 'Map security regulations and nodes requirements' },
                { step: 'Phase 2: Custom Cluster Spin-up', desc: 'Deploy dedicated clusters on target edge rings' },
                { step: 'Phase 3: Integration & Telemetry', desc: 'Connect endpoints and launch live telemetry dashboards' }
              ].map((p, idx) => (
                <div key={idx} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '12px' }}>
                  <h4 style={{ color: 'var(--text-white)', fontWeight: 700, marginBottom: '6px', fontSize: '0.9rem' }}>{p.step}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 8. Services
  if (routePath === 'services') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Services Manager</h2>
          <p style={{ color: 'var(--text-muted)' }}>Deploy custom service lines, processes, FAQs, and tech stacks.</p>
        </div>

        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)' }}>Active Services</h3>
            <button className="btn btn-primary" style={btnStyle}>+ Add Service Page</button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Service Title</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Slug</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Tech Stack</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { title: 'Fine-Tuning Rotation', slug: '/services/fine-tuning', stack: 'PyTorch, CUDA, H100 GPU' },
                { title: 'Edge Cluster Provisioning', slug: '/services/edge-cluster', stack: 'Wasm, Kubernetes, Docker' },
                { title: 'Vector DB Pipelines', slug: '/services/vector-db', stack: 'Pinecone, Qdrant, Milvus' }
              ].map((serv, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '14px 12px', fontWeight: 600 }}>{serv.title}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-muted)' }}><code>{serv.slug}</code></td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-light)' }}>{serv.stack}</td>
                  <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                    <button style={{ color: 'var(--primary)', marginRight: '12px', fontWeight: 600 }}>Configure</button>
                    <button style={{ color: '#ef4444', fontWeight: 600 }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 9. AI Solutions
  if (routePath === 'solutions') {
    const solutions = [
      'AI Chatbot', 'AI Agent', 'Computer Vision', 'Generative AI', 
      'Machine Learning', 'Automation', 'OCR Services', 'Voice AI Suite', 
      'Recommendation System', 'Predictive Analytics', 'RAG pipelines', 'Knowledge Base'
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>AI Solutions Manager</h2>
            <p style={{ color: 'var(--text-muted)' }}>Create and manage custom AI workflows and pipeline directories.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Create Solution Profile</button>
        </div>

        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Solutions Hero Configuration</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Hero Tag</label>
                <input id="sol-hero-tag" type="text" defaultValue={getConfig('solutions.hero.tag')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Hero Headline</label>
                <input id="sol-hero-title" type="text" defaultValue={getConfig('solutions.hero.title')} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Hero Description</label>
              <textarea id="sol-hero-desc" defaultValue={getConfig('solutions.hero.description')} style={{ ...inputStyle, height: '80px', resize: 'none' }} />
            </div>
          </div>
          <button 
            onClick={() => {
              const tagVal = (document.getElementById('sol-hero-tag') as HTMLInputElement)?.value;
              const titleVal = (document.getElementById('sol-hero-title') as HTMLInputElement)?.value;
              const descVal = (document.getElementById('sol-hero-desc') as HTMLTextAreaElement)?.value;
              if (tagVal) setConfig('solutions.hero.tag', tagVal);
              if (titleVal) setConfig('solutions.hero.title', titleVal);
              if (descVal) setConfig('solutions.hero.description', descVal);
              alert('Solutions Hero Configurations updated successfully!');
            }}
            className="btn btn-primary" 
            style={btnStyle}
          >
            Save Hero Config
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {solutions.map((sol, idx) => (
            <div key={idx} style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-white)' }}>{sol}</h3>
                <span style={badgeStyle('#10b981')}>Active</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Provide end-users with highly optimized, customized endpoints matching this solution workflow.</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600 }}>Manage Endpoints</button>
                <button style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: 600 }}>Edit SEO</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 10. Industries
  if (routePath === 'industries') {
    const industries = [
      'Healthcare', 'Restaurant', 'Retail', 'Finance', 'Education', 
      'Real Estate', 'Construction', 'Manufacturing', 'Government', 'Fitness', 'Logistics'
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Target Industries</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage customized industry-specific marketing grids and case studies.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
          {industries.map((ind, idx) => (
            <div key={idx} style={cardStyle}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-white)' }}>{ind}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Customize unique problems, solutions, and showcase case studies tailored to {ind}.</p>
              <button style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600 }}>Edit Landing Deck</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 11. Portfolio
  if (routePath === 'portfolio') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Portfolio Directory</h2>
            <p style={{ color: 'var(--text-muted)' }}>Administer public project profiles, demo repositories, and clients assets.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Add Project Profile</button>
        </div>

        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Project Name</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Client</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Industry</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Technologies</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Nephron AI Health Scanner', client: 'Mayo Health', ind: 'Healthcare', tech: 'Computer Vision, PyTorch' },
                { name: 'Autonomous Inventory Bot', client: 'ShipMart Global', ind: 'Logistics', tech: 'AI Agents, LLM Fine-Tuning' },
                { name: 'FinSecure Fraud Rotator', client: 'Swiss Trust Bank', ind: 'Finance', tech: 'Machine Learning, RAG' }
              ].map((proj, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '14px 12px', fontWeight: 600 }}>{proj.name}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-muted)' }}>{proj.client}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-light)' }}>{proj.ind}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--primary)' }}><code>{proj.tech}</code></td>
                  <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                    <button style={{ color: 'var(--primary)', marginRight: '12px', fontWeight: 600 }}>Edit Details</button>
                    <button style={{ color: '#ef4444', fontWeight: 600 }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 12. Case Studies
  if (routePath === 'case-studies') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Case Studies Manager</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage problem breakdowns, design steps, metrics, timeline, and client reviews.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Active Case Studies</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {['Zero-Trust Cluster Rollout - Mayo Clinic', 'Predictive Replenishment Pipeline - Walmart Solutions'].map((cs, idx) => (
              <div key={idx} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: 'var(--text-white)', fontWeight: 600, fontSize: '0.95rem' }}>{cs}</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Last updated: Jul 09, 2026</span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn btn-secondary" style={{ ...btnStyle, padding: '6px 12px' }}>Edit Sections</button>
                  <button className="btn btn-secondary" style={{ ...btnStyle, padding: '6px 12px', color: 'var(--primary)' }}>Edit Metrics</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 13. Process
  if (routePath === 'process') {
    const steps = [
      { step: 'Discovery', duration: '1 week', icon: '🔍' },
      { step: 'Planning', duration: '1 week', icon: '📋' },
      { step: 'Research', duration: '2 weeks', icon: '🔬' },
      { step: 'UI Design', duration: '3 weeks', icon: '🎨' },
      { step: 'Development', duration: '6 weeks', icon: '💻' },
      { step: 'Testing', duration: '2 weeks', icon: '🧪' },
      { step: 'Deployment', duration: '1 week', icon: '🚀' },
      { step: 'Maintenance', duration: 'Ongoing', icon: '🛠️' }
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Process Steps</h2>
          <p style={{ color: 'var(--text-muted)' }}>Configure development cycle icons, steps, descriptions, and durations.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Software Development Life Cycle (SDLC)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {steps.map((st, idx) => (
              <div key={idx} style={{ padding: '16px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ fontSize: '2rem' }}>{st.icon}</span>
                <h4 style={{ color: 'var(--text-white)', fontWeight: 700 }}>{st.step}</h4>
                <div style={{ fontSize: '0.75rem', color: 'var(--primary)' }}>Duration: {st.duration}</div>
                <button style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: 600, textAlign: 'left', marginTop: '10px' }}>Edit Description</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 14. Pricing
  if (routePath === 'pricing') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Pricing Packages</h2>
          <p style={{ color: 'var(--text-muted)' }}>Configure startup, MVP, Business, Enterprise, and custom support tier pricing structures.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            { tier: 'Startup Plan', price: '$499/mo', features: '1 custom LLM node, 24/7 support email, 100k queries' },
            { tier: 'MVP Pipeline', price: '$1,999/mo', features: '3 nodes, custom Fine-Tuning rotation, API Access' },
            { tier: 'Business Ring', price: '$4,999/mo', features: '10 nodes, dedicated H100 clusters, RAG db pipelines' },
            { tier: 'Enterprise Node', price: 'Custom', features: 'Unlimited nodes, dedicated Kubernetes rings, SLA' }
          ].map((pack, idx) => (
            <div key={idx} style={cardStyle}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '8px' }}>{pack.tier}</h3>
              <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '14px' }}>{pack.price}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '20px' }}>{pack.features}</p>
              <button className="btn btn-secondary" style={{ ...btnStyle, width: '100%' }}>Edit Packages Details</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 15. FAQ
  if (routePath === 'faq') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Accordions & FAQs</h2>
            <p style={{ color: 'var(--text-muted)' }}>Administer FAQ directories, category structures, and visibility parameters.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Create FAQ</button>
        </div>

        <div style={cardStyle}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <span style={badgeStyle('var(--primary)')}>Core Node Infrastructure</span>
            <span style={badgeStyle('var(--text-light)')}>Pricing Questions</span>
            <span style={badgeStyle('var(--text-light)')}>Security & Access</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { q: 'How does MishiAi manage model weight rotations?', a: 'Rotations are performed cryptographically across node clusters during low peak cycles.' },
              { q: 'Is customer data processed locally on nodes?', a: 'Yes. All data remains encrypted and isolated in memory inside target Wasm rings.' }
            ].map((faq, idx) => (
              <div key={idx} style={{ padding: '16px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px' }}>
                <h4 style={{ fontWeight: 700, color: 'var(--text-white)', marginBottom: '6px' }}>{faq.q}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 16. Contact
  if (routePath === 'contact') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Contact Configurations</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage office map coordinate overlays, social media handles, and calendar meeting invite links.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Digital Contact Card</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Google Maps Embed Link</label>
              <input type="text" defaultValue="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153..." style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Meeting Calendar Scheduler (e.g. Calendly)</label>
              <input type="text" defaultValue="https://calendly.com/mishiai/inferences" style={inputStyle} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>LinkedIn URL</label>
              <input type="text" defaultValue="https://linkedin.com/company/mishiai" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>GitHub Organization</label>
              <input type="text" defaultValue="https://github.com/mishiai-tech" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Twitter Handle</label>
              <input type="text" defaultValue="@MishiAiTech" style={inputStyle} />
            </div>
          </div>
          <button className="btn btn-primary" style={btnStyle}>Save Information</button>
        </div>

        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>CTA Section (Homepage)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>CTA Title</label>
              <input id="cta-title" type="text" defaultValue={getConfig('cta.title')} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>CTA Description</label>
              <textarea id="cta-desc" defaultValue={getConfig('cta.description')} style={{ ...inputStyle, height: '80px', resize: 'none' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Primary Button Text</label>
                <input id="cta-primary" type="text" defaultValue={getConfig('cta.primary')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Secondary Button Text</label>
                <input id="cta-secondary" type="text" defaultValue={getConfig('cta.secondary')} style={inputStyle} />
              </div>
            </div>
          </div>
          <button 
            onClick={() => {
              const titleVal = (document.getElementById('cta-title') as HTMLInputElement)?.value;
              const descVal = (document.getElementById('cta-desc') as HTMLTextAreaElement)?.value;
              const priVal = (document.getElementById('cta-primary') as HTMLInputElement)?.value;
              const secVal = (document.getElementById('cta-secondary') as HTMLInputElement)?.value;
              if (titleVal) setConfig('cta.title', titleVal);
              if (descVal) setConfig('cta.description', descVal);
              if (priVal) setConfig('cta.primary', priVal);
              if (secVal) setConfig('cta.secondary', secVal);
              alert('CTA Section updated successfully!');
            }}
            className="btn btn-primary" 
            style={btnStyle}
          >
            Save CTA Config
          </button>
        </div>
      </div>
    );
  }

  // 17. Blog
  if (routePath === 'blog' || routePath.startsWith('blog/')) {
    const posts = [
      { title: 'Fine-Tuning Llama-3 for Compliance Verticals', category: 'MLOps', comments: 12, date: 'Jul 08, 2026', status: 'Published' },
      { title: 'The Efficacy of Zero-Trust Agent Clusters', category: 'Security', comments: 4, date: 'Jul 04, 2026', status: 'Published' },
      { title: 'Maximizing Web Assembly for Edge Inference', category: 'Frontend', comments: 0, date: 'Jun 28, 2026', status: 'Draft' }
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Blog & Publications</h2>
            <p style={{ color: 'var(--text-muted)' }}>Publish, schedule, edit, and moderate tech articles and comments.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Write Post</button>
        </div>

        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Article Title</th>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Category</th>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Comments</th>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Status</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '14px 12px', fontWeight: 600 }}>{post.title}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--primary)' }}>{post.category}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-muted)' }}>{post.comments} active</td>
                  <td style={{ padding: '14px 12px' }}>
                    <span style={badgeStyle(post.status === 'Published' ? '#10b981' : '#f59e0b')}>
                      {post.status}
                    </span>
                  </td>
                  <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                    <button style={{ color: 'var(--primary)', marginRight: '12px', fontWeight: 600 }}>Edit</button>
                    <button style={{ color: '#ef4444', fontWeight: 600 }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 18. Testimonials
  if (routePath === 'testimonials') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Testimonials Manager</h2>
            <p style={{ color: 'var(--text-muted)' }}>Approve, highlight, and manage rating scores from your corporate customers.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Add Testimonial</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {[
            { client: 'Dr. Sarah Carter', company: 'HealthInformatics Co.', text: 'The node scaling from MishiAi reduced our diagnostics query delays by 75%. Extremely satisfied.', status: 'Approved' },
            { client: 'David Vance', company: 'Telcom Infrastructure', text: 'Stitch integration with Next.js was seamless. MishiAi is the premier operations platform.', status: 'Pending Review' }
          ].map((t, idx) => (
            <div key={idx} style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontWeight: 700, color: 'var(--text-white)' }}>{t.client} <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>({t.company})</span></span>
                <span style={badgeStyle(t.status === 'Approved' ? '#10b981' : '#f59e0b')}>{t.status}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '16px' }}>"{t.text}"</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {t.status !== 'Approved' && <button style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 600 }}>Approve</button>}
                <button style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600 }}>Edit Content</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 19. Team
  if (routePath === 'team') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Team Roster</h2>
            <p style={{ color: 'var(--text-muted)' }}>Administer staff directories, credentials, bio pages, and roles assignments.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Invite Employee</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            { name: 'Marcus Thorne', role: 'Head of AI Architecture', skills: 'PyTorch, Wasm, CUDA' },
            { name: 'Elena Vance', role: 'Operations Coordinator', skills: 'SOC2, Cluster Orchestration' },
            { name: 'Julian Kross', role: 'Director of Business Development', skills: 'Pipelines, CRM Management' }
          ].map((emp, idx) => (
            <div key={idx} style={cardStyle}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '4px' }}>{emp.name}</h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '12px' }}>{emp.role}</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px' }}>Expert in {emp.skills}. Controls operations and rotators on active clusters.</p>
              <button style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600 }}>Edit Profile</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 20. Careers
  if (routePath === 'careers') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Careers & Job Openings</h2>
            <p style={{ color: 'var(--text-muted)' }}>Manage open positions, requirement descriptions, salaries, and review incoming applications.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Post Position</button>
        </div>

        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Position Title</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Department</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Salary Budget</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Applications</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { title: 'Senior CUDA Compiler Engineer', dept: 'Engineering', budget: '$180k - $220k', count: 18 },
                { title: 'Compliance Auditor (SOC 2/HIPAA)', dept: 'Security', budget: '$140k - $160k', count: 4 },
                { title: 'Global Lead Rotator Coordinator', dept: 'Operations', budget: '$120k - $145k', count: 9 }
              ].map((job, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '14px 12px', fontWeight: 600 }}>{job.title}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-muted)' }}>{job.dept}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-light)' }}><code>{job.budget}</code></td>
                  <td style={{ padding: '14px 12px', color: 'var(--primary)' }}>{job.count} candidates</td>
                  <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                    <button style={{ color: 'var(--primary)', marginRight: '12px', fontWeight: 600 }}>Review Candidates</button>
                    <button style={{ color: '#ef4444', fontWeight: 600 }}>Close Position</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 21. Leads
  if (routePath === 'leads') {
    const columns = [
      { name: 'New Lead', color: '#3b82f6', items: [{ name: 'Mayo Clinic Ops', budget: '$80,000', source: 'Web Form' }] },
      { name: 'Contacted', color: '#8b5cf6', items: [{ name: 'Walmart Inc (SaaS)', budget: '$120,000', source: 'LinkedIn Out' }] },
      { name: 'Meeting Scheduled', color: '#eab308', items: [{ name: 'Tokyo Telecom Group', budget: '$250,000', source: 'Referral' }] },
      { name: 'Proposal Dispatched', color: '#a855f7', items: [] },
      { name: 'Won (Contract Signed)', color: '#10b981', items: [{ name: 'Nvidia Corp Labs', budget: '$500,000', source: 'Direct' }] }
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Sales Leads pipeline</h2>
            <p style={{ color: 'var(--text-muted)' }}>Monitor prospective pipelines, budgets, follow-up parameters, and won values.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Register Lead</button>
        </div>

        {/* Pipeline Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', overflowX: 'auto' }}>
          {columns.map((col, idx) => (
            <div key={idx} style={{ ...cardStyle, padding: '16px', background: 'rgba(255,255,255,0.01)', minHeight: '380px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderBottom: `2px solid ${col.color}`, paddingBottom: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: col.color }}></div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-white)' }}>{col.name}</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.items.map((item, itemIdx) => (
                  <div key={itemIdx} style={{ padding: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '8px' }}>
                    <h5 style={{ fontWeight: 600, color: 'var(--text-white)', fontSize: '0.85rem' }}>{item.name}</h5>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary)', marginTop: '4px' }}>Budget: {item.budget}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '2px' }}>Source: {item.source}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 22. Clients
  if (routePath === 'clients') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Clients Roster</h2>
          <p style={{ color: 'var(--text-muted)' }}>Access customer contracts, active projects, file lockers, and coordinate operations meetings.</p>
        </div>

        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Client Name</th>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Active Contracts</th>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Pending Invoices</th>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Meetings</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Mayo Clinic Healthcare', contracts: 'Edge Inferences Service Ring v2', invoice: 'Paid', meet: 'Tomorrow at 10 AM' },
                { name: 'Walmart Labs Solutions', contracts: 'Vector RAG Scaler Cluster v1', invoice: '$12,400 Pending', meet: 'Next Thursday 2 PM' },
                { name: 'Swiss Trust Banking', contracts: 'PyTorch Fine-Tuning v1', invoice: 'Paid', meet: 'Unscheduled' }
              ].map((client, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '14px 12px', fontWeight: 600 }}>{client.name}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-muted)' }}>{client.contracts}</td>
                  <td style={{ padding: '14px 12px' }}>
                    <span style={badgeStyle(client.invoice === 'Paid' ? '#10b981' : '#ef4444')}>{client.invoice}</span>
                  </td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-light)' }}>{client.meet}</td>
                  <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                    <button style={{ color: 'var(--primary)', marginRight: '12px', fontWeight: 600 }}>Manage Client</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 23. Projects
  if (routePath === 'projects') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Active Projects</h2>
            <p style={{ color: 'var(--text-muted)' }}>Review pipelines milestones, deliverables checklists, and development workloads.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Deploy Project Workspace</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {[
            { name: 'Mayo Clinic Scanner Fine-Tuning', progress: 85, task: '12 of 15 tasks completed', team: 'Marcus, Elena, Sarah' },
            { name: 'Walmart Vector RAG Auto-Scaler', progress: 40, task: '4 of 10 tasks completed', team: 'Sarah, David, Marcus' }
          ].map((proj, idx) => (
            <div key={idx} style={cardStyle}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '8px' }}>{proj.name}</h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px' }}>Assignees: {proj.team}</div>
              <div style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                  <span>Development Progress</span>
                  <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{proj.progress}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ width: `${proj.progress}%`, height: '100%', background: 'var(--accent-gradient)' }}></div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{proj.task}</span>
                <button style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600 }}>Manage Tasks</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 24. Media Library
  if (routePath === 'media') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Media Library</h2>
            <p style={{ color: 'var(--text-muted)' }}>Store, search, and bulk upload branding photos, SVGs, documents, and videos.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Upload Media Files</button>
        </div>

        <div style={cardStyle}>
          {/* Mock folders */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
            {['Marketing Images', 'Client Logos', 'Policy PDFs', 'System SVGs'].map((fol, idx) => (
              <div key={idx} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.2rem' }}>📁</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-white)' }}>{fol}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '20px' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{ border: '1px solid var(--border-light)', borderRadius: '12px', overflow: 'hidden', background: 'rgba(255,255,255,0.01)', position: 'relative' }}>
                <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', color: 'var(--text-light)', fontSize: '0.75rem' }}>
                  Image_{i}.jpg
                </div>
                <div style={{ padding: '8px', borderTop: '1px solid var(--border-light)', fontSize: '0.7rem', color: 'var(--text-light)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>420 KB</span>
                  <span style={{ color: '#ef4444', cursor: 'pointer' }}>Delete</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 25. Forms
  if (routePath === 'forms') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Forms Builder</h2>
          <p style={{ color: 'var(--text-muted)' }}>Configure fields for Quote request forms, Careers forms, or Newsletter components.</p>
        </div>

        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Form Name</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Active Fields</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Submissions</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Spam Protection</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Contact Form', fields: 'Name, Email, Message, Company', subs: 142, spam: 'hCaptcha Active' },
                { name: 'Quote Request', fields: 'Name, Budget, Service, Requirements', subs: 89, spam: 'Recaptcha v3' },
                { name: 'Career Application', fields: 'Name, Role, Resume PDF, Portfolio link', subs: 31, spam: 'hCaptcha Active' }
              ].map((f, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '14px 12px', fontWeight: 600 }}>{f.name}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-muted)' }}>{f.fields}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--primary)' }}>{f.subs} entries</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-light)' }}>{f.spam}</td>
                  <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                    <button style={{ color: 'var(--primary)', marginRight: '12px', fontWeight: 600 }}>Modify Fields</button>
                    <button style={{ color: 'var(--secondary)', fontWeight: 600 }}>Entries</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 26. Newsletter
  if (routePath === 'newsletter') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Newsletters Engine</h2>
            <p style={{ color: 'var(--text-muted)' }}>Administer subscriber lists, campaign segmentations, and dispatch templates.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Write Campaign</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Recent Campaigns Dispatch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Fine-Tuning Llama-3 rotation metrics update', date: 'Dispatched Jul 08', rate: '42% Click Rate' },
                { title: 'June MishiAi operations report', date: 'Dispatched Jun 28', rate: '38% Click Rate' }
              ].map((c, idx) => (
                <div key={idx} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontWeight: 600, color: 'var(--text-white)' }}>{c.title}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{c.date}</span>
                  </div>
                  <span style={badgeStyle('#10b981')}>{c.rate}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>List Metrics</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span>Subscribers Total</span>
                <span style={{ fontWeight: 700, color: 'var(--text-white)' }}>4,892</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span>Active Segments</span>
                <span style={{ fontWeight: 700, color: 'var(--text-white)' }}>4 (Engineering, Business, Ops, Lead)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 27. SEO Settings
  if (routePath === 'seo') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Global SEO Optimizer</h2>
          <p style={{ color: 'var(--text-muted)' }}>Configure site descriptions, OpenGraph layouts, robots permissions, and redirect maps.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>SEO Metadata Editor</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Default Meta Title</label>
              <input type="text" defaultValue="MishiAi | Elite Decentralized AI Operations Platform" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Robots.txt Permission Index</label>
              <input type="text" defaultValue="User-agent: * Allow: /" style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Default Meta Description</label>
            <textarea defaultValue="Provision custom fine-tuned nodes, auto-scaler pipelines, and high-fidelity inferences on global server rings with zero latency." style={{ ...inputStyle, height: '80px', resize: 'none' }} />
          </div>
          <button className="btn btn-primary" style={btnStyle}>Apply SEO Directives</button>
        </div>
      </div>
    );
  }

  // 28. Analytics
  if (routePath === 'analytics') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Analytics & Telemetry</h2>
          <p style={{ color: 'var(--text-muted)' }}>Evaluate conversion funnels, country distributions, and device tracking metrics.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Traffic Source Distribution</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { source: 'Direct URL Navigation', percent: '42%' },
                { source: 'Organic Search (Google)', percent: '30%' },
                { source: 'LinkedIn campaigns', percent: '18%' },
                { source: 'Referral links', percent: '10%' }
              ].map((s, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span>{s.source}</span>
                  <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{s.percent}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Conversion Funnel Telemetry</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { step: 'Landing page visits', count: '14,239' },
                { step: 'Solutions page click', count: '4,891' },
                { step: 'Pricing review', count: '1,200' },
                { step: 'Contact Form submit (Leads)', count: '142' }
              ].map((s, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span>{s.step}</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-white)' }}>{s.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 29. Users
  if (routePath === 'users') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>User Administration</h2>
            <p style={{ color: 'var(--text-muted)' }}>Manage user settings, status parameters, and assigned permissions scopes.</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Register Administrator</button>
        </div>

        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>User</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Assigned Role</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>Permissions Status</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Marcus Thorne', email: 'marcus.t@mishiai.com', role: 'Super Admin', scope: 'All access' },
                { name: 'Elena Vance', email: 'elena.v@mishiai.com', role: 'Site Editor', scope: 'Website directories only' },
                { name: 'Julian Kross', email: 'julian.k@mishiai.com', role: 'Sales Specialist', scope: 'CRM pipeline only' }
              ].map((u, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '14px 12px' }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-white)' }}>{u.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{u.email}</div>
                  </td>
                  <td style={{ padding: '14px 12px', color: 'var(--primary)' }}>{u.role}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-light)' }}>{u.scope}</td>
                  <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                    <button style={{ color: 'var(--primary)', marginRight: '12px', fontWeight: 600 }}>Configure Scope</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 30. Roles & Permissions
  if (routePath === 'roles' || routePath === 'permissions') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={headerStyle}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Roles & Permissions Matrix</h2>
            <p style={{ color: 'var(--text-muted)' }}>Configure module permissions scope level mappings (View, Create, Edit, Delete, Publish).</p>
          </div>
          <button className="btn btn-primary" style={btnStyle}>+ Create Custom Role</button>
        </div>

        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'left' }}>User Role</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'center' }}>View</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'center' }}>Create</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'center' }}>Edit</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'center' }}>Delete</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'center' }}>Publish</th>
              </tr>
            </thead>
            <tbody>
              {[
                { role: 'Administrator (Global)', p: [true, true, true, true, true] },
                { role: 'Site Editor (Content)', p: [true, true, true, false, true] },
                { role: 'Sales Lead Manager', p: [true, true, true, false, false] }
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 600, color: 'var(--text-white)' }}>{row.role}</td>
                  {row.p.map((val, pidx) => (
                    <td key={pidx} style={{ padding: '16px 12px', textAlign: 'center' }}>
                      <input type="checkbox" defaultChecked={val} disabled style={{ width: '16px', height: '16px', accentColor: 'var(--primary)' }} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 31. Integrations
  if (routePath === 'integrations') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Integrations Portal</h2>
          <p style={{ color: 'var(--text-muted)' }}>Configure connection pipelines for OpenAI, Search Console, Stripe, and other SaaS APIs.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            { service: 'OpenAI API Node', status: 'Connected', param: 'gpt-4o, Custom fine-tuned Llama-3' },
            { service: 'Google Analytics', status: 'Connected', param: 'G-MISHIAI42 tracking' },
            { service: 'Stripe Gateway', status: 'Inactive', param: 'Contracts & billing rotator' },
            { service: 'Cloud Storage API', status: 'Connected', param: 'Secure AWS S3 File Locker' }
          ].map((int, idx) => (
            <div key={idx} style={cardStyle}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '6px' }}>{int.service}</h3>
              <span style={{ ...badgeStyle(int.status === 'Connected' ? '#10b981' : '#f59e0b'), display: 'inline-block', marginBottom: '12px' }}>{int.status}</span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Params: {int.param}</p>
              <button style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginTop: '16px' }}>Configure credentials</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 32. Global Settings
  if (routePath === 'settings') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Global Settings</h2>
          <p style={{ color: 'var(--text-muted)' }}>Configure email templates, backup databases, localization, and maintenance flags.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>System Settings</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Corporate Entity Name</label>
              <input type="text" defaultValue="MishiAi Technologies, Inc." style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Support Ticket Email Template</label>
              <select style={selectStyle}>
                <option>Elite Theme (Navy Gradients)</option>
                <option>Plain Text Simple</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Default Time Zone</label>
              <input type="text" defaultValue="America/Los_Angeles (PST)" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Default Billing Currency</label>
              <input type="text" defaultValue="USD ($)" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Backup Dispatch Schedule</label>
              <input type="text" defaultValue="Every Sunday 03:00 AM UTC" style={inputStyle} />
            </div>
          </div>
          <button className="btn btn-primary" style={btnStyle}>Save Configurations</button>
        </div>
      </div>
    );
  }

  // 33. Profile
  if (routePath === 'profile') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Personal Profile Settings</h2>
          <p style={{ color: 'var(--text-muted)' }}>Configure passwords, avatars, API access keys, and 2FA credentials.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Profile Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input type="text" defaultValue="Admin User" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Contact Email</label>
                <input type="text" defaultValue="node-ops@mishiai.com" style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Security Password</label>
                  <input type="password" placeholder="••••••••••••••" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>2-Factor Authorization (2FA)</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <input type="checkbox" defaultChecked id="2fa-check" style={{ width: '18px', height: '18px' }} />
                    <label htmlFor="2fa-check" style={{ fontSize: '0.85rem' }}>Authenticator app active</label>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary" style={btnStyle}>Update Profile Info</button>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-white)' }}>Developer API Tokens</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle}>API Key Prefix</label>
                <input type="text" readOnly defaultValue="ms_live_42aef98cf112a..." style={{ ...inputStyle, background: 'rgba(255,255,255,0.01)', cursor: 'not-allowed' }} />
              </div>
              <button className="btn btn-secondary" style={btnStyle}>+ Generate API Secret</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 34. Notifications
  if (routePath === 'notifications') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>System Notifications</h2>
          <p style={{ color: 'var(--text-muted)' }}>Configure alerts rules for incoming sales leads, form submissions, and cluster errors.</p>
        </div>

        <div style={cardStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { text: '[Alert] H100 Node scaling rotator peak performance completed successfully', cat: 'Ops', date: 'Jul 09, 10:12 AM' },
              { text: '[Sales] New lead request from Nvidia Corp received', cat: 'Lead', date: 'Jul 09, 09:42 AM' },
              { text: '[Security] Administrative configuration changes applied by Marcus T.', cat: 'Audit', date: 'Jul 08, 04:22 PM' }
            ].map((n, idx) => (
              <div key={idx} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-white)', fontWeight: 600 }}>{n.text}</span>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '4px' }}>{n.date}</div>
                </div>
                <span style={badgeStyle(n.cat === 'Ops' ? '#10b981' : n.cat === 'Lead' ? '#3b82f6' : '#8b5cf6')}>{n.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 35. Activity Log
  if (routePath === 'activity-log') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-white)' }}>Activity & Audit Trails</h2>
          <p style={{ color: 'var(--text-muted)' }}>Cryptographic tracking logs for administrative actions and security adjustments.</p>
        </div>

        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Timestamp</th>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>User ID</th>
                <th style={{ padding: '12px', color: 'var(--text-white)' }}>Action Detail</th>
                <th style={{ padding: '12px', color: 'var(--text-white)', textAlign: 'right' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: '2026-07-09 10:12 AM', user: 'Marcus Thorne', text: 'Configured solutions routing nodes parameters', status: 'Success' },
                { time: '2026-07-09 09:42 AM', user: 'System Auto-scaler', text: 'Auto-provisioned 4 additional GPU compute threads', status: 'Success' },
                { time: '2026-07-08 04:22 PM', user: 'Elena Vance', text: 'Updated meta-tags default descriptions on sitemaps', status: 'Success' }
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '14px 12px', color: 'var(--text-light)' }}><code>{row.time}</code></td>
                  <td style={{ padding: '14px 12px', fontWeight: 600 }}>{row.user}</td>
                  <td style={{ padding: '14px 12px', color: 'var(--text-muted)' }}>{row.text}</td>
                  <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                    <span style={badgeStyle('#10b981')}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 36. Generic Catch-All View (Fallback for any unspecified slugs)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '6px', color: 'var(--text-white)' }}>
          Configure: <span style={{ textTransform: 'capitalize' }}>{slug[slug.length - 1] || 'Dashboard Settings'}</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Adjust options, parameters, and metadata for `dashboard/{routePath}`.
        </p>
      </div>

      <div style={cardStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
          <div>
            <label style={labelStyle}>Configuration Key Name</label>
            <input
              type="text"
              defaultValue={`${slug[slug.length - 1] || 'default'}_scope_parameters`}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>API Routing Path</label>
            <input
              type="text"
              defaultValue={`https://api.mishiai.com/v1/dashboard/${routePath}`}
              readOnly
              style={{ ...inputStyle, background: 'rgba(255,255,255,0.01)', color: 'var(--text-light)', cursor: 'not-allowed' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <input type="checkbox" defaultChecked id="active-param" style={{ width: '16px', height: '16px' }} />
            <label htmlFor="active-param" style={{ fontSize: '0.85rem', cursor: 'pointer' }}>
              Enable active synchronization and replication across edge cluster pods
            </label>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
            <button className="btn btn-primary" style={btnStyle}>Save Configurations</button>
            <button className="btn btn-secondary" style={btnStyle}>Reset Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
