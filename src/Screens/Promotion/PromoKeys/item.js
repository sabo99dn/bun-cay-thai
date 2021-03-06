import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {Cross} from '../../../svg/common';
import {currencyFormatWithNoSpace} from '../../../Utils/currency';
import {formatDate, formatTypeDate} from '../../../Utils/datetime';
import styles from './styles';
const Item = ({item, onPress}) => {
  const {i18n} = useTranslation();
  const startDate =
    formatDate(item?.start_date) &&
    formatDate(item?.start_date) !== 'Invalid date'
      ? formatDate(item?.start_date)
      : formatDate(formatTypeDate(item?.start_date)) &&
        formatDate(formatTypeDate(item?.start_date)) !== 'Invalid date'
      ? formatDate(formatTypeDate(item?.start_date))
      : item?.start_date;
  const endDate =
    formatDate(item?.end_date) && formatDate(item?.end_date) !== 'Invalid date'
      ? formatDate(item?.end_date)
      : formatDate(formatTypeDate(item?.start_date)) &&
        formatDate(formatTypeDate(item?.start_date)) !== 'Invalid date'
      ? formatDate(formatTypeDate(item?.start_date))
      : item?.end_date;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapBox}>
        <View
          style={[
            styles.saleKeys,
            item?.color ? {backgroundColor: item?.color} : null,
          ]}>
          <Text style={styles.discount}>-{item?.discount_percent}%</Text>
        </View>
      </View>

      <View style={styles.wrapTitle}>
        <Text style={[styles.title, item?.color ? {color: item?.color} : null]}>
          {`${item?.title}`.toUpperCase()}
        </Text>
        <View style={{paddingLeft: 70}}>
          <Cross />
        </View>
      </View>
      <View style={styles.decription}>
        <View style={styles.wrapText}>
          <Text style={styles.txtdecrip}>{`${i18n.t(
            'promotion:percent_base_on_order',
          )}`}</Text>
          <Text style={styles.textGreen}>{`${item?.discount_percent}%`}</Text>
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.txtdecrip}>{`${i18n.t(
            'promotion:minimum_value',
          )}`}</Text>
          <Text style={styles.textGreen}>
            {currencyFormatWithNoSpace(item?.minimum_value * 1 || 0, '??')}
          </Text>
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.txtdecrip}>{`${i18n.t(
            'promotion:max_discount',
          )}`}</Text>
          <Text style={styles.textGreen}>
            {currencyFormatWithNoSpace(item?.maximum_discount * 1 || 10, '??')}
          </Text>
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.txtdecrip}>
            {`${i18n.t('promotion:exp_end_time')}`}
          </Text>
          <Text style={styles.textGreen}>{`${startDate} - ${endDate}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Item;
