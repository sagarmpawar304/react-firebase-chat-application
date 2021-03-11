import React from 'react';
import { Row, Col, message } from 'antd';
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import firebase from 'firebase/app';

import Title from 'antd/lib/typography/Title';
import { auth, database } from '../../utils/firebase';
// import { useProvider } from '../../contextAPI';
import { Content, CustomButton } from './index.styled';
const SignIn = () => {
  const signInProvider = async (provider: any) => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      if (additionalUserInfo && user) {
        if (additionalUserInfo.isNewUser) {
          await database.ref(`/profiles/${user.uid}`).set({
            name: user.displayName,
            createAt: firebase.database.ServerValue.TIMESTAMP,
          });
        }
        message.success('Succefully Signed In', 3);
        // dispatch({ type: 'success', payload: user });
      }
    } catch (error) {
      // console.log({ error });
      message.info(error.message, 3);
    }
  };

  const signInWithFacebook = () => {
    signInProvider(new firebase.auth.FacebookAuthProvider());
  };

  const signInWithGoogle = () => {
    signInProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Content>
      <Row justify="center" align="middle">
        <Col xs={20} md={{ span: 12 }}>
          <Title title="Welcome To Chat" className="text-center" />
          <CustomButton
            icon={<FacebookFilled />}
            block
            style={{ backgroundColor: '#2196f3' }}
            onClick={signInWithFacebook}
          >
            Continue with FaceBook
          </CustomButton>

          <CustomButton
            icon={<GoogleCircleFilled />}
            block
            style={{ backgroundColor: 'red' }}
            onClick={signInWithGoogle}
          >
            Continue with Google
          </CustomButton>
        </Col>
      </Row>
    </Content>
  );
};

export default SignIn;
