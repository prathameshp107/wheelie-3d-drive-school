
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MagicButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  sparkle?: boolean;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
  icon,
  sparkle = true,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl';
      case 'secondary':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl';
      case 'outline':
        return 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-white/50 backdrop-blur-sm';
      default:
        return 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <Button
      className={cn(
        'rounded-full font-sem
old transition-all duration-300 transform hover:scale-105 relative overflow-hidden group',
        getVariantClasses(),
        getSizeClasses(),
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {/* Magic sparkle effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-3 right-2 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-100"></div>
        <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-200"></div>
      </div>
      
      <div className="flex items-center space-x-2 relative z-10">
        {sparkle && <Sparkles className="h-4 w-4" />}
        {icon}
        <span>{children}</span>
      </div>
    </Button>
  );
};

export default MagicButton;
