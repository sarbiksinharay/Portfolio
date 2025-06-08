import React from 'react';
import { ComponentProps } from '@/types';

interface BadgeProps extends ComponentProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
}

const badgeVariants = {
  default: 'bg-purple-200 text-purple-800',
  primary: 'bg-purple-300 text-purple-900',
  secondary: 'bg-purple-400 text-purple-900',
  success: 'bg-emerald-200 text-emerald-800',
  warning: 'bg-amber-200 text-amber-800',
  error: 'bg-red-200 text-red-800'
};

const badgeSizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-2 py-1 text-xs sm:px-3 sm:text-sm',
  lg: 'px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base'
};

export function Badge({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  icon,
  ...props
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-colors duration-200';
  const variantClasses = badgeVariants[variant];
  const sizeClasses = badgeSizes[size];
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  return (
    <span className={combinedClasses} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
}
