import {call, put, takeLatest} from 'redux-saga/effects';
import {generateListSagas} from '../../Utils/storeMethod';
import {actions, types} from './reducer';
import {SUCCESS, PAGE_DEFAULT, LIMIT_DEFAULT} from '../../Configs/contants';
import * as service from './service';
const sagaListFunction = generateListSagas(actions, service);

const createAddress = function* ({payload}) {
  try {
    const res = yield call(service.postCreateShipAddress, payload);
    const {data} = res;
    if (data && data.status === SUCCESS) {
      yield put(
        actions.getList({
          page: PAGE_DEFAULT,
          limit: LIMIT_DEFAULT,
        }),
      );
    }
  } catch (e) {
    console.log('create address failed', e);
  }
};

const getShipAddressDetail = function* ({payload}) {
  try {
    const res = yield call(service.getShipAddressDetailService, payload);
    if (res.data.status === SUCCESS) {
      yield put(actions.getShipAddressDataSuccess(res.data.data));
    } else {
      yield put(actions.getShipAddressDataFailed());
    }
  } catch (e) {}
};

export default function* () {
  yield takeLatest(types.GET_SHIP_ADDRESS_DATA, getShipAddressDetail);
  yield takeLatest(types.GET_LIST, sagaListFunction.getList);
  yield takeLatest(types.GET_LIST_LOAD_MORE, sagaListFunction.getLoadMoreList);
  yield takeLatest(types.CREATE_ADDRESS, createAddress);
}
