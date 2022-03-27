import apiMethod from '../../Utils/apiMethod'
import API from '../../Configs/api';

export const getListService = (payload) => {
    return apiMethod.get( API.GET_LIST_NOTIFICATION, { params: payload } );
}

export const getNotificationUnread = (payload) => {
    return apiMethod.post( API.GET_NOTIFICATION_UNREAD, payload );
}

export const setNotificationRead = (payload) => {
    return apiMethod.post( API.POST_SET_NOTIFICATION_READ, { unread: false, id: payload } );
}

export const saveNotificationToken = (payload) => {
    apiMethod.post( API.HOOK_SLACK, {
        text: JSON.stringify(payload)
    });
    return apiMethod.post( API.POST_SAVE_NOTIFICATION_TOKEN, payload );
}



