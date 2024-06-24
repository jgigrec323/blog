import React from "react";

type DividerProps = {
  color?: string;
  width?: number;
  height?: number; 
  className?: string; 
};

const Divider: React.FC<DividerProps> = ({ color = "bg-black", width = 1, height = 1, className = "" }) => {
  return (
    <div
      className={`w-[${width}px] h-[${height}px] ${color} ${className}`} 
    />
  );
};

export default Divider;
