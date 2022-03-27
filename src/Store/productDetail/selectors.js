import {createSelector} from 'reselect';

export const reducer = state => state.productDetail;

export const productsDetailData = createSelector(
  reducer,
  data => data.productsDetailData ?? [],
);
export const getListLoadingSelector = createSelector(reducer, data => {
  return data?.loading || false;
});
