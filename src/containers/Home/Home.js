import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionCreators from "../../store/actions";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetial from "../../components/VideoDetail/VideoDetial";
const Home = (props) => {
    const dispatch = useDispatch();
    const shownVideos = useSelector((state) => state.videos.shownVideos);
    const selectedVideo = useSelector((state) => state.videos.selectedVideo);
    const list = useSelector((state) => state.ui.listRef);
    useEffect(() => {
        dispatch(actionCreators.loadVideos());
    }, [dispatch]);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (list) {
                if (window.scrollY + window.innerHeight > (list.clientHeight * 3) / 4) {
                    dispatch(actionCreators.scroll());
                    // this.props.loadRequest("START_LOADING");
                    // this.props.scrollVideos();
                    // this.props.loadRequest("STOP_LOADING");
                }
            }
        });
    }, [list, dispatch]);
    let components = <VideoList videos={shownVideos} />;
    if (selectedVideo) {
        components = (
            <React.Fragment>
                <VideoDetial video={selectedVideo} />
                <VideoList videos={shownVideos} />
            </React.Fragment>
        );
    }

    return components;
};

export default Home;
