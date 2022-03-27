import React, {useRef, useState} from 'react';
import {View, Text, Image, RefreshControl} from 'react-native';
import {Bag} from '../../../svg/common';
import styles from './styles';
import {Badge} from 'react-native-elements';
const Detail = () => {
  return (
    <View>
      <Badge
        status="error"
        value="3"
        containerStyle={styles.containerStyle}
        textProps={{allowFontScaling: false}}
        badgeStyle={styles.badgeStyle}
        textStyle={{fontSize: '$normalText', textAlign: 'center'}}
      />
      <Bag />
    </View>
  );
};

export default Detail;
