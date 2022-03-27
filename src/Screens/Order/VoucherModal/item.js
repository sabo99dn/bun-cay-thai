import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {BoxCircle, Cross} from '../../../svg/common';
import {
  currencyFormat,
  currencyFormatWithNoSpace,
} from '../../../Utils/currency';
import {formatDate} from '../../../Utils/datetime';
import styles from './styles';
const Item = ({item, onPress}) => {
  const {i18n} = useTranslation();
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
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

        <View style={styles.divider}>
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
            {currencyFormatWithNoSpace(item?.minimum_value * 1 || 0, 'đ')}
          </Text>
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.txtdecrip}>{`${i18n.t(
            'promotion:max_discount',
          )}`}</Text>
          <Text style={styles.textGreen}>
            {currencyFormatWithNoSpace(item?.maximum_discount * 1 || 10, 'đ')}
          </Text>
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.txtdecrip}>
            {`${i18n.t('promotion:exp_end_time')}`}
          </Text>
          <Text style={styles.textGreen}>
            {`${formatDate(item?.start_date)} - ${formatDate(item?.end_date)}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Item;
