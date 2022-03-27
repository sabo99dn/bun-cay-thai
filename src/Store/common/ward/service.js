import apiMethod from '../../../Utils/apiMethod';
import API from '../../../Configs/api';
import {PAGE_DEFAULT} from '../../../Configs/contants';
const WARD_PAGE_LIMIT = 100;

export const getListService = payload => {
  const page = payload?.page ? payload.page : PAGE_DEFAULT;
  const limit = payload?.limit ? payload.limit : WARD_PAGE_LIMIT;
  const district = payload?.district ? payload.district : '';
  return apiMethod.get(
    `${API.GET_COMMON_GET_WARD}?page=${page}&limit=${limit}&district=${district}`,
  );
};
