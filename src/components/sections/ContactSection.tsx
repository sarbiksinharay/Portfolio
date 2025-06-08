'use client';

import React from 'react';
import { personalInfo } from '@/data/personal';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useInView } from '@/hooks/useIntersectionObserver';

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Send me a message',
      value: personalInfo.email,
      action: `mailto:${personalInfo.email}`,
      primary: true
    },
    {
      icon: '📍',
      title: 'Location',
      description: 'Based in',
      value: 'Kolkata',
      action: `https://maps.google.com/?q=${encodeURIComponent('Kolkata')}`
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-purple-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-900">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-purple-900 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-purple-800 max-w-3xl mx-auto">
            Got an exciting project idea or just want to chat about tech? I'm always up for a good conversation!
            Let's build something awesome together! 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <Card.Root padding="lg" className="h-full">
              <Card.Header
                title="Let's Connect"
                subtitle="Ready to turn ideas into reality? Drop me a line and let's make it happen!"
              />
              
              <Card.Content>
                <div className="space-y-4 sm:space-y-6">
                  {contactMethods.map((method) => (
                    <div key={method.title} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-200 rounded-full flex items-center justify-center">
                        <span className="text-lg sm:text-xl">{method.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-cream-400 mb-1">
                          {method.title}
                        </h4>
                        <p className="text-purple-200 text-xs sm:text-sm mb-2">
                          {method.description}
                        </p>
                        <a
                          href={method.action}
                          target={method.title === 'Location' ? '_blank' : undefined}
                          rel={method.title === 'Location' ? 'noopener noreferrer' : undefined}
                          className={`text-cream-400 hover:text-white hover:underline font-medium transition-colors ${
                            method.primary ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                          }`}
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>



              </Card.Content>
            </Card.Root>
          </div>

          {/* Call to Action */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <Card.Root padding="lg" className="h-full bg-gradient-to-br from-purple-100 to-purple-200">
              <Card.Content>
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl text-white">🚀</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">
                    Ready to Start a Project?
                  </h3>

                  <p className="text-purple-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    Whether it's a cool web app, an IoT gadget, or just brainstorming the next big thing -
                    I'm all ears! Let's grab a virtual coffee and see what magic we can create together. ☕✨
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <Button
                      href={`mailto:${personalInfo.email}?subject=Project Inquiry&body=Hi Sarbik, I'd like to discuss a project with you.`}
                      variant="primary"
                      size="lg"
                      className="w-full min-h-[44px] text-sm sm:text-base"
                    >
                      Start a Conversation
                    </Button>

                    <Button
                      href="#projects"
                      variant="ghost"
                      size="md"
                      className="w-full min-h-[44px] text-sm sm:text-base"
                    >
                      View My Work First
                    </Button>
                  </div>

                  {/* Quick Stats - Mobile Optimized */}
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-purple-300">
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-purple-700">24h</div>
                        <div className="text-xs text-purple-600">Response Time</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-purple-700">2.5+</div>
                        <div className="text-xs text-purple-600">Years Experience</div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-6 text-center">
                      <div className="text-base sm:text-lg font-semibold text-purple-700">
                        Wanna build something cool together? 🚀
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Content>
            </Card.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
