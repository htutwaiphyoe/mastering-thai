import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionCreators from "../../store/actions";
import VideoList from "../../components/VideoList/VideoList";
const Home = (props) => {
    const dispatch = useDispatch();
    const shownVideos = useSelector((state) => state.videos.shownVideos);
    const list = useSelector((state) => state.ui.listRef);
    useEffect(() => {
        dispatch(actionCreators.selected(false));
        dispatch(actionCreators.loadVideos());
    }, [dispatch]);
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

export default Home;
