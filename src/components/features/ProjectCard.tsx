import React from 'react';
import { Project } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const statusColors = {
    completed: 'success',
    'in-progress': 'warning',
    planned: 'default'
  } as const;

  return (
    <Card.Root
      variant="elevated"
      padding="none"
      hover
      className={`overflow-hidden ${featured ? 'lg:col-span-2' : ''}`}
    >
      {/* Project Image - Mobile Responsive */}
      <div className="relative h-40 sm:h-48 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <span className="relative text-white text-3xl sm:text-4xl">🚀</span>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge
            variant={statusColors[project.status]}
            size="sm"
          >
            {project.status.replace('-', ' ')}
          </Badge>
        </div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="primary" size="sm" icon="⭐">
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Content - Mobile Optimized */}
      <div className="p-4 sm:p-6">
        <Card.Header
          title={project.title}
          subtitle={project.description}
        />

        <Card.Content>
          {/* Technologies */}
          <div className="mb-4 sm:mb-6">
            <h4 className="text-xs sm:text-sm font-semibold text-purple-300 mb-2 sm:mb-3">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {project.technologies.slice(0, featured ? 8 : 5).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  size="sm"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > (featured ? 8 : 5) && (
                <Badge variant="default" size="sm">
                  +{project.technologies.length - (featured ? 8 : 5)} more
                </Badge>
              )}
            </div>
          </div>

          {/* Long Description for Featured Projects */}
          {featured && project.longDescription && (
            <p className="text-purple-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              {project.longDescription}
            </p>
          )}
        </Card.Content>

        {/* Project completion date for completed projects */}
        <Card.Footer>
          {project.status === 'completed' && project.completedAt && (
            <div className="text-xs sm:text-sm text-purple-300">
              Completed: {project.completedAt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long'
              })}
            </div>
          )}
          {project.status === 'in-progress' && (
            <div className="text-xs sm:text-sm text-yellow-400">
              Currently in development
            </div>
          )}
        </Card.Footer>
      </div>
    </Card.Root>
  );
}
