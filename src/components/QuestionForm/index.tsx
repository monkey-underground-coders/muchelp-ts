import React from "react"

import "./index.scss"
import { Upload, Button, Form, Input, Typography } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import TextArea from "antd/lib/input/TextArea";

const { Title } = Typography

interface QuestionFormProps {

}

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const QuestionForm = (props: QuestionFormProps) => {
  const onFinish = (values: any) => {
    console.log(values)
  }

  return <div className="QuestionForm__content">
    <Form className="QuestionForm__content_form" name="nest-messages" onFinish={onFinish}>
      <div className="QuestionForm__content_form_items">
        {/* <div className="GuestScene__content_h1">
          <h1>Task Description</h1>
        </div> */}
        <Title>Описание задачи</Title>
        <Form.Item name={['user', 'Your task']} rules={[{ required: true }]}>
          <TextArea placeholder="Your task" autoSize={{ minRows: 4, maxRows: 10 }} />
        </Form.Item>
        <Form.Item name={['Name']} rules={[{ required: true }]}>
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name={['Email']} rules={[{ type: 'email', required: true }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </div>

      <div className="QuestionForm__content_form_buttons">
        <Button className="QuestionForm__content_form_button" type="primary" htmlType="submit">
          Send your task
        </Button>
      </div>
    </Form>
  </div>
}

export default QuestionForm
