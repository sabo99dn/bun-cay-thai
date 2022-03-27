import {createAction, handleActions} from 'redux-actions';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export const types = {
  CALL_SIGN_IN_METHOD: 'CALL_SIGN_IN_METHOD',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',
  SIGN_IN_RESET: 'SIGN_IN_RESET',
  CALL_LOGOUT_METHOD: 'CALL_LOGOUT_METHOD',
};
export const actions = {
  authSignIn: createAction(types.CALL_SIGN_IN_METHOD),
  signInSuccess: createAction(types.SIGN_IN_SUCCESS),
  signInError: createAction(types.SIGN_IN_ERROR),
  signInReset: createAction(types.SIGN_IN_RESET),
  authLogout: createAction(types.CALL_LOGOUT_METHOD),
};

const defaultState = {
  accessToken: null,
  userData: {},
  loading: false,
  loginSuccess: false,
  error: '',
};

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['loading', 'error'],
};

const AuthReducer = handleActions(
  {
    [types.CALL_SIGN_IN_METHOD]: (state, {payload}) => {
      return {
        ...state,
        loadding: true,
      };
    },
    [types.SIGN_IN_SUCCESS]: (state, {payload}) => {
      return {
        ...state,
        loading: false,
        error: '',
        loginSuccess: true,
        userData: payload,
      };
    },
    [types.SIGN_IN_ERROR]: (state, {payload}) => {
      return {
        ...state,
        loading: false,
        error: payload,
        loginSuccess: false,
        userData: {},
      };
    },
    [types.CALL_LOGOUT_METHOD]: (state, {payload}) => {
      return {
        ...state,
        loading: false,
        error: '',
        loginSuccess: false,
        userData: {},
      };
    },
    [types.SIGN_IN_RESET]: (state, {payload}) => {
      return {
        ...state,
        loading: false,
        error: '',
      };
    },
  },
  defaultState,
);

export default persistReducer( persistConfig, AuthReducer );
