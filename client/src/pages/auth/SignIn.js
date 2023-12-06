import React from "react";
import { LoginForm, ProFormText } from "@ant-design/pro-components";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, MailOutlined } from "../../assets/icons";

const handleSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <LoginForm
      title="SocioBulls"
      subTitle="social media for algobulls"
      logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      actions={
        <Space>
          Don't have an account? <Link to="/auth/signup">Sign Up</Link>
        </Space>
      }
      onFinish={handleSubmit}
      submitter={{
        render: (props, doms) => {
          console.log(props);
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
};

export default SignIn;
