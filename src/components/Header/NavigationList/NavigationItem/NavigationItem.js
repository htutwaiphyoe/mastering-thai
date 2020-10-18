import React from "react";
import classes from "./NavigationItem.module.css";
const NavigationItem = (props) => {
    return <i className={`${props.icon} icon ${classes.NavigationItem}`}></i>;
};

export default NavigationItem;
