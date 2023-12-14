import { Comment as AntComment } from "@ant-design/compatible";
import { Avatar, Tooltip } from "antd";
import moment from "moment";
import { Comment } from "../../app/definitions";
import { useState } from "react";

export default function CommentCard({ comment }: { comment: Comment }) {
  const [author, setAuthor] = useState({
    id: "",
    name: "",
    avatar: "",
  });
  return (
    <AntComment
      author={author?.name}
      avatar={
        <Avatar src={author?.avatar} alt={author?.name}>
          {author?.name?.charAt(0)}
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
}
