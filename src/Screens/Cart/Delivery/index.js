import React, {useRef, useState} from 'react';
import {View, Text, Image, RefreshControl} from 'react-native';
import styles from './styles';
import {DropdonwCircle} from '../../../svg/common';

const Delivery = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Giao hàng từ <Text style={styles.noteText}>(Chọn kho tổng)</Text>
        </Text>
        <Text style={styles.address}>
          434 Trường Chinh, Phường 13, Quận Tân Bình, TP.HCM
        </Text>
        <View style={styles.dropdown}>
          <DropdonwCircle />
          <Text style={styles.txtDropdown}>Kho tổng Trường Chinh </Text>
        </View>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Giao đến{' '}
          <Text style={styles.noteText}>(Địa chỉ mặc định chi nhánh)</Text>
        </Text>
        <Text style={styles.address}>
          38 Đồng Nai, Phường 13, Quận Tân Bình, TP.HCM
        </Text>
        <View style={styles.dropdown}>
          <DropdonwCircle />
          <Text style={styles.txtDropdown}>Kho tổng Trường Chinh </Text>
        </View>
        <View style={styles.range}>
          <Text style={styles.title}>Khoảng cách giao hàng</Text>
          <Text style={styles.numberKm}>5 km</Text>
        </View>
      </View>
    </View>
  );
};

export default Delivery;
