// src/actions/postsActions.ts

import { Post } from "@/lib/types";

export async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch posts");
    }

    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export async function fetchPostsByTitle(title: string): Promise<Post> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/post/${title}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch posts");
    }

    return data.post;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
export async function fetchPostsByCategories(
  category: string
): Promise<Post[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/category/${category}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch posts");
    }

    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
export async function incrementViewCount(title: string): Promise<Post> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/post/${title}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch posts");
    }
    console.log(data);
    return data.post;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
export async function fetchCommentsByPostId(
  postId: number
): Promise<Comment[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/comments/${postId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch comments");
    }

    return data.comments || [];
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}
export async function createComment(
  content: string,
  postId: number,
  author: string
): Promise<Post> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, postId, author }),
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch posts");
    }
    console.log(data);
    return data.comment;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
