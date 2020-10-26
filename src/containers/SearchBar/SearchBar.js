import React from "react";
import { connect } from "react-redux";
import classes from "./SearchBar.module.css";
import * as actionCreators from "../../actions";
class SearchBar extends React.Component {
    onChangeHandler = (event) => {
        event.preventDefault();
        this.props.setQuery(event.target.value);
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        if (this.props.query.trim()) {
            this.props.searchVideo(this.props.query.trim());
        }
    };
    render() {
        return (
            <div className={classes.SearchBar} onSubmit={this.onSubmitHandler}>
                <form className={classes.SearchForm}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={classes.SearchInput}
                        value={this.props.query}
                        onChange={this.onChangeHandler}
                    />
                    <button type="submit" className={classes.SearchBtn}>
                        <i className={`search icon ${classes.SearchIcon}`}></i>
                    </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        query: state.ui.query,
    };
};
const mapDispatchToProps = {
    searchVideo: actionCreators.searchVideos,
    setQuery: actionCreators.setQuery,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
