import React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, View, FlatList, Text} from 'react-native';

import {Button, ContainerView} from '../../Components';
import styles from './styles';
import Item from './item';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {LIMIT_DEFAULT, PAGE_DEFAULT} from '../../Configs/contants';
import {getUserData} from '../../Store/user/selector';
import {
  getListLoadingSelector,
  getListSelector,
  getLoadListMoreLoading,
  getPageSelector,
  getHasLoadMoreSelector,
} from '../../Store/orders/selector';

import {actions} from '../../Store/orders/reducer';
import Loader from './Loader';

const OrderList = () => {
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
        user_id: '2',
      }),
    );
  }, []);

  return (
    <ContainerView fluid style={styles.container}>
      {loading && !isRefreshing ? (
        <Loader />
      ) : list && list?.length ? (
        <FlatList
          style={styles.listWrapper}
          contentContainerStyle={styles.listInner}
          data={list}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => <Item item={item} />}
          refreshing={isRefreshing}
          onRefresh={_handleRefresh}
          onEndReached={_handleLoadmore}
          ListFooterComponent={renderFooter}
        />
      ) : (
        <Text style={styles.notFoundText}>{i18n.t('promotion:not_found')}</Text>
      )}
    </ContainerView>
  );
};

export default OrderList;
