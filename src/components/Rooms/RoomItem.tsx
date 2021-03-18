import React, { FC } from 'react';
import TimeAgo from 'timeago-react';
import { Room } from '../../context/rooms.context';
import AvtarProfile from '../AvatarProfile/Avtarprofile';

const RoomItem: FC<{ room: Room }> = ({ room }) => {
  const { name, createdAt, lastMessage } = room;
  return (
    <div style={{ padding: '0.3rem 0' }}>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-disappear">{name}</h2>
        <TimeAgo
          datetime={
            lastMessage ? new Date(lastMessage.createdAt) : new Date(createdAt)
          }
          className="font-normal text-black-45"
        />
      </div>

      <div className="d-flex align-items-center text-black-70">
        {lastMessage ? (
          <>
            <div className="d-flex align-items-center">
              <AvtarProfile
                src={lastMessage.author.avatar}
                name={lastMessage.author.name}
                size="large"
              />
            </div>

            <div className="text-disappear ml-2">
              <div className="italic">{lastMessage.author.name}</div>
              <span>{lastMessage.text}</span>
            </div>
          </>
        ) : (
          <span>no messages yet...</span>
        )}
      </div>
    </div>
  );
};

export default RoomItem;
