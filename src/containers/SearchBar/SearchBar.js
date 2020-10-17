import React from "react";
import classes from "./SearchBar.module.css";
class SearchBar extends React.Component {
    state = {
        input: "",
    };

    onInputChange = (e) => {
        this.setState({
            input: e.target.value.trim(),
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.input) {
            console.log(this.state.input);
        }
    };
    render() {
        return (
            <div className={`ui segment  ${classes.SearchBar}`}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className={`ui icon input huge ${classes.SearchInput}`}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.input}
                            onChange={this.onInputChange}
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
