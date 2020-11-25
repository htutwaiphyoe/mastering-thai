import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    loading: false,
    selected: false,
    listRef: null,
    searched: false,
    query: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "START_LOADING":
            return { ...state, loading: true };
        case "STOP_LOADING":
            return { ...state, loading: false };
        case actionTypes.SELECTED:
            return updateObject(state, { selected: action.payload });
        case actionTypes.GET_LIST_REF:
            return updateObject(state, { listRef: action.payload });
        case "SET_QUERY":
            return { ...state, query: action.payload };

        default:
            return state;
    }
};
