import apiMethod from '../../Utils/apiMethod';
import API from '../../Configs/api';
import convertFormDataPost from '../../Utils/convertFormData';
export const getInfoUser = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.GET_USER_INFO, params);
};

export const updateUserAvatar = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.PUT_CHANGE_AVATAR, params);
};
