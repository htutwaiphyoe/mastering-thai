import youtube from "../../api/youtube";
export { loadVideos, selectVideo, loadVideo } from "./video";
export { getListRef, loadRequest, scroll, setQuery, selected } from "./ui";

export const searchVideos = (q) => async (dispatch) => {
    const response = await youtube.get(`/search`, {
        params: {
            q,
        },
    });
    dispatch({ type: "LOAD_VIDEOS", payload: response.data.items });
};
