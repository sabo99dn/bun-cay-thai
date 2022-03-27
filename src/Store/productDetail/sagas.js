import {takeLatest, call, put} from 'redux-saga/effects';
import {SUCCESS} from '../../Configs/contants';
import {actions, types} from './reducer';
import * as service from './service';

const getProductDetailData = function* ({payload}) {
  try {
    const res = yield call(service.getProductDetail, payload);
    if (res.data.status === SUCCESS) {
      yield put(actions.getProductDetailDataSuccess(res.data.data));
    } else {
      yield put(actions.getProductDetailDataFailed());
    }
  } catch (e) {
    console.log('error get product detail', e);
  }
};

export default function* productDetailSaga() {
  yield takeLatest(types.GET_PRODUCT_DETAIL_DATA, getProductDetailData);
}
