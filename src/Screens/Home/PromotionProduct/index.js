import React, {useEffect, useState, useMemo} from 'react';
import {FlatList, Platform} from 'react-native';
import Item from './item';
import {useDispatch, useSelector} from 'react-redux';
import {
  getListLoadingSelector,
  getListSelector,
} from '../../../Store/productSale/selector';
import {actions} from '../../../Store/productSale/reducer';
import {LIMIT_DEFAULT, PAGE_DEFAULT} from '../../../Configs/contants';
import PromotionProductLoader from './PromotionProductLoader';

const PromotionProduct = () => {
  const [initLoad, setInitLoad] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector(state => getListLoadingSelector(state));

  const listSelector = useSelector(state => getListSelector(state));
  const list = listSelector || [];

  useEffect(() => {
    dispatch(
      actions.getList({
        page: PAGE_DEFAULT,
        limit: LIMIT_DEFAULT,
      }),
    );
    setInitLoad(true);
  }, []);
  if (list.length === 0) {
    return loading || !initLoad ? (
      <FlatList
        data={[1, 2, 3, 4]}
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        renderItem={() => (
          <PromotionProductLoader
            width={150}
            height={150}
            style={{
              width: 150,
              height: 150,
            }}
          />
        )}
        keyExtractor={(_, index) => index}
        extraData={selectedId}
      />
    ) : null;
  } else {
    return (
      <FlatList
        data={list}
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        renderItem={({item}) => (
          <Item item={item} onPress={() => setSelectedId(item.id)} />
        )}
        keyExtractor={(_, index) => index}
        extraData={selectedId}
      />
    );
  }
};

export default PromotionProduct;
