import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {View, Text, TouchableOpacity} from 'react-native';

import {CheckedAddress} from '../../../svg/common';

import styles from './styles';

const Item = ({item, active = false, onPress = () => {}}) => {
  const {i18n} = useTranslation();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={active ? styles.itemContainerActive : styles.itemContainer}>
      <Text style={styles.addressName}>{item?.address_name}</Text>
      <Text style={styles.userName}>{item?.receiver_name}</Text>
      <View style={styles.wrapTextRow}>
        <Text style={styles.textGreen}>
          {i18n.t('profiles:address')}
          <Text style={styles.textBlack}>{item?.full_address}</Text>
        </Text>
      </View>
      <View style={styles.wrapButton}>
        <View style={styles.wrapTextRow}>
          <Text style={styles.textGreen}>
            {i18n.t('profiles:phone_number')}
          </Text>
          <Text style={styles.textBlack}>{item?.number_phone}</Text>
        </View>
      </View>
      {active ? (
        <View style={styles.checked}>
          <CheckedAddress />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Item;
