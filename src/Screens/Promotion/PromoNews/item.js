import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  checkExpiredDate,
  formatDate,
  formatDays,
  formatTypeDate,
} from '../../../Utils/datetime';
import styles from './styles';
const Item = ({item, onPress}) => {
  const {i18n} = useTranslation();
  const endDate = formatTypeDate(item?.end_date);
  const startDate = formatTypeDate(item?.start_date);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <FastImage style={styles.img} source={{uri: item.image}} />
        {checkExpiredDate(endDate) ? (
          <View style={styles.badgeContainer}>
            <Text style={styles.date}>{i18n.t('promotion:out_of_date')}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.wrapContent}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.dateWrapper}>
          <Text style={styles.date} adjustsFontSizeToFit numberOfLines={1}>
            {`${formatDays(startDate)} - ${formatDate(endDate)}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
