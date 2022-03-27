import {handleActions} from 'redux-actions';
import {
  types as cityTypes,
  actions as cityActions,
  defaultState as cityDefaultState,
  handlers as cityHandlers,
} from './city/reducer';
import {
  types as districtTypes,
  actions as districtActions,
  defaultState as districtDefaultState,
  handlers as districtHandlers,
} from './district/reducer';

import {
  types as wardTypes,
  actions as wardActions,
  defaultState as wardDefaultState,
  handlers as wardHandlers,
} from './ward/reducer';

export const types = {
  // add sub types here
  city: cityTypes,
  district: districtTypes,
  ward: wardTypes,
};

export const actions = {
  // add sub actions here
  city: cityActions,
  district: districtActions,
  ward: wardActions,
};

const defaultState = {
  // add sub states here
  city: cityDefaultState,
  district: districtDefaultState,
  ward: wardDefaultState,
};

export default handleActions(
  {
    // add sub handlers here
    ...cityHandlers,
    ...districtHandlers,
    ...wardHandlers,
  },
  defaultState,
);
