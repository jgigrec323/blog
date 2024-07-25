"use client";
import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  fetchPostsByTitle,
  fetchPosts,
  incrementViewCount,
} from "@/actions/postsActions";
import { Category, Tag, Post } from "@/lib/types"; // Adjust according to your types
import BlogCard from "@/components/BlogCard"; // Import the BlogCard component
import SidedPosts from "@/components/SidedPosts";
import { calculateReadingTime } from "@/lib/utils";
import Comments from "@/components/Comments";

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

        // Increment the view count
        await incrementViewCount(postTitle as string);
      } catch (error) {
        setError("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    }

    const transformTitleToLink = (title: string) => {
      let link = title;
      link = link.replace(/\s+/g, "-");
      link = link.replace(/[^\w\-]+/g, "");
      return link;
    };

    async function fetchSuggestedPosts() {
      try {
        const fetchedPosts = await fetchPosts();
        // Exclude the current post and limit to 3 suggested posts
        const filteredPosts = fetchedPosts
          .filter((p) => transformTitleToLink(p.title) !== postTitle)
          .slice(0, 4);
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

  const handleShare = async () => {
    const shareData = {
      title: post?.title || "Post",
      text: post?.title || "Check out this post",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback: Copy link to clipboard
      navigator.clipboard.writeText(shareData.url).then(
        () => alert("Link copied to clipboard!"),
        (err) => console.error("Failed to copy link:", err)
      );
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const readingTime = post ? calculateReadingTime(post.content) : 0;

  return (
    <div className="mt-10 lg:grid lg:grid-cols-3 lg:gap-10">
      <div className="lg:col-span-2">
        <div>
          {post?.images && post?.images.length > 0 ? (
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${post?.images[0].url}`}
              alt={post.title}
              className="w-full h-auto object-cover rounded-lg "
            />
          ) : (
            "No Image"
          )}
        </div>
        <div className="my-4">
          <h1 className="text-4xl font-bold">{post?.title}</h1>
        </div>
        <div className="flex items-center gap-5">
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
          <div className="ml-5">
            <Badge variant="secondary">{post?.views} views</Badge>
            <Badge variant="secondary">{readingTime} min read</Badge>
          </div>
        </div>
        <div className="mt-10">
          <div
            dangerouslySetInnerHTML={{ __html: post?.content }}
            className="prose lg:prose-xl"
          />
        </div>
        <div className="mt-4">
          <button
            onClick={handleShare}
            className="px-4 py-2 bg-dgreen text-white rounded-lg"
          >
            Share this post
          </button>
        </div>
        <Comments postId={post?.id}></Comments>
      </div>
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold mb-10 text-dgreen mt-20 lg:mt-0 ">
          Suggested Posts
        </h2>
        <div className="space-y-4">
          {suggestedPosts.map((suggestedPost) => {
            const suggestedReadingTime = calculateReadingTime(
              suggestedPost.content
            );
            return (
              <SidedPosts
                key={suggestedPost.id}
                views={suggestedPost.views}
                readingTime={suggestedReadingTime}
                date={new Date(suggestedPost.createdAt).toISOString()}
                title={suggestedPost.title}
                imageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${
                  suggestedPost.images[0]?.url || "/default-image.jpg"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostView;
