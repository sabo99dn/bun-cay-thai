import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {cartDataSelector} from '../../Store/cart/selectors';
import {BackIcon, CartIcon} from '../../svg/common';
import styles from './styles';

const HeaderCT = ({
  title = '',
  isShowBack = false,
  isShowCart = false,
  onBack,
  onPressCart,
  titleStyle,
  headerStyle,
}) => {
  const cartData = useSelector(cartDataSelector);
  return (
    <View style={[styles.wrapHeaderCT, headerStyle]}>
      {isShowBack && (
        <TouchableOpacity onPress={onBack}>
          <BackIcon />
        </TouchableOpacity>
      )}
      <Text
        style={[styles.screenName, titleStyle]}
        numberOfLines={1}
        onPress={onBack}>
        {title.toUpperCase()}
      </Text>
      {isShowCart && (
        <TouchableOpacity onPress={onPressCart} style={{}}>
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

export default HeaderCT;
