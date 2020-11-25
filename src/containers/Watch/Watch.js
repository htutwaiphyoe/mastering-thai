import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import VideoList from "../../components/VideoList/VideoList";
import VideoDetial from "../../components/VideoDetail/VideoDetial";
import * as actionCreators from "../../store/actions";
import classes from "./Watch.module.css";
const Watch = (props) => {
    const dispatch = useDispatch();
    const shownVideos = useSelector((state) => state.videos.shownVideos);
    const selectedVideo = useSelector((state) => state.videos.selectedVideo);
    const list = useSelector((state) => state.ui.listRef);
    const query = new URLSearchParams(props.location.search);
    let id = "";
    for (let params of query.entries()) {
        id = params[1];
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(actionCreators.selected(true));
        if (!selectedVideo && shownVideos.length === 0) {
            dispatch(actionCreators.loadVideos());
            dispatch(actionCreators.loadVideo(id));
        }
        if (!selectedVideo && shownVideos.length > 0) {
            dispatch(actionCreators.loadVideo(id));
        }
    }, [dispatch, selectedVideo, id, shownVideos.length]);

    if (!selectedVideo) {
        return <div>Loading...</div>;
    }
    return (
        <div className={classes.Watch}>
            <VideoDetial video={selectedVideo} />
            <VideoList videos={shownVideos} />
        </div>
    );
};

export default Watch;
