import React from "react";
import "./index.scss";
import { Typography, Comment, Button } from "antd";

const { Title, Paragraph } = Typography;

interface QuestionStatusProps {}

const QuestionStatus = (props: QuestionStatusProps) => {
  return (
    <>
      <div className="question-status__title-section">
        <Title>Ваша последняя заявка</Title>
        <Button type="primary">В процессе</Button>
      </div>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea
        accusantium, hic at impedit quam, odio iusto ipsum numquam molestiae
        dolorem laborum, ex animi inventore omnis consequuntur labore magnam
        expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consequuntur, impedit. Velit illum quia, obcaecati perspiciatis quis hic
        unde, cupiditate quo dignissimos error eum voluptatibus. Neque corrupti
        sapiente quaerat ea totam? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat, sit? Eveniet amet ad molestias, quis
        exercitationem accusantium aut explicabo voluptatem dicta voluptas nobis
        ex! Illum expedita explicabo voluptatibus reprehenderit repellat.
      </Paragraph>
      <Comment
        author={
          <a className="default-cursor">
            <h1>Комментарий от авторов:</h1>
          </a>
        }
        content={<p>Проверил - хуйня полная. Пашол нахуй.</p>}
      />
    </>
  );
};

export default QuestionStatus;
