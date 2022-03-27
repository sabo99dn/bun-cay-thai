/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {
  Image,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Item from './item';
import styles from './styles';

import {
  getListSelector,
  getListLoadingSelector,
  getHasLoadMoreSelector,
  getPageSelector,
  getLoadListMoreLoading,
} from '../../../Store/vouchers/selector';
import {actions} from '../../../Store/vouchers/reducer';

import {useDispatch, useSelector} from 'react-redux';
import {LIMIT_DEFAULT, PAGE_DEFAULT} from '../../../Configs/contants';
import {useTranslation} from 'react-i18next';

import Loader from './Loader';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Button, ContainerView} from '../../../Components';
import {AnalyticsAction} from '../../../Utils/analytics';
import RoutesConfig from '../../../Configs/routes';
import {setSelectedVoucher} from '../../../Store/cart/actions';
import HeaderCT from '../../../Components/Header/HeaderCT';
import SlideInModal from '../../../Components/SlideInModal';

const ListItem = ({navigation}) => {
  const dispatch = useDispatch();

  const {i18n} = useTranslation();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const loading = useSelector(state => getListLoadingSelector(state));

  const list = useSelector(state => getListSelector(state));

  const hasLoadMore = useSelector(state => getHasLoadMoreSelector(state));

  const loadmoreLoading = useSelector(state => getLoadListMoreLoading(state));

  const page = useSelector(state => getPageSelector(state));

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
  const onReadNewsPress = () => {
    SlideInModal.hide();
    AnalyticsAction(
      () =>
        navigation.navigate(
          RoutesConfig.MainStack.screens.BottomTabs.screens.Promotion,
          {},
        ),
      {
        routes:
          RoutesConfig.MainStack.screens.BottomTabs.screens.Promotion.screens
            .Promotion.name,
        action: 'navigation',
      },
    );
  };
  const onItemPress = item => {
    dispatch(setSelectedVoucher(item));
    SlideInModal.hide();
  };
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => onItemPress(item)} />;
  };
  return (
    <ContainerView fluid style={styles.container}>
      <HeaderCT
        headerStyle={{marginTop: 0}}
        title={i18n.t('profiles:choose_voucher')}
      />
      <SafeAreaView style={{flex: 1}}>
        {loading && !isRefreshing ? (
          <Loader />
        ) : list && list?.length ? (
          <>
            <FlatList
              style={styles.listWrapper}
              data={list}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              removeClippedSubviews={Platform.OS === 'ios' ? true : false}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              refreshing={isRefreshing}
              onRefresh={_handleRefresh}
              ListFooterComponent={renderFooter}
              onEndReached={_handleLoadmore}
              // extraData={selectedId}
            />

            <View style={styles.buttonContainer}>
              <Button
                styleTextInput={styles.buttonLabel}
                styleButton={styles.confirm}
                label={i18n.t('promotion:see_news')}
                onPress={onReadNewsPress}
              />
            </View>
          </>
        ) : (
          <Text style={styles.notFoundText}>
            {i18n.t('promotion:not_found')}
          </Text>
        )}
      </SafeAreaView>
    </ContainerView>
  );
};

export default ListItem;
