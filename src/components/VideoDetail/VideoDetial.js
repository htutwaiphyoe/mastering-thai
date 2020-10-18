import React from "react";

const VideoDetial = (props) => {
    const { video } = props;
    const url = `https://www.youtube.com/embed/${
        props.search ? video.id.videoId : video.id
    }?autoplay=1`;
    const publishedAt = video.snippet.publishedAt.split("T");

    return (
        <div>
            <div className="ui embed">
                <iframe src={url} title={video.snippet.title} allowFullScreen />
            </div>
            <h1>{`${video.snippet.title} `}</h1>
            <p>{`Published: ${publishedAt.join(" ").replace("Z", "")}`}</p>
            <hr />
            <h2>{video.snippet.channelTitle}</h2>
            <p>{video.snippet.description}</p>
        </div>
    );
};

export default VideoDetial;
