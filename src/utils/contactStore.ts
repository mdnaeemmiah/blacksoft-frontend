'use client';

import React from 'react';
import { apiRequest } from './apiClient';

export interface ContactInfoSettings {
  location: string;
  email: string;
  phone: string;
  privacyPolicy: string;
}

const EVENT_NAME = 'Namisoft_contact_info_updated';
const API_PATH = '/services/contact-info';

const EMPTY: ContactInfoSettings = {
  location: '',
  email: '',
  phone: '',
  privacyPolicy: '',
};

let cached: ContactInfoSettings = EMPTY;
let hydrated = false;
let hydrationPromise: Promise<void> | null = null;
const listeners = new Set<() => void>();

function normalize(raw: Partial<ContactInfoSettings> | null | undefined): ContactInfoSettings {
  if (!raw) return EMPTY;
  return {
    location:      typeof raw.location      === 'string' ? raw.location.trim()      : '',
    email:         typeof raw.email         === 'string' ? raw.email.trim()         : '',
    phone:         typeof raw.phone         === 'string' ? raw.phone.trim()         : '',
    privacyPolicy: typeof raw.privacyPolicy === 'string' ? raw.privacyPolicy        : '',
  };
}

function broadcast() {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event(EVENT_NAME));
  listeners.forEach(l => l());
}

async function hydrate(): Promise<void> {
  if (typeof window === 'undefined') return;
  try {
    const data = await apiRequest<ContactInfoSettings>(API_PATH);
    cached = normalize(data);
  } catch {
    cached = EMPTY;
  } finally {
    hydrated = true;
    broadcast();
  }
}

function ensureHydrated(force = false) {
  if (typeof window === 'undefined' || hydrationPromise) return;
  if (hydrated && !force) return;
  hydrationPromise = hydrate().finally(() => { hydrationPromise = null; });
}

export function useContactInfo(): ContactInfoSettings {
  const [info, setInfo] = React.useState<ContactInfoSettings>(cached);

  React.useEffect(() => {
    ensureHydrated(true);
    const handler = () => setInfo(cached);
    listeners.add(handler);
    window.addEventListener(EVENT_NAME, handler);
    return () => {
      listeners.delete(handler);
      window.removeEventListener(EVENT_NAME, handler);
    };
  }, []);

  return info;
}
