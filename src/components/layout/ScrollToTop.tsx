'use client';

import React, { useEffect } from 'react';
import { useUIStore } from '@/lib/store';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button } from '@/components/ui/Button';

export function ScrollToTop() {
  const { showScrollTop, setShowScrollTop } = useUIStore();
  const { y: scrollY } = useScrollPosition();

  useEffect(() => {
    setShowScrollTop(scrollY > 500);
  }, [scrollY, setShowScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showScrollTop) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-sage-600 to-sage-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
      aria-label="Scroll to top"
    >
      <span className="text-xl">⬆️</span>
    </Button>
  );
}
