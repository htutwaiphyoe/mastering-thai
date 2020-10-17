import React from "react";

const VideoItem = (props) => {
    const { video } = props;
    return (
        <div className="item">
            <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="ui image"
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
