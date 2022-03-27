import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ContainerView} from '../../Components';

const LoadingModal = () => {
  return (
    <ContainerView
      fluid
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'transparent',
      }}>
      <ActivityIndicator color="#fff" size="large" />
    </ContainerView>
  );
};
export default LoadingModal;
