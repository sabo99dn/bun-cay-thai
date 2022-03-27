import {createAction, handleActions} from 'redux-actions';

export const types = {
  GET_MEMBER_CARD: 'GET_MEMBER_CARD',
  GET_MEMBER_CARD_SUCCESS: 'GET_MEMBER_CARD_SUCCESS',
  GET_MEMBER_CARD_FAILED: 'GET_MEMBER_CARD_FAILED',
  SET_LOADING: 'user/SET_LOADING',
};

export const actions = {
  getMemberCard: createAction(types.GET_MEMBER_CARD),
  getMemberCardSuccess: createAction(types.GET_MEMBER_CARD_SUCCESS),
  getMemberCardFailed: createAction(types.GET_MEMBER_CARD_FAILED),
  setLoading: createAction(types.SET_LOADING),
};

const defaultState = {
  memberCardData: {},
  loading: false,
  error: '',
};

export default handleActions(
  {
    [types.GET_MEMBER_CARD_SUCCESS]: (state, {payload}) => {
      return {...state, memberCardData: payload};
    },
    [types.GET_MEMBER_CARD_FAILED]: (state, {payload}) => {
      return {...state, memberCardData: {}};
    },
    [types.SET_LOADING]: (state, {payload}) => {
      return {...state, loading: payload};
    },
  },
  defaultState,
);
