import React, { Component } from "react";
import classes from "./App.module.css";
import SearchBar from "./SearchBar/SearchBar";
class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <SearchBar />
            </div>
        );
    }
}

export default App;
