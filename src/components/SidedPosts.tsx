import { formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { FaClock, FaEye } from "react-icons/fa";
interface SidedPostsProps {
  imageUrl: string;
  title: string;
  date: string;
  views: number;
  readingTime: number;
}

const SidedPosts: React.FC<SidedPostsProps> = ({
  imageUrl,
  title,
  date,
  views,
  readingTime,
}) => {
  const router = useRouter();
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
    <div
      className="flex gap-5 cursor-pointer"
      onClick={() => {
        handleOnClick();
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="rounded-md md:mb-6 mb-5 w-20 h-20 object-cover object-center"
      />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex gap-4 text-gray-500">
          <span>{formatDate(date.toUpperCase())}</span>
          <span>{views} views</span>
          <span>{readingTime} min read</span>
        </div>
      </div>
    </div>
  );
};
export default SidedPosts;
