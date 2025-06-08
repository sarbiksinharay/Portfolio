'use client';

import React from 'react';
import { personalInfo } from '@/data/personal';
import { Card } from '@/components/ui/Card';
import { useScrollAnimation, scrollAnimationClasses } from '@/hooks/useScrollAnimation';

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const achievements = [
    { icon: '🎯', title: 'Projects Completed', value: '30+' },
    { icon: '⭐', title: 'Years Experience', value: '2.5+' },
    { icon: '🚀', title: 'Technologies Mastered', value: '20+' },
    { icon: '🏆', title: 'GDSC Recognitions', value: '2' }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-purple-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${scrollAnimationClasses.fadeIn.transition} ${
          isVisible ? scrollAnimationClasses.fadeIn.animate : scrollAnimationClasses.fadeIn.initial
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cream-400">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`${scrollAnimationClasses.slideLeft.transition} ${
              isVisible ? scrollAnimationClasses.slideLeft.animate : scrollAnimationClasses.slideLeft.initial
            }`}
          >
            <Card.Root padding="lg" className="h-full border bg-purple-800 border-purple-600">
              <Card.Content>
                <h3 className="text-2xl font-bold mb-6 text-cream-400">
                  Hello! I'm {personalInfo.name.split(' ')[0]}, a passionate student and aspiring developer based in {personalInfo.location}.
                </h3>

                <div className="space-y-6 text-purple-200 leading-relaxed">
                  <p>
                    As a third-year Bachelor of Computer Applications (Hons.) student with 2.5+ years of
                    hands-on experience, I'm on an exciting journey through web development, data science,
                    Machine Learning, AI, and IoT innovations. I specialize in MERN stack development,
                    data analysis using Python, and AI prompting while exploring emerging technologies
                    like blockchain and cryptography.
                  </p>

                  <p>
                    My tech journey began with curiosity about how things work digitally, and has evolved
                    into expertise in creating innovative web applications, data-driven insights, and
                    intelligent systems. From Arduino, ESP32, and Raspberry Pi-based IoT projects to
                    full-stack web development and advanced data analysis, I combine theoretical knowledge
                    with practical implementation.
                  </p>

                  <p>
                    With 2 recognitions from Google Developer Student Clubs (GDSC) for my dedication, I believe in
                    continuous learning, clean code practices, and using technology to drive positive change.
                    My expertise spans frontend frameworks, backend systems, hardware programming, data science,
                    and AI prompting, making me passionate about building solutions that bridge the digital and
                    physical worlds while extracting meaningful insights from data.
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-cream-400">
                    What I'm passionate about:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {['MERN Stack', 'Data Science', 'IoT Innovation', 'AI Prompting', 'Machine Learning', 'Blockchain'].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 text-white rounded-full text-sm font-medium transition-colors hover:opacity-80 bg-purple-600 hover:bg-purple-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card.Content>
            </Card.Root>
          </div>

          {/* Visual Element & Stats */}
          <div
            className={`${scrollAnimationClasses.slideRight.transition} delay-300 ${
              isVisible ? scrollAnimationClasses.slideRight.animate : scrollAnimationClasses.slideRight.initial
            }`}
          >
            <div className="space-y-8">
              {/* Coding Meme Visual */}
              <div className="relative mx-auto w-80 h-80">
                <div className="absolute inset-0 rounded-2xl transform rotate-6 bg-gradient-to-br from-purple-600 to-purple-800"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border bg-gradient-to-br from-purple-500 to-purple-700 border-purple-600">
                  <img
                    src="/coding_meme.webp"
                    alt="Coding Meme"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card.Root
                    key={achievement.title}
                    variant="elevated"
                    padding="md"
                    className="text-center hover:scale-105 transition-transform duration-300 border bg-purple-800 border-purple-600"
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <div className="text-2xl font-bold text-purple-200 mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-purple-300">
                      {achievement.title}
                    </div>
                  </Card.Root>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
