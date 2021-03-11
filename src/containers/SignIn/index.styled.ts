import styled from 'styled-components';
import { Button, Layout } from 'antd';

export const CustomButton = styled(Button)`
  color: white;
  font-size: 1rem;
  padding-top: 0;
  margin: 0.2rem 0;
  height: 40px;
  border-radius: 10px;
  &:hover {
    color: grey;
  }
`;

export const Content = styled(Layout.Content)`
  max-height: 100vh;
  .ant-row {
    min-height: 100vh;
    transform: translateY(-10vh);
  }
`;
