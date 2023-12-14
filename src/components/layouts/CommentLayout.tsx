import { Drawer } from "antd";
import CommentCard from "../cards/CommentCard";
import CommentForm from "../forms/CommentForm";
import { Post, User } from "../../app/definitions";

export default function CommentLayout({
  user,
  post,
  onClose,
  open,
}: {
  user: User;
  post: Post;
  onClose: () => void;
  open: boolean;
}) {
  return (
    <Drawer title="Comments" placement="right" onClose={onClose} visible={open}>
      <CommentForm user={user} post={post} />
      {post?.comments.map((comment) => (
        <CommentCard comment={comment} />
      ))}
    </Drawer>
  );
}
