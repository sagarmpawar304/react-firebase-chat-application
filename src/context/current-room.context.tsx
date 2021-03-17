import React, { ReactNode, FC } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

import { Room } from './rooms.context';

const CurrentRoomContext = createContext<Room | {}>({});

export const CurrentRoomContextProvider: FC<{
  children: ReactNode;
  data: Room;
}> = ({ children, data }) => {
  return (
    <CurrentRoomContext.Provider value={data}>
      {children}
    </CurrentRoomContext.Provider>
  );
};

export const useCurrentRoom = (selector: any): any =>
  useContextSelector(CurrentRoomContext, selector);
