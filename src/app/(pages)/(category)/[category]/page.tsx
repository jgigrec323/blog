"use client";
import { fetchPostsByCategories } from "@/actions/postsActions";
import BlogCard from "@/components/BlogCard";
import CustomLoader from "@/components/CustomLoader";
import { Post } from "@/lib/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryPage = () => {
  const [cat, setCat] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { category } = useParams();

  function transformLinkToTitle(link: string): string {
    const cleanLink = link.replace(/^\/|\/$/g, "");
    return cleanLink;
  }

  useEffect(() => {
    console.log(cat);
    async function getPosts() {
      try {
        const fetchedPosts = await fetchPostsByCategories(cat.toLowerCase());
        console.log(fetchedPosts);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    }

    if (cat) {
      getPosts();
    }
  }, [cat]);

  useEffect(() => {
    setCat(transformLinkToTitle(category.toString()));
  }, [category]);
  if (loading)
    return (
      <div className="relative w-full h-56">
        <CustomLoader></CustomLoader>
      </div>
    );
  return (
    <>
      {error && <p>{error}</p>}
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
          }
          title={post.title}
        />
      ))}
    </>
  );
};

export default CategoryPage;
