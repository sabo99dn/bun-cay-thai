import {createSelector} from 'reselect';

export const reducer = state => state.auth;

export const loginSuccessSelector = createSelector(
  reducer,
  data => data?.loginSuccess || false,
);
export const userDataSelector = createSelector(
  reducer,
  data => data?.userData || {},
);
export const loadingSelector = createSelector(
  reducer,
  data => data?.loading || false,
);
export const errorSelector = createSelector(reducer, data => {
  return data?.error || '';
});
