import * as actionTypes from "./actionTypes";
export const selected = (type) => {
    return {
        type,
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

export const selectVideo = (video) => {
    return {
        type: "SELECT_VIDEO",
        payload: video,
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
