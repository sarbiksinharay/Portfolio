'use client';

import React, { useState } from 'react';
import { skillsByCategory, getFeaturedSkills } from '@/data/skills';
import { SkillBadge } from '@/components/features/SkillBadge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useInView } from '@/hooks/useIntersectionObserver';
import { SKILL_CATEGORIES } from '@/lib/constants';

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', ...Object.keys(SKILL_CATEGORIES)];
  const featuredSkills = getFeaturedSkills();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-cream-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-900">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-gradient-to-r from-purple-600 to-purple-800"></div>
          <p className="text-lg max-w-3xl mx-auto text-purple-700">
            Here are the technologies and tools I work with. I'm always learning and
            expanding my skill set to stay current with industry trends.
          </p>
        </div>

        {/* Featured Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-purple-800">
            Core Expertise
          </h3>
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {featuredSkills.map((skill, index) => (
              <div
                key={skill.id}
                className="transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <SkillBadge skill={skill} showProficiency size="lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter - Mobile Optimized */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 transition-all duration-1000 delay-300 px-2 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="capitalize text-xs sm:text-sm px-3 sm:px-4 py-2 min-h-[44px] flex items-center"
            >
              {category === 'all' ? 'All Skills' : SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES]}
            </Button>
          ))}
        </div>

        {/* Skills by Category */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {selectedCategory === 'all' ? (
            // Show all categories
            <div className="space-y-12">
              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <Card.Root key={category} padding="lg">
                  <Card.Header
                    title={SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES]}
                    className="mb-6"
                  />
                  <Card.Content>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
                      {skills.map((skill) => (
                        <SkillBadge key={skill.id} skill={skill} />
                      ))}
                    </div>
                  </Card.Content>
                </Card.Root>
              ))}
            </div>
          ) : (
            // Show selected category
            <Card.Root padding="lg">
              <Card.Header
                title={SKILL_CATEGORIES[selectedCategory as keyof typeof SKILL_CATEGORIES]}
                className="mb-6"
              />
              <Card.Content>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
                  {skillsByCategory[selectedCategory as keyof typeof skillsByCategory]?.map((skill) => (
                    <SkillBadge key={skill.id} skill={skill} showProficiency />
                  ))}
                </div>
              </Card.Content>
            </Card.Root>
          )}
        </div>

        {/* Skills Stats - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              label: 'Total Skills',
              value: Object.values(skillsByCategory).flat().length
            },
            {
              label: 'Advanced Level',
              value: Object.values(skillsByCategory).flat().filter(s => s.proficiency >= 4).length
            },
            {
              label: 'Years Experience',
              value: '2.5+'
            },
            {
              label: 'Always Growing',
              value: '∞'
            }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-purple-800">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-purple-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
