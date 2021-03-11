import React, { useCallback } from 'react';
import { Button, Drawer, message } from 'antd';
import { DashboardTwoTone } from '@ant-design/icons';
import DashBoard from '.';
import { useModalState, useMediaQuery } from '../../utils/customHooks';
import { auth } from '../../utils/firebase';

const DashBoardToggle = () => {
  const { isOpen, open, close } = useModalState();
  const isMobile = useMediaQuery('(max-width:992px');

  const signOut = useCallback(() => {
    auth.signOut();
    message.info('Signed Out', 4);
    close();
  }, []);
  return (
    <>
      <Button type="primary" block onClick={open} icon={<DashboardTwoTone />}>
        Dashboard
      </Button>
      <Drawer
        title="Dashboard"
        placement="left"
        visible={isOpen}
        onClose={close}
        width={isMobile ? '80%' : '45%'}
        footer={
          <Button danger onClick={signOut} block type="primary">
            Sign Out
          </Button>
        }
      >
        <DashBoard />
      </Drawer>
    </>
  );
};

export default DashBoardToggle;
