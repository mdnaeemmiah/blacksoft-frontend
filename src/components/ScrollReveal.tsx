'use client';

import React, { useEffect, useState } from 'react';
import { useInView, SplitText } from '../utils/useAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  animationClass = 'reveal-slide-up',
  delay = 0,
  threshold = 0.08,
}: ScrollRevealProps) {
  const [ref, visible] = useInView(threshold, true);
  const style: React.CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`reveal-base ${animationClass} ${visible ? 'reveal-visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
