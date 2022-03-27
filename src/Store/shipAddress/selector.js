import {createSelector} from 'reselect';
export const reducer = state => state.shipAddress;

export const getListLoadingSelector = createSelector(reducer, data => {
  return data?.loading || false;
});

export const getListSelector = createSelector(
  reducer,
  data => data?.list || null,
);

export const getShipAddressDetailSelector = createSelector(
  reducer,
  data => data?.shipAddressDetailData || {},
);

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
