import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ParsedText from 'react-native-parsed-text';
import {cartDataSelector} from '../../Store/cart/selectors';
import {ArrowRightIcon} from '../../svg/common';
import {currencyFormatWithNoSpace} from '../../Utils/currency';
import {useNavigation} from '@react-navigation/native';
import {deleteItemCart, updateItemToCart} from '../../Store/cart/actions';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {AnalyticsAction} from '../../Utils/analytics';
import {actions} from '../../Store/vouchers/reducer';
import RoutesConfig from '../../Configs/routes';
import {
  getSelectedBranch,
  getSelectedAddress,
  getSelectedVoucher,
} from '../../Store/cart/selectors';
import {getListSelector as getListVoucherSelector} from '../../Store/vouchers/selector';
import {LIMIT_DEFAULT, PAGE_DEFAULT} from '../../Configs/contants';
import HeaderCT from '../../Components/Header/HeaderCT';
import getDistanceFromLatLonInKm from '../../Utils/locationUtils';
import OrderItem from './Item';
import DeliveryOption from './DeliveryOption';
import {getTotalMoney} from '../Product';
import {setAlertOk} from '../../Components/Alert';
import SlideInModal from '../../Components/SlideInModal';

import BranchModal from './BranchModal';

import AddressModal from './AddressModal';

import VoucherModal from './VoucherModal';

import {useHeaderHeight} from '@react-navigation/stack';

