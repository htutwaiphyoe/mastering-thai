import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/img/log.webp";
import classes from "./Logo.module.css";
const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <Link to="/">
                <img src={logo} alt="VTube logo" />
            </Link>
        </div>
    );
};

export default Logo;
