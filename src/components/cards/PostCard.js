import React, { useState } from "react";
import { ProCard } from "@ant-design/pro-components";
import { Avatar, Tooltip } from "antd";
import { Comment, Icon } from "@ant-design/compatible";
import CardOption from "./CardOption";
import { EllipsisOutlined } from "../../assets/icons";
import moment from "moment";
import CommentLayout from "../layouts/CommentLayout";

const PostCard = ({ user, children }) => {
  const [actionLike, setActionLike] = useState("unliked");
  const [likes, setLikes] = useState(0);
  const [actionBookmark, setActionBookmark] = useState("unbookmarked");
  const [bookmarks, setBookmarks] = useState(0);
  const [actionComment, setActionComment] = useState("uncommented");
  const [comments, setComments] = useState(0);
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const handleLike = () => {
    const newAction = actionLike === "liked" ? "unliked" : "liked";
    setActionLike(newAction);
    setLikes((prevLikes) =>
      newAction === "liked" ? prevLikes + 1 : prevLikes - 1
    );
  };
  const handleBookmark = () => {
    const newAction =
      actionBookmark === "bookmarked" ? "unbookmarked" : "bookmarked";
    setActionBookmark(newAction);
    setBookmarks((prevBookmarks) =>
      newAction === "bookmarked" ? prevBookmarks + 1 : prevBookmarks - 1
    );
  };
  const handleComment = () => {
    setOpen(true);
    // const newAction =
    //   actionComment === "commented" ? "uncommented" : "commented";
    // setActionComment(newAction);
    // setComments((prevComments) =>
    //   newAction === "commented" ? prevComments + 1 : prevComments - 1
    // );
  };

  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        <Icon
          type="heart"
          theme={actionLike === "liked" ? "filled" : "outlined"}
          onClick={handleLike}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>{likes}</span>
    </span>,
    <span key="comment-basic-bookmark">
      <Tooltip title="Bookmark">
        <Icon
          type="save"
          theme={actionBookmark === "bookmarked" ? "filled" : "outlined"}
          onClick={handleBookmark}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>{bookmarks}</span>
    </span>,
    <span key="comment-basic-comment">
      <Tooltip title="Comment">
        <Icon
          type="message"
          theme={actionComment === "commented" ? "filled" : "outlined"}
          onClick={handleComment}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>{comments}</span>
    </span>,
    <CardOption user={true} icon={<EllipsisOutlined />} />,
  ];

  return (
    <ProCard bordered>
      <Comment
        actions={actions}
        author={user}
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
      >
        {children}
      </Comment>
      <CommentLayout onClose={onClose} open={open} />
    </ProCard>
  );
};

export default PostCard;
