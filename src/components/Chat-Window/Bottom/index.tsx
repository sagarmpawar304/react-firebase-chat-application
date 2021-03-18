import React, { useState, useCallback } from 'react';
import { Input, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import firebase from 'firebase/app';
import { useLocation } from 'react-router-dom';

import { Profile, useProfileProvider } from '../../../context/profile.context';
import { database } from '../../../utils/firebase';

const { Search } = Input;

function assembleMessage(profile: Profile, chatId: string) {
  return {
    roomId: chatId,
    author: {
      name: profile.name,
      uid: profile.uid,
      createdAt: profile.createdAt,
      ...(profile.avatar ? { avatar: profile.avatar } : {}),
    },
    createdAt: firebase.database.ServerValue.TIMESTAMP,
    text: '',
  };
}

const Bottom = () => {
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const chatId = useLocation().pathname.split('/')[2];
  const { profile } = useProfileProvider();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const onSendMessage = async () => {
    if (!input.trim()) {
      return;
    }

    if (profile) {
      const messageData = assembleMessage(profile, chatId);
      messageData.text = input;

      const messageId = database.ref('/messages').push().key;
      const updates: any = {};

      updates[`/messages/${messageId}`] = messageData;
      updates[`/rooms/${chatId}/lastMessage`] = {
        ...messageData,
        msgId: messageId,
      };
      setLoading(true);
      try {
        await database.ref().update(updates);
        setInput('');
        setLoading(false);
      } catch (error) {
        message.error(error.message, 4);
        setLoading(false);
      }
    }
  };
  return (
    <>
      <Search
        value={input}
        onChange={handleChange}
        enterButton={<SendOutlined />}
        placeholder="Write new message here..."
        onSearch={onSendMessage}
        disabled={loading}
        loading={loading}
      />
    </>
  );
};

export default Bottom;
