import Image from 'next/image';
import React from 'react';
import Divider from './Divider';

interface BlogCardProps {
  imageUrl: string;
  title: string;
  category: string;
  date: string;
  content: string;
  isFeatured?: boolean; // Optional prop for featured posts
}

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, title, category, date, content, isFeatured }) => {
  const baseTitleClass = 'text-3xl font-medium'; // Base title class
  const featuredTitleClass = isFeatured ? (
    // Responsive font size for featured posts
    'md:text-5xl lg:text-3xl text-3xl font-medium'
  ) : (
    // Responsive font size for recent posts
    'md:text-3xl lg:text-xl text-3xl font-medium'
  );

  return (
    <div>
        <img  src={imageUrl} alt={title} className='rounded-md md:mb-10 mb-5 w-full' />      
        <Divider color="bg-dgreen" />
      <div className='mt-3 mb-5 flex justify-between text-xs text-dgreen'>
        <span>{category.toUpperCase()}</span>
        <span>{date.toUpperCase()}</span>
      </div>
      <h2 className={featuredTitleClass}>{title}</h2>
      <p className='text-gray-400 mt-3 lg:text-sm'>{content}</p>
    </div>
  );
};

export default BlogCard;
