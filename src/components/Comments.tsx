"use client";
import React, { useEffect, useState } from "react";
import Divider from "./Divider";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input"; // Import Input component
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import CommentCard from "./CommentCard";
import { Comment } from "@/lib/types";
import { fetchCommentsByPostId, createComment } from "@/actions/postsActions";

interface CommentsProps {
  postId: number;
}

const Comments: React.FC<CommentsProps> = ({ postId = -1 }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>(""); // State for author name
  const [password, setPassword] = useState<string>(""); // State for password

  useEffect(() => {
    async function getComments() {
      try {
        const fetchedComments = await fetchCommentsByPostId(postId);
        setComments(fetchedComments);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
        setError("Failed to fetch comments");
      } finally {
        setLoading(false);
      }
    }

    if (postId > 0) {
      getComments();
    }
  }, [postId]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!author) {
      alert("Please enter your name and password.");
      return;
    }

    try {
      const newComment = await createComment(content, postId, author);
      setComments((prevComments) => [newComment, ...prevComments]);
      setContent("");
      setAuthor("");
      setPassword("");
    } catch (error) {
      console.error("Failed to create comment:", error);
    }
  };

  return (
    <div className="mt-20">
      <h2 className="font-bold text-xl text-dgreen flex items-center gap-5">
        Comments <Badge className="bg-dgreen">{comments.length}</Badge>
      </h2>
      <Divider className="bg-dgreen mt-4 mb-5" />
      <form onSubmit={handleCommentSubmit}>
        <Input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your Name"
          className="mb-4"
        />
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something..."
          className="mb-4"
        />
        <Button
          variant="outline"
          className="bg-dgreen text-dgreen-foreground"
          type="submit"
        >
          Comment
        </Button>
      </form>
      <div className="mt-10 flex flex-col gap-8">
        {loading ? (
          <p>Loading comments...</p>
        ) : error ? (
          <p>{error}</p>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              name={comment.author}
              likes={comment.likes || 0} // assuming likes are part of comment object
              date={comment.createdAt}
              content={comment.content}
            />
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
