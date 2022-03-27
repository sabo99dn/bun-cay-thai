import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  View,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';

import {Button, ContainerView} from '../../../Components';
import styles from './styles';
import Item from './item';
import {
  getListLoadingSelector,
  getListSelector,
  getLoadListMoreLoading,
  getPageSelector,
  getHasLoadMoreSelector,
} from '../../../Store/shipAddress/selector';
import {useDispatch, useSelector} from 'react-redux';
import {LIMIT_DEFAULT, PAGE_DEFAULT} from '../../../Configs/contants';

import {actions} from '../../../Store/shipAddress/reducer';
import {getUserData} from '../../../Store/user/selector';
import {showMessage} from 'react-native-flash-message';
import {actions as userActions} from '../../../Store/user/reducer';
import {AnalyticsAction} from '../../../Utils/analytics';
import RoutesConfig from '../../../Configs/routes';

import Loader from './Loader';

import {setSelectedAddress} from '../../../Store/cart/actions';
import HeaderCT from '../../../Components/Header/HeaderCT';
import SlideInModal from '../../../Components/SlideInModal';

const ShippingAddress = ({navigation, isOutOrder = false}) => {
  const {i18n} = useTranslation();

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

  const onSetSelectedOrderAddress = () => {
    dispatch(
      setSelectedAddress(list?.find(item => item?.id === defaultAddress)),
    );
    SlideInModal.hide();
  };

  const onChangeAddress = async () => {
    try {
      const newAddress =
        list?.filter(item => item.id === defaultAddress)?.[0] || {};
      dispatch(
        userActions.setInfoData({
          ...userInfor,
          default_address: defaultAddress,
          ...newAddress,
        }),
      );
      showMessage({
        message: i18n.t('auth:success'),
        description: i18n.t('auth:update_default_success'),
        type: 'success',
      });
      SlideInModal.hide();
    } catch (err) {
      showMessage({
        message: i18n.t('reports:failed'),
        description: i18n.t('profile:update_default_address_failed'),
        type: 'danger',
      });
    }
  };

  return (
    <ContainerView fluid style={styles.container}>
      <HeaderCT
        headerStyle={{marginTop: 0}}
        title={i18n.t('profiles:choose_address')}
      />
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
            SlideInModal.hide();
            AnalyticsAction(
              () =>
                navigation.navigate(
                  RoutesConfig.MainStack.screens.AddShippingAddress.name,
                  {
                    fromOrder: true,
                  },
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
          styleButton={styles.confirm}
          label={i18n.t('profiles:confirm')}
          onPress={isOutOrder ? onChangeAddress : onSetSelectedOrderAddress}
        />
      </View>
    </ContainerView>
  );
};

export default ShippingAddress;
