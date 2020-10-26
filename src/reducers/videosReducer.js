const initialState = {
    responseVideos: [],
    shownVideos: [],
    selectedVideo: null,
};

const loadVideos = (state, action) => {
    const responseVideos = action.payload;
    responseVideos.forEach((video) => {
        video.selected = false;
    });
    const shownVideos = responseVideos.slice(0, 5);
    responseVideos.splice(0, 5);
    return {
        ...state,
        responseVideos,
        shownVideos,
        selectedVideo: null,
    };
};

const scrollVideos = (state) => {
    const responseV = [...state.responseVideos];
    const shownV = [...state.shownVideos, ...responseV.slice(0, 5)];
    responseV.splice(0, 5);
    return {
        ...state,
        responseVideos: responseV,
        shownVideos: shownV,
    };
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
        case "LOAD_VIDEOS":
            return loadVideos(state, action);
        case "SCROLL_VIDEOS":
            return scrollVideos(state);
        case "SELECT_VIDEO":
            return selectVideo(state, action);
        default:
            return state;
    }
};
