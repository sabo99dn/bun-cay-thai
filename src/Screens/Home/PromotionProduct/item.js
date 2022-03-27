import React from 'react';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import styles from './styles';
import {moneyFormat, priceSalePercent} from '../../../Utils/currency';
import {useTranslation} from 'react-i18next';
import SlideInModal from '../../../Components/SlideInModal';
import ProductDetail from '../../ProductDetail';
import {useNavigation} from '@react-navigation/native';

export default ({item, onPress}) => {
  const {i18n} = useTranslation();
  const {navigate} = useNavigation();
  const {
    name = '',
    des = '',
    price_discount = '',
    price_value = '',
    image = '',
    is_sale = '',
  } = item;
  const unit = 'đ';
  const discount = parseInt(price_discount);
  const value = parseInt(price_value);
  const discountPercent = 100 - (discount / value).toFixed(2) * 100;
  const _handlePress = () => {
    SlideInModal.show(() => {},
    <ProductDetail item={item} navigate={navigate} />);
  };

  return (
    <View style={styles.container} onPress={onPress}>
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        source={{uri: image}}
        style={styles.banner}
      />
      {item?.is_sale === '1' && discountPercent !== 0 ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {i18n.t('promotion:discount')}
            {discountPercent}%
          </Text>
        </View>
      ) : null}

      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <View style={styles.wrapPrice}>
        <Text style={styles.textDiscount}>{`${moneyFormat(
          discount,
        )}${unit}`}</Text>
        <View style={styles.viewSeparated} />
        <View>
          <Text style={styles.textMoneyOrigin}>{`${moneyFormat(
            value,
          )}${unit}`}</Text>
          <View style={styles.centerTextMoney} />
        </View>
      </View>
      <TouchableOpacity style={styles.btnBuy} onPress={_handlePress}>
        <Text style={styles.textBuy}>{i18n.t('home:btn_buy')}</Text>
      </TouchableOpacity>
    </View>
  );
};
