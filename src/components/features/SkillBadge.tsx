import React from 'react';
import { Skill } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface SkillBadgeProps {
  skill: Skill;
  showProficiency?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function SkillBadge({ skill, showProficiency = false, size = 'md' }: SkillBadgeProps) {
  const getProficiencyColor = (level: number) => {
    if (level >= 4) return 'success';
    if (level >= 3) return 'primary';
    if (level >= 2) return 'warning';
    return 'default';
  };

  const getProficiencyText = (level: number) => {
    switch (level) {
      case 5: return 'Expert';
      case 4: return 'Advanced';
      case 3: return 'Intermediate';
      case 2: return 'Beginner';
      default: return 'Learning';
    }
  };

  return (
    <div className="group relative">
      <Badge
        variant={showProficiency ? getProficiencyColor(skill.proficiency) : 'default'}
        size={size}
        icon={skill.icon}
        className="cursor-pointer hover:scale-105 transition-transform duration-200 w-full justify-center text-center"
      >
        <span className="truncate">{skill.name}</span>
        {showProficiency && (
          <span className="ml-1 sm:ml-2 text-xs opacity-75 hidden sm:inline">
            {getProficiencyText(skill.proficiency)}
          </span>
        )}
      </Badge>

      {/* Tooltip - Hidden on Mobile for Performance */}
      <div className="hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
        {skill.description || skill.name}
        {skill.yearsOfExperience && (
          <span className="block text-gray-300">
            {skill.yearsOfExperience} years experience
          </span>
        )}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
      </div>
    </div>
  );
}
