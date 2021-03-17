import React from 'react';
import { useCurrentRoom } from '../../../context/current-room.context';
import { Room } from '../../../context/rooms.context';
import { useMediaQuery } from '../../../utils/customHooks';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';
import { LeftCircleTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import RoomInfoBtnModal from './RoomInfoBtnModal';

const Top = () => {
  const name = useCurrentRoom((v: Room) => v.name);
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <Title level={4}>
          <Link to="/">
            <LeftCircleTwoTone
              size={16}
              className={
                isMobile ? 'd-inline-block p-0 mr-2 link-unstyled' : 'd-none'
              }
            />
            <span className="text-disappear">{name}</span>
          </Link>
        </Title>

        <Button type="text">Todo</Button>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <span>Todo</span>
        <RoomInfoBtnModal />
      </div>
    </div>
  );
};

export default Top;
