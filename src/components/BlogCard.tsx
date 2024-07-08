import Image from "next/image";
import React from "react";
import Divider from "./Divider";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/utils";
interface BlogCardProps {
  imageUrl: string;
  title: string;
  category: string;
  date: string;
  content: string;
  isFeatured?: boolean; // Optional prop for featured posts
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  title,
  category,
  date,
  content,
  isFeatured,
}) => {
  const router = useRouter();
  const baseTitleClass = "text-3xl font-medium"; // Base title class
  const featuredTitleClass = isFeatured
    ? // Responsive font size for featured posts
      "md:text-5xl lg:text-3xl text-3xl font-medium"
    : // Responsive font size for recent posts
      "md:text-3xl lg:text-xl text-3xl font-medium";
  // Sanitize the content to remove unwanted styles
  const sanitizedContent = DOMPurify.sanitize(content, {
    ALLOWED_ATTR: ["href", "title", "target", "src", "alt"], // Allow only specific attributes
    ALLOWED_TAGS: [
      "a",
      "b",
      "i",
      "em",
      "strong",
      "u",
      "p",
      "br",
      "ul",
      "ol",
      "li",
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ],
  });
  const transformTitleToLink = (title: string) => {
    let link = title;

    link = link.replace(/\s+/g, "-");

    link = link.replace(/[^\w\-]+/g, "");

    return link;
  };
  const handleOnClick = () => {
    router.push(`/post/${transformTitleToLink(title)}`);
  };
  return (
    <div className="cursor-pointer" onClick={handleOnClick}>
      <img
        src={imageUrl}
        alt={title}
        className="rounded-md md:mb-6 mb-5 w-full  h-56 object-cover object-center"
      />
      <Divider color="bg-dgreen" />
      <div className="mt-3 mb-5 flex justify-between text-xs text-dgreen">
        <span>{category.toUpperCase()}</span>
        <span>{formatDate(date.toUpperCase())}</span>
      </div>
      <h2 className={featuredTitleClass}>{title}</h2>
      <p
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        className="text-gray-400 mt-1 lg:text-sm"
      ></p>
    </div>
  );
};

export default BlogCard;
