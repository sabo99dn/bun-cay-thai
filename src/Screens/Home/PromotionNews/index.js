import React, {useEffect, useState} from 'react';
import {Platform, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Item from './item';
import {
  getListLoadingSelector,
  getListSelector,
} from '../../../Store/promotionNews/selector';
import {actions} from '../../../Store/promotionNews/reducer';
import {LIMIT_DEFAULT, PAGE_DEFAULT} from '../../../Configs/contants';
import PromotionNewsLoader from './PromotionNewsLoader';

const PromotionNews = () => {
  const [initLoad, setInitLoad] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector(state => getListLoadingSelector(state));
  const listSelector = useSelector(state => getListSelector(state));
  const list = listSelector.slice(0, 4) || [];

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
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <PromotionNewsLoader
              key={'PromotionNewsLoader' + index}
              width={150}
              height={150}
              style={{
                width: 150,
                height: 150,
              }}
            />
          );
        })}
      </View>
    ) : null;
  } else {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {list.map((item, index) => {
          return (
            <Item
              key={'PromotionNews' + index}
              item={item}
              onPress={() => setSelectedId(item.id)}
            />
          );
        })}
      </View>
    );
  }
};

export default PromotionNews;
