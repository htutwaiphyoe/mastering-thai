import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import classes from "./SearchBar.module.css";
import * as actionCreators from "../../../store/actions";
const SearchBar = (props) => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const onChangeHandler = (event) => {
        setQuery(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const q = query.trim();
        if (q) {
            dispatch(actionCreators.searchVideos(q));
        }
        props.history.push({
            pathname: "/search",
            search: `?${encodeURIComponent("q")}=${encodeURIComponent(q)}`,
        });
    };

    return (
        <div className={classes.SearchBar}>
            <form className={classes.SearchForm} onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    placeholder="Search..."
                    className={classes.SearchInput}
                    value={query}
                    onChange={onChangeHandler}
                />
                <button type="submit" className={classes.SearchBtn}>
                    <i className={`search icon ${classes.SearchIcon}`}></i>
                </button>
            </form>
        </div>
    );
};

export default withRouter(SearchBar);
