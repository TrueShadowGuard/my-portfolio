import React from "react";
import classes from "./Header.module.css";
import classNames from "classnames";
import Navbar from "./Navbar/Navbar.js";

const Header = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <div className={classes.nickname}>
                <p>shadow-guard</p>
            </div>
            <Navbar/>
        </div>
    );
};

export default Header;
