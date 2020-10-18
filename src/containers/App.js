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
        selected: false,
    };
    componentDidMount() {
        this.onLoadHandler();
    }

    onLoadHandler = async () => {
        const response = await youtube.get(`/videos`, {
            params: {
                chart: "mostPopular",
            },
        });

        this.setState({ videos: response.data.items });
        console.log(response.data.items);
    };

    onSelectHandler = (v) => {
        this.setState({ selectedVideo: v, selected: true });
        console.log(v);
    };

    show() {
        if (this.state.selectedVideo) {
            return (
                <div className={`${classes.App} ${classes.Select}`}>
                    <VideoDetial video={this.state.selectedVideo} />
                    <VideoList
                        videos={this.state.videos}
                        onSelectHandler={this.onSelectHandler}
                        selected={this.state.selected}
                    />
                </div>
            );
        }
        return (
            <div className={`${classes.App}`}>
                <VideoList
                    videos={this.state.videos}
                    onSelectHandler={this.onSelectHandler}
                    selected={this.state.selected}
                />
            </div>
        );
    }
    render() {
        return (
            <div>
                <Header>
                    <Logo />
                    <SearchBar />
                    <NavigationList icons={this.state.icons} />
                </Header>
                {this.show()}
            </div>
        );
    }
}

export default App;
