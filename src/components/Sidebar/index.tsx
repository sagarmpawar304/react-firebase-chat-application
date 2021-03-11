import React from 'react';
import DashBoardToggle from '../Dashboard/DashBoardToggle';

const Sidebar = () => {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashBoardToggle />
      </div>
    </div>
  );
};

export default Sidebar;