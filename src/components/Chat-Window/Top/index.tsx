import React from 'react';
import { useCurrentRoom } from '../../../context/current-room.context';
import { Room } from '../../../context/rooms.context';

const Top = () => {
  const name = useCurrentRoom((v: Room) => v.name);
  return <div>{name}</div>;
};

export default Top;
