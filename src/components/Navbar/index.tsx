import React, { memo } from 'react';
import { Typography, Badge } from 'antd';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

import NavbarWrapper from './index.styled';

const { Title } = Typography;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Title level={1}>E-Comm</Title>
      <div className='icons-wrapper'>
        <Badge count={1} offset={[-18, -10]}>
          <HeartOutlined />
        </Badge>
        <Badge count={0} offset={[-18, -10]}>
          <ShoppingCartOutlined />
        </Badge>
      </div>
    </NavbarWrapper>
  );
};

export default memo(Navbar);
