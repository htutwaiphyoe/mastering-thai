import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";
import Header from "../components/Header/Header";
import Logo from "../components/Header/Logo/Logo";
import NavigationList from "../components/Header/NavigationList/NavigationList";
import VideoList from "../components/VideoList/VideoList";
import classes from "./App.module.css";
import VideoDetial from "../components/VideoDetail/VideoDetial";
import * as actionCreators from "../actions";
class App extends React.Component {
    componentDidMount() {
        this.props.loadVideos();
        window.addEventListener("scroll", () => {
            if (this.props.list) {
                if (window.scrollY + window.innerHeight > this.props.list.clientHeight) {
                    this.props.loadRequest("START_LOADING");
                    this.props.scrollVideos();
                    this.props.loadRequest("STOP_LOADING");
                }
            }
        });
    }

    show() {
        if (this.props.selectedVideo) {
            return (
                <div className={`${classes.App} ${classes.Select}`}>
                    <VideoDetial />
                    <VideoList />
                </div>
            );
        }
        return (
            <div className={`${classes.App}`}>
                <VideoList />
            </div>
        );
    }
    render() {
        return (
            <React.Fragment>
                <Header>
                    <Logo />
                    <SearchBar />
                    <NavigationList />
                </Header>
                {this.show()}
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.ui.loading,
        selectedVideo: state.videos.selectedVideo,
        list: state.ui.listRef,
    };
};

const mapDispatchToProps = {
    loadVideos: actionCreators.loadVideos,
    loadRequest: actionCreators.loadRequest,
    scrollVideos: actionCreators.scrollVideos,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
