"use client";
import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchPostsByTitle, fetchPosts } from "@/actions/postsActions";
import { Category, Tag, Post } from "@/lib/types"; // Adjust according to your types
import BlogCard from "@/components/BlogCard"; // Import the BlogCard component

const PostView = () => {
  const router = useRouter();
  const { postTitle } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [suggestedPosts, setSuggestedPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPostData() {
      try {
        setLoading(true);
        const fetchedPost = await fetchPostsByTitle(postTitle as string);
        setPost(fetchedPost);
        setCategories(fetchedPost.categories);
        setTags(fetchedPost.tags);
      } catch (error) {
        setError("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    }

    async function fetchSuggestedPosts() {
      try {
        const fetchedPosts = await fetchPosts();
        // Exclude the current post and limit to 3 suggested posts
        const filteredPosts = fetchedPosts
          .filter((p) => p.title !== postTitle)
          .slice(0, 3);
        setSuggestedPosts(filteredPosts);
      } catch (error) {
        console.error("Failed to fetch suggested posts", error);
      }
    }

    if (postTitle) {
      fetchPostData();
      fetchSuggestedPosts();
    }
  }, [postTitle]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-10 lg:grid lg:grid-cols-3 lg:gap-10">
      <div className="lg:col-span-2">
        <div>
          {post.images && post.images.length > 0 ? (
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${post.images[0].url}`}
              alt={post.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          ) : (
            "No Image"
          )}
        </div>
        <div className="my-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
        </div>
        <div className="flex items-center gap-10">
          <div>
            {categories.map((category, index) => (
              <Badge key={index} variant="outline">
                {category.name}
              </Badge>
            ))}
          </div>
          <div>
            {tags.length > 0 ? (
              tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag.name}
                </Badge>
              ))
            ) : (
              <span>No Tags</span>
            )}
          </div>
        </div>
        <div className="mt-10">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose lg:prose-xl"
          />
        </div>
      </div>
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold mb-4">Suggested Posts</h2>
        <div className="space-y-4">
          {suggestedPosts.map((suggestedPost) => (
            <BlogCard
              key={suggestedPost.id}
              imageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${
                suggestedPost.images[0]?.url || "/default-image.jpg"
              }`}
              title={suggestedPost.title}
              category={suggestedPost.categories[0]?.name || "Uncategorized"}
              date={new Date(suggestedPost.createdAt).toISOString()}
              content={suggestedPost.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostView;
