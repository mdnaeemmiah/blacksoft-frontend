'use client';

import React from 'react';

export type CapabilityCard = {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  enabled: boolean;
};

const STORAGE_KEY = 'blacksoft_capability_cards';
const STORE_EVENT = 'blacksoft_capability_cards_updated';

export const DEFAULT_CAPABILITY_CARDS: CapabilityCard[] = [
  {
    id: 'custom-ai-agents',
    title: 'Custom AI Agents',
    description: 'Autonomous digital employees tailored to your business logic and operational goals.',
    icon: 'AI',
    link: '#services',
    enabled: true,
  },
  {
    id: 'llm-specialization',
    title: 'LLM Specialization',
    description: 'Fine-tuning and deploying advanced LLMs for context-specific, high-performance tasks.',
    icon: 'LLM',
    link: '#services',
    enabled: true,
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Streamlining legacy environments with intelligent, self-correcting software bridges.',
    icon: 'WF',
    link: '#services',
    enabled: true,
  },
  {
    id: 'enterprise-web',
    title: 'Enterprise Web',
    description: 'Scalable, high-fidelity web applications with a foundation of performance and security.',
    icon: 'EW',
    link: '#services',
    enabled: true,
  },
];

let cachedRawValue: string | null = null;
let cachedCardsValue: CapabilityCard[] = DEFAULT_CAPABILITY_CARDS;

function createId(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || `capability-${Date.now()}`;
}

function normalizeCards(cards: unknown): CapabilityCard[] {
  if (!Array.isArray(cards)) {
    return DEFAULT_CAPABILITY_CARDS;
  }

  const normalized = cards
    .filter((item): item is Partial<CapabilityCard> => Boolean(item && typeof item === 'object'))
    .map((item, index) => ({
      id: typeof item.id === 'string' && item.id.trim() ? item.id : createId(item.title || `card-${index + 1}`),
      title: typeof item.title === 'string' && item.title.trim() ? item.title.trim() : `Card ${index + 1}`,
      description: typeof item.description === 'string' && item.description.trim()
        ? item.description.trim()
        : 'No description provided.',
      icon: typeof item.icon === 'string' && item.icon.trim() ? item.icon.trim() : 'AI',
      link: typeof item.link === 'string' && item.link.trim() ? item.link.trim() : '#services',
      enabled: typeof item.enabled === 'boolean' ? item.enabled : true,
    }));

  return normalized.length > 0 ? normalized : DEFAULT_CAPABILITY_CARDS;
}

export function getCapabilityCards(): CapabilityCard[] {
  if (typeof window === 'undefined') {
    return DEFAULT_CAPABILITY_CARDS;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      cachedRawValue = null;
      cachedCardsValue = DEFAULT_CAPABILITY_CARDS;
      return DEFAULT_CAPABILITY_CARDS;
    }

    if (raw === cachedRawValue) {
      return cachedCardsValue;
    }

    cachedRawValue = raw;
    cachedCardsValue = normalizeCards(JSON.parse(raw));
    return cachedCardsValue;
  } catch {
    cachedRawValue = null;
    cachedCardsValue = DEFAULT_CAPABILITY_CARDS;
    return DEFAULT_CAPABILITY_CARDS;
  }
}

export function setCapabilityCards(cards: CapabilityCard[]): void {
  if (typeof window === 'undefined') {
    return;
  }

  const normalized = normalizeCards(cards);
  const serialized = JSON.stringify(normalized);

  cachedRawValue = serialized;
  cachedCardsValue = normalized;
  localStorage.setItem(STORAGE_KEY, serialized);
  window.dispatchEvent(new Event(STORE_EVENT));
}

export function addCapabilityCard(title: string, description: string, icon: string, link: string): CapabilityCard[] {
  const next = [
    ...getCapabilityCards(),
    {
      id: createId(title),
      title: title.trim(),
      description: description.trim(),
      icon: icon.trim() || 'AI',
      link: link.trim() || '#services',
      enabled: true,
    },
  ];
  setCapabilityCards(next);
  return next;
}

export function updateCapabilityCard(
  id: string,
  patch: Partial<Pick<CapabilityCard, 'title' | 'description' | 'icon' | 'link' | 'enabled'>>
): CapabilityCard[] {
  const next = getCapabilityCards().map((card) => (
    card.id === id
      ? {
          ...card,
          ...(typeof patch.title === 'string' ? { title: patch.title } : {}),
          ...(typeof patch.description === 'string' ? { description: patch.description } : {}),
          ...(typeof patch.icon === 'string' ? { icon: patch.icon } : {}),
          ...(typeof patch.link === 'string' ? { link: patch.link } : {}),
          ...(typeof patch.enabled === 'boolean' ? { enabled: patch.enabled } : {}),
        }
      : card
  ));
  setCapabilityCards(next);
  return next;
}

export function deleteCapabilityCard(id: string): CapabilityCard[] {
  const next = getCapabilityCards().filter((card) => card.id !== id);
  setCapabilityCards(next);
  return next;
}

export function useCapabilityCards(): [CapabilityCard[], React.Dispatch<React.SetStateAction<CapabilityCard[]>>] {
  const subscribe = React.useCallback((onStoreChange: () => void) => {
    const handleUpdate = () => onStoreChange();

    window.addEventListener(STORE_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(STORE_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const cards = React.useSyncExternalStore(
    subscribe,
    getCapabilityCards,
    () => DEFAULT_CAPABILITY_CARDS
  );

  const setCards = React.useCallback<React.Dispatch<React.SetStateAction<CapabilityCard[]>>>((value) => {
    const next = typeof value === 'function' ? value(getCapabilityCards()) : value;
    setCapabilityCards(next);
  }, []);

  return [cards, setCards];
}
