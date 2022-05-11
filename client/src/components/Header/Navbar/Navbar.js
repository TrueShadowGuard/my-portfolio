import React from 'react';
import classes from "./Navbar.module.css";
import classNames from "classnames";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    const getLinkClass = (navData) => classNames({
       [classes.link]: true,
       [classes.active]:  navData.isActive
    });

    return (
        <nav className={classNames(classes.root, props.className)}>
            <ul className={classes.list}>
                <li><NavLink className={getLinkClass} to="/">_hello</NavLink></li>
                <li><NavLink className={getLinkClass} to="/about-me">_about-me</NavLink></li>
                <li><NavLink className={getLinkClass} to="/projects">_projects</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;