import React, { useRef, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import VideoItem from "./VideoItem/VideoItem";
import classes from "./VideoList.module.css";
import * as actionCreators from "../../store/actions";
const VideoList = (props) => {
    const dispatch = useDispatch();
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current !== null) {
            dispatch(actionCreators.getListRef(listRef.current));
        }
    }, [dispatch]);
    const videos = props.videos.map((video) => (
        <VideoItem video={video} key={typeof video.id === "object" ? video.id.videoId : video.id} />
    ));

    return (
        <div className={props.selected ? "" : classes.VideoList} ref={listRef}>
            {videos}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        selected: state.ui.selected,
    };
};

const mapDispatchToProps = {
    getListRef: actionCreators.getListRef,
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
