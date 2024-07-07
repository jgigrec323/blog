import React from 'react';

interface PageTitleProps {
  title: string; 
  className?:string
}

const PageTitle: React.FC<PageTitleProps> = ({ title, className }) => {
  return (
    <h2 className={className}>{title}</h2>
  );
};

export default PageTitle;
