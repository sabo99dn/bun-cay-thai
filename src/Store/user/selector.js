import {createSelector} from 'reselect';
export const reducer = state => state.user;

export const getUserData = createSelector(reducer, data => data?.userData);

export const getUserAddress = createSelector(
  reducer,
  data =>
    data.userData?.street_address +
    (data.userData.ward !== undefined && data.userData.ward
      ? ', ' + data.userData.ward
      : '') +
    (data.userData.district !== undefined && data.userData.district
      ? ', ' + data.userData.district
      : '') +
    (data.userData.city !== undefined && data.userData.city
      ? ', ' + data.userData.city
      : ''),
);
