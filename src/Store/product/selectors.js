import {createSelector} from 'reselect';
export const reducer = state => state.product;

export const getListLoadingSelector = createSelector(reducer, data => {
  return data?.loading || false;
});

export const getListSelector = createSelector(
  reducer,
  data => data?.list || null,
);
