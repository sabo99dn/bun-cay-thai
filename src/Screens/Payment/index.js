import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import HeaderCT from '../../Components/Header/HeaderCT';
import {useTranslation} from 'react-i18next';
import {useNavigation, useRoute} from '@react-navigation/native';
import {icons} from '../../assets';
import Item from './item';
import {useDispatch, useSelector} from 'react-redux';
import {userDataSelector} from '../../Store/auth/selectors';
import {moneyFormat} from '../../Utils/currency';
import styles from './styles';
import {AnalyticsAction} from '../../Utils/analytics';
import RoutesConfig from '../../Configs/routes';
import {actions as OrderActions} from '../../Store/orders/reducer';
import {
  getErrCreateOrder,
  getLoadingCreatOrder,
} from '../../Store/orders/selector';
import {setAlertOk} from '../../Components/Alert';
import {usePrevious} from '../../Hooks';
import {FullLoading} from '../../Components/Loading';
import {resetCart} from '../../Store/cart/actions';

const paymentMethod = [
  {
    id: 1,
    name: 'Thanh toán qua ví Momo',
    des: 'Hướng dẫn thanh toán qua MoMo',
    icon: icons.momo,
    icon_url:
      'https://s3-alpha-sig.figma.com/img/9bd6/b1cf/45c46b781457b1c490387fb3a6d78470?Expires=1627862400&Signature=Mmy-rGtYN-yAbYHABN5Hb3CmQ3JZsCOthYMdOqfVnao3-AmH7fJjtK~FaMFL-zRf~S6EuzUMzXoenHBedzqn0eOJoF4H3kPDUpFUhzbygRx46A039d7s1VaMJA3TAeUJ5YoeN3WL2s8TEM5j~CCOSs~IgOIj7PI-hohd4L7K2mCSHbbTrUmMJcVu~IfX9DIDTomxbonMoYuoRmqqKKBt4tS2mX4I5kLpsZzGEn9Az~ETPGCJ-p8M~sV6uneNyJqmYca2CWEokrTO4MAUnZcDaR5MYVL0ACM79So~W~9EpylkBJFOSvKsY9wNMPu0rhFeMImwCQrlnfOXL5iq6jFOgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: 2,
    name: 'Thanh toán qua ví VNPay',
    des: 'Hướng dẫn thanh toán qua VNPay',
    icon: icons.vnPay,
    icon_url:
      'https://s3-alpha-sig.figma.com/img/888d/fb52/54c723c47c1eea5bbe3f5ec7bb48d60f?Expires=1627862400&Signature=WjiSrF9sBjVk4CuZEPKmvC5o9JjG1z8tW0OVRpQyIWerdtMa5F8lAx1c7hfqjIL-2bZpSlTXArb-PlS9VsrmVTNYhoGFDdsUhy96mOBkxJyoAOZn8Tfyv~fJb5mLmx8G1U4tnSlOhf9Bd5QrCq~5cERvJ7hH~OIgVGW75dmxkHh08m4F6u35D8FCfoQTh2U1wG1YQGUBD10QkovUoxVvBxTG6A03BlbG2290NByJfB6es5AkfSmhGxwQjFJy~RP1R1I1E8byhWBn5wCNTIAdeFw5G7cKYyYo1klITUy8mUGxdn~FCmf6EKFWlnullPeO6dC6yHhgIWv9QCM3Cd1BAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: 3,
    name: 'Thanh toán tiền mặt',
    des: 'Hướng dẫn thanh toán tiền mặt',
    icon: icons.cash,
    icon_url:
      'https://s3-alpha-sig.figma.com/img/e081/a7d4/87ab1c8b6bb221b6d47e7a58a4193f0c?Expires=1627862400&Signature=RpWwSbiFhJKW-az6OjX9Nva6YQmClje4~0BYxqzNCVcVIa~JyiV0F~RmWBM1zfHUVafBFT-lHZNu4ueg6m~s6KdefbtQktl27YcZFI06Dl69MquGYcoL23baziX8-qm0ml9xW-QPHD4h851bbYn8G-O8U1Pq2LLEcHb3VP7AD1fGFZttbeK6SJo2tRbQIpBZ6RNNfxqI9o9QEVI2kPi1zmgb5HcMNekaUc1B9yDAlttMZtP1jTa66V6o7o0HitQb2bAcbfAKgq6Hb9b~9DyC4WHdc7taBuslORBRLLgVaXAjn-Ai3weFgHwTBeZ1d7V51-ye1NTKcBsn51u572XNew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
];

const getOrderCode = () =>
  Math.random().toString(36).substr(2, 8).toUpperCase();

const Payment = () => {
  const {i18n} = useTranslation();
  const dispatch = useDispatch();
  const {goBack, navigate} = useNavigation();
  const {
    params: {
      totalPay = 0,
      deliveryMethod = {},
      branch_name = '',
      delivery_address = '',
      cartData,
    } = {},
  } = useRoute();
  const userData = useSelector(userDataSelector);
  const isCreatingOrder = useSelector(getLoadingCreatOrder);
  const isCreatingOrderPrevious = usePrevious(isCreatingOrder);
  const errCreatOrder = useSelector(getErrCreateOrder);
  const [activeMethod, setActiveMethod] = useState(1);
  const order_code = getOrderCode();

  const onPressMethod = id => () => setActiveMethod(id);

  const onPay = () => {
    const orderId = Date.now();
    const orderData = {
      order_code,
      totalPay,
      deliveryMethod,
      created: new Date(),
      branch_name,
      delivery_address,
      cartData,
      paymentMethod: paymentMethod.find(item => item.id === activeMethod),
      userId: userData?.id,
      status: {
        id: 1,
        name: 'ĐƠN HÀNG MỚI',
      },
      id: orderId,
    };
    dispatch(OrderActions.createOrder(orderData));
  };

  useEffect(() => {
    if (!isCreatingOrder && isCreatingOrderPrevious) {
      if (errCreatOrder) {
        setAlertOk('Lỗi', errCreatOrder);
      } else {
        dispatch(resetCart());
        AnalyticsAction(
          () =>
            navigate(
              RoutesConfig.MainStack.screens.BottomTabs.screens.CartStack
                .screens.PaymentDone.name,
            ),
          {
            routes:
              RoutesConfig.MainStack.screens.BottomTabs.screens.CartStack
                .screens.PaymentDone.name,
            action: 'navigation',
          },
        );
      }
    }
  }, [isCreatingOrder, isCreatingOrderPrevious, errCreatOrder]);

  return (
    <View style={styles.wrap}>
      <HeaderCT
        title={i18n.t('screensTitle:Payment')}
        isShowBack
        isShowCart
        onBack={goBack}
      />
      <View style={{flex: 1}}>
        {isCreatingOrder && <FullLoading />}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapPaymentMethod}>
            <Text style={styles.title}>
              {i18n.t('product:select_payment_method')}
            </Text>
            {paymentMethod.map(item => (
              <Item
                key={item.id}
                {...item}
                onPressMethod={onPressMethod}
                activeMethod={activeMethod}
              />
            ))}
          </View>
          <View style={styles.separated} />
          <View style={[styles.wrapInfo, styles.shadow]}>
            <View style={styles.row}>
              <Text style={styles.textLeft}>
                {`${i18n.t('product:customer')}:`}
              </Text>
              <Text style={[styles.textLeft, styles.textBold]}>
                {userData?.full_name}
              </Text>
            </View>
            <View style={[styles.row, styles.marginTop20]}>
              <Text style={styles.textLeft}>
                {`${i18n.t('auth:field_number_phone')}:`}
              </Text>
              <Text style={[styles.textLeft, styles.textBold]}>
                {userData?.number_phone}
              </Text>
            </View>
            <View style={[styles.row, styles.marginTop20]}>
              <Text style={styles.textLeft}>
                {`${i18n.t('product:order_code')}:`}
              </Text>
              <Text
                style={[styles.textLeft, styles.textBold, styles.textGreen]}>
                {order_code}
              </Text>
            </View>
            <View style={[styles.row, styles.marginTop20]}>
              <Text style={styles.textLeft}>
                {`${i18n.t('product:estimated_delivery_time')}:`}
              </Text>
              <Text
                style={[styles.textLeft, styles.textBold, styles.textGreen]}>
                {deliveryMethod?.time}
              </Text>
            </View>
            <View style={[styles.row, styles.marginTop20]}>
              <Text style={styles.textLeft}>
                {`${i18n.t('product:total_pay')}:`}
              </Text>
              <Text
                style={[styles.textLeft, styles.textBold, styles.textMoney]}>
                {`${moneyFormat(totalPay)}đ`}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.wrapBottom}>
          <TouchableOpacity onPress={onPay} style={styles.btnPay}>
            <Text style={styles.textPay}>{i18n.t('product:pay')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Payment;
