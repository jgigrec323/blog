import React from "react";

type DividerProps = {
  color?: string;
  width?: number | string;  // Allow width to be a string for percentage values
  height?: number;
  className?: string;
};

const Divider: React.FC<DividerProps> = ({ color = "bg-black", width = '100%', height = 1, className = "" }) => {
  return (
    <div
      className={`${color} ${className}`} 
      style={{ width: typeof width === 'number' ? `${width}px` : width, height: `${height}px` }} 
    />
  );
};

export default Divider;
