'use client';

import React, { useEffect } from 'react';
import { useUIStore } from '@/lib/store';
import { useScrollThreshold } from '@/hooks/useScrollPosition';
import { scrollToElement } from '@/lib/utils';

export function Header() {
  const { isMenuOpen, setIsMenuOpen, toggleMenu } = useUIStore();
  const isScrolled = useScrollThreshold(50);

  const handleNavClick = (href: string) => {
    const elementId = href.replace('#', '');
    scrollToElement(elementId, 80);
    setIsMenuOpen(false);
  };



  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/50 backdrop-blur-md border-b border-gray-800/20 shadow-lg'
          : 'bg-black/50'
      }`}
    >
      {/* Mobile Header Background Animation */}
      <div className="absolute inset-0 md:hidden overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-sage-900/10 to-black/95 animate-gradient-shift opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage-800/5 to-transparent animate-pulse-slow"></div>
      </div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex justify-center items-center h-16 relative">
          {/* Logo */}
          {/*<div className="flex-shrink-0">*/}
          {/*  <button*/}
          {/*    onClick={() => handleNavClick('#hero')}*/}
          {/*    className="text-xl font-bold bg-gradient-to-r from-sage-600 to-sage-800 bg-clip-text text-transparent hover:from-sage-700 hover:to-sage-900 transition-all duration-300"*/}
          {/*  >*/}
          {/*    Sarbik Sinha Ray*/}
          {/*  </button>*/}
          {/*</div>*/}

          {/* Desktop Navigation - Uiverse.io Design */}
          <div className="hidden md:flex items-center gap-8 px-6 py-3">
            {/* Home Button */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="relative inline-flex items-center justify-center text-lg font-light text-white bg-transparent rounded-lg px-6 py-3 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white/20 hover:bg-white/10 cursor-pointer border border-transparent hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 uppercase"
            >
              <span className="font-light">HOME</span>
            </button>

            {/* About Button */}
            <button
              onClick={() => handleNavClick('#about')}
              className="relative inline-flex items-center justify-center text-lg font-light text-white bg-transparent rounded-lg px-6 py-3 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white/20 hover:bg-white/10 cursor-pointer border border-transparent hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 uppercase"
            >
              <span className="font-light">ABOUT</span>
            </button>

            {/* Projects Button */}
            <button
              onClick={() => handleNavClick('#projects')}
              className="relative inline-flex items-center justify-center text-lg font-light text-white bg-transparent rounded-lg px-6 py-3 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white/20 hover:bg-white/10 cursor-pointer border border-transparent hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 uppercase"
            >
              <span className="font-light">PROJECTS</span>
            </button>

            {/* Skills Button */}
            <button
              onClick={() => handleNavClick('#skills')}
              className="relative inline-flex items-center justify-center text-lg font-light text-white bg-transparent rounded-lg px-6 py-3 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white/20 hover:bg-white/10 cursor-pointer border border-transparent hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 uppercase"
            >
              <span className="font-light">SKILLS</span>
            </button>

            {/* Contact Button */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="relative inline-flex items-center justify-center text-lg font-light text-white bg-transparent rounded-lg px-6 py-3 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white/20 hover:bg-white/10 cursor-pointer border border-transparent hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 uppercase"
            >
              <span className="font-light">CONTACT</span>
            </button>
          </div>

          {/* Mobile Menu Button - Fixed for Touch */}
          <div className="absolute top-0 right-0 flex items-center h-16 pr-4">
            {/* Mobile menu button */}
            <button
              className="md:hidden menu-button p-3 rounded-md bg-sage-800 hover:bg-sage-700 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleMenu();
              }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced with Animated Background */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu">
            <div className="relative px-3 pt-3 pb-4 space-y-2 bg-sage-900 rounded-lg mt-2 shadow-lg border border-sage-700 overflow-hidden">
              {/* Animated Background Layer */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-600/20 via-sage-700/10 to-sage-800/20 animate-gradient-shift"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-sage-500/5 to-transparent animate-pulse-slow"></div>
              </div>

              {/* Subtle Moving Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-1 h-1 bg-sage-400/20 rounded-full animate-float-1" style={{ top: '20%', left: '15%' }}></div>
                <div className="absolute w-1 h-1 bg-sage-300/15 rounded-full animate-float-2" style={{ top: '60%', left: '80%' }}></div>
                <div className="absolute w-1 h-1 bg-sage-500/10 rounded-full animate-float-3" style={{ top: '40%', left: '60%' }}></div>
              </div>

              {/* Content Layer */}
              <div className="relative z-10">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#hero');
                }}
                className="block w-full text-left px-4 py-3 text-white hover:text-sage-300 hover:bg-sage-800 rounded-md transition-colors duration-200 font-medium text-lg min-h-[44px] flex items-center"
                type="button"
              >
                Home
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#about');
                }}
                className="block w-full text-left px-4 py-3 text-white hover:text-sage-300 hover:bg-sage-800 rounded-md transition-colors duration-200 font-medium text-lg min-h-[44px] flex items-center"
                type="button"
              >
                About
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#projects');
                }}
                className="block w-full text-left px-4 py-3 text-white hover:text-sage-300 hover:bg-sage-800 rounded-md transition-colors duration-200 font-medium text-lg min-h-[44px] flex items-center"
                type="button"
              >
                Projects
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#skills');
                }}
                className="block w-full text-left px-4 py-3 text-white hover:text-sage-300 hover:bg-sage-800 rounded-md transition-colors duration-200 font-medium text-lg min-h-[44px] flex items-center"
                type="button"
              >
                Skills
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="block w-full text-left px-4 py-3 text-white hover:text-sage-300 hover:bg-sage-800 rounded-md transition-colors duration-200 font-medium text-lg min-h-[44px] flex items-center"
                type="button"
              >
                Contact
              </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
