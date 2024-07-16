"use client";
import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import React, { useEffect, useState } from "react";
import Newsletter from "@/components/Newsletter";
import { Post } from "@/lib/types";
import { fetchPosts } from "@/actions/postsActions";

function Home() {
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

  // Separate featured and recent posts
  const featuredPosts = posts
    .filter((post) => post.isFeatured)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 2);

  const recentPosts = posts
    .filter((post) => !post.isFeatured)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  return (
    <div>
      <Hero></Hero>
      <section className="mt-20 lg:px-28 sm:px-16 px-10 lg:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-10">
        <div>
          <h2 className="mb-5">Featured</h2>
          <div className="grid grid-cols-1 gap-y-14 mb-10">
            {featuredPosts.map((post) => (
              <BlogCard
                key={post.id}
                content={post.content}
                category={post.categories.map((cat) => cat.name).join(", ")}
                date={post.createdAt.toString()}
                imageUrl={
                  post.images.length > 0
                    ? `${process.env.NEXT_PUBLIC_BASE_URL}${post.images[0].url}`
                    : "https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
                }
                title={post.title}
                isFeatured={true}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-5">Recent</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
            {recentPosts.map((post) => (
              <BlogCard
                key={post.id}
                content={post.content}
                category={post.categories.map((cat) => cat.name).join(", ")}
                date={post.createdAt.toString()}
                imageUrl={
                  post.images.length > 0
                    ? `${process.env.NEXT_PUBLIC_BASE_URL}${post.images[0].url}`
                    : "https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-ciel-industrie-gare-station.jpeg"
                }
                title={post.title}
              />
            ))}
          </div>
        </div>
      </section>
      <Newsletter></Newsletter>
    </div>
  );
}

export default Home;
