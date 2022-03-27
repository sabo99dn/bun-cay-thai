import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from '../../Configs/theme/colors';
import styles from './style';

const FullLoading = ({
  wrapStyle,
  color = colors.$txtFocusInput,
  size = 'small',
}) => (
  <View style={[styles.wrap, wrapStyle]}>
    <View style={styles.background}>
      <ActivityIndicator color={color} size={size} />
    </View>
  </View>
);

export default FullLoading;
