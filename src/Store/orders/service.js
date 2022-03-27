import apiMethod from '../../Utils/apiMethod';
import API from '../../Configs/api';

export const getListService = payload => {
  return apiMethod.get(API.GET_ORDER_LIST, {params: payload});
};

export const getOrderDetails = payload => {
  return apiMethod.get(API.GET_ORDER_DETAILS, {params: payload});
};

export const createOrder = payload => apiMethod.post(API.CREATE_ORDER, payload);
