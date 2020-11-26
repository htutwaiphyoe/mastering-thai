import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

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
    }, [dispatch]);

    const scrollHandler = useCallback(() => {
        if (list) {
            if (window.scrollY + window.innerHeight > (list.clientHeight * 4) / 5) {
                if (shownVideos.length !== 50) {
                    dispatch(actionCreators.scroll());
                }
            }
        }
    }, [list, dispatch, shownVideos.length]);
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [scrollHandler]);

    if (shownVideos.length === 0) {
        return <Redirect to="/" />;
    }
    return (
        <div className={classes.Watch}>
            <VideoDetial video={selectedVideo} />
            <VideoList videos={shownVideos} />
        </div>
    );
};

export default Watch;
