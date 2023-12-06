import React from "react";
import { Button, Space } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "../../assets/icons";
import { Link } from "react-router-dom";
import { LoginForm, ProFormText } from "@ant-design/pro-components";

const SignUp = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <LoginForm
      title="SocioBulls"
      subTitle="social media for algobulls"
      logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      actions={
        <Space>
          Already have an account? <Link to="/auth">Sign In</Link>
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
              Sign Up
            </Button>,
            ...doms,
          ];
        },
      }}
    >
      <ProFormText
        name="Name"
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
};

export default SignUp;
