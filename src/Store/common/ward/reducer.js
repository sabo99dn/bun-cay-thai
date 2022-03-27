import {generateListRedux} from '../../../Utils/storeMethod';
import {PAGE_INIT, LIMIT} from '../../../Configs/contants';
const name = 'common/ward';
const stateName = 'ward';
const reduxGenerate = generateListRedux(name);

export const types = {
  ...reduxGenerate.types,
};

export const actions = {
  ...reduxGenerate.actions,
};

export const defaultState = {
  ...reduxGenerate.defaultState,
};

export const handlers = {
  ...reduxGenerate.handleActions,
  [types.SET_LIST_LOADING]: (state, {payload}) => {
    return {
      ...state,
      [stateName]: {
        ...state[stateName],
        loading: payload,
      },
    };
  },
  [types.GET_LIST_SUCCESS]: (state, {payload}) => {
    const {hasMore, total, page, data} = payload;
    return {
      ...state,
      [stateName]: {
        ...state[stateName],
        page: page,
        hasLoadMore: hasMore,
        list: data,
        total: total,
        error: false,
      },
    };
  },
  [types.GET_LIST_FAILED]: (state, {payload}) => {
    return {
      ...state,
      [stateName]: {
        ...state[stateName],
        page: PAGE_INIT,
        limit: LIMIT,
        list: [],
        total: 0,
        error: true,
      },
    };
  },
  [types.SET_PAGE_LIST_DEFAULT]: (state, {payload}) => {
    return {
      ...state,
      [stateName]: {
        ...state[stateName],
        page: PAGE_INIT,
        limit: LIMIT,
      },
    };
  },
  [types.SET_LIST_LOADING_LOAD_MORE]: (state, {payload}) => {
    return {
      ...state,
      [stateName]: {
        ...state[stateName],
        listMoreLoading: payload,
      },
    };
  },
  [types.GET_LIST_LOAD_MORE_SUCCESS]: (state, {payload}) => {
    const {hasMore, total, page, data} = payload;
    const list = state.list?.concat(data) || [];
    return {
      ...state,
      [stateName]: {
        ...state[stateName],
        list: list,
        page: page,
        hasLoadMore: hasMore,
        total: total,
        error: false,
      },
    };
  },
  [types.GET_LIST_LOAD_MORE_FAILED]: (state, {payload}) => {
    return {
      ...state,
      [stateName]: {
        ...state[stateName],
        error: true,
      },
    };
  },
};
