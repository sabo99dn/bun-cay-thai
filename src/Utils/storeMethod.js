import {createAction} from 'redux-actions';
import {call, put} from 'redux-saga/effects';
import {SUCCESS, PAGE_DEFAULT, LIMIT_DEFAULT} from '../Configs/contants';

const PAGE_INIT = PAGE_DEFAULT;
const LIMIT = LIMIT_DEFAULT;

export const generateListRedux = name => {
  const nameUp = name.toUpperCase();

  const types = {
    SET_LIST_LOADING: 'SET_LIST_' + nameUp + '_LOADING',
    SET_PAGE_LIST_DEFAULT: 'SET_PAGE_LIST_' + nameUp + '_DEFAULT',
    SET_LIST_LOADING_LOAD_MORE: 'SET_LIST_' + nameUp + '_LOADING_LOAD_MORE',
    GET_LIST: 'GET_LIST_' + nameUp,
    GET_LIST_SUCCESS: 'GET_LIST_' + nameUp + '_SUCCESS',
    GET_LIST_FAILED: 'GET_LIST_' + nameUp + '_FAILED',
    GET_LIST_LOAD_MORE: 'GET_LIST_' + nameUp + '_LOAD_MORE',
    GET_LIST_LOAD_MORE_SUCCESS: 'GET_LIST_' + nameUp + '_LOAD_MORE_SUCCESS',
    GET_LIST_LOAD_MORE_FAILED: 'GET_LIST_' + nameUp + '_LOAD_MORE_FAILED',
  };

  const actions = {
    setListLoading: createAction(types.SET_LIST_LOADING),
    getList: createAction(types.GET_LIST),
    getListSuccess: createAction(types.GET_LIST_SUCCESS),
    getListFailed: createAction(types.GET_LIST_FAILED),
    setPageListDefault: createAction(types.SET_PAGE_LIST_DEFAULT),
    setListLoadingLoadMore: createAction(types.SET_LIST_LOADING_LOAD_MORE),
    getListLoadMore: createAction(types.GET_LIST_LOAD_MORE),
    getListLoadMoreSuccess: createAction(types.GET_LIST_LOAD_MORE_SUCCESS),
    getListLoadMoreFailed: createAction(types.GET_LIST_LOAD_MORE_FAILED),
  };

  const defaultState = {
    page: PAGE_INIT,
    limit: LIMIT,
    list: [],
    loading: false,
    listMoreLoading: false,
    hasLoadMore: false,
    total: 0,
    error: false,
  };

  const handleActions = {
    [types.SET_LIST_LOADING]: (state, {payload}) => {
      return {...state, loading: payload};
    },
    [types.GET_LIST_SUCCESS]: (state, {payload}) => {
      const {hasMore, total, page, data} = payload;
      return {
        ...state,
        page: page,
        hasLoadMore: hasMore,
        list: data,
        total: total,
        error: false,
      };
    },
    [types.GET_LIST_FAILED]: (state, {payload}) => {
      return {
        page: PAGE_INIT,
        limit: LIMIT,
        list: [],
        total: 0,
        error: true,
      };
    },
    [types.SET_PAGE_LIST_DEFAULT]: (state, {payload}) => {
      return {
        ...state,
        page: PAGE_INIT,
        limit: LIMIT,
      };
    },
    [types.SET_LIST_LOADING_LOAD_MORE]: (state, {payload}) => {
      return {...state, listMoreLoading: payload};
    },
    [types.GET_LIST_LOAD_MORE_SUCCESS]: (state, {payload}) => {
      const {hasMore, total, page, data} = payload;
      const list = state.list?.concat(data) || [];
      return {
        ...state,
        list: list,
        page: page,
        hasLoadMore: hasMore,
        total: total,
        error: false,
      };
    },
    [types.GET_LIST_LOAD_MORE_FAILED]: (state, {payload}) => {
      return {...state, error: true};
    },
  };

  return {
    types,
    actions,
    defaultState,
    handleActions,
  };
};

export const generateListSagas = (actions, service) => {
  return {
    getList: function* ({payload}) {
      try {
        yield put(actions.setListLoading(true));
        yield put(actions.setPageListDefault());
        const res = yield call(service.getListService, payload);

        if (res.data.status === SUCCESS) {
          yield put(actions.getListSuccess(res.data));
        } else {
          yield put(actions.getListFailed());
        }
      } catch (e) {
        console.error(e);
      } finally {
        yield put(actions.setListLoading(false));
      }
    },
    getLoadMoreList: function* ({payload}) {
      try {
        yield put(actions.setListLoadingLoadMore(true));
        const res = yield call(service.getListService, payload);
        if (res.data.status === SUCCESS) {
          yield put(actions.getListLoadMoreSuccess(res.data));
        } else {
          yield put(actions.getListLoadMoreFailed());
        }
      } catch (e) {
        console.error(e);
      } finally {
        yield put(actions.setListLoadingLoadMore(false));
      }
    },
  };
};
