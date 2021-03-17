import React, { FC } from 'react';
import { Menu, Spin } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { useRooms } from '../../context/rooms.context';
import RoomItem from './RoomItem';
import Title from 'antd/lib/typography/Title';

const Item = styled(MenuItem)`
  height: auto !important;
  line-height: 25px !important;
  h2 {
    margin-bottom: 0;
  }
`;

const antIcon = <LoadingOutlined spin />;

const RoomsList: FC<{ topSidebarHeight?: number }> = ({ topSidebarHeight }) => {
  const rooms = useRooms();
  return (
    <>
      {rooms.length === 0 && (
        <Title level={2} className="text-center">
          <Spin indicator={antIcon} size="large" spinning />
        </Title>
      )}
      <Menu
        mode="vertical"
        className="overflow-y-scroll custom-scroll"
        style={{ height: `calc(100% - ${topSidebarHeight}px)` }}
      >
        {rooms.length > 0 &&
          rooms.map((room, index) => (
            <Item key={index}>
              <Link to={`/chat/${room.id}`}>
                <RoomItem room={room} />
              </Link>
            </Item>
          ))}
      </Menu>
    </>
  );
};

export default RoomsList;
