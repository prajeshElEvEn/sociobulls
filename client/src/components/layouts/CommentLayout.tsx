import React from "react";
import { Drawer } from "antd";
import CommentCard from "../cards/CommentCard";
import CommentForm from "../forms/CommentForm";
import { Post } from "../../types"; // Adjust the import path based on your project structure

interface CommentLayoutProps {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  post: Post;
  onClose: () => void;
  open: boolean;
}

const CommentLayout: React.FC<CommentLayoutProps> = ({
  id,
  user,
  post,
  onClose,
  open,
}) => {
  return (
    <Drawer title="Comments" placement="right" onClose={onClose} visible={open}>
      <CommentForm id={id} user={user} post={post} />
      {post?.comments.map((comment) => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </Drawer>
  );
};

export default CommentLayout;
