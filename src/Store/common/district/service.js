import apiMethod from '../../../Utils/apiMethod';
import API from '../../../Configs/api';
import {PAGE_DEFAULT} from '../../../Configs/contants';
const CITY_PAGE_LIMIT = 100;

export const getListService = payload => {
  const page = payload?.page ? payload.page : PAGE_DEFAULT;
  const limit = payload?.limit ? payload.limit : CITY_PAGE_LIMIT;
  const city = payload?.city ? payload.city : '';
  return apiMethod.get(
    `${API.GET_COMMON_GET_DISTRICT}?page=${page}&limit=${limit}&city=${city}`,
  );
};
