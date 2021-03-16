import React, { FC } from 'react';
import TimeAgo from 'timeago-react';
import { Room } from '../../context/rooms.context';

const RoomItem: FC<{ room: Room }> = ({ room }) => {
  const { name, description, createdAt } = room;
  return (
    <div style={{ padding: '0.3rem 0' }}>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-disappear">{name}</h2>
        <TimeAgo
          datetime={new Date(createdAt)}
          className="font-normal text-black-45"
        />
      </div>

      <div className="d-flex align-items-center text-black-70">
        {description}
      </div>
    </div>
  );
};

export default RoomItem;
