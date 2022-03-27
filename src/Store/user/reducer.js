import {createAction, handleActions} from 'redux-actions';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import isArray from 'lodash/isArray';

export const types = {
  GET_INFO_USER: 'user/GET_INFO_USER',
  SET_USER_DATA: 'user/SET_USER_DATA',
  SET_LOADING: 'user/SET_LOADING',
};

export const actions = {
  setInfoData: createAction(types.SET_USER_DATA),
  getInfoUser: createAction(types.GET_INFO_USER),
  setLoading: createAction(types.SET_LOADING),
};

const defaultState = {
  userData: {},
  loading: false,
  error: '',
};

const UserReducer = handleActions(
  {
    [types.SET_USER_DATA]: (state, {payload}) => {
      const data = isArray(payload) ? payload[0] : payload;
      return {...state, userData: {...data}};
    },
    [types.SET_LOADING]: (state, {payload}) => {
      return {...state, loading: payload};
    },
  },
  defaultState,
);

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
  blacklist: ['loading', 'error'],
};

export default persistReducer(persistConfig, UserReducer);
