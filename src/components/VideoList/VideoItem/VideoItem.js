import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import Skeleton from "@material-ui/lab/Skeleton";
import classes from "./VideoItem.module.css";
import * as actionCreators from "../../../store/actions";
const VideoItem = (props) => {
    const dispatch = useDispatch();
    const selected = useSelector((state) => state.ui.selected);

    const { video } = props;
    const onClickHandler = () => {
        if (!video.loading) {
            dispatch(actionCreators.requested(true));
            dispatch(actionCreators.selectVideo(video));
            dispatch(actionCreators.selected(true));

            props.history.push(
                `/watch?${encodeURIComponent("v")}=${
                    typeof video.id === "object"
                        ? encodeURIComponent(video.id.videoId)
                        : encodeURIComponent(video.id)
                }`
            );
            window.scrollTo(0, 0);
            setTimeout(() => {
                dispatch(actionCreators.requested(false));
            }, 1000);
        }
    };
    return (
        <div className={classes.VideoItem} onClick={onClickHandler}>
            <div className={selected ? null : classes.Thunbnail}>
                {video.loading ? (
                    <Skeleton variant="rect" width="100%" height={180} />
                ) : (
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                        className={selected ? classes.ThumbnailImg : classes.ThumbnailImg2}
                    />
                )}
            </div>

            <div className={classes.VideoItemText}>
                {video.loading ? (
                    <React.Fragment>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </React.Fragment>
                ) : (
                    <p>{video.snippet.title}</p>
                )}
            </div>
        </div>
    );
};

export default withRouter(VideoItem);
