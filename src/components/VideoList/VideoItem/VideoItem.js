import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import classes from "./VideoItem.module.css";
import * as actionCreators from "../../../store/actions";
const VideoItem = (props) => {
    const dispatch = useDispatch();
    const selected = useSelector((state) => state.ui.selected);
    const { video } = props;
    const onClickHandler = () => {
        dispatch(actionCreators.selectVideo(video));
        dispatch(actionCreators.selected(true));

        props.history.push(
            `/watch?${encodeURIComponent("v")}=${
                typeof video.id === "object"
                    ? encodeURIComponent(video.id.videoId)
                    : encodeURIComponent(video.id)
            }`
        );
    };
    return (
        <div className={classes.VideoItem} onClick={onClickHandler}>
            <div className={selected ? null : classes.Thunbnail}>
                <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className={selected ? classes.ThumbnailImg : classes.ThumbnailImg2}
                />
            </div>

            <div className={classes.VideoItemText}>
                <p>{video.snippet.title}</p>
            </div>
        </div>
    );
};

export default withRouter(VideoItem);
