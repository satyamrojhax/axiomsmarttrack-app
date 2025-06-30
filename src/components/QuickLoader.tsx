
import React from 'react';
import { Loader2 } from 'lucide-react';

interface QuickLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const QuickLoader: React.FC<QuickLoaderProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin`} />
      {text && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  );
};

export default QuickLoader;
