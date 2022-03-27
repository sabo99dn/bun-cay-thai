import i18next from 'i18next';
import React, {useEffect, useState} from 'react';
import {Keyboard, TextInput, Platform} from 'react-native';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import ParsedText from 'react-native-parsed-text';
import {useDispatch, useSelector} from 'react-redux';
import FImage from '../../Components/Image/FImage';
import SlideInModal from '../../Components/SlideInModal';
import colors from '../../Configs/theme/colors';
import {addItemToCart} from '../../Store/cart/actions';
import {actions as productDetailActions} from '../../Store/productDetail/reducer';
import * as productsDetailSelector from '../../Store/productDetail/selectors';
import {AddProductButton, CloseButton, SubButton} from '../../svg/common';
import {AnalyticsAction} from '../../Utils/analytics';
import {currencyFormatWithNoSpace} from '../../Utils/currency';
import ToppingItem from './components/ToppingItem';
import styles from './styles';
import RoutesConfig from '../../Configs/routes';
import {useStatusBarPreview} from '../../Hooks';

const ProductDetail = ({item = {}, navigate, is_flash_sale = false}) => {
  const dispatch = useDispatch();
  const productsDetail = useSelector(state =>
    productsDetailSelector.productsDetailData(state),
  );
  const filterTopping = item?.topping?.length
    ? item.topping?.map(item => ({
        ...item,
        isChecked: false,
      }))
    : [];
  const [data, setData] = useState(item);
  const [amount, setAmount] = useState(1);
  const [note, setNote] = useState('');
  const [topping, setTopping] = useState(filterTopping);
  const {
    id = '',
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
  const onGoBack = () => SlideInModal.hide();

  console.log('topping', JSON.stringify(topping));

  const onChangeAmount = type => () => {
    if (type === '-') {
      setAmount(amount === 1 ? amount : amount - 1);
    } else {
      setAmount(amount === 50 ? amount : amount + 1);
    }
  };

  const onAddToCart = () => {
    dispatch(addItemToCart({...data, amount, topping, note}));
    SlideInModal.hide(() => {
      AnalyticsAction(
        () => navigate(RoutesConfig.MainStack.screens.Product.name),
        {
          routes: RoutesConfig.MainStack.screens.Product,
          action: 'navigation',
        },
      );
    });
  };

  const onPressToppingItem = (index, isChecked) => {
    const toppingTemp = [...topping];
    toppingTemp[index] = {...toppingTemp[index], isChecked};
    setTopping(toppingTemp);
  };

  const getTotalToppingMoney = (data = []) => {
    let total = 0;
    for (let i of data) {
      if (i.isChecked) {
        total += parseInt(i.price);
      }
    }
    return total;
  };

  useEffect(() => {
    dispatch(
      productDetailActions.getProductDetailData({
        id: parseInt(id),
      }),
    );
    if (Platform.OS === 'android') {
      useStatusBarPreview();
      AndroidKeyboardAdjust.setAdjustPan();
    }
    return () =>
      Platform.OS === 'android' && AndroidKeyboardAdjust.setAdjustResize();
  }, []);

  useEffect(() => {
    productsDetail && setData(productsDetail[0]);
  }, [productsDetail]);
  return (
    <View style={styles.wrap}>
      <FImage uri={image} style={styles.coverPhoto} />
      <TouchableOpacity onPress={onGoBack} style={styles.btnClose}>
        <CloseButton />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.flex1}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.flex1}>
          <View style={styles.wrapContent}>
            <Text style={styles.productName}>{name.toUpperCase()}</Text>
            <View style={styles.wrapPrice}>
              {is_sale == 1 ? (
                <>
                  <Text
                    style={styles.textDiscount}>{`${currencyFormatWithNoSpace(
                    parseInt(discount),
                    unit,
                  )}`}</Text>
                  <View style={styles.viewSeparated} />
                  <View>
                    <Text
                      style={
                        styles.textMoneyOrigin
                      }>{`${currencyFormatWithNoSpace(
                      parseInt(value),
                      unit,
                    )}`}</Text>
                    <View style={styles.centerTextMoney} />
                  </View>
                </>
              ) : (
                <Text style={styles.textDiscount}>{`${currencyFormatWithNoSpace(
                  parseInt(value),
                  unit,
                )}`}</Text>
              )}
            </View>
            <ParsedText
              style={styles.des}
              parse={[
                {
                  pattern: /Thành phần:/,
                  style: {...styles.des, ...styles.textLeftDes},
                },
              ]}>
              {des}
            </ParsedText>
          </View>
          <View style={styles.wrapSeparated} />
          <View style={styles.wrapTopping}>
            {is_flash_sale && topping.length ? (
              <View style={styles.toppingTitleWrapper}>
                <Text style={styles.toppingTitle}>
                  {i18next.t('product:product_combo')}
                </Text>
              </View>
            ) : null}
            {topping.map((item, index) => (
              <ToppingItem
                key={item.id}
                index={index}
                name={item.name}
                price={parseInt(item.price)}
                unit={unit}
                wrapStyle={index === topping.length - 1 && {marginBottom: 0}}
                onPress={onPressToppingItem}
              />
            ))}
          </View>
          <View style={styles.wrapSeparated} />
          <ParsedText
            style={styles.specialNote}
            parse={[
              {
                pattern: /Ghi chú đặc biệt/,
                style: styles.rightNote,
              },
            ]}>
            {i18next.t('product:specialNote')}
          </ParsedText>
          <View style={[styles.wrapSeparated, styles.height1]} />
          <TextInput
            multiline
            value={note}
            onChangeText={setNote}
            numberOfLines={10}
            style={[styles.textInput, {textAlignVertical: 'top'}]}
            placeholderTextColor={colors.$btnBorderColor}
            placeholder={i18next.t('product:exampleNote')}
            onSubmitEditing={Keyboard.dismiss}
          />
        </KeyboardAwareScrollView>
      </ScrollView>

      <View style={styles.wrapBottom}>
        <View style={styles.wrapSeparated2} />
        <View style={styles.wrapAmount}>
          <TouchableOpacity onPress={onChangeAmount('-')}>
            <SubButton />
          </TouchableOpacity>
          <Text style={styles.textAmount}>{amount}</Text>
          <TouchableOpacity onPress={onChangeAmount()}>
            <AddProductButton width={30} height={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapBtnAddToCart}>
          <TouchableOpacity onPress={onAddToCart} style={styles.btnAddToCart}>
            <Text style={styles.textAddToCart}>
              {`${i18next.t('product:addToCart')} | ${currencyFormatWithNoSpace(
                parseInt(
                  amount *
                    ((is_sale == 1 ? discount : value) +
                      getTotalToppingMoney(topping)),
                ),
                unit,
              )}`.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
