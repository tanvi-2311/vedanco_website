import React from 'react';

const Logo = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" fill="#1a4d2e" />
      <text 
        x="50" 
        y="50" 
        textAnchor="middle" 
        dominantBaseline="central" 
        fill="white" 
        fontSize="55" 
        fontFamily="'Libre Baskerville', serif" 
        fontWeight="700"
        dy="2"
      >
        V
      </text>
    </svg>
  );
};

export default Logo;
