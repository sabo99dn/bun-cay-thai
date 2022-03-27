import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const DeliveryOption = ({
  deliveryMethod,
  handleOnTick,
  wrapStyle,
  item = {},
}) => {
  const { time = {}, name = '' } = item;
  const [isTicked, setIsTicked] = useState(deliveryMethod.name === name);
  const onTick = () => {
    handleOnTick && handleOnTick(item);
  };
  useEffect(() => {
    setIsTicked(deliveryMethod.name === name);
  }, [deliveryMethod, name]);
  return (
    <View style={[styles.wrapDeliveryOption, wrapStyle]}>
      <TouchableOpacity onPress={onTick} style={styles.checkbox}>
        {isTicked && <View style={styles.childCheckBox} />}
      </TouchableOpacity>
      <Text
        onPress={onTick}
        style={styles.nameDeliveryOption}
        numberOfLines={1}
      >
        {name}
      </Text>
      <Text style={styles.desRight}>{time}</Text>
    </View>
  );
};

export default DeliveryOption;
