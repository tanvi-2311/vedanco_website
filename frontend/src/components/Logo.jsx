import React from 'react';

const Logo = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
            .logo-bg {
              fill: #244c2d; /* Exact dark forest green from your image */
            }
            .logo-v {
              font-family: 'Cooper Black', 'Titan One', serif;
              font-size: 110px;
              fill: #fdfaf0; /* Exact creamy white from your image */
              font-weight: normal;
            }
            .logo-svg-container {
              transform-origin: center;
              animation: pulse-logo 3s ease-in-out infinite;
            }
            @keyframes pulse-logo {
              0% { transform: scale(1); }
              50% { transform: scale(1.04); }
              100% { transform: scale(1); }
            }
          `}
        </style>
        <clipPath id="circleClip">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      
      <g className="logo-svg-container">
        <circle cx="50" cy="50" r="50" className="logo-bg" />
        <text 
          x="50" 
          y="95" 
          textAnchor="middle" 
          className="logo-v"
          clipPath="url(#circleClip)"
        >
          V
        </text>
      </g>
    </svg>
  );
};

export default Logo;
