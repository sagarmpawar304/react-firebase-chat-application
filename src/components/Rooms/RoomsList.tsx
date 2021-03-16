import React, { FC } from 'react';
import { Menu } from 'antd';
import RoomItem from './RoomItem';
import MenuItem from 'antd/lib/menu/MenuItem';
import styled from 'styled-components';

const Item = styled(MenuItem)`
  height: auto !important;
  line-height: 25px !important;
  h2 {
    margin-bottom: 0;
  }
`;

const RoomsList: FC<{ topSidebarHeight?: number }> = ({ topSidebarHeight }) => {
  return (
    <Menu
      mode="vertical"
      className="overflow-y-scroll custom-scroll"
      style={{ height: `calc(100% - ${topSidebarHeight}px)` }}
    >
      <Item key="1">
        <RoomItem />
      </Item>
    </Menu>
  );
};

export default RoomsList;
