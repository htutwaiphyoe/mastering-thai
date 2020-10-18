import React from "react";
import VideoItem from "./VideoItem/VideoItem";
import classes from "./VideoList.module.css";
const VideoList = (props) => {
    const videos = props.videos.map((video) => (
        <VideoItem
            video={video}
            key={video.id}
            onSelect={props.onSelectHandler}
            selected={props.selected}
        />
    ));

    return <div className={props.selected ? "" : classes.VideoList}>{videos}</div>;
};

export default VideoList;
