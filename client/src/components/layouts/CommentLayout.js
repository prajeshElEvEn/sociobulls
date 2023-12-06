import React from "react";
import { Drawer } from "antd";
import CommentCard from "../cards/CommentCard";
import CommentForm from "../forms/CommentForm";

const CommentLayout = ({ onClose, open }) => {
  return (
    <Drawer title="Comments" placement="right" onClose={onClose} open={open}>
      <CommentForm />
      <CommentCard />
    </Drawer>
  );
};

export default CommentLayout;
