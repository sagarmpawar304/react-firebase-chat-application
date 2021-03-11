import React, { FC } from 'react';
import { useProvider } from '../../contextAPI';
import Title from 'antd/lib/typography/Title';

const DashBoard: FC<{ signOut: () => void }> = ({ signOut }) => {
  const { state } = useProvider();
  const { profile } = state;
  return (
    <>
      <Title level={4} className="text-capitalize">
        {profile!.name}
      </Title>
    </>
  );
};

export default DashBoard;
