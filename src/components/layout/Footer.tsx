import React from 'react';
import { personalInfo } from '@/data/personal';
import { APP_CONFIG } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-100 dark:bg-sage-800 border-t border-sage-200 dark:border-sage-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-sage-600 to-sage-800 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-sage-600 dark:text-sage-300 text-xs sm:text-sm leading-relaxed">
              {personalInfo.title}
            </p>
            <p className="text-sage-500 dark:text-sage-400 text-xs sm:text-sm">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h4 className="text-sm sm:text-md font-semibold text-sage-900 dark:text-white">
              Quick Links
            </h4>
            <div className="space-y-1 sm:space-y-2">
              <a
                href="#about"
                className="block text-sage-600 dark:text-sage-300 hover:text-sage-800 dark:hover:text-white transition-colors text-xs sm:text-sm min-h-[44px] flex items-center justify-center md:justify-start"
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-sage-600 dark:text-sage-300 hover:text-sage-800 dark:hover:text-white transition-colors text-xs sm:text-sm min-h-[44px] flex items-center justify-center md:justify-start"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block text-sage-600 dark:text-sage-300 hover:text-sage-800 dark:hover:text-white transition-colors text-xs sm:text-sm min-h-[44px] flex items-center justify-center md:justify-start"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="block text-sage-600 dark:text-sage-300 hover:text-sage-800 dark:hover:text-white transition-colors text-xs sm:text-sm min-h-[44px] flex items-center justify-center md:justify-start"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h4 className="text-sm sm:text-md font-semibold text-sage-900 dark:text-white">
              Connect
            </h4>
            <div className="space-y-1 sm:space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-sage-600 dark:text-sage-300 hover:text-sage-800 dark:hover:text-sage-200 transition-colors text-xs sm:text-sm min-h-[44px] flex items-center justify-center md:justify-start"
              >
                {personalInfo.email}
              </a>
              {personalInfo.resume && (
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sage-600 dark:text-sage-300 hover:text-sage-800 dark:hover:text-sage-200 transition-colors text-xs sm:text-sm min-h-[44px] flex items-center justify-center md:justify-start"
                >
                  Download Resume
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section - Mobile Optimized */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-sage-200 dark:border-sage-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
            <p className="text-sage-600 dark:text-sage-300 text-xs sm:text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sage-500 dark:text-sage-400 text-xs sm:text-sm">
              Crafted with Next.js, TypeScript, and Tailwind CSS ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
