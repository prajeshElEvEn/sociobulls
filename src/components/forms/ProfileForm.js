import { Button, Form, Upload } from "antd";
import React from "react";
import { ModalForm, ProFormText } from "@ant-design/pro-components";
import { UploadOutlined } from "../../assets/icons";

const ProfileForm = () => {
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <ModalForm
      title="Edit Profile"
      trigger={<Button>Edit Profile</Button>}
      submitter={{
        searchConfig: {
          submitText: "Save",
          resetText: "Cancel",
        },
      }}
      onFinish={handleSubmit}
    >
      <ProFormText width="md" name="name" label="Name" placeholder="John Doe" />
      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
    </ModalForm>
  );
};

export default ProfileForm;
