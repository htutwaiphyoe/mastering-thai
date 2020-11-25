import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    responseVideos: [],
    shownVideos: [],
    selectedVideo: null,
};

const storeVideos = (state, action) => {
    const responseVideos = action.payload;
    responseVideos.forEach((video) => {
        video.selected = false;
    });
    const shownVideos = responseVideos.slice(0, 5);
    responseVideos.splice(0, 5);
    return updateObject(state, { responseVideos, shownVideos, selectedVideo: null });
};

const loadVideos = (state) => {
    const responseVideos = [...state.responseVideos];
    const shownVideos = [...state.shownVideos, ...responseVideos.slice(0, 5)];
    responseVideos.splice(0, 5);
    return updateObject(state, { responseVideos, shownVideos });
};

const selectVideo = (state, action) => {
    let i;
    if (typeof action.payload.id === "string") {
        i = state.shownVideos.findIndex((video) => video.id === action.payload.id);
    } else {
        i = state.shownVideos.findIndex((video) => video.id.videoId === action.payload.id.videoId);
    }

    const shownV2 = [...state.shownVideos];
    const selectedVideo = state.selectedVideo;

    if (selectedVideo) {
        shownV2.push(selectedVideo);
    }

    shownV2.splice(i, 1);
    return {
        ...state,
        shownVideos: shownV2,
        selectedVideo: action.payload,
    };
};
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_VIDEOS:
            return storeVideos(state, action);
        case actionTypes.LOAD_VIDEOS:
            return loadVideos(state);
        case "SELECT_VIDEO":
            return selectVideo(state, action);
        default:
            return state;
    }
};
