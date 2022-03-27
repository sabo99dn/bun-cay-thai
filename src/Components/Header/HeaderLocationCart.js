import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {cartDataSelector} from '../../Store/cart/selectors';
import styles from './styles';
import {CartIcon, Pin} from '../../svg/common';
import AddressModal from '../../Screens/Order/AddressModal';
import SlideInModal from '../SlideInModal';
import {useNavigation} from '@react-navigation/native';
const HeaderLocationCart = ({
  address = '',
  isShowCart = false,
  wrapStyle,
  onPressCart,
}) => {
  const cartData = useSelector(cartDataSelector);

  const navigation = useNavigation();

  const {i18n} = useTranslation();

  const _handlePress = () => {
    SlideInModal.show(
      () => {},
      <AddressModal navigation={navigation} isOutOrder={true} />,
      'slideInRight',
      'slideOutRight',
    );
  };

  return (
    <View style={[styles.wrapHeader, wrapStyle]}>
      <View style={styles.flex1}>
        <Text style={styles.textDeliveryTo}>
          {i18n.t('product:delivery_to')}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 7}}>
          <Pin />
          <TouchableOpacity onPress={_handlePress}>
            <Text numberOfLines={1} style={styles.address}>
              {address}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isShowCart && (
        <TouchableOpacity onPress={onPressCart} style={styles.wrapCart}>
          {Boolean(cartData.length) && (
            <View style={styles.wrapBadge}>
              <Text style={styles.textBadge}>{cartData.length}</Text>
            </View>
          )}
          <CartIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderLocationCart;
