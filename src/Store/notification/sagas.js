import {call, put, takeLatest} from 'redux-saga/effects';
import {
  generateListSagas,
} from '../../Utils/storeMethod';
import {actions, types} from './reducer';
import * as service from './service';
import {SUCCESS} from "../../Configs/contants";
const sagaListFunction = generateListSagas( actions, service );

const getNotificationUnread = function* ({payload}) {
  try {
    const res = yield call(service.getNotificationUnread, payload);
    if (res.data.status === SUCCESS) {
      yield put(actions.setNotificationCountUnread(res.data.count));
    } else {
      yield put(actions.setNotificationCountUnread(0));
    }
  } catch (e) {
    yield put(actions.setNotificationCountUnread(0));
  }
}

const setNotificationRead = function* ({payload}) {
  try {
    const res = yield call(service.setNotificationRead, payload);
    if (res.data.status === SUCCESS) {
      yield put(actions.setNotificationReadSuccess(res.data));
      try {
        const resUnread = yield call(service.getNotificationUnread, payload);
        if (resUnread.data.status === SUCCESS) {
          yield put(actions.setNotificationCountUnread(resUnread.data.count));
        } else {
          yield put(actions.setNotificationCountUnread(0));
        }
      } catch (e) {
        yield put(actions.setNotificationCountUnread(0));
      }
    } else {
      yield put(actions.setNotificationReadFailed(res.error));
    }
  } catch (e) {
    yield put(actions.setNotificationReadFailed(e));
  }
}

const getList = function* ({payload}) {
  try {
    yield put(actions.setListLoading(true));
    yield put(actions.setPageListDefault());
    const res = yield call(service.getListService, payload);
    if (res.data.status === SUCCESS) {
      yield put(actions.getListSuccess(res.data));
      try {
        const resUnread = yield call(service.getNotificationUnread, payload);
        if (resUnread.data.status === SUCCESS) {
          yield put(actions.setNotificationCountUnread(resUnread.data.count));
        } else {
          yield put(actions.setNotificationCountUnread(0));
        }
      } catch (e) {
        yield put(actions.setNotificationCountUnread(0));
      }
    } else {
      yield put(actions.getListFailed());
    }
  } catch (e) {
    console.error(e);
  } finally {
    yield put(actions.setListLoading(true));
  }
}

export default function* () {
  yield takeLatest(
      types.GET_NOTIFICATION_COUNTUNREAD,
      getNotificationUnread,
  );
  yield takeLatest(
      types.SET_NOTIFICATION_READ,
      setNotificationRead,
  );
  yield takeLatest(
      types.GET_LIST,
      getList,
  );
  yield takeLatest(
      types.GET_LIST_LOAD_MORE,
      sagaListFunction.getLoadMoreList,
  );
};
