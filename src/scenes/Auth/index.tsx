import React from "react";
import { Form, Checkbox, Button, Row, Layout, Col } from "antd";
import { GoogleOutlined } from '@ant-design/icons';
import Title from "antd/lib/typography/Title";
import Input from "antd/lib/input/Input";
import "./index.scss";
const { Content } = Layout;
interface AuthProps {}

const Auth = (props: AuthProps) => {
  return (
    <Row>
      <Layout className="h-100vh layout">
        <Col className="pt-4" span="12" offset="6">
          <Form>
            <Title className = "text-center">Login</Title>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" >
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" icon = {<GoogleOutlined />}>
                Login using Google
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Layout>
    </Row>
  );
};

export default Auth;
