import React from "react";
import classes from "./SearchBar.module.css";
import logo from "../../assets/img/log.webp";
class SearchBar extends React.Component {
    state = {
        input: "",
    };

    onChangeHandler = (e) => {
        this.setState({
            input: e.target.value,
        });
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.input.trim()) {
            this.props.onSearchHandler(this.state.input.trim());
        }
    };
    render() {
        return (
            <div className={`ui segment  ${classes.SearchBar}`}>
                <img src={logo} alt="VTube logo" />
                <form className="ui form" onSubmit={this.onSubmitHandler}>
                    <div className={`ui icon input huge ${classes.SearchInput}`}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.input}
                            onChange={this.onChangeHandler}
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
