'use client';

import React from 'react';
import { useInView } from '@/hooks/useIntersectionObserver';

export function QuoteSection() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section
      id="quote"
      ref={ref}
      className="py-12 sm:py-16 bg-cream-400"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Quote - Mobile Responsive */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-relaxed mb-6 sm:mb-8 px-2">
            "The best way to predict the future is to create it."
          </blockquote>

          {/* Author */}
          <cite className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
            — Peter Drucker
          </cite>

          {/* Decorative line */}
          <div className="w-16 sm:w-24 h-1 bg-black mx-auto mt-6 sm:mt-8 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
