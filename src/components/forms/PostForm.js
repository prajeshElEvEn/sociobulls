import { Button, Form, Input, Space } from "antd";
import React from "react";

const PostForm = ({ handleCancel }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
    handleCancel();
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="create-post"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="post"
        label="Post"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default PostForm;
