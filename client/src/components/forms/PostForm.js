import { ModalForm, ProFormTextArea } from "@ant-design/pro-components";
import { Button } from "antd";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { createPost, getPosts } from "../../features/post/postSlice";

const PostForm = () => {
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleSubmit = async (values) => {
    await dispatch(createPost(values));
    await dispatch(getPosts());
    formRef.current?.resetFields();
    return true;
  };

  return (
    <ModalForm
      title="Create Post"
      trigger={<Button type="primary">Create Post</Button>}
      submitter={{
        searchConfig: {
          submitText: "Submit",
          resetText: "Cancel",
        },
      }}
      onFinish={handleSubmit}
      formRef={formRef}
    >
      <ProFormTextArea
        colProps={{ span: 24 }}
        name="title"
        label="Post"
        placeholder="What's on your mind?"
        rules={[
          {
            required: true,
            message: "Post is required!",
          },
        ]}
      />
    </ModalForm>
  );
};

export default PostForm;
