import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {View, Text, TouchableOpacity} from 'react-native';
import SlideInModal from '../../Components/SlideInModal';

import styles from './styles';
import OrderDetails from './OrderDetails';
import {formatDateTimeSeconds, formatTypeDate} from '../../Utils/datetime';
import FImage from '../../Components/Image/FImage';
import {SvgUri} from 'react-native-svg';
import {currencyFormatWithNoSpace} from '../../Utils/currency';
const Item = ({item}) => {
  const {i18n} = useTranslation();
  const navigation = useNavigation();
  const onItemPress = () => {
    SlideInModal.show(() => {},
    <OrderDetails id={item?.id} orderCode={item?.order_code} data={item} />);
  };
  const statusName = `${item?.status?.name}`.toUpperCase();
  const statusLayoutKey =
    statusName === 'ĐƠN MỚI' || statusName === 'ĐANG XỬ LÝ'
      ? 1
      : statusName === 'ĐANG GIAO'
      ? 3
      : statusName === 'HOÀN THÀNH'
      ? 4
      : statusName === 'ĐƠN HỦY'
      ? 5
      : 4;
  return (
    <TouchableOpacity
      onPress={onItemPress}
      style={[
        styles.itemContainer,
        styles[`background${statusLayoutKey}`],
        styles[`border${statusLayoutKey}`],
      ]}>
      <View style={styles.itemBlock1}>
        <Text style={styles.orderCodeTitle}>
          {i18n.t('profiles:order_code')}
        </Text>
        <Text
          style={[
            styles.orderCode,
            styles[`orderCodeColor${statusLayoutKey}`],
          ]}>
          {item?.order_code}
        </Text>
        <Text
          style={[
            styles.statusName,
            styles[`statusNameColor${statusLayoutKey}`],
          ]}>
          {statusName}
        </Text>
      </View>
      <View style={[styles.itemBlock2, styles[`border${statusLayoutKey}`]]}>
        <Text
          style={[styles[`branchColor${statusLayoutKey}`], styles.branchName]}>
          {item?.branch_name}
        </Text>
        <Text
          style={[
            styles.delivery,
            styles[`deliveryColor${item?.deliveryMethod?.id}`],
          ]}>
          {item?.deliveryMethod?.name || ''}
        </Text>
        <Text style={styles.createdDate}>
          {formatDateTimeSeconds(formatTypeDate(item?.created))}
        </Text>
      </View>
      <View style={styles.itemBlock3}>
        <View style={styles.bannerContainer}>
          {item?.paymentMethod?.icon_url?.includes('.svg') ? (
            <SvgUri
              width={styles.bannerImage.width + 10}
              height={styles.bannerImage.height + 10}
              uri={item?.paymentMethod?.icon_url}
            />
          ) : (
            <FImage
              style={styles.bannerImage}
              uri={item?.paymentMethod?.icon_url}
            />
          )}
        </View>
        <Text style={[styles.price, styles[`priceColor${statusLayoutKey}`]]}>
          {currencyFormatWithNoSpace(parseInt(item?.totalPay) || 0, 'đ')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
