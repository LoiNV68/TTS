import React from 'react';

interface DownIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const DownIcon: React.FC<DownIconProps> = ({ width = "12px", height = "12px", color = "#292524" }) => {
  return (
    <svg
      className="down-icon"
      width={width}
      height={height}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width, height }}
    >
      <path
        d="M1 1L5 5L9 1"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default DownIcon;
