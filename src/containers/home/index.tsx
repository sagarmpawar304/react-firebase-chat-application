import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Row, Col } from 'antd';
import Title from 'antd/lib/typography/Title';

import Sidebar from '../../components/Sidebar';
import { RoomsProvider } from '../../context/rooms.context';
import Chat from './Chat';
import { useMediaQuery } from '../../utils/customHooks';

const Home = () => {
  const isTab = useMediaQuery('(min-width: 768px)');

  const { isExact } = useRouteMatch();

  const canRenderSidebar = isTab || isExact;

  return (
    <RoomsProvider>
      <Content className="h-100">
        <Row className="h-100">
          {canRenderSidebar && (
            <Col xs={24} md={8} className="h-100">
              <Sidebar />
            </Col>
          )}

          <Switch>
            {!isExact && (
              <Route exact route="/chat/:chatId">
                <Col xs={24} md={16}>
                  <Chat />
                </Col>
              </Route>
            )}

            <Route>
              {isTab && (
                <Col xs={24} md={16}>
                  <Title level={4} className="text-center mt-page">
                    Please select chat
                  </Title>
                </Col>
              )}
            </Route>
          </Switch>
        </Row>
      </Content>
    </RoomsProvider>
  );
};

export default Home;
