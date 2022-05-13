import React from 'react';
import classes from "./SubHeader.module.css";
import classNames from "classnames";

import triangle from "../../images/triangle.svg";
import cross from "../../images/cross.svg"

const SubHeader = ({header, tabName, ...props}) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <header className={classes.header}>
                <img className={classes.triangle} src={triangle} alt="triangle"/>
                {header}
            </header>
            <div className={classes.tabs}>
                <div className={classes.tab}>
                    {tabName}
                    <img className={classes.cross} src={cross} alt="cross"/>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;