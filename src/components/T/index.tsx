import React, { FC, memo } from 'react';
import { Typography, Space } from 'antd';

const { Title } = Typography;

const T: FC<{ title: string }> = ({ title = 'hello sarah' }) => {
  return (
    <Space direction='vertical'>
      <Title level={1}>{title}</Title>
      <Title level={2}>{title}</Title>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<h1>Diplayed data as it is using "dangerouslySetInnerHTML attr"</h1>',
        }}
      ></div>
    </Space>
  );
};

export default memo(T);
