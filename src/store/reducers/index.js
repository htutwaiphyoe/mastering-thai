import { combineReducers } from "redux";
import videoReducer from "./videoReducer";
import uiReducer from "./uiReducer";
export default combineReducers({
    videos: videoReducer,
    ui: uiReducer,
});
