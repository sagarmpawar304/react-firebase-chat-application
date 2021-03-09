import React, { FC, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

const PrivateRouter: FC<Props> = ({ children }) => {
  const profile = false;
  if (!profile) {
    return <Redirect to="/signin" />;
  }
  return <>{children}</>;
};

export default PrivateRouter;
