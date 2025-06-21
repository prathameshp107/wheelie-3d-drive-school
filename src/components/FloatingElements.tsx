
import React from 'react';
import { Sparkles, Star, Heart, Zap } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Sparkles, className: 'top-20 left-10 text-purple-300 animate-bounce', delay: 'delay-0' },
    { Icon: Star, className: 'top-32 right-20 text-pink-300 animate-pulse', delay: 'delay-1000' },
    { Icon: Heart, className: 'bottom-40 left-20 text-purple-400 animate-bounce', delay: 'delay-500' },
    { Icon: Zap, className: 'bottom-20 right-10 text-pink-400 animate-pulse', delay: 'delay-1500' },
    { Icon: Sparkles, className: 'top-1/2 left-5 text-purple-200 animate-ping', delay: 'delay-2000' },
    { Icon: Star, className: 'top-1/3 right-5 text-pink-200 animate-bounce', delay: 'delay-700' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element, index) => (
        <element.Icon
          key={index}
          className={`absolute h-6 w-6 opacity-30 ${element.className} ${element.delay}`}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
