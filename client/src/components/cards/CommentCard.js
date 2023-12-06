import { Comment } from "@ant-design/compatible";
import React from "react";
import { Avatar } from "antd";
import { Tooltip } from "antd";
import moment from "moment";

const CommentCard = () => {
  return (
    <Comment
      author={"John Doe"}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
      }
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default CommentCard;
