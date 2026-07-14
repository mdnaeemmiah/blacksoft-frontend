'use client';

import React from 'react';

export function openCallModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('blacksoft_open_call'));
  }
}

export default function CallModal() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [datetime, setDatetime] = React.useState('');
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('blacksoft_open_call', onOpen);
    return () => window.removeEventListener('blacksoft_open_call', onOpen);
  }, []);

  function close() {
    setOpen(false);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const booking = { name, email, datetime, message, createdAt: new Date().toISOString() };
    try {
      const raw = localStorage.getItem('blacksoft_bookings');
      const arr = raw ? JSON.parse(raw) : [];
      arr.push(booking);
      localStorage.setItem('blacksoft_bookings', JSON.stringify(arr));
      alert('Booking saved. We will contact you soon.');
      setName(''); setEmail(''); setDatetime(''); setMessage('');
      close();
    } catch (err) {
      console.error(err);
      alert('Unable to save booking locally.');
    }
  }

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
      <div style={{ width: 520, maxWidth: '94%', background: '#0b0f19', padding: 20, borderRadius: 12, color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h3 style={{ margin: 0 }}>Book a Call</h3>
          <button onClick={close} style={{ background: 'transparent', border: 'none', color: 'white', fontSize: 20 }}>×</button>
        </div>
        <form onSubmit={submit}>
          <div style={{ display: 'grid', gap: 8 }}>
            <label style={{ fontSize: 12 }}>Full name</label>
            <input required value={name} onChange={e => setName(e.target.value)} style={{ padding: 8, borderRadius: 6 }} />
            <label style={{ fontSize: 12 }}>Email</label>
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ padding: 8, borderRadius: 6 }} />
            <label style={{ fontSize: 12 }}>Preferred date/time</label>
            <input type="datetime-local" value={datetime} onChange={e => setDatetime(e.target.value)} style={{ padding: 8, borderRadius: 6 }} />
            <label style={{ fontSize: 12 }}>Message / Agenda</label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} style={{ padding: 8, borderRadius: 6 }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 8 }}>
              <button type="button" onClick={close} className="btn btn-secondary" style={{ padding: '8px 12px' }}>Cancel</button>
              <button type="submit" className="btn btn-primary" style={{ padding: '8px 12px' }}>Request Call</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
