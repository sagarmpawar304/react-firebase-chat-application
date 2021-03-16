import React, { FC } from 'react';
import { Menu } from 'antd';
import RoomItem from './RoomItem';
import MenuItem from 'antd/lib/menu/MenuItem';
import styled from 'styled-components';
import { RoomsProvider, useRoomsProvider } from '../../context/rooms.context';

const Item = styled(MenuItem)`
  height: auto !important;
  line-height: 25px !important;
  h2 {
    margin-bottom: 0;
  }
`;

const RoomsList: FC<{ topSidebarHeight?: number }> = ({ topSidebarHeight }) => {
  const rooms = useRoomsProvider();

  return (
    <RoomsProvider>
      <Menu
        mode="vertical"
        className="overflow-y-scroll custom-scroll"
        style={{ height: `calc(100% - ${topSidebarHeight}px)` }}
      >
        {rooms.length > 0 &&
          rooms.map((room, index) => (
            <Item key={index}>
              <RoomItem room={room} />
            </Item>
          ))}
      </Menu>
    </RoomsProvider>
  );
};

export default RoomsList;
