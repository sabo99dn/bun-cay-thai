import {createAction, handleActions} from 'redux-actions';
import {
    generateListRedux
} from '../../Utils/storeMethod';
const name = "NotificationCategory";
const reduxGenerate = generateListRedux(name);

export const types = {
    SET_CATEGORY_SELECT: 'SET_CATEGORY_NOTIFICATIONCATEGORY_SELECT',
    ...reduxGenerate.types
};

export const actions = {
    setCategorySelect: createAction(types.SET_CATEGORY_SELECT),
    ...reduxGenerate.actions
};

const defaultState = {
    categorySelect: null,
    categoryListKeyIds: {},
    ...reduxGenerate.defaultState
};

export default handleActions(
    {
        [types.SET_CATEGORY_SELECT]: (state, {payload}) => {
            return { ...state, categorySelect: payload };
        },
        ...reduxGenerate.handleActions,
        [types.GET_LIST_SUCCESS]: (state, {payload}) => {
            const {hasMore, total, page, data} = payload;
            let categoryListKeyIds = {};
            for(let i=0; i<data.length; i++){
                categoryListKeyIds[data[i].id] = {...data[i]}
            }
            return {
                ...state,
                page: page,
                categorySelect: state.categorySelect === null || state.categorySelect === undefined ?
                    data[0] : state.categorySelect,
                hasLoadMore: hasMore,
                list: data,
                categoryListKeyIds: categoryListKeyIds,
                total: total,
                error: false
            };
        },
        [types.GET_LIST_LOAD_MORE_SUCCESS]: (state, {payload}) => {
            const { hasMore, total, page, data } = payload;
            const list = state.list?.concat(data) || [];
            let categoryListKeyIds = {};
            for(let i=0; i<list.length; i++){
                categoryListKeyIds[list[i].id] = {...list[i]}
            }
            return {
                ...state,
                list: list,
                categoryListKeyIds: categoryListKeyIds,
                page: page,
                hasLoadMore: hasMore,
                total: total,
                error: false
            };
        }
    },
    defaultState,
);
