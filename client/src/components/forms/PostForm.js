import {
  ModalForm,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { Button, Form, Input, Space } from "antd";
import React from "react";

const PostForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
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
    >
      <ProFormTextArea
        colProps={{ span: 24 }}
        name="post"
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
