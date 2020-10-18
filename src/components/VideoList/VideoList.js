import React, { useRef, useEffect } from "react";
import VideoItem from "./VideoItem/VideoItem";
import classes from "./VideoList.module.css";
const VideoList = (props) => {
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current !== null) {
            props.getListRef(listRef.current);
        }
    }, []);
    const videos = props.videos.map((video) => (
        <VideoItem
            video={video}
            key={props.search ? video.id.videoId : video.id}
            onSelect={props.onSelectHandler}
            selected={props.selected}
        />
    ));

    return (
        <div className={props.selected ? "" : classes.VideoList} ref={listRef}>
            {videos}
        </div>
    );
};

export default VideoList;
