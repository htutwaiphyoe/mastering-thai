import React from "react";
import { connect } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
const VideoDetial = (props) => {
    const { video } = props;
    if (video) {
        const url = `https://www.youtube.com/embed/${
            typeof video.id === "object" ? video.id.videoId : video.id
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
    } else {
        return (
            <div>
                <div className="ui embed">
                    <Skeleton variant="rect" width="100%" height={180} />
                </div>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <hr />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        video: state.videos.selectedVideo,
    };
};
export default connect(mapStateToProps)(VideoDetial);
