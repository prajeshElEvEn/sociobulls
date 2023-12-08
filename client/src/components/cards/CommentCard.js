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
          src={
            comment?.avatar
              ? `${process.env.REACT_APP_AVATAR_URL}${comment?.avatar}`
              : null
          }
          alt={comment?.name}
        >
          {comment?.name.charAt(0)}
        </Avatar>
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
