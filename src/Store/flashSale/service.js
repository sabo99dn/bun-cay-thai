import apiMethod from '../../Utils/apiMethod';
import API from '../../Configs/api';

export const getListService = payload => {
  return apiMethod.get(API.FLASH_SALE, {params: payload});
};

export const getSaleDetail = payload => {
  return apiMethod.get(API.FLASH_SALE_DETAIL, {params: payload});
};
