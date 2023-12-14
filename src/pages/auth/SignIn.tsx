import { LoginForm, ProFormText } from "@ant-design/pro-components";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, MailOutlined } from "../../assets/icons/index";
import { BrandLogo } from "../../assets/images/index";

export default function SignIn() {
  return (
    <LoginForm
      title="SocioBulls"
      subTitle="Social media for AlgoBulls"
      logo={BrandLogo}
      actions={
        <Space>
          Don't have an account? <Link to="/auth/signup">Sign Up</Link>
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
              Sign In
            </Button>,
            ...doms,
          ];
        },
      }}
    >
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
    </LoginForm>
  );
}
