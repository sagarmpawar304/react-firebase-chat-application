import React, { FC } from 'react';
import { useProvider } from '../../contextAPI';
import Title from 'antd/lib/typography/Title';
import EditableInput from '../EdiatableInput';

const DashBoard: FC = () => {
  const { state } = useProvider();
  const { profile } = state;

  const onSave = async (value: string) => {
    console.log(value);
  };
  return (
    <>
      <Title level={4} className="text-capitalize">
        Hey, {profile!.name.split(' ')[0]}
      </Title>
      <EditableInput
        onSave={onSave}
        initialValue={profile!.name}
        lable={<h3>Name</h3>}
        placeHolder="Edit your name"
        emptyMsg="Name can't be empty"
      />
    </>
  );
};

export default DashBoard;
