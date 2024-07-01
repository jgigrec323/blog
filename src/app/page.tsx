import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import { Input } from "@/components/ui/input";
import React from "react";
import Footer from "@/components/Footer";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
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
      <section className="mt-10 bg-dgreen lg:px-28 sm:px-16 px-10 py-16 flex flex-col justify-center items-center
      
      ">
        <p className="text-primary-foreground text-4xl font-medium sm:text-5xl text-center mb-10">Get the best sent to your inbox, every month</p>
        <form className="w-full h-[3.2rem]  flex items-center justify-between gap-3">
        <Input className="grow outline-none h-full" placeholder="Enter your email" />
        <Button variant={"outline"} className="h-full bg-[#b8e6c3] text-black">Subscribe</Button>
        </form>
        <p className="text-primary-foreground mt-5">Once monthly, no spam</p>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Home;
