import React, { memo } from 'react';
import { Col, Image } from 'antd';

export const CustomCard: React.FC<{ num: number }> = ({ num = 44 }) => {
  return (
    <Col xs={22} md={12} lg={8}>
      <Image src={`/images/img (${num}).jpg`} />
    </Col>
  );
};

export default memo(CustomCard);
