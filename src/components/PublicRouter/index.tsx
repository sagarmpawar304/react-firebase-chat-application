import React, { FC, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

const PublicRouter: FC<Props> = ({ children }) => {
  const profile = false;
  if (profile) {
    return <Redirect to="/" />;
  }
  return <>{children}</>;
};

export default PublicRouter;
