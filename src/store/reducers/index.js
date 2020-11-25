import { combineReducers } from "redux";
import videosReducer from "./videosReducer";
import uiReducer from "./uiReducer";
export default combineReducers({
    videos: videosReducer,
    ui: uiReducer,
});
