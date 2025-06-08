import React from 'react';
import { ComponentProps } from '@/types';

interface CardProps extends ComponentProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

interface CardHeaderProps extends ComponentProps {
  title?: string;
  subtitle?: string;
}

interface CardContentProps extends ComponentProps {}

interface CardFooterProps extends ComponentProps {}

const cardVariants = {
  default: 'shadow-lg' + ' ' + 'bg-purple-800 border border-purple-600',
  elevated: 'shadow-xl' + ' ' + 'bg-purple-800 border border-purple-600',
  outlined: 'border' + ' ' + 'bg-purple-800 border-purple-600'
};

const cardPadding = {
  none: '',
  sm: 'p-3 sm:p-4',
  md: 'p-4 sm:p-6',
  lg: 'p-6 sm:p-8'
};

function CardRoot({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = false,
  ...props
}: CardProps) {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  const variantClasses = cardVariants[variant];
  const paddingClasses = cardPadding[padding];
  const hoverClasses = hover ? 'hover:shadow-xl hover:scale-105 cursor-pointer' : '';
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${paddingClasses} ${hoverClasses} ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}

function CardHeader({
  children,
  className = '',
  title,
  subtitle,
  ...props
}: CardHeaderProps) {
  const baseClasses = 'mb-4';
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      {title && (
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-cream-400">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-purple-200 text-sm sm:text-base">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

function CardContent({
  children,
  className = '',
  ...props
}: CardContentProps) {
  const baseClasses = 'text-purple-200';
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}

function CardFooter({
  children,
  className = '',
  ...props
}: CardFooterProps) {
  const baseClasses = 'mt-4 pt-4 border-t border-purple-600';
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}

// Compound component pattern
export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter
};
