import {put, call, takeEvery} from 'redux-saga/effects';
import {actions, types} from './reducer';
import {signIn} from './service';
import {SUCCESS} from '../../Configs/contants';
import {actions as ActionsUser} from '../user/reducer';

function* fetchSignIn({payload}) {
  try {
    const res = yield call(signIn, payload);
    const {data} = res;
    if (data && data.status === SUCCESS) {
      const [userData] = data.data;
      yield put(actions.signInSuccess(userData));
      yield put(ActionsUser.setInfoData(userData));
    }
  } catch (e) {
    yield put(actions.signInError(e));
  }
}

export default function* authSaga() {
  yield takeEvery(types.CALL_SIGN_IN_METHOD, fetchSignIn);
}
