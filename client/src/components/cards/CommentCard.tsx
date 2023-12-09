import { Comment as AntComment } from "@ant-design/compatible";
import React from "react";
import { Avatar, Tooltip } from "antd";
import moment from "moment";

interface CommentCardProps {
  comment: {
    name: string;
    avatar?: string;
    title: string;
    createdAt: string; // Assuming createdAt is of type string, update accordingly
  };
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <AntComment
      author={comment?.name}
      avatar={
        <Avatar
          src={
            comment?.avatar
              ? `${process.env.REACT_APP_AVATAR_URL}${comment?.avatar}`
              : undefined
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
