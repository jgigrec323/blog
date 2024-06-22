import BlogCard from '@/components/BlogCard'
import Hero from '@/components/Hero'
import React from 'react'

function Home() {
  return (
    <div>
      <Hero></Hero>
      <section className='mt-20 px-28'>
        <BlogCard  content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus amet hic! Magnam, repellendus excepturi!' category='Musique' date='Nov 25' 
        imageUrl='https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg' title='This is a test for the blog card'></BlogCard>
      </section>
    </div>
  )
}

export default Home