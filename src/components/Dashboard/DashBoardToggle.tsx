import React from 'react';
import { Button, Drawer } from 'antd';
import { DashboardTwoTone } from '@ant-design/icons';
import DashBoard from '.';
import { useModalState, useMediaQuery } from '../../utils/customHooks';

const DashBoardToggle = () => {
  const { isOpen, open, close } = useModalState();
  const isMobile = useMediaQuery('(max-width:992px');
  return (
    <>
      <Button type="primary" block onClick={open} icon={<DashboardTwoTone />}>
        Dashboard
      </Button>
      <Drawer
        title="Chat"
        placement="left"
        visible={isOpen}
        onClose={close}
        closable={false}
        width={isMobile ? '90%' : '45%'}
      >
        <DashBoard />
      </Drawer>
    </>
  );
};

export default DashBoardToggle;
