'use client';

import React from 'react';

export type TrustedInnovator = {
  id: string;
  name: string;
  enabled: boolean;
};

const STORAGE_KEY = 'blacksoft_trusted_innovators';
const STORE_EVENT = 'blacksoft_trusted_innovators_updated';

export const DEFAULT_TRUSTED_INNOVATORS: TrustedInnovator[] = [
  { id: 'metalogic', name: 'METALOGIC', enabled: true },
  { id: 'cloudrise', name: 'CLOUDRISE', enabled: true },
  { id: 'zenith-ai', name: 'ZENITH AI', enabled: true },
  { id: 'novasphere', name: 'NOVASPHERE', enabled: true },
  { id: 'velocity', name: 'VELOCITY', enabled: true },
  { id: 'lumina', name: 'LUMINA', enabled: true },
];

let cachedRawValue: string | null = null;
let cachedItemsValue: TrustedInnovator[] = DEFAULT_TRUSTED_INNOVATORS;

function createId(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || `innovator-${Date.now()}`;
}

function normalizeItems(items: unknown): TrustedInnovator[] {
  if (!Array.isArray(items)) {
    return DEFAULT_TRUSTED_INNOVATORS;
  }

  const normalized = items
    .filter((item): item is Partial<TrustedInnovator> => Boolean(item && typeof item === 'object'))
    .map((item, index) => ({
      id: typeof item.id === 'string' && item.id.trim() ? item.id : createId(item.name || `innovator-${index + 1}`),
      name: typeof item.name === 'string' && item.name.trim() ? item.name.trim() : `Innovator ${index + 1}`,
      enabled: typeof item.enabled === 'boolean' ? item.enabled : true,
    }))
    .filter((item) => item.name.trim().length > 0);

  return normalized.length > 0 ? normalized : DEFAULT_TRUSTED_INNOVATORS;
}

export function getTrustedInnovators(): TrustedInnovator[] {
  if (typeof window === 'undefined') {
    return DEFAULT_TRUSTED_INNOVATORS;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      cachedRawValue = null;
      cachedItemsValue = DEFAULT_TRUSTED_INNOVATORS;
      return DEFAULT_TRUSTED_INNOVATORS;
    }

    if (raw === cachedRawValue) {
      return cachedItemsValue;
    }

    cachedRawValue = raw;
    cachedItemsValue = normalizeItems(JSON.parse(raw));
    return cachedItemsValue;
  } catch {
    cachedRawValue = null;
    cachedItemsValue = DEFAULT_TRUSTED_INNOVATORS;
    return DEFAULT_TRUSTED_INNOVATORS;
  }
}

export function setTrustedInnovators(items: TrustedInnovator[]): void {
  if (typeof window === 'undefined') {
    return;
  }

  const normalized = normalizeItems(items);
  const serialized = JSON.stringify(normalized);

  cachedRawValue = serialized;
  cachedItemsValue = normalized;
  localStorage.setItem(STORAGE_KEY, serialized);
  window.dispatchEvent(new Event(STORE_EVENT));
}

export function addTrustedInnovator(name: string): TrustedInnovator[] {
  const next = [
    ...getTrustedInnovators(),
    { id: createId(name), name: name.trim(), enabled: true },
  ];
  setTrustedInnovators(next);
  return next;
}

export function updateTrustedInnovator(id: string, patch: Partial<Pick<TrustedInnovator, 'name' | 'enabled'>>): TrustedInnovator[] {
  const next = getTrustedInnovators().map((item) => (
    item.id === id
      ? {
          ...item,
          ...(typeof patch.name === 'string' ? { name: patch.name } : {}),
          ...(typeof patch.enabled === 'boolean' ? { enabled: patch.enabled } : {}),
        }
      : item
  ));
  setTrustedInnovators(next);
  return next;
}

export function deleteTrustedInnovator(id: string): TrustedInnovator[] {
  const next = getTrustedInnovators().filter((item) => item.id !== id);
  setTrustedInnovators(next);
  return next;
}

export function useTrustedInnovators(): [TrustedInnovator[], React.Dispatch<React.SetStateAction<TrustedInnovator[]>>] {
  const subscribe = React.useCallback((onStoreChange: () => void) => {
    const handleUpdate = () => onStoreChange();

    window.addEventListener(STORE_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(STORE_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const items = React.useSyncExternalStore(
    subscribe,
    getTrustedInnovators,
    () => DEFAULT_TRUSTED_INNOVATORS
  );

  const setItems = React.useCallback<React.Dispatch<React.SetStateAction<TrustedInnovator[]>>>((value) => {
    const next = typeof value === 'function' ? value(getTrustedInnovators()) : value;
    setTrustedInnovators(next);
  }, []);

  return [items, setItems];
}
