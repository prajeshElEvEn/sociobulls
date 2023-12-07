import React, { useState } from "react";
import { Avatar, Form, Button, Input } from "antd";
import { Comment } from "@ant-design/compatible";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../features/post/postSlice";
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

const CommentForm = ({ id, user, post }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: post?._id,
    comment: {
      id: id,
      name: user?.name,
      avatar: user?.avatar,
      title: "",
    },
  });

  const handleSubmit = () => {
    console.log(formData);
    dispatch(updatePost(formData));
    // Clear the comment after submitting
    setFormData((prevFormData) => ({
      ...prevFormData,
      comment: { ...prevFormData.comment, title: "" },
    }));
  };

  return (
    <Comment
      avatar={
        <Avatar
          src={`${process.env.REACT_APP_AVATAR_URL}${user?.avatar}`}
          alt={user?.name}
        />
      }
      content={
        <Editor
          onChange={(e) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              comment: { ...prevFormData.comment, title: e.target.value },
            }));
          }}
          onSubmit={handleSubmit}
          value={formData.comment.title}
        />
      }
    />
  );
};

export default CommentForm;
