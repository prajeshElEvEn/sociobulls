import { useRef } from "react";
import { Button, Form, Upload } from "antd";
import { ModalForm, ProFormText } from "@ant-design/pro-components";
import { UploadOutlined } from "../../assets/icons";

export default function ProfileForm() {
  const formRef = useRef(null);

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
      onFinish={async (values) => {
        console.log(values);
        formRef.current?.resetFields();
        return true;
      }}
      formRef={formRef}
    >
      <ProFormText width="md" name="name" label="Name" placeholder="John Doe" />
      <Form.Item
        name="avatar"
        label="Avatar"
        valuePropName="file"
        getValueFromEvent={(e) => {
          if (Array.isArray(e)) {
            return e;
          }
          return e?.file.originFileObj;
        }}
      >
        <Upload name="avatar" listType="picture" maxCount={1}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
    </ModalForm>
  );
}
