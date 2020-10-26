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
        case "SELECTED_ON":
            return { ...state, selected: true };
        case "SELECTED_OFF":
            return { ...state, selected: false };
        case "GET_LIST_REF":
            return { ...state, listRef: action.payload };
        case "SET_QUERY":
            return { ...state, query: action.payload };

        default:
            return state;
    }
};
