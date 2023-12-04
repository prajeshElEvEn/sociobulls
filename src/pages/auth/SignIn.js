import React from "react";
import { Button, Form, Input } from "antd";
import { KeyOutlined, MailOutlined } from "../../assets/icons";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      form={form}
      name="signin"
      onFinish={onFinish}
      layout="vertical"
      style={{
        maxWidth: 400,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="name@example.com" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password prefix={<KeyOutlined />} placeholder="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>{" "}
        or <Link to="/auth/signup">Sign Up</Link>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
