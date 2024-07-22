"use client";
import React, { useEffect, useState } from "react";
import Divider from "./Divider";
import { Textarea } from "./ui/textarea";
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

    try {
      const newComment = await createComment(content, postId, "Anonymous"); // Replace "Anonymous" with actual user name
      setComments((prevComments) => [newComment, ...prevComments]);
      setContent("");
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
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something..."
        />
        <Button
          variant="outline"
          className="bg-dgreen text-dgreen-foreground mt-4"
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
