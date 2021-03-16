import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useModalState } from '../../utils/customHooks';
import Modal from 'antd/lib/modal/Modal';
import { Form } from 'antd';
import styled from 'styled-components';
import firebase from 'firebase/app';
import { database } from '../../utils/firebase';

const Item = styled(Form.Item)`
  display: flex;
  flex-direction: columns;
  margin-bottom: 1rem;
  .ant-form-item-label {
    display: block;
    width: 100%;
    text-align: left;
  }
`;
const validateMessages = {
  required: '${label} is required!',
};

const initialValues = {
  name: '',
  description: '',
};

const CreateRoomBtnModal = () => {
  const [formValue, setFormValue] = useState(initialValues);
  const [loading, setLoading] = useState<boolean>(false);
  const { isOpen, open, close } = useModalState();

  const onFinish = async (values: any) => {
    setLoading(true);
    const newChatData = {
      ...values,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    };

    try {
      await database.ref('rooms').push(newChatData);
      message.success(`${values.name} has been created`);
      setLoading(false);
      setFormValue(initialValues);
      close();
    } catch (err) {
      setLoading(false);
      message.error(err.message);
    }
  };
  return (
    <div className="mt-1">
      <Button type="primary" block icon={<PlusOutlined />} onClick={open}>
        Create New Chat Room
      </Button>

      <Modal
        visible={isOpen}
        onCancel={close}
        title="Create New Chat Room"
        footer={null}
      >
        <Form
          name="form"
          validateMessages={validateMessages}
          onFinish={onFinish}
          initialValues={formValue}
        >
          <Item
            label="Chat Name"
            rules={[{ required: true, type: 'string' }]}
            name="name"
            id="name"
          >
            <Input placeholder="Enter chat room name...." />
          </Item>
          <Item
            label="Description"
            rules={[{ required: true, type: 'string' }]}
            name="description"
            id="description"
          >
            <Input.TextArea
              rows={5}
              name="description"
              placeholder="Enter chat room description"
            />
          </Item>

          <Item>
            <Button block type="primary" htmlType="submit" disabled={loading}>
              Create New Chat Room
            </Button>
          </Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateRoomBtnModal;
