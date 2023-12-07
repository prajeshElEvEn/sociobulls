import React, { useEffect, useState } from "react";
import { ProCard } from "@ant-design/pro-components";
import { Avatar, Tooltip } from "antd";
import { Comment, Icon } from "@ant-design/compatible";
import CommentLayout from "../layouts/CommentLayout";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../features/post/postSlice";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const [like, setLike] = useState({
    id: "",
    like: {
      id: "",
    },
  });

  const [bookmark, setBookmark] = useState({
    id: "",
    bookmark: {
      id: "",
    },
  });

  const [actionLike, setActionLike] = useState("unliked");
  const [likes, setLikes] = useState(0);
  const [actionBookmark, setActionBookmark] = useState("unbookmarked");
  const [bookmarks, setBookmarks] = useState(0);
  const [actionComment, setActionComment] = useState("uncommented");
  const [comments, setComments] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLike({
      id: post._id,
      like: {
        id: id,
      },
    });
  }, [id, post]);

  useEffect(() => {
    setBookmark({
      id: post._id,
      bookmark: {
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
          theme={actionComment === "commented" ? "filled" : "outlined"}
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
            src={`${process.env.REACT_APP_AVATAR_URL}${post?.author.avatar}`}
            alt={post?.author.name}
          />
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
