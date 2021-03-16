import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Row, Col } from 'antd';
import Sidebar from '../../components/Sidebar';
import { RoomsProvider } from '../../context/rooms.context';

const Home = () => {
  return (
    <RoomsProvider>
      <Content className="h-100">
        <Row className="h-100">
          <Col xs={24} md={8} className="h-100">
            <Sidebar />
          </Col>
        </Row>
      </Content>
    </RoomsProvider>
  );
};

export default Home;
