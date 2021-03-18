import React, { memo } from 'react';
import { Button } from 'antd';

import { Room } from '../../../context/rooms.context';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useModalState } from '../../../utils/customHooks';
import Modal from 'antd/lib/modal/Modal';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

const RoomInfoBtnModal = () => {
  const description = useCurrentRoom((v: Room) => v.description);
  const name = useCurrentRoom((v: Room) => v.name);

  const { isOpen, open, close } = useModalState();
  return (
    <>
      <Button type="link" onClick={open}>
        Room Info
      </Button>

      <Modal
        visible={isOpen}
        title={`About ${name}`}
        footer={
          <Button type="primary" block onClick={close}>
            Close
          </Button>
        }
        onCancel={close}
      >
        <Title level={5} className="mb-1">
          Description
        </Title>
        <Text>{description}</Text>
      </Modal>
    </>
  );
};

export default memo(RoomInfoBtnModal);
