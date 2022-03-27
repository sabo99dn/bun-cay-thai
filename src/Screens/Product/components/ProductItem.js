import React, {memo} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import FImage from '../../../Components/Image/FImage';
import {AddProductButton} from '../../../svg/common';
import {currencyFormatWithNoSpace} from '../../../Utils/currency';
import styles from './ProductItemStyles';

const ProductItem = ({item = {}, onPress, onAdd}) => {
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
  const discountPercent = 100 - Math.floor((discount / value) * 100);

  const {i18n} = useTranslation();

  const handleOnPress = () => onPress && onPress(item);
  const handleAddItem = () => onAdd && onAdd(item);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleOnPress}
      style={styles.wrap}>
      {is_sale == 1 ? (
        <View style={styles.wrapViewDisCount}>
          <Text style={styles.wrapTextDisCount}>
            {`${i18n.t('product:textDiscount')} ${discountPercent}%`}
          </Text>
        </View>
      ) : null}
      <FImage uri={image} style={styles.image} />
      <View style={styles.wrapContent}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {des}
        </Text>
        <View style={styles.wrapBottom}>
          {is_sale == 1 ? (
            <View style={styles.wrapPrice}>
              <Text style={styles.textDiscount}>
                {`${currencyFormatWithNoSpace(parseInt(discount), unit)}`}
              </Text>
              <View style={styles.viewSeparated} />
              <View>
                <Text style={styles.textMoneyOrigin}>
                  {`${currencyFormatWithNoSpace(parseInt(value), unit)}`}
                </Text>
                <View style={styles.centerTextMoney} />
              </View>
            </View>
          ) : (
            <View style={styles.wrapPrice}>
              <Text style={styles.textDiscount}>
                {`${currencyFormatWithNoSpace(parseInt(value), unit)}`}
              </Text>
            </View>
          )}
          <TouchableOpacity onPress={handleAddItem}>
            <AddProductButton />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductItem);
