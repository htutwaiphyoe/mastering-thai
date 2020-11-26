import * as actionTypes from "./actionTypes";
import youtube from "../../api/youtube";
import { requested } from "./ui";
export const loadVideos = () => async (dispatch) => {
    try {
        dispatch(requested(true));
        const response = await youtube.get("/videos", {
            params: {
                chart: "mostPopular",
            },
        });
        dispatch({ type: actionTypes.STORE_VIDEOS, payload: response.data.items });
        dispatch(requested(false));
    } catch (error) {
        console.log(error);
    }
};

export const loadVideo = (id) => async (dispatch) => {
    try {
        const response = await youtube.get("/videos", {
            params: {
                id,
            },
        });
        console.log(response);
        dispatch({ type: actionTypes.STORE_VIDEO, payload: response.data.items[0] });
    } catch (error) {
        console.log(error);
    }
};

export const selectVideo = (video) => {
    return {
        type: actionTypes.SELECT_VIDEO,
        payload: video,
    };
};

export const searchVideos = (q) => async (dispatch) => {
    try {
        dispatch(requested(true));
        const response = await youtube.get(`/search`, {
            params: {
                q,
            },
        });
        console.log(response);
        dispatch({ type: actionTypes.STORE_VIDEOS, payload: response.data.items });
        dispatch(requested(false));
    } catch (err) {
        console.log(err);
    }
};
