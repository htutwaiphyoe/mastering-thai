import React from "react";
import classes from "./SearchBar.module.css";
class SearchBar extends React.Component {
    state = {
        input: "",
    };

    onChangeHandler = (event) => {
        event.preventDefault();
        this.setState({ input: event.target.value });
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.input.trim()) {
            this.props.onSubmit(this.state.input.trim());
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
                        value={this.state.input}
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

export default SearchBar;
