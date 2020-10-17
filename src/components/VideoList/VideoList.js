import React from "react";
import VideoItem from "./VideoItem/VideoItem";
const VideoLlist = (props) => {
    const { videos } = props;
    const elements = videos.map((video) => <VideoItem video={video} key={video.id.videoId} />);
    return <div className="ui relaxed divided list">{elements}</div>;
};

export default VideoLlist;
