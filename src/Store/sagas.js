import {all} from 'redux-saga/effects';
import commonSaga from './common/sagas';
import authSaga from './auth/sagas';
import notificationSaga from './notification/sagas';
import notificationCategorySaga from './notificationCategory/sagas';
import productSaga from './product/sagas';
import categorySaga from './category/sagas';
import userSaga from './user/sagas';
import slidersSaga from './sliders/sagas';
import vouchersSagas from './vouchers/sagas';
import productSaleSaga from './productSale/sagas';
import promotionNewsSaga from './promotionNews/sagas';
import productDetailSaga from './productDetail/sagas';
import reportSagas from './reports/sagas';
import shipAddressSagas from './shipAddress/sagas';
import pageDetailsSagas from './pageDetails/sagas';
import branchSaga from './branch/sagas';
import branchSagas from './branch/sagas';
import orderSagas from './orders/sagas';
import flashSaleSagas from './flashSale/sagas';
import memberCardSagas from './memberCard/sagas'

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([
    commonSaga(),
    authSaga(),
    notificationSaga(),
    notificationCategorySaga(),
    vouchersSagas(),
    userSaga(),
    slidersSaga(),
    productSaga(),
    categorySaga(),
    productSaleSaga(),
    promotionNewsSaga(),
    productDetailSaga(),
    reportSagas(),
    shipAddressSagas(),
    pageDetailsSagas(),
    branchSaga(),
    branchSagas(),
    orderSagas(),
    flashSaleSagas(),
    memberCardSagas(),
  ]);
}
