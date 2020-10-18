import React from "react";
import classes from "./SearchBar.module.css";
class SearchBar extends React.Component {
    render() {
        return (
            <div className={classes.SearchBar}>
                <form className={classes.SearchForm}>
                    <input type="text" placeholder="Search..." className={classes.SearchInput} />
                    <button type="submit" className={classes.SearchBtn}>
                        <i className={`search icon ${classes.SearchIcon}`}></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
