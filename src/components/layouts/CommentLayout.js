import React from "react";
import { Collapse, Drawer } from "antd";
import CommentCard from "../cards/CommentCard";
import CommentForm from "../forms/CommentForm";
import { CommentOutlined } from "../../assets/icons";

const CommentLayout = ({ onClose, open }) => {
  return (
    <Drawer title="Comments" placement="right" onClose={onClose} open={open}>
      <CommentForm />
      <CommentCard />
    </Drawer>
  );
};

export default CommentLayout;
