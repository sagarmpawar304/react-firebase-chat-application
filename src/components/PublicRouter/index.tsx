import React, { FC, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import { useProvider } from '../../contextAPI';
import { Content } from 'antd/lib/layout/layout';
import { Row, Spin } from 'antd';

type Props = {
  children: ReactNode;
};

const PublicRouter: FC<Props> = ({ children }) => {
  const { state } = useProvider();
  const { profile, loading } = state;

  if (!profile && loading) {
    return (
      <Content>
        <Row style={{ minHeight: '100vh' }} justify="center" align="middle">
          <Spin tip=".....loading" />
        </Row>
      </Content>
    );
  }
  if (profile && !loading) {
    return <Redirect to="/" />;
  }
  return <>{children}</>;
};

export default PublicRouter;
