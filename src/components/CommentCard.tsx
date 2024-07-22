import { formatDate, getInitials } from "@/lib/utils";
import React from "react";
import { FaHeart } from "react-icons/fa";

interface CommentCardProps {
  name: string;
  likes?: number;
  date: string;
  content: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  name,
  likes,
  date,
  content,
}) => {
  return (
    <div className="sm:flex gap-5 ">
      <div className="h-12 w-12 flex items-center  justify-center font-bold bg-gray-300 text-dgreen rounded-full">
        {getInitials(name)}
      </div>
      <div>
        <h4 className="font-bold text-dgreen">{name}</h4>
        <p className="text-gray-600">{content}</p>
        <div className="mt-1 flex gap-3 items-center text-sm text-dgreen">
          {/* <FaHeart size={15} className="cursor-pointer text-dgreen text-xs" />
          <p>{likes} Likes</p>
          <p>|</p> */}
          <p>{formatDate(date.toUpperCase())}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
