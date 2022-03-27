import {call, put, takeLatest, select} from 'redux-saga/effects';
import {actions, types} from './reducer';
import {userDataSelector} from '../auth/selectors';
import * as service from './service';
import {SUCCESS} from '../../Configs/contants';

const getInfoUser = function* () {
  const userData = yield select(state => userDataSelector(state));
  try {
    yield put(actions.setLoading(true));
    const res = yield call(service.getInfoUser, {id: userData.id});
    if (res.data.status === SUCCESS) {
      yield put(actions.setInfoData(res.data.data));
    } else {
      yield put(actions.setInfoData({}));
    }
  } catch (e) {
    yield put(actions.setInfoData({}));
  } finally {
    yield put(actions.setLoading(false));
  }
};

export default function* () {
  yield takeLatest(types.GET_INFO_USER, getInfoUser);
}
