import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    loading: false,
    selected: false,
    listRef: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUESTED:
            return updateObject(state, { loading: action.payload });
        case actionTypes.SELECTED:
            return updateObject(state, { selected: action.payload });
        case actionTypes.GET_LIST_REF:
            return updateObject(state, { listRef: action.payload });
        case actionTypes.ERROR:
            return updateObject(state, { error: action.payload, loading: false });
        default:
            return state;
    }
};
