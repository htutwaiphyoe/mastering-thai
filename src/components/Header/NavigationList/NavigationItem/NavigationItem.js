import React from "react";
import { useDispatch } from "react-redux";

import classes from "./NavigationItem.module.css";
import * as actionCreators from "../../../../store/actions";
const NavigationItem = (props) => {
    const cssClasses = [classes.NavigationItem];
    const dispatch = useDispatch();
    if (props.icon === "search") {
        cssClasses.push(classes.Search);
    }
    const onClickHandler = () => {
        if (props.icon === "search") {
            console.log("Search");
            dispatch(actionCreators.search(true));
        }
    };
    return (
        <i className={`${props.icon} icon ${cssClasses.join(" ")}`} onClick={onClickHandler}></i>
    );
};

export default NavigationItem;
