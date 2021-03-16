import React, { FC, useState, useRef } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { useModalState } from '../../utils/customHooks';
import { Button, message } from 'antd';
import AvatarEditor from 'react-avatar-editor';
import { storage, database } from '../../utils/firebase';
import Avtarprofile from '../AvatarProfile/Avtarprofile';
import { useProfileProvider } from '../../context/profile.context';

const fileInputTypes = '.png, .jpeg, .jpg';
const acceptedInputTypes = ['image/png', 'image/jpeg', 'image/pjpeg'];

const isValidType = (file: File) => acceptedInputTypes.includes(file.type);

const getBlob = (canvas: any) => {
  return new Promise((res, rej) => {
    canvas.toBlob((blob: any) => {
      if (blob) {
        res(blob);
      } else {
        rej(new Error('file process error'));
      }
    });
  });
};

const AvtarUploadBtn: FC = () => {
  const [img, setImg] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { isOpen, open, close } = useModalState();
  const avtarEditorRef = useRef();
  const { profile } = useProfileProvider();

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

  const uploadAvtar = async () => {
    const avtarEditor = avtarEditorRef.current;
    if (avtarEditor) {
      // @ts-ignore
      const canvas = avtarEditor.getImageScaledToCanvas();

      setLoading(true);
      try {
        const blob = (await getBlob(canvas)) as Blob;
        const avatarFileRef = storage
          .ref(`/profile/${profile!.uid}`)
          .child('avatar');
        const uploadAvtarResult = await avatarFileRef.put(blob, {
          cacheControl: `public, max-age=${3600 * 24 * 3}`,
        });

        const downloadUrl = await uploadAvtarResult.ref.getDownloadURL();

        const userAvtarRef = database
          .ref(`/profiles/${profile?.uid}`)
          .child('avatar');
        await userAvtarRef.set(downloadUrl);
        setLoading(false);
        message.success('Avatar has been uploaded', 4);
        close();
      } catch (error) {
        setLoading(false);
        message.error(error.message, 4);
      }
    }
  };
  return (
    <div className="mt-3 d-flex flex-column align-items-center">
      <Avtarprofile name={profile?.name} src={profile?.avatar} />
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
          <Button type="ghost" block onClick={uploadAvtar} disabled={loading}>
            Upload Avatar
          </Button>
        }
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          {img && (
            <AvatarEditor
              // @ts-ignore
              ref={avtarEditorRef}
              image={img}
              width={200}
              height={200}
              border={1}
              borderRadius={100}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default AvtarUploadBtn;
