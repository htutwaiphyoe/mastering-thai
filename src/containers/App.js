import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Header from "../components/Header/Header";
import Logo from "../components/Header/Logo/Logo";
import NavigationList from "../components/Header/NavigationList/NavigationList";
import youtube from "../api/youtube";
import VideoList from "../components/VideoList/VideoList";
import classes from "./App.module.css";
import VideoDetial from "../components/VideoDetail/VideoDetial";
class App extends React.Component {
    state = {
        icons: ["bell", "user"],
        videos: [],
        selectedVideo: null,
        shownVideos: [],
        selected: false,
        query: "",
        search: false,
        listRef: null,
        load: false,
    };
    componentDidMount() {
        this.onLoadHandler();
        window.addEventListener("scroll", () => {
            if (this.state.listRef) {
                if (window.scrollY + window.innerHeight > this.state.listRef.clientHeight) {
                    this.setState({ load: true });
                    this.onScrollHandler();
                }
            }
        });
    }

    getListRef = (el) => {
        if (el) {
            this.setState({ listRef: el });
        }
    };
    onLoadHandler = async () => {
        const response = await youtube.get(`/videos`, {
            params: {
                chart: "mostPopular",
            },
        });
        const responseVideos = response.data.items;
        responseVideos.forEach((video) => {
            video.selected = false;
        });
        const shownVideos = responseVideos.slice(0, 5);
        responseVideos.splice(0, 5);

        this.setState({ videos: responseVideos, selectedVideo: null, shownVideos });
        // this.addVideos(this.state.videos);
    };
    onSubmitHandler = async (q) => {
        const response = await youtube.get(`/search`, {
            params: {
                q,
            },
        });
        const responseVideos = response.data.items;
        const shownVideos = responseVideos.slice(0, 5);
        responseVideos.splice(0, 5);

        this.setState({
            videos: responseVideos,
            selectedVideo: null,
            selected: false,
            search: true,
            shownVideos,
        });
    };
    onScrollHandler = () => {
        if (this.state.load) {
            const videos = [...this.state.videos];
            const shownVideos = [...this.state.shownVideos, ...videos.slice(0, 5)];
            videos.splice(0, 5);

            this.setState({ shownVideos, load: false, videos });
        }
    };
    onSelectHandler = (v) => {
        let i;
        if (this.state.search) {
            i = this.state.shownVideos.findIndex((video) => video.id.videoId === v.id.videoId);
        } else {
            i = this.state.shownVideos.findIndex((video) => video.id === v.id);
        }
        const shownVideos = this.state.shownVideos;
        const selectedVideo = this.state.selectedVideo;

        if (selectedVideo) {
            shownVideos.push(selectedVideo);
        }

        shownVideos.splice(i, 1);
        this.setState({ selectedVideo: v, selected: true, shownVideos });
    };

    show() {
        if (this.state.selectedVideo) {
            return (
                <div className={`${classes.App} ${classes.Select}`}>
                    <VideoDetial video={this.state.selectedVideo} search={this.state.search} />
                    <VideoList
                        videos={this.state.shownVideos}
                        onSelectHandler={this.onSelectHandler}
                        selected={this.state.selected}
                        search={this.state.search}
                        getListRef={this.getListRef}
                    />
                </div>
            );
        }
        return (
            <div className={`${classes.App}`}>
                <VideoList
                    videos={this.state.shownVideos}
                    onSelectHandler={this.onSelectHandler}
                    selected={this.state.selected}
                    search={this.state.search}
                    getListRef={this.getListRef}
                />
            </div>
        );
    }
    render() {
        return (
            <div>
                <Header>
                    <Logo />
                    <SearchBar onSubmit={this.onSubmitHandler} />
                    <NavigationList icons={this.state.icons} />
                </Header>
                {this.show()}
            </div>
        );
    }
}

export default App;
