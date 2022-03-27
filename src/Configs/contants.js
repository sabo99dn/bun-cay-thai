//API STATUS
export const SUCCESS = 200;
export const BAD_REQUEST = 400;
export const SESSION_EXPIRED = 401;
export const NOT_FOUND = 404;
export const INTERNAL_SERVER_ERROR = 500;
export const POST_SUCCESS = 201;
export const DELETE_SUCCESS = 204;

// PARAM QUERY
export const PAGE_DEFAULT = 1;
export const LIMIT_DEFAULT = 12;
export const GET_ALL_DATA_LIMIT = 999;
export const SORT_DEFAULT = 'createdAt';

// ROUTES
export const ROUTES = {
  PRODUCT: 'PRODUCT',
  PRODUCT_DETAIL: 'PRODUCT_DETAIL',
  ORDER: 'ORDER',
  SELECT_BRANCH: 'SELECT_BRANCH',
};

//ACTION SHEET
export const CANCEL_INDEX = 0;
export const PICK_IMAGE_OPTIONS = [
  'Huỷ',
  'Chọn từ bộ sưu tập ảnh',
  'Chụp hình',
];
