export const BASE_URL = 'https://www.buncaythai.com';
export const BASE_URL_API = `${BASE_URL}/api`;

export default {
  /*Slack*/
  HOOK_SLACK:
    'https://hooks.slack.com/services/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',
  /*End Slack*/

  /*Auth*/
  POST_AUTH_SIGN_IN: '/common/sign-in',
  POST_AUTH_SIGN_UP: '/common/sign-up',
  POST_AUTH_RESET_PASSWORD: '/common/reset-password',
  POST_AUTH_UPDATE_PASSWORD: '/common/update-password',
  /*End Auth*/

  /*Notification*/
  GET_LIST_NOTIFICATION: '/api/notification',
  POST_SET_NOTIFICATION_READ: '/api/notification/update-status',
  POST_SAVE_NOTIFICATION_TOKEN: '/api/notification/save-token',
  GET_NOTIFICATION_UNREAD: '/api/notification/get-unread',
  /*End Notification*/

  /*Notification User*/
  GET_USER_INFO: '/common/get-info',
  /*End User*/

  /*Notification Category*/
  GET_LIST_NOTIFICATION_CATEGORY: '/api/notification/category',
  /*End Notification Category*/

  /*Sliders*/
  GET_SLIDERS: '/common/sliders',
  /*End Sliders*/

  /*Common*/
  GET_COMMON_GET_CITY: '/common/get-city',
  GET_COMMON_GET_DISTRICT: '/common/get-district',
  GET_COMMON_GET_WARD: '/common/get-ward',
  /*End Common*/

  /*PAGE DETAILS*/
  GET_PAGE_DETAILS: '/common/get-policy',
  /*End PAGE DETAILS*/

  /*Promotion*/
  GET_PROMOTION_NEWS: '/common/promotion',
  GET_VOUCHERS_LIST: '/common/get-vouchers',
  /*End Promotion*/

  /*Product*/
  GET_PRODUCT: '/common/get-product',
  GET_PRODUCT_SALE: '/common/get-sale',
  GET_PRODUCT_DETAIL: '/common/get-product-details',
  /*End Product*/

  /*FlashSale*/
  FLASH_SALE: '/common/flash-sale',
  FLASH_SALE_DETAIL: '/common/flash-sale-detail',
  /*End FlashSale*/

  /*Category*/
  GET_CATEGORY: '/common/get-category',
  /*End Category*/

  //PROFILE AVATAR
  PUT_CHANGE_AVATAR: '/common/update-avatar',
  //PROFILE REPORT
  GET_ALL_REPORT: '/common/reports',
  DELETE_REPORT: '/common/reports-delete',
  CREATE_REPORT: '/common/reports-create',
  UPDATE_REPORT: '/common/reports-update',
  //SHIP ADDRESS
  GET_ALL_ADDRESS: '/common/address',
  GET_ADDRESS_DETAIL: '/common/address-details',
  CREATE_ADDRESS: '/common/address-create',
  UPDATE_ADDRESS: '/common/address-update',

  // Branch
  GET_BRANCH: '/api/branch',
  //AGENCY LIST
  GET_BRANCH_LIST: 'common/get-branchs',

  //ORDER LIST
  GET_ORDER_LIST: '/common/orders',
  GET_ORDER_DETAILS: '/common/orders-details',
  CREATE_ORDER: '/api/orders',

  //MEMBER CARD
  GET_MEMBER_CARD: 'common/get-member-card',
};
