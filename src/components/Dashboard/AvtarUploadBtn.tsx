import React, { FC, useState } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { useModalState } from '../../utils/customHooks';
import { Button, message } from 'antd';
import AvatarEditor from 'react-avatar-editor';

const fileInputTypes = '.png, .jpeg, .jpg';
const acceptedInputTypes = ['image/png', 'image/jpeg', 'image/pjpeg'];

const isValidType = (file: File) => acceptedInputTypes.includes(file.type);

const AvtarUploadBtn: FC = () => {
  const [img, setImg] = useState<any>(null);
  const { isOpen, open, close } = useModalState();

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentFiles = e.target.files;

    if (currentFiles?.length === 1) {
      const file = currentFiles[0];

      if (isValidType(file)) {
        setImg(file);
        open();
      } else {
        message.warn(`Wrong file type ${file.type}`, 4);
      }
    }
  };
  return (
    <div className="mt-3 text-center">
      <label
        htmlFor="avtar-upload-btn"
        className="d-block cursor-pointer padded"
      >
        Change Avatar
        <input
          id="avtar-upload-btn"
          type="file"
          className="d-none"
          accept={fileInputTypes}
          onChange={handleFileInput}
        />
      </label>

      <Modal
        title="Upload your new avtar"
        visible={isOpen}
        onCancel={close}
        footer={
          <Button type="primary" block>
            Upload Avatar
          </Button>
        }
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <AvatarEditor
            image={img}
            width={200}
            height={200}
            border={1}
            borderRadius={100}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AvtarUploadBtn;
