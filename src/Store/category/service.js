import apiMethod from '../../Utils/apiMethod';
import API from '../../Configs/api';

export const getListService = () => {
  return apiMethod.get(API.GET_CATEGORY);
};
