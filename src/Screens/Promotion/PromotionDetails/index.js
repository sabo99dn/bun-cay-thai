import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const PromotionDetails = ({item = {}}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Content item={item} />
      <Footer />
    </View>
  );
};
export default PromotionDetails;
