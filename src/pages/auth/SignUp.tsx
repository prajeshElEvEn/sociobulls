import { Button, Space } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "../../assets/icons";
import { Link } from "react-router-dom";
import { LoginForm, ProFormText } from "@ant-design/pro-components";
import { BrandLogo } from "../../assets/images";

export default function SignUp() {
  return (
    <LoginForm
      title="SocioBulls"
      subTitle="Social media for AlgoBulls"
      logo={BrandLogo}
      actions={
        <Space>
          Already have an account? <Link to="/auth">Sign In</Link>
        </Space>
      }
      onFinish={async (values) => {
        console.log(values);
        return true;
      }}
      submitter={{
        render: (props, doms) => {
          return [
            <Button
              type="primary"
              key="submit"
              onClick={() => props.form?.submit?.()}
            >
              Sign Up
            </Button>,
            ...doms,
          ];
        },
      }}
    >
      <ProFormText
        name="name"
        fieldProps={{
          size: "large",
          prefix: <UserOutlined className={"prefixIcon"} />,
        }}
        placeholder={"John Doe"}
        rules={[
          {
            required: true,
            message: "Name is required!",
          },
        ]}
      />
      <ProFormText
        name="email"
        fieldProps={{
          size: "large",
          prefix: <MailOutlined className={"prefixIcon"} />,
        }}
        placeholder={"email@example.com"}
        rules={[
          {
            required: true,
            message: "Email id is required!",
          },
        ]}
      />

      <ProFormText.Password
        name="password"
        fieldProps={{
          size: "large",
          prefix: <LockOutlined className={"prefixIcon"} />,
        }}
        placeholder={"password"}
        rules={[
          {
            required: true,
            message: "Password is required!",
          },
        ]}
      />
      <ProFormText.Password
        name="confirm"
        fieldProps={{
          size: "large",
          prefix: <LockOutlined className={"prefixIcon"} />,
        }}
        placeholder={"password"}
        rules={[
          {
            required: true,
            message: "Password is required!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      />
    </LoginForm>
  );
}
