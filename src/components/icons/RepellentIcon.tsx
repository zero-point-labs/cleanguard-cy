import React from 'react';

interface RepellentIconProps {
  className?: string;
  size?: number;
}

export const RepellentIcon: React.FC<RepellentIconProps> = ({ 
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
      {/* Shield outline */}
      <path d="M12 2l8 3v7c0 5-8 10-8 10s-8-5-8-10V5l8-3z" />
      {/* Inner protection barrier */}
      <path d="M12 6l5 2v4c0 3-5 6-5 6s-5-3-5-6V8l5-2z" />
      {/* Repelling waves */}
      <path d="M12 10c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z" />
      {/* Outer repelling effect */}
      <circle cx="12" cy="12" r="6" strokeDasharray="2 2" opacity="0.5" />
      <circle cx="12" cy="12" r="8" strokeDasharray="3 3" opacity="0.3" />
    </svg>
  );
};

export default RepellentIcon;
