import React, { FC } from 'react';
import Title from 'antd/lib/typography/Title';
import EditableInput from '../EdiatableInput';
import { database } from '../../utils/firebase';
import { message } from 'antd';
// @ts-ignore
import ProviderBlock from './ProviderBlock';
import AvtarUploadBtn from './AvtarUploadBtn';
import { useProfileProvider } from '../../context/profile.context';

const DashBoard: FC = () => {
  const { profile } = useProfileProvider();

  const onSave = async (value: string) => {
    const userNicknameRef = database
      .ref(`/profiles/${profile?.uid}`)
      .child('name');

    try {
      await userNicknameRef.set(value);
      message.success(`Nickname changed to "${value}".`);
    } catch (error) {
      message.info(error.message);
    }
  };
  return (
    <>
      <Title level={4} className="text-capitalize">
        Hey, {profile?.name.split(' ')[0] || 'User'}
      </Title>
      <ProviderBlock />
      <EditableInput
        onSave={onSave}
        initialValue={profile?.name || 'User'}
        lable={<h3>Name</h3>}
        placeHolder="Edit your name"
        emptyMsg="Name can't be empty"
      />
      <AvtarUploadBtn />
    </>
  );
};

export default DashBoard;
