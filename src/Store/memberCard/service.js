import apiMethod from '../../Utils/apiMethod';
import API from '../../Configs/api';
import convertFormDataPost from '../../Utils/convertFormData';
export const getMemberCardService = payload => {
  const params = convertFormDataPost(payload);
  return apiMethod.post(API.GET_MEMBER_CARD, params);
};
