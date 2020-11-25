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
    return updateObject(state, { responseVideos, shownVideos });
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

    const shownVideos = [...state.shownVideos];
    const selectedVideo = state.selectedVideo;

    if (selectedVideo) {
        shownVideos.push(selectedVideo);
    }

    shownVideos.splice(i, 1);
    return updateObject(state, { shownVideos, selectedVideo: action.payload });
};

const storeVideo = (state, action) => {
    let i;
    if (typeof action.payload.id === "string") {
        i = state.shownVideos.findIndex((video) => video.id === action.payload.id);
    } else {
        i = state.shownVideos.findIndex((video) => video.id.videoId === action.payload.id.videoId);
    }

    const shownVideos = [...state.shownVideos];

    shownVideos.splice(i, 1);
    return updateObject(state, { shownVideos, selectedVideo: action.payload });

    // return updateObject(state, { selectedVideo: action.payload });
};
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_VIDEOS:
            return storeVideos(state, action);
        case actionTypes.LOAD_VIDEOS:
            return loadVideos(state);
        case actionTypes.SELECT_VIDEO:
            return selectVideo(state, action);
        case actionTypes.STORE_VIDEO:
            return storeVideo(state, action);
        default:
            return state;
    }
};
