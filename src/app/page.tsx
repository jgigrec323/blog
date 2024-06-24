import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import React from "react";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <section className="mt-20 lg:px-28 sm:px-16 px-10 lg:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-10">
        <div>
          <h2 className="mb-5">Featured</h2>
          <div className="grid grid-cols-1 gap-y-14 mb-10  ">
            <BlogCard
              content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus amet hic! Magnam, repellendus excepturi!"
              category="Musique"
              date="Nov 25"
              imageUrl="https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
              title="This is a test for the blog card"
              isFeatured={true}
            ></BlogCard>
            <BlogCard
              content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus amet hic! Magnam, repellendus excepturi!"
              category="Musique"
              date="Nov 25"
              imageUrl="https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
              title="This is a test for the blog card"
              isFeatured={true}
            ></BlogCard>
          </div>
        </div>
        <div>
        <h2 className="mb-5">Recent</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-14 gap-x-6">
          <BlogCard
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus amet hic! Magnam, repellendus excepturi!"
            category="Musique"
            date="Nov 25"
            imageUrl="https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
            title="This is a test for the blog card"
          ></BlogCard>
          <BlogCard
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus amet hic! Magnam, repellendus excepturi!"
            category="Musique"
            date="Nov 25"
            imageUrl="https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
            title="This is a test for the blog card"
          ></BlogCard>
          <BlogCard
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus amet hic! Magnam, repellendus excepturi!"
            category="Musique"
            date="Nov 25"
            imageUrl="https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
            title="This is a test for the blog card"
          ></BlogCard>
          <BlogCard
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus amet hic! Magnam, repellendus excepturi!"
            category="Musique"
            date="Nov 25"
            imageUrl="https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
            title="This is a test for the blog card"
          ></BlogCard>
          <BlogCard
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus amet hic! Magnam, repellendus excepturi!"
            category="Musique"
            date="Nov 25"
            imageUrl="https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
            title="This is a test for the blog card"
          ></BlogCard>
          <BlogCard
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus amet hic! Magnam, repellendus excepturi!"
            category="Musique"
            date="Nov 25"
            imageUrl="https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
            title="This is a test for the blog card"
          ></BlogCard>
          <BlogCard
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus amet hic! Magnam, repellendus excepturi!"
            category="Musique"
            date="Nov 25"
            imageUrl="https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
            title="This is a test for the blog card"
          ></BlogCard>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
