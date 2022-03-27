import React, { memo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { currencyFormatWithNoSpace } from '../../../Utils/currency';
import styles from './ToppingStyle';

const ToppingItem = ({
  index,
  onPress,
  name = '',
  price = '',
  unit = '',
  wrapStyle,
}) => {
  const [isTicked, setIsTicked] = useState(false);

  const handleOnTick = () => {
    onPress && onPress(index, !isTicked);
    setIsTicked(!isTicked);
  };

  return (
    <View style={[styles.wrap, wrapStyle]}>
      <TouchableOpacity onPress={handleOnTick} style={styles.checkbox}>
        {isTicked && <View style={styles.childCheckBox} />}
      </TouchableOpacity>
      <Text onPress={handleOnTick} style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.price}>{`${currencyFormatWithNoSpace(
        parseInt(price),
        unit
      )}`}</Text>
    </View>
  );
};

export default memo(ToppingItem);
