import * as actionTypes from "./actionTypes";
export const selected = (payload) => {
    return {
        type: actionTypes.SELECTED,
        payload,
    };
};
export const loadRequest = (type) => {
    return {
        type,
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

export const setQuery = (q) => {
    return {
        type: "SET_QUERY",
        payload: q,
    };
};
