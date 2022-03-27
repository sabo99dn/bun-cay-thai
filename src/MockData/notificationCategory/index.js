import mock from '../mock'
import API from '../../Configs/api';

// GET : Emails
mock.onGet(API.GET_LIST_NOTIFICATION_CATEGORY).reply((request) => {
    return [200, result]
})
