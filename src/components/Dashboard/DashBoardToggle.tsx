import React from 'react';
import { Button, Drawer } from 'antd';
import { DashboardTwoTone } from '@ant-design/icons';
import DashBoard from '.';
import { useModalState } from '../../utils/customHooks';

const DashBoardToggle = () => {
  const { isOpen, open, close } = useModalState();
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
        closable
        closeIcon
        width="256px"
      >
        <DashBoard />
      </Drawer>
    </>
  );
};

export default DashBoardToggle;
