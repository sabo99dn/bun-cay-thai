import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import ItemSlider from './item';
const dim = Dimensions.get('screen');
import {useDispatch, useSelector} from 'react-redux';
import {
  getListLoadingSelector,
  getListSelector,
} from '../../../Store/sliders/selector';
import {actions} from '../../../Store/sliders/reducer';
import {PAGE_DEFAULT, GET_ALL_DATA_LIMIT} from '../../../Configs/contants';
import {SliderLoader} from './SliderLoader';

const Carousel = () => {
  const [initLoad, setInitLoad] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(state => getListLoadingSelector(state));
  const listSelector = useSelector(state => getListSelector(state));
  const list = listSelector || [];
  useEffect(() => {
    dispatch(
      actions.getList({
        page: PAGE_DEFAULT,
        limit: GET_ALL_DATA_LIMIT,
      }),
    );
    setInitLoad(true);
  }, []);
  if (list.length === 0) {
    return loading || !initLoad ? (
      <SliderLoader
        width={dim.width - 20}
        height={(dim.width - 20) / 1.7}
        style={{
          paddingLeft: 10,
          width: dim.width - 20,
          height: (dim.width - 20) / 1.7,
        }}
      />
    ) : null;
  } else {
    return (
      <FlatListSlider
        data={list}
        imageKey={'img_url'}
        style={{borderRadius: 16}}
        timer={5000}
        indicator={false}
        width={dim.width}
        height={(dim.width - 20) / 1.7}
        component={<ItemSlider />}
      />
    );
  }
};

export default Carousel;
