import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationList.module.css";
const NavigationList = (props) => {
    const items = props.icons.map((icon) => <NavigationItem icon={icon} key={icon} />);
    return <div className={classes.NavigationList}>{items}</div>;
};

export default NavigationList;
