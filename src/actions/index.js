import youtube from "../api/youtube";

export const selected = (type) => {
    return {
        type,
    };
};
export const loadVideos = () => async (dispatch) => {
    const response = await youtube.get("/videos", {
        params: {
            chart: "mostPopular",
        },
    });
    dispatch(selected("SELECTED_OFF"));
    dispatch({ type: "LOAD_VIDEOS", payload: response.data.items });
};

export const searchVideos = (q) => async (dispatch) => {
    const response = await youtube.get(`/search`, {
        params: {
            q,
        },
    });
    dispatch(selected("SELECTED_OFF"));
    dispatch({ type: "LOAD_VIDEOS", payload: response.data.items });
};
export const loadRequest = (type) => {
    return {
        type,
    };
};

export const scrollVideos = () => {
    return {
        type: "SCROLL_VIDEOS",
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
        type: "GET_LIST_REF",
        payload: list,
    };
};

export const setQuery = (q) => {
    return {
        type: "SET_QUERY",
        payload: q,
    };
};
