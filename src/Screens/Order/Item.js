import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AddIcon, DeleteButton, SubIcon} from '../../svg/common';
import {currencyFormatWithNoSpace} from '../../Utils/currency';
import styles from './styles';

const OrderItem = ({
  index,
  item: {
    name = '',
    topping = [],
    note = '',
    price_value,
    price_discount,
    is_sale = 0,
    amount,
    type = '',
  } = {},
  item,
  onDeleteItemCart,
  onChangeAmountProduct,
}) => {
  const price = parseInt(is_sale == 1 ? price_discount : price_value);
  const unit = 'đ';
  return (
    <View style={styles.wrapOrderItem}>
      <View style={styles.amount}>
        <Text style={styles.textAmount}>
          {amount > 9 ? amount : '0' + amount}
        </Text>
      </View>
      <View style={styles.wrapRight}>
        <View style={styles.wrapName}>
          <Text style={styles.name} numberOfLines={1}>
            {`${name} ${type ? `(${type.toLowerCase()})` : ''}`}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.money}>
              {`${currencyFormatWithNoSpace(amount * parseInt(price), unit)}`}
            </Text>
            <TouchableOpacity onPress={onDeleteItemCart(index)}>
              <DeleteButton />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapNote}>
          <Text style={styles.note}>{note}</Text>
          <View style={styles.wrapBtnAddSub}>
            <TouchableOpacity
              onPress={onChangeAmountProduct('-', index, amount)}
              style={styles.btnSub}>
              <SubIcon />
            </TouchableOpacity>
            <View style={styles.separatedBtn} />
            <Text style={styles.wrapAmountBtn}>
              {amount > 9 ? amount : '0' + amount}
            </Text>
            <View style={styles.separatedBtn} />
            <TouchableOpacity
              onPress={onChangeAmountProduct('+', index, amount)}
              style={styles.btnSub}>
              <AddIcon />
            </TouchableOpacity>
          </View>
        </View>
        {topping.map(
          (item, index) =>
            item.isChecked && (
              <View key={index + item.id + Math.random()}>
                <Text style={styles.topping}>{`${
                  item.name
                } (${currencyFormatWithNoSpace(
                  parseInt(item.price),
                  unit,
                )})`}</Text>
              </View>
            ),
        )}
      </View>
    </View>
  );
};

export default memo(OrderItem);
