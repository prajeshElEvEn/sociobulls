import React, { useState } from "react";
import { Avatar, Form, Button, Input } from "antd";
import { Comment } from "@ant-design/compatible";
const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
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
const CommentForm = () => {
  const [formData, setFormData] = useState({
    comment: "",
  });
  const handleSubmit = () => {
    console.log(formData);
    setFormData({
      comment: "",
    });
  };
  return (
    <Comment
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <Editor
          onChange={(e) => {
            setFormData({ ...formData, comment: e.target.value });
          }}
          onSubmit={handleSubmit}
          value={formData.comment}
        />
      }
    />
  );
};

export default CommentForm;
