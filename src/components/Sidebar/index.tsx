import React, { useRef, useState, useEffect } from 'react';
import DashBoardToggle from '../Dashboard/DashBoardToggle';
import CreateRoomBtnModal from '../Dashboard/CreateRoomBtnModal';
import { Divider } from 'antd';
import RoomsList from '../Rooms/RoomsList';

const Sidebar = () => {
  const topSidebarRef = useRef<any>();
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (topSidebarRef.current) {
      setHeight(topSidebarRef.current.scrollHeight);
    }
  }, [topSidebarRef]);
  return (
    <div className="h-100 pt-2">
      <div ref={topSidebarRef}>
        <DashBoardToggle />
        <CreateRoomBtnModal />
        <Divider orientation="center">Join Conversation</Divider>
      </div>
      <RoomsList topSidebarHeight={height} />
    </div>
  );
};

export default Sidebar;
