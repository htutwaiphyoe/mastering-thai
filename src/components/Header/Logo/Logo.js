import React from "react";
import logo from "../../../assets/img/log.webp";
import classes from "./Logo.module.css";
const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="VTube logo" />
        </div>
    );
};

export default Logo;
