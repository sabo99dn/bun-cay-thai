import apiMethod from '../../Utils/apiMethod';
import API from '../../Configs/api';

export const getProductDetail = payload => {
  return apiMethod.get(API.GET_PRODUCT_DETAIL, {params: payload});
};
