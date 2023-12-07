import { Comment } from "@ant-design/compatible";
import React from "react";
import { Avatar } from "antd";
import { Tooltip } from "antd";
import moment from "moment";

const CommentCard = ({ comment }) => {
  return (
    <Comment
      author={comment?.name}
      avatar={
        <Avatar
          src={`${process.env.REACT_APP_AVATAR_URL}${comment?.avatar}`}
          alt={comment?.name}
        />
      }
      content={comment?.title}
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment(comment?.createdAt).fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default CommentCard;
