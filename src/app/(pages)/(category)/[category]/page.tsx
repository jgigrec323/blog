"use client";
import BlogCard from "@/components/BlogCard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryPage = () => {
  const [cat, setCat] = useState("");
  const { category } = useParams();
  function transformLinkToTitle(link: string): string {
    const cleanLink = link.replace(/^\/|\/$/g, "");
    return cleanLink;
  }

  useEffect(() => {
    setCat(transformLinkToTitle(category.toString()));
  }, [category]);
  return (
    <>
      <BlogCard
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus amet hic! Magnam, repellendus excepturi!"
        category="Musique"
        date="Feb 25"
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
    </>
  );
};

export default CategoryPage;
