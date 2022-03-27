import {createSelector} from 'reselect';

export const cart = state => state.cart;

export const cartDataSelector = createSelector(
  cart,
  data => data.cartData ?? [],
);
export const getSelectedBranch = createSelector(
  cart,
  data => data?.selectedBranch || {},
);
export const getSelectedAddress = createSelector(
  cart,
  data => data?.selectedAddress || {},
);
export const getSelectedVoucher = createSelector(
  cart,
  data => data?.selectedVoucher || {},
);
