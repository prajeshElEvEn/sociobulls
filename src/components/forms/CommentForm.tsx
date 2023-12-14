import { ChangeEvent } from "react";
import { Avatar, Form, Button, Input } from "antd";
import { Comment as AntComment } from "@ant-design/compatible";
import { useState } from "react";
import { Post, User } from "../../app/definitions";

const { TextArea } = Input;

interface EditorProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  submitting: boolean;
  value: string;
}

export function Editor({ onChange, onSubmit, submitting, value }: EditorProps) {
  return (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
}

export default function CommentForm({
  user,
  post,
}: {
  user: User;
  post: Post;
}) {
  const [formData, setFormData] = useState({
    title: "",
    author: {
      userId: "",
    },
  });

  return (
    <AntComment
      avatar={
        <Avatar src={user?.avatar} alt={user?.name}>
          {user?.name?.charAt(0)}
        </Avatar>
      }
      content={
        <Editor
          onSubmit={() => {
            // Handle submit logic here
          }}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
          submitting={true}
          value={formData.title}
        />
      }
    />
  );
}
