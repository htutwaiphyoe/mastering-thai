import youtube from "../../api/youtube";
export { loadVideos } from "./home";
export { getListRef, loadRequest, scroll, selectVideo, setQuery, selected } from "./ui";

export const searchVideos = (q) => async (dispatch) => {
    const response = await youtube.get(`/search`, {
        params: {
            q,
        },
    });
    // dispatch(selected("SELECTED_OFF"));
    dispatch({ type: "LOAD_VIDEOS", payload: response.data.items });
};
