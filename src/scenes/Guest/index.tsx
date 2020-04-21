import React from "react";

import "./index.scss";

import QuestionForm from "../../components/QuestionForm";
import Navbar from "../../components/Navbar";
import { Layout, Col, Row, Card } from "antd";
const { Content } = Layout;

interface GuestSceneProps {}

const GuestScene = (props: GuestSceneProps) => {
  return (
    <Row>
      <Layout className="GuestScene layout h-100vh">
        <Navbar />
        <Content>
          <Col className="pt-4" span="12" offset="6">
            <Card bordered={false}>
              <QuestionForm />
            </Card>
          </Col>
        </Content>
      </Layout>
    </Row>
  );
};

export default GuestScene;
