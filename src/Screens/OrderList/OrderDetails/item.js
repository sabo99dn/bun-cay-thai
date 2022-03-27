import React from 'react';
import {View, Text} from 'react-native';
import {currencyFormatWithNoSpace} from '../../../Utils/currency';
import styles from './styles';

const ProductItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemHeader}>
        <View style={styles.itemNameContainer}>
          <View style={styles.itemQuantity}>
            <Text style={styles.itemQuantityText}>
              {item?.amount
                ? item?.amount < 10
                  ? `0${item?.amount}`
                  : item?.amount
                : 0}
            </Text>
          </View>
          <Text style={styles.itemName}>
            {item?.name + ' (' + item?.type + ')'}
          </Text>
        </View>
        <Text style={styles.itemPrice}>
          {parseInt(item?.price?.value) > 0
            ? currencyFormatWithNoSpace(
              parseInt(item?.price?.value) * 1 * item?.amount || 0,
                'đ',
              )
            : '0đ'}
        </Text>
      </View>
      {item?.note ? (
        <View style={styles.noteContainer}>
          <Text style={styles.note}>{item?.note}</Text>
        </View>
      ) : null}
      <View style={{marginBottom: 10}} />
      {[item?.topping]?.map((item, index) =>
        item?.isChecked ? (
          <View style={styles.subItemContainer} key={index}>
            <View style={styles.dot} />
            <Text style={styles.itemName}>
              {`${item?.name} (${currencyFormatWithNoSpace(
                parseInt(item?.price?.value),
                'đ',
              )})`}
            </Text>
          </View>
        ) : null,
      )}
    </View>
  );
};

export default ProductItem;
