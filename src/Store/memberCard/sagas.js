import {call, put, takeLatest, select} from 'redux-saga/effects';
import {actions, types} from './reducer';
import * as service from './service';
import {SUCCESS} from '../../Configs/contants';

const getMemberCard = function* ({payload}) {
  try {
    yield put(actions.setLoading(true));
    const res = yield call(service.getMemberCardService, payload);
    if (res.data.status === SUCCESS) {
      yield put(actions.getMemberCardSuccess(res.data));
    } else {
      yield put(actions.getMemberCardFailed());
    }
  } catch (e) {
  } finally {
    yield put(actions.setLoading(false));
  }
};

export default function* () {
  yield takeLatest(types.GET_MEMBER_CARD, getMemberCard);
}
