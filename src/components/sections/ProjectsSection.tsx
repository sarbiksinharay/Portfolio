'use client';

import React, { useState, useEffect } from 'react';
import { projects, featuredProjects } from '@/data/projects';
import { ProjectCard } from '@/components/features/ProjectCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useInView } from '@/hooks/useIntersectionObserver';
import { PROJECT_CATEGORIES } from '@/lib/constants';

export function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 }); // Lower threshold for mobile
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const categories = ['all', ...Object.keys(PROJECT_CATEGORIES)];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  // Debug logging for mobile
  useEffect(() => {
    console.log('Projects Section - Total projects:', projects.length);
    console.log('Projects Section - Filtered projects:', filteredProjects.length);
    console.log('Projects Section - Displayed projects:', displayedProjects.length);
    console.log('Projects Section - In view:', inView);
  }, [filteredProjects.length, displayedProjects.length, inView]);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-purple-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cream-400">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-purple-200 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge
            and learning experience that has helped me grow as a developer.
          </p>
        </div>

        {/* Category Filter - Mobile Optimized */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 transition-all duration-1000 px-2 ${
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
              {category === 'all' ? 'All Projects' : PROJECT_CATEGORIES[category as keyof typeof PROJECT_CATEGORIES] || category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-purple-200">
              Featured Projects
            </h3>
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
              }`}
            >
              {featuredProjects.slice(0, 2).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured
                />
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div>
          {selectedCategory !== 'all' && (
            <h3 className="text-2xl font-bold mb-8 text-center text-purple-200">
              {PROJECT_CATEGORIES[selectedCategory as keyof typeof PROJECT_CATEGORIES]} Projects
            </h3>
          )}
          
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 delay-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
            }`}
          >
            {displayedProjects.length > 0 ? (
              displayedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-purple-200 text-lg">No projects found for the selected category.</p>
              </div>
            )}
          </div>

          {/* Show More/Less Button */}
          {filteredProjects.length > 6 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less' : `Show All ${filteredProjects.length} Projects`}
              </Button>
            </div>
          )}
        </div>

        {/* Project Stats - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'Total Projects', value: projects.length },
            { label: 'Completed', value: projects.filter(p => p.status === 'completed').length },
            { label: 'In Progress', value: projects.filter(p => p.status === 'in-progress').length },
            { label: 'Technologies', value: [...new Set(projects.flatMap(p => p.technologies))].length }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-purple-200 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-purple-300 text-xs sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
