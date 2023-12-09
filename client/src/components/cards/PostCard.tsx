import React, { useEffect, useState } from "react";
import { ProCard } from "@ant-design/pro-components";
import { Avatar, Tooltip } from "antd";
import { Comment, Icon } from "@ant-design/compatible";
import CommentLayout from "../layouts/CommentLayout";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../features/post/postSlice";

interface LikeBookmark {
  id: string;
  like: {
    id: string;
  };
}

interface PostCardProps {
  post: {
    _id: string;
    likes: { id: string }[];
    bookmarks: { id: string }[];
    comments: { id: string }[];
    author: {
      name: string;
      avatar?: string;
    };
    title: string;
    createdAt: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const [like, setLike] = useState<LikeBookmark>({
    id: "",
    like: {
      id: "",
    },
  });

  const [bookmark, setBookmark] = useState<LikeBookmark>({
    id: "",
    like: {
      id: "",
    },
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLike({
      id: post?._id,
      like: {
        id: id,
      },
    });
  }, [id, post]);

  useEffect(() => {
    setBookmark({
      id: post?._id,
      like: {
        id: id,
      },
    });
  }, [id, post]);

  const onClose = () => {
    setOpen(false);
  };

  const handleLike = async () => {
    await dispatch(updatePost(like));
  };

  const handleBookmark = async () => {
    await dispatch(updatePost(bookmark));
  };

  const handleComment = () => {
    setOpen(true);
  };

  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        <Icon
          type="heart"
          theme={
            post?.likes.some((like) => like.id === id) ? "filled" : "outlined"
          }
          onClick={handleLike}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>
        {post?.likes.length}
      </span>
    </span>,
    <span key="comment-basic-bookmark">
      <Tooltip title="Bookmark">
        <Icon
          type="save"
          theme={
            post?.bookmarks.some((bookmark) => bookmark.id === id)
              ? "filled"
              : "outlined"
          }
          onClick={handleBookmark}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>
        {post?.bookmarks.length}
      </span>
    </span>,
    <span key="comment-basic-comment">
      <Tooltip title="Comment">
        <Icon
          type="message"
          theme={
            post?.comments.some((comment) => comment.id === id)
              ? "filled"
              : "outlined"
          }
          onClick={handleComment}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>
        {post?.comments.length}
      </span>
    </span>,
  ];

  return (
    <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <Comment
        actions={actions}
        author={post?.author.name}
        avatar={
          <Avatar
            src={
              post?.author.avatar
                ? `${process.env.REACT_APP_AVATAR_URL}${post?.author.avatar}`
                : undefined
            }
            alt={post?.author.name}
          >
            {post?.author.name.charAt(0)}
          </Avatar>
        }
        content={post?.title}
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment(post?.createdAt).fromNow()}</span>
          </Tooltip>
        }
      />

      <CommentLayout
        id={id}
        user={user}
        post={post}
        onClose={onClose}
        open={open}
      />
    </ProCard>
  );
};

export default PostCard;
