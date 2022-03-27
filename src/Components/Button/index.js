import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';

export default function Button({
  onPress,
  label,
  styleButton = {},
  propsButton = {},
  styleTextInput = {},
  propsTextInput = {},
  leftIcon = null,
  rightIcon = null,
  disabled = false,
  loading = false,
}) {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={() => onPress()}
      style={[styles.btn, styleButton]}
      {...propsButton}>
      {loading ? <ActivityIndicator style={{marginRight: 10}} /> : null}
      {leftIcon}
      <Text style={[styles.text, styleTextInput]} {...propsTextInput}>
        {label}
      </Text>
      {rightIcon}
    </TouchableOpacity>
  );
}
