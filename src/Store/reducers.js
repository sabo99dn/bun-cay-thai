import {combineReducers} from 'redux';
import commonReducer from './common/reducer';
import authReducer from './auth/reducer';
import notificationReducer from './notification/reducer';
import notificationCategoryReducer from './notificationCategory/reducer';
import productReducer from './product/reducer';
import cartReducer from './cart/reducer';
import categoryReducer from './category/reducer';
import vouchersReducer from './vouchers/reducer';
import slidersReducer from './sliders/reducer';
import userReducer from './user/reducer';
import productSaleReducer from './productSale/reducer';
import promotionNewsReducer from './promotionNews/reducer';
import productDetailReducer from './productDetail/reducer';
import reportsReducer from './reports/reducer';
import shipAddressReducer from './shipAddress/reducer';
import pageDetailsReducer from './pageDetails/reducer';
import branchReducer from './branch/reducer';
import orderReducer from './orders/reducer';
import flashSaleReducer from './flashSale/reducer';
import memberCardReducer from './memberCard/reducer';

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  common: commonReducer,
  auth: authReducer,
  notification: notificationReducer,
  notificationCategory: notificationCategoryReducer,
  vouchers: vouchersReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  user: userReducer,
  sliders: slidersReducer,
  productSale: productSaleReducer,
  promotionNews: promotionNewsReducer,
  productDetail: productDetailReducer,
  reports: reportsReducer,
  shipAddress: shipAddressReducer,
  pageDetails: pageDetailsReducer,
  branch: branchReducer,
  orders: orderReducer,
  flashSale: flashSaleReducer,
  memberCard: memberCardReducer,
});

export default rootReducers;
