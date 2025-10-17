import React from 'react';

interface SprayBottleIconProps {
  className?: string;
  size?: number;
}

export const SprayBottleIcon: React.FC<SprayBottleIconProps> = ({ 
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
      {/* Spray bottle body */}
      <path d="M8 6h8v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V6z" />
      {/* Bottle neck */}
      <path d="M10 6V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
      {/* Trigger */}
      <path d="M8 10h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2" />
      {/* Spray nozzle */}
      <path d="M6 11h-2" />
      {/* Spray particles */}
      <circle cx="2" cy="9" r="0.5" />
      <circle cx="1" cy="11" r="0.5" />
      <circle cx="2" cy="13" r="0.5" />
    </svg>
  );
};

export default SprayBottleIcon;
