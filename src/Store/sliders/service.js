import apiMethod from '../../Utils/apiMethod';
import API from '../../Configs/api';

export const getListService = payload => {
  return apiMethod.get(API.GET_SLIDERS, {params: payload});
};
