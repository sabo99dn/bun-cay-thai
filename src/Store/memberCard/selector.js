import {createSelector} from 'reselect';
export const reducer = state => state.memberCard;

export const getMemberCardData = createSelector(
  reducer,
  data => data?.memberCardData,
);
