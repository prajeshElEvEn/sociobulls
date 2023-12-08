import React, { useEffect } from "react";
import { LoginForm, ProFormText } from "@ant-design/pro-components";
import { Button, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, MailOutlined } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { BrandLogo } from "../../assets/images";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(login(values));
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
