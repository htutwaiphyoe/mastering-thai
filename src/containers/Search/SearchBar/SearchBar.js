import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classes from "./SearchBar.module.css";
import * as actionCreators from "../../../store/actions";
const SearchBar = (props) => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const search = useSelector((state) => state.ui.search);
    const onChangeHandler = (event) => {
        setQuery(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(actionCreators.search(false));
        const q = query.trim();
        if (q) {
            dispatch(actionCreators.searchVideos(q));
            setQuery("");
            props.history.push({
                pathname: "/search",
                search: `?${encodeURIComponent("q")}=${encodeURIComponent(q)}`,
            });
        }
    };
    const closeSearchBar = () => {
        dispatch(actionCreators.search(false));
    };
    let searchBar2Classes = [classes.SearchBar2];
    if (search) {
        searchBar2Classes.push(classes.Open);
    }
    return (
        <React.Fragment>
            <div className={classes.SearchBar}>
                <form className={classes.SearchForm} onSubmit={onSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={classes.SearchInput}
                        value={query}
                        onChange={onChangeHandler}
                        autoComplete
                    />
                    <button type="submit" className={classes.SearchBtn}>
                        <i className={`search icon ${classes.SearchIcon}`}></i>
                    </button>
                </form>
            </div>
            <div className={searchBar2Classes.join(" ")}>
                <div className={classes.SearchClose} onClick={closeSearchBar}>
                    <i className={`arrow left icon ${classes.SearchCloseIcon}`}></i>
                </div>
                <form className={classes.SearchForm2} onSubmit={onSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={classes.SearchInput2}
                        value={query}
                        onChange={onChangeHandler}
                    />
                    <button type="submit" className={classes.SearchBtn}>
                        <i className={`search icon ${classes.SearchIcon}`}></i>
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default withRouter(SearchBar);
