import React from "react";

import Task from "../../components/Task";

import Navbar from "../../components/Navbar";
import { Layout, Col, Typography, Card, Pagination } from "antd";
const { Title } = Typography;

const { Content } = Layout;

interface CabinetSceneProps {}

const CabinetScene = (props: CabinetSceneProps) => {
  const _renderedNotes = React.useMemo(
    () => [0, 0, 0].map((note) => <Task />),
    []
  );

  return (
    <Layout className="CabinetScene layout h-100vh">
      <Navbar />
      <Content>
        <Col className="pt-4" span="12" offset="6">
          <Card>
            <div style={{marginLeft: "1rem"}}>
              <Title>Заявки</Title>
            </div>
            {_renderedNotes}
            <Pagination style={{marginLeft: "1rem"}} defaultCurrent={1} total={50} />
          </Card>
        </Col>
      </Content>
    </Layout>
  );
};

export default CabinetScene;
