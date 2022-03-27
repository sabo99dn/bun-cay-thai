import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  View,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';

import {Button, ContainerView} from '../../Components';
import styles from './styles';
import Item from './item';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  getListLoadingSelector,
  getListSelector,
  getLoadListMoreLoading,
  getPageSelector,
  getHasLoadMoreSelector,
} from '../../Store/shipAddress/selector';
import {useDispatch, useSelector} from 'react-redux';
import {LIMIT_DEFAULT, PAGE_DEFAULT} from '../../Configs/contants';

import {actions} from '../../Store/shipAddress/reducer';
import {getUserData} from '../../Store/user/selector';
import {showMessage} from 'react-native-flash-message';
import {actions as userActions} from '../../Store/user/reducer';
import {AnalyticsAction} from '../../Utils/analytics';
import RoutesConfig from '../../Configs/routes';

import Loader from './Loader';

import {setSelectedAddress} from '../../Store/cart/actions';

const ShippingAddress = () => {
  const route = useRoute();

  const isOrder = route.params?.isOrder || false;

  const {i18n} = useTranslation();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const userInfor = useSelector(state => getUserData(state));

  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const loading = useSelector(state => getListLoadingSelector(state));

  const list = useSelector(state => getListSelector(state));

  const hasLoadMore = useSelector(state => getHasLoadMoreSelector(state));

  const loadmoreLoading = useSelector(state => getLoadListMoreLoading(state));

  const page = useSelector(state => getPageSelector(state));

  const [defaultAddress, setDefaultAddress] = React.useState(
    userInfor?.default_address || null,
  );

  const renderFooter = () => {
    return loadmoreLoading ? (
      <View style={styles.viewLoadmore}>
        <ActivityIndicator />
      </View>
    ) : null;
  };

  const _handleRefresh = () => {
    setIsRefreshing(true);
    dispatch(
      actions.getList({
        page: PAGE_DEFAULT,
        limit: LIMIT_DEFAULT,
        user_id: userInfor?.id,
      }),
    );
  };

  const _handleLoadmore = () => {
    if (hasLoadMore && !loading) {
      dispatch(
        actions.getListLoadMore({
          page: page + 1,
          limit: LIMIT_DEFAULT,
          user_id: userInfor?.id,
        }),
      );
    }
  };

  React.useEffect(() => {
    if (!loading) setIsRefreshing(false);
  }, [loading]);
  React.useEffect(() => {
    dispatch(
      actions.getList({
        page: PAGE_DEFAULT,
        limit: LIMIT_DEFAULT,
        user_id: userInfor?.id,
      }),
    );
  }, []);

  const onChangeAddress = async () => {
    try {
      dispatch(
        userActions.setInfoData({
          ...userInfor,
          default_address: defaultAddress,
        }),
      );
      showMessage({
        message: i18n.t('auth:success'),
        description: i18n.t('auth:update_default_success'),
        type: 'success',
      });
    } catch (err) {
      showMessage({
        message: i18n.t('reports:failed'),
        description: i18n.t('profile:update_default_address_failed'),
        type: 'danger',
      });
    }
  };

  const onSetSelectedOrderAddress = () => {
    dispatch(
      setSelectedAddress(list?.find(item => item?.id === defaultAddress)),
    );
    navigation.goBack();
  };

  return (
    <ContainerView fluid style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.listWrapper}>
          {loading && !isRefreshing ? (
            <Loader />
          ) : list && list?.length ? (
            <FlatList
              data={list}
              contentContainerStyle={styles.listInner}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <Item
                  item={item}
                  onPress={() => setDefaultAddress(item?.id)}
                  active={defaultAddress === item?.id}
                />
              )}
              keyExtractor={(item, index) => index}
              refreshing={isRefreshing}
              onRefresh={_handleRefresh}
              ListFooterComponent={renderFooter}
              onEndReached={_handleLoadmore}
            />
          ) : (
            <Text style={styles.notFoundText}>
              {i18n.t('promotion:not_found')}
            </Text>
          )}
        </View>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <Button
          styleTextInput={styles.buttonLabel}
          styleButton={styles.addAddress}
          label={i18n.t('profiles:add_address')}
          onPress={() => {
            AnalyticsAction(
              () =>
                navigation.navigate(
                  RoutesConfig.MainStack.screens.AddShippingAddress.name,
                ),
              {
                routes: RoutesConfig.MainStack.screens.AddShippingAddress.name,
                action: 'navigation',
              },
            );
          }}
        />
        <Button
          styleTextInput={styles.buttonLabel}
          styleButton={
            isOrder
              ? styles.confirm
              : userInfor?.default_address === defaultAddress
              ? styles.confirmDisable
              : styles.confirm
          }
          label={i18n.t('profiles:confirm')}
          onPress={isOrder ? onSetSelectedOrderAddress : onChangeAddress}
          disabled={
            isOrder ? false : userInfor?.default_address === defaultAddress
          }
        />
      </View>
    </ContainerView>
  );
};

export default ShippingAddress;
