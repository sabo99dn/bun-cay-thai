import mock from '../mock'
import API from '../../Configs/api';
import firestore from "@react-native-firebase/firestore";

mock.onGet(API.GET_LIST_NOTIFICATION).reply(async (request) => {
    return [200, []]
})

mock.onPost(API.POST_SET_NOTIFICATION_READ).reply(async (request) => {
    return [200, []]
})

mock.onPost(API.POST_SAVE_NOTIFICATION_TOKEN).reply(async (request) => {
    const dbRefDeviceToken = firestore().collection('device_token');
    const data = JSON.parse(request.data)
    const {
        token,
        app_name,
        device_name,
        os_version,
        app_version,
        device_id,
        device_type,
        is_emulator,
        unique_id,
        user_id,
    } = data;

    const query = await dbRefDeviceToken.where('unique_id', '==', unique_id).get();
    let notificationCheck = null;
    if (query.docs !== undefined) {
        for (const doc of query.docs) {
            notificationCheck = await doc.data();
        }
    }

    if (notificationCheck) {
        const result = await dbRefDeviceToken.doc(data.unique_id).update({
            token,
            app_name,
            device_name,
            os_version,
            app_version,
            device_id,
            device_type,
            is_emulator,
            unique_id,
            user_id,
        });
        return [200, {status: 200, data: {...result, id: unique_id}}];
    }else{
        const result = await dbRefDeviceToken.doc(data.unique_id).set({
            token,
            app_name,
            device_name,
            os_version,
            app_version,
            device_id,
            device_type,
            is_emulator,
            unique_id,
            user_id,
        });
        return [200, {status: 200, data: {...result, id: unique_id}}];
    }
});

mock.onPost(API.GET_NOTIFICATION_UNREAD).reply(async (request) => {
    return [200, []]
});
