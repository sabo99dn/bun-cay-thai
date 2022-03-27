import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Header} from '../../Components';
import BagValue from './BagValue';
import ListCart from './ListCart';
import Delivery from './Delivery';

const Menu = () => {
  return (
    <View style={styles.container}>
      <Header
        isDefault
        containerStyle={{
          paddingTop: 10,
        }}
        leftStyle={{
          fontWeight: 'bold',
        }}
        middleComponent={
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            GIỎ HÀNG
          </Text>
        }
        rightComponent={
          <View>
            <BagValue />
          </View>
        }
      />
      <ListCart />
      <Delivery />
      <View style={styles.order}>
        <View style={styles.btnOrder}>
          <Text style={styles.txtButton}>ĐẶT ĐƠN</Text>
        </View>
        <View style={styles.btnMore}>
          <Text style={styles.txtButton}>THÊM MÓN</Text>
        </View>
      </View>
    </View>
  );
};

export default Menu;
