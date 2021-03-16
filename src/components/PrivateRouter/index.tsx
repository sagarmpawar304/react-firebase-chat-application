import React, { FC, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
import { Spin, Row } from 'antd';
import { useProfileProvider } from '../../context/profile.context';

type Props = {
  children: ReactNode;
};

const PrivateRouter: FC<Props> = ({ children }) => {
  const { profile, loading } = useProfileProvider();

  if (!profile && loading) {
    return (
      <Content>
        <Row style={{ minHeight: '100vh' }} justify="center" align="middle">
          <Spin tip=".....loading" />
        </Row>
      </Content>
    );
  }

  if (!profile && !loading) {
    return <Redirect to="/signin" />;
  }
  return <>{children}</>;
};

export default PrivateRouter;
