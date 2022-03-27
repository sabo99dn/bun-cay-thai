import {createAction, handleActions} from 'redux-actions';
import {
    generateListRedux
} from '../../Utils/storeMethod';
const name = "Notification";
const reduxGenerate = generateListRedux(name);

export const types = {
    SET_NOTIFICATION_READ: 'SET_NOTIFICATION_READ',
    SET_NOTIFICATION_READ_SUCCESS: 'SET_NOTIFICATION_READ_SUCCESS',
    SET_NOTIFICATION_READ_FAILED: 'SET_NOTIFICATION_READ_FAILED',
    SET_NOTIFICATION_COUNTUNREAD: 'SET_NOTIFICATION_COUNTUNREAD',
    GET_NOTIFICATION_COUNTUNREAD: 'GET_NOTIFICATION_COUNTUNREAD',
    ...reduxGenerate.types
};

export const actions = {
    setNotificationRead: createAction(types.SET_NOTIFICATION_READ),
    setNotificationReadSuccess: createAction(types.SET_NOTIFICATION_READ_SUCCESS),
    setNotificationReadFailed: createAction(types.SET_NOTIFICATION_READ_FAILED),
    getNotificationCountUnread: createAction(types.GET_NOTIFICATION_COUNTUNREAD),
    setNotificationCountUnread: createAction(types.SET_NOTIFICATION_COUNTUNREAD),
    ...reduxGenerate.actions
};

const defaultState = {
    countUnread: 0,
    ...reduxGenerate.defaultState
};

export default handleActions(
    {
        [types.SET_NOTIFICATION_READ]: (state, {payload}) => {
            return { ...state, categorySelect: payload };
        },
        [types.SET_NOTIFICATION_READ_SUCCESS]: (state, {payload}) => {
            return { ...state, categorySelect: payload };
        },
        [types.SET_NOTIFICATION_READ_FAILED]: (state, {payload}) => {
            return { ...state };
        },
        [types.SET_NOTIFICATION_COUNTUNREAD]: (state, {payload}) => {
            return { ...state, countUnread: payload };
        },
        ...reduxGenerate.handleActions
    },
    defaultState,
);
