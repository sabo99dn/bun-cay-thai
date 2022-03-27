import {createAction, handleActions} from 'redux-actions';

export const types = {
  GET_PRODUCT_DETAIL_DATA: 'GET_PRODUCT_DETAIL_DATA',
  GET_PRODUCT_DETAIL_DATA_SUCCESS: 'GET_PRODUCT_DETAIL_DATA_SUCCESS',
  GET_PRODUCT_DETAIL_DATA_FAILED: 'GET_PRODUCT_DETAIL_DATA_FAILED',
};

export const actions = {
  getProductDetailData: createAction(types.GET_PRODUCT_DETAIL_DATA),
  getProductDetailDataSuccess: createAction(
    types.GET_PRODUCT_DETAIL_DATA_SUCCESS,
  ),
  getProductDetailDataFailed: createAction(
    types.GET_PRODUCT_DETAIL_DATA_FAILED,
  ),
};

const defaultState = {
  productsDetailData: [],
};

export default handleActions(
  {
    [types.GET_PRODUCT_DETAIL_DATA_SUCCESS]: (state, {payload}) => {
      return {
        ...state,
        productsDetailData: payload,
      };
    },
    [types.GET_PRODUCT_DETAIL_DATA_FAILED]: (state, {payload}) => {
      return {
        ...state,
        productsDetailData: [],
      };
    },
  },
  defaultState,
);
