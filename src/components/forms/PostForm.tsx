import { useRef } from "react";
import { ModalForm, ProFormTextArea } from "@ant-design/pro-components";
import { Button } from "antd";

export default function PostForm() {
  const formRef = useRef(null);
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
      onFinish={async (values) => {
        console.log(values);
        formRef.current?.resetFields();
        return true;
      }}
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
}
