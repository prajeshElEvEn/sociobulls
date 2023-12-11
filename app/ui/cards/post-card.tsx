"use client";
import { getPosts } from "@/app/lib/data";
import { Post } from "@/app/lib/definitions";
import { Comment, Icon } from "@ant-design/compatible";
import { ProCard } from "@ant-design/pro-components";
import { Avatar, Tooltip } from "antd";
import moment from "moment";

export default async function PostCard() {
  const posts = await getPosts();

  // const [open, setOpen] = useState(false);

  // const onClose = () => {
  //   setOpen(false);
  // };

  const handleLike = async () => {
    //    await dispatch(updatePost(like));
  };

  const handleBookmark = async () => {
    //    await dispatch(updatePost(bookmark));
  };

  const handleComment = () => {
    // setOpen(true);
  };

  return (
    <>
      {posts.map((post: Post) => {
        <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <Comment
            actions={[
              <span key="comment-basic-like">
                <Tooltip title="Like">
                  <Icon type="heart" onClick={handleLike} />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: "auto" }}>
                  {post?.likes?.length | 0}
                </span>
              </span>,
              <span key="comment-basic-bookmark">
                <Tooltip title="Bookmark">
                  <Icon type="save" onClick={handleBookmark} />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: "auto" }}>
                  {post?.bookmarks?.length | 0}
                </span>
              </span>,
              <span key="comment-basic-comment">
                <Tooltip title="Comment">
                  <Icon type="message" onClick={handleComment} />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: "auto" }}>
                  {post?.comments?.length | 0}
                </span>
              </span>,
            ]}
            author={post?.author?.name}
            avatar={
              <Avatar src={post?.author?.avatar} alt={post?.author?.name}>
                {"A"}
              </Avatar>
            }
            content={post?.title}
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment(post?.createdAt).fromNow()}</span>
              </Tooltip>
            }
          />

          {/* <CommentLayout
        id={id}
        user={user}
        post={post}
        onClose={onClose}
        open={open}
      /> */}
        </ProCard>;
      })}
    </>
  );
}
