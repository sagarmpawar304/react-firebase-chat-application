import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Row, Col, Image } from 'antd';
import Sidebar from '../../components/Sidebar';
import { RoomsProvider } from '../../context/rooms.context';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Chat from './Chat';
import { useMediaQuery } from '../../utils/customHooks';

const Home = () => {
  const isTab = useMediaQuery('(min-width: 768px)');

  const { isExact } = useRouteMatch();

  const canRenderSidebar = isTab || isExact;
  console.log(isTab);

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
                  <h3 className="text-center mt-page">Please select chat</h3>
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
