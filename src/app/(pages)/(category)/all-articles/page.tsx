"use client";
import { fetchPosts } from "@/actions/postsActions";
import BlogCard from "@/components/BlogCard";
import CustomLoader from "@/components/CustomLoader";
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

  if (loading)
    return (
      <div className="relative w-full h-56">
        <CustomLoader></CustomLoader>
      </div>
    );
  if (error) return <p>{error}</p>;
  return (
    <>
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          content={post.content}
          category={
            post.categories.length > 0
              ? post.categories[0].name
              : "Uncategorized"
          }
          date={post.createdAt.toString()}
          imageUrl={
            post.images.length > 0
              ? `${process.env.NEXT_PUBLIC_BASE_URL}${post.images[0].url}`
              : "https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
          } // Use a default image URL if none is provided
          title={post.title}
        />
      ))}
    </>
  );
};

export default AllArticles;
