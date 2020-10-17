import React, { Component } from "react";
import classes from "./App.module.css";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar/SearchBar";
class App extends Component {
    state = {
        query: "",
        videos: [],
    };

    onSearchHandler = async (query) => {
        const response = await youtube.get("/search", {
            params: { q: query },
        });

        const oldVideos = [...this.state.videos];

        this.setState({ videos: [...oldVideos, ...response.data.items], query: query });
        console.log(this.state.videos);
    };
    render() {
        return (
            <div className={classes.App}>
                <SearchBar onSearchHandler={this.onSearchHandler} />
            </div>
        );
    }
}

export default App;
