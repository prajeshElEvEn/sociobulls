import { Button, Form, Input, Space, Upload } from "antd";
import React from "react";
import { UploadOutlined } from "../../assets/icons";

const ProfileForm = ({ handleCancel }) => {
  const [form] = Form.useForm();
  const avatarFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
    handleCancel();
  };
  return (
    <Form
      layout="vertical"
      form={form}
      name="edit-profile"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item
        name="avatar"
        label="Avatar"
        valuePropName="fileList"
        getValueFromEvent={avatarFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
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

export default ProfileForm;
