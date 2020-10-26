import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import VideoItem from "./VideoItem/VideoItem";
import classes from "./VideoList.module.css";
import * as actionCreators from "../../actions";
const VideoList = (props) => {
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current !== null) {
            props.getListRef(listRef.current);
        }
    }, []);
    const videos = props.videos.map((video) => (
        <VideoItem video={video} key={typeof video.id === "object" ? video.id.videoId : video.id} />
    ));

    return (
        <div className={props.selected ? "" : classes.VideoList} ref={listRef}>
            {videos}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        selected: state.ui.selected,
        videos: state.videos.shownVideos,
    };
};

const mapDispatchToProps = {
    getListRef: actionCreators.getListRef,
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
