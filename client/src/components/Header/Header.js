import React from "react";
import classes from "./Header.module.css";
import classNames from "classnames";
import Navbar from "./Navbar/Navbar.js";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <div className={classes.portfolio}>
                <p>shadow-guard</p>
            </div>
            <Navbar/>
            <div className={classes.contacts}>
                <NavLink to={"/about-me#contacts"}>_contact-me</NavLink>
            </div>
        </div>
    );
};

export default Header;