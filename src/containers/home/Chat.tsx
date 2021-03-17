import React from 'react';
import { useLocation } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';

import Top from '../../components/Chat-Window/Top';
import Messages from '../../components/Chat-Window/Messages';
import Bottom from '../../components/Chat-Window/Bottom';
import { useRooms } from '../../context/rooms.context';
import { CurrentRoomContextProvider } from '../../context/current-room.context';

const Chat = () => {
  const chatId = useLocation().pathname.split('/')[2];
  const rooms = useRooms();

  if (!rooms) {
    return (
      <h1 className="text-center">
        <Spin spinning indicator={<LoadingOutlined />} size="large" />
      </h1>
    );
  }

  const currentRoom = rooms.find(room => room.id === chatId);

  if (!currentRoom) {
    return (
      <Title level={4} className="text-center mt-page">
        Chat "{chatId}" not Found{' '}
      </Title>
    );
  }

  return (
    <CurrentRoomContextProvider data={currentRoom}>
      <div className="chat-top">
        <Top />
      </div>

      <div className="chat-middle">
        <Messages />
      </div>

      <div className="chat-bottom">
        <Bottom />
      </div>
    </CurrentRoomContextProvider>
  );
};

export default Chat;
