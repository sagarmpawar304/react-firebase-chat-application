import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Row, Col } from 'antd';
import Sidebar from '../../components/Sidebar';

const Home = () => {
  return (
    <Content className="h-100">
      <Row>
        <Col xs={24} md={8}>
          <Sidebar />
        </Col>
      </Row>
    </Content>
  );
};

export default Home;
