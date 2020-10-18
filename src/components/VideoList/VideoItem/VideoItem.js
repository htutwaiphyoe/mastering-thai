import React from "react";
import classes from "./VideoItem.module.css";
const VideoItem = (props) => {
    const { video, selected } = props;

    return (
        <div className={classes.VideoItem} onClick={() => props.onSelect(video)}>
            <div className={selected ? null : classes.Thunbnail}>
                <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className={selected ? classes.ThumbnailImg : classes.ThumbnailImg2}
                />
            </div>

            <div className={classes.VideoItemText}>
                <p>{props.video.snippet.title}</p>
            </div>
        </div>
    );
};

export default VideoItem;
