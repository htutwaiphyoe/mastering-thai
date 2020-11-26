import * as actionTypes from "./actionTypes";
export const selected = (payload) => {
    return {
        type: actionTypes.SELECTED,
        payload,
    };
};
export const requested = (payload) => {
    return {
        type: actionTypes.REQUESTED,
        payload,
    };
};

export const scroll = () => {
    return {
        type: actionTypes.LOAD_VIDEOS,
    };
};

export const getListRef = (list) => {
    return {
        type: actionTypes.GET_LIST_REF,
        payload: list,
    };
};

export const setError = (payload) => {
    return {
        type: actionTypes.ERROR,
        payload,
    };
};
