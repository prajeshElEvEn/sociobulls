import { useState } from "react";
import { ProCard } from "@ant-design/pro-components";
import { Avatar, Tooltip } from "antd";
import { Comment, Icon } from "@ant-design/compatible";
import CommentLayout from "../layouts/CommentLayout";
import moment from "moment";
import { Post, User } from "../../app/definitions";

export default function PostCard({ user, post }: { user: User; post: Post }) {
  const [author, setAuthor] = useState({
    id: "",
    name: "",
    avatar: "",
  });
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const handleLike = async () => {};

  const handleBookmark = async () => {};

  const handleComment = () => {
    setOpen(true);
  };

  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        <Icon type="heart" onClick={handleLike} />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>
        {post?.likes.length || 0}
      </span>
    </span>,
    <span key="comment-basic-bookmark">
      <Tooltip title="Bookmark">
        <Icon type="save" onClick={handleBookmark} />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>
        {post?.bookmarks.length || 0}
      </span>
    </span>,
    <span key="comment-basic-comment">
      <Tooltip title="Comment">
        <Icon type="message" onClick={handleComment} />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>
        {post?.comments.length || 0}
      </span>
    </span>,
  ];

  return (
    <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <Comment
        actions={actions}
        author={author?.name}
        avatar={
          <Avatar src={author?.avatar} alt={author?.name}>
            {author?.name?.charAt(0)}
          </Avatar>
        }
        content={post?.title}
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment(post?.createdAt).fromNow()}</span>
          </Tooltip>
        }
      />

      <CommentLayout user={user} post={post} onClose={onClose} open={open} />
    </ProCard>
  );
}
