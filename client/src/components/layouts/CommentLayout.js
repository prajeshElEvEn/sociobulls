import React from "react";
import { Drawer } from "antd";
import CommentCard from "../cards/CommentCard";
import CommentForm from "../forms/CommentForm";

const CommentLayout = ({ id, user, post, onClose, open }) => {
  return (
    <Drawer title="Comments" placement="right" onClose={onClose} open={open}>
      <CommentForm id={id} user={user} post={post} />
      {post?.comments.map((comment) => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </Drawer>
  );
};

export default CommentLayout;
