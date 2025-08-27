import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg ${
        hover ? 'hover:shadow-2xl hover:-translate-y-1' : ''
      } transition-all duration-300 ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;