import React from "react"

import "./index.scss"
import { Form, Input, Button } from 'antd'

interface QuestionFormProps {

}

const QuestionForm = (props: QuestionFormProps) => {
  const onFinish = (values: any) => {
    console.log(values)
  }

  return <div className="QuestionForm__content">
    <Form className="QuestionForm__content_form" name="nest-messages" onFinish={onFinish}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'Your task']} label="Your task">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button className="QuestionForm__content_form_button" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
}

export default QuestionForm
