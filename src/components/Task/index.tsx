import React from "react";
import { Card, Collapse, Button } from "antd";
const { Panel } = Collapse;

interface TaskProps {}

const Task = () => {
  const header = (
    <div
      style={{
        height: "5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3>Василий Васильев</h3>
      <Button type="primary">В процессе</Button>
    </div>
  );

  return (
    <Card type="inner" bordered={false}>
      <Collapse bordered={false} defaultActiveKey={["0"]}>
        <Panel header={header} key="1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea
            accusantium, hic at impedit quam, odio iusto ipsum numquam molestiae
            dolorem laborum, ex animi inventore omnis consequuntur labore magnam
            expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Task;
