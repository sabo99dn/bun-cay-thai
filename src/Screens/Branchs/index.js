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
} from '../../Store/branch/selector';
import {useDispatch, useSelector} from 'react-redux';
import {LIMIT_DEFAULT, PAGE_DEFAULT} from '../../Configs/contants';

import {actions} from '../../Store/branch/reducer';
import {getUserData} from '../../Store/user/selector';

import Loader from './Loader';

import {setSelectedBranch} from '../../Store/cart/actions';
import {getSelectedBranch} from '../../Store/cart/selectors';

const Branch = () => {
  const navigation = useNavigation();

  const selectedBranch = useSelector(getSelectedBranch);

  const route = useRoute();

  const isOrder = route.params?.isOrder || false;

  const {i18n} = useTranslation();

  const dispatch = useDispatch();

  const userInfor = useSelector(state => getUserData(state));

  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const loading = useSelector(state => getListLoadingSelector(state));

  const list = useSelector(state => getListSelector(state));

  const hasLoadMore = useSelector(state => getHasLoadMoreSelector(state));

  const loadmoreLoading = useSelector(state => getLoadListMoreLoading(state));

  const page = useSelector(state => getPageSelector(state));

  const [defaultBranch, setDefaultBranch] = React.useState(
    list?.findIndex(item => item?.id === selectedBranch?.id),
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

  const _handleSelectBranch = () => {
    let selectedItem = list?.[defaultBranch || 0] || {};
    dispatch(setSelectedBranch(selectedItem));
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
                  onPress={() => setDefaultBranch(index)}
                  active={defaultBranch === index}
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
        {isOrder ? (
          <View style={styles.buttonContainer}>
            <Button
              styleTextInput={styles.buttonLabel}
              styleButton={styles.confirm}
              label={i18n.t('profiles:confirm')}
              onPress={_handleSelectBranch}
            />
          </View>
        ) : null}
      </SafeAreaView>
    </ContainerView>
  );
};

export default Branch;
