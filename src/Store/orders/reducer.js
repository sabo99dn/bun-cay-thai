import {handleActions, createAction} from 'redux-actions';
import {generateListRedux} from '../../Utils/storeMethod';
const name = 'Orders';
const reduxGenerate = generateListRedux(name);

export const types = {
  ...reduxGenerate.types,
  CREATE_ORDER: 'CREATE_' + name,
  CREATE_ORDER_SUCCESS: 'CREATE_' + name + '_SUCCESS',
  CREATE_ORDER_FAILURE: 'CREATE_' + name + '_FAILED',
};

export const actions = {
  ...reduxGenerate.actions,
  createOrder: createAction(types.CREATE_ORDER),
  createOrderSuccess: createAction(types.CREATE_ORDER_SUCCESS),
  createOrderFailure: createAction(types.CREATE_ORDER_FAILURE),
};

const defaultState = {
  ...reduxGenerate.defaultState,
  isCreatingOrder: false,
  orderDataCreated: null,
  errCreateData: null,
};

export default handleActions(
  {
    ...reduxGenerate.handleActions,
    [types.CREATE_ORDER]: (state, {payload}) => {
      return {
        ...state,
        isCreatingOrder: true,
        errCreateData: null,
        orderDataCreated: null,
      };
    },
    [types.CREATE_ORDER_SUCCESS]: (state, {payload}) => {
      return {...state, isCreatingOrder: false, orderDataCreated: payload};
    },
    [types.CREATE_ORDER_FAILURE]: (state, {payload}) => {
      return {...state, isCreatingOrder: false, errCreateData: payload};
    },
  },
  defaultState,
);
