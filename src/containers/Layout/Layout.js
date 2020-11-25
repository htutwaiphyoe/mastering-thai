import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import Header from "../../components/Header/Header";
import Logo from "../../components/Header/Logo/Logo";
import NavigationList from "../../components/Header/NavigationList/NavigationList";
import classes from "./Layout.module.css";
const Layout = (props) => {
    return (
        <React.Fragment>
            <Header>
                <Logo />
                <SearchBar />
                <NavigationList />
            </Header>
            <main className={classes.Layout}>{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;
