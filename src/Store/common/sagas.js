import {all} from 'redux-saga/effects';
import citySaga from './city/sagas';
import districtSaga from './district/sagas';
import wardSaga from './ward/sagas';

export default function* () {
  yield all([
    // add sub sagas here
    citySaga(),
    districtSaga(),
    wardSaga(),
  ]);
}
