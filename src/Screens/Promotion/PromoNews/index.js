/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Platform,
} from 'react-native';
import styles from './styles';
import {
  getListSelector,
  getListLoadingSelector,
  getHasLoadMoreSelector,
  getPageSelector,
  getLoadListMoreLoading,
} from '../../../Store/promotionNews/selector';
import {actions} from '../../../Store/promotionNews/reducer';

import SlideInModal from '../../../Components/SlideInModal';

import PromoDetails from '../PromotionDetails';

import {useDispatch, useSelector} from 'react-redux';

import Item from './item';
import {LIMIT_DEFAULT, PAGE_DEFAULT} from '../../../Configs/contants';
import {useTranslation} from 'react-i18next';

import Loader from './Loader';

const ListItem = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {i18n} = useTranslation();

  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState(null);

  const loading = useSelector(state => getListLoadingSelector(state));

  const list = useSelector(state => getListSelector(state));

  const hasLoadMore = useSelector(state => getHasLoadMoreSelector(state));

  const loadmoreLoading = useSelector(state => getLoadListMoreLoading(state));

  const page = useSelector(state => getPageSelector(state));

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => {
          SlideInModal.show(() => {}, <PromoDetails item={item} />);
        }}
      />
    );
  };
  React.useEffect(() => {
    dispatch(
      actions.getList({
        page: PAGE_DEFAULT,
        limit: LIMIT_DEFAULT,
      }),
    );
  }, []);

  const _handleRefresh = () => {
    setIsRefreshing(true);
    dispatch(
      actions.getList({
        page: PAGE_DEFAULT,
        limit: LIMIT_DEFAULT,
      }),
    );
  };

  const _handleLoadmore = () => {
    if (hasLoadMore) {
      dispatch(
        actions.getListLoadMore({
          page: page + 1,
          limit: LIMIT_DEFAULT,
        }),
      );
    }
  };

  React.useEffect(() => {
    if (!loading) setIsRefreshing(false);
  }, [loading]);

  const renderFooter = () => {
    return loadmoreLoading ? (
      <View style={styles.viewLoadmore}>
        <ActivityIndicator />
      </View>
    ) : null;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading && !isRefreshing ? (
        <Loader />
      ) : list && list?.length ? (
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={Platform.OS === 'ios' ? true : false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          refreshing={isRefreshing}
          onRefresh={_handleRefresh}
          onEndReached={_handleLoadmore}
          ListFooterComponent={renderFooter}
        />
      ) : (
        <Text style={styles.notFoundText}>{i18n.t('promotion:not_found')}</Text>
      )}
    </SafeAreaView>
  );
};

export default ListItem;