const OrderScreen = () => {
  const navigation = useNavigation();
  const {i18n} = useTranslation();
  const {goBack} = useNavigation();
  const cartData = useSelector(cartDataSelector);
  const dispatch = useDispatch();

  const listVoucher = useSelector(getListVoucherSelector);
  const selectedBranch = useSelector(getSelectedBranch);
  const selectedAddress = useSelector(getSelectedAddress);
  const selectedVoucher = useSelector(getSelectedVoucher);
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalDeliveryFee, setTotalDeliveryFee] = useState(0);
  const [totalPromotion, setTotalPromotion] = useState(0);

  const headerHeight = useHeaderHeight();

  const DeliveryOptions = [
    {
      id: 1,
      name: i18n.t('product:standard_delivery'),
      price: {
        unit: '??',
        value: 0,
      },
      time: '4 gi??? 30 ph??t',
    },
    {
      id: 2,
      name: i18n.t('product:super_fast_delivery'),
      price: {
        unit: '??',
        value: 20000,
      },
      time: '65 ph??t',
    },
  ];
  const [deliveryMethod, setDeliveryMethod] = useState(DeliveryOptions[0]);

  const onChangeAmountProduct = (type, index, amount) => () => {
    const value =
      type === '-' ? (amount > 1 ? amount - 1 : amount) : amount + 1;
    dispatch(
      updateItemToCart({
        index,
        key: 'amount',
        value,
      }),
    );
  };

  const onDeleteItemCart = index => () => dispatch(deleteItemCart(index));

  const onChooseAddress = () => {
    SlideInModal.show(
      () => {},
      <AddressModal isOrder={true} navigation={navigation} />,
      'slideInRight',
      'slideOutRight',
    );
  };

  const onChooseBranchs = () => {
    SlideInModal.show(
      () => {},
      <BranchModal isOrder={true} />,
      'slideInRight',
      'slideOutRight',
    );
  };

  const onChooseVoucher = () => {
    SlideInModal.show(
      () => {},
      <VoucherModal isOrder={true} navigation={navigation} />,
      'slideInRight',
      'slideOutRight',
    );
  };

  const onPressOrder = () => {
    if (!cartData?.length) {
      setAlertOk(null, 'Kh??ng c?? s???n ph???m n??o trong gi??? h??ng !');
      return;
    }
    if (!selectedBranch?.name) {
      setAlertOk(null, 'Vui l??ng ch???n chi nh??nh !');
      return;
    }
    AnalyticsAction(
      () =>
        navigation.navigate(RoutesConfig.MainStack.screens.Payment.name, {
          totalPay: totalMoney + totalDeliveryFee - totalPromotion,
          deliveryMethod,
          branch_name: selectedBranch?.name,
          delivery_address: selectedAddress?.address_name || '?????a ch??? m???c ?????nh',
          cartData,
        }),
      {
        routes: RoutesConfig.MainStack.screens.Payment.name,
        action: 'navigation',
      },
    );
  };

  const handleOnTick = item => setDeliveryMethod(item);

  useEffect(() => {
    dispatch(
      actions.getList({
        page: PAGE_DEFAULT,
        limit: LIMIT_DEFAULT,
      }),
    );
  }, []);

  useEffect(() => {
    setTotalMoney(getTotalMoney(cartData));
  }, [cartData]);

  useEffect(() => {
    setTotalDeliveryFee(deliveryMethod.price.value);
  }, [deliveryMethod]);

  useEffect(() => {
    selectedVoucher &&
      setTotalPromotion(
        getTotalMoney(cartData) >= parseInt(selectedVoucher.minimum_value)
          ? (getTotalMoney(cartData) *
              parseInt(selectedVoucher.discount_percent)) /
              100 >
            parseInt(selectedVoucher.maximum_discount)
            ? parseInt(selectedVoucher.maximum_discount)
            : (getTotalMoney(cartData) *
                parseInt(selectedVoucher.discount_percent)) /
              100
          : 0,
      );
  }, [selectedVoucher, cartData]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', e => {
      SlideInModal.hide();
      return true;
    });
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', e => {
        SlideInModal.hide();
        return true;
      });
    };
  }, []);

  return (
    <View style={styles.container}>
      <HeaderCT
        title={i18n.t('product:cart')}
        isShowBack
        isShowCart
        onBack={goBack}
      />
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 16, marginBottom: 20}}>
          {cartData.map((item, index) => (
            <OrderItem
              key={item.id + index + Math.random()}
              item={item}
              index={index}
              onDeleteItemCart={onDeleteItemCart}
              onChangeAmountProduct={onChangeAmountProduct}
            />
          ))}
        </View>
        <View style={styles.viewSeparated} />
        <View style={styles.wrapSelect}>
          <Text style={styles.titleSelect}>{`${i18n.t(
            'product:nearestBranch',
          )}:`}</Text>
          <TouchableOpacity style={styles.btnSelect} onPress={onChooseBranchs}>
            <Text style={styles.textSelect}>
              {selectedBranch?.name || 'Ch??a ch???n chi nh??nh'}
            </Text>
            <ArrowRightIcon />
          </TouchableOpacity>
          <Text style={styles.titleSelect}>
            {`${i18n.t('product:delivery_to')}:`}
          </Text>
          <TouchableOpacity style={styles.btnSelect} onPress={onChooseAddress}>
            <Text style={styles.textSelect}>
              {selectedAddress?.address_name || '?????a ch??? m???c ?????nh'}
            </Text>
            <ArrowRightIcon />
          </TouchableOpacity>
          <ParsedText
            style={styles.textSelect2}
            parse={[
              {
                pattern: /Th??m khuy???n m??i/,
                style: styles.titleSelect,
              },
            ]}>
            {`Th??m khuy???n m??i (B???n c?? ${listVoucher?.length} m?? khuy???n m??i)`}
          </ParsedText>
          <TouchableOpacity
            onPress={onChooseVoucher}
            style={[styles.btnSelect, styles.btnSelect2]}>
            <Text
              style={
                selectedVoucher?.title ? styles.textSelect : styles.textSelect3
              }>
              {selectedVoucher?.title
                ? (selectedVoucher?.title).toUpperCase()
                : i18n.t('product:not_selected_voucher')}
            </Text>
            <ArrowRightIcon color={'#FE5627'} />
          </TouchableOpacity>
          <View style={styles.wrapTitle}>
            <Text style={styles.titleSelect}>{`${i18n.t(
              'product:delivery_distance',
            )}`}</Text>
            <Text style={styles.desRight}>
              {selectedBranch &&
                selectedAddress &&
                selectedBranch.lat &&
                `${getDistanceFromLatLonInKm(
                  selectedBranch.lat,
                  selectedBranch.lng,
                  selectedAddress.lat,
                  selectedAddress.lng,
                )} km`}
            </Text>
          </View>
          {DeliveryOptions.map(item => (
            <DeliveryOption
              key={item.id}
              deliveryMethod={deliveryMethod}
              handleOnTick={handleOnTick}
              item={item}
            />
          ))}
        </View>
        <View style={styles.viewSeparated} />
        <View style={{paddingHorizontal: 16, paddingBottom: 20}}>
          <View style={styles.wrapTitle}>
            <Text style={styles.titleSelect}>{`${i18n.t(
              'product:provisional',
            )}`}</Text>
            <Text style={[styles.desRight, styles.textBlack]}>
              {`${currencyFormatWithNoSpace(totalMoney)}`}
            </Text>
          </View>
          <View style={styles.wrapTitle}>
            <Text style={styles.titleSelect}>{`${i18n.t(
              'product:delivery_fee',
            )}`}</Text>
            <Text style={[styles.desRight, styles.textBlack]}>
              {`${currencyFormatWithNoSpace(
                totalDeliveryFee,
                deliveryMethod.price.unit,
              )}`}
            </Text>
          </View>
          <View style={styles.wrapTitle}>
            <Text style={styles.titleSelect}>{`${i18n.t(
              'bottom_tab:promo',
            )}`}</Text>
            <Text style={[styles.desRight, styles.textPrimary]}>
              {`${currencyFormatWithNoSpace(totalPromotion)}`}
            </Text>
          </View>
          <View style={styles.wrapTitle}>
            <Text style={styles.titleSelect}>{`${i18n.t(
              'product:into_money',
            )}`}</Text>
            <Text style={[styles.desRight, styles.textRed]}>
              {`${currencyFormatWithNoSpace(
                totalMoney + totalDeliveryFee - totalPromotion,
              )}`}
            </Text>
          </View>
        </View>
        <View style={styles.viewSeparated} />
        <Text style={styles.desBottom}>{i18n.t('product:desBottomOrder')}</Text>
      </ScrollView>
      <View style={styles.wrapBottom}>
        <TouchableOpacity onPress={onPressOrder} style={styles.btnTakeOrder}>
          <Text style={styles.textBtnTakeOrder}>{`${i18n.t(
            'product:takeOrder',
          )}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goBack} style={styles.btnAddProduct}>
          <Text style={styles.textBtnTakeOrder}>{`${i18n.t(
            'product:addMenu',
          )}`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderScreen;
