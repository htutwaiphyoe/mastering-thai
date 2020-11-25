import * as actionTypes from "./actionTypes";
import youtube from "../../api/youtube";
export const loadVideos = () => async (dispatch) => {
    try {
        const response = await youtube.get("/videos", {
            params: {
                chart: "mostPopular",
            },
        });
        dispatch({ type: actionTypes.STORE_VIDEOS, payload: response.data.items });
    } catch (error) {
        console.log(error);
    }
};
