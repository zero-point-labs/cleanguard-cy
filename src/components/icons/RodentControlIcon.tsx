import React from 'react';

interface RodentControlIconProps {
  className?: string;
  size?: number;
}

export const RodentControlIcon: React.FC<RodentControlIconProps> = ({ 
  className = "", 
  size = 24 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Mouse trap base */}
      <rect x="3" y="12" width="18" height="8" rx="2" />
      {/* Trap spring mechanism */}
      <path d="M6 12V8a6 6 0 0 1 12 0v4" />
      {/* Bait holder */}
      <circle cx="12" cy="16" r="2" />
      {/* Cheese bait */}
      <path d="M11 15h2l-0.5 2h-1z" />
      {/* Trap trigger */}
      <path d="M12 8v4" />
      {/* Warning symbol */}
      <path d="M12 4l-1 2h2l-1-2z" />
      <circle cx="12" cy="3" r="0.5" />
    </svg>
  );
};

export default RodentControlIcon;
