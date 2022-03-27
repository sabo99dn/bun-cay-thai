import apiMethod from '../../Utils/apiMethod';
import API from '../../Configs/api';
import convertFormDataPost from '../../Utils/convertFormData';

export const getListService = payload => {
  return apiMethod.get(API.GET_ALL_ADDRESS, {params: payload});
};
export const getShipAddressDetailService = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.GET_ADDRESS_DETAIL, params);
};
export const postCreateShipAddress = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.CREATE_ADDRESS, params);
};
export const putUpdateShipAddress = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.UPDATE_ADDRESS, params);
};
