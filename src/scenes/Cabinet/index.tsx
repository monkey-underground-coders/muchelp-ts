import React from "react";

import Navbar from "../../components/Navbar";
import { Layout, Col, Row, Card } from "antd";
const { Content } = Layout;

interface CabinetSceneProps {}

const CabinetScene = (props: CabinetSceneProps) => {
  return (
    <Layout className="CabinetScene layout h-100vh">
      <Navbar />
      <Content>
        <Col className="pt-4" span="12" offset="6">
          <Card bordered={false}>
          </Card>
        </Col>
      </Content>
    </Layout>
  );
};

export default CabinetScene;
