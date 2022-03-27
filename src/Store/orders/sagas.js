import {call, put, takeLatest} from 'redux-saga/effects';
import {SUCCESS} from '../../Configs/contants';
import {generateListSagas} from '../../Utils/storeMethod';
import {actions, types} from './reducer';
import * as service from './service';
const sagaListFunction = generateListSagas(actions, service);

const createOrder = function* ({payload}) {
  try {
    const res = yield call(service.createOrder, payload);
    if (res.data.status === SUCCESS) {
      yield put(actions.createOrderSuccess(res.data));
    } else {
      yield put(actions.createOrderFailure(res.message));
    }
  } catch (e) {
    console.error(e);
    yield put(actions.createOrderFailure(e.message));
  } finally {
    yield put(actions.createOrderFailure());
  }
};

export default function* () {
  yield takeLatest(types.GET_LIST, sagaListFunction.getList);
  yield takeLatest(types.GET_LIST_LOAD_MORE, sagaListFunction.getLoadMoreList);
  yield takeLatest(types.CREATE_ORDER, createOrder);
}
