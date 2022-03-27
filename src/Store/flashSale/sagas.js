import {call, put, takeLatest} from 'redux-saga/effects';
import {actions, types} from './reducer';
import * as service from './service';
import {SUCCESS} from '../../Configs/contants';

const getList = function* ({payload}) {
  try {
    yield put(actions.setListLoading(true));
    yield put(actions.setPageListDefault());
    const res = yield call(service.getListService, payload);
    if (res.data.status === SUCCESS) {
      yield put(actions.getListSuccess(res.data));
    } else {
      yield put(actions.getListFailed());
    }
  } catch (e) {
    console.error(e);
  } finally {
    yield put(actions.setListLoading(false));
  }
};

const getFlashSaleDetail = function* ({payload}) {
  try {
    yield put(actions.getSaleDetailLoading(true));
    const res = yield call(service.getSaleDetail, payload);
    if (res.data.status === SUCCESS) {
      yield put(actions.getSaleDetailSuccess(res.data?.data));
    } else {
      yield put(actions.getSaleDetailError());
    }
  } catch (e) {
    yield put(actions.getSaleDetailError());
  } finally {
    yield put(actions.getSaleDetailLoading(false));
  }
};

export default function* () {
  yield takeLatest(types.GET_LIST, getList);
  yield takeLatest(types.GET_SALE_DETAIL, getFlashSaleDetail);
}
