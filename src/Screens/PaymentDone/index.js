import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import HeaderCT from '../../Components/Header/HeaderCT';
import {useTranslation} from 'react-i18next';
import {AnalyticsAction} from '../../Utils/analytics';
import RoutesConfig from '../../Configs/routes';
import {FileIcon, PaymentDoneIcon} from '../../svg/common';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../../Store/orders/reducer';
import {LIMIT_DEFAULT, PAGE_DEFAULT} from '../../Configs/contants';
import {getUserData} from '../../Store/user/selector';
const PaymentDone = ({navigation}) => {
  const dispatch = useDispatch();

  const {i18n} = useTranslation();
  const userInfor = useSelector(state => getUserData(state));
  const _handlePress = () => {
    dispatch(
      actions.getList({
        page: PAGE_DEFAULT,
        limit: LIMIT_DEFAULT,
        user_id: userInfor?.id,
      }),
    );
    navigation.popToTop();

    AnalyticsAction(
      () =>
        navigation.navigate(
          RoutesConfig.MainStack.screens.BottomTabs.screens.ProfileStack,
        ),
      {
        routes:
          RoutesConfig.MainStack.screens.BottomTabs.screens.ProfileStack.screens
            .OrderList.name,
        action: 'navigation',
      },
    );
    setTimeout(
      () =>
        AnalyticsAction(
          () =>
            navigation.navigate(
              RoutesConfig.MainStack.screens.BottomTabs.screens.ProfileStack
                .screens.OrderList.name,
            ),
          {
            routes:
              RoutesConfig.MainStack.screens.BottomTabs.screens.ProfileStack
                .screens.OrderList.name,
            action: 'navigation',
          },
        ),
      10,
    );
  };

  const onBack = () => {
    AnalyticsAction(
      () =>
        navigation.navigate(
          RoutesConfig.MainStack.screens.BottomTabs.screens.CartStack.screens
            .Product.name,
        ),
      {
        routes:
          RoutesConfig.MainStack.screens.BottomTabs.screens.CartStack.screens
            .Product.name,
        action: 'navigation',
      },
    );
  };

  return (
    <View style={styles.wrap}>
      <HeaderCT
        title={i18n.t('screensTitle:PaymentDone')}
        onBack={onBack}
        isShowBack
      />
      <View style={styles.wrapContent}>
        <PaymentDoneIcon />
        <Text style={styles.text}>{i18n.t('product:payment_success')}</Text>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.btn, styles.shadow]}
          onPress={_handlePress}>
          <FileIcon />
          <Text style={styles.des}>{i18n.t('product:manage_order')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentDone;
