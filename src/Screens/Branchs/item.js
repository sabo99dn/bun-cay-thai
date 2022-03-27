import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {View, Text, TouchableOpacity} from 'react-native';
import useLocation from '../../Hooks/useLocation';
import {CheckedAddress} from '../../svg/common';
import {currencyFormat, currencyFormatWithNoSpace} from '../../Utils/currency';
import getDistanceFromLatLonInKm from '../../Utils/locationUtils';

import styles from './styles';
const Item = ({item, active = false, onPress = () => {}}) => {
  const {i18n} = useTranslation();
  const navigation = useNavigation();
  const location = useLocation();
  const geoToLocation = () => {
    let convert = item?.geo.split(',');
    return convert;
  };
  const distance = getDistanceFromLatLonInKm(
    location?.lat,
    location?.lon,
    geoToLocation()[0],
    geoToLocation()[1],
  );
  console.log('location', location)
  const getShippingCost = dis => {
    if (dis > 10) return 40000;
    if (dis > 8) return 35000;
    if (dis > 6) return 30000;
    if (dis > 4) return 25000;
    return 15000;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={active ? styles.itemContainerActive : styles.itemContainer}>
      <Text style={styles.addressName}>{item?.name}</Text>
      <View style={styles.wrapTextRow}>
        <Text style={styles.textBlack}>{item?.full_address}</Text>
      </View>

      <View style={styles.wrapTextRow}>
        <Text style={styles.textGreen}>
          {i18n.t('profiles:ship_dinstance')}
        </Text>
        <Text style={styles.textRed}>{distance}km</Text>
      </View>
      <View style={styles.wrapTextRow}>
        <Text style={styles.textGreen}>{i18n.t('profiles:shipping_cost')}</Text>
        <Text style={styles.textRed}>
          {currencyFormatWithNoSpace(getShippingCost(distance) || 10, 'đ')}
        </Text>
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
