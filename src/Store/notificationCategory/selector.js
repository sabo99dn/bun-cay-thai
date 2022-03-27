import { createSelector } from 'reselect';
export const reducer = (state) => state.notificationCategory;

export const getListLoadingSelector = createSelector(
  reducer,
  (data) => data?.loading,
);

export const getListSelector = createSelector(
  reducer,
  (data) => data?.list || null,
);

export const getLoadListMoreLoading = createSelector(
  reducer,
  (data) => data?.listMoreLoading || false,
);

export const getHasLoadMoreSelector = createSelector(
  reducer,
  (data) => data?.hasLoadMore || false,
);

export const getPageSelector = createSelector(
  reducer,
  (data) => data?.page,
);

export const getCategorySelectSelector = createSelector(
  reducer,
  (data) => data?.categorySelect || null,
);

export const getCategoryListKeyIdsSelector = createSelector(
  reducer,
  (data) => data?.categoryListKeyIds || {},
);
