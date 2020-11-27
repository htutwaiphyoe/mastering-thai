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
    const loading = useSelector((state) => state.ui.loading);
    const list = useSelector((state) => state.ui.listRef);
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
        window.scrollTo(0, 0);
        dispatch(actionCreators.selected(true));
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [dispatch, scrollHandler]);

    if (shownVideos.length === 0) {
        return <Redirect to="/" />;
    }

    if (loading) {
        return (
            <div className={classes.Watch}>
                <VideoDetial video={null} />
                <VideoList
                    videos={[
                        { id: 1, loading },
                        { id: 2, loading },
                        { id: 3, loading },
                        { id: 4, loading },
                        { id: 5, loading },
                    ]}
                />
            </div>
        );
    }
    return (
        <div className={classes.Watch}>
            <VideoDetial video={selectedVideo} />
            <VideoList videos={shownVideos} />
        </div>
    );
};

export default Watch;
