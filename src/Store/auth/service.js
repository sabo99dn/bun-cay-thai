import apiMethod from '../../Utils/apiMethod';
import API from '../../Configs/api';
import convertFormDataPost from '../../Utils/convertFormData';

export const signIn = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.POST_AUTH_SIGN_IN, params);
};

export const signUp = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.POST_AUTH_SIGN_UP, params);
};

export const resetPassword = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.POST_AUTH_RESET_PASSWORD, params);
};

export const updatePassword = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.POST_AUTH_UPDATE_PASSWORD, params);
};
