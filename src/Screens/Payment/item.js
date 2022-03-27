import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';

const Item = ({ icon, name, des, id, onPressMethod, activeMethod }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressMethod(id)}
      style={[styles.viewMethod, styles.shadow]}
    >
      <Image source={icon} />
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.des}>{des}</Text>
      </View>
      <View style={styles.wrapCheckBox}>
        {activeMethod === id && <View style={styles.wrapActiveCheckBox} />}
      </View>
    </TouchableOpacity>
  );
};

export default Item;
