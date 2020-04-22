import React from "react";
import { Form, Checkbox, Button } from "antd";
import Title from "antd/lib/typography/Title";
import Input from "antd/lib/input/Input";

interface AuthProps {}
const Auth = (props: AuthProps) => {
  return (
    <>
      <Form initialValues={{ remember: true }}>
        <Title>Login</Title>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Auth;
