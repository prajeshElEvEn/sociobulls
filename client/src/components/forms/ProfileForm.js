import { Button, Form, Upload } from "antd";
import React from "react";
import { ModalForm, ProFormText } from "@ant-design/pro-components";
import { UploadOutlined } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/users/userSlice";

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.file.originFileObj;
};

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);

  const handleSubmit = (values) => {
    dispatch(updateUser({ id: id, ...values }));
    return true;
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
        name="avatar"
        label="Avatar"
        valuePropName="file"
        getValueFromEvent={normFile}
      >
        <Upload name="avatar" listType="picture" maxCount={1}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
    </ModalForm>
  );
};

export default ProfileForm;
