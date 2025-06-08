'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from '@/hooks/useIntersectionObserver';

export function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [showHi, setShowHi] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (inView) {
      // Start "HI ," animation immediately
      setShowHi(true);

      // Start name animation after "HI ," animation completes
      const nameTimer = setTimeout(() => {
        setShowName(true);
      }, 800); // Delay for name animation

      return () => clearTimeout(nameTimer);
    }
  }, [inView]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-4 sm:py-8 px-2 sm:px-4 overflow-hidden pt-20 md:pt-8">
      <section
      id="hero"
      ref={ref}
      className="relative flex items-center justify-center bg-black overflow-hidden w-full max-w-7xl mx-auto rounded-2xl sm:rounded-3xl shadow-2xl mt-4 md:mt-0"
      style={{
        height: 'calc(85vh - 80px)', // Account for mobile header on small screens
        minHeight: '600px',
        maxHeight: '800px',
        maxWidth: 'calc(100vw - 16px)', // Prevent horizontal overflow
      }}
    >
      {/* Animated Background Image Layer - Fixed for Mobile */}
      <div
        className="absolute inset-0 animate-background-breathe rounded-[24px]"
        style={{
          backgroundImage: 'url(/color_canvas.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll', // Better mobile performance
          filter: 'contrast(1.2) saturate(1.3) brightness(1.1) blur(0.5px)',
          width: '100%',
          height: '100%',
        }}
      ></div>

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 rounded-[24px] z-10"></div>

      {/* Animated Content - Centered Layout */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center h-full w-full px-4 gap-4 lg:gap-6 max-w-5xl mx-auto">

        {/* Text Content - Left Side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 order-2 lg:order-1">
          {/* "HI ," Animation - Top to Bottom */}
          <div className="relative mb-4 lg:mb-6">
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white transition-all duration-1000 ease-out hero-text-glow ${
                showHi
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 -translate-y-20 scale-95'
              }`}
              style={{
                fontFamily: 'var(--font-md-sans), DM Sans, system-ui, sans-serif',
                letterSpacing: '0.05em',
                fontWeight: '900'
              }}
            >
              HI ,
            </h1>
          </div>

          {/* "I'm Sarbik Sinha Ray" Animation - Bottom to Top */}
          <div className="relative mb-3 lg:mb-4">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-1200 ease-out text-white hero-name-shadow ${
                showName
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{
                fontFamily: 'var(--font-md-sans), DM Sans, system-ui, sans-serif',
                letterSpacing: '0.02em',
                fontWeight: '800',
                color: '#ffffff',
                fontSize: '5.9rem'
              }}
            >
              I'm Sarbik
            </h2>
          </div>

          {/* Subtitle with delayed animation */}
          <div className="relative">
            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 transition-all duration-1000 ease-out ${
                showName
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
                fontFamily: 'var(--font-md-sans), DM Sans, system-ui, sans-serif',
                transitionDelay: '400ms'
              }}
            >
             A Developer
            </p>
          </div>

          {/* GitHub Button */}
          <div className="relative mt-8">
            <div
              className={`transition-all duration-1000 ease-out ${
                showName
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: '600ms'
              }}
            >
              <a
                href="https://github.com/sarbiksinharay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 inline-flex items-center"
              >
                <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
                <span className="ml-2">. . .</span>
              </a>
            </div>
          </div>
        </div>

        {/* Profile Picture Container - Right Side */}
        <div className="relative flex-shrink-0 order-1 lg:order-2">
          <div
            className={`relative transition-all duration-1500 ease-out ${
              showName
                ? 'opacity-100 translate-x-0 scale-100 rotate-0'
                : 'opacity-0 translate-x-8 scale-90 rotate-3'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {/* Animated Background Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-l from-pink-500/15 via-purple-500/15 to-blue-500/15 animate-pulse"></div>

            {/* Profile Picture */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              {/* Your Profile Image */}
              <img
                src="/me.jpg"
                alt="Sarbik Sinha Ray"
                className="w-full h-full object-cover"
              />
            </div>

            {/* LinkedIn Button */}
            <div className="mt-6 flex justify-center">
              <a
                href="https://www.linkedin.com/in/sarbik-sinha-ray-b252482ab"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 hover:w-44 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
              >
                <svg
                  y="0"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                  height="100"
                  className="w-8 h-8 shrink-0 fill-neutral-50"
                >
                  <path
                    d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
                  ></path>
                </svg>
                <span
                  className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
                >
                  sarbikSinharay
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Desktop Only */}
      <div className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-b-fuchsia-200 rounded-full flex justify-center bg-black/30 backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
    </div>
  );
}
