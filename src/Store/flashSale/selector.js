import {createSelector} from 'reselect';
export const reducer = state => state.flashSale;

export const getListLoadingSelector = createSelector(
  reducer,
  data => data?.loading,
);

export const getListSelector = createSelector(
  reducer,
  data => data?.list || null,
);

export const getListTitleSelector = createSelector(
  reducer,
  data => data?.title || '',
);

export const getListStartTimeSelector = createSelector(
  reducer,
  data => data?.startTime || null,
);

export const getListEndTimeSelector = createSelector(
  reducer,
  data => data?.endTime || null,
);

export const getSaleDetailLoadingSelector = createSelector(
  reducer,
  data => data?.detailLoading,
);

export const getSaleDetailSelector = createSelector(
  reducer,
  data => data?.saleDetail || false,
);
