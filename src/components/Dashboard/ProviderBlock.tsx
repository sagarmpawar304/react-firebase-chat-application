import React, { useState, FC } from 'react';
import { Tag, Button, message } from 'antd';
import { GoogleCircleFilled, FacebookFilled } from '@ant-design/icons';
import { auth } from '../../utils/firebase';
import firebase from 'firebase/app';

const ProviderBlock: FC = () => {
  const [isConnected, setisConnected] = useState({
    'google.com': auth.currentUser?.providerData.some(
      data => data?.providerId === 'google.com'
    ),
    'facebook.com': auth.currentUser?.providerData.some(
      data => data?.providerId === 'facebook.com'
    ),
  });

  const updateIsConnected = (providerId: string, value: boolean) => {
    setisConnected(state => {
      return {
        ...state,
        [providerId]: value,
      };
    });
  };

  const link = async (provider: any) => {
    try {
      await auth.currentUser?.linkWithPopup(provider);
      updateIsConnected(provider.providerId, true);
      message.success(`Connected to ${provider.providerId}`);
    } catch (error) {
      message.error(error.message);
    }
  };

  const unlink = async (providerId: string) => {
    try {
      if (auth.currentUser?.providerData.length === 1) {
        throw new Error(`You can not disconnect from ${providerId}`);
      }
      await auth.currentUser?.unlink(providerId);
      updateIsConnected(providerId, false);
      message.success(`Disconnected from ${providerId}`, 4);
    } catch (error) {
      message.warn(error.message, 4);
    }
  };

  const unlinkGoogle = () => {
    unlink('google.com');
  };

  const unlinkFacebook = () => {
    unlink('facebook.com');
  };

  const linkToGoogle = () => {
    link(new firebase.auth.GoogleAuthProvider());
  };

  const linkToFacebook = () => {
    link(new firebase.auth.FacebookAuthProvider());
  };

  return (
    <>
      {isConnected['google.com'] && (
        <Tag
          closable
          color="red"
          onClose={e => {
            e.preventDefault();
            unlinkGoogle();
          }}
        >
          Connected
        </Tag>
      )}

      {isConnected['facebook.com'] && (
        <Tag
          closable
          color="blue"
          onClose={e => {
            e.preventDefault();
            unlinkFacebook();
          }}
        >
          Connected
        </Tag>
      )}

      <div className="mt-2">
        {!isConnected['google.com'] && (
          <Button
            block
            icon={<GoogleCircleFilled />}
            type="primary"
            style={{ backgroundColor: 'red' }}
            className="mb-1"
            onClick={linkToGoogle}
          >
            Connect to Google
          </Button>
        )}

        {!isConnected['facebook.com'] && (
          <Button
            block
            icon={<FacebookFilled />}
            type="primary"
            className="mb-1"
            onClick={linkToFacebook}
          >
            Connect to FaceBook
          </Button>
        )}
      </div>
    </>
  );
};

export default ProviderBlock;
