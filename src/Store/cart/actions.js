import ActionsType from './constants';

export const addItemToCart = payload => ({
  type: ActionsType.ADD_ITEM_TO_CART,
  payload,
});

export const updateItemToCart = payload => ({
  type: ActionsType.UPDATE_ITEM_TO_CART,
  payload,
});

export const deleteItemCart = payload => ({
  type: ActionsType.DELETE_ITEM_TO_CART,
  payload,
});

export const setSelectedBranch = payload => ({
  type: ActionsType.SET_SELECTED_BRANCH,
  payload,
});

export const setSelectedAddress = payload => ({
  type: ActionsType.SET_SELECTED_ADDRESS,
  payload,
});

export const setSelectedVoucher = payload => ({
  type: ActionsType.SET_SELECTED_VOUCHER,
  payload,
});

export const resetCart = () => ({
  type: ActionsType.RESET_CART,
});
