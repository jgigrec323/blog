"use client";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchPostsByTitle } from "@/actions/postsActions";
import { Category, Tag } from "@/lib/types"; // Adjust according to your types

const PostView = () => {
  const router = useRouter();
  const { postTitle } = useParams();
  const [post, setPost] = useState<any>(null); // Adjust type as per your Post type
  const [categories, setCategories] = useState<Category[]>([]); // Define types for Category and Tag
  const [tags, setTags] = useState<Tag[]>([]); // Define types for Category and Tag
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPostData() {
      try {
        setLoading(true);
        const fetchedPost = await fetchPostsByTitle(postTitle as string); // Adjust fetchPostsByTitle according to your implementation
        setPost(fetchedPost);
        setCategories(fetchedPost.categories); // Assuming categories and tags are arrays in fetchedPost
        setTags(fetchedPost.tags);
      } catch (error) {
        setError("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    }

    if (postTitle) {
      fetchPostData();
    }
  }, [postTitle]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-10">
      <div>
        {!loading && post.images && post.images.length > 0 ? (
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
  );
};

export default PostView;
