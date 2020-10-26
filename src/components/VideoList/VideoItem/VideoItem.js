import React from "react";
import { connect } from "react-redux";
import classes from "./VideoItem.module.css";
import * as actionCreators from "../../../actions";
const VideoItem = (props) => {
    const { video, selected } = props;
    const onClickHandler = () => {
        props.selectVideo(video);
        props.selected("SELECTED_ON");
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
                <p>{props.video.snippet.title}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selected: state.ui.selected,
    };
};

const mapDispatchToProps = {
    selectVideo: actionCreators.selectVideo,
    selected: actionCreators.selected,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoItem);
