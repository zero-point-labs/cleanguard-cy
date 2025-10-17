import React from 'react';

interface DisinfectionIconProps {
  className?: string;
  size?: number;
}

export const DisinfectionIcon: React.FC<DisinfectionIconProps> = ({ 
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
      {/* Disinfection bottle */}
      <path d="M7 3h10v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V3z" />
      {/* Bottle cap */}
      <path d="M9 3V1h6v2" />
      {/* Label */}
      <rect x="9" y="7" width="6" height="4" rx="1" />
      {/* Cross symbol */}
      <path d="M12 8v2" />
      <path d="M11 9h2" />
      {/* Liquid level */}
      <path d="M8 15h8" />
      <path d="M8 17h8" />
      {/* Spray effect */}
      <path d="M17 10l2-1" />
      <path d="M17 12l3 0" />
      <path d="M17 14l2 1" />
    </svg>
  );
};

export default DisinfectionIcon;
