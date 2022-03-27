import apiMethod from '../../Utils/apiMethod';
import API from '../../Configs/api';
import convertFormDataPost from '../../Utils/convertFormData';

export const getListService = payload => {
  return apiMethod.get(API.GET_ALL_REPORT, {params: payload});
};
export const postCreateReport = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.CREATE_REPORT, params);
};
export const putDeleteReport = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.DELETE_REPORT, params);
};
export const putUpdateReport = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.UPDATE_REPORT, params);
};
