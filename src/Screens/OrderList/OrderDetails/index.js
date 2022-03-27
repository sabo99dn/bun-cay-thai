import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const PromotionDetails = ({id = 0, orderCode = '', data = {}}) => {
  return (
    <View style={styles.container}>
      <Header orderCode={orderCode} />
      <Content id={id} data={data} />
      <Footer />
    </View>
  );
};
export default PromotionDetails;
