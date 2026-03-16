import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  noPadding?: boolean;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  children, 
  size = 'lg',
  className = '',
  noPadding = false
}) => {
  const maxWidthMap = {
    sm: 'max-w-container-xs',
    md: 'max-w-container-md',
    lg: 'max-w-container-lg',  // 1280px - MacBook Air 15" optimized
    xl: 'max-w-container-xl',
    full: 'max-w-full'
  };

  const paddingClass = noPadding ? '' : 'px-4 sm:px-6 lg:px-8';

  return (
    <div className={`w-full ${maxWidthMap[size]} mx-auto ${paddingClass} ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
