import Image from 'next/image';
import React from 'react'
import Divider from './Divider';

interface BlogCardProps{
    imageUrl: string;
  title: string;
  category: string;
  date: string;
  content: string;
}

const BlogCard : React.FC<BlogCardProps> = ({imageUrl, title, category, date, content})=>{
    return (
        <div>
            <img  src={imageUrl} alt={title} className='rounded-md mb-10 w-1/2' />
            <Divider></Divider>
            <div className='mt-3 mb-5 flex justify-between'>
                <span>{category.toUpperCase()}</span>
                <span>{date.toUpperCase()}</span>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p className='text-gray-400 mt-1'>{content}</p>
        </div>
    )
}

export default BlogCard