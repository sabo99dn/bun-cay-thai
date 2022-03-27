import {createAction, handleActions} from 'redux-actions';
import {generateListRedux} from '../../Utils/storeMethod';
import {PAGE_INIT, LIMIT} from '../../Configs/contants';
const name = 'FlashSale';
const reduxGenerate = generateListRedux(name);

export const types = {
  ...reduxGenerate.types,
  GET_SALE_DETAIL_LOADING: 'GET_SALE_DETAIL_LOADING',
  GET_SALE_DETAIL: 'GET_SALE_DETAIL',
  GET_SALE_DETAIL_SUCCESS: 'GET_SALE_DETAIL_SUCCESS',
  GET_SALE_DETAIL_ERROR: 'GET_SALE_DETAIL_ERROR',
};

export const actions = {
  ...reduxGenerate.actions,
  getSaleDetailLoading: createAction(types.GET_SALE_DETAIL_LOADING),
  getSaleDetail: createAction(types.GET_SALE_DETAIL),
  getSaleDetailSuccess: createAction(types.GET_SALE_DETAIL_SUCCESS),
  getSaleDetailError: createAction(types.GET_SALE_DETAIL_ERROR),
};

const defaultState = {
  ...reduxGenerate.defaultState,
  title: '',
  startTime: '',
  endTime: '',
  detailLoading: false,
  saleDetail: null,
};

export default handleActions(
  {
    ...reduxGenerate.handleActions,
    [types.GET_LIST_SUCCESS]: (state, {payload}) => {
      const {data, title, start_timem, end_time} = payload;
      return {
        ...state,
        list: data,
        title: title,
        startTime: start_timem,
        endTime: end_time,
        error: false,
      };
    },
    [types.GET_LIST_FAILED]: (state, {payload}) => {
      return {
        ...state,
        list: [],
        title: '',
        startTime: '',
        endTime: '',
        error: true,
      };
    },

    [types.GET_SALE_DETAIL_LOADING]: (state, {payload}) => {
      return {
        ...state,
        detailLoading: payload,
      };
    },
    [types.GET_SALE_DETAIL_SUCCESS]: (state, {payload}) => {
      return {
        ...state,
        saleDetail: payload,
      };
    },
    [types.GET_SALE_DETAIL_ERROR]: (state, {payload}) => {
      return {
        ...state,
        saleDetail: null,
      };
    },
  },
  defaultState,
);
