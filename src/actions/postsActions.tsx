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