import React, { useEffect } from "react";
import { Button, Space } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { LoginForm, ProFormText } from "@ant-design/pro-components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { BrandLogo } from "../../assets/images";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  useEffect(() => {
    if (status) {
      navigate("/");
    }
  }, [navigate, status]);

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
      onFinish={handleSubmit}
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
};

export default SignUp;
