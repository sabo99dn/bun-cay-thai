import {createAction, handleActions} from 'redux-actions';
import {generateListRedux} from '../../Utils/storeMethod';
const name = 'Vouchers';
const reduxGenerate = generateListRedux(name);

export const types = {
  ...reduxGenerate.types,
};

export const actions = {
  ...reduxGenerate.actions,
};

const defaultState = {
  ...reduxGenerate.defaultState,
};

export default handleActions(
  {
    ...reduxGenerate.handleActions,
  },
  defaultState,
);
