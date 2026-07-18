'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   useInView — IntersectionObserver hook
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  once = true
): [(node: T | null) => void, boolean] {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((node: T | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (node) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(node);
          } else if (!once) {
            setVisible(false);
          }
        },
        { threshold }
      );
      obs.observe(node);
      observerRef.current = obs;
    }
  }, [threshold, once]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return [ref, visible];
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   useMouseTilt — 3D tilt on hover
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function useMouseTilt(intensity = 12): {
  ref: React.RefObject<HTMLDivElement>;
  style: React.CSSProperties;
} {
  const ref = useRef<HTMLDivElement>(null!);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    transition: 'transform 0.4s var(--ease-out)',
  });

  const handleMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rotY = ((e.clientX - cx) / (rect.width / 2)) * intensity;
    const rotX = -((e.clientY - cy) / (rect.height / 2)) * intensity;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`,
      transition: 'transform 0.1s linear',
    });
  }, [intensity]);

  const handleLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
      transition: 'transform 0.5s var(--ease-out)',
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [handleMove, handleLeave]);

  return { ref, style };
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   useParallax — scroll parallax
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function useParallax(speed = 0.3): [React.RefObject<HTMLDivElement>, number] {
  const ref = useRef<HTMLDivElement>(null!);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = (windowH - rect.top) / (windowH + rect.height);
      setOffset((progress - 0.5) * speed * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset];
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   useCountUp — animated counter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function useCountUp(
  target: number,
  duration = 2000,
  trigger = false
): number {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, trigger]);

  return count;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SplitText — animated word reveal
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  visible?: boolean;
  tag?: keyof React.JSX.IntrinsicElements;
}

export function SplitText({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 60,
  visible = true,
  tag: Tag = 'span',
}: SplitTextProps) {
  const words = text.split(' ');

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            paddingBottom: '0.1em',
          }}
        >
          <span
            className={wordClassName}
            style={{
              display: 'inline-block',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)`,
              transitionDelay: `${delay + i * stagger}ms`,
            }}
          >
            {word}{i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
}
