import {createAction, handleActions} from 'redux-actions';
import {generateListRedux} from '../../Utils/storeMethod';
const name = 'ShipAddress';
const reduxGenerate = generateListRedux(name);

export const types = {
  GET_SHIP_ADDRESS_DATA: 'GET_SHIP_ADDRESS_DATA',
  GET_SHIP_ADDRESS_DATA_SUCCESS: 'GET_SHIP_ADDRESS_DATA_SUCCESS',
  GET_SHIP_ADDRESSL_DATA_FAILED: 'GET_SHIP_ADDRESS_DATA_FAILED',
  ...reduxGenerate.types,
  CREATE_ADDRESS: 'CREATE_ADDRESS',
};

export const actions = {
  getShipAddressData: createAction(types.GET_SHIP_ADDRESS_DATA),
  getShipAddressDataSuccess: createAction(types.GET_SHIP_ADDRESS_DATA_SUCCESS),
  getShipAddressDataFailed: createAction(types.GET_SHIP_ADDRESSL_DATA_FAILED),
  ...reduxGenerate.actions,
  createAddress: createAction(types.CREATE_ADDRESS),
};

const defaultState = {
  shipAddressDetailData: {},
  ...reduxGenerate.defaultState,
};

export default handleActions(
  {
    [types.GET_SHIP_ADDRESS_DATA_SUCCESS]: (state, {payload}) => {
      return {
        ...state,
        shipAddressDetailData: payload,
      };
    },
    [types.GET_SHIP_ADDRESSL_DATA_FAILED]: (state, {payload}) => {
      return {
        ...state,
        shipAddressDetailData: {},
      };
    },
    ...reduxGenerate.handleActions,
  },
  defaultState,
);
