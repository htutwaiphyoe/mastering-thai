import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionCreators from "../../store/actions";
import VideoList from "../../components/VideoList/VideoList";
const Search = (props) => {
    const dispatch = useDispatch();
    const shownVideos = useSelector((state) => state.videos.shownVideos);
    const list = useSelector((state) => state.ui.listRef);
    const query = new URLSearchParams(props.location.search);
    let id = "";
    for (let params of query.entries()) {
        id = params[1];
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(actionCreators.selected(false));
        if (id) {
            dispatch(actionCreators.searchVideos(id));
        }
    }, [dispatch, id]);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (list) {
                if (window.scrollY + window.innerHeight > (list.clientHeight * 4) / 5) {
                    dispatch(actionCreators.scroll());
                }
            }
        });
    }, [list, dispatch]);
    return <VideoList videos={shownVideos} />;
};

export default Search;
