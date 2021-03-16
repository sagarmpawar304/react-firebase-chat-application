import React from 'react';
import TimeAgo from 'timeago-react';

const RoomItem = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-disappear">Room Name</h2>
        <TimeAgo datetime={new Date()} className="font-normal text-black-45" />
      </div>

      <div className="d-flex align-items-center text-black-70">
        no messages yet...
      </div>
    </div>
  );
};

export default RoomItem;
