import {createSelector} from 'reselect';
export const reducer = state => state.promotionNews;

export const getListLoadingSelector = createSelector(reducer, data => {
  return data?.loading || false;
});

export const getListSelector = createSelector(reducer, data => {
  return data?.list || null;
});

export const getLoadListMoreLoading = createSelector(
  reducer,
  data => data?.listMoreLoading || false,
);

export const getHasLoadMoreSelector = createSelector(
  reducer,
  data => data?.hasLoadMore || false,
);

export const getPageSelector = createSelector(reducer, data => data?.page);

export const getCountUnreadSelector = createSelector(
  reducer,
  data => data?.countUnread || 0,
);
