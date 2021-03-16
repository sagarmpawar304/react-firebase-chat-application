import React, {
  FC,
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react';
import { database } from '../utils/firebase';
import { transformToArray } from '../utils/helper';

export interface Room {
  createdAt: number;
  name: string;
  description: string;
  id: string;
}

const RoomsContext = createContext<Room[]>([]);

export const RoomsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [rooms, setRooms] = useState<any[]>([]);

  useEffect(() => {
    const roomsListRef = database.ref('rooms');
    roomsListRef.on('value', snap => {
      const values = transformToArray(snap.val());
      setRooms(values);
    });

    return () => {
      roomsListRef.off();
    };
  }, []);

  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
};

export const useRooms = () => useContext(RoomsContext);
