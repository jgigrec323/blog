"use client";
import { fetchPosts } from "@/actions/postsActions";
import BlogCard from "@/components/BlogCard";
import { Post } from "@/lib/types";
import React, { useEffect, useState } from "react";

const AllArticles = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getPosts() {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
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
    </>
  );
};

export default AllArticles;
